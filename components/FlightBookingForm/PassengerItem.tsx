"use client";

import React from "react";
import { PassengerFormState } from "./flight-booking-types";

interface PassengerItemProps {
  passenger: PassengerFormState;
  index: number;
  currentYear: number;
  isRoundTrip: boolean;
  isLast: boolean;
  onChange: (
    index: number,
    field: keyof PassengerFormState,
    value: string,
  ) => void;
}

export default function PassengerItem({
  passenger,
  index,
  currentYear,
  isRoundTrip,
  isLast,
  onChange,
}: PassengerItemProps) {
  return (
    <div className="space-y-4">
      <div className="font-bold text-slate-800 text-sm flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#006838]" />
        {passenger.label}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
        {/* GIỚI TÍNH */}
        <div className="md:col-span-2">
          <label className="block text-slate-700 mb-1.5 text-sm font-medium">
            Giới tính
          </label>
          <select
            value={passenger.title}
            onChange={(e) => onChange(index, "title", e.target.value)}
            className="w-full border border-slate-300 p-2.5 rounded-xl text-base md:text-sm focus:outline-none focus:border-[#006838] focus:ring-1 focus:ring-[#006838] bg-white transition-all"
          >
            <option value="Nam">Nam</option>
            <option value="Nữ">Nữ</option>
          </select>
        </div>

        {/* HỌ TÊN */}
        <div className="md:col-span-4">
          <label className="block text-slate-700 mb-1.5 text-sm font-medium">
            Họ và tên <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="VD: NGUYEN VAN A"
            value={passenger.fullName}
            onChange={(e) =>
              onChange(index, "fullName", e.target.value.toUpperCase())
            }
            className="w-full border border-slate-300 p-2.5 rounded-xl text-base md:text-sm focus:outline-none focus:border-[#006838] focus:ring-1 focus:ring-[#006838] uppercase transition-all"
          />
        </div>

        {/* NGÀY SINH */}
        <div className="md:col-span-6">
          <label className="block text-slate-700 mb-1.5 text-sm font-medium">
            Ngày sinh{" "}
            {passenger.type !== "ADULT" && (
              <span className="text-rose-500">*</span>
            )}
          </label>
          <div className="grid grid-cols-3 gap-2">
            <select
              value={passenger.dobDay}
              onChange={(e) => onChange(index, "dobDay", e.target.value)}
              className="w-full border border-slate-300 p-2.5 rounded-xl text-base md:text-sm focus:outline-none focus:border-[#006838] focus:ring-1 focus:ring-[#006838] bg-white"
            >
              <option value="">Ngày</option>
              {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>

            <select
              value={passenger.dobMonth}
              onChange={(e) => onChange(index, "dobMonth", e.target.value)}
              className="w-full border border-slate-300 p-2.5 rounded-xl text-base md:text-sm focus:outline-none focus:border-[#006838] focus:ring-1 focus:ring-[#006838] bg-white"
            >
              <option value="">Tháng</option>
              {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>

            <select
              value={passenger.dobYear}
              onChange={(e) => onChange(index, "dobYear", e.target.value)}
              className="w-full border border-slate-300 p-2.5 rounded-xl text-base md:text-sm focus:outline-none focus:border-[#006838] focus:ring-1 focus:ring-[#006838] bg-white"
            >
              <option value="">Năm</option>
              {Array.from({ length: 85 }, (_, i) => currentYear - i).map(
                (year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ),
              )}
            </select>
          </div>
        </div>

        {/* HÀNH LÝ ĐI */}
        <div className="md:col-span-6">
          <label className="block text-slate-700 mb-1.5 text-sm font-medium">
            Hành lý chiều đi
          </label>
          <select
            value={passenger.departBaggage}
            onChange={(e) => onChange(index, "departBaggage", e.target.value)}
            className="w-full border border-slate-300 p-2.5 rounded-xl text-base md:text-sm focus:outline-none focus:border-[#006838] focus:ring-1 focus:ring-[#006838] bg-white"
          >
            <option value="0">Không mua thêm</option>
            <option value="15">15 kg (+ 180.000đ)</option>
            <option value="20">20 kg (+ 220.000đ)</option>
            <option value="30">30 kg (+ 350.000đ)</option>
          </select>
        </div>

        {/* HÀNH LÝ VỀ */}
        {isRoundTrip && (
          <div className="md:col-span-6">
            <label className="block text-slate-700 mb-1.5 text-sm font-medium">
              Hành lý chiều về
            </label>
            <select
              value={passenger.returnBaggage}
              onChange={(e) => onChange(index, "returnBaggage", e.target.value)}
              className="w-full border border-slate-300 p-2.5 rounded-xl text-base md:text-sm focus:outline-none focus:border-[#006838] focus:ring-1 focus:ring-[#006838] bg-white"
            >
              <option value="0">Không mua thêm</option>
              <option value="15">15 kg (+ 180.000đ)</option>
              <option value="20">20 kg (+ 220.000đ)</option>
              <option value="30">30 kg (+ 350.000đ)</option>
            </select>
          </div>
        )}
      </div>

      {!isLast && <hr className="border-slate-100 mt-6" />}
    </div>
  );
}
