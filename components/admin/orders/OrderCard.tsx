"use client";

import React, { useState } from "react";
import { Order } from "./data";
import OrderStatusBadge from "./OrderStatusBadge";
import { useAuthStore } from "@/store/auth-store";

interface OrderCardProps {
  order: Order;
  index: number;
  onViewBill: (url: string) => void;
  onPrintTicket: (order: Order) => void;
  onDeleted?: () => void;
}
export const formatUtcToVietnam = (
  value?: string | null,
) => {
  if (!value) return "";

  const match = value.match(
    /^(\d{2}):(\d{2}) (\d{2})\/(\d{2})\/(\d{4})$/,
  );

  if (!match) return value;

  const [, hour, minute, day, month, year] = match;

  const date = new Date(
    `${year}-${month}-${day}T${hour}:${minute}:00Z`,
  );

  return date.toLocaleString("vi-VN", {
    timeZone: "Asia/Ho_Chi_Minh",
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour12: false,
  });
};
export default function OrderCard({
  order,
  index,
  onViewBill,
  onPrintTicket,
  onDeleted,
}: OrderCardProps) {
  const token = useAuthStore((state) => state.accessToken);
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    const confirmed = confirm(
      `Bạn có chắc chắn muốn xóa đơn hàng #${order.id}?`,
    );

    if (!confirmed) return;

    try {
      setDeleting(true);

      if (!token) {
        throw new Error("Không tìm thấy token đăng nhập");
      }

      const response = await fetch(
        `/api/admin/order/${encodeURIComponent(order.id)}`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (response.status === 401) {
        localStorage.removeItem("admin-auth");
        window.location.href = "/admin/login";
        return;
      }

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Không thể xóa đơn hàng");
      }

      alert("Xóa đơn hàng thành công!");
      onDeleted?.();
    } catch (error) {
      alert(
        error instanceof Error ? error.message : "Không thể xóa đơn hàng",
      );
    } finally {
      setDeleting(false);
    }
  };

  const getBillUrl = () => {
    if (!order.paymentProofUrl) return "";

    return `${order.paymentProofUrl}`;
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col lg:flex-row">
      {/* LEFT */}
      <div className="p-4 bg-slate-50/80 border-b lg:border-b-0 lg:border-r border-slate-200 lg:w-64 shrink-0 flex flex-col justify-between gap-3">
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2">
            <span className="bg-slate-900 text-white font-black text-xs px-2.5 py-1 rounded-md tracking-wider">
              STT #{index + 1}
            </span>

            <OrderStatusBadge status={order.status} />
          </div>

          <div>
            <div className="text-xs text-slate-400 font-medium">
              Mã đơn hàng:
            </div>

            <span className="font-bold text-sky-700 text-base">{order.id}</span>
          </div>

          <div className="text-xs text-slate-500">
            🕒 <span className="font-medium">    {formatUtcToVietnam(order.createdAt)}
            </span>
          </div>
        </div>

        <div className="pt-2 border-t border-slate-200/80 space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-500">Thanh toán:</span>

            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-200 text-slate-700 uppercase">
              Chuyển khoản QR
            </span>
          </div>

          <div className="flex items-center justify-between pt-1">
            <span className="text-xs text-slate-500">Bill CK:</span>

            {order.paymentProofUrl ? (
              <button
                type="button"
                onClick={() => onViewBill(getBillUrl())}
                className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-500 text-white hover:bg-red-600 border border-red-300 flex items-center gap-1 transition"
              >
                👁️ Xem bill
              </button>
            ) : (
              <span className="text-[10px] font-medium text-slate-400 italic bg-slate-100 px-1.5 py-0.5 rounded">
                Chưa up bill
              </span>
            )}
          </div>
        </div>
      </div>

      {/* CENTER */}
      <div className="p-4 flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        {/* CUSTOMER */}
        <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 space-y-1.5 flex flex-col justify-between">
          <div className="space-y-1">
            <div className="font-bold text-slate-400 text-[10px] uppercase tracking-wider mb-1">
              👤 Khách đặt liên hệ
            </div>

            <div className="font-bold text-slate-900 text-sm">
              {order.customerName}
            </div>

            <div className="text-slate-600 font-medium">
              📞 {order.customerPhone}
            </div>

            <div className="text-slate-400 text-[11px] truncate">
              ✉️ {order.customerEmail}
            </div>
          </div>

          <div className="pt-2 border-t border-slate-200/80 space-y-1">
            <div className="text-[11px] text-slate-600">
              📝 ND chuyển khoản:{" "}
              <span className="font-mono font-bold text-sky-700">
                {order.transferContent}
              </span>
            </div>

            <div className="text-[11px] text-slate-600">
              💰 Số tiền:{" "}
              <span className="font-black text-emerald-600 text-xs">
                {order.totalAmount.toLocaleString("vi-VN")} đ
              </span>
            </div>
          </div>
        </div>

        {/* PASSENGERS */}
        <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 space-y-1">
          <div className="font-bold text-slate-400 text-[10px] uppercase tracking-wider mb-1">
            ✈️ Hành khách ({order.passengers.length})
          </div>

          <div className="space-y-1">
            {order.passengers.map((passenger, passengerIndex) => (
              <div
                key={passengerIndex}
                className="bg-white p-1.5 rounded border border-slate-200 text-[11px]"
              >
                <span className="font-bold text-slate-800">
                  {passenger.name}
                </span>

                <div className="text-[10px] text-slate-500">
                  {passenger.type} •{" "}
                  <span className="font-mono">{passenger.dateOfBirth}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FLIGHTS */}
        <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-bold text-slate-400 text-[10px] uppercase tracking-wider">
              🛫 Chặng bay
            </span>

            {order.flightType === "round_trip" ? (
              <span className="bg-purple-100 text-purple-700 font-bold text-[10px] px-1.5 py-0.5 rounded">
                Khứ hồi
              </span>
            ) : (
              <span className="bg-blue-100 text-blue-700 font-bold text-[10px] px-1.5 py-0.5 rounded">
                Một chiều
              </span>
            )}
          </div>

          <div className="space-y-1.5">
            {order.flights.map((flight, flightIndex) => (
              <div
                key={flightIndex}
                className="bg-white p-1.5 rounded border border-slate-200"
              >
                <div className="flex justify-between font-bold text-sky-900 text-[11px]">
                  <span>
                    {flight.logo} {flight.airline}
                  </span>

                  <span className="text-slate-400 text-[10px]">
                    {flight.flightNumber}
                  </span>
                </div>

                <div className="flex items-center justify-between font-semibold text-slate-700 text-[11px] mt-0.5">
                  <span>{flight.departure}</span>

                  <span className="text-slate-300">➔</span>

                  <span>{flight.arrival}</span>
                </div>
                <div className="flex items-center justify-between font-semibold text-slate-700 text-[11px] mt-0.5">
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    🕒 {flight.departTime}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    🕒 {flight.arrivalTime}
                  </div>
                </div>
                {flight.checkedBaggage ? (
                  <div className="text-[10px] text-slate-500 mt-0.5">
                    🧳 {flight.checkedBaggage}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="p-4 bg-slate-50/50 border-t lg:border-t-0 lg:border-l border-slate-200 lg:w-48 shrink-0 flex flex-col justify-end items-end gap-3">
        <div className="flex lg:flex-col gap-1.5 w-full">
          
        <button
            type="button"
            onClick={handleDelete}
            disabled={deleting}
            className="flex-1 px-2.5 py-1.5 rounded bg-rose-600 hover:bg-rose-700 disabled:bg-rose-300 disabled:cursor-not-allowed text-white font-semibold text-xs flex items-center justify-center gap-1 transition"
          >
            {deleting ? "Đang xóa..." : "🗑 Xóa"}
          </button>
          <button
            type="button"
            onClick={() => onPrintTicket(order)}
            className="flex-1 px-2.5 py-1.5 rounded bg-slate-800 hover:bg-slate-900 text-white font-semibold text-xs flex items-center justify-center gap-1 transition"
          >
            🛈 In vé
          </button>

        </div>
      </div>
    </div>
  );
}
