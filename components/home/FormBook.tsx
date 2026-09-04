"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import {
  ArrowRightLeft,
  Calendar,
  User,
  Search,
  X,
  Loader2,
  Plane,
} from "lucide-react";
import DatePicker, { registerLocale } from "react-datepicker";
import { vi } from "date-fns/locale/vi";
import "react-datepicker/dist/react-datepicker.css";
import { useFlightSearch } from "@/hook/useFlightSearch";
import { clearFlightSelection } from "@/components/detail/flight-selection-storage";
import {
  AIRPORT_COLUMNS,
  AIRPORT_DATA,
  ALL_AIRPORTS,
  type AirportCategory,
  type AirportItem,
} from "@/data/airports";

registerLocale("vi", vi);


const removeVietnameseTones = (str: string) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase();
};

function airportMatchesQuery(airport: AirportItem, query: string) {
  if (!query) return true;

  const cleanQuery = removeVietnameseTones(query);
  const haystack = removeVietnameseTones(
    `${airport.name} ${airport.id} ${airport.country ?? ""} ${airport.keywords ?? ""}`,
  );

  if (haystack.includes(cleanQuery)) return true;
  if (airport.id.toLowerCase().includes(cleanQuery)) return true;

  const initials = removeVietnameseTones(airport.name)
    .split(/[\s(),]+/)
    .map((word) => word[0] ?? "")
    .join("");

  return initials.includes(cleanQuery);
}

function isExcludedAirport(
  airport: AirportItem,
  activeSelectType: "origin" | "destination" | null,
  fromLocation: string,
  toLocation: string,
) {
  if (activeSelectType === "destination") return airport.name === fromLocation;
  if (activeSelectType === "origin") return airport.name === toLocation;
  return false;
}

function groupAirportsByCountry(airports: AirportItem[]): AirportCategory[] {
  const groups = new Map<string, AirportItem[]>();

  for (const airport of airports) {
    const country = airport.country?.trim() || "Khác";
    const list = groups.get(country);
    if (list) list.push(airport);
    else groups.set(country, [airport]);
  }

  return [...groups.entries()]
    .sort(([a], [b]) => {
      if (a === "Việt Nam") return -1;
      if (b === "Việt Nam") return 1;
      return a.localeCompare(b, "vi");
    })
    .map(([title, grouped]) => ({ title, airports: grouped }));
}


