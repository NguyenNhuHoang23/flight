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
   * Lấy discount theo hãng của chuyến bay
   */
  const getAirlineDiscount = (airOption: AirOptionAPI): number => {
    const flight = airOption.ListFlightOption?.[0]?.ListFlight?.[0];

    if (!airlineDiscounts) {
      return 0;
    }

    // =========================================================
    // LẤY MÃ HÃNG TỪ DATACOM
    // =========================================================

    const airlineCode =
      airOption.Airline || flight?.AirlineCode || flight?.Airline;

    if (!airlineCode) {
      return Number(airlineDiscounts.defaultDiscount) || 0;
    }

    const dataComCode = airlineCode.trim().toUpperCase();

    // =========================================================
    // MAP MÃ DATACOM → MÃ TRONG BẢNG DISCOUNT
    // =========================================================

    const airlineCodeMap: Record<string, string> = {
      VN: "VNA",
      VJ: "VIETJET",
      QH: "BAMBOO",
      VU: "VIETRAVEL",
      BL: "JETSTAR",
    };

    const discountCode = airlineCodeMap[dataComCode] || dataComCode;

    // console.log("✈️ Airline mapping:", {
    //   dataComCode,
    //   discountCode,
    // });

    // =========================================================
    // TÌM DISCOUNT
    // =========================================================

    const airlineDiscount = airlineDiscounts.airlines?.find(
      (item) => item.code?.trim().toUpperCase() === discountCode,
    );

    // =========================================================
    // TÌM THẤY
    // =========================================================

    if (airlineDiscount) {
      console.log("💰 Airline discount:", {
        dataComCode,
        discountCode,
        airlineName: airlineDiscount.name,
        discount: airlineDiscount.discountPercent,
      });

      return Number(airlineDiscount.discountPercent) || 0;
    }

    // =========================================================
    // KHÔNG TÌM THẤY → DEFAULT
    // =========================================================

    console.warn(
      `⚠️ Không tìm thấy discount: ${discountCode} → dùng default: ${airlineDiscounts.defaultDiscount}`,
    );

    return Number(airlineDiscounts.defaultDiscount) || 0;
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

  return (
    <div className="space-y-2.5 sm:space-y-3">
      {airOptions.map((airOption, idx) => {
        const discountPercent = getAirlineDiscount(airOption);

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
