"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Phone,
  ArrowRightLeft,
  Calendar,
  User,
  Search,
  List,
  Home,
  MessageSquare,
  MapPin,
  Monitor,
  RefreshCw,
  X,
  Loader2,
} from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useFlightSearch } from "@/hook/useFlightSearch";

// Structure for Airport Categories
interface AirportItem {
  id: string;
  name: string;
}

interface AirportCategory {
  title: string;
  airports: AirportItem[];
}

const AIRPORT_DATA: AirportCategory[] = [
  {
    title: "MIỀN BẮC",
    airports: [
      { id: "HAN", name: "Hà Nội (HAN)" },
      { id: "HPH", name: "Hải Phòng (HPH)" },
      { id: "VDO", name: "Vân Đồn (VDO)" },
      { id: "DIN", name: "Điện Biên (DIN)" },
    ],
  },
  {
    title: "MIỀN TRUNG",
    airports: [
      { id: "DAD", name: "Đà Nẵng (DAD)" },
      { id: "THD", name: "Thanh Hóa (THD)" },
      { id: "VII", name: "Vinh (VII)" },
      { id: "HUI", name: "Huế (HUI)" },
      { id: "VDH", name: "Đồng Hới (VDH)" },
      { id: "VCL", name: "Chu Lai (VCL)" },
    ],
  },
  {
    title: "MIỀN NAM",
    airports: [
      { id: "SGN", name: "Hồ Chí Minh (SGN)" },
      { id: "CXR", name: "Nha Trang (CXR)" },
      { id: "PQC", name: "Phú Quốc (PQC)" },
      { id: "VCA", name: "Cần Thơ (VCA)" },
      { id: "DLI", name: "Đà Lạt (DLI)" },
      { id: "UIH", name: "Qui Nhơn (UIH)" },
      { id: "TBB", name: "Tuy Hòa (TBB)" },
      { id: "BMV", name: "Buôn Ma Thuột (BMV)" },
      { id: "PXU", name: "Pleiku (PXU)" },
      { id: "VCS", name: "Côn Đảo (VCS)" },
      { id: "VKG", name: "Rạch Giá (VKG)" },
      { id: "CAH", name: "Cà Mau (CAH)" },
      { id: "LTH", name: "Long Thành (LTH)" },
    ],
  },
  {
    title: "ĐÔNG NAM Á + ÚC",
    airports: [
      { id: "BKK", name: "Bangkok (BKK)" },
      { id: "HKT", name: "Phuket (HKT)" },
      { id: "CNX", name: "Chiang Mai (CNX)" },
      { id: "SIN", name: "Singapore (SIN)" },
      { id: "KUL", name: "Kuala Lumpur (KUL)" },
      { id: "VTE", name: "Vientiane (VTE)" },
      { id: "PNH", name: "Phnom Penh (PNH)" },
      { id: "REP", name: "Siem Reap (REP)" },
      { id: "JKT", name: "Jakarta (JKT)" },
      { id: "DPS", name: "Denpasar Bali (DPS)" },
      { id: "RGN", name: "Yangon (RGN)" },
      { id: "MNL", name: "Manila (MNL)" },
    ],
  },
  {
    title: "CHÂU ÚC",
    airports: [
      { id: "SYD", name: "Sydney (SYD)" },
      { id: "MEL", name: "Melbourne (MEL)" },
    ],
  },
  {
    title: "ĐÔNG BẮC Á",
    airports: [
      { id: "NRT", name: "Tokyo Narita (NRT)" },
      { id: "KIX", name: "Osaka (KIX)" },
      { id: "ICN", name: "Seoul Incheon(ICN)" },
      { id: "PUS", name: "Busan (PUS)" },
      { id: "CAN", name: "Quảng Châu (CAN)" },
      { id: "PVG", name: "Thượng Hải (PVG)" },
      { id: "PEK", name: "Bắc Kinh (PEK)" },
      { id: "SZX", name: "Thâm Quyến (SZX)" },
      { id: "CTU", name: "Thành Đô (CTU)" },
      { id: "HGH", name: "Hàng Châu (HGH)" },
      { id: "TPE", name: "Đài Bắc (TPE)" },
      { id: "KHH", name: "Cao Hùng (KHH)" },
      { id: "HKG", name: "Hong Kong (HKG)" },
      { id: "DEL", name: "New Delhi (DEL)" },
      { id: "BOM", name: "Mumbai (BOM)" },
    ],
  },
  {
    title: "CHÂU ÂU",
    airports: [
      { id: "CDG", name: "Paris (CDG)" },
      { id: "FRA", name: "Frankfurt (FRA)" },
      { id: "BER", name: "Berlin (BER)" },
      { id: "LHR", name: "London (LHR)" },
      { id: "SVO", name: "Moscow (SVO)" },
      { id: "AMS", name: "Amsterdam (AMS)" },
      { id: "ROM", name: "Rome (ROM)" },
      { id: "MXP", name: "Milan (MXP)" },
      { id: "GVA", name: "Geneva (GVA)" },
      { id: "MAD", name: "Madrid (MAD)" },
      { id: "BCN", name: "Barcelona (BCN)" },
      { id: "ARN", name: "Stockholm (ARN)" },
      { id: "CPH", name: "Copenhagen (CPH)" },
      { id: "HEL", name: "Helsinki (HEL)" },
      { id: "VIE", name: "Vienna (VIE)" },
    ],
  },
  {
    title: "CHÂU MỸ",
    airports: [
      { id: "LAX", name: "Los Angeles (LAX)" },
      { id: "SFO", name: "San Francisco (SFO)" },
      { id: "DFW", name: "Dallas Fort Worth (DFW)" },
      { id: "BOS", name: "Boston, Logan (BOS)" },
      { id: "SEA", name: "Seattle, Tacoma (SEA)" },
      { id: "JFK", name: "New York (JFK)" },
      { id: "ORD", name: "Chicago (ORD)" },
      { id: "IAD", name: "Washington (IAD)" },
      { id: "SAN", name: "San Diego (SAN)" },
      { id: "MIA", name: "Miami (MIA)" },
      { id: "HNL", name: "Honolulu (HNL)" },
      { id: "YYZ", name: "Toronto (YYZ)" },
      { id: "YVR", name: "Vancouver (YVR)" },
      { id: "YMQ", name: "Montreal (YMQ)" },
    ],
  },
];

