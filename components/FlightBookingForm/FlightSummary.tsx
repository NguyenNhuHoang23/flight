"use client";

import React from "react";
import { Plane, Ticket } from "lucide-react";

import { FlightSummary as FlightSummaryData } from "./flight-booking-types";

interface FlightSummaryProps {
  flight: FlightSummaryData;
  showBorder?: boolean;
  direction?: "departure" | "return";
}

export default function FlightSummary({
  flight,
  showBorder = true,
  direction = "departure",
}: FlightSummaryProps) {
  console.log("🚀 ~ FlightSummary ~ direction:", direction);
  const isReturn = direction === "return";

  return (
    <div
      className={`rounded-lg border border-slate-200 bg-white overflow-hidden ${
        showBorder ? "mb-3" : ""
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2 bg-slate-50 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center ${
              isReturn ? "bg-orange-100" : "bg-emerald-100"
            }`}
          >
            <Plane
              className={`w-3.5 h-3.5 ${
                isReturn ? "text-orange-600 rotate-180" : "text-[#006838]"
              }`}
            />
          </div>

          <span
            className={`text-[11px] font-extrabold uppercase ${
              isReturn ? "text-orange-600" : "text-[#006838]"
            }`}
          >
            {isReturn ? "Chiều về" : "Chiều đi"}
          </span>

          <span className="text-slate-300">•</span>

          <span className="text-[11px] font-medium text-slate-500">
            {flight.departDate}
          </span>
        </div>

        {/* Mã chuyến */}
        <div className="flex items-center gap-1 text-[10px] font-bold text-slate-600">
          <Ticket className="w-3 h-3 text-slate-400" />
          {flight.flightNumber}
        </div>
      </div>

      {/* Route */}
      <div className="px-3 py-3">
        <div className="flex items-center gap-2">
          {/* Điểm đi */}
          <div className="w-[60px] shrink-0">
            <p className="text-[9px] text-slate-400 uppercase">Đi</p>

            <div className="flex items-baseline gap-1">
              <span className="text-lg font-extrabold text-slate-800">
                {flight.startPoint}
              </span>

              <span className="text-xs font-bold text-slate-600">
                {flight.depTime}
              </span>
            </div>
          </div>

          {/* Đường bay */}
          <div className="flex-1 flex items-center gap-1.5">
            <div className="h-px flex-1 bg-slate-300" />

            <Plane
              className={`w-3.5 h-3.5 text-[#006838] shrink-0 ${
                isReturn ? "rotate-180" : ""
              }`}
            />

            <div className="h-px flex-1 bg-slate-300" />
          </div>

          {/* Điểm đến */}
          <div className="w-[60px] shrink-0 text-right">
            <p className="text-[9px] text-slate-400 uppercase">Đến</p>

            <div className="flex items-baseline justify-end gap-1">
              <span className="text-xs font-bold text-slate-600">
                {flight.arrTime}
              </span>

              <span className="text-lg font-extrabold text-slate-800">
                {flight.endPoint}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Airline */}
      <div className="flex items-center justify-between px-3 py-2 border-t border-slate-100 bg-slate-50/50">
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-xs font-bold text-[#006838] truncate">
            {flight.airlineMeta.name}
          </span>

          <span className="text-[10px] text-slate-400">•</span>

          <span className="text-[10px] text-slate-500">
            Airbus {flight.equipmentCode}
          </span>
        </div>

        <span className="shrink-0 text-[9px] font-bold text-[#006838] bg-emerald-50 px-1.5 py-0.5 rounded">
          TIẾT KIỆM
        </span>
      </div>
    </div>
  );
}
