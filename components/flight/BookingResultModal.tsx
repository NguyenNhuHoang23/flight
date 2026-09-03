"use client";

import React from "react";
import { MessageCircle, X } from "lucide-react";

import BookingLookupResult from "@/components/booking/BookingLookupResult";
import type { LookupOrder } from "@/hook/useLookupBooking";
import { useGetData } from "@/context/GetContext";

interface BookingResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  order: LookupOrder | null;
}

export default function BookingResultModal({
  isOpen,
  onClose,
  order,
}: BookingResultModalProps) {
  const { info } = useGetData();
  const messengerUrl = info?.messenger?.trim() || "";

  const handleOpenMessenger = () => {
    if (!messengerUrl) {
      alert("Chưa cấu hình link Messenger CSKH. Vui lòng liên hệ qua hotline.");
      return;
    }

    window.open(messengerUrl, "_blank", "noopener,noreferrer");
  };

  if (!isOpen || !order) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 p-4 sm:p-6">
      <div className="relative my-4 w-full max-w-4xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 rounded-full bg-white p-2 text-gray-500 shadow-md transition hover:bg-gray-100 hover:text-gray-800"
          aria-label="Đóng"
        >
          <X className="h-5 w-5" />
        </button>

        <BookingLookupResult
          order={order}
          className="mt-0 shadow-2xl"
          payTicketPopup
          footer={
            <button
              type="button"
              onClick={handleOpenMessenger}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#0084FF] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#0073e6]"
            >
              <MessageCircle className="h-5 w-5" />
              Quý khách ấn vào CSKH để nhận vé điện tử
            </button>
          }
        />
      </div>
    </div>
  );
}
