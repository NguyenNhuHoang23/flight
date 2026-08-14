"use client";

import React from "react";

export interface BankAccount {
  id: number;
  bankName: string;
  accountNumber: string;
  accountHolder: string;
  transferContent: string | null;
  isActive: boolean;
}

interface BankAccountRowProps {
  account: BankAccount;
  updating: boolean;
  deleting: boolean;
  onSetActive: (id: number) => void;
  onEdit: (account: BankAccount) => void;
  onDelete: (id: number) => void;
}

export default function BankAccountRow({
  account,
  updating,
  deleting,
  onSetActive,
  onEdit,
  onDelete,
}: BankAccountRowProps) {
  return (
    <tr
      className={`transition ${
        account.isActive
          ? "bg-emerald-50/40 hover:bg-emerald-50/70"
          : "hover:bg-slate-50"
      }`}
    >
      {/* ACTIVE */}
      <td className="py-4 px-4 text-center">
        <input
          type="radio"
          name="active_bank_account"
          checked={account.isActive}
          disabled={updating}
          onChange={() => onSetActive(account.id)}
          className="w-4 h-4 text-emerald-600 focus:ring-emerald-500 border-slate-300 cursor-pointer"
          title="Chọn làm tài khoản nhận tiền chính"
        />
      </td>

      {/* BANK */}
      <td className="py-4 px-4 font-semibold text-slate-900">
        {account.bankName}
      </td>

      {/* ACCOUNT NUMBER */}
      <td className="py-4 px-4 font-mono font-bold text-blue-600">
        {account.accountNumber}
      </td>

      {/* ACCOUNT HOLDER */}
      <td className="py-4 px-4 font-bold uppercase text-slate-800">
        {account.accountHolder}
      </td>

      {/* STATUS */}
      <td className="py-4 px-4 text-center">
        {account.isActive ? (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            Đang dùng
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-500 border border-slate-200">
            Tắt
          </span>
        )}
      </td>

      {/* ACTIONS */}
      <td className="py-4 px-4 text-center">
        <div className="flex items-center justify-center gap-1">
          <button
            type="button"
            onClick={() => onEdit(account)}
            disabled={updating}
            className="text-xs font-semibold py-1 px-2.5 rounded transition text-blue-600 hover:bg-blue-50 disabled:opacity-50"
            title="Cập nhật tài khoản"
          >
            Sửa
          </button>

          <button
            type="button"
            onClick={() => onDelete(account.id)}
            disabled={account.isActive || deleting}
            className={`text-xs font-semibold py-1 px-2.5 rounded transition ${
              account.isActive || deleting
                ? "text-slate-300 cursor-not-allowed"
                : "text-rose-600 hover:bg-rose-50"
            }`}
            title={
              account.isActive
                ? "Không thể xóa TK đang hoạt động"
                : "Xóa tài khoản"
            }
          >
            {deleting ? "Đang xóa..." : "Xóa"}
          </button>
        </div>
      </td>
    </tr>
  );
}
