"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { FlightBookingForm } from "@/components/form/FlightBookingForm";
import {
  AirOptionAPI,
  ApiRootResponse,
  FareOptionAPI,
} from "@/components/detail/flight-types";

interface SelectedBookingData {
  airOption: AirOptionAPI;
  cheapestFare?: FareOptionAPI;
  group?: ApiRootResponse["ListGroup"][number];
}

export default function PassengerPage() {
  const router = useRouter();
  const [bookingData, setBookingData] = useState<SelectedBookingData | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Đọc thông tin chuyến bay đã chọn từ sessionStorage
    const stored = sessionStorage.getItem("selected_flight");

    if (stored) {
      try {
        const parsed: SelectedBookingData = JSON.parse(stored);
        setBookingData(parsed);
      } catch (err) {
        console.error("Lỗi parse thông tin đặt vé:", err);
      }
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Loader2 className="animate-spin text-[#006838]" size={40} />
      </div>
    );
  }

  // Nếu không có dữ liệu (ví dụ truy cập trực tiếp URL), chuyển về trang tìm kiếm
  if (!bookingData || !bookingData.airOption) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-4">
        <p className="text-gray-600">
          Không tìm thấy thông tin chuyến bay đã chọn.
        </p>
        <button
          onClick={() => router.back()}
          className="bg-[#006838] text-white px-4 py-2 rounded text-sm font-medium"
        >
          Quay lại tìm kiếm
        </button>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 py-6">
      <FlightBookingForm
        airOption={bookingData.airOption}
        cheapestFare={bookingData.cheapestFare}
        group={bookingData.group}
        onBack={() => router.back()}
      />
    </main>
  );
}
