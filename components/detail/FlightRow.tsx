"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // 1. Import useRouter
import { Luggage, Utensils } from "lucide-react";

import { AirOptionAPI, ApiRootResponse } from "./flight-types";
import { AIRLINE_INFO, formatPrice, parseTime } from "./flight-utils";
import { FlightDetail } from "./FlightDetail";

interface Props {
  index: number;
  airOption: AirOptionAPI;
  group?: ApiRootResponse["ListGroup"][number];
  showTotalPrice: boolean;
  isExpanded: boolean;
  toggleExpand: (index: number) => void;
}

export const FlightRow: React.FC<Props> = ({
  index,
  airOption,
  group,
  showTotalPrice,
  isExpanded,
  toggleExpand,
}) => {
  const router = useRouter(); // 2. Khai báo router

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
    color: "text-gray-800",
    bg: "bg-gray-100",
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
  const totalGroupPrice = listFarePax.reduce(
    (sum, pax) => sum + pax.TotalFare * pax.PaxNumb,
    0,
  );
  const avgPricePerPax =
    totalPaxCount > 0 ? Math.round(totalGroupPrice / totalPaxCount) : 0;

  const sampleFareInfo = cheapestFare?.ListFarePax?.[0]?.ListFareInfo?.[0];
  const handBaggage = sampleFareInfo?.HandBaggage || "07 kg";
  const freeBaggage =
    sampleFareInfo?.FreeBaggage ||
    (hasBaggage ? "23 kg" : "Chưa bao gồm hành lý ký gửi");

  // 3. Hàm xử lý khi bấm nút Đặt vé
  const handleBooking = () => {
    // Đóng gói dữ liệu chuyến bay đã chọn & thông tin nhóm khách
    const selectedBookingData = {
      airOption,
      cheapestFare,
      group,
    };

    // Lưu vào sessionStorage
    sessionStorage.setItem(
      "selected_flight",
      JSON.stringify(selectedBookingData),
    );

    // Chuyển hướng sang trang nhập thông tin khách
    router.push("/flight/passenger");
  };

  return (
    <div className="flex flex-col">
      <div className="p-2.5 hover:bg-gray-50 flex items-center justify-between gap-2 text-sm border-b border-gray-100">
        {/* Logo */}
        <div className="flex flex-col justify-center w-[120px] shrink-0">
          <div className="flex items-center justify-center">
            <Image
              src={airlineMeta.image}
              alt={airlineCode}
              width={120}
              height={40}
              className="w-[100px] h-[35px] object-contain"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>

          {isWideBody && (
            <span className="text-[10px] text-orange-600 font-medium text-center">
              Tàu bay lớn Boeing B787
            </span>
          )}
        </div>

        {/* Flight number */}
        <div className="w-1/6 font-semibold text-gray-800 text-xs md:text-sm">
          {flightNumber}
        </div>

        {/* Time */}
        <div className="w-1/4 font-bold text-gray-900 text-sm md:text-base text-center">
          {depTime} <span className="font-normal text-gray-400">÷</span>{" "}
          {arrTime}
        </div>

        {/* Utilities */}
        <div className="w-1/6 flex items-center justify-center gap-2 text-blue-500">
          <button
            title="Thông tin chi tiết"
            onClick={() => toggleExpand(index)}
            className="w-4 h-4 rounded border border-blue-400 text-blue-500 flex items-center justify-center text-[10px] font-bold font-serif hover:bg-blue-50"
          >
            i
          </button>

          {hasBaggage && <Luggage size={15} className="text-gray-500" />}
          {hasMeal && <Utensils size={15} className="text-gray-500" />}
        </div>

        {/* Price */}
        <div className="w-1/6 text-right font-bold text-red-600 text-sm md:text-base">
          {formatPrice(
            showTotalPrice
              ? cheapestFare?.TotalFare || 0
              : cheapestFare?.BaseFare || 0,
          )}
          <span className="underline text-xs ml-0.5">đ</span>
        </div>

        {/* Booking */}
        <div className="w-1/6 flex justify-end">
          <button
            type="button"
            onClick={handleBooking} // 4. Gắn sự kiện chuyển trang ở đây
            className="bg-[#006838] hover:bg-[#004d29] text-white px-3 py-1.5 rounded text-xs font-medium transition"
          >
            Đặt vé
          </button>
        </div>
      </div>

      {isExpanded && (
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
          totalGroupPrice={totalGroupPrice}
          avgPricePerPax={avgPricePerPax}
          handBaggage={handBaggage}
          freeBaggage={freeBaggage}
          hasMeal={hasMeal}
          index={index}
          toggleExpand={toggleExpand}
        />
      )}
    </div>
  );
};