export default function FormBook() {
  const [fromLocation, setFromLocation] = useState("Hồ Chí Minh (SGN)");
  const [toLocation, setToLocation] = useState("Hà Nội (HAN)");
  const [departureDate, setDepartureDate] = useState<Date | null>(new Date());
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const [adt, setAdt] = useState(1);
  const [chd, setChd] = useState(0);
  const [inf, setInf] = useState(0);

  const { searchFlight, loading, error } = useFlightSearch();

  const [activeSelectType, setActiveSelectType] = useState<
    "origin" | "destination" | null
  >(null);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const getLunarDateString = (date: Date | null) => {
    if (!date) return "";
    try {
      const formatter = new Intl.DateTimeFormat("vi-VN-u-ca-chinese", {
        day: "numeric",
        month: "numeric",
      });
      const parts = formatter.formatToParts(date);
      const day = parts.find((p) => p.type === "day")?.value;
      const month = parts.find((p) => p.type === "month")?.value;

      const daysOfWeek = [
        "C.Nhật",
        "T.Hai",
        "T.Ba",
        "T.Tư",
        "T.Năm",
        "T.Sáu",
        "T.Bảy",
      ];
      const dayOfWeek = daysOfWeek[date.getDay()];

      return `${dayOfWeek}, ${day}/${month} ÂL`;
    } catch {
      return "";
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveSelectType(null);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveSelectType(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSwapLocations = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFromLocation(toLocation);
    setToLocation(fromLocation);
  };

  const handleSelectAirport = (airportName: string) => {
    if (activeSelectType === "origin") {
      setFromLocation(airportName);
    } else if (activeSelectType === "destination") {
      setToLocation(airportName);
    }
    setActiveSelectType(null);
    setSearchQuery("");
  };

  const handleSearchSubmit = async () => {
    const res = await searchFlight({
      fromLocation,
      toLocation,
      departureDate,
      returnDate,
      adt,
      chd,
      inf,
    });

    if (!res) return;

    const sessionId = res.Session || res.SearchId || Date.now();
    clearFlightSelection();
    sessionStorage.setItem(
      `flight_search_${sessionId}`,
      JSON.stringify(res),
    );
    window.location.assign(`/flight/search/${sessionId}`);
  };

  const query = searchQuery.trim();

  const filteredAirportData = useMemo(() => {
    const exclude = (airport: AirportItem) =>
      isExcludedAirport(airport, activeSelectType, fromLocation, toLocation);

    if (!query) {
      return AIRPORT_DATA.map((cat) => ({
        ...cat,
        airports: cat.airports.filter((airport) => !exclude(airport)),
      })).filter((cat) => cat.airports.length > 0);
    }

    return groupAirportsByCountry(
      ALL_AIRPORTS.filter(
        (airport) =>
          !exclude(airport) && airportMatchesQuery(airport, query),
      ),
    );
  }, [activeSelectType, fromLocation, toLocation, query]);

  return (
    <div className="lg:col-span-7 bg-[#e9ecef] p-4 rounded-xl border border-slate-300 shadow-xs relative font-sans">
      <h2 className="text-slate-700 font-bold text-sm md:text-base mb-3 uppercase tracking-wide">
        ĐẶT VÉ MÁY BAY NỘI ĐỊA, QUỐC TẾ
      </h2>

      <div className="space-y-3">
        {/* Origin & Destination Group */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 items-center relative">
          {/* Nơi đi */}
          <div className="md:col-span-5">
            <label className="block text-xs font-semibold mb-1 text-slate-600">
              Khởi hành từ
            </label>
            <div
              onClick={() => {
                setActiveSelectType("origin");
                setSearchQuery("");
              }}
              className="relative cursor-pointer"
            >
              <Plane className="w-4 h-4 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                readOnly
                value={fromLocation}
                className="w-full pl-8 pr-2 py-2 bg-white border border-slate-300 rounded-lg text-sm font-medium focus:outline-none cursor-pointer"
              />
            </div>
          </div>

          {/* Swap Button */}
          <div className="md:col-span-2 flex justify-center pt-1 md:pt-4">
            <button
              type="button"
              onClick={handleSwapLocations}
              title="Đổi chiều bay"
              className="p-2 rounded-full border border-slate-300 bg-white hover:bg-slate-100 active:scale-95 text-indigo-600 transition shadow-xs cursor-pointer"
            >
              <ArrowRightLeft className="w-4 h-4" />
            </button>
          </div>

          {/* Nơi đến */}
          <div className="md:col-span-5">
            <label className="block text-xs font-semibold mb-1 text-slate-600">
              Điểm đến
            </label>
            <div
              onClick={() => {
                setActiveSelectType("destination");
                setSearchQuery("");
              }}
              className="relative cursor-pointer"
            >
              <Plane className="w-4 h-4 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none rotate-90" />
              <input
                type="text"
                readOnly
                value={toLocation}
                className="w-full pl-8 pr-2 py-2 bg-white border border-slate-300 rounded-lg text-sm font-medium focus:outline-none cursor-pointer"
              />
            </div>
          </div>

          {/* MODAL / DROPDOWN SELECT AIRPORT */}
          {activeSelectType && (
            <div
              ref={dropdownRef}
              className={`fixed inset-0 z-50 bg-white md:absolute md:inset-auto md:top-[68px] ${
                activeSelectType === "destination"
                  ? "md:right-0 md:left-auto"
                  : "md:left-0 md:right-auto"
              } md:w-full md:max-w-5xl md:rounded-xl md:shadow-2xl border border-slate-200 overflow-hidden text-xs flex flex-col`}
            >
              {/* Header Modal */}
              <div className="bg-[#006838] text-white px-4 py-2.5 flex justify-between items-center font-bold">
                <h3 className="text-xs uppercase tracking-wider">
                  {activeSelectType === "origin"
                    ? "CHỌN SÂN BAY KHỞI HÀNH"
                    : "CHỌN SÂN BAY ĐẾN"}
                </h3>
                <button
                  type="button"
                  onClick={() => setActiveSelectType(null)}
                  className="p-1 hover:bg-white/10 rounded-full text-white transition cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Search Bar */}
              <div className="bg-slate-100 px-4 py-2.5 border-b border-slate-200 flex items-center justify-center gap-2">
                <span className="text-xs font-semibold text-slate-700 whitespace-nowrap hidden sm:inline">
                  Tìm kiếm:
                </span>
                <div className="relative flex-1 sm:flex-none sm:w-[380px] flex items-center">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Nhập mã sân bay, tên thành phố..."
                    className="w-full pl-3 pr-8 py-1.5 bg-white border border-slate-300 rounded-lg text-base md:text-xs focus:outline-none focus:ring-2 focus:ring-[#006838]"
                    autoFocus
                  />
                  {searchQuery ? (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="absolute right-2 text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  ) : (
                    <Search className="w-4 h-4 text-slate-400 absolute right-2.5 pointer-events-none" />
                  )}
                </div>
              </div>

              {/* Airport Grid Content */}
              <div className="p-4 max-h-[70vh] md:max-h-[520px] overflow-y-auto bg-white">
                {filteredAirportData.length === 0 ? (
                  <div className="text-center py-8 text-slate-500 text-xs">
                    Không tìm thấy sân bay phù hợp với "{searchQuery}"
                  </div>
                ) : searchQuery.trim() !== "" ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-4 gap-y-3">
                    {filteredAirportData.map((category, idx) => (
                      <div key={idx} className="space-y-1">
                        <h4 className="text-[#d84315] font-bold text-[11px] uppercase tracking-tight">
                          {category.title}
                        </h4>
                        <ul className="space-y-1 text-[11px] text-slate-600">
                          {category.airports.map((airport) => (
                            <li
                              key={airport.id}
                              onClick={() => handleSelectAirport(airport.name)}
                              className="hover:text-[#006838] hover:underline cursor-pointer transition py-0.5"
                            >
                              {airport.name}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-4 gap-y-4 text-[11px] leading-relaxed text-slate-600">
                    {AIRPORT_COLUMNS.map((columnTitles) => (
                      <div key={columnTitles.join("-")} className="space-y-3">
                        {columnTitles.map((title) => {
                          const category = filteredAirportData.find(
                            (c) => c.title === title,
                          );
                          if (!category) return null;

                          return (
                            <div key={title}>
                              <h4 className="text-[#d84315] font-bold uppercase mb-1">
                                {category.title}
                              </h4>
                              <ul className="space-y-1">
                                {category.airports.map((ap) => (
                                  <li
                                    key={ap.id}
                                    onClick={() => handleSelectAirport(ap.name)}
                                    className="hover:text-[#006838] cursor-pointer"
                                  >
                                    {ap.name}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Date Pickers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Ngày đi */}
          <div>
            <label className="block text-xs font-semibold mb-1 text-slate-600">
              Ngày đi
            </label>

            <div className="relative flex items-center">
              <DatePicker
                selected={departureDate}
                onChange={(date: Date | null) => {
                  setDepartureDate(date);

                  if (date && returnDate && date > returnDate) {
                    setReturnDate(null);
                  }
                }}
                minDate={new Date()}
                locale="vi"
                dateFormat="dd/MM/yyyy"
                className="w-full pl-8 pr-24 py-2 bg-white border border-slate-300 rounded-lg text-base md:text-sm focus:outline-none focus:ring-1 focus:ring-emerald-600"
                wrapperClassName="w-full"
              />

              <Calendar className="w-4 h-4 text-slate-400 absolute left-2.5 pointer-events-none z-10" />

              {departureDate && (
                <span className="absolute right-2 text-[10px] md:text-xs text-slate-500 bg-slate-50 px-1.5 py-0.5 rounded border-l pointer-events-none z-10">
                  {getLunarDateString(departureDate)}
                </span>
              )}
            </div>
          </div>
          {/* Ngày về */}
          <div>
            <div className="flex items-center justify-between gap-2">
              {" "}
              <label className="block text-xs font-semibold mb-1 text-slate-600">
                {" "}
                Ngày về{" "}
              </label>{" "}
              {returnDate && (
                <button
                  type="button"
                  onClick={() => setReturnDate(null)}
                  title="Bỏ chọn ngày về"
                  className="flex items-center gap-1 mb-1 text-xs text-red-500 hover:text-red-600 transition cursor-pointer"
                >
                  {" "}
                  <span>Bỏ chọn ngày về</span> <X className="w-4 h-4" />
                </button>
              )}{" "}
            </div>

            <div className="relative flex items-center">
              <DatePicker
                selected={returnDate}
                onChange={(date: Date | null) => setReturnDate(date)}
                minDate={departureDate || new Date()}
                placeholderText="Chọn ngày"
                locale="vi"
                dateFormat="dd/MM/yyyy"
                className="w-full pl-8 pr-20 py-2 bg-white border border-slate-300 rounded-lg text-base md:text-sm focus:outline-none focus:ring-1 focus:ring-emerald-600"
                wrapperClassName="w-full"
              />

              {/* Icon lịch */}
              <Calendar className="w-4 h-4 text-slate-400 absolute left-2.5 pointer-events-none z-10" />

              {/* Ngày âm lịch */}
              {returnDate && (
                <span className="absolute right-8 text-[10px] md:text-xs text-slate-500 bg-slate-50 px-1.5 py-0.5 rounded border-l pointer-events-none z-10">
                  {getLunarDateString(returnDate)}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Số lượng hành khách */}
        <div className="grid grid-cols-3 gap-2">
          <div>
            <label className="block text-xs font-semibold mb-1 text-slate-600">
              Người lớn{" "}
              <span className="text-rose-500 font-normal">(≥ 12t)</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none" />
              <select
                value={adt}
                onChange={(e) => setAdt(Number(e.target.value))}
                className="w-full pl-7 pr-2 py-2 bg-white border border-slate-300 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-emerald-600"
              >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1 text-slate-600">
              Trẻ em <span className="text-rose-500 font-normal">(2-12t)</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none" />
              <select
                value={chd}
                onChange={(e) => setChd(Number(e.target.value))}
                className="w-full pl-7 pr-2 py-2 bg-white border border-slate-300 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-emerald-600"
              >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1 text-slate-600">
              Em bé <span className="text-rose-500 font-normal">(&lt; 2t)</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none" />
              <select
                value={inf}
                onChange={(e) => setInf(Number(e.target.value))}
                className="w-full pl-7 pr-2 py-2 bg-white border border-slate-300 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-emerald-600"
              >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {error && (
          <div className="text-rose-600 text-xs mt-1 font-semibold">
            {error}
          </div>
        )}

        {/* Nút Tìm Chuyến Bay */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-3 gap-4">
          <button
            type="button"
            onClick={handleSearchSubmit}
            disabled={loading}
            className="w-full sm:w-auto px-8 py-3 bg-[#f2542d] hover:bg-[#e0431c] active:scale-98 disabled:bg-slate-400 text-white font-bold rounded-xl flex items-center justify-center space-x-2 shadow-md uppercase tracking-wider transition cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span className="text-sm sm:text-base">
                  ĐANG TÌM CHUYẾN BAY...
                </span>
              </>
            ) : (
              <>
                <Search className="w-5 h-5" />
                <span className="text-sm sm:text-base">TÌM CHUYẾN BAY</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
