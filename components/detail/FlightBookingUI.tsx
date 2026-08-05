"use client";

import React, { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { useParams } from "next/navigation";

import { ApiRootResponse } from "./flight-types";
import { FlightHeader } from "./FlightHeader";
import { FlightList } from "./FlightList";
import { FlightSidebar } from "./FlightSidebar";

export const FlightBookingHome: React.FC = () => {
  const params = useParams();
  const rawId = params?.id ? String(params.id).replace(".htm", "") : "";

  const [rawApiResponse, setRawApiResponse] = useState<ApiRootResponse | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(true);
  const [isFetchingDate, setIsFetchingDate] = useState(false);
  const [showTotalPrice, setShowTotalPrice] = useState(false);
  const [expandedIndices, setExpandedIndices] = useState<number[]>([]);

  // State ngày được chọn
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  // Helper convert Date sang DDMMYYYY theo chuẩn API Datacom
  const formatDateToDDMMYYYY = (date: Date): string => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}${month}${year}`;
  };

  // Helper parse date từ API
  const parseApiDate = (dateStr?: string): Date => {
    if (!dateStr) return new Date();

    // Dạng DD/MM/YYYY hoặc DD/MM/YYYY HH:mm:ss
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

    // Dạng DDMMYYYY (8 chữ số)
    if (/^\d{8}$/.test(dateStr)) {
      const day = Number(dateStr.slice(0, 2));
      const month = Number(dateStr.slice(2, 4));
      const year = Number(dateStr.slice(4, 8));
      return new Date(year, month - 1, day);
    }

    const parsed = new Date(dateStr);
    return !isNaN(parsed.getTime()) ? parsed : new Date();
  };

  // 1. Tải dữ liệu ban đầu từ SessionStorage
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
        if (departDateStr) {
          setSelectedDate(parseApiDate(departDateStr));
        }
      } catch (error) {
        console.error("Lỗi parse JSON session storage:", error);
      }
    }

    setIsLoading(false);
  }, [rawId]);

  const toggleExpand = (index: number) => {
    setExpandedIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  // 2. Hàm xử lý khi CLICK ĐỔI NGÀY trên Header
  const handleSelectDate = async (newDate: Date) => {
    if (newDate.toDateString() === selectedDate.toDateString()) return;

    setSelectedDate(newDate);
    setExpandedIndices([]); // Đóng toàn bộ dropdown đang mở
    setIsFetchingDate(true);

    const currentGroup = rawApiResponse?.ListGroup?.[0];

    // Tạo payload chuẩn Datacom API với ngày mới
    const payload = {
      Adt: currentGroup?.Adt || 1,
      Chd: currentGroup?.Chd || 0,
      Inf: currentGroup?.Inf || 0,
      Tourcode: "",
      ListRoute: [
        {
          Leg: 0,
          StartPoint: currentGroup?.StartPoint || "SGN",
          EndPoint: currentGroup?.EndPoint || "HAN",
          DepartDate: formatDateToDDMMYYYY(newDate),
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

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const newData: ApiRootResponse = await response.json();

      // Cập nhật lại UI danh sách chuyến bay mới
      setRawApiResponse(newData);

      // Cập nhật lại sessionStorage nếu cần đồng bộ
      const storageKey = rawId
        ? `flight_search_${rawId}`
        : "flight_search_result";
      sessionStorage.setItem(storageKey, JSON.stringify(newData));
    } catch (error) {
      console.error("Lỗi khi call API lấy chuyến bay ngày mới:", error);
    } finally {
      setIsFetchingDate(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Loader2 className="animate-spin text-[#006838]" size={40} />
      </div>
    );
  }

  const group = rawApiResponse?.ListGroup?.[0];
  const airOptions = group?.ListAirOption || [];

  return (
    <main className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-1 lg:grid-cols-4 gap-4 bg-gray-100 min-h-screen font-sans text-gray-800">
      <section className="lg:col-span-3 space-y-3">
        <FlightHeader
          group={group}
          airOptionsCount={airOptions.length}
          showTotalPrice={showTotalPrice}
          selectedDate={selectedDate}
          onSelectDate={handleSelectDate}
        />

        {/* Màn hình loading khi đổi ngày */}
        {isFetchingDate ? (
          <div className="bg-white p-12 flex flex-col items-center justify-center rounded border border-gray-200 gap-3 shadow-sm min-h-[300px]">
            <Loader2 className="animate-spin text-[#006838]" size={36} />
            <span className="text-sm text-gray-600 font-medium">
              Đang tìm kiếm chuyến bay cho ngày{" "}
              {selectedDate.toLocaleDateString("vi-VN")}...
            </span>
          </div>
        ) : (
          <FlightList
            group={group}
            airOptions={airOptions}
            showTotalPrice={showTotalPrice}
            expandedIndices={expandedIndices}
            toggleExpand={toggleExpand}
          />
        )}
      </section>

      <FlightSidebar
        showTotalPrice={showTotalPrice}
        setShowTotalPrice={setShowTotalPrice}
      />
    </main>
  );
};

export default FlightBookingHome;
