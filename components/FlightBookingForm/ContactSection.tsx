"use client";

import React from "react";

import { ContactData, BookingOptions } from "./flight-booking-types";

interface ContactSectionProps {
  contactData: ContactData;
  options: BookingOptions;
  onContactChange: (field: keyof ContactData, value: string) => void;
  onOptionChange: (field: keyof BookingOptions, value: boolean) => void;
}

export default function ContactSection({
  contactData,
  options,
  onContactChange,
  onOptionChange,
}: ContactSectionProps) {
  return (
    <div className="bg-white p-5 md:p-7 rounded-2xl border border-slate-200/80 shadow-sm space-y-5">
      <h3 className="font-bold text-slate-800 text-sm md:text-base uppercase flex items-center gap-2 border-b border-slate-100 pb-4">
        <span className="w-6 h-6 rounded-full bg-[#006838] text-white flex items-center justify-center text-xs font-semibold shadow-sm">
          2
        </span>
        Thông tin liên hệ
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          {" "}
          <label className="block text-slate-700 mb-1.5 text-sm font-medium">
            {" "}
            Họ tên người nhận vé <span className="text-rose-500">*</span>{" "}
          </label>{" "}
          <input
            type="text"
            required
            placeholder="Nhập họ và tên"
            value={contactData.fullName}
            onChange={(e) => onContactChange("fullName", e.target.value)}
            className="w-full border border-slate-300 p-2.5 rounded-xl text-base md:text-sm focus:outline-none focus:border-[#006838] focus:ring-1 focus:ring-[#006838]"
          />{" "}
        </div>

        <div>
          {" "}
          <label className="block text-slate-700 mb-1.5 text-sm font-medium">
            {" "}
            Số điện thoại (Nhận SMS/Zalo){" "}
            <span className="text-rose-500">*</span>{" "}
          </label>{" "}
          <input
            type="tel"
            required
            inputMode="tel"
            placeholder="VD: 0912345678"
            value={contactData.phone}
            onChange={(e) => onContactChange("phone", e.target.value)}
            className="w-full border border-slate-300 p-2.5 rounded-xl text-base md:text-sm focus:outline-none focus:border-[#006838] focus:ring-1 focus:ring-[#006838]"
          />{" "}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 pt-4 border-t border-slate-100">
        <label className="flex items-center gap-2.5 cursor-pointer group">
          <input
            type="checkbox"
            checked={options.hotel}
            onChange={(e) => onOptionChange("hotel", e.target.checked)}
            className="w-4 h-4 rounded border-slate-300 text-[#006838] focus:ring-[#006838]"
          />

          <span className="text-sm text-slate-700 group-hover:text-slate-900">
            Tôi cần hỗ trợ tư vấn đặt thêm khách sạn
          </span>
        </label>

        <label className="flex items-center gap-2.5 cursor-pointer group">
          <input
            type="checkbox"
            checked={options.vat}
            onChange={(e) => onOptionChange("vat", e.target.checked)}
            className="w-4 h-4 rounded border-slate-300 text-[#006838] focus:ring-[#006838]"
          />

          <span className="text-sm text-slate-700 group-hover:text-slate-900">
            Yêu cầu xuất hóa đơn VAT (GTGT)
          </span>
        </label>
      </div>
    </div>
  );
}
