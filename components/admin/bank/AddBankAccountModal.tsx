"use client";

import React, { FormEvent, useState } from "react";

export interface NewBankAccount {
  bankName: string;
  accountHolder: string;
  accountNumber: string;
  transferContent: string | null;
}

interface AddBankAccountModalProps {
  open: boolean;
  adding: boolean;
  onClose: () => void;
  onSubmit: (data: NewBankAccount) => Promise<void>;
}

const initialForm: NewBankAccount = {
  bankName: "",
  accountHolder: "",
  accountNumber: "",
  transferContent: "",
};

export default function AddBankAccountModal({
  open,
  adding,
  onClose,
  onSubmit,
}: AddBankAccountModalProps) {
  const [form, setForm] = useState<NewBankAccount>(initialForm);

  if (!open) return null;

  const updateField = (field: keyof NewBankAccount, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (
      !form.bankName.trim() ||
      !form.accountHolder.trim() ||
      !form.accountNumber.trim()
    ) {
      alert("Vui lòng điền đầy đủ các thông tin bắt buộc!");
      return;
    }

    try {
      await onSubmit({
        bankName: form.bankName.trim(),
        accountHolder: form.accountHolder.trim(),
        accountNumber: form.accountNumber.trim(),
        transferContent: (form.transferContent ?? "").trim(),
      });

      setForm(initialForm);
      onClose();
    } catch (error) {
      alert(
        error instanceof Error ? error.message : "Không thể thêm tài khoản",
      );
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl border border-slate-200 w-full max-w-md overflow-hidden">
        {/* HEADER */}
        <div className="bg-slate-50 px-5 py-4 border-b border-slate-200 flex justify-between items-center">
          <h3 className="font-bold text-slate-900">Thêm Tài Khoản Ngân Hàng</h3>

          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 font-bold text-lg"
          >
            ✕
          </button>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="p-5 space-y-4 text-sm">
          {/* BANK */}
          <div>
            <label className="block font-semibold text-slate-700 mb-1 text-xs">
              Ngân hàng <span className="text-rose-500">*</span>
            </label>

            <input
              type="text"
              required
              placeholder="VD: MBBank, VCB, Techcombank..."
              value={form.bankName}
              onChange={(e) => updateField("bankName", e.target.value)}
              className="w-full text-black border border-slate-300 rounded-lg px-3 py-2 outline-none focus:border-blue-500 text-base"
            />
          </div>

          {/* ACCOUNT NUMBER */}
          <div>
            <label className="block font-semibold text-slate-700 mb-1 text-xs">
              Số tài khoản <span className="text-rose-500">*</span>
            </label>

            <input
              type="text"
              required
              placeholder="Nhập số tài khoản..."
              value={form.accountNumber}
              onChange={(e) => updateField("accountNumber", e.target.value)}
              className="w-full text-black border border-slate-300 rounded-lg px-3 py-2 outline-none focus:border-blue-500 text-base font-mono"
            />
          </div>

          {/* ACCOUNT HOLDER */}
          <div>
            <label className="block font-semibold text-slate-700 mb-1 text-xs">
              Chủ tài khoản <span className="text-rose-500">*</span>
            </label>

            <input
              type="text"
              required
              placeholder="VD: NGUYEN VAN A"
              value={form.accountHolder}
              onChange={(e) => updateField("accountHolder", e.target.value)}
              className="w-full text-black border border-slate-300 rounded-lg px-3 py-2 outline-none focus:border-blue-500 text-base uppercase"
            />
          </div>

          {/* TRANSFER CONTENT */}
          <div>
            <label className="block font-semibold text-slate-700 mb-1 text-xs">
              Nội dung chuyển khoản
            </label>

            <input
              type="text"
              placeholder="VD: NAPTIEN"
              value={form.transferContent ?? ""}
              onChange={(e) => updateField("transferContent", e.target.value)}
              className="w-full text-black border border-slate-300 rounded-lg px-3 py-2 outline-none focus:border-blue-500 text-base"
            />
          </div>

          {/* BUTTON */}
          <div className="pt-2 flex gap-2 justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-slate-300 text-slate-600 rounded-lg hover:bg-slate-50 font-medium text-xs"
            >
              Hủy
            </button>

            <button
              type="submit"
              disabled={adding}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 font-semibold text-xs"
            >
              {adding ? "Đang lưu..." : "Lưu tài khoản"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
