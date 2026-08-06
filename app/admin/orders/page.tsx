'use client';

import React, { useState } from 'react';
import { MOCK_ORDERS, Order, OrderStatus } from './data';

export default function AdminOrderListPage() {
  const [orders, setOrders] = useState<Order[]>(MOCK_ORDERS);
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [editingOrder, setEditingOrder] = useState<Order | null>(null);

  // Xử lý Thay đổi trạng thái (Duyệt vé / Hủy vé)
  const handleUpdateStatus = (orderId: string, newStatus: OrderStatus) => {
    const actionText = newStatus === 'confirmed' ? 'Duyệt vé' : 'Hủy vé';
    if (confirm(`Bạn có chắc chắn muốn ${actionText} cho đơn hàng ${orderId}?`)) {
      setOrders(prev =>
        prev.map(ord => (ord.id === orderId ? { ...ord, status: newStatus } : ord))
      );
    }
  };

  // Xử lý In vé
  const handlePrintTicket = (order: Order) => {
    alert(`Đang khởi tạo bản in vé điện tử cho đơn: ${order.id}\nKhách hàng: ${order.customerName}`);
    window.print();
  };

  // Xử lý Lưu chỉnh sửa vé
  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingOrder) return;

    setOrders(prev =>
      prev.map(ord => (ord.id === editingOrder.id ? editingOrder : ord))
    );
    setEditingOrder(null);
    alert("Cập nhật thông tin đơn hàng thành công!");
  };

  // Lọc dữ liệu
  const filteredOrders = orders.filter(order => {
    const matchesStatus = selectedStatus === 'all' || order.status === selectedStatus;
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customerPhone.includes(searchTerm);
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* PAGE TITLE BAR */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Quản Lý Đặt Vé Máy Bay</h1>
          <p className="text-xs text-slate-500 mt-1">
            Danh sách đơn hàng, xuất vé, theo dõi hành trình và xử lý thay đổi.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-sky-50 text-sky-700 text-xs font-bold px-3 py-1.5 rounded-full border border-sky-200">
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
          <span className="absolute left-3 top-2.5 text-slate-400 text-sm">🔍</span>
        </div>

        {/* Status Filter Tabs */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg w-full md:w-auto overflow-x-auto text-xs font-semibold">
          {[
            { id: 'all', label: 'Tất cả' },
            { id: 'pending', label: 'Chờ duyệt' },
            { id: 'confirmed', label: 'Đã xuất vé' },
            { id: 'cancelled', label: 'Đã hủy' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedStatus(tab.id)}
              className={`px-3 py-1.5 rounded-md whitespace-nowrap transition-all ${
                selectedStatus === tab.id
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* TABLE ORDERS */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider">
                <th className="p-4">Mã Đơn / Ngày</th>
                <th className="p-4">Khách Đặt / Liên Hệ</th>
                <th className="p-4">Hành Khách (HK)</th>
                <th className="p-4">Chặng Bay & Hãng Bay</th>
                <th className="p-4">Tổng Tiền</th>
                <th className="p-4">Trạng Thái</th>
                <th className="p-4 text-center">Thao Tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              {filteredOrders.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center py-8 text-slate-400 font-normal">
                    Không tìm thấy đơn hàng nào phù hợp.
                  </td>
                </tr>
              ) : (
                filteredOrders.map(order => (
                  <tr key={order.id} className="hover:bg-slate-50/80 transition-colors">
                    {/* 1. Mã đơn & Ngày */}
                    <td className="p-4 align-top">
                      <span className="font-bold text-sky-700 text-sm block">{order.id}</span>
                      <span className="text-slate-400 text-[11px] mt-1 block">{order.createdAt}</span>
                      <span className="inline-block mt-2 px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-600">
                        {order.paymentMethod}
                      </span>
                    </td>

                    {/* 2. Khách đặt */}
                    <td className="p-4 align-top">
                      <div className="font-semibold text-slate-900 text-sm">{order.customerName}</div>
                      <div className="text-slate-500 mt-0.5">{order.customerPhone}</div>
                      <div className="text-slate-400 text-[11px]">{order.customerEmail}</div>
                    </td>

                    {/* 3. Danh sách hành khách */}
                    <td className="p-4 align-top">
                      <div className="space-y-1.5">
                        {order.passengers.map((p, idx) => (
                          <div key={idx} className="bg-slate-50 p-1.5 rounded border border-slate-200/60">
                            <span className="font-bold text-slate-800 block">{p.name}</span>
                            <span className="text-[10px] text-slate-500">
                              {p.type} • Giấy tờ: <span className="font-mono text-slate-700">{p.passportOrCccd}</span>
                            </span>
                          </div>
                        ))}
                      </div>
                    </td>

                    {/* 4. Thông tin Hãng bay & Chặng bay */}
                    <td className="p-4 align-top">
                      <div className="mb-1">
                        {order.flightType === 'round_trip' ? (
                          <span className="bg-purple-50 text-purple-700 border border-purple-200 px-2 py-0.5 rounded text-[10px] font-bold">
                            🔄 Khứ hồi ({order.flights.length} hãng)
                          </span>
                        ) : (
                          <span className="bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded text-[10px] font-bold">
                            ➡️ Một chiều
                          </span>
                        )}
                      </div>

                      <div className="space-y-2 mt-2">
                        {order.flights.map((f, idx) => (
                          <div key={idx} className="p-2 rounded-lg bg-sky-50/50 border border-sky-100 text-slate-700 space-y-1">
                            <div className="flex items-center justify-between font-bold text-sky-900">
                              <span>{f.logo} {f.airline} ({f.flightNumber})</span>
                              <span className="text-[10px] font-normal text-slate-500">{f.seatClass}</span>
                            </div>
                            <div className="flex items-center justify-between text-[11px] font-medium text-slate-800">
                              <span>{f.departure}</span>
                              <span className="text-slate-400">➔</span>
                              <span>{f.arrival}</span>
                            </div>
                            <div className="text-[10px] text-slate-500">
                              🕒 {f.departTime}
                            </div>
                          </div>
                        ))}
                      </div>
                    </td>

                    {/* 5. Tổng tiền */}
                    <td className="p-4 align-top font-bold text-slate-900 text-sm">
                      {order.totalAmount.toLocaleString('vi-VN')} đ
                    </td>

                    {/* 6. Trạng thái */}
                    <td className="p-4 align-top">
                      {order.status === 'confirmed' && (
                        <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-1 rounded-full font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Đã xuất vé
                        </span>
                      )}
                      {order.status === 'pending' && (
                        <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-1 rounded-full font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Chờ duyệt
                        </span>
                      )}
                      {order.status === 'cancelled' && (
                        <span className="inline-flex items-center gap-1 bg-rose-50 text-rose-700 border border-rose-200 px-2.5 py-1 rounded-full font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span> Đã hủy
                        </span>
                      )}
                    </td>

                    {/* 7. Action Buttons */}
                    <td className="p-4 align-top text-center">
                      <div className="flex flex-col gap-1.5 w-28 mx-auto">
                        <button
                          onClick={() => handlePrintTicket(order)}
                          className="px-2.5 py-1.5 rounded bg-slate-800 hover:bg-slate-900 text-white font-semibold flex items-center justify-center gap-1 transition-colors"
                          title="In vé điện tử"
                        >
                          🛈 In vé
                        </button>

                        {order.status === 'pending' && (
                          <button
                            onClick={() => handleUpdateStatus(order.id, 'confirmed')}
                            className="px-2.5 py-1.5 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-semibold flex items-center justify-center gap-1 transition-colors"
                          >
                            ✓ Duyệt vé
                          </button>
                        )}

                        <button
                          onClick={() => setEditingOrder({ ...order })}
                          className="px-2.5 py-1.5 rounded bg-sky-100 hover:bg-sky-200 text-sky-800 font-semibold flex items-center justify-center gap-1 transition-colors"
                        >
                          ✏️ Chỉnh sửa
                        </button>

                        {order.status !== 'cancelled' && (
                          <button
                            onClick={() => handleUpdateStatus(order.id, 'cancelled')}
                            className="px-2.5 py-1.5 rounded bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-semibold flex items-center justify-center gap-1 transition-colors"
                          >
                            ✕ Hủy vé
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

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
                <label className="block font-semibold text-slate-700 mb-1">Tên khách hàng đặt:</label>
                <input
                  type="text"
                  value={editingOrder.customerName}
                  onChange={(e) => setEditingOrder({ ...editingOrder, customerName: e.target.value })}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-sky-500 outline-none"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Số điện thoại:</label>
                  <input
                    type="text"
                    value={editingOrder.customerPhone}
                    onChange={(e) => setEditingOrder({ ...editingOrder, customerPhone: e.target.value })}
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-sky-500 outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Tổng tiền (VNĐ):</label>
                  <input
                    type="number"
                    value={editingOrder.totalAmount}
                    onChange={(e) => setEditingOrder({ ...editingOrder, totalAmount: Number(e.target.value) })}
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-sky-500 outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Trạng thái đơn hàng:</label>
                <select
                  value={editingOrder.status}
                  onChange={(e) => setEditingOrder({ ...editingOrder, status: e.target.value as OrderStatus })}
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