import React, { useState } from "react";
import { Order, OrderStatus } from "./data";

interface EditOrderModalProps {
  order: Order;
  onClose: () => void;
  onSave: (order: Order) => void;
}

export default function EditOrderModal({
  order,
  onClose,
  onSave,
}: EditOrderModalProps) {
  const [formData, setFormData] = useState<Order>(order);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-6 space-y-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center border-b pb-3">
          <h3 className="font-bold text-lg text-slate-900">
            Chỉnh Sửa Đơn Hàng #{formData.id}
          </h3>

          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 text-xl font-bold"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          {/* CUSTOMER NAME */}
          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Tên khách hàng đặt:
            </label>

            <input
              type="text"
              value={formData.customerName}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  customerName: e.target.value,
                })
              }
              className="w-full p-2 border border-slate-300 rounded text-base focus:ring-2 focus:ring-sky-500 outline-none"
              required
            />
          </div>

          {/* PHONE + AMOUNT */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Số điện thoại:
              </label>

              <input
                type="text"
                value={formData.customerPhone}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    customerPhone: e.target.value,
                  })
                }
                className="w-full p-2 border border-slate-300 rounded text-base focus:ring-2 focus:ring-sky-500 outline-none"
                required
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Tổng tiền (VNĐ):
              </label>

              <input
                type="number"
                value={formData.totalAmount}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    totalAmount: Number(e.target.value),
                  })
                }
                className="w-full p-2 border border-slate-300 rounded text-base focus:ring-2 focus:ring-sky-500 outline-none"
                required
              />
            </div>
          </div>

          {/* BILL */}
          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Đường dẫn ảnh Bill chuyển khoản:
            </label>

            <input
              type="text"
              placeholder="https://example.com/bill.jpg"
              value={formData.paymentProofUrl || ""}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  paymentProofUrl: e.target.value || undefined,
                })
              }
              className="w-full p-2 border border-slate-300 rounded text-base focus:ring-2 focus:ring-sky-500 outline-none placeholder:text-xs"
            />
          </div>

          {/* STATUS */}
          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Trạng thái đơn hàng:
            </label>

            <select
              value={formData.status}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  status: e.target.value as OrderStatus,
                })
              }
              className="w-full p-2 border border-slate-300 rounded text-base focus:ring-2 focus:ring-sky-500 outline-none font-semibold"
            >
              <option value="pending">Chờ duyệt</option>
              <option value="paid">Đã thanh toán</option>
              <option value="confirmed">Đã xuất vé</option>
              <option value="cancelled">Đã hủy</option>
            </select>
          </div>

          {/* ACTION */}
          <div className="pt-4 border-t flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold"
            >
              Hủy bỏ
            </button>

            <button
              type="submit"
              className="px-4 py-2 rounded bg-sky-600 hover:bg-sky-700 text-white font-semibold shadow-sm"
            >
              Lưu thay đổi
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
