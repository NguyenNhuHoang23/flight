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
  onSelectFlight?: (
    flight: AirOptionAPI,
    selectedPriceInfo?: {
      discountedTotalPrice: number;
      originalPrice: number;
      finalPricePerPax: number;
      discountPercent: number;
    },
  ) => void;
  isSelected?: boolean;

  // ==============================
  // DISCOUNT
  // ==============================
  discountPercent?: number;
  discountNote?: string;

  calculateDiscountedPrice?: (
    originalPrice: number,
    discountPercent: number,
  ) => number;
}

export const FlightRow: React.FC<Props> = ({
  index,
  airOption,
  group,
  isExpanded,
  toggleExpand,
  onSelectFlight,
  isSelected = false,

  // ==============================
  // NHẬN DISCOUNT TỪ FLIGHTLIST
  // ==============================
  discountPercent = 0,
  discountNote = "",
  calculateDiscountedPrice,
}) => {
  const fares = airOption.ListFareOption || [];
  const cheapestFare = fares[0];

  const flightOption = airOption.ListFlightOption?.[0];
  const flightData = flightOption?.ListFlight?.[0];
  const segmentData = flightData?.ListSegment?.[0];

  const airlineCode = airOption.Airline;

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

  // ============================================================
  // GIÁ GỐC - ĐÃ BAO GỒM THUẾ & PHÍ
  // ============================================================
  const totalGroupPrice = listFarePax.reduce(
    (sum, pax) => sum + (pax.TotalFare || 0) * (pax.PaxNumb || 1),
    0,
  );

  const finalTotalPrice = listFarePax.reduce((total, pax) => {
    const paxType = String(
      pax.PaxType || pax.PassengerType || pax.PaxCode || "",
    ).toLowerCase();

    const paxCount = pax.PaxNumb || 1;
    const basePrice = pax.TotalFare || 0;

    // ==============================
    // NGƯỜI LỚN: 100%
    // ==============================
    if (paxType === "adult" || paxType === "adt" || paxType === "a") {
      return total + basePrice * paxCount;
    }

    // ==============================
    // TRẺ EM: 70% GIÁ NGƯỜI LỚN
    // Giảm 30%
    // ==============================
    if (paxType === "child" || paxType === "chd" || paxType === "c") {
      const childPrice = Math.round(basePrice * 0.7);

      return total + childPrice * paxCount;
    }

    // ==============================
    // EM BÉ: 200.000đ / người
    // ==============================
    if (paxType === "infant" || paxType === "inf" || paxType === "i") {
      return total + 200000 * paxCount;
    }

    // ==============================
    // FALLBACK
    // ==============================
    return total + basePrice * paxCount;
  }, 0);

  // ============================================================
  // GIÁ SAU DISCOUNT
  // Discount voucher áp dụng SAU khi đã tính:
  // Adult 100%
  // Child 80%
  // Infant 200.000đ
  // ============================================================
  const discountedTotalPrice = calculateDiscountedPrice
    ? calculateDiscountedPrice(finalTotalPrice, discountPercent)
    : Math.round(finalTotalPrice - (finalTotalPrice * discountPercent) / 100);

  // ============================================================
  // GIÁ / KHÁCH
  // ============================================================
  const finalPricePerPax =
    totalPaxCount > 0
      ? Math.round(discountedTotalPrice / totalPaxCount)
      : discountedTotalPrice;

  const displayPrice = discountedTotalPrice;

  const sampleFareInfo = cheapestFare?.ListFarePax?.[0]?.ListFareInfo?.[0];
  const handBaggage = sampleFareInfo?.HandBaggage || "07 kg";
  const freeBaggage =
    sampleFareInfo?.FreeBaggage ||
    (hasBaggage ? "23 kg" : "Chưa bao gồm hành lý");

  // ============================================================
  // HÀM XỬ LÝ CHỌN CHUYẾN BAY (TÍNH VÀ ĐỒNG BỘ GIÁ ĐÃ GIẢM)
  // ============================================================
  const handleSelectFlight = () => {
    if (!onSelectFlight) return;

    // Tính tỷ lệ giảm giá để nhân lại cho từng FarePax
    const discountRatio =
      finalTotalPrice > 0 ? discountedTotalPrice / finalTotalPrice : 1;

    // Clone và ghi đè giá đã giảm vào dữ liệu chuyến bay
    const updatedAirOption: AirOptionAPI = {
      ...airOption,
      ListFareOption: airOption.ListFareOption?.map((fare, fIdx) => {
        if (fIdx !== 0) return fare; // Chỉ cập nhật fare đầu tiên (cheapestFare)
        return {
          ...fare,
          TotalFare: discountedTotalPrice,
          PricePerPax: finalPricePerPax,
          ListFarePax: fare.ListFarePax?.map((pax) => ({
            ...pax,
            Fare: Math.round((pax.Fare || 0) * discountRatio),
            VAT: Math.round((pax.VAT || 0) * discountRatio),
            Fee: Math.round((pax.Fee || 0) * discountRatio),
            TotalFare: Math.round((pax.TotalFare || 0) * discountRatio),
          })),
        };
      }),
    };

    onSelectFlight(updatedAirOption, {
      discountedTotalPrice,
      originalPrice: finalTotalPrice,
      finalPricePerPax,
      discountPercent,
    });
  };

  return (
    <div
      onClick={handleSelectFlight}
      className={`rounded-lg border transition-all duration-200 shadow-sm overflow-hidden cursor-pointer select-none ${
        isSelected
          ? "border-amber-500 ring-2 ring-amber-400/30 bg-amber-50/80"
          : "border-slate-200 hover:border-slate-300 bg-white"
      }`}
    >
      {/* HÀNG 1 */}
      <div className="flex items-center justify-between gap-2 p-2 sm:p-3">
        {/* LOGO + MÃ BAY */}
        <div className="flex items-center gap-2 min-w-0">
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

        {/* GIÁ */}
        <div className="text-right shrink-0">
          <div
            className={`text-xs sm:text-base font-extrabold leading-none sm:leading-tight ${
              isSelected ? "text-amber-700 sm:text-amber-600" : "text-red-600"
            }`}
          >
            {formatPrice(displayPrice)}
            <span className="text-[9px] sm:text-xs font-normal underline ml-0.5">
              đ
            </span>
          </div>

          {discountNote ? (
            <span className="text-[8px] sm:text-[10px] text-green-600 block mt-0.5 font-bold">
              {discountNote}
            </span>
          ) : null}

          <span className="text-[8px] sm:text-[10px] text-slate-400 block mt-0.5 font-normal">
            {totalPaxCount > 1
              ? `Đã gồm thuế & phí của ${totalPaxCount} khách`
              : "Đã gồm thuế & phí"}
          </span>
        </div>
      </div>

      {/* HÀNG 2: GIỜ BAY */}
      <div className="flex items-center justify-between gap-1 flex-nowrap whitespace-nowrap px-2 pb-2 sm:px-3 sm:pb-3">
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
              <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-slate-400 absolute -left-0.5" />
              <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-slate-400 absolute -right-0.5" />
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

        {/* TIỆN ÍCH + NÚT CHỌN */}
        <div className="flex items-center gap-1 shrink-0">
          <div className="hidden sm:flex items-center gap-1 text-slate-400">
            {hasBaggage && (
              <span title="Có hành lý ký gửi">
                <Luggage size={13} />
              </span>
            )}
            {hasMeal && (
              <span title="Có suất ăn">
                <Utensils size={13} />
              </span>
            )}
          </div>

          {/* <button
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
          </button> */}

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

      {/* CHI TIẾT */}
      {/* {isExpanded && (
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
            totalGroupPrice={discountedTotalPrice}
            avgPricePerPax={finalPricePerPax}
            handBaggage={handBaggage}
            freeBaggage={freeBaggage}
            hasMeal={hasMeal}
            index={index}
            toggleExpand={toggleExpand}
          />
        </div>
      )} */}
    </div>
  );
};
