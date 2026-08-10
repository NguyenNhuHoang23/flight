"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { FlightBookingForm } from "@/components/FlightBookingForm/FlightBookingForm";
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
    const loadBookingData = () => {
      try {
        const tripType = sessionStorage.getItem("booking_trip_type");
        const storedDepart = sessionStorage.getItem("selected_depart_flight");
        const storedReturn = sessionStorage.getItem("selected_return_flight");
        const storedLegacy = sessionStorage.getItem("selected_flight");

        let depart: AirOptionAPI | null = null;
        let returnF: AirOptionAPI | null = null;

        // PARSE CHUYẾN ĐI
        if (storedDepart) {
          depart = JSON.parse(storedDepart);
        } else if (storedLegacy) {
          const parsedLegacy = JSON.parse(storedLegacy);
          depart = parsedLegacy.airOption || parsedLegacy;
        }

        // PARSE CHUYẾN VỀ
        if (storedReturn) {
          returnF = JSON.parse(storedReturn);
        }

        // TỰ ĐỘNG XÁC ĐỊNH LOẠI CHUYẾN BAY (NẾU THIẾU KEY tripType)
        const isRoundTrip =
          tripType === "round-trip" || (Boolean(depart) && Boolean(returnF));

        setBookingData({
          departFlight: depart,
          returnFlight: isRoundTrip ? returnF : null,
          isRoundTrip,
        });
      } catch (error) {
        console.error("Lỗi đọc thông tin đặt vé từ sessionStorage:", error);
        setBookingData({
          departFlight: null,
          returnFlight: null,
          isRoundTrip: false,
        });
      } finally {
        setIsLoading(false);
      }
    };

    loadBookingData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="h-7 w-7 animate-spin text-[#006838]" />
          <p className="text-sm text-gray-600">
            Đang tải thông tin hành khách...
          </p>
        </div>
      </div>
    );
  }

  if (!bookingData.departFlight) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center gap-4 px-4">
        <p className="text-center text-sm text-gray-600">
          Không tìm thấy thông tin chuyến bay đã chọn.
          <br />
          Vui lòng thực hiện tìm kiếm lại.
        </p>

        <button
          type="button"
          onClick={() => router.push("/")}
          className="rounded-lg bg-[#006838] px-5 py-2.5 text-sm font-bold text-white shadow transition hover:bg-[#00522c]"
        >
          Quay lại tìm kiếm
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-0 py-5">
      <FlightBookingForm
        departFlight={bookingData.departFlight}
        returnFlight={bookingData.returnFlight}
        isRoundTrip={bookingData.isRoundTrip}
        onBack={() => router.back()}
      />
    </div>
  );
}
