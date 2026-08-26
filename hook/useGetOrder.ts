"use client";

import { Order, OrderStatus } from "@/components/admin/orders/data";
import { useCallback, useEffect, useState } from "react";

interface ApiFlight {
  id: number;
  order_id: number;

  airline_code: string;
  airline_name: string;
  flight_number: string;

  departure_airport: string;
  arrival_airport: string;

  departure_at: string;
  arrival_at: string | null;

  trip_type: "outbound" | "return" | string;
  checked_baggage?: string | null;

  created_at: string;
  updated_at: string;
}

interface ApiPassenger {
  id: number;
  order_id: number;

  full_name: string;

  passenger_type: "adult" | "child" | "infant" | string;

  document_type: string | null;
  document_number: string | null;
  date_of_birth: string | null;
  created_at: string;
  updated_at: string;
}

interface ApiOrder {
  id: number;
  order_code: string;

  booking_at: string;

  contact_name: string | null;
  contact_phone: string | null;
  contact_email: string | null;

  total_amount: string | number;

  payment_method: string | null;
  payment_bill_image: string | null;
  transfer_content: string | null;

  status: OrderStatus;

  created_at: string;
  updated_at: string;

  passengers: ApiPassenger[];
  flights: ApiFlight[];
}

interface PaginationResponse {
  current_page: number;

  data: ApiOrder[];

  first_page_url: string;

  from: number | null;

  last_page: number;

  last_page_url: string;

  next_page_url: string | null;

  path: string;

  per_page: number;

  prev_page_url: string | null;

  to: number | null;

  total: number;
}

interface OrderApiResponse {
  success: boolean;
  message?: string;
  data: PaginationResponse;
}

// ======================================================
// FORMAT DATE - GIỮ NGUYÊN GIỜ API
// ======================================================
//
// API:
// 2026-08-10T22:50:00.000000Z
//
// Kết quả:
// 22:50 10/08/2026
//
// KHÔNG new Date()
// KHÔNG toLocaleString()
// KHÔNG cộng/trừ timezone
// ======================================================

function formatDate(date: string | null | undefined) {
  if (!date) {
    return "Chưa có";
  }

  try {
    // Lấy trực tiếp phần ngày giờ từ string API
    //
    // 2026-08-10T22:50:00.000000Z
    //        ↓
    // 2026-08-10
    // 22:50
    //
    const match = date.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/);

    if (!match) {
      return date;
    }

    const [, year, month, day, hour, minute] = match;

    return `${hour}:${minute} ${day}/${month}/${year}`;
  } catch {
    return date;
  }
}

// ======================================================
// MAP API ORDER -> UI ORDER
// ======================================================

function mapOrder(order: ApiOrder): Order {
  const flights = order.flights || [];

  const passengers = order.passengers || [];

  const hasReturnFlight = flights.some(
    (flight) => flight.trip_type === "return",
  );

  return {
    // ==================================================
    // ORDER
    // ==================================================

    id: order.order_code,

    status: order.status,

    createdAt: formatDate(order.created_at),

    customerName: order.contact_name || "Chưa có tên",

    customerPhone: order.contact_phone || "Chưa có SĐT",

    customerEmail: order.contact_email || "Chưa có email",

    totalAmount: Number(order.total_amount || 0),

    paymentProofUrl: order.payment_bill_image || undefined,

    paymentMethod: order.payment_method,

    transferContent: order.transfer_content || "",

    // ==================================================
    // FLIGHT TYPE
    // ==================================================

    flightType: hasReturnFlight ? "round_trip" : "one_way",

    // ==================================================
    // PASSENGERS
    // ==================================================

    passengers: passengers.map((passenger) => ({
      name: passenger.full_name,

      type:
        passenger.passenger_type === "adult"
          ? "Người lớn"
          : passenger.passenger_type === "child"
            ? "Trẻ em"
            : passenger.passenger_type === "infant"
              ? "Em bé"
              : passenger.passenger_type,

      passportOrCccd: passenger.document_number || "Chưa có",

      dateOfBirth: passenger.date_of_birth || "Chưa có",
    })),

    // ==================================================
    // FLIGHTS
    // ==================================================

    flights: flights.map((flight) => ({
      logo: flight.airline_code || "✈️",

      airline: flight.airline_name,

      flightNumber: flight.flight_number,

      departure: flight.departure_airport,

      arrival: flight.arrival_airport,

      // ============================================
      // GIỜ ĐI
      // ============================================

      departTime: formatDate(flight.departure_at),

      // ============================================
      // GIỜ ĐẾN
      // ============================================

      arrivalTime: formatDate(flight.arrival_at),

      seatClass: "Phổ thông",

      checkedBaggage: flight.checked_baggage || null,
    })),
  };
}

