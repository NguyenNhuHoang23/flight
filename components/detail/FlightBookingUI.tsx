"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { ApiRootResponse } from "./flight-types";
import { FlightHeader } from "./FlightHeader";
import { FlightList } from "./FlightList";
import { FlightSidebar } from "./FlightSidebar";
import { useAirlineDiscounts } from "@/hook/useAirlineDiscounts";
export const FlightBookingHome: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const {
    data: airlineDiscountResult,
    isLoading: isLoadingDiscount,
    error: discountError,
    refetch: refetchDiscount,
  } = useAirlineDiscounts();

  const getAirlineDiscount = (airlineCode?: string) => {
    if (!airlineDiscountResult) return 0;

    const airline = airlineDiscountResult.airlines?.find(
      (item: any) => item.code?.toUpperCase() === airlineCode?.toUpperCase(),
    );

    if (airline) {
      return Number(airline.discountPercent) || 0;
    }

    return Number(airlineDiscountResult.defaultDiscount) || 0;
  };

  const calculateDiscountedPrice = (
    originalPrice: number,
    discountPercent: number,
  ) => {
    const price = Number(originalPrice) || 0;
    const discount = Number(discountPercent) || 0;

    return Math.round(price - (price * discount) / 100);
  };
  const rawId = params?.id ? String(params.id).replace(".htm", "") : "";

  const [rawApiResponse, setRawApiResponse] = useState<ApiRootResponse | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(true);
  const [isFetchingDate, setIsFetchingDate] = useState(false);
  const [showTotalPrice, setShowTotalPrice] = useState(false);

  const [selectedDepartFlight, setSelectedDepartFlight] = useState<any | null>(
    null,
  );
  const [selectedReturnFlight, setSelectedReturnFlight] = useState<any | null>(
    null,
  );

  // STATE EXPAND DÀNH CHO CÁC MÀN HÌNH MỞ CỦA TỪNG CHIỀU
  const [expandedIndices, setExpandedIndices] = useState<number[]>([]);
  const [departExpandedIndices, setDepartExpandedIndices] = useState<number[]>(
    [],
  );
  const [returnExpandedIndices, setReturnExpandedIndices] = useState<number[]>(
    [],
  );

  const [departDate, setDepartDate] = useState<Date>(new Date());
  const [returnDate, setReturnDate] = useState<Date | null>(null);

  const formatDateToDDMMYYYY = (date: Date): string => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}${month}${year}`;
  };

  const parseApiDate = (dateStr?: string): Date => {
    if (!dateStr) return new Date();
    if (dateStr.includes("/")) {
      const parts = dateStr.split(" ")[0].split("/");
      if (parts.length === 3) {
        return new Date(
          Number(parts[2]),
          Number(parts[1]) - 1,
          Number(parts[0]),
        );
      }
    }
    if (/^\d{8}$/.test(dateStr)) {
      const day = Number(dateStr.slice(0, 2));
      const month = Number(dateStr.slice(2, 4));
      const year = Number(dateStr.slice(4, 8));
      return new Date(year, month - 1, day);
    }
    const parsed = new Date(dateStr);
    return !isNaN(parsed.getTime()) ? parsed : new Date();
  };

  const groups = rawApiResponse?.ListGroup || [];
  const isRoundTrip = groups.length >= 2;

  useEffect(() => {
    const storageKey = rawId
      ? `flight_search_${rawId}`
      : "flight_search_result";
    const storedData = sessionStorage.getItem(storageKey);

    if (storedData) {
      try {
        const parsedData: ApiRootResponse = JSON.parse(storedData);
        setRawApiResponse(parsedData);

        const departDateStr = parsedData?.ListGroup?.[0]?.DepartDate;
        if (departDateStr) setDepartDate(parseApiDate(departDateStr));

        const returnDateStr = parsedData?.ListGroup?.[1]?.DepartDate;
        if (returnDateStr) setReturnDate(parseApiDate(returnDateStr));
      } catch (error) {
        console.error("Lỗi parse JSON session storage:", error);
      }
    }

    // ĐỌC LẠI CHUYẾN BAY ĐÃ CHỌN TỪ SESSION STORAGE (NẾU CÓ Quay LẠI ĐẶT LẠI)
    try {
      const savedDepart = sessionStorage.getItem("selected_depart_flight");
      const savedReturn = sessionStorage.getItem("selected_return_flight");
      if (savedDepart) setSelectedDepartFlight(JSON.parse(savedDepart));
      if (savedReturn) setSelectedReturnFlight(JSON.parse(savedReturn));
    } catch (e) {
      console.error("Lỗi đọc thông tin chuyến bay đã chọn:", e);
    }

    setIsLoading(false);
  }, [rawId]);

  const toggleExpand = (index: number) => {
    setExpandedIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  const toggleDepartExpand = (index: number) => {
    setDepartExpandedIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  const toggleReturnExpand = (index: number) => {
    setReturnExpandedIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  const getDateList = (date: Date) => {
    return [-1, 0, 1].map((offset) => {
      const d = new Date(date);
      d.setDate(d.getDate() + offset);
      return d;
    });
  };

  const getDayName = (date: Date) => {
    const days = ["C.NHẬT", "T.HAI", "T.BA", "T.TƯ", "T.NĂM", "T.SÁU", "T.BẢY"];
    return days[date.getDay()];
  };

  const formatShortDate = (date: Date) => {
    return `${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}`;
  };

  const isSameDate = (date1: Date, date2: Date) => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  const startOfDay = (date: Date) => {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    return d;
  };

  const searchRoundTrip = async (newDepartDate: Date, newReturnDate: Date) => {
    const currentDepartGroup = rawApiResponse?.ListGroup?.[0];
    const currentReturnGroup = rawApiResponse?.ListGroup?.[1];
    if (!currentDepartGroup) return;

    setIsFetchingDate(true);
    setDepartExpandedIndices([]);
    setReturnExpandedIndices([]);
    setExpandedIndices([]);

    // Khi đổi ngày tìm kiếm, reset chuyến bay đã chọn
    setSelectedDepartFlight(null);
    setSelectedReturnFlight(null);
    sessionStorage.removeItem("selected_depart_flight");
    sessionStorage.removeItem("selected_return_flight");

    const payload = {
      Adt: currentDepartGroup.Adt || 1,
      Chd: currentDepartGroup.Chd || 0,
      Inf: currentDepartGroup.Inf || 0,
      Tourcode: "",
      ListRoute: [
        {
          Leg: 0,
          StartPoint: currentDepartGroup.StartPoint || "SGN",
          EndPoint: currentDepartGroup.EndPoint || "HAN",
          DepartDate: formatDateToDDMMYYYY(newDepartDate),
        },
        {
          Leg: 1,
          StartPoint:
            currentReturnGroup?.StartPoint ||
            currentDepartGroup.EndPoint ||
            "HAN",
          EndPoint:
            currentReturnGroup?.EndPoint ||
            currentDepartGroup.StartPoint ||
            "SGN",
          DepartDate: formatDateToDDMMYYYY(newReturnDate),
        },
      ],
      Option: {
        DirectOnly: true,
        NearByAirport: false,
        PreferCabin: "economy",
        NdcOnly: false,
        CombineMode: "flight",
      },
    };

    try {
      const response = await fetch("/api/flight/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
      const newData: ApiRootResponse = await response.json();

      setRawApiResponse(newData);
      setDepartDate(newDepartDate);
      setReturnDate(newReturnDate);

      const storageKey = rawId
        ? `flight_search_${rawId}`
        : "flight_search_result";
      sessionStorage.setItem(storageKey, JSON.stringify(newData));
    } catch (error) {
      console.error("Lỗi khi search vé khứ hồi:", error);
    } finally {
      setIsFetchingDate(false);
    }
  };

  const handleDepartDate = (date: Date) => {
    const selected = startOfDay(date);
    const currentDate = startOfDay(new Date());

    if (selected < currentDate) {
      alert("Ngày đi không được nhỏ hơn ngày hiện tại!");
      return;
    }

    if (returnDate) {
      const currentReturnDate = startOfDay(returnDate);
      if (selected >= currentReturnDate) {
        alert("Ngày đi phải trước ngày về!");
        return;
      }
      searchRoundTrip(selected, currentReturnDate);
      return;
    }
    setDepartDate(selected);
  };

  const handleReturnDate = (date: Date) => {
    const selected = startOfDay(date);
    const currentDate = startOfDay(new Date());
    const currentDepartDate = startOfDay(departDate);

    if (selected < currentDate) {
      alert("Ngày về không được nhỏ hơn ngày hiện tại!");
      return;
    }
    if (selected <= currentDepartDate) {
      alert("Ngày về phải sau ngày đi!");
      return;
    }
    searchRoundTrip(currentDepartDate, selected);
  };

  // CHỌN CHUYẾN BAY VÀ XỬ LÝ LƯU SESSION STORAGE CỐ ĐỊNH 1 KEY
  const handleSelectFlight = (flight: any, direction: "depart" | "return") => {
    if (!isRoundTrip) {
      // Một chiều: Ghi đè duy nhất vào 'selected_depart_flight'
      sessionStorage.setItem("selected_depart_flight", JSON.stringify(flight));
      sessionStorage.removeItem("selected_return_flight");
      router.push("/flight/passenger");
      return;
    }

    if (direction === "depart") {
      setSelectedDepartFlight(flight);
      // Ghi đè vào duy nhất key 'selected_depart_flight'
      sessionStorage.setItem("selected_depart_flight", JSON.stringify(flight));

      // Kiểm tra nếu chuyến về đã có sẵn (từ State hoặc Session)
      const currentReturn =
        selectedReturnFlight ||
        (sessionStorage.getItem("selected_return_flight")
          ? JSON.parse(sessionStorage.getItem("selected_return_flight")!)
          : null);

      if (currentReturn) {
        router.push("/flight/passenger");
      }
    } else {
      setSelectedReturnFlight(flight);
      // Ghi đè vào duy nhất key 'selected_return_flight'
      sessionStorage.setItem("selected_return_flight", JSON.stringify(flight));

      // Kiểm tra nếu chuyến đi đã có sẵn (từ State hoặc Session)
      const currentDepart =
        selectedDepartFlight ||
        (sessionStorage.getItem("selected_depart_flight")
          ? JSON.parse(sessionStorage.getItem("selected_depart_flight")!)
          : null);

      if (currentDepart) {
        router.push("/flight/passenger");
      }
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 gap-3">
        <Loader2 className="animate-spin text-[#006838]" size={40} />
        <p className="text-sm font-medium text-slate-600">
          Đang tải thông tin chuyến bay...
        </p>
      </div>
    );
  }

  const departGroup = rawApiResponse?.ListGroup?.[0];
  const returnGroup = rawApiResponse?.ListGroup?.[1];
  const departAirOptions = departGroup?.ListAirOption || [];
  const returnAirOptions = returnGroup?.ListAirOption || [];

  const DateTabStrip = ({
    dates,
    selectedDate,
    onSelect,
    activeColorClass,
    isReturn = false,
  }: {
    dates: Date[];
    selectedDate: Date;
    onSelect: (d: Date) => void;
    activeColorClass: string;
    isReturn?: boolean;
  }) => (
    <div className="flex bg-slate-100 border-b border-slate-200 overflow-x-auto no-scrollbar">
      {dates.map((date) => {
        const active = isSameDate(date, selectedDate);
        const currentDate = startOfDay(new Date());
        const dateItem = startOfDay(date);
        const disabled = isReturn
          ? dateItem <= startOfDay(departDate)
          : dateItem < currentDate;

        return (
          <button
            key={date.toISOString()}
            type="button"
            disabled={disabled}
            onClick={() => onSelect(date)}
            className={`flex-1 py-1.5 px-0.5 text-center transition-all border-r border-slate-200 last:border-r-0 ${
              active
                ? `${activeColorClass} text-white font-semibold`
                : disabled
                  ? "bg-slate-100 text-slate-300 cursor-not-allowed"
                  : "bg-slate-200/70 text-slate-700 hover:bg-slate-200 cursor-pointer"
            }`}
          >
            <div className="text-[10px] font-bold leading-tight">
              {getDayName(date)}
            </div>
            <div className="text-[11px] font-medium leading-tight">
              {formatShortDate(date)}
            </div>
          </button>
        );
      })}
    </div>
  );

  return (
    <main className="max-w-5xl mx-auto px-1 sm:px-0 py-2 sm:py-6 bg-slate-100 min-h-screen font-sans text-slate-800">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6">
        <section className="lg:col-span-3 space-y-4">
          {isFetchingDate ? (
            <div className="bg-white rounded-xl border border-slate-200 min-h-[450px] flex flex-col items-center justify-center p-8 gap-3 shadow-sm">
              <Loader2 className="animate-spin text-[#006838]" size={42} />
              <span className="text-sm font-medium text-slate-600">
                Đang tìm kiếm chuyến bay mới...
              </span>
            </div>
          ) : isRoundTrip && returnDate ? (
            <>
              {/* Grid 2 Cột hiển thị song song ngay cả trên Mobile */}
              <div className="grid grid-cols-2 gap-1 sm:gap-4">
                {/* CHIỀU ĐI */}
                <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden flex flex-col">
                  {/* Header Cột Đi */}
                  <div className="bg-[#006838] text-white px-2 py-2 text-center shadow-sm">
                    <div className="font-bold text-xs sm:text-base tracking-wide uppercase">
                      {departGroup?.StartPoint} → {departGroup?.EndPoint}
                    </div>
                    <div className="text-[10px] sm:text-xs opacity-90 mt-0.5">
                      {getDayName(departDate)}, {formatShortDate(departDate)}/
                      {departDate.getFullYear()}, {departGroup?.Adt || 1} khách
                    </div>
                  </div>

                  <DateTabStrip
                    dates={getDateList(departDate)}
                    selectedDate={departDate}
                    onSelect={handleDepartDate}
                    activeColorClass="bg-[#006838]"
                  />

                  <div className="p-1 sm:p-3 flex-1 bg-white">
                    <FlightList
                      group={departGroup}
                      airOptions={departAirOptions}
                      showTotalPrice={showTotalPrice}
                      airlineDiscounts={airlineDiscountResult}
                      expandedIndices={departExpandedIndices}
                      toggleExpand={toggleDepartExpand}
                      onSelectFlight={(flight) =>
                        handleSelectFlight(flight, "depart")
                      }
                      selectedFlight={selectedDepartFlight}
                    />
                  </div>
                </div>

                {/* CHIỀU VỀ */}
                <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden flex flex-col">
                  {/* Header Cột Về */}
                  <div className="bg-[#FF5126] text-white px-2 py-2 text-center shadow-sm">
                    <div className="font-bold text-xs sm:text-base tracking-wide uppercase">
                      {returnGroup?.StartPoint} → {returnGroup?.EndPoint}
                    </div>
                    <div className="text-[10px] sm:text-xs opacity-90 mt-0.5">
                      {getDayName(returnDate)}, {formatShortDate(returnDate)}/
                      {returnDate.getFullYear()}, {returnGroup?.Adt || 1} khách
                    </div>
                  </div>

                  <DateTabStrip
                    dates={getDateList(returnDate)}
                    selectedDate={returnDate}
                    onSelect={handleReturnDate}
                    activeColorClass="bg-[#FF5126]"
                    isReturn
                  />

                  <div className="p-1 sm:p-3 flex-1 bg-white">
                    <FlightList
                      group={returnGroup}
                      airOptions={returnAirOptions}
                      showTotalPrice={showTotalPrice}
                      airlineDiscounts={airlineDiscountResult}
                      expandedIndices={returnExpandedIndices}
                      toggleExpand={toggleReturnExpand}
                      onSelectFlight={(flight) =>
                        handleSelectFlight(flight, "return")
                      }
                      selectedFlight={selectedReturnFlight}
                    />
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* MỘT CHIỀU (ONE WAY) */
            <div className="space-y-4">
              <FlightHeader
                group={departGroup}
                airOptionsCount={departAirOptions.length}
                showTotalPrice={showTotalPrice}
                selectedDate={departDate}
                onSelectDate={handleDepartDate}
              />
              <FlightList
                group={departGroup}
                airOptions={departAirOptions}
                showTotalPrice={showTotalPrice}
                airlineDiscounts={airlineDiscountResult}
                expandedIndices={departExpandedIndices}
                toggleExpand={toggleDepartExpand}
                onSelectFlight={(flight) =>
                  handleSelectFlight(flight, "depart")
                }
                selectedFlight={selectedDepartFlight}
              />
            </div>
          )}
        </section>

        <aside className="lg:col-span-1">
          <div className="sticky top-4">
            <FlightSidebar
              showTotalPrice={showTotalPrice}
              setShowTotalPrice={setShowTotalPrice}
            />
          </div>
        </aside>
      </div>
    </main>
  );
};

export default FlightBookingHome;
