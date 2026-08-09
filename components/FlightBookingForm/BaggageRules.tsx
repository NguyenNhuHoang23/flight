"use client";

import React from "react";
import { Luggage } from "lucide-react";

import { FlightSummary } from "./flight-booking-types";

interface BaggageRulesProps {
  departInfo: FlightSummary;
  returnInfo: FlightSummary | null;
}

export default function BaggageRules({
  departInfo,
  returnInfo,
}: BaggageRulesProps) {
  return (
    <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-sm text-slate-600 space-y-2">
      <div className="font-bold text-slate-800 flex items-center gap-2">
        <Luggage className="w-4 h-4 text-[#006838]" />
        Quy định hành lý xách tay
      </div>

      <ul className="list-disc list-inside space-y-1 ml-1">
        <li>
          Chiều đi <strong>{departInfo.airlineMeta.name}</strong>: 01 kiện xách
          tay (max 7kg - 56x36x23cm) + 01 túi cá nhân nhỏ.
        </li>

        {returnInfo && (
          <li>
            Chiều về <strong>{returnInfo.airlineMeta.name}</strong>: 01 kiện
            xách tay (max 7kg - 56x36x23cm).
          </li>
        )}
      </ul>
    </div>
  );
}
