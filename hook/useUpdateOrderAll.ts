"use client";

import { useEffect, useRef, useState } from "react";

import { TicketFormState } from "@/components/ticket/ticket-types";
import type { OrderDetail } from "@/hook/useGetOrderDetail";

export interface UpdateAllOrderPayload {
  order_code?: string;
  status?: string;
  passengers: Array<{
    id?: number;
    full_name: string;
    passenger_type?: string;
    document_type?: string | null;
    document_number?: string | null;
    date_of_birth?: string | null;
  }>;
  flights: Array<{
    id?: number;
    trip_type: "outbound" | "return";
    airline_name: string;
    airline_code?: string | null;
    flight_number: string;
    departure_airport: string;
    arrival_airport: string;
    departure_at: string;
    arrival_at?: string | null;
  }>;
}

interface UpdateOrderAllResponse {
  success: boolean;
  message?: string;
  data: OrderDetail;
  errors?: Record<string, string[]>;
}

function parseDobToApi(dob: string): string | null {
  const trimmed = dob.trim();

  if (!trimmed) {
    return null;
  }

  const viMatch = trimmed.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);

  if (viMatch) {
    const [, day, month, year] = viMatch;
    return `${year}-${month}-${day}`;
  }

  if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
    return trimmed;
  }

  return null;
}

function parseDepartDateParts(departDate: string) {
  const match = departDate.match(/(\d{2})\/(\d{2})\/(\d{4})/);

  if (!match) {
    return null;
  }

  const [, day, month, year] = match;

  return { day, month, year };
}

function normalizeDateTimeForApi(value?: string | null): string | null {
  if (!value) {
    return null;
  }

  if (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/.test(value)) {
    return value;
  }

  const match = value.match(
    /^(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})/,
  );

  if (match) {
    const [, year, month, day, hour, minute, second] = match;
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
  }

  return value;
}

function buildApiDateTime(
  departDate: string,
  time: string,
  fallback?: string | null,
) {
  const dateParts = parseDepartDateParts(departDate);
  const timeMatch = time.trim().match(/^(\d{2}):(\d{2})$/);

  if (dateParts && timeMatch) {
    const { day, month, year } = dateParts;
    const [, hour, minute] = timeMatch;

    return `${year}-${month}-${day} ${hour}:${minute}:00`;
  }

  return normalizeDateTimeForApi(fallback);
}

function mapTicketStatusToOrderStatus(ticketStatus: string) {
  switch (ticketStatus) {
    case "ĐÃ XÁC NHẬN":
      return "confirmed";
    case "ĐÃ THANH TOÁN":
      return "paid";
    case "ĐÃ HỦY":
      return "cancelled";
    case "ĐANG XỬ LÝ":
    case "CHỜ XÁC NHẬN":
      return "pending";
    default:
      return undefined;
  }
}

export function buildUpdateAllPayload(
  orderDetail: OrderDetail,
  ticketsData: TicketFormState[],
): UpdateAllOrderPayload {
  const primaryTicket = ticketsData[0];

  const passengers = (primaryTicket?.passengers || []).map(
    (passenger, index) => {
      const existingPassenger = orderDetail.passengers[index];

      return {
        ...(existingPassenger?.id ? { id: existingPassenger.id } : {}),
        full_name: passenger.name,
        passenger_type: existingPassenger?.passenger_type || "adult",
        document_type: existingPassenger?.document_type ?? null,
        document_number: existingPassenger?.document_number ?? null,
        date_of_birth:
          parseDobToApi(passenger.dob) ??
          existingPassenger?.date_of_birth ??
          null,
      };
    },
  );

  const flights = orderDetail.flights.map((flight, index) => {
    const ticket = ticketsData[index] ?? primaryTicket;

    const departureAt =
      buildApiDateTime(
        ticket.departDate,
        ticket.departTime,
        flight.departure_at,
      ) ||
      normalizeDateTimeForApi(flight.departure_at) ||
      flight.departure_at;

    const arrivalAt = ticket.arrivalTime
      ? buildApiDateTime(
          ticket.departDate,
          ticket.arrivalTime,
          flight.arrival_at,
        ) || normalizeDateTimeForApi(flight.arrival_at)
      : normalizeDateTimeForApi(flight.arrival_at);

    return {
      id: flight.id,
      trip_type: flight.trip_type,
      airline_name: flight.airline_name,
      airline_code: flight.airline_code,
      flight_number: ticket.flightNumber,
      departure_airport: ticket.departureCode.trim().slice(0, 10),
      arrival_airport: ticket.arrivalCode.trim().slice(0, 10),
      departure_at: departureAt,
      arrival_at: arrivalAt,
    };
  });

  const payload: UpdateAllOrderPayload = {
    passengers,
    flights,
  };

  if (primaryTicket?.pnr.trim()) {
    payload.order_code = primaryTicket.pnr.trim();
  }

  const mappedStatus = mapTicketStatusToOrderStatus(
    primaryTicket?.ticketStatus || "",
  );

  if (mappedStatus) {
    payload.status = mappedStatus;
  }

  return payload;
}

