"use client";

import React, { useState } from "react";
import { MOCK_ORDERS, Order, OrderStatus } from "./data";

export default function AdminOrderListPage() {
  const [orders, setOrders] = useState<Order[]>(MOCK_ORDERS);
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [editingOrder, setEditingOrder] = useState<Order | null>(null);

  // State quản lý xem bill ảnh
  const [viewingBillUrl, setViewingBillUrl] = useState<string | null>(null);

  // Xử lý Thay đổi trạng thái (Duyệt vé / Hủy vé)
  const handleUpdateStatus = (orderId: string, newStatus: OrderStatus) => {
    const actionText = newStatus === "confirmed" ? "Duyệt vé" : "Hủy vé";
    if (
      confirm(`Bạn có chắc chắn muốn ${actionText} cho đơn hàng ${orderId}?`)
    ) {
      setOrders((prev) =>
        prev.map((ord) =>
          ord.id === orderId ? { ...ord, status: newStatus } : ord,
        ),
      );
    }
  };

  // Xử lý In vé
  const handlePrintTicket = (order: Order) => {
    alert(
      `Đang khởi tạo bản in vé điện tử cho đơn: ${order.id}\nKhách hàng: ${order.customerName}`,
    );
    window.print();
  };

  // Xử lý Lưu chỉnh sửa vé
  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingOrder) return;

    setOrders((prev) =>
      prev.map((ord) => (ord.id === editingOrder.id ? editingOrder : ord)),
    );
    setEditingOrder(null);
    alert("Cập nhật thông tin đơn hàng thành công!");
  };

  // Lọc dữ liệu
  const filteredOrders = orders.filter((order) => {
    const matchesStatus =
      selectedStatus === "all" || order.status === selectedStatus;
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customerPhone.includes(searchTerm);
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="space-y-6 min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* PAGE TITLE BAR */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Quản Lý Đặt Vé Máy Bay
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Danh sách đơn hàng dạng khung thẻ, đánh số thứ tự dễ theo dõi.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-sky-50 text-sky-700 text-xs font-bold px-3 py-1.5 rounded-full border border-sky-200 shadow-sm">
            Tổng: {filteredOrders.length} đơn
          </span>
        </div>
      </div>

      {/* FILTER & SEARCH BAR */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center">
        {/* Search Input */}
        <div className="w-full md:w-80 relative">
          <input
            type="text"
            placeholder="Tìm mã đơn, tên, SĐT..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
          />
          <span className="absolute left-3 top-2.5 text-slate-400 text-sm">
            🔍
          </span>
        </div>

        {/* Status Filter Tabs */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg w-full md:w-auto overflow-x-auto text-xs font-semibold">
          {[
            { id: "all", label: "Tất cả" },
            { id: "pending", label: "Chờ duyệt" },
            { id: "confirmed", label: "Đã xuất vé" },
            { id: "cancelled", label: "Đã hủy" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedStatus(tab.id)}
              className={`px-3 py-1.5 rounded-md whitespace-nowrap transition-all ${
                selectedStatus === tab.id
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* DANH SÁCH ĐƠN HÀNG DẠNG KHUNG (CARD GRID) */}
      {filteredOrders.length === 0 ? (
        <div className="bg-white rounded-xl border border-slate-200 p-12 text-center text-slate-400 font-medium">
          Không tìm thấy đơn hàng nào phù hợp.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5">
          {filteredOrders.map((order, index) => (
            <div
              key={order.id}
              className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col lg:flex-row"
            >
              {/* KHUNG BÊN TRÁI: STT & THÔNG TIN CHÍNH */}
              <div className="p-4 bg-slate-50/80 border-b lg:border-b-0 lg:border-r border-slate-200 lg:w-64 shrink-0 flex flex-col justify-between gap-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    {/* ĐÁNH SỐ THỨ TỰ TỰ ĐỘNG */}
                    <span className="bg-slate-900 text-white font-black text-xs px-2.5 py-1 rounded-md tracking-wider">
                      STT #{index + 1}
                    </span>

                    {/* TRẠNG THÁI ĐƠN */}
                    <div>
                      {order.status === "confirmed" && (
                        <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 border border-emerald-300 px-2 py-0.5 rounded-full font-bold text-[11px]">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>{" "}
                          Đã xuất vé
                        </span>
                      )}
                      {order.status === "pending" && (
                        <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-800 border border-amber-300 px-2 py-0.5 rounded-full font-bold text-[11px]">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>{" "}
                          Chờ duyệt
                        </span>
                      )}
                      {order.status === "cancelled" && (
                        <span className="inline-flex items-center gap-1 bg-rose-100 text-rose-800 border border-rose-300 px-2 py-0.5 rounded-full font-bold text-[11px]">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-600"></span>{" "}
                          Đã hủy
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-slate-400 font-medium">
                      Mã đơn hàng:
                    </div>
                    <span className="font-bold text-sky-700 text-base">
                      {order.id}
                    </span>
                  </div>

                  <div className="text-xs text-slate-500">
                    🕒 <span className="font-medium">{order.createdAt}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200/80 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">Thanh toán:</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-200 text-slate-700 uppercase">
                      Chuyển khoản QR
                    </span>
                  </div>

                  {/* TRẠNG THÁI BILL CHUYỂN KHOẢN */}
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs text-slate-500">Bill CK:</span>
                    {order.paymentProofUrl ? (
                      <button
                        type="button"
                        onClick={() =>
                          setViewingBillUrl(order.paymentProofUrl!)
                        }
                        className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-500 text-white hover:bg-red-500 border border-red-300 flex items-center gap-1 transition"
                      >
                        👁️ Xem bill
                      </button>
                    ) : (
                      <span className="text-[10px] font-medium text-slate-400 italic bg-slate-100 px-1.5 py-0.5 rounded">
                        Chưa up bill
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* KHUNG GIỮA: KHÁCH HÀNG & HÀNH TRÌNH BAY */}
              <div className="p-4 flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                {/* Khung Khách Đặt & Thông tin thanh toán */}
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 space-y-1.5 flex flex-col justify-between">
                  <div className="space-y-1">
                    <div className="font-bold text-slate-400 text-[10px] uppercase tracking-wider mb-1">
                      👤 Khách đặt liên hệ
                    </div>
                    <div className="font-bold text-slate-900 text-sm">
                      {order.customerName}
                    </div>
                    <div className="text-slate-600 font-medium">
                      📞 {order.customerPhone}
                    </div>
                    <div className="text-slate-400 text-[11px] truncate">
                      ✉️ {order.customerEmail}
                    </div>
                  </div>

                  {/* Cụm thông tin chuyển khoản & số tiền được chuyển xuống đây */}
                  <div className="pt-2 border-t border-slate-200/80 space-y-1">
                    <div className="text-[11px] text-slate-600">
                      📝 ND chuyển khoản:{" "}
                      <span className="font-mono font-bold text-sky-700">
                        VU794TicKetJ0.
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-600">
                      💰 Số tiền:{" "}
                      <span className="font-black text-emerald-600 text-xs">
                        {order.totalAmount.toLocaleString("vi-VN")} đ
                      </span>
                    </div>
                  </div>
                </div>

                {/* Khung Hành Khách */}
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 space-y-1">
                  <div className="font-bold text-slate-400 text-[10px] uppercase tracking-wider mb-1">
                    ✈️ Hành khách ({order.passengers.length})
                  </div>
                  <div className="space-y-1">
                    {order.passengers.map((p, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-1.5 rounded border border-slate-200 text-[11px]"
                      >
                        <span className="font-bold text-slate-800">
                          {p.name}
                        </span>
                        <div className="text-[10px] text-slate-500">
                          {p.type} •{" "}
                          <span className="font-mono">{p.passportOrCccd}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Khung Chặng Bay */}
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-400 text-[10px] uppercase tracking-wider">
                      🛫 Chặng bay
                    </span>
                    {order.flightType === "round_trip" ? (
                      <span className="bg-purple-100 text-purple-700 font-bold text-[10px] px-1.5 py-0.5 rounded">
                        Khứ hồi
                      </span>
                    ) : (
                      <span className="bg-blue-100 text-blue-700 font-bold text-[10px] px-1.5 py-0.5 rounded">
                        Một chiều
                      </span>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    {order.flights.map((f, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-1.5 rounded border border-slate-200"
                      >
                        <div className="flex justify-between font-bold text-sky-900 text-[11px]">
                          <span>
                            {f.logo} {f.airline}
                          </span>
                          <span className="text-slate-400 text-[10px]">
                            {f.flightNumber}
                          </span>
                        </div>
                        <div className="flex items-center justify-between font-semibold text-slate-700 text-[11px] mt-0.5">
                          <span>{f.departure}</span>
                          <span className="text-slate-300">➔</span>
                          <span>{f.arrival}</span>
                        </div>
                        <div className="text-[10px] text-slate-400 mt-0.5">
                          🕒 {f.departTime}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* KHUNG BÊN PHẢI: THAO TÁC (ĐÃ BỎ TỔNG TIỀN ĐƠN) */}
              <div className="p-4 bg-slate-50/50 border-t lg:border-t-0 lg:border-l border-slate-200 lg:w-48 shrink-0 flex flex-col justify-end items-end gap-3">
                {/* CÁC NÚT THAO TÁC */}
                <div className="flex lg:flex-col gap-1.5 w-full">
                  <button
                    onClick={() => handlePrintTicket(order)}
                    className="flex-1 px-2.5 py-1.5 rounded bg-slate-800 hover:bg-slate-900 text-white font-semibold text-xs flex items-center justify-center gap-1 transition"
                  >
                    🛈 In vé
                  </button>

                  {/* 
                  {order.status === "pending" && (
                    <button
                      onClick={() => handleUpdateStatus(order.id, "confirmed")}
                      className="flex-1 px-2.5 py-1.5 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-1 transition"
                    >
                      ✓ Duyệt vé
                    </button>
                  )}

                  <button
                    onClick={() => setEditingOrder({ ...order })}
                    className="flex-1 px-2.5 py-1.5 rounded bg-sky-100 hover:bg-sky-200 text-sky-800 font-semibold text-xs flex items-center justify-center gap-1 transition"
                  >
                    ✏️ Sửa
                  </button>

                  {order.status !== "cancelled" && (
                    <button
                      onClick={() => handleUpdateStatus(order.id, "cancelled")}
                      className="flex-1 px-2.5 py-1.5 rounded bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-semibold text-xs flex items-center justify-center gap-1 transition"
                    >
                      ✕ Hủy
                    </button>
                  )} 
                  */}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* MODAL HIỂN THỊ BILL CHUYỂN KHOẢN GIỮA MÀN HÌNH */}
      {viewingBillUrl && (
        <div
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setViewingBillUrl(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-4 relative flex flex-col items-center animate-in fade-in zoom-in duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-between border-b pb-3 mb-3">
              <h3 className="font-bold text-slate-800 text-sm flex items-center gap-1.5">
                💳 Bill chuyển khoản thanh toán
              </h3>
              <button
                onClick={() => setViewingBillUrl(null)}
                className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 font-bold flex items-center justify-center text-sm transition"
              >
                ✕
              </button>
            </div>

            <div className="w-full max-h-[70vh] overflow-auto rounded-lg border border-slate-200 bg-slate-900/5 flex items-center justify-center p-2">
              <img
                src={viewingBillUrl}
                alt="Bill chuyển khoản"
                className="max-w-full max-h-[60vh] object-contain rounded shadow-sm"
              />
            </div>

            <div className="mt-4 flex w-full justify-end gap-2">
              <button
                onClick={() => setViewingBillUrl(null)}
                className="px-4 py-1.5 bg-slate-800 hover:bg-slate-900 text-white font-semibold text-xs rounded transition"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL CHỈNH SỬA VÉ */}
      {editingOrder && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-6 space-y-4">
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="font-bold text-lg text-slate-900">
                Chỉnh Sửa Đơn Hàng #{editingOrder.id}
              </h3>
              <button
                onClick={() => setEditingOrder(null)}
                className="text-slate-400 hover:text-slate-600 text-xl font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveEdit} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Tên khách hàng đặt:
                </label>
                <input
                  type="text"
                  value={editingOrder.customerName}
                  onChange={(e) =>
                    setEditingOrder({
                      ...editingOrder,
                      customerName: e.target.value,
                    })
                  }
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-sky-500 outline-none"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Số điện thoại:
                  </label>
                  <input
                    type="text"
                    value={editingOrder.customerPhone}
                    onChange={(e) =>
                      setEditingOrder({
                        ...editingOrder,
                        customerPhone: e.target.value,
                      })
                    }
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-sky-500 outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Tổng tiền (VNĐ):
                  </label>
                  <input
                    type="number"
                    value={editingOrder.totalAmount}
                    onChange={(e) =>
                      setEditingOrder({
                        ...editingOrder,
                        totalAmount: Number(e.target.value),
                      })
                    }
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-sky-500 outline-none"
                    required
                  />
                </div>
              </div>

              {/* TRƯỜNG CẬP NHẬT BILL CHUYỂN KHOẢN */}
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Đường dẫn ảnh Bill chuyển khoản (URL):
                </label>
                <input
                  type="text"
                  placeholder="https://example.com/bill.jpg"
                  value={editingOrder.paymentProofUrl || ""}
                  onChange={(e) =>
                    setEditingOrder({
                      ...editingOrder,
                      paymentProofUrl: e.target.value || undefined,
                    })
                  }
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-sky-500 outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Trạng thái đơn hàng:
                </label>
                <select
                  value={editingOrder.status}
                  onChange={(e) =>
                    setEditingOrder({
                      ...editingOrder,
                      status: e.target.value as OrderStatus,
                    })
                  }
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-sky-500 outline-none font-semibold"
                >
                  <option value="pending">Chờ duyệt</option>
                  <option value="confirmed">Đã xuất vé</option>
                  <option value="cancelled">Đã hủy</option>
                </select>
              </div>

              <div className="pt-4 border-t flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditingOrder(null)}
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
      )}
    </div>
  );
}
