"use client";

import React from "react";
import BankAccountRow, { BankAccount } from "./BankAccountRow";

interface BankAccountTableProps {
  accounts: BankAccount[];
  updating: boolean;
  deleting: boolean;
  onSetActive: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function BankAccountTable({
  accounts,
  updating,
  deleting,
  onSetActive,
  onDelete,
}: BankAccountTableProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase">
              <th className="py-3.5 px-4 text-center w-20">KÍCH HOẠT</th>

              <th className="py-3.5 px-4">NGÂN HÀNG</th>

              <th className="py-3.5 px-4">SỐ TÀI KHOẢN</th>

              <th className="py-3.5 px-4">CHỦ TÀI KHOẢN</th>

              <th className="py-3.5 px-4 text-center w-32">TRẠNG THÁI</th>

              <th className="py-3.5 px-4 text-center w-24">THAO TÁC</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-200 text-sm">
            {accounts.map((account) => (
              <BankAccountRow
                key={account.id}
                account={account}
                updating={updating}
                deleting={deleting}
                onSetActive={onSetActive}
                onDelete={onDelete}
              />
            ))}

            {accounts.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="text-center py-8 text-slate-400 text-sm"
                >
                  Chưa có tài khoản ngân hàng nào. Vui lòng thêm mới!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