export async function updateOrderAll(
  token: string,
  orderId: string,
  orderDetail: OrderDetail,
  ticketsData: TicketFormState[],
): Promise<OrderDetail> {
  const payload = buildUpdateAllPayload(orderDetail, ticketsData);

  const response = await fetch(
    `/api/admin/order/${encodeURIComponent(orderId)}/all`,
    {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    },
  );

  if (response.status === 401) {
    localStorage.removeItem("admin-auth");
    window.location.href = "/admin/login";
    throw new Error("Phiên đăng nhập đã hết hạn");
  }

  const result: UpdateOrderAllResponse = await response.json();

  if (!response.ok || !result.success) {
    const validationMessage = result.errors
      ? Object.values(result.errors).flat().join(", ")
      : null;

    throw new Error(
      validationMessage || result.message || "Không thể cập nhật đơn hàng",
    );
  }

  return result.data;
}

type SaveStatus = "idle" | "pending" | "saving" | "saved" | "error";

interface UseDebouncedOrderSaveOptions {
  token: string;
  orderId: string;
  orderDetail: OrderDetail;
  ticketsData: TicketFormState[];
  debounceMs?: number;
  onSaved?: (order: OrderDetail) => void;
}

export function useDebouncedOrderSave({
  token,
  orderId,
  orderDetail,
  ticketsData,
  debounceMs = 800,
  onSaved,
}: UseDebouncedOrderSaveOptions) {
  const [saveStatus, setSaveStatus] = useState<SaveStatus>("idle");
  const [saveError, setSaveError] = useState<string | null>(null);

  const skipSaveRef = useRef(true);
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const saveRequestRef = useRef(0);

  useEffect(() => {
    skipSaveRef.current = true;
    setSaveStatus("idle");
    setSaveError(null);
  }, [orderDetail.id]);

  useEffect(() => {
    if (!token || !orderDetail || ticketsData.length === 0) {
      return;
    }

    if (skipSaveRef.current) {
      skipSaveRef.current = false;
      return;
    }

    setSaveStatus("pending");

    if (saveTimerRef.current) {
      clearTimeout(saveTimerRef.current);
    }

    saveTimerRef.current = setTimeout(async () => {
      const requestId = ++saveRequestRef.current;

      setSaveStatus("saving");
      setSaveError(null);

      try {
        const updatedOrder = await updateOrderAll(
          token,
          orderId,
          orderDetail,
          ticketsData,
        );

        if (requestId !== saveRequestRef.current) {
          return;
        }

        setSaveStatus("saved");
        skipSaveRef.current = true;
        onSaved?.(updatedOrder);
      } catch (error) {
        if (requestId !== saveRequestRef.current) {
          return;
        }

        setSaveStatus("error");
        setSaveError(
          error instanceof Error
            ? error.message
            : "Không thể cập nhật đơn hàng",
        );
      }
    }, debounceMs);

    return () => {
      if (saveTimerRef.current) {
        clearTimeout(saveTimerRef.current);
      }
    };
  }, [token, orderId, orderDetail, ticketsData, debounceMs, onSaved]);

  const saveStatusLabel =
    saveStatus === "pending"
      ? "Chờ lưu..."
      : saveStatus === "saving"
        ? "Đang lưu..."
        : saveStatus === "saved"
          ? "Đã lưu"
          : saveStatus === "error"
            ? saveError || "Lỗi khi lưu"
            : null;

  return {
    saveStatus,
    saveError,
    saveStatusLabel,
  };
}
