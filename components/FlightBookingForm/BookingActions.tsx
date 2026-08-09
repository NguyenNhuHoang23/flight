"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";

interface BookingActionsProps {
  onBack: () => void;
  isSubmitting?: boolean;
}

export default function BookingActions({
  onBack,
  isSubmitting = false,
}: BookingActionsProps) {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 pt-2">
      <button
        type="button"
        onClick={onBack}
        className="flex items-center justify-center w-full md:w-auto gap-2 text-slate-600 hover:text-slate-900 text-sm font-semibold transition py-3"
      >
        <ArrowLeft size={18} />
        Quay lại danh sách
      </button>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-[#FF4D15] hover:bg-[#E03E0B] active:scale-[0.98] text-white font-bold text-sm md:text-base w-full md:w-auto px-10 py-3.5 rounded-xl uppercase shadow-md transition"
      >
        {isSubmitting ? "ĐANG TẠO ĐƠN..." : "TIẾP TỤC ĐẶT VÉ"}
      </button>
    </div>
  );
}
