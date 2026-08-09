import React from "react";
import { OrderStatus } from "./data";

interface OrderStatusBadgeProps {
  status: OrderStatus;
}

export default function OrderStatusBadge({ status }: OrderStatusBadgeProps) {
  if (status === "confirmed") {
    return (
      <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 border border-emerald-300 px-2 py-0.5 rounded-full font-bold text-[11px]">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
        Đã xuất vé
      </span>
    );
  }

  if (status === "pending") {
    return (
      <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-800 border border-amber-300 px-2 py-0.5 rounded-full font-bold text-[11px]">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
        Chờ duyệt
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1 bg-rose-100 text-rose-800 border border-rose-300 px-2 py-0.5 rounded-full font-bold text-[11px]">
      <span className="w-1.5 h-1.5 rounded-full bg-rose-600" />
      Đã hủy
    </span>
  );
}
