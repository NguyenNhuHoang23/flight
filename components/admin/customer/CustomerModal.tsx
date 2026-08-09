"use client";

import React from "react";
import { Customer, CustomerFormData } from "./customer-types";

interface CustomerModalProps {
  isOpen: boolean;
  editingCustomer: Customer | null;
  formData: CustomerFormData;
  submitting: boolean;

  onChange: (data: CustomerFormData) => void;

  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;

  onClose: () => void;
}

export default function CustomerModal({
  isOpen,
  editingCustomer,
  formData,
  submitting,
  onChange,
  onSubmit,
  onClose,
}: CustomerModalProps) {
  if (!isOpen) return null;

  const formatMoney = (value: string | number) => {
    if (!value) return "";

    return Number(value).toLocaleString("vi-VN") + " ₫";
  };

  const inputClassName =
    "w-full px-3 py-2.5 border border-gray-300 rounded-lg " +
    "bg-white text-gray-900 text-base " +
    "placeholder:text-gray-400 " +
    "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 " +
    "appearance-none";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 space-y-4">
        <h3 className="text-xl font-bold text-gray-800">
          {editingCustomer ? "Chỉnh sửa tài khoản" : "Tạo tài khoản khách hàng"}
        </h3>

        <form onSubmit={onSubmit} className="space-y-4">
          {/* NAME */}

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Tên khách hàng
            </label>

            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                onChange({
                  ...formData,
                  name: e.target.value,
                })
              }
              className={inputClassName}
              placeholder="Nguyễn Văn A"
            />
          </div>

          {/* EMAIL */}

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email
            </label>

            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                onChange({
                  ...formData,
                  email: e.target.value,
                })
              }
              className={inputClassName}
              placeholder="customer@gmail.com"
            />
          </div>

          {/* PASSWORD */}

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Mật khẩu
            </label>

            <input
              type="password"
              required={!editingCustomer}
              value={formData.password}
              onChange={(e) =>
                onChange({
                  ...formData,
                  password: e.target.value,
                })
              }
              className={inputClassName}
              placeholder={
                editingCustomer ? "Để trống nếu không đổi" : "••••••••"
              }
            />
          </div>

          {/* CONFIRM PASSWORD */}

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Xác nhận mật khẩu
            </label>

            <input
              type="password"
              required={!editingCustomer || !!formData.password}
              value={formData.password_confirmation}
              onChange={(e) =>
                onChange({
                  ...formData,
                  password_confirmation: e.target.value,
                })
              }
              className={inputClassName}
              placeholder="••••••••"
            />
          </div>

          {/* BALANCE */}

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Số tiền ban đầu
            </label>

            <input
              type="number"
              min="0"
              step="0.01"
              required
              value={formData.balance}
              onChange={(e) =>
                onChange({
                  ...formData,
                  balance: e.target.value,
                })
              }
              className={inputClassName}
              placeholder="1000000"
              inputMode="decimal"
            />

            {formData.balance && (
              <p className="text-sm text-gray-500 mt-1">
                {formatMoney(formData.balance)}
              </p>
            )}
          </div>

          {/* BUTTON */}

          <div className="flex justify-end gap-3 pt-3">
            <button
              type="button"
              onClick={onClose}
              disabled={submitting}
              className="px-4 py-2 border rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 transition disabled:opacity-50"
            >
              Hủy
            </button>

            <button
              type="submit"
              disabled={submitting}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow transition disabled:opacity-50"
            >
              {submitting
                ? "Đang xử lý..."
                : editingCustomer
                  ? "Lưu thay đổi"
                  : "Tạo mới"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
