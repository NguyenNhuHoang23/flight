"use client";

import React, { useState, use } from "react";
import { useRouter } from "next/navigation";
import { MOCK_ORDERS, Order } from "../data"; // Đảm bảo đúng path tệp data của bạn
import Image from "next/image";

type AirlineBrand = "vietnam_airlines" | "vietravel" | "vietjet" | "bamboo";

interface PassengerInfo {
  name: string;
  dob: string;
  seat: string;
  gate: string;
}
interface TicketFormState {
  pnr: string;
  passengers: PassengerInfo[];
  flightNumber: string;
  departureCode: string;
  departureCity: string;
  arrivalCode: string;
  arrivalCity: string;
  departDate: string;
  departTime: string;
  arrivalTime: string;
  flightDuration: string;
  mealQr: string | null; // Thêm trường mealQr để lưu đường dẫn QR code bữa ăn
  cabinClass: string;
  seat: string;
  gate: string;
  terminal: string;
  baggage: string;
  meal: string;
  seq: string;
  ticketStatus: string;
  ticketNumber: string;
  invoiceNo: string;
}

export default function CustomTicketPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const resolvedParams = use(params);
  const orderId = resolvedParams.id;

  // Tìm đơn hàng tương ứng
  const order: Order | undefined = MOCK_ORDERS.find((o) => o.id === orderId);

  // Mặc định chuyến bay đi (index 0) và chuyến bay về (index 1 nếu có)
  const outboundFlight = order?.flights[0];
  const inboundFlight = order?.flights[1];
  const firstPassenger = order?.passengers[0];

  const isRoundTrip =
    order?.flightType === "round_trip" || (order?.flights.length ?? 0) > 1;

  // Tab active: 0 = Chiều đi, 1 = Chiều về
  const [activeFlightIndex, setActiveFlightIndex] = useState<number>(0);

  // Mẫu vé được chọn
  const [selectedBrand, setSelectedBrand] =
    useState<AirlineBrand>("vietnam_airlines");

  // Helper khởi tạo state vé theo thông tin flight
  const createInitialTicketData = (
    flight: typeof outboundFlight,
  ): TicketFormState => ({
    pnr: order?.id || "NFT3N5",
    passengers: order?.passengers?.length
      ? order.passengers.map((p) => ({
          name: p.name || "PHẠM THỊ HỢI",
          dob: "22/07/1983",
          seat: "6A",
          gate: "01",
        }))
      : [{ name: "PHẠM THỊ HỢI", dob: "22/07/1983", seat: "6A", gate: "01" }],
    flightNumber: flight?.flightNumber || "VN218",
    departureCode: flight?.departure || "SGN",
    departureCity: flight?.departure === "SGN" ? "Hồ Chí Minh" : "Hà Nội",
    arrivalCode: flight?.arrival || "HAN",
    arrivalCity: flight?.arrival === "HAN" ? "Hà Nội" : "Hồ Chí Minh",
    departDate: "Thứ Sáu, 17/07/2026",
    departTime: flight?.departTime
      ? flight.departTime.split(" ")[1] || "18:00"
      : "18:00",
    arrivalTime: "20:10",
    mealQr: null,
    flightDuration: "2h 10m",
    cabinClass: "Phổ thông",
    seat: "6A",
    gate: "01",
    terminal: "Terminal 1",
    baggage: "20KG KÝ GỬI",
    meal: "Không",
    seq: "03",
    ticketStatus: "ĐÃ XÁC NHẬN",
    ticketNumber: "7382910239123",
    invoiceNo: "920000334",
  });

  const handlePassengerChange = (
    index: number,
    field: keyof PassengerInfo,
    value: string,
  ) => {
    setTicketsData((prev) => {
      const next = [...prev];
      const updatedPassengers = [...next[activeFlightIndex].passengers];
      updatedPassengers[index] = {
        ...updatedPassengers[index],
        [field]: value,
      };
      next[activeFlightIndex] = {
        ...next[activeFlightIndex],
        passengers: updatedPassengers,
      };
      return next;
    });
  };

  // Thêm hành khách mới
  const handleAddPassenger = () => {
    setTicketsData((prev) => {
      const next = [...prev];
      next[activeFlightIndex] = {
        ...next[activeFlightIndex],
        passengers: [
          ...next[activeFlightIndex].passengers,
          {
            name: "HÀNH KHÁCH MỚI",
            dob: "01/01/1990",
            seat: "12B",
            gate: "01",
          },
        ],
      };
      return next;
    });
  };

  // Xóa hành khách
  const handleRemovePassenger = (index: number) => {
    setTicketsData((prev) => {
      const next = [...prev];
      const updatedPassengers = next[activeFlightIndex].passengers.filter(
        (_, i) => i !== index,
      );
      if (updatedPassengers.length === 0) return prev; // Giữ lại ít nhất 1 người
      next[activeFlightIndex] = {
        ...next[activeFlightIndex],
        passengers: updatedPassengers,
      };
      return next;
    });
  };

  // State lưu thông tin custom riêng cho từng chặng bay [Chiều đi, Chiều về]
  const [ticketsData, setTicketsData] = useState<TicketFormState[]>([
    createInitialTicketData(outboundFlight),
    createInitialTicketData(inboundFlight || outboundFlight),
  ]);

  if (!order) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-xl font-bold text-red-600">
          Không tìm thấy đơn hàng #{orderId}
        </h2>
        <button
          onClick={() => router.back()}
          className="mt-4 px-4 py-2 bg-slate-800 text-white rounded"
        >
          Quay lại
        </button>
      </div>
    );
  }

  // Lấy dữ liệu vé hiện tại dựa theo Tab
  const customData = ticketsData[activeFlightIndex];

  // Thay đổi input của chặng đang chọn
  const handleInputChange = (field: keyof TicketFormState, value: string) => {
    setTicketsData((prev) => {
      const next = [...prev];
      next[activeFlightIndex] = {
        ...next[activeFlightIndex],
        [field]: value,
      };
      return next;
    });
  };

  return (
    <div className="min-h-screen">
      {/* CSS Ẩn các phần không cần thiết khi bấm In */}
      <style jsx global>{`
        @media print {
          .no-print {
            display: none !important;
          }
          body {
            background-color: #fff !important;
          }
          .print-area {
            box-shadow: none !important;
            border: none !important;
            margin: 0 !important;
            padding: 0 !important;
          }
        }
      `}</style>

      {/* HEADER TÁC VỤ (NO-PRINT) */}
      <div className="no-print max-w-8xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-200">
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.back()}
            className="px-3 py-1.5 text-xs font-semibold bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 transition"
          >
            ← Quay lại danh sách
          </button>
          <h1 className="text-lg font-bold text-slate-800">
            Tùy biến & In vé đơn hàng:{" "}
            <span className="text-sky-600">{order.id}</span>
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              // Lấy orderId từ URL hiện tại của bạn (ví dụ: ORD-2026-001)
              const orderId = "ORD-2026-001";

              // Đóng gói và lưu toàn bộ data vé hiện tại vào localStorage
              localStorage.setItem(
                `print_ticket_${orderId}`,
                JSON.stringify(customData),
              );

              // Mở sang đường dẫn trang in mới kèm theo brand đang chọn
              window.open(
                `/admin/orders/${orderId}/print?brand=${selectedBrand}`,
                "_blank",
              );
            }}
            className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-lg shadow transition flex items-center gap-1.5"
          >
            🖨️ In Vé Ngay ({activeFlightIndex === 0 ? "Chiều đi" : "Chiều về"})
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* BÊN TRÁI: KHUNG ĐIỀU CHỈNH INPUT (NO-PRINT) */}
        <div className="no-print lg:col-span-3 bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-4 max-h-[85vh] overflow-y-auto">
          {/* TAB CHỌN CHIỀU BAY (NẾU LÀ KHỨ HỒI) */}
          {isRoundTrip && (
            <div className="space-y-1">
              <label className="block text-xs font-bold text-black uppercase tracking-wide">
                Chọn chặng bay để tạo vé
              </label>
              <div className="flex rounded-lg bg-slate-100 p-1 gap-1">
                <button
                  onClick={() => setActiveFlightIndex(0)}
                  className={`flex-1 py-2 text-xs font-bold rounded-md transition ${
                    activeFlightIndex === 0
                      ? "bg-white text-sky-700 shadow-sm"
                      : "text-nlack hover:text-slate-900"
                  }`}
                >
                  🛫 Chiều đi ({outboundFlight?.departure || "Đi"})
                </button>
                <button
                  onClick={() => setActiveFlightIndex(1)}
                  className={`flex-1 py-2 text-xs font-bold rounded-md transition ${
                    activeFlightIndex === 1
                      ? "bg-white text-sky-700 shadow-sm"
                      : "text-nlack hover:text-slate-900"
                  }`}
                >
                  🛬 Chiều về ({inboundFlight?.departure || "Về"})
                </button>
              </div>
            </div>
          )}

          <h2 className="font-bold text-slate-900 border-b pb-2 text-sm uppercase tracking-wide">
            1. Thương hiệu hãng vé
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {[
              { id: "vietnam_airlines", name: "Vietnam Airlines" },
              { id: "vietravel", name: "Vietravel Airlines" },
              { id: "vietjet", name: "VietJet Air" },
              { id: "bamboo", name: "Bamboo Airways" },
            ].map((brand) => (
              <button
                key={brand.id}
                onClick={() => setSelectedBrand(brand.id as AirlineBrand)}
                className={`p-2.5 rounded-lg border text-xs font-bold transition text-left ${
                  selectedBrand === brand.id
                    ? "border-sky-600 bg-sky-50 text-sky-800 ring-2 ring-sky-500/20"
                    : "border-slate-200 hover:bg-slate-50 text-nlack"
                }`}
              >
                {brand.name}
              </button>
            ))}
          </div>

          <h2 className="font-bold text-slate-900 border-b pb-2 text-sm uppercase tracking-wide pt-2">
            2. Thông tin vé ({activeFlightIndex === 0 ? "Chiều đi" : "Chiều về"}
            )
          </h2>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div>
              <label className="block text-slate-500 mb-1 font-semibold">
                Mã đặt chỗ (PNR):
              </label>
              <input
                type="text"
                value={customData.pnr}
                onChange={(e) => handleInputChange("pnr", e.target.value)}
                className="w-full p-2 border rounded font-mono font-bold"
              />
            </div>
            <div>
              <label className="block text-slate-500 mb-1 font-semibold">
                Số chuyến bay:
              </label>
              <input
                type="text"
                value={customData.flightNumber}
                onChange={(e) =>
                  handleInputChange("flightNumber", e.target.value)
                }
                className="w-full p-2 border rounded font-bold"
              />
            </div>

            <div className="col-span-2 space-y-3 pt-2 border-t">
              <div className="flex justify-between items-center">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                  Danh sách hành khách ({customData.passengers.length})
                </label>
                <button
                  type="button"
                  onClick={handleAddPassenger}
                  className="px-2.5 py-1 bg-sky-600 hover:bg-sky-700 text-white text-[11px] font-bold rounded shadow-sm transition flex items-center gap-1"
                >
                  + Thêm hành khách
                </button>
              </div>

              {customData.passengers.map((p, index) => (
                <div
                  key={index}
                  className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-2 relative"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-[11px] font-extrabold text-sky-700">
                      Hành khách #{index + 1}
                    </span>
                    {customData.passengers.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemovePassenger(index)}
                        className="text-red-500 hover:text-red-700 text-xs font-bold"
                      >
                        ✕ Xóa
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="col-span-2">
                      <label className="block text-[10px] text-slate-500 mb-0.5 font-semibold">
                        Họ và tên:
                      </label>
                      <input
                        type="text"
                        value={p.name}
                        onChange={(e) =>
                          handlePassengerChange(index, "name", e.target.value)
                        }
                        className="w-full p-1.5 border rounded font-bold uppercase text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] text-slate-500 mb-0.5 font-semibold">
                        Ngày sinh:
                      </label>
                      <input
                        type="text"
                        value={p.dob}
                        onChange={(e) =>
                          handlePassengerChange(index, "dob", e.target.value)
                        }
                        className="w-full p-1.5 border rounded text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] text-slate-500 mb-0.5 font-semibold">
                        Số ghế (Seat):
                      </label>
                      <input
                        type="text"
                        value={p.seat}
                        onChange={(e) =>
                          handlePassengerChange(index, "seat", e.target.value)
                        }
                        className="w-full p-1.5 border rounded font-bold text-sky-700 text-xs"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <label className="block text-slate-500 mb-1 font-semibold">
                Ngày bay:
              </label>
              <input
                type="text"
                value={customData.departDate}
                onChange={(e) =>
                  handleInputChange("departDate", e.target.value)
                }
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block text-slate-500 mb-1 font-semibold">
                Điểm đi (Mã):
              </label>
              <input
                type="text"
                value={customData.departureCode}
                onChange={(e) =>
                  handleInputChange("departureCode", e.target.value)
                }
                className="w-full p-2 border rounded font-bold"
              />
            </div>
            <div>
              <label className="block text-slate-500 mb-1 font-semibold">
                Điểm đến (Mã):
              </label>
              <input
                type="text"
                value={customData.arrivalCode}
                onChange={(e) =>
                  handleInputChange("arrivalCode", e.target.value)
                }
                className="w-full p-2 border rounded font-bold"
              />
            </div>

            <div>
              <label className="block text-slate-500 mb-1 font-semibold">
                Giờ cất cánh:
              </label>
              <input
                type="text"
                value={customData.departTime}
                onChange={(e) =>
                  handleInputChange("departTime", e.target.value)
                }
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-slate-500 mb-1 font-semibold">
                Giờ hạ cánh:
              </label>
              <input
                type="text"
                value={customData.arrivalTime}
                onChange={(e) =>
                  handleInputChange("arrivalTime", e.target.value)
                }
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block text-slate-500 mb-1 font-semibold">
                Số ghế (Seat):
              </label>
              <input
                type="text"
                value={customData.seat}
                onChange={(e) => handleInputChange("seat", e.target.value)}
                className="w-full p-2 border rounded font-bold text-sky-700"
              />
            </div>
            <div>
              <label className="block text-slate-500 mb-1 font-semibold">
                Cửa ra (Gate):
              </label>
              <input
                type="text"
                value={customData.gate}
                onChange={(e) => handleInputChange("gate", e.target.value)}
                className="w-full p-2 border rounded font-bold"
              />
            </div>

            <div>
              <label className="block text-slate-500 mb-1 font-semibold">
                Hạng ghế:
              </label>
              <input
                type="text"
                value={customData.cabinClass}
                onChange={(e) =>
                  handleInputChange("cabinClass", e.target.value)
                }
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-slate-500 mb-1 font-semibold">
                Hành lý ký gửi:
              </label>
              <input
                type="text"
                value={customData.baggage}
                onChange={(e) => handleInputChange("baggage", e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-slate-500 mb-1 font-semibold">
                Tình trạng chỗ:
              </label>
              <select
                value={customData.ticketStatus}
                onChange={(e) =>
                  handleInputChange("ticketStatus", e.target.value)
                }
                className="w-full p-2 border rounded font-bold bg-white"
              >
                <option value="">Trống</option>
                <option value="ĐANG XỬ LÝ">Đang xử lý</option>
                <option value="ĐÃ XÁC NHẬN">Đã xác nhận</option>
              </select>
            </div>
            <div>
              <label className="block text-slate-500 mb-1 font-semibold">
                Mã QR Bữa ăn:
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="file"
                  accept="image/*"
                  id="meal-qr-upload"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        handleInputChange("mealQr", reader.result as string);
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
                <label
                  htmlFor="meal-qr-upload"
                  className="cursor-pointer px-3 py-1.5 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded text-xs font-semibold text-slate-700 transition"
                >
                  📷 Tải ảnh QR lên
                </label>

                {customData.mealQr && (
                  <div className="flex items-center gap-2">
                    <img
                      src={customData.mealQr}
                      alt="QR Xem trước"
                      className="w-8 h-8 object-cover rounded border"
                    />
                    <button
                      type="button"
                      onClick={() => handleInputChange("mealQr", "")}
                      className="text-red-500 hover:text-red-700 text-xs font-bold"
                    >
                      Xóa QR
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* BÊN PHẢI: XEM TRƯỚC VÉ ĐƯỢC CUSTOM (PREVIEW / PRINT) */}
        <div className="lg:col-span-9 flex justify-center">
          <div className="print-area w-full max-w-[880px]">
            {/* MẪU VIETNAM AIRLINES HOẶC VIETRAVEL AIRLINES */}
            {(selectedBrand === "vietnam_airlines" ||
              selectedBrand === "vietravel") && (
              <div
                className={`${selectedBrand === "vietnam_airlines" ? "bg-[#f8f8f8]" : "bg-[#dbebf2]"} border border-slate-300 p-6 rounded-sm shadow-md font-sans text-slate-800`}
              >
                <div className="flex justify-between items-start border-b pb-4 mb-4">
                  <div>
                    <div className="text-[11px] font-bold text-slate-900 uppercase">
                      MÃ ĐẶT CHỖ
                    </div>
                    <div className="text-[11px] font-extrabold tracking-wider text-slate-900">
                      {customData.pnr}
                    </div>
                  </div>
                  <div>
                    {selectedBrand === "vietnam_airlines" ? (
                      <Image
                        src="/images/ve/VietnamAli.webp"
                        alt="Vietnam Airlines Logo"
                        width={200}
                        height={40}
                      />
                    ) : (
                      <Image
                        src="/images/ve/VietravelAli.png"
                        alt="Vietravel Airlines Logo"
                        width={200}
                        height={40}
                      />
                    )}
                  </div>
                </div>

                {/* Đưa 'relative overflow-hidden' vào khung này để máy bay chỉ nằm trong đây */}
                <div className="border border-slate-200 rounded-sm shadow relative overflow-hidden bg-white">
                  {/* Hình máy bay vector mờ (chỉ nằm trong khung này) */}
                  <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
                    <img
                      src="/images/may-bay-vector-png-09.png"
                      alt=""
                      className="w-[70%] max-w-none opacity-[0.10] object-contain select-none"
                    />
                  </div>

                  {/* Nội dung bên trong được đẩy lên z-10 để không bị che */}
                  <div className="relative z-10">
                    <div className="bg-slate-100 p-2.5 flex items-center gap-3 text-xs font-bold text-black border-b border-black">
                      <span className="text-xl">✈</span>
                      <div className="flex flex-col gap-0.5">
                        <span>
                          KHỞI HÀNH: {customData.departDate.toUpperCase()}
                        </span>
                        <span className="text-red-600 font-normal">
                          Vui lòng kiểm tra thời gian bay trước khi khởi hành
                        </span>
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="grid grid-cols-4 gap-4 text-xs mb-6">
                        <div className="space-y-1.5">
                          <div className="font-bold text-sm">
                            {selectedBrand === "vietnam_airlines"
                              ? "Vietnam Airlines"
                              : "Vietravel Airlines"}
                          </div>
                          <div className="font-bold text-sm text-slate-900">
                            {customData.flightNumber}
                          </div>
                          <div className="text-sm text-black grid grid-cols gap-0.5">
                            Thời gian bay:{" "}
                            <span className="font-bold text-slate-700">
                              {customData.flightDuration}
                            </span>
                          </div>
                          <div className="text-sm text-black grid grid-cols gap-0.5">
                            Khoảng:{" "}
                            <span className="font-bold text-slate-700">
                              {customData.cabinClass}
                            </span>
                          </div>
                          <div className="text-sm text-black grid grid-cols gap-0.5">
                            Tình trạng chỗ:{" "}
                            <span className="font-bold text-slate-900">
                              {customData.ticketStatus}
                            </span>
                          </div>
                        </div>
                        <div className="col-span-2 rounded-sm text-xs relative">
                          {/* Mũi tên nằm chính giữa tuyệt đối */}
                          <div className="absolute left-38 top-3 -translate-x-1/2 text-black text-xs font-bold pointer-events-none">
                            ►
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            {/* Cột Khởi hành (Trái) */}
                            <div className="space-y-1.5 pr-1">
                              <div className="text-base font-black text-slate-900 leading-none">
                                {customData.departureCode}
                              </div>
                              <div className="text-sm text-slate-500 leading-tight">
                                {customData.departureCity} (
                                {customData.departureCode})
                              </div>
                              <div className="pt-2 text-sm">
                                <div className="text-slate-600 text-sm">
                                  Giờ khởi hành:
                                </div>
                                <div className="font-bold text-slate-900">
                                  {customData.departTime}
                                </div>
                              </div>
                              <div className="text-sm">
                                <div className="text-slate-600 text-sm">
                                  Cổng:
                                </div>
                                <div className="font-bold text-slate-900">
                                  {customData.terminal}
                                </div>
                              </div>
                            </div>

                            {/* Cột Điểm đến (Phải) */}
                            <div className="space-y-1.5 pl-1">
                              <div className="text-base font-black text-slate-900 leading-none">
                                {customData.arrivalCode}
                              </div>
                              <div className="text-sm text-slate-500 leading-tight">
                                {customData.arrivalCity} (
                                {customData.arrivalCode})
                              </div>
                              <div className="pt-2 text-sm">
                                <div className="text-slate-600 text-sm">
                                  Giờ đến:
                                </div>
                                <div className="font-bold text-slate-900">
                                  {customData.arrivalTime}
                                </div>
                              </div>
                              <div className="text-sm">
                                <div className="text-slate-600 text-sm">
                                  Cổng:
                                </div>
                                <div className="font-bold text-slate-900">
                                  {customData.terminal}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-1 pl-2 text-[11px]">
                          <div>
                            Quãng đường đi (Dặm): <br /> <strong>321</strong>
                          </div>
                          <div>
                            Điểm dừng: <br /> <strong>0</strong>
                          </div>
                          <div>
                            <div>QR chuyến bay:</div>

                            <div className="pt-2 flex justify-start">
                              {customData.mealQr ? (
                                <div className="w-46 h-46 border border-slate-300 p-1.5 bg-white rounded-sm shadow-sm">
                                  <img
                                    src={customData.mealQr}
                                    alt="QR Bữa ăn"
                                    className="w-full h-full object-contain"
                                  />
                                </div>
                              ) : (
                                <div className="text-[11px] text-slate-500 italic pt-1">
                                  (Chưa cập nhật QR bữa ăn)
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border-t pt-4 bg-slate-50">
                        <table className="w-full text-left text-xs border-collapse">
                          <thead className="bg-slate-200 text-black">
                            <tr className="text-[11px] font-bold">
                              <th className="py-2 px-3 w-1/2">
                                Tên Hành Khách:
                              </th>
                              <th className="py-2 px-3 w-1/4">Ghế:</th>
                              <th className="py-2 px-3 w-1/4">
                                Cửa ra tàu bay:
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {customData.passengers.map((p, idx) => (
                              <tr
                                key={idx}
                                className="align-top border-b border-slate-100 last:border-none"
                              >
                                <td className="py-2 px-3 font-extrabold text-slate-900">
                                  » {p.name} - {p.dob}
                                </td>
                                <td
                                  className="py-2 px-3 font-black text-xs"
                                  style={{ color: "#1E65B8" }}
                                >
                                  {p.seat}
                                </td>
                                <td className="py-2 px-3 font-extrabold text-slate-900">
                                  {customData.gate}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* MẪU VIETJET AIR */}
            {selectedBrand === "vietjet" && (
              <div className="bg-white border border-red-600 rounded-sm font-sans max-w-[320px] mx-auto shadow-sm text-slate-900 overflow-hidden">
                {/* Header Logo đỏ */}
                <div className="bg-[#ED1B24] text-white px-4 py-2.5 flex items-center justify-between">
                  <Image
                    src="/images/ve/123.jpg"
                    alt="VietJet Air Logo"
                    width={120}
                    height={30}
                  />
                </div>

                <div className="p-4 space-y-3.5">
                  {/* Thẻ lên tàu bay & Hành lý */}
                  <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                    <span className="font-black text-[#D91B24] text-sm tracking-wide uppercase">
                      THẺ LÊN TÀU BAY
                    </span>
                    <span className="font-bold text-xs uppercase text-slate-800">
                      {customData.baggage || "20KG KÝ GỬI"}
                    </span>
                  </div>

                  {/* Hành trình Đi -> Đến (Đã sửa lỗi lặp chữ) */}
                  <div className="flex justify-between items-center border-b border-dashed border-slate-200 pb-3">
                    <div className="text-left w-[42%]">
                      <div className="text-[10px] text-slate-500 font-medium truncate">
                        {customData.departureCity}
                      </div>
                      <div className="text-base font-black text-black leading-none mt-1">
                        {customData.departureCode}
                      </div>
                    </div>

                    <span className="text-slate-800 text-xs font-bold px-1">
                      ✈
                    </span>

                    <div className="text-right w-[42%]">
                      <div className="text-[10px] text-slate-500 font-medium truncate">
                        {customData.arrivalCity}
                      </div>
                      <div className="text-base font-black text-black leading-none mt-1">
                        {customData.arrivalCode}
                      </div>
                    </div>
                  </div>

                  {/* Hành khách */}
                  <div className="border-b border-dashed border-slate-200 pb-3">
                    <div className="text-[10px] font-bold text-slate-500 uppercase mb-1">
                      HÀNH KHÁCH
                    </div>
                    <div className="font-extrabold text-xs text-black uppercase leading-relaxed whitespace-pre-line">
                      {customData.passengers?.[0]?.name} -{" "}
                      {customData.passengers?.[0]?.dob}
                    </div>
                  </div>

                  {/* Ngày - Chuyến bay - Mã đặt chỗ */}
                  <div className="grid grid-cols-3 gap-2 text-left border-b border-dashed border-slate-200 pb-3">
                    <div>
                      <div className="text-[9px] text-slate-500 font-bold uppercase">
                        NGÀY
                      </div>
                      <div className="font-black text-xs text-black mt-0.5">
                        {customData.departDate}
                      </div>
                    </div>
                    <div>
                      <div className="text-[9px] text-slate-500 font-bold uppercase">
                        CHUYẾN BAY
                      </div>
                      <div className="font-black text-xs text-black mt-0.5">
                        {customData.flightNumber}
                      </div>
                    </div>
                    <div>
                      <div className="text-[9px] text-slate-500 font-bold uppercase">
                        MÃ ĐẶT CHỖ
                      </div>
                      <div className="font-black text-xs text-black mt-0.5">
                        {customData.pnr}
                      </div>
                    </div>
                  </div>

                  {/* Cửa - Giờ ra tàu bay - Số ghế - SEQ */}
                  <div className="grid grid-cols-4 gap-1 text-left border-b border-dashed border-slate-200 pb-3">
                    <div>
                      <div className="text-[9px] text-slate-500 font-bold uppercase">
                        CỬA
                      </div>
                      <div className="font-black text-xs text-black mt-0.5">
                        {customData.gate}
                      </div>
                    </div>
                    <div>
                      <div className="text-[9px] text-slate-500 font-bold uppercase">
                        GIỜ RA TÀU BAY
                      </div>
                      <div className="font-black text-xs text-black mt-0.5">
                        {customData.departTime}
                      </div>
                    </div>
                    <div>
                      <div className="text-[9px] text-slate-500 font-bold uppercase">
                        SỐ GHẾ
                      </div>
                      <div className="font-black text-xs text-black mt-0.5">
                        {customData.seat}
                      </div>
                    </div>
                    <div>
                      <div className="text-[9px] text-slate-500 font-bold uppercase">
                        SEQ
                      </div>
                      <div className="font-black text-xs text-black mt-0.5">
                        {customData.seq || "03"}
                      </div>
                    </div>
                  </div>

                  {/* Tình trạng vé & Mã code */}
                  <div className="flex justify-between items-center border-b border-dashed border-slate-200 pb-3">
                    <div>
                      <div className="text-[9px] text-slate-500 font-bold uppercase">
                        TÌNH TRẠNG VÉ
                      </div>
                      <div className="font-black text-xs text-black uppercase mt-0.5">
                        {customData.ticketStatus || "ĐÃ XÁC NHẬN"}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[9px] text-slate-500 font-bold uppercase">
                        MÃ CODE
                      </div>
                      <div className="font-black text-xs text-black uppercase mt-0.5">
                        CBFS
                      </div>
                    </div>
                  </div>

                  {/* Lưu ý */}
                  <p className="text-[10px] text-slate-500 text-center leading-tight px-1 pt-1">
                    Lưu ý: Cửa khởi hành sẽ đóng 15 phút trước giờ khởi hành.
                    Hành khách sẽ không được phép lên tàu bay khi cửa khởi hành
                    đã đóng.
                  </p>

                  {/* Mã QR */}
                  <div className="pt-2 flex justify-center">
                    <div className="w-28 h-28 bg-white p-1 border border-slate-200 rounded-sm">
                      <img
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${customData.pnr || "TY3BA2"}`}
                        alt="Mã QR"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* MẪU BAMBOO AIRWAYS */}
            {selectedBrand === "bamboo" && (
              <div className="bg-white p-6 font-sans text-slate-800 max-w-4xl mx-auto shadow-sm border border-slate-200 rounded-sm">
                {/* Tiêu đề chính */}
                <h1 className="text-xl font-bold text-slate-800 mb-6 pb-2 border-b border-slate-100">
                  Số vé điện tử
                </h1>

                {/* Header: Mã QR + Thông tin đặt chỗ (Trái) & Logo + Công ty (Phải) */}
                <div className="flex justify-between items-start mb-8">
                  {/* Khối bên trái: QR & PNR */}
                  <div className="flex gap-4 items-start">
                    <div className="w-16 h-16 border border-slate-300 p-1 bg-white">
                      <img
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${customData.pnr || "05FOLA"}`}
                        alt="Mã QR"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="text-xs space-y-0.5">
                      <div className="font-bold text-sm text-slate-800">
                        Mã đặt chỗ:{" "}
                        <span className="font-mono">
                          {customData.pnr || "05FOLA"}
                        </span>
                      </div>
                      <div className="text-slate-500 text-[11px]">
                        Ngày phát hành: 27.12.2019
                      </div>
                      <div className="text-slate-500 text-[11px]">
                        Ngày thay đổi: 05.02.2020
                      </div>
                      <div className="text-slate-500 text-[11px]">
                        Nơi xuất vé: ZION
                      </div>
                    </div>
                  </div>

                  {/* Khối bên phải: Logo & Thông tin pháp lý Bamboo */}
                  <div className="text-right space-y-0.5 max-w-[280px]">
                    <div className="flex justify-end items-center gap-1">
                      <Image
                        src={`/images/ve/Bamboo_Air.png`}
                        alt="Logo Bamboo Airways"
                        width={180}
                        height={50}
                      />
                    </div>
                    <div className="text-[9px] text-slate-500 leading-tight pt-1">
                      Bamboo Airways JSC
                    </div>
                    <div className="text-[9px] text-slate-500 leading-tight">
                      Khu số 4, khu du lịch biển Nhơn Lý - Cát Tiến, xã Nhơn Lý,
                      Thành phố Quy Nhơn, tỉnh Bình Định, Việt Nam
                    </div>
                    <div className="text-[9px] text-slate-500 leading-tight pt-0.5">
                      Mã số thuế: 0107867370
                    </div>
                  </div>
                </div>

                {/* Phần Hành Khách */}
                <div className="mb-6">
                  <h2 className="font-bold text-slate-800 text-sm mb-2">
                    Hành khách
                  </h2>
                  <div className="border-t border-slate-200 pt-2 grid grid-cols-5 gap-2 text-[11px] text-nlack">
                    <div className="font-bold text-slate-800 uppercase">
                      {customData.passengers?.[0]?.name || "PHUONG ANH MAI"}
                    </div>
                    <div>
                      Ngày sinh:
                      <br />
                      <span className="font-medium">
                        {customData.passengers?.[0]?.dob || "-"}
                      </span>
                    </div>
                    <div>
                      Số vé điện tử:
                      <br />
                      <span className="font-medium">
                        {customData.ticketNumber || "22421300223"}
                      </span>
                    </div>
                    <div>
                      Hóa đơn số:
                      <br />
                      <span className="font-medium">
                        {customData.invoiceNo || "92600653523"}
                      </span>
                    </div>
                    <div>
                      Mã số khách hàng trung thành:
                      <br />
                      <span className="font-medium">-</span>
                    </div>
                  </div>
                </div>

                {/* Phần Thông Tin Chuyến Bay */}
                <div>
                  <h2 className="font-bold text-slate-800 text-sm mb-2">
                    Thông tin chuyến bay
                  </h2>

                  <div
                    className={`border-t border-slate-200 pt-3 text-xs ${
                      isRoundTrip ? "grid grid-cols-2 gap-8" : "block max-w-md"
                    }`}
                  >
                    {/* Cột Chuyến bay đi (Luôn hiển thị) */}
                    <div className="space-y-1">
                      {isRoundTrip && (
                        <div className="font-bold text-slate-900">
                          Chuyến bay đi
                        </div>
                      )}
                      <div className="font-bold text-slate-900">
                        {customData.departDate || "Thứ Sáu, 31 Tháng Một, 2020"}
                      </div>
                      <div className="font-bold text-slate-900 pt-1">
                        {customData.departTime || "06:55"}{" "}
                        {customData.departureCity || "Hà Nội"} (
                        {customData.departureCode || "HAN"})
                      </div>
                      <div className="font-bold text-slate-900">
                        {customData.arrivalTime || "09:05"}{" "}
                        {customData.arrivalCity || "Hồ Chí Minh"} (
                        {customData.arrivalCode || "SGN"})
                      </div>

                      <div className="text-[#008A4B] font-bold pt-2">
                        Bamboo Airways {customData.flightNumber || "QH 211"}
                      </div>

                      <div className="text-[11px] text-nlack space-y-0.5 pt-0.5">
                        <div>Hãng vận chuyển: Bamboo Airways</div>
                        <div>Nhà ga đi: {customData.terminal || "T1"}</div>
                        <div>Nhà ga đến: T1</div>
                        <div>Thời gian lên máy bay: 06:15</div>
                        <div>
                          Hành lý miễn cước: {customData.baggage || "20KG"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