export default function FormBook() {
  const [fromLocation, setFromLocation] = useState("Hồ Chí Minh (SGN)");
  const [toLocation, setToLocation] = useState("Hà Nội (HAN)");
  const [departureDate, setDepartureDate] = useState<Date | null>(new Date());
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const [adt, setAdt] = useState(1);
  const [chd, setChd] = useState(0);
  const [inf, setInf] = useState(0);
  const router = useRouter();
  const { searchFlight, loading, error, flightData } = useFlightSearch();
  // Hàm hỗ trợ đổi ngày Dương lịch sang Âm lịch dạng chuỗi
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
  // State for opening Airport Selection Modal/Dropdown
  // 'origin' | 'destination' | null
  const [activeSelectType, setActiveSelectType] = useState<
    "origin" | "destination" | null
  >(null);
  const [searchQuery, setSearchQuery] = useState("");

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveSelectType(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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

    if (res) {
      // API Datacom trả về Session / SessionId hoặc bạn tự tạo mã định danh duy nhất (ví dụ: Date.now())
      const sessionId = res.Session || res.SearchId || Date.now();

      // Lưu kết quả hoặc các tham số tìm kiếm vào sessionStorage/localStorage để trang /flight/search sử dụng
      if (typeof window !== "undefined") {
        sessionStorage.setItem(
          `flight_search_${sessionId}`,
          JSON.stringify(res),
        );
      }

      // Chuyển hướng sang trang kết quả giống URL của bạn: /flight/search/1712353639.htm
      router.push(`/flight/search/${sessionId}`);
    }
  };

  // Filter airports according to search query
  const filteredAirportData = AIRPORT_DATA.map((cat) => ({
    ...cat,
    airports: cat.airports.filter((ap) => {
      const matchesSearch = ap.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      const isExcluded =
        activeSelectType === "destination"
          ? ap.name === fromLocation
          : activeSelectType === "origin"
            ? ap.name === toLocation
            : false;

      return matchesSearch && !isExcluded;
    }),
  })).filter((cat) => cat.airports.length > 0);

  return (
    <div className="lg:col-span-7 bg-[#e9ecef] p-4 rounded border border-gray-300 shadow-sm relative">
      <h2 className="text-gray-700 font-bold text-sm md:text-base mb-3 uppercase tracking-wide">
        ĐẶT VÉ MÁY BAY NỘI ĐỊA, QUỐC TẾ
      </h2>
      <div className="space-y-3">
        {/* Origin & Destination Group */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 items-center relative">
          <div className="md:col-span-5">
            <label className="block text-xs font-semibold mb-1 text-gray-600">
              Khởi hành từ
            </label>
            <div
              onClick={() => {
                setActiveSelectType("origin");
                setSearchQuery("");
              }}
              className="relative cursor-pointer"
            >
              <span className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-gray-500">
                ✈
              </span>
              <input
                type="text"
                readOnly
                value={fromLocation}
                className="w-full pl-8 pr-2 py-1.5 bg-white border border-gray-300 rounded text-sm focus:outline-none cursor-pointer"
              />
            </div>
          </div>

          <div className="md:col-span-2 flex justify-center pt-2 md:pt-4">
            <button
              onClick={handleSwapLocations}
              title="Đổi chiều"
              className="p-1.5 rounded-full border border-gray-300 bg-white hover:bg-gray-100 text-gray-600 transition shadow-sm"
            >
              <ArrowRightLeft className="w-4 h-4 text-blue-500" />
            </button>
          </div>

          <div className="md:col-span-5">
            <label className="block text-xs font-semibold mb-1 text-gray-600">
              Điểm đến
            </label>
            <div
              onClick={() => {
                setActiveSelectType("destination");
                setSearchQuery("");
              }}
              className="relative cursor-pointer"
            >
              <span className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-gray-500">
                ✈
              </span>
              <input
                type="text"
                readOnly
                value={toLocation}
                className="w-full pl-8 pr-2 py-1.5 bg-white border border-gray-300 rounded text-sm focus:outline-none cursor-pointer"
              />
            </div>
          </div>

          {activeSelectType && (
            <div
              ref={dropdownRef}
              className="absolute top-full left-0 right-0 z-50 mt-1 bg-white border border-gray-300 rounded-md shadow-2xl overflow-hidden w-full min-w-[700px] md:w-[820px]"
              style={{ top: "60px" }}
            >
              <div className="bg-[#006837] text-white px-4 py-2.5 flex justify-between items-center">
                <h3 className="font-bold text-sm tracking-wide uppercase">
                  {activeSelectType === "origin"
                    ? "CHỌN ĐIỂM ĐI"
                    : "CHỌN ĐIỂM ĐẾN"}
                </h3>
                <button
                  onClick={() => setActiveSelectType(null)}
                  className="text-red-500 hover:text-red-400 p-0.5 rounded transition font-bold"
                >
                  <X className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>

              <div className="bg-[#f2f2f2] px-4 py-3 border-b flex items-center justify-center space-x-2">
                <span className="text-xs font-semibold text-gray-700 whitespace-nowrap">
                  Tìm kiếm:
                </span>
                <div className="relative w-full max-w-lg flex items-center">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Nhập mã sân bay; tên sân bay, thành phố, nước"
                    className="w-full px-3 py-1.5 bg-white border border-gray-300 rounded text-xs focus:outline-none focus:border-green-600 pr-8"
                    autoFocus
                  />
                  <Search className="w-4 h-4 text-[#f2542d] absolute right-2.5 pointer-events-none" />
                </div>
              </div>

              <div className="p-4 max-h-[420px] overflow-y-auto bg-white">
                {filteredAirportData.length === 0 ? (
                  <div className="text-center py-6 text-gray-500 text-xs">
                    Không tìm thấy sân bay phù hợp với {searchQuery}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                    {filteredAirportData.map((category, idx) => (
                      <div key={idx} className="space-y-1.5">
                        <h4 className="text-[#d84315] font-bold text-[11px] uppercase tracking-tight border-b border-orange-100 pb-1">
                          {category.title}
                        </h4>
                        <ul className="space-y-1 text-[11px]">
                          {category.airports.map((airport) => (
                            <li
                              key={airport.id}
                              onClick={() => handleSelectAirport(airport.name)}
                              className="text-gray-700 hover:text-[#006837] hover:bg-green-50 px-1 py-0.5 rounded cursor-pointer transition font-normal"
                            >
                              {airport.name}
                            </li>
                          ))}
                        </ul>
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
          <div>
            <label className="block text-xs font-semibold mb-1 text-gray-600">
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
                dateFormat="dd/MM/yyyy"
                className="w-full pl-8 pr-24 py-1.5 bg-white border border-gray-300 rounded text-xs md:text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                wrapperClassName="w-full"
              />
              <Calendar className="w-4 h-4 text-gray-500 absolute left-2.5 pointer-events-none z-10" />
              {departureDate && (
                <span className="absolute right-2 text-[10px] md:text-xs text-gray-500 bg-gray-50 px-1 border-l pointer-events-none z-10">
                  {getLunarDateString(departureDate)}
                </span>
              )}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1 text-gray-600">
              Ngày về
            </label>
            <div className="relative flex items-center">
              <DatePicker
                selected={returnDate}
                onChange={(date: Date | null) => setReturnDate(date)}
                minDate={departureDate || new Date()}
                placeholderText="Chọn ngày"
                dateFormat="dd/MM/yyyy"
                className="w-full pl-8 pr-20 py-1.5 bg-white border border-gray-300 rounded text-xs md:text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                wrapperClassName="w-full"
              />
              <Calendar className="w-4 h-4 text-gray-500 absolute left-2.5 pointer-events-none z-10" />
              {returnDate && (
                <span className="absolute right-2 text-[10px] md:text-xs text-gray-500 bg-gray-50 px-1 border-l pointer-events-none z-10">
                  {getLunarDateString(returnDate)}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Passenger Counts */}
        <div className="grid grid-cols-3 gap-2">
          <div>
            <label className="block text-xs font-semibold mb-1 text-gray-600">
              Người lớn{" "}
              <span className="text-red-500 font-normal">(≥ 12 tuổi)</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-gray-500 absolute left-2 top-2 pointer-events-none" />
              <select
                value={adt}
                onChange={(e) => setAdt(Number(e.target.value))}
                className="w-full pl-7 pr-2 py-1.5 bg-white border border-gray-300 rounded text-xs focus:outline-none"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1 text-gray-600">
              Trẻ em{" "}
              <span className="text-red-500 font-normal">(2-12 tuổi)</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-gray-500 absolute left-2 top-2 pointer-events-none" />
              <select
                value={chd}
                onChange={(e) => setChd(Number(e.target.value))}
                className="w-full pl-7 pr-2 py-1.5 bg-white border border-gray-300 rounded text-xs focus:outline-none"
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1 text-gray-600">
              Em bé{" "}
              <span className="text-red-500 font-normal">(&lt; 2 tuổi)</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-gray-500 absolute left-2 top-2 pointer-events-none" />
              <select
                value={inf}
                onChange={(e) => setInf(Number(e.target.value))}
                className="w-full pl-7 pr-2 py-1.5 bg-white border border-gray-300 rounded text-xs focus:outline-none"
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
          </div>
        </div>

        {/* Thông báo lỗi nếu có */}
        {error && (
          <div className="text-red-500 text-xs mt-1 font-semibold">{error}</div>
        )}

        {/* Submit Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-3 gap-4">
          <button
            onClick={handleSearchSubmit}
            disabled={loading}
            className="w-full sm:w-auto px-8 py-2.5 bg-[#f2542d] hover:bg-[#e0431c] disabled:bg-gray-400 text-white font-bold rounded flex items-center justify-center space-x-2 shadow uppercase tracking-wide transition cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span className="text-base">ĐANG TÌM CHUYẾN BAY...</span>
              </>
            ) : (
              <>
                <Search className="w-5 h-5" />
                <span className="text-base">TÌM CHUYẾN BAY</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
