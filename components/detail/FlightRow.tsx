"use client";

import React from "react";
import Image from "next/image";
import { Check, Info, Luggage, Utensils } from "lucide-react";

import { AirOptionAPI, ApiRootResponse } from "./flight-types";
import { AIRLINE_INFO, formatPrice, parseTime } from "./flight-utils";
import { FlightDetail } from "./FlightDetail";

interface Props {
  index: number;
  airOption: AirOptionAPI;
  group?: ApiRootResponse["ListGroup"][number];
  showTotalPrice?: boolean;
  isExpanded: boolean;
  toggleExpand: (index: number) => void;
  onSelectFlight?: (flight: AirOptionAPI) => void;
  isSelected?: boolean;
}

export const FlightRow: React.FC<Props> = ({
  index,
  airOption,
  group,
  isExpanded,
  toggleExpand,
  onSelectFlight,
  isSelected = false,
}) => {
  const fares = airOption.ListFareOption || [];
  const cheapestFare = fares[0];
  const flightOption = airOption.ListFlightOption?.[0];
  const flightData = flightOption?.ListFlight?.[0];
  const segmentData = flightData?.ListSegment?.[0];
  const airlineCode = airOption.Airline || "VN";

  const airlineMeta = AIRLINE_INFO[
    airlineCode as keyof typeof AIRLINE_INFO
  ] || {
    name: airlineCode,
    image: "/images/airlines/default.png",
    color: "text-slate-800",
    bg: "bg-slate-100",
  };

  const rawFlightNum =
    flightData?.FlightNumber || segmentData?.FlightNumber || "---";
  const flightNumber = rawFlightNum.startsWith(airlineCode)
    ? rawFlightNum
    : `${airlineCode}${rawFlightNum}`;

  const depDateStr = flightData?.DepartDate || segmentData?.DepartDate;
  const arrDateStr = flightData?.ArriveDate || segmentData?.ArriveDate;
  const depTime = parseTime(depDateStr);
  const arrTime = parseTime(arrDateStr);
  const equipmentCode = segmentData?.Equipment || "A321";

  const isWideBody =
    equipmentCode.includes("787") || equipmentCode.includes("350");
  const hasBaggage = airlineCode !== "VJ";
  const hasMeal = airlineCode === "VN" || airlineCode === "9G";

  const listFarePax = cheapestFare?.ListFarePax || [];
  const totalPaxCount = listFarePax.reduce((sum, pax) => sum + pax.PaxNumb, 0);

  // LOGIC TÍNH TỔNG GIÁ ĐÃ BAO GỒM ĐẦY ĐỦ THUẾ & PHÍ
  const totalGroupPrice = listFarePax.reduce(
    (sum, pax) => sum + (pax.TotalFare || 0) * (pax.PaxNumb || 1),
    0
  );

  const finalTotalPrice =
    cheapestFare?.TotalFare && cheapestFare.TotalFare > totalGroupPrice
      ? cheapestFare.TotalFare
      : totalGroupPrice > 0
      ? totalGroupPrice
      : cheapestFare?.TotalFare || 0;

  const finalPricePerPax =
    totalPaxCount > 0
      ? Math.round(finalTotalPrice / totalPaxCount)
      : finalTotalPrice;

  // Luôn luôn hiển thị Tổng giá đã gồm thuế phí cho cả Mobile lẫn Desktop
  const displayPrice = finalTotalPrice;

  const sampleFareInfo = cheapestFare?.ListFarePax?.[0]?.ListFareInfo?.[0];
  const handBaggage = sampleFareInfo?.HandBaggage || "07 kg";
  const freeBaggage =
    sampleFareInfo?.FreeBaggage ||
    (hasBaggage ? "23 kg" : "Chưa bao gồm hành lý");

  return (
    <div
      onClick={() => onSelectFlight?.(airOption)}
      className={`rounded-lg border transition-all duration-200 shadow-sm overflow-hidden cursor-pointer select-none ${
        isSelected
          ? "border-amber-500 ring-2 ring-amber-400/30 bg-amber-50/80"
          : "border-slate-200 hover:border-slate-300 bg-white"
      }`}
    >
      <div className="p-1.5 sm:p-3.5 flex flex-col gap-1 sm:gap-2.5">
        {/* HÀNG 1: LOGO + MÃ BAY + GIÁ TIỀN TỔNG (ĐÃ GỒM THUẾ PHÍ) */}
        <div className="flex items-center justify-between gap-1 border-b border-slate-100 pb-1 sm:pb-2">
          {/* Logo & Mã chuyến bay */}
          <div className="flex items-center gap-1 sm:gap-1.5 min-w-0">
            <div className="w-11 h-6 sm:w-12 sm:h-7 relative flex items-center justify-center shrink-0 bg-white rounded border border-slate-100 p-0.5">
              <Image
                src={airlineMeta.image}
                alt={airlineCode}
                width={48}
                height={24}
                className="max-h-5 sm:max-h-6 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>

            {/* Mã bay & Tàu bay lớn: Ẩn trên Mobile, Hiện trên Desktop */}
            <div className="hidden sm:block min-w-0">
              <span className="font-bold text-slate-800 text-xs sm:text-sm block truncate">
                {flightNumber}
              </span>
              {isWideBody && (
                <span className="text-[9px] bg-orange-100 text-orange-700 px-1 py-0.2 rounded font-medium inline-block truncate">
                  Tàu bay lớn
                </span>
              )}
            </div>
          </div>

          {/* Hiển thị Giá tiền (Tổng đã bao gồm thuế & phí) */}
          <div className="text-right shrink-0">
            <div
              className={`text-xs sm:text-base font-extrabold leading-none sm:leading-tight ${
                isSelected
                  ? "text-amber-700 sm:text-amber-600"
                  : "text-red-600"
              }`}
            >
              {formatPrice(displayPrice)}
              <span className="text-[9px] sm:text-xs font-normal underline ml-0.5">
                đ
              </span>
            </div>
   <span className="text-[8px] sm:text-[10px] text-slate-400 block mt-0.5 font-normal">
              {totalPaxCount > 1
                ? `Đã gồm thuế & phí của ${totalPaxCount} khách`
                : "Đã gồm thuế & phí"}
            </span>
          </div>
        </div>

        {/* HÀNG 2: GIỜ BAY & NÚT CHỌN */}
        <div className="flex items-center justify-between gap-1 flex-nowrap whitespace-nowrap">
          {/* Giờ khởi hành & Hạ cánh */}
          <div className="flex items-center gap-0.5 sm:gap-2 shrink-0">
            <div className="text-center">
              <span className="text-[10px] sm:text-base font-bold text-slate-900 block leading-none">
                {depTime}
              </span>
              <span className="text-[7px] sm:text-[9px] text-slate-400 block font-semibold uppercase mt-0.5 leading-none">
                {group?.StartPoint}
              </span>
            </div>

            <div className="flex flex-col items-center px-0.5">
              <span className="text-[8px] text-slate-400 font-medium leading-none mb-0.5 hidden sm:inline">
                Bay thẳng
              </span>
              <div className="w-3.5 sm:w-12 h-[1px] sm:h-[2px] bg-slate-300 relative flex items-center justify-center">
                <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-slate-400 absolute -left-0.5"></div>
                <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-slate-400 absolute -right-0.5"></div>
              </div>
            </div>

            <div className="text-center">
              <span className="text-[10px] sm:text-base font-bold text-slate-900 block leading-none">
                {arrTime}
              </span>
              <span className="text-[7px] sm:text-[9px] text-slate-400 block font-semibold uppercase mt-0.5 leading-none">
                {group?.EndPoint}
              </span>
            </div>
          </div>

          {/* Tiện ích + Nút Chi tiết (Desktop) & Nút/Badge Chọn */}
          <div className="flex items-center gap-1 shrink-0">
            <div className="hidden sm:flex items-center gap-1 text-slate-400">
              {hasBaggage && <Luggage size={13} title="Có hành lý ký gửi" />}
              {hasMeal && <Utensils size={13} title="Có suất ăn" />}
            </div>

            {/* Nút Chi tiết - Ẩn trên Mobile */}
            <button
              title="Xem chi tiết"
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                toggleExpand(index);
              }}
              className="hidden sm:flex text-blue-600 hover:bg-blue-50 p-1 rounded text-[11px] font-medium items-center transition"
            >
              <Info size={13} />
              <span className="ml-0.5">Chi tiết</span>
            </button>

            {/* Nút / Badge Chọn trên Mobile và Desktop */}
            {isSelected ? (
              <span className="bg-amber-500 text-white text-[8px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
                <Check size={9} />
                <span>Đã chọn</span>
              </span>
            ) : (
              <span className="bg-[#006838] text-white text-[9px] sm:text-xs font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md transition shadow-xs">
                Chọn
              </span>
            )}
          </div>
        </div>
      </div>

      {/* CHI TIẾT CHUYẾN BAY (Ẩn/Hiện khi mở rộng từ Desktop) */}
      {isExpanded && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="border-t border-slate-100 bg-slate-50/90 p-2.5 sm:p-3"
        >
          <FlightDetail
            group={group}
            airlineMeta={airlineMeta}
            airlineCode={airlineCode}
            flightNumber={flightNumber}
            segmentData={segmentData}
            depDateStr={depDateStr}
            depTime={depTime}
            arrTime={arrTime}
            equipmentCode={equipmentCode}
            cheapestFare={cheapestFare}
            listFarePax={listFarePax}
            totalPaxCount={totalPaxCount}
            totalGroupPrice={finalTotalPrice}
            avgPricePerPax={finalPricePerPax}
            handBaggage={handBaggage}
            freeBaggage={freeBaggage}
            hasMeal={hasMeal}
            index={index}
            toggleExpand={toggleExpand}
          />
        </div>
      )}
    </div>
  );
};