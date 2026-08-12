"use client";

import React, {
  useEffect,
  use,
  useState,
} from "react";

import { useRouter } from "next/navigation";

import { useGetOrderDetail } from "@/hook/useGetOrderDetail";
import { useAuthStore } from "@/store/auth-store";
import {
  buildTicketFormState,
  getAirlineBrand,
  mapApiOrderToTicketOrder,
} from "@/components/ticket/ticket-utils";
import {
  AirlineBrand,
  PassengerInfo,
  TicketFormState,
} from "@/components/ticket/ticket-types";
import TicketSidebar from "@/components/ticket/TicketSidebar";
import TicketPreview from "@/components/ticket/TicketPreview";

export default function CustomTicketPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const resolvedParams = use(params);
  const orderId = resolvedParams.id;

  const token = useAuthStore((state) => state.accessToken);

  const {
    data: orderDetailResponse,
    isLoading,
    isError,
    error,
  } = useGetOrderDetail(token || "", orderId);
  console.log("🚀 ~ CustomTicketPage ~ orderDetailResponse:", orderDetailResponse)

  const orderDetail = orderDetailResponse?.data;

  const order = orderDetail
    ? mapApiOrderToTicketOrder(orderDetail)
    : undefined;

  const outboundFlight = order?.flights[0];
  const inboundFlight = order?.flights[1];
  const isRoundTrip = (order?.flights.length ?? 0) > 1;

  const [activeFlightIndex, setActiveFlightIndex] =
    useState<number>(0);

  const [selectedBrand, setSelectedBrand] =
    useState<AirlineBrand>("vietnam_airlines");

  const [ticketsData, setTicketsData] = useState<
    TicketFormState[]
  >([]);

  useEffect(() => {
    if (!orderDetail?.flights?.length) {
      return;
    }

    const flights = orderDetail.flights;

    setTicketsData(
      flights.map((flight) =>
        buildTicketFormState(orderDetail, flight),
      ),
    );

    const firstFlight = flights[0];
    setSelectedBrand(
      getAirlineBrand(
        firstFlight.airline_code,
        firstFlight.airline_name,
      ),
    );
    setActiveFlightIndex(0);
  }, [orderDetail]);

  const customData =
    ticketsData[activeFlightIndex] ??
    (orderDetail?.flights[0]
      ? buildTicketFormState(
          orderDetail,
          orderDetail.flights[0],
        )
      : null);

  const handleInputChange = (
    field: keyof TicketFormState,
    value: string,
  ) => {
    setTicketsData((prev) => {
      const next = [...prev];
      next[activeFlightIndex] = {
        ...next[activeFlightIndex],
        [field]: value,
      };
      return next;
    });
  };

  const handlePassengerChange = (
    index: number,
    field: keyof PassengerInfo,
    value: string,
  ) => {
    setTicketsData((prev) => {
      const next = [...prev];
      const updatedPassengers = [
        ...next[activeFlightIndex].passengers,
      ];

      updatedPassengers[index] = {
        ...updatedPassengers[index],
        [field]: value,
      };

      next[activeFlightIndex] = {
        ...next[activeFlightIndex],
        passengers: updatedPassengers,
      };

      return next;
    });
  };

  const handleAddPassenger = () => {
    setTicketsData((prev) => {
      const next = [...prev];

      next[activeFlightIndex] = {
        ...next[activeFlightIndex],
        passengers: [
          ...next[activeFlightIndex].passengers,
          {
            name: "HÀNH KHÁCH MỚI",
            dob: "01/01/1990",
            seat: "",
            gate: "",
          },
        ],
      };

      return next;
    });
  };

  const handleRemovePassenger = (index: number) => {
    setTicketsData((prev) => {
      const next = [...prev];
      const updatedPassengers = next[
        activeFlightIndex
      ].passengers.filter((_, i) => i !== index);

      if (updatedPassengers.length === 0) {
        return prev;
      }

      next[activeFlightIndex] = {
        ...next[activeFlightIndex],
        passengers: updatedPassengers,
      };

      return next;
    });
  };

  if (isLoading) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-xl font-bold text-slate-700">
          Đang tải chi tiết đơn hàng #{orderId}...
        </h2>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-xl font-bold text-red-600">
          Không thể tải đơn hàng #{orderId}
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          {error instanceof Error
            ? error.message
            : "Đã xảy ra lỗi khi gọi API"}
        </p>
        <button
          onClick={() => router.back()}
          className="mt-4 px-4 py-2 bg-slate-800 text-white rounded"
        >
          Quay lại
        </button>
      </div>
    );
  }

  if (!order || !orderDetail || !customData) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-xl font-bold text-red-600">
          Không tìm thấy đơn hàng #{orderId}
        </h2>
        <button
          onClick={() => router.back()}
          className="mt-4 px-4 py-2 bg-slate-800 text-white rounded"
        >
          Quay lại
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <style jsx global>{`
        @media print {
          .no-print {
            display: none !important;
          }

          body {
            background-color: #fff !important;
          }

          .print-area {
            box-shadow: none !important;
            border: none !important;
            margin: 0 !important;
            padding: 0 !important;
          }
        }
      `}</style>

      <div className="no-print max-w-8xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-200">
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.back()}
            className="px-3 py-1.5 text-xs font-semibold bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 transition"
          >
            ← Quay lại danh sách
          </button>

          <h1 className="text-lg font-bold text-slate-800">
            Tùy biến & In vé đơn hàng:{" "}
            <span className="text-sky-600">{order.id}</span>
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              localStorage.setItem(
                `print_ticket_${orderId}`,
                JSON.stringify(customData),
              );

              window.open(
                `/admin/orders/${orderId}/print?brand=${selectedBrand}`,
                "_blank",
              );
            }}
            className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-lg shadow transition flex items-center gap-1.5"
          >
            🖨️ In Vé Ngay (
            {activeFlightIndex === 0 ? "Chiều đi" : "Chiều về"})
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <TicketSidebar
          isRoundTrip={isRoundTrip}
          activeFlightIndex={activeFlightIndex}
          setActiveFlightIndex={setActiveFlightIndex}
          outboundFlight={outboundFlight}
          inboundFlight={inboundFlight}
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
          customData={customData}
          handleInputChange={handleInputChange}
          handlePassengerChange={handlePassengerChange}
          handleAddPassenger={handleAddPassenger}
          handleRemovePassenger={handleRemovePassenger}
        />

        <TicketPreview
          selectedBrand={selectedBrand}
          customData={customData}
          isRoundTrip={isRoundTrip}
          activeFlightIndex={activeFlightIndex}
        />
      </div>
    </div>
  );
}
