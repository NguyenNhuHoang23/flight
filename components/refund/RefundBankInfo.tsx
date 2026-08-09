"use client";

import React from "react";
import { RefundCommand } from "./refund-types";

interface RefundBankInfoProps {
  command: RefundCommand;

  onChange: (
    field: keyof RefundCommand,
    value: RefundCommand[keyof RefundCommand],
  ) => void;
}

export default function RefundBankInfo({
  command,
  onChange,
}: RefundBankInfoProps) {
  return (
    <>
      <div className="py-2 px-3 space-y-1">
        {/* NGÂN HÀNG */}
        <div className="flex items-center gap-1">
          <span className="text-[11px] text-slate-400 w-14 shrink-0">
            Ngân hàng:
          </span>

          <input
            type="text"
            value={command.bankName}
            onChange={(e) => onChange("bankName", e.target.value)}
            className="
            w-full
            border border-slate-300
            rounded px-2 py-1
            text-sm
            text-gray-900
            font-medium
            outline-none
            focus:border-blue-500
          "
          />
        </div>

        {/* CHỦ TÀI KHOẢN */}
        <div className="flex items-center gap-1">
          <span className="text-[11px] text-slate-400 w-14 shrink-0">CTK:</span>

          <input
            type="text"
            value={command.accountHolder}
            onChange={(e) => onChange("accountHolder", e.target.value)}
            className="
            w-full
            border border-slate-300
            rounded px-2 py-1
            text-sm
            text-gray-900
            font-bold uppercase
            outline-none
            focus:border-blue-500
          "
          />
        </div>

        {/* SỐ TÀI KHOẢN */}
        <div className="flex items-center gap-1">
          <span className="text-[11px] text-slate-400 w-14 shrink-0">STK:</span>

          <input
            type="text"
            value={command.accountNumber}
            onChange={(e) => onChange("accountNumber", e.target.value)}
            className="
            w-full
            border border-slate-300
            rounded px-2 py-1
            text-sm
            text-blue-600
            font-mono font-bold
            outline-none
            focus:border-blue-500
          "
          />
        </div>
      </div>
    </>
  );
}
