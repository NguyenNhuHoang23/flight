import React from "react";
import { ChevronUp } from "lucide-react";

import {
  AirlineInfo,
  ApiRootResponse,
  FareOptionAPI,
  FarePax,
  FlightSegment,
} from "./flight-types";

import { formatPrice, parseFullDate } from "./flight-utils";
import { FlightPriceTable } from "./FlightPriceTable";
import { FareConditions } from "./FareConditions";

interface Props {
  group?: ApiRootResponse["ListGroup"][number];
  airlineMeta: AirlineInfo;
  airlineCode: string;
  flightNumber: string;
  segmentData?: FlightSegment;
  depDateStr?: string;
  depTime: string;
  arrTime: string;
  equipmentCode: string;
  cheapestFare?: FareOptionAPI;
  listFarePax: FarePax[];
  totalPaxCount: number;
  totalGroupPrice: number;
  avgPricePerPax: number;
  handBaggage: string;
  freeBaggage: string;
  hasMeal: boolean;
  index: number;
  toggleExpand: (index: number) => void;
}

export const FlightDetail: React.FC<Props> = ({
  group,
  airlineMeta,
  flightNumber,
  segmentData,
  depDateStr,
  depTime,
  arrTime,
  equipmentCode,
  cheapestFare,
  listFarePax,
  totalPaxCount,
  totalGroupPrice,
  avgPricePerPax,
  handBaggage,
  freeBaggage,
  hasMeal,
  index,
  toggleExpand,
}) => {
  return (
    <div className="bg-white p-4 border-t border-b border-gray-300 text-xs text-gray-800 space-y-4">
      {/* Header */}
      <div className="flex justify-between items-start pb-2 border-b border-gray-100">
        <div>
          <div className="text-sm font-bold text-gray-900">
            {group?.StartPoint === "SGN" ? "TP Hồ Chí Minh" : group?.StartPoint}{" "}
            →{group?.EndPoint === "HAN" ? "Hà Nội" : group?.EndPoint}
          </div>

          <div className="text-gray-600 mt-0.5">
            {segmentData?.StartPoint || "Tân Sơn Nhất"}{" "}
            <span className="text-green-600">✈</span>{" "}
            {segmentData?.EndPoint || "Nội Bài"}
          </div>

          <div className="mt-1">
            Chuyến bay <strong className="text-gray-900">{flightNumber}</strong>
          </div>

          <div className="flex items-center gap-1.5 mt-1">
            <span className={`font-bold italic ${airlineMeta.color}`}>
              {airlineMeta.name}
            </span>

            <span className="text-gray-500">{airlineMeta.name}</span>
          </div>
        </div>

        <div className="text-right">
          <div className="font-bold text-sm text-gray-900">
            {parseFullDate(depDateStr) || "Thứ Bảy 01/08"}
          </div>

          <div className="text-gray-700 font-medium mt-0.5">
            {depTime} - {arrTime}
          </div>

          <div className="text-red-600 font-bold uppercase mt-1">
            {cheapestFare?.FareFamily || "TIẾT KIỆM"}
          </div>

          <div className="text-gray-500 mt-0.5">Airbus {equipmentCode}</div>
        </div>
      </div>

      {/* Price table */}
      <FlightPriceTable
        listFarePax={listFarePax}
        totalPaxCount={totalPaxCount}
        totalGroupPrice={totalGroupPrice}
        avgPricePerPax={avgPricePerPax}
      />

      {/* Fare conditions */}
      <FareConditions
        cheapestFare={cheapestFare}
        handBaggage={handBaggage}
        freeBaggage={freeBaggage}
        hasMeal={hasMeal}
      />

      {/* Collapse */}
      <div className="flex justify-end pt-2">
        <button
          onClick={() => toggleExpand(index)}
          className="text-xs text-blue-600 hover:underline flex items-center gap-1 font-medium"
        >
          Thu gọn
          <ChevronUp size={14} />
        </button>
      </div>
    </div>
  );
};
