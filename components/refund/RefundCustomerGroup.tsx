"use client";

import React from "react";

import { CustomerGroup, RefundCommand } from "./refund-types";
import { formatVndAmount } from "@/lib/refund-balance";

import RefundCommandRow from "./RefundCommandRow";

interface RefundCustomerGroupProps {
  group: CustomerGroup;

  savedCommandId: string | null;

  isCreating?: boolean;

  onChange: (
    commandId: string,
    field: keyof RefundCommand,
    value: RefundCommand[keyof RefundCommand],
  ) => void;

  onTimeChange: (
    commandId: string,
    newTime?: string,
    newAmPm?: "AM" | "PM",
  ) => void;

  onAddCommand: (commandId: string) => void;

  onSave: (commandId: string) => void;

  onStatusChange: (commandId: string, status: "approved" | "rejected") => void;
  onDelete: (commandId: string) => void;
   onCancel: (commandId: string) => void;
}

export default function RefundCustomerGroup({
  group,
  savedCommandId,
  isCreating = false,
  onChange,
  onTimeChange,
  onAddCommand,
  onSave,
  onStatusChange,
  onDelete,
  onCancel
}: RefundCustomerGroupProps) {
  return (
    <div
      className="
        bg-white
        rounded-xl
        border-2
        border-blue-200
        shadow-sm
        overflow-hidden
      "
    >
      {/* =====================
          CUSTOMER HEADER
      ===================== */}

      <div
        className="
          bg-blue-50/80
          px-5 py-3
          border-b border-blue-200
          flex
          items-center
          justify-between
        "
      >
        <div className="flex items-center gap-3">
          <span
            className="
              bg-blue-600
              text-white
              text-xs
              font-bold
              px-2.5 py-1
              rounded
            "
          >
            ID USER: #{group.userId}
          </span>

          <span
            className="
              font-bold
              text-slate-900
              text-sm
            "
          >
            Khách hàng: {group.username}
          </span>
        </div>

        <div className="text-right text-xs text-slate-600">
          <div>
            Số dư ví:{" "}
            <b className="text-slate-900">
              {formatVndAmount(group.balance)} ₫
            </b>
          </div>
          <div>
            Có thể tạo thêm:{" "}
            <b className="text-emerald-700">
              {formatVndAmount(group.availableBalance)} ₫
            </b>
          </div>
        </div>
      </div>

      {/* =====================
          TABLE
      ===================== */}

      <div className="overflow-x-auto">
        <table
          className="
            w-full
            text-left
            border-collapse
            min-w-250
          "
        >
          <thead>
            <tr
              className="
                bg-slate-50
                border-b
                border-slate-200
                text-xs
                font-bold
                text-slate-500
                uppercase
              "
            >
              <th className="py-2.5 px-3 text-center w-12">STT</th>

              <th className="py-2.5 px-4 w-72">THÔNG TIN RÚT</th>

              <th className="py-2.5 px-4 w-48">SỐ TIỀN RÚT</th>

              <th className="py-2.5 px-4 w-60">THỜI GIAN</th>

              <th className="py-2.5 px-4">GHI CHÚ</th>

              <th className="py-2.5 px-4 text-center w-40">THAO TÁC</th>
            </tr>
          </thead>

          <tbody
            className="
              divide-y
              divide-slate-200
              text-xs
            "
          >
            {group.commands.map((command, index) => (
              <RefundCommandRow
                key={command.id}
                index={index + 1}
                command={command}
                saved={savedCommandId === command.id}
                isCreating={isCreating}
                onChange={(field, value) => onChange(command.id, field, value)}
                onTimeChange={(newTime, newAmPm) =>
                  onTimeChange(command.id, newTime, newAmPm)
                }
                onAdd={() => onAddCommand(command.id)}
                onSave={() => onSave(command.id)}
                onStatusChange={(status) => onStatusChange(command.id, status)}
                onDelete={() => onDelete(command.id)}
                onCancel={() => onCancel(command.id)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
