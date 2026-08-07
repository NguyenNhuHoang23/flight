"use client";

import React, { useState } from "react";

// Kiểu dữ liệu Customer
interface Customer {
  id: string;
  username: string;
  password?: string;
  monney: string; // Số tiền
}

// Dữ liệu mẫu ban đầu
const INITIAL_CUSTOMERS: Customer[] = [
  {
    id: "1",
    username: "nguyenvana",
    password: "password123",
    monney: "1000000",
  },
  {
    id: "2",
    username: "tranthib",
    password: "password456",
    monney: "2000000",
  },
];

export default function CustomerManagementPage() {
  const [customers, setCustomers] = useState<Customer[]>(INITIAL_CUSTOMERS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState<Customer | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    monney: "",
  });

  // Mở Popup Tạo mới
  const handleOpenCreateModal = () => {
    setEditingCustomer(null);
    setFormData({ username: "", password: "", monney: "" });
    setIsModalOpen(true);
  };

  // Mở Popup Chỉnh sửa
  const handleOpenEditModal = (customer: Customer) => {
    setEditingCustomer(customer);
    setFormData({
      username: customer.username,
      password: customer.password || "",
      monney: customer.monney || "",
    });
    setIsModalOpen(true);
  };

  // Đóng Popup
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingCustomer(null);
  };

  // Xử lý Xóa
  const handleDelete = (id: string) => {
    if (confirm("Bạn có chắc chắn muốn xóa khách hàng này?")) {
      setCustomers((prev) => prev.filter((item) => item.id !== id));
    }
  };

  // Xử lý Submit Form (Tạo mới / Cập nhật)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingCustomer) {
      // Cập nhật
      setCustomers((prev) =>
        prev.map((item) =>
          item.id === editingCustomer.id ? { ...item, ...formData } : item,
        ),
      );
    } else {
      // Tạo mới
      const newCustomer: Customer = {
        id: Date.now().toString(),
        ...formData,
      };
      setCustomers((prev) => [...prev, newCustomer]);
    }

    handleCloseModal();
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Title Bar & Action Button */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Danh sách Khách hàng
          </h2>
          <p className="text-sm text-gray-500">
            Quản lý tài khoản và thông tin cá nhân của khách hàng
          </p>
        </div>
        <button
          onClick={handleOpenCreateModal}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow transition"
        >
          + Tạo tài khoản
        </button>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              <th className="px-6 py-3">Tài khoản</th>
              <th className="px-6 py-3">Mật khẩu</th>
              <th className="px-6 py-3">Số tiền</th>
              <th className="px-6 py-3 text-right">Thao tác</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-sm text-gray-700">
            {customers.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-8 text-gray-400">
                  Chưa có dữ liệu khách hàng
                </td>
              </tr>
            ) : (
              customers.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">{item.username}</td>
                  <td className="px-6 py-4 text-gray-500">
                    {item.password ? "••••••••" : "N/A"}
                  </td>
                  <td className="px-6 py-4">{item.monney}</td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <button
                      onClick={() => handleOpenEditModal(item)}
                      className="px-3 py-1 bg-amber-100 text-amber-700 hover:bg-amber-200 rounded font-medium text-xs transition"
                    >
                      Sửa
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="px-3 py-1 bg-red-100 text-red-700 hover:bg-red-200 rounded font-medium text-xs transition"
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

      {/* Modal Popup (Tạo mới / Chỉnh sửa) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">
              {editingCustomer
                ? "Chỉnh sửa tài khoản"
                : "Tạo tài khoản khách hàng"}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  Tài khoản (Username)
                </label>
                <input
                  type="text"
                  required
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  placeholder="nguyenvana"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  Mật khẩu
                </label>
                <input
                  type="password"
                  required={!editingCustomer}
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  placeholder="••••••••"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  Số tiền
                </label>
                <input
                  type="number"
                  required
                  value={formData.monney}
                  onChange={(e) =>
                    setFormData({ ...formData, monney: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>

              {/* Footer Buttons */}
              <div className="flex justify-end space-x-3 pt-3">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 border rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 transition"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow transition"
                >
                  {editingCustomer ? "Lưu thay đổi" : "Tạo mới"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
