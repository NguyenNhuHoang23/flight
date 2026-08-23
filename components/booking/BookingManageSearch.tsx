"use client";

import React, { useState } from "react";
import { Loader2, Search } from "lucide-react";

import BookingLookupResult from "./BookingLookupResult";
import { useLookupBooking } from "@/hook/useLookupBooking";

export default function BookingManageSearch() {
  const [orderCode, setOrderCode] = useState("");
  const [contactName, setContactName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const lookupMutation = useLookupBooking();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);

    lookupMutation.mutate({
      orderCode: orderCode.trim(),
      contactName: contactName.trim(),
    });
  };

  return (
    <div className="bg-[#f4f4f4] py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 flex items-center gap-2 justify-center">
          <Search
            className="w-7 h-7 text-black"
            strokeWidth={2.5}
          />

          <h1 className="text-lg md:text-xl font-bold text-black uppercase tracking-wide">
            Quản lý đặt vé máy bay
          </h1>
        </div>

        <div className="bg-white border border-gray-200 shadow-sm px-6 py-8 md:px-10 md:py-10">
          <p className="text-sm text-gray-700 mb-8 leading-relaxed">
            Quý khách vui lòng nhập đầy đủ thông tin dưới đây để xem lại đặt
            vé.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
              <label
                htmlFor="order-code"
                className="md:w-44 shrink-0 text-sm text-gray-800"
              >
                Mã chuyến bay{" "}
                <span className="text-red-500 font-bold">*</span>
              </label>

              <input
                id="order-code"
                type="text"
                required
                value={orderCode}
                onChange={(event) => setOrderCode(event.target.value)}
                className="flex-1 h-10 border border-gray-300 rounded-sm px-3 text-sm text-gray-900 bg-white focus:outline-none focus:border-gray-400"
              />
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
              <label
                htmlFor="contact-name"
                className="md:w-44 shrink-0 text-sm text-gray-800"
              >
                Họ tên liên hệ{" "}
                <span className="text-red-500 font-bold">*</span>
              </label>

              <input
                id="contact-name"
                type="text"
                required
                value={contactName}
                onChange={(event) =>
                  setContactName(event.target.value)
                }
                className="flex-1 h-10 border border-gray-300 rounded-sm px-3 text-sm text-gray-900 bg-white focus:outline-none focus:border-gray-400"
              />
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
              <div className="hidden md:block md:w-44 shrink-0" />

              <button
                type="submit"
                disabled={lookupMutation.isPending}
                className="h-10 px-8 bg-[#ff5722] hover:bg-[#f4511e] text-white text-sm font-semibold rounded-sm transition disabled:opacity-70 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
              >
                {lookupMutation.isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Đang tìm kiếm...
                  </>
                ) : (
                  "Tìm kiếm"
                )}
              </button>
            </div>
          </form>

          {submitted && lookupMutation.isError && (
            <div className="mt-8 rounded-sm border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {lookupMutation.error?.message ||
                "Không tìm thấy đơn hàng. Vui lòng kiểm tra lại mã đơn và tên liên hệ."}
            </div>
          )}

          {submitted &&
            lookupMutation.isSuccess &&
            lookupMutation.data && (
              <BookingLookupResult order={lookupMutation.data} />
            )}
        </div>
      </div>
    </div>
  );
}