// ======================================================
// HOOK
// ======================================================

export function useGetOrders(token: string | null) {
  const [orders, setOrders] = useState<Order[]>([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);

  // ====================================================
  // PAGINATION
  // ====================================================

  const [currentPage, setCurrentPage] = useState(1);

  const [perPage, setPerPage] = useState(3);

  const [lastPage, setLastPage] = useState(1);

  const [total, setTotal] = useState(0);

  const [from, setFrom] = useState<number | null>(null);

  const [to, setTo] = useState<number | null>(null);

  // ====================================================
  // GET ORDERS
  // ====================================================

  const fetchOrders = useCallback(
    async (page = 1, limit = 3) => {
      try {
        setLoading(true);

        setError(null);

        if (!token) {
          throw new Error("Không tìm thấy token đăng nhập");
        }

        const response = await fetch(
          `/api/admin/order?page=${page}&per_page=${limit}`,
          {
            method: "GET",

            headers: {
              Accept: "application/json",

              Authorization: `Bearer ${token}`,
            },

            cache: "no-store",
          },
        );

              if (response.status === 401) {
        localStorage.removeItem("admin-auth");

        window.location.href = "/admin/login";

        return [];
      }

        const result: OrderApiResponse = await response.json();


        if (!response.ok || !result.success) {
          throw new Error(result.message || "Không thể lấy danh sách đơn hàng");
        }

        // ==================================================
        // PAGINATION
        // ==================================================

        const pagination = result.data;

        const apiOrders = Array.isArray(pagination?.data)
          ? pagination.data
          : [];

        // ==================================================
        // MAP API -> UI
        // ==================================================

        const mappedOrders = apiOrders.map(mapOrder);

        console.log("🚀 MAPPED ORDERS:", mappedOrders);

        setOrders(mappedOrders);

        setCurrentPage(pagination.current_page);

        setLastPage(pagination.last_page);

        setPerPage(pagination.per_page);

        setTotal(pagination.total);

        setFrom(pagination.from);

        setTo(pagination.to);

        return mappedOrders;
      } catch (err) {
        console.error("GET ORDERS ERROR:", err);

        const message =
          err instanceof Error
            ? err.message
            : "Không thể lấy danh sách đơn hàng";

        setError(message);

        setOrders([]);

        throw new Error(message);
      } finally {
        setLoading(false);
      }
    },
    [token],
  );

  // ====================================================
  // AUTO LOAD
  // ====================================================

  useEffect(() => {
    if (token) {
      fetchOrders(1, perPage);
    }
  }, [token]);

  // ====================================================
  // GO TO PAGE
  // ====================================================

  const goToPage = async (page: number) => {
    if (page < 1 || page > lastPage || loading) {
      return;
    }

    await fetchOrders(page, perPage);
  };

  // ====================================================
  // NEXT
  // ====================================================

  const nextPage = async () => {
    if (currentPage < lastPage) {
      await goToPage(currentPage + 1);
    }
  };

  // ====================================================
  // PREVIOUS
  // ====================================================

  const previousPage = async () => {
    if (currentPage > 1) {
      await goToPage(currentPage - 1);
    }
  };

  // ====================================================
  // CHANGE PER PAGE
  // ====================================================

  const changePerPage = async (value: number) => {
    setPerPage(value);

    await fetchOrders(1, value);
  };

  // ====================================================
  // RETURN
  // ====================================================

  return {
    orders,

    loading,

    error,

    refetch: () => fetchOrders(currentPage, perPage),

    // Pagination
    currentPage,

    lastPage,

    perPage,

    total,

    from,

    to,

    goToPage,

    nextPage,

    previousPage,

    changePerPage,
  };
}
