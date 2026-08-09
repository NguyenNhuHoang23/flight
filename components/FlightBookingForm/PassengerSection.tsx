"use client";

import React from "react";

import { PassengerFormState, FlightSummary } from "./flight-booking-types";
import PassengerItem from "./PassengerItem";

interface PassengerSectionProps {
  passengers: PassengerFormState[];
  departInfo: FlightSummary;
  returnInfo: FlightSummary | null;
  isRoundTrip: boolean;
  currentYear: number;
  onPassengerChange: (
    index: number,
    field: keyof PassengerFormState,
    value: string,
  ) => void;
}

export default function PassengerSection({
  passengers,
  departInfo,
  returnInfo,
  isRoundTrip,
  currentYear,
  onPassengerChange,
}: PassengerSectionProps) {
  return (
    <div className="bg-white p-5 md:p-7 rounded-2xl border border-slate-200/80 shadow-sm space-y-6">
      <div>
        <h3 className="font-bold text-slate-800 text-sm md:text-base uppercase flex items-center gap-2 border-b border-slate-100 pb-4">
          <span className="w-6 h-6 rounded-full bg-[#006838] text-white flex items-center justify-center text-xs font-semibold shadow-sm">
            1
          </span>
          Thông tin hành khách
        </h3>

        <div className="flex items-center gap-2 mt-4 text-sm text-slate-600">
          <span>
            Đi:{" "}
            <strong className="text-slate-800">
              {departInfo.airlineMeta.name}
            </strong>
          </span>

          {returnInfo && (
            <>
              <span className="text-slate-300">|</span>

              <span>
                Về:{" "}
                <strong className="text-slate-800">
                  {returnInfo.airlineMeta.name}
                </strong>
              </span>
            </>
          )}
        </div>
      </div>

      <div className="space-y-8">
        {passengers.map((passenger, index) => (
          <PassengerItem
            key={passenger.id}
            passenger={passenger}
            index={index}
            currentYear={currentYear}
            isRoundTrip={isRoundTrip && !!returnInfo}
            isLast={index === passengers.length - 1}
            onChange={onPassengerChange}
          />
        ))}
      </div>
    </div>
  );
}
