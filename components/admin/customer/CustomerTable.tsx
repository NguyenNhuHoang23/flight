"use client";

import React from "react";
import { Customer } from "./customer-types";

interface CustomerTableProps {
  customers: Customer[];
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  onEdit: (customer: Customer) => void;
  onDelete: (id: number) => void;
}

export default function CustomerTable({
  customers,
  isLoading,
  isError,
  error,
  onEdit,
  onDelete,
}: CustomerTableProps) {
  console.log("🚀 ~ CustomerTable ~ customers:", customers)
  const formatMoney = (value: string | number | null) => {
    return Number(value || 0).toLocaleString("vi-VN") + " ₫";
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr className="text-left text-xs font-semibold text-gray-500 uppercase">
              <th className="px-6 py-3">ID</th>

              <th className="px-6 py-3">Tài khoản</th>

              <th className="px-6 py-3">Số tiền</th>

              <th className="px-6 py-3">Vai trò</th>

              <th className="px-6 py-3">Ngày tạo</th>

              <th className="px-6 py-3 text-right">Thao tác</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 text-sm text-gray-700">
            {isLoading ? (
              <tr>
                <td colSpan={6} className="text-center py-10 text-gray-400">
                  Đang tải dữ liệu...
                </td>
              </tr>
            ) : isError ? (
              <tr>
                <td colSpan={6} className="text-center py-10 text-red-500">
                  {error?.message || "Không thể lấy dữ liệu"}
                </td>
              </tr>
            ) : customers.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-10 text-gray-400">
                  Chưa có khách hàng
                </td>
              </tr>
            ) : (
              customers.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition">
                  {/* ID */}
                  <td className="px-6 py-4 text-gray-500">#{item.id}</td>

                  {/* USERNAME */}
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {item.username}
                  </td>

                  {/* BALANCE */}
                  <td className="px-6 py-4 font-semibold text-green-600">
                    {formatMoney(item.balance)}
                  </td>

                  {/* ROLE */}
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 rounded-md text-xs font-medium ${
                        item.role === "admin"
                          ? "bg-red-100 text-red-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {item.role === "admin" ? "Quản trị viên" : "Khách hàng"}
                    </span>
                  </td>

                  {/* CREATED AT */}
                  <td className="px-6 py-4 text-gray-500">
                    {new Date(item.created_at).toLocaleDateString("vi-VN")}
                  </td>

                  {/* ACTION */}
                  <td className="px-6 py-4 text-right space-x-2">
                    <button
                      onClick={() => onEdit(item)}
                      className="px-3 py-1 bg-amber-100 text-amber-700 hover:bg-amber-200 rounded font-medium text-xs"
                    >
                      Sửa
                    </button>

                    <button
                      onClick={() => onDelete(item.id)}
                      className="px-3 py-1 bg-red-100 text-red-700 hover:bg-red-200 rounded font-medium text-xs"
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
