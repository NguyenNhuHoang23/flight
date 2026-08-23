"use client";

import React from "react";
import {
  AirlineBrand,
  PassengerInfo,
  TicketFormState,
} from "./ticket-types";

interface TicketSidebarProps {
  isRoundTrip: boolean;
  activeFlightIndex: number;
  setActiveFlightIndex: React.Dispatch<
    React.SetStateAction<number>
  >;

  outboundFlight: any;
  inboundFlight: any;

  selectedBrand: AirlineBrand;
  setSelectedBrand: React.Dispatch<
    React.SetStateAction<AirlineBrand>
  >;

  customData: TicketFormState;

  handleInputChange: (
    field: keyof TicketFormState,
    value: string,
  ) => void;

  handlePassengerChange: (
    index: number,
    field: keyof PassengerInfo,
    value: string,
  ) => void;

  handleAddPassenger: () => void;

  handleRemovePassenger: (index: number) => void;
}

export default function TicketSidebar({
  isRoundTrip,
  activeFlightIndex,
  setActiveFlightIndex,
  outboundFlight,
  inboundFlight,
  selectedBrand,
  setSelectedBrand,
  customData,
  handleInputChange,
  handlePassengerChange,
  handleAddPassenger,
  handleRemovePassenger,
}: TicketSidebarProps) {
  return (
    <div className="no-print lg:col-span-3 bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-4 max-h-[85vh] overflow-y-auto">
      {isRoundTrip && (
        <div className="space-y-1">
          <label className="block text-xs font-bold text-black uppercase tracking-wide">
            Chọn chặng bay để tạo vé
          </label>

          <div className="flex rounded-lg bg-slate-100 p-1 gap-1">
            <button
              onClick={() => setActiveFlightIndex(0)}
              className={`flex-1 py-2 text-xs font-bold rounded-md transition text-black ${
                activeFlightIndex === 0
                  ? "bg-white text-sky-700 shadow-sm"
                  : "text-nlack hover:text-slate-900"
              }`}
            >
              🛫 Chiều đi (
              {outboundFlight?.departure || "Đi"})
            </button>

            <button
              onClick={() => setActiveFlightIndex(1)}
              className={`flex-1 py-2 text-xs font-bold rounded-md transition text-black ${
                activeFlightIndex === 1
                  ? "bg-white text-sky-700 shadow-sm"
                  : "text-nlack hover:text-slate-900"
              }`}
            >
              🛬 Chiều về (
              {inboundFlight?.departure || "Về"})
            </button>
          </div>
        </div>
      )}

      <h2 className="font-bold text-slate-900 border-b pb-2 text-sm uppercase tracking-wide">
        1. Thương hiệu hãng vé
      </h2>

      <div className="grid grid-cols-2 gap-2 text-black">
        {[
          {
            id: "vietnam_airlines",
            name: "Vietnam Airlines",
          },
          {
            id: "vietravel",
            name: "Vietravel Airlines",
          },
          {
            id: "vietjet",
            name: "VietJet Air",
          },
          {
            id: "bamboo",
            name: "Bamboo Airways",
          },
        ].map((brand) => (
          <button
            key={brand.id}
            onClick={() =>
              setSelectedBrand(
                brand.id as AirlineBrand,
              )
            }
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
        2. Thông tin vé (
        {activeFlightIndex === 0
          ? "Chiều đi"
          : "Chiều về"}
        )
      </h2>

      <div className="grid grid-cols-2 gap-3 text-xs">
        {/* PNR */}
        <div>
          <label className="block text-slate-500 mb-1 font-semibold">
            Mã đặt chỗ (PNR):
          </label>

          <input
            type="text"
            value={customData.pnr}
            onChange={(e) =>
              handleInputChange(
                "pnr",
                e.target.value,
              )
            }
            className="w-full p-2 border rounded font-mono font-bold text-black"
          />
        </div>

        {/* Flight number */}
        <div>
          <label className="block text-slate-500 mb-1 font-semibold">
            Số chuyến bay:
          </label>

          <input
            type="text"
            value={customData.flightNumber}
            onChange={(e) =>
              handleInputChange(
                "flightNumber",
                e.target.value,
              )
            }
            className="w-full p-2 border rounded font-bold text-black"
          />
        </div>

        {/* PASSENGERS */}
        <div className="col-span-2 space-y-3 pt-2 border-t">
          <div className="flex justify-between items-center">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
              Danh sách hành khách (
              {customData.passengers.length})
            </label>

            <button
              type="button"
              onClick={handleAddPassenger}
              className="px-2.5 py-1 bg-sky-600 hover:bg-sky-700 text-white text-[11px] font-bold rounded shadow-sm transition flex items-center gap-1"
            >
              + Thêm hành khách
            </button>
          </div>

          {customData.passengers.map(
            (p, index) => (
              <div
                key={index}
                className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-2 relative"
              >
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-extrabold text-sky-700">
                    Hành khách #{index + 1}
                  </span>

                  {customData.passengers.length >
                    1 && (
                    <button
                      type="button"
                      onClick={() =>
                        handleRemovePassenger(
                          index,
                        )
                      }
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
                        handlePassengerChange(
                          index,
                          "name",
                          e.target.value,
                        )
                      }
                      className="w-full p-1.5 border rounded font-bold uppercase text-xs text-black"
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
                        handlePassengerChange(
                          index,
                          "dob",
                          e.target.value,
                        )
                      }
                      className="w-full p-1.5 border rounded text-xs text-black"
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
                        handlePassengerChange(
                          index,
                          "seat",
                          e.target.value,
                        )
                      }
                      className="w-full p-1.5 border rounded font-bold text-sky-700 text-xs text-black"
                    />
                  </div>
                </div>
              </div>
            ),
          )}
        </div>

        {/* DATE */}
        <div>
          <label className="block text-slate-500 mb-1 font-semibold">
            Ngày bay:
          </label>

          <input
            type="text"
            value={customData.departDate}
            onChange={(e) =>
              handleInputChange(
                "departDate",
                e.target.value,
              )
            }
            className="w-full p-2 border rounded text-black"
          />
        </div>

        {/* DEPARTURE */}
        <div>
          <label className="block text-slate-500 mb-1 font-semibold">
            Điểm đi (Mã):
          </label>

          <input
            type="text"
            value={customData.departureCode}
            onChange={(e) =>
              handleInputChange(
                "departureCode",
                e.target.value,
              )
            }
            className="w-full p-2 border rounded font-bold text-black"
          />
        </div>

        {/* ARRIVAL */}
        <div>
          <label className="block text-slate-500 mb-1 font-semibold">
            Điểm đến (Mã):
          </label>

          <input
            type="text"
            value={customData.arrivalCode}
            onChange={(e) =>
              handleInputChange(
                "arrivalCode",
                e.target.value,
              )
            }
            className="w-full p-2 border rounded font-bold text-black"
          />
        </div>

        {/* DEPARTURE CITY */}
        <div>
          <label className="block text-slate-500 mb-1 font-semibold">
            Điểm đi (Tên thành phố):
          </label>

          <input
            type="text"
            value={customData.departureCity}
            onChange={(e) =>
              handleInputChange(
                "departureCity",
                e.target.value,
              )
            }
            placeholder="VD: Hồ Chí Minh"
            className="w-full p-2 border rounded text-black"
          />
        </div>

        {/* ARRIVAL CITY */}
        <div>
          <label className="block text-slate-500 mb-1 font-semibold">
            Điểm đến (Tên thành phố):
          </label>

          <input
            type="text"
            value={customData.arrivalCity}
            onChange={(e) =>
              handleInputChange(
                "arrivalCity",
                e.target.value,
              )
            }
            placeholder="VD: Hà Nội"
            className="w-full p-2 border rounded text-black"
          />
        </div>

        {/* DEPART TIME */}
        <div>
          <label className="block text-slate-500 mb-1 font-semibold">
            Giờ cất cánh:
          </label>

          <input
            type="text"
            value={customData.departTime}
            onChange={(e) =>
              handleInputChange(
                "departTime",
                e.target.value,
              )
            }
            className="w-full p-2 border rounded text-black"
          />
        </div>

        {/* ARRIVAL TIME */}
        <div>
          <label className="block text-slate-500 mb-1 font-semibold">
            Giờ hạ cánh:
          </label>

          <input
            type="text"
            value={customData.arrivalTime}
            onChange={(e) =>
              handleInputChange(
                "arrivalTime",
                e.target.value,
              )
            }
            className="w-full p-2 border rounded text-black"
          />
        </div>

        {/* SEAT */}
        <div>
          <label className="block text-slate-500 mb-1 font-semibold">
            Số ghế (Seat):
          </label>

          <input
            type="text"
            value={customData.seat}
            onChange={(e) =>
              handleInputChange(
                "seat",
                e.target.value,
              )
            }
            className="w-full p-2 border rounded font-bold text-sky-700 text-black"
          />
        </div>

        {/* GATE */}
        <div>
          <label className="block text-slate-500 mb-1 font-semibold">
            Cửa ra (Gate):
          </label>

          <input
            type="text"
            value={customData.gate}
            onChange={(e) =>
              handleInputChange(
                "gate",
                e.target.value,
              )
            }
            className="w-full p-2 border rounded font-bold text-black"
          />
        </div>

        {/* CABIN */}
        <div>
          <label className="block text-slate-500 mb-1 font-semibold">
            Hạng ghế:
          </label>

          <input
            type="text"
            value={customData.cabinClass}
            onChange={(e) =>
              handleInputChange(
                "cabinClass",
                e.target.value,
              )
            }
            className="w-full p-2 border rounded text-black"
          />
        </div>

        {/* BAGGAGE */}
        <div>
          <label className="block text-slate-500 mb-1 font-semibold">
            Hành lý ký gửi:
          </label>

          <input
            type="text"
            value={customData.baggage}
            onChange={(e) =>
              handleInputChange(
                "baggage",
                e.target.value,
              )
            }
            className="w-full p-2 border rounded text-black"
          />
        </div>

        {/* STATUS */}
        <div>
          <label className="block text-slate-500 mb-1 font-semibold">
            Tình trạng chỗ:
          </label>

          <select
            value={customData.ticketStatus}
            onChange={(e) =>
              handleInputChange(
                "ticketStatus",
                e.target.value,
              )
            }
            className="w-full p-2 border rounded font-bold bg-white text-black"
          >
            <option value="">Trống</option>
            <option value="ĐANG XỬ LÝ">
              Đang xử lý
            </option>
            <option value="ĐÃ XÁC NHẬN">
              Đã xác nhận
            </option>
          </select>
        </div>

        {/* QR */}
        <div>
          <label className="block text-slate-500 mb-1 font-semibold">
            Mã QR Bữa ăn:
          </label>

          <div className="flex items-center gap-3">
            <input
              type="file"
              accept="image/*"
              id="meal-qr-upload"
              className="hidden text-black"
              onChange={(e) => {
                const file =
                  e.target.files?.[0];

                if (!file) return;

                const reader =
                  new FileReader();

                reader.onloadend = () => {
                  handleInputChange(
                    "mealQr",
                    reader.result as string,
                  );
                };

                reader.readAsDataURL(file);
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
                  onClick={() =>
                    handleInputChange(
                      "mealQr",
                      "",
                    )
                  }
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
  );
}