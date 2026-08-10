"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  FileText,
  History,
  Loader2,
  Plus,
  Search,
  XCircle,
} from "lucide-react";
import { useRefundHistory } from "@/hook/useRefundHistory";
import { useCustomerAuthStore } from "@/store/customer-auth-store";

// Kiểu dữ liệu lịch sử hoàn tiền (Cập nhật field note)
interface RefundRecord {
  id: string;
  bankName: string;
  accountNumber: string;
  accountHolder: string;
  amount: number;
  status: "pending" | "completed" | "rejected";
  createdAt: string;
  note?: string; // Ghi chú từ người dùng hoặc phản hồi từ hệ thống
}

// Mock data lịch sử (Cập nhật các ghi chú mẫu)
const MOCK_REFUND_HISTORY: RefundRecord[] = [
  {
    id: "RF839201",
    bankName: "MB Bank",
    accountNumber: "0123456789",
    accountHolder: "NGUYEN VAN A",
    amount: 1500000,
    status: "completed",
    createdAt: "05/08/2026 14:30",
    note: "Hoàn tiền vé máy bay chặng HAN-PQC do hủy chuyến",
  },
  {
    id: "RF839188",
    bankName: "Vietcombank",
    accountNumber: "9988776655",
    accountHolder: "NGUYEN VAN A",
    amount: 2350000,
    status: "pending",
    createdAt: "04/08/2026 09:15",
    note: "Yêu cầu rút tiền dư trong tài khoản",
  },
  {
    id: "RF837512",
    bankName: "Techcombank",
    accountNumber: "19031234567",
    accountHolder: "NGUYEN VAN A",
    amount: 850000,
    status: "rejected",
    createdAt: "01/08/2026 16:45",
    note: "Từ chối: Sai tên chủ tài khoản ngân hàng",
  },
];

