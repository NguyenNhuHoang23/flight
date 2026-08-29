"use client";

import React from "react";
import { X } from "lucide-react";

import BookingLookupResult from "@/components/booking/BookingLookupResult";
import type { LookupOrder } from "@/hook/useLookupBooking";

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

        <BookingLookupResult order={order} className="mt-0 shadow-2xl" />
      </div>
    </div>
  );
}
