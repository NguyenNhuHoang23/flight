"use client";

import { useMutation } from "@tanstack/react-query";

import { OrderStatus } from "@/components/admin/orders/data";
import { parseAirportValue } from "@/components/ticket/ticket-utils";

export interface LookupPassenger {
  name: string;
  type: string;
  dateOfBirth: string;
  departBaggage: string;
  returnBaggage: string;
}

export interface LookupFlight {
  airline: string;
  airlineCode: string;
  flightNumber: string;
  departure: string;
  arrival: string;
  departureCity: string;
  arrivalCity: string;
  departTime: string;
  arrivalTime: string;
  departureAt: string;
  arrivalAt: string;
  tripType: "outbound" | "return";
  checkedBaggage: string;
}

export interface LookupOrder {
  id: string;
  status: OrderStatus;
  customerName: string;
  customerPhone: string;
  totalAmount: number;
  baggage: string;
  passengers: LookupPassenger[];
  flights: LookupFlight[];
}

interface LookupBookingPayload {
  orderCode: string;
  contactName: string;
}

interface ApiPassenger {
  full_name: string;
  passenger_type: string;
  date_of_birth: string | null;
  baggage?: string | null;
  depart_baggage?: string | null;
  return_baggage?: string | null;
  outbound_baggage?: string | null;
  checked_baggage?: string | null;
}

interface ApiFlight {
  airline_name: string;
  airline_code?: string | null;
  flight_number: string;
  departure_airport: string;
  arrival_airport: string;
  departure_at: string;
  arrival_at: string | null;
  trip_type?: "outbound" | "return" | null;
  baggage?: string | null;
  checked_baggage?: string | null;
}

interface ApiOrder {
  order_code: string;
  status: OrderStatus;
  contact_name: string | null;
  contact_phone: string | null;
  total_amount: string | number;
  baggage?: string | null;
  passengers: ApiPassenger[];
  flights: ApiFlight[];
}

interface LookupResponse {
  success: boolean;
  message?: string;
  data: ApiOrder;
}

const DEFAULT_BAGGAGE = "20KG KÝ GỬI";

function formatBaggage(value?: string | null): string {
  if (!value || value === "0") {
    return DEFAULT_BAGGAGE;
  }

  const trimmed = value.trim();

  if (/^\d+$/.test(trimmed)) {
    return `${trimmed}KG KÝ GỬI`;
  }

  return trimmed.toUpperCase();
}

function formatDateTime(date: string | null | undefined) {
  if (!date) {
    return "";
  }

  const match = date.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/);

  if (!match) {
    return date;
  }

  const [, year, month, day, hour, minute] = match;

  return `${hour}:${minute} ${day}/${month}/${year}`;
}

function mapOrder(order: ApiOrder): LookupOrder {
  const outboundFlight = (order.flights || []).find(
    (flight) => flight.trip_type === "outbound",
  );
  const returnFlight = (order.flights || []).find(
    (flight) => flight.trip_type === "return",
  );
  const primaryFlight = outboundFlight || order.flights?.[0];

  const orderBaggage = formatBaggage(
    primaryFlight?.checked_baggage ||
      primaryFlight?.baggage ||
      order.baggage,
  );

  return {
    id: order.order_code,
    status: order.status,
    customerName: order.contact_name || "Chưa có tên",
    customerPhone: order.contact_phone || "Chưa có SĐT",
    totalAmount: Number(order.total_amount || 0),
    baggage: orderBaggage,
    passengers: (order.passengers || []).map((passenger) => ({
      name: passenger.full_name,
      type:
        passenger.passenger_type === "adult"
          ? "Người lớn"
          : passenger.passenger_type === "child"
            ? "Trẻ em"
            : passenger.passenger_type === "infant"
              ? "Em bé"
              : passenger.passenger_type,
      dateOfBirth: passenger.date_of_birth || "",
      departBaggage: formatBaggage(
        passenger.depart_baggage ||
          passenger.outbound_baggage ||
          passenger.baggage ||
          passenger.checked_baggage ||
          outboundFlight?.checked_baggage ||
          order.baggage,
      ),
      returnBaggage: formatBaggage(
        passenger.return_baggage ||
          passenger.baggage ||
          passenger.checked_baggage ||
          returnFlight?.checked_baggage ||
          order.baggage,
      ),
    })),
    flights: (order.flights || []).map((flight) => {
      const departure = parseAirportValue(flight.departure_airport);
      const arrival = parseAirportValue(flight.arrival_airport);

      return {
        airline: flight.airline_name,
        airlineCode: flight.airline_code || "",
        flightNumber: flight.flight_number,
        departure: flight.departure_airport,
        arrival: flight.arrival_airport,
        departureCity: departure.city,
        arrivalCity: arrival.city,
        departTime: formatDateTime(flight.departure_at),
        arrivalTime: formatDateTime(flight.arrival_at),
        departureAt: flight.departure_at,
        arrivalAt: flight.arrival_at || "",
        tripType: flight.trip_type || "outbound",
        checkedBaggage: formatBaggage(
          flight.checked_baggage || flight.baggage || order.baggage,
        ),
      };
    }),
  };
}

export async function lookupBooking(
  payload: LookupBookingPayload,
): Promise<LookupOrder> {
  const response = await fetch("/api/order/lookup", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      order_code: payload.orderCode,
      contact_name: payload.contactName,
    }),
    cache: "no-store",
  });

  const result: LookupResponse = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(
      result.message ||
        "Không tìm thấy đơn hàng. Vui lòng kiểm tra lại mã đơn và tên liên hệ.",
    );
  }

  if (!result.data) {
    throw new Error(
      "Không tìm thấy đơn hàng. Vui lòng kiểm tra lại mã đơn và tên liên hệ.",
    );
  }

  return mapOrder(result.data);
}

export function useLookupBooking() {
  return useMutation({
    mutationFn: lookupBooking,
  });
}
