"use client";

import { useMutation } from "@tanstack/react-query";

export interface PassengerPayload {
  full_name: string;
  passenger_type?: string;
  document_type?: string;
  document_number?: string;
  date_of_birth?: string;
}

export interface FlightPayload {
  trip_type: "outbound" | "return";
  airline_name: string;
  airline_code?: string;
  flight_number: string;
  departure_airport: string;
  arrival_airport: string;
  departure_at: string;
  arrival_at?: string;
  checked_baggage?: string | null;
}

export interface CreateOrderPayload {
  booking_at: string;
  contact_name: string;
  contact_phone: string;
  contact_email?: string;
  total_amount: number;
  payment_method?: string;
  transfer_content?: string;
  payment_bill_image?: File | null;

  passengers: PassengerPayload[];
  flights: FlightPayload[];
}

export interface UpdateOrderBillPayload {
  transfer_content?: string;
  payment_bill_image?: File | null;
}

export function useCreateOrder() {
  return useMutation({
    mutationFn: async (payload: CreateOrderPayload) => {
      const formData = new FormData();

      // ==========================================
      // ORDER
      // ==========================================

      formData.append("booking_at", payload.booking_at);

      formData.append("contact_name", payload.contact_name);

      formData.append("contact_phone", payload.contact_phone);

      if (payload.contact_email) {
        formData.append("contact_email", payload.contact_email);
      }

      formData.append("total_amount", String(payload.total_amount));

      if (payload.payment_method) {
        formData.append("payment_method", payload.payment_method);
      }

      if (payload.transfer_content) {
        formData.append("transfer_content", payload.transfer_content);
      }

      if (payload.payment_bill_image) {
        formData.append("payment_bill_image", payload.payment_bill_image);
      }

      // ==========================================
      // PASSENGERS
      // ==========================================

      payload.passengers.forEach((passenger, index) => {
        formData.append(`passengers[${index}][full_name]`, passenger.full_name);

        formData.append(
          `passengers[${index}][passenger_type]`,
          passenger.passenger_type ?? "adult",
        );

        if (passenger.date_of_birth) {
          formData.append(
            `passengers[${index}][date_of_birth]`,
            passenger.date_of_birth,
          );
        }

        if (passenger.document_type) {
          formData.append(
            `passengers[${index}][document_type]`,
            passenger.document_type,
          );
        }

        if (passenger.document_number) {
          formData.append(
            `passengers[${index}][document_number]`,
            passenger.document_number,
          );
        }
      });

      // ==========================================
      // FLIGHTS
      // ==========================================

      payload.flights.forEach((flight, index) => {
        console.log("🚀 ~ useCreateOrder ~ flight:", flight);
        formData.append(`flights[${index}][trip_type]`, flight.trip_type);

        formData.append(`flights[${index}][airline_name]`, flight.airline_name);

        if (flight.airline_code) {
          formData.append(
            `flights[${index}][airline_code]`,
            flight.airline_code,
          );
        }

        formData.append(
          `flights[${index}][flight_number]`,
          flight.flight_number,
        );

        formData.append(
          `flights[${index}][departure_airport]`,
          flight.departure_airport,
        );

        formData.append(
          `flights[${index}][arrival_airport]`,
          flight.arrival_airport,
        );

        formData.append(`flights[${index}][departure_at]`, flight.departure_at);

        if (flight.arrival_at) {
          formData.append(`flights[${index}][arrival_at]`, flight.arrival_at);
        }

        if (flight.checked_baggage) {
          formData.append(
            `flights[${index}][checked_baggage]`,
            flight.checked_baggage,
          );
        }
      });

      // ==========================================
      // CALL NEXT.JS PROXY
      // ==========================================

      const response = await fetch("/api/admin/order", {
        method: "POST",
        body: formData,
      });
      console.log("🚀 ~ useCreateOrder ~ response:", response);

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Không thể tạo đơn hàng");
      }

      return data;
    },
  });
}

export function useUpdateOrderBill(orderCode: string) {
  return useMutation({
    mutationFn: async (payload: UpdateOrderBillPayload) => {
      console.log("🚀 ~ useUpdateOrderBill ~ payload:", payload);

      if (!orderCode) {
        throw new Error("Không tìm thấy mã đơn hàng");
      }

      const formData = new FormData();

      // Laravel method spoofing
      formData.append("_method", "PATCH");

      if (payload.transfer_content) {
        formData.append("transfer_content", payload.transfer_content);
      }

      if (payload.payment_bill_image) {
        formData.append("payment_bill_image", payload.payment_bill_image);
      }

      const response = await fetch(
        `/api/admin/order/${encodeURIComponent(orderCode)}`,
        {
          method: "POST",
          body: formData,
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Không thể cập nhật bill thanh toán");
      }

      return data;
    },
  });
}