export default function RefundHistoryPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const user = useCustomerAuthStore((state) => state.user);
  const accessToken = useCustomerAuthStore((state) => state.accessToken);

  const hydrated = useCustomerAuthStore((state) => state.hydrated);

  const {
    data: historyList = [],
    isLoading,
    isFetching,
    error,
    refetch,
  } = useRefundHistory();

  const formatMoney = (value: number) => {
    return new Intl.NumberFormat("vi-VN").format(value) + " đ";
  };

  useEffect(() => {
    if (!hydrated) return;

    if (!user || !accessToken) {
      router.replace("/flight/refund/login?redirect=/flight/refund/history");
      return;
    }

    if (user.role !== "customer") {
      router.replace("/flight/refund/login");
    }
  }, [hydrated, user, accessToken, router]);

  if (!hydrated) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-2">
        <Loader2 className="w-8 h-8 animate-spin text-[#006837]" />

        <p className="text-sm text-gray-600 font-medium">
          Đang kiểm tra đăng nhập...
        </p>
      </div>
    );
  }
  if (!user || !accessToken) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-2">
        <Loader2 className="w-8 h-8 animate-spin text-[#006837]" />

        <p className="text-sm text-gray-600 font-medium">
          Đang chuyển đến trang đăng nhập...
        </p>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-2">
        <Loader2 className="w-8 h-8 animate-spin text-[#006837]" />

        <p className="text-sm text-gray-600 font-medium">
          Đang tải lịch sử hoàn tiền...
        </p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-3">
        <XCircle className="w-10 h-10 text-red-500" />

        <p className="text-sm text-red-600 font-medium">
          {error instanceof Error
            ? error.message
            : "Không thể tải lịch sử hoàn tiền"}
        </p>

        <button
          onClick={() => refetch()}
          className="px-4 py-2 bg-[#006837] text-white rounded-md text-sm font-semibold"
        >
          Thử lại
        </button>
      </div>
    );
  }
  const filteredList = historyList.filter((item) => {
    const term = searchTerm.toLowerCase();

    const matchSearch =
      String(item.id).toLowerCase().includes(term) ||
      item.accountNumber.toLowerCase().includes(term) ||
      item.bankName.toLowerCase().includes(term) ||
      item.accountHolder.toLowerCase().includes(term) ||
      (item.note ?? "").toLowerCase().includes(term);

    const matchStatus = statusFilter === "all" || item.status === statusFilter;

    return matchSearch && matchStatus;
  });
  return (
    <main className="min-h-screen bg-gray-50 py-6 px-3 sm:px-6 font-sans">
      <div className="max-w-5xl mx-auto space-y-4">
        {/* Top Header */}
        <div className="bg-white rounded-lg p-4 shadow-xs border border-gray-200 flex flex-wrap justify-between items-center gap-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.back()}
              className="p-1.5 hover:bg-gray-100 rounded-md transition text-gray-600"
              title="Quay lại"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-base sm:text-lg font-bold text-gray-800 uppercase flex items-center gap-2">
                <History className="w-5 h-5 text-[#006837]" />
                Lịch Sử Hoàn Tiền / Rút Tiền
              </h1>
              <p className="text-xs text-gray-500">
                Tài khoản: <b className="text-gray-700">{user?.username}</b>
              </p>
            </div>
          </div>

          <button
            onClick={() => router.push("/flight/refund")}
            className="px-4 py-2 bg-[#006837] text-white text-xs sm:text-sm font-bold rounded-md hover:bg-[#004d28] transition shadow-xs flex items-center gap-1.5 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            Tạo yêu cầu mới
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white rounded-lg p-4 shadow-xs border border-gray-200 flex flex-col sm:flex-row justify-between gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Tìm theo Mã GD, Ngân hàng, STK, Ghi chú..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 sm:py-1.5 border rounded-md text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#006837]"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-gray-600 whitespace-nowrap">
              Trạng thái:
            </span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full sm:w-auto px-3 py-2 sm:py-1.5 border rounded-md text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#006837] bg-white cursor-pointer"
            >
              <option value="all">Tất cả</option>
              <option value="pending">Đang xử lý</option>
              <option value="completed">Thành công</option>
              <option value="rejected">Từ chối</option>
            </select>
          </div>
        </div>

        {/* BẢNG DỮ LIỆU - Desktop Table & Mobile Card View */}
        <div className="bg-white rounded-lg shadow-xs border border-gray-200 overflow-hidden">
          {/* 1. Màn hình Mobile (Card View) */}
          <div className="block sm:hidden divide-y divide-gray-100">
            {filteredList.length > 0 ? (
              filteredList.map((item) => (
                <div key={item.id} className="p-4 space-y-2.5">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-[#006837] text-sm">
                      {item.id}
                    </span>
                    <StatusBadge status={item.status} />
                  </div>

                  <div className="text-xs space-y-1">
                    <div className="font-medium text-gray-800">
                      {item.bankName} -{" "}
                      <span className="text-blue-600 font-mono font-semibold">
                        {item.accountNumber}
                      </span>
                    </div>
                    <div className="text-gray-500 uppercase">
                      {item.accountHolder}
                    </div>
                  </div>

                  {/* Khối Ghi Chú Mobile */}
                  {item.note && (
                    <div className="text-xs bg-gray-50 p-2 rounded border border-gray-100 text-gray-600 flex items-start gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5" />
                      <span>
                        <b className="text-gray-700">Ghi chú:</b> {item.note}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between items-end pt-1">
                    <span className="text-[11px] text-gray-400">
                      {item.createdAt}
                    </span>
                    <span className="font-bold text-red-600 text-sm">
                      {formatMoney(item.amount)}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-10 text-center text-gray-400 text-xs">
                Không tìm thấy dữ liệu yêu cầu hoàn tiền nào.
              </div>
            )}
          </div>

          {/* 2. Màn hình Desktop (Table View) */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-gray-100/80 border-b border-gray-200 text-gray-700 font-bold uppercase">
                  <th className="py-3 px-4">Mã Yêu Cầu</th>
                  <th className="py-3 px-4">Thông Tin Nhận Tiền</th>
                  <th className="py-3 px-4 text-right">Số Tiền</th>
                  <th className="py-3 px-4 text-center">Trạng Thái</th>
                  <th className="py-3 px-4">Ghi Chú</th>
                  <th className="py-3 px-4 text-center">Thời Gian</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredList.length > 0 ? (
                  filteredList.map((item) => (
                    <tr
                      key={item.id}
                      className="hover:bg-gray-50/80 transition text-gray-800"
                    >
                      {/* Mã GD */}
                      <td className="py-3.5 px-4 font-bold text-[#006837] whitespace-nowrap">
                        {item.id}
                      </td>

                      {/* Thông tin ngân hàng */}
                      <td className="py-3.5 px-4 space-y-0.5">
                        <div className="font-semibold text-gray-900">
                          {item.bankName} -{" "}
                          <span className="text-blue-600 font-mono">
                            {item.accountNumber}
                          </span>
                        </div>
                        <div className="text-[11px] text-gray-500 uppercase">
                          {item.accountHolder}
                        </div>
                      </td>

                      {/* Số tiền */}
                      <td className="py-3.5 px-4 text-right font-bold text-red-600 whitespace-nowrap">
                        {formatMoney(item.amount)}
                      </td>

                      {/* Trạng thái */}
                      <td className="py-3.5 px-4 text-center whitespace-nowrap">
                        <StatusBadge status={item.status} />
                      </td>

                      {/* Cột Ghi Chú mới */}
                      <td className="py-3.5 px-4 max-w-[220px]">
                        <span
                          className="text-xs text-gray-600 line-clamp-2"
                          title={item.note || "-"}
                        >
                          {item.note || "-"}
                        </span>
                      </td>

                      {/* Thời gian */}
                      <td className="py-3.5 px-4 text-center text-xs text-gray-500 whitespace-nowrap">
                        {item.createdAt}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={6}
                      className="py-12 text-center text-gray-400 text-xs sm:text-sm"
                    >
                      Không tìm thấy dữ liệu yêu cầu hoàn tiền nào.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}

/* Badge hiển thị trạng thái */
function StatusBadge({ status }: { status: RefundRecord["status"] }) {
  switch (status) {
    case "completed":
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-green-100 text-green-700">
          <CheckCircle2 size={13} />
          Thành công
        </span>
      );
    case "pending":
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-100 text-amber-700">
          <Clock size={13} />
          Đang xử lý
        </span>
      );
    case "rejected":
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-red-100 text-red-700">
          <XCircle size={13} />
          Từ chối
        </span>
      );
  }
}
