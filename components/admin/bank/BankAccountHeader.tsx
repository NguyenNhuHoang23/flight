"use client";

import React from "react";

interface BankAccountHeaderProps {
  onAdd: () => void;
  adding: boolean;
}

export default function BankAccountHeader({
  onAdd,
  adding,
}: BankAccountHeaderProps) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <h1 className="text-xl font-bold text-slate-900">
          Danh Sách Tài Khoản Ngân Hàng Nhận Tiền
        </h1>

        <p className="text-sm text-slate-500 mt-1">
          Chỉ được kích hoạt{" "}
          <span className="font-bold text-slate-700">
            01 tài khoản duy nhất
          </span>{" "}
          làm cổng nhận tiền chính cho khách hàng.
        </p>
      </div>

      <button
        onClick={onAdd}
        disabled={adding}
        className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold px-4 py-2 rounded-lg text-sm transition flex items-center justify-center gap-2 shrink-0 shadow-sm"
      >
        + Thêm tài khoản
      </button>
    </div>
  );
}
