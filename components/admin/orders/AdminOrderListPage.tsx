"use client";

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import { Order } from "./data";
import { useGetOrders } from "@/hook/useGetOrder";
import { useAuthStore } from "@/store/auth-store";
import OrderFilter from "./OrderFilter";
import OrderCard from "./OrderCard";
import PaymentBillModal from "./PaymentBillModal";
import EditOrderModal from "./EditOrderModal";
import OrderPagination from "./OrderPagination";

export default function AdminOrderListPage() {
  const router = useRouter();

  const token = useAuthStore((state) => state.accessToken);

  const {
    orders,
    loading,
    error,
    refetch,

    currentPage,
    lastPage,
    total,
    from,
    to,

    goToPage,
  } = useGetOrders(token);

  const [selectedStatus, setSelectedStatus] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const [editingOrder, setEditingOrder] = useState<Order | null>(null);

  const [viewingBillUrl, setViewingBillUrl] = useState<string | null>(null);
  console.log("🚀 ~ AdminOrderListPage ~ viewingBillUrl:", viewingBillUrl);

  // ==================================================
  // FILTER
  // ==================================================

  const filteredOrders = useMemo(() => {
    const keyword = searchTerm.toLowerCase().trim();

    return orders.filter((order) => {
      const matchesStatus =
        selectedStatus === "all" || order.status === selectedStatus;

      const matchesSearch =
        !keyword ||
        order.id.toLowerCase().includes(keyword) ||
        order.customerName.toLowerCase().includes(keyword) ||
        order.customerPhone.includes(keyword);

      return matchesStatus && matchesSearch;
    });
  }, [orders, selectedStatus, searchTerm]);

  // ==================================================
  // PRINT TICKET
  // ==================================================

  const handlePrintTicket = (order: Order) => {
    router.push(`/admin/orders/${order.id}`);
  };

  // ==================================================
  // SAVE EDIT
  // ==================================================

  const handleSaveEdit = async (order: Order) => {
    try {
      /**
       * TODO:
       * Gọi API update order tại đây.
       *
       * Ví dụ:
       *
       * await updateOrder(order.id, {
       *   customerName: order.customerName,
       *   customerPhone: order.customerPhone,
       *   totalAmount: order.totalAmount,
       *   paymentProofUrl: order.paymentProofUrl,
       *   status: order.status,
       * });
       */

      setEditingOrder(null);

      await refetch();

      alert("Cập nhật thông tin đơn hàng thành công!");
    } catch (error) {
      alert(
        error instanceof Error ? error.message : "Không thể cập nhật đơn hàng",
      );
    }
  };

  // ==================================================
  // LOADING
  // ==================================================

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-sm text-slate-500">
          Đang tải danh sách đơn hàng...
        </div>
      </div>
    );
  }

  // ==================================================
  // ERROR
  // ==================================================

  if (error) {
    return (
      <div className="bg-rose-50 border border-rose-200 rounded-xl p-6 text-center">
        <p className="text-sm font-semibold text-rose-700">
          Không thể tải danh sách đơn hàng.
        </p>

        <button
          type="button"
          onClick={() => refetch()}
          className="mt-3 px-4 py-2 bg-rose-600 text-white rounded-lg text-sm font-semibold hover:bg-rose-700"
        >
          Thử lại
        </button>
      </div>
    );
  }

  // ==================================================
  // RENDER
  // ==================================================

  return (
    <div className="space-y-5">
      {/* PAGE HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold text-slate-900">
            Quản Lý Đặt Vé Máy Bay
          </h1>

          <p className="text-sm text-slate-500 mt-1">
            Danh sách đơn hàng dạng khung thẻ, đánh số thứ tự dễ theo dõi.
          </p>
        </div>

        <div className="text-sm font-bold text-slate-600">
          Tổng: <span className="text-sky-600">{filteredOrders.length}</span>{" "}
          đơn
        </div>
      </div>

      {/* FILTER */}
      <OrderFilter
        searchTerm={searchTerm}
        selectedStatus={selectedStatus}
        onSearchChange={setSearchTerm}
        onStatusChange={setSelectedStatus}
      />

      {/* ORDER LIST */}
      {filteredOrders.length === 0 ? (
        <div className="bg-white rounded-xl border border-slate-200 p-12 text-center text-slate-400 font-medium">
          Không tìm thấy đơn hàng nào phù hợp.
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-5">
            {filteredOrders.map((order, index) => (
              <OrderCard
                key={order.id}
                order={order}
                index={(currentPage - 1) * 3 + index}
                onViewBill={setViewingBillUrl}
                onPrintTicket={handlePrintTicket}
              />
            ))}
          </div>
          <OrderPagination
            currentPage={currentPage}
            lastPage={lastPage}
            total={total}
            from={from}
            to={to}
            loading={loading}
            onPageChange={goToPage}
          />
        </>
      )}

      {/* BILL MODAL */}
      {viewingBillUrl && (
        <PaymentBillModal
          imageUrl={viewingBillUrl}
          onClose={() => setViewingBillUrl(null)}
        />
      )}

      {/* EDIT MODAL */}
      {editingOrder && (
        <EditOrderModal
          order={editingOrder}
          onClose={() => setEditingOrder(null)}
          onSave={handleSaveEdit}
        />
      )}
    </div>
  );
}
