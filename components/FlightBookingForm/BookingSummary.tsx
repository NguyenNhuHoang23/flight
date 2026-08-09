"use client";

import React from "react";
import { formatPrice } from "../detail/flight-utils";

import FlightSummary from "./FlightSummary";
import { FlightSummary as FlightSummaryData } from "./flight-booking-types";

interface BookingSummaryProps {
  departInfo: FlightSummaryData;
  returnInfo: FlightSummaryData | null;
  totalBaseFare: number;
  totalBookingPrice: number;
  totalPassengers: number;
  isRoundTrip: boolean;
}

export default function BookingSummary({
  departInfo,
  returnInfo,
  totalBaseFare,
  totalBookingPrice,
  totalPassengers,
  isRoundTrip,
}: BookingSummaryProps) {
  const totalTaxAndFee = totalBookingPrice - totalBaseFare;

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
      <FlightSummary
        flight={departInfo}
        showBorder={isRoundTrip && !!returnInfo}
      />

      {isRoundTrip && returnInfo && (
        <FlightSummary flight={returnInfo} showBorder />
      )}

      <div className="pt-2 space-y-3 text-sm">
        <div className="flex justify-between items-center text-slate-600">
          <span>Đã bao gồm thuế + phí x {totalPassengers} người</span>

          <span className="font-semibold text-slate-800">
            {formatPrice(totalBookingPrice)} đ
          </span>
        </div>

        {/* Tổng thanh toán */}
        <div className="flex justify-between items-center font-bold text-base pt-4 border-t border-dashed border-slate-300">
          <span className="text-slate-800">Tổng thanh toán</span>

          <span className="text-[#FF4D15] text-xl font-extrabold">
            {formatPrice(totalBookingPrice)} đ
          </span>
        </div>
      </div>
    </div>
  );
}
