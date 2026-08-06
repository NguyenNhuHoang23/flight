"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { FlightBookingForm } from "@/components/form/FlightBookingForm";
import { AirOptionAPI } from "@/components/detail/flight-types";

export interface BookingDataState {
  departFlight: AirOptionAPI | null;
  returnFlight: AirOptionAPI | null;
  isRoundTrip: boolean;
}

export default function PassengerPage() {
  const router = useRouter();
  const [bookingData, setBookingData] = useState<BookingDataState>({
    departFlight: null,
    returnFlight: null,
    isRoundTrip: false,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1. Đọc dữ liệu từ sessionStorage
    const storedDepart = sessionStorage.getItem("selected_depart_flight");
    const storedReturn = sessionStorage.getItem("selected_return_flight");
    
    // Đọc fallback key cũ nếu có
    const storedLegacy = sessionStorage.getItem("selected_flight");

    let depart: AirOptionAPI | null = null;
    let returnF: AirOptionAPI | null = null;

    try {
      if (storedDepart) {
        depart = JSON.parse(storedDepart);
      } else if (storedLegacy) {
        // Hỗ trợ cấu trúc lưu trữ cũ (Legacy support)
        const parsedLegacy = JSON.parse(storedLegacy);
        depart = parsedLegacy.airOption || parsedLegacy;
      }

      if (storedReturn) {
        returnF = JSON.parse(storedReturn);
      }
    } catch (err) {
      console.error("Lỗi parse thông tin đặt vé từ sessionStorage:", err);
    }

    setBookingData({
      departFlight: depart,
      returnFlight: returnF,
      isRoundTrip: Boolean(depart && returnF),
    });

    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 gap-3">
        <Loader2 className="animate-spin text-[#006838]" size={40} />
        <p className="text-sm font-medium text-slate-600">
          Đang tải thông tin hành khách...
        </p>
      </div>
    );
  }

  // Nếu không tìm thấy chiều đi (truy cập trực tiếp URL mà chưa chọn vé)
  if (!bookingData.departFlight) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100 p-4 gap-4">
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 text-center max-w-md shadow-sm">
          <p className="text-slate-700 font-medium mb-4">
            Không tìm thấy thông tin chuyến bay đã chọn. Vui lòng thực hiện tìm kiếm lại.
          </p>
          <button
            type="button"
            onClick={() => router.push("/")}
            className="bg-[#006838] hover:bg-[#00522c] text-white px-5 py-2.5 rounded-lg text-sm font-bold transition shadow"
          >
            Quay lại tìm kiếm
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 py-6 px-2 sm:px-4">
      <FlightBookingForm
        departFlight={bookingData.departFlight}
        returnFlight={bookingData.returnFlight}
        isRoundTrip={bookingData.isRoundTrip}
        onBack={() => router.back()}
      />
    </main>
  );
}