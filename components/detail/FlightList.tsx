import React from "react";
import { CalendarX } from "lucide-react";

import { AirOptionAPI, ApiRootResponse } from "./flight-types";
import { FlightRow } from "./FlightRow";
import type { AirlineDiscountResult } from "@/hook/useAirlineDiscounts";

interface Props {
  group?: ApiRootResponse["ListGroup"][number];
  airOptions: AirOptionAPI[];
  showTotalPrice: boolean;
  expandedIndices: number[];
  toggleExpand: (index: number) => void;
  onSelectFlight?: (flight: AirOptionAPI) => void;
  selectedFlight?: AirOptionAPI | null;
  airlineDiscounts?: AirlineDiscountResult | null;
}

export const FlightList: React.FC<Props> = ({
  group,
  airOptions,
  showTotalPrice,
  expandedIndices,
  toggleExpand,
  onSelectFlight,
  selectedFlight,
  airlineDiscounts,
}) => {
  if (!airOptions || airOptions.length === 0) {
    return (
      <div className="bg-white p-6 sm:p-8 text-center rounded-xl border border-slate-200 flex flex-col items-center justify-center gap-2 shadow-sm">
        <CalendarX className="w-9 h-9 text-slate-300" />

        <p className="text-xs sm:text-sm font-medium text-slate-500">
          Không tìm thấy chuyến bay phù hợp cho ngày đã chọn.
        </p>
      </div>
    );
  }

  /**
   * Lấy discount + note theo hãng của chuyến bay
   */
  const getAirlineDiscountInfo = (
    airOption: AirOptionAPI,
  ): { discountPercent: number; note: string } => {
    const flight = airOption.ListFlightOption?.[0]?.ListFlight?.[0];

    if (!airlineDiscounts) {
      return { discountPercent: 0, note: "" };
    }

    const airlineCode =
      airOption.Airline || flight?.AirlineCode || flight?.Airline;

    if (!airlineCode) {
      return {
        discountPercent: Number(airlineDiscounts.defaultDiscount) || 0,
        note: "",
      };
    }

    const dataComCode = airlineCode.trim().toUpperCase();

    const airlineCodeMap: Record<string, string> = {
      VN: "VNA",
      VJ: "VIETJET",
      QH: "BAMBOO",
      VU: "VIETRAVEL",
      BL: "JETSTAR",
    };

    const discountCode = airlineCodeMap[dataComCode] || dataComCode;

    const airlineDiscount = airlineDiscounts.airlines?.find(
      (item) => item.code?.trim().toUpperCase() === discountCode,
    );

    if (airlineDiscount) {
      return {
        discountPercent: Number(airlineDiscount.discountPercent) || 0,
        note: airlineDiscount.note?.trim() || "",
      };
    }

    return {
      discountPercent: Number(airlineDiscounts.defaultDiscount) || 0,
      note: "",
    };
  };

  /**
   * Tính giá sau giảm
   *
   * Ví dụ:
   * 1.000.000 - 10% = 900.000
   */
  const calculateDiscountedPrice = (
    originalPrice: number,
    discountPercent: number,
  ): number => {
    const price = Number(originalPrice) || 0;
    const discount = Number(discountPercent) || 0;

    return Math.round(price - (price * discount) / 100);
  };

  // Thứ tự ưu tiên: VJ → VNA → Bamboo → Vietravel → còn lại
  const AIRLINE_SORT_ORDER: Record<string, number> = {
    VJ: 0,
    VN: 1,
    VNA: 1,
    QH: 2,
    BAMBOO: 2,
    VU: 3,
    VIETRAVEL: 3,
  };

  const getAirlineSortKey = (airOption: AirOptionAPI): number => {
    const flight = airOption.ListFlightOption?.[0]?.ListFlight?.[0];
    const code = (
      airOption.Airline ||
      flight?.AirlineCode ||
      flight?.Airline ||
      ""
    )
      .trim()
      .toUpperCase();

    return AIRLINE_SORT_ORDER[code] ?? 99;
  };

  const sortedAirOptions = [...airOptions].sort(
    (a, b) => getAirlineSortKey(a) - getAirlineSortKey(b),
  );

  return (
    <div className="space-y-2.5 sm:space-y-3">
      {sortedAirOptions.map((airOption, idx) => {
        const { discountPercent, note } = getAirlineDiscountInfo(airOption);

        return (
          <FlightRow
            key={idx}
            index={idx}
            airOption={airOption}
            group={group}
            showTotalPrice={showTotalPrice}
            isExpanded={expandedIndices.includes(idx)}
            toggleExpand={toggleExpand}
            onSelectFlight={onSelectFlight}
            discountPercent={discountPercent}
            discountNote={note}
            calculateDiscountedPrice={calculateDiscountedPrice}
            isSelected={
              selectedFlight?.ListFlightOption?.[0]?.ListFlight?.[0]
                ?.FlightNumber ===
              airOption.ListFlightOption?.[0]?.ListFlight?.[0]?.FlightNumber
            }
          />
        );
      })}
    </div>
  );
};
