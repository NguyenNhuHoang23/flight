"use client";

import React from "react";
import { RefundCommand } from "./refund-types";

const formatRefundTimeInput = (value: string) => {
  const trimmed = value.replace(/[^\d:]/g, "").trim();

  if (!trimmed) {
    return "";
  }

  if (trimmed.includes(":")) {
    const [hours, minutes] = trimmed.split(":");
    const hour = hours ? Number(hours) : 0;
    const minute = minutes ? Number(minutes) : 0;

    if (Number.isNaN(hour) || Number.isNaN(minute)) {
      return "";
    }

    const safeHour = Math.min(Math.max(hour, 0), 23);
    const safeMinute = Math.min(Math.max(minute, 0), 59);

    return `${String(safeHour).padStart(2, "0")}:${String(safeMinute).padStart(2, "0")}`;
  }

  if (trimmed.length <= 2) {
    const hour = Number(trimmed);
    return Number.isNaN(hour)
      ? ""
      : `${String(Math.min(Math.max(hour, 0), 23)).padStart(2, "0")}`;
  }

  const digits = trimmed.replace(/:/g, "");
  const hour = Number(digits.slice(0, 2));
  const minute = Number(digits.slice(2, 4));

  if (Number.isNaN(hour) || Number.isNaN(minute)) {
    return "";
  }

  const safeHour = Math.min(Math.max(hour, 0), 23);
  const safeMinute = Math.min(Math.max(minute, 0), 59);

  return `${String(safeHour).padStart(2, "0")}:${String(safeMinute).padStart(2, "0")}`;
};

import RefundBankInfo from "./RefundBankInfo";

interface RefundCommandRowProps {
  command: RefundCommand;

  saved: boolean;

  isCreating?: boolean;

  onChange: (
    field: keyof RefundCommand,
    value: RefundCommand[keyof RefundCommand],
  ) => void;

  onTimeChange: (newTime?: string, newAmPm?: "AM" | "PM") => void;

  onAdd: () => void;

  onSave: () => void;

  onStatusChange: (status: "approved" | "rejected") => void;
}

