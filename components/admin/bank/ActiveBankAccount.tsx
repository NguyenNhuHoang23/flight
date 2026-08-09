"use client";

import React from "react";

interface BankAccount {
  id: number;
  bankName: string;
  accountNumber: string;
  accountHolder: string;
  isActive: boolean;
}

interface ActiveBankAccountProps {
  account: BankAccount | null;
}

export default function ActiveBankAccount({ account }: ActiveBankAccountProps) {
  if (!account) return null;

  return (
    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />

          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
        </span>

        <div>
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-wide">
            Đang kích hoạt nhận tiền
          </span>

          <div className="text-sm font-bold text-slate-900 mt-0.5">
            {account.bankName} - {account.accountNumber} (
            {account.accountHolder})
          </div>
        </div>
      </div>
    </div>
  );
}