export default function RefundCommandRow({
  command,
  saved,
  isCreating = false,
  onChange,
  onTimeChange,
  onAdd,
  onSave,
  onStatusChange,
}: RefundCommandRowProps) {
  return (
    <tr className="hover:bg-slate-50/80 align-top">
      {/* =========================
          THÔNG TIN NGÂN HÀNG
      ========================= */}

      <RefundBankInfo command={command} onChange={onChange} />

      {/* =========================
          SỐ TIỀN
      ========================= */}

      <td className="py-3 px-4">
        <div className="flex items-center gap-1">
          <span className="text-[11px] text-slate-400 shrink-0">Số tiền:</span>

          <input
            type="number"
            value={command.amount}
            min={0}
            onChange={(e) => onChange("amount", Number(e.target.value))}
            className="
              w-full
              border border-slate-300
              rounded px-2 py-1
              text-sm
              text-emerald-600
              font-bold
              outline-none
              focus:border-blue-500
            "
          />
        </div>

        <div className="text-xs text-slate-500 mt-1">
          {Number(command.amount || 0).toLocaleString("vi-VN")} ₫
        </div>
      </td>

      {/* =========================
          THỜI GIAN
      ========================= */}

      <td className="py-3 px-4 space-y-1">
        <div className="flex items-center gap-1">
          {/* GIỜ */}
          <input
            type="text"
            placeholder="08:00"
            maxLength={5}
            value={command.time}
            onChange={(e) =>
              onTimeChange(formatRefundTimeInput(e.target.value), undefined)
            }
            className="
              w-20
              text-center
              border border-slate-300
              bg-white
              rounded
              px-1.5 py-1
              text-sm
              text-gray-900
              font-medium
              outline-none
              focus:border-blue-500
              placeholder:text-sm
            "
          />

          {/* AM / PM */}
          <select
            value={command.ampm}
            onChange={(e) =>
              onTimeChange(undefined, e.target.value as "AM" | "PM")
            }
            className={`
              border
              rounded
              px-1.5 py-1
              text-sm
              font-semibold
              outline-none
              cursor-pointer

              ${
                command.ampm === "PM"
                  ? "bg-amber-100 text-amber-800 border-amber-300"
                  : "bg-sky-100 text-sky-800 border-sky-300"
              }
            `}
          >
            <option value="AM">AM (Sáng)</option>

            <option value="PM">PM (Chiều/Tối)</option>
          </select>
        </div>

        {/* NGÀY */}
        <input
          type="date"
          value={command.date}
          onChange={(e) => onChange("date", e.target.value)}
          className="
            w-full
            border border-slate-300
            rounded
            px-2 py-1
            text-sm
            text-gray-900
            font-medium
            outline-none
            focus:border-blue-500
          "
        />
      </td>

      {/* =========================
          NOTE
      ========================= */}

      <td className="py-3 px-4">
        <textarea
          rows={3}
          value={command.note || ""}
          placeholder="Nhập ghi chú cho khách hàng..."
          onChange={(e) => onChange("note", e.target.value)}
          className="
            w-full
            border border-slate-300
            rounded
            px-2 py-1.5
            text-sm
            text-slate-700
            bg-white
            focus:border-blue-500
            focus:ring-1
            focus:ring-blue-500
            outline-none
            resize-none
            placeholder:text-slate-400
          "
        />
      </td>

      {/* =========================
          THAO TÁC
      ========================= */}

      <td className="py-3 px-4 text-center space-y-2">
        {/* THÊM LỆNH */}
        <button
          type="button"
          onClick={onAdd}
          disabled={isCreating}
          className="
            w-full
            bg-indigo-50
            hover:bg-indigo-100
            text-indigo-700
            border border-indigo-200
            font-semibold
            py-1 px-2
            rounded
            text-[10px]
            transition
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          {isCreating ? "Đang tạo..." : "+ Thêm 1 lệnh"}
        </button>

        {/* PENDING */}
        {command.status === "pending" ? (
          <>
            <div className="flex items-center justify-center gap-1">
              {/* DUYỆT */}
              <button
                type="button"
                onClick={() => onStatusChange("approved")}
                className="
                  flex-1
                  bg-emerald-500
                  hover:bg-emerald-600
                  text-white
                  font-bold
                  py-1 px-2
                  rounded
                  text-[10px]
                "
              >
                Duyệt
              </button>

              {/* HỦY */}
              <button
                type="button"
                onClick={() => onStatusChange("rejected")}
                className="
                  flex-1
                  bg-rose-500
                  hover:bg-rose-600
                  text-white
                  font-bold
                  py-1 px-2
                  rounded
                  text-[10px]
                "
              >
                Hủy
              </button>
            </div>

            {/* LƯU */}
            <button
              type="button"
              onClick={onSave}
              className="
                w-full
                bg-emerald-500
                hover:bg-emerald-600
                text-white
                font-medium
                py-0.5 px-2
                rounded
                text-[10px]
              "
            >
              {saved ? "✓ Đã lưu" : "Lưu"}
            </button>
          </>
        ) : (
          <div className="space-y-1">
            {/* STATUS */}
            <span
              className={`
                inline-block
                px-2 py-0.5
                rounded
                font-bold
                text-[10px]

                ${
                  command.status === "approved"
                    ? "bg-emerald-100 text-emerald-800"
                    : "bg-rose-100 text-rose-800"
                }
              `}
            >
              {command.status === "approved" ? "Đã duyệt" : "Đã hủy"}
            </span>

            {/* LƯU NOTE */}
            <button
              type="button"
              onClick={onSave}
              className="
                w-full
                bg-slate-200
                hover:bg-slate-300
                text-slate-700
                font-medium
                py-0.5 px-2
                rounded
                text-[10px]
              "
            >
              {saved ? "✓ Đã lưu" : "Lưu ghi chú"}
            </button>
          </div>
        )}
      </td>
    </tr>
  );
}
