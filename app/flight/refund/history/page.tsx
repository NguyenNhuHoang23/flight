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
import { useClientRefunds } from "@/hook/useRefundClient";
import { convertRefundDateTimeToVietnam } from "@/components/refund/refund-datetime";
import { useCustomerAuthStore } from "@/store/customer-auth-store";

// Kiểu dữ liệu lịch sử hoàn tiền (Cập nhật field note)
interface RefundRecord {
  id: string;
  bankName: string;
  accountNumber: string;
  accountHolder: string;
  amount: number;
  status: "pending" | "approved" | "rejected";
  date: string;
  time: string;
  ampm: "AM" | "PM";
  createdAt: string;
  note?: string | null;
}


export default function RefundHistoryPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const user = useCustomerAuthStore((state) => {
    return state.user;
  });
    console.log("🚀 ~ RefundHistoryPage ~ user:", user)
  
  const accessToken = useCustomerAuthStore((state) => state.accessToken);

  const hydrated = useCustomerAuthStore((state) => state.hydrated);

const [page, setPage] = useState(1);
const [perPage, setPerPage] = useState(10);

const {
  data: historyResponse,
  isLoading,
  isFetching,
  refetch,
  error,
} = useClientRefunds(
  accessToken || "",
  page,
  perPage
);

const historyList = historyResponse?.data ?? [];

const pagination = historyResponse?.pagination;

const formatMoney = (value: string | number) => {
  const amount = Number(value);

  if (Number.isNaN(amount)) {
    return "0 đ";
  }

  return new Intl.NumberFormat("vi-VN").format(amount) + " đ";
};

const formatRefundVietnamTime = (
  date?: string | null,
  time?: string | null,
  ampm?: "AM" | "PM" | null,
) => {
  const vietnamDateTime = convertRefundDateTimeToVietnam(date, time, ampm);

  return `${vietnamDateTime.time} ${vietnamDateTime.ampm}`;
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
  const filteredList = historyList?.filter((item) => {
    const term = searchTerm.toLowerCase();

    const matchSearch =
      String(item.id).toLowerCase().includes(term) ||
      item.account_number.toLowerCase().includes(term) ||
      item.bank_name.toLowerCase().includes(term) ||
      item.account_holder.toLowerCase().includes(term) ||
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
                Tài khoản: <b className="text-gray-700">{user?.userName}</b>
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
              onChange={(e) => {
  setSearchTerm(e.target.value);
  setPage(1);
}}
              className="w-full pl-9 pr-3 py-2 sm:py-1.5 border rounded-md text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#006837]"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-gray-600 whitespace-nowrap">
              Trạng thái:
            </span>
       <select
  value={statusFilter}
  onChange={(e) => {
    setStatusFilter(e.target.value);

    // Khi đổi filter thì quay về trang 1
    setPage(1);
  }}
  className="w-full sm:w-auto px-3 py-2 sm:py-1.5 border rounded-md text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#006837] bg-white cursor-pointer"
>
  <option value="all">Tất cả</option>
  <option value="pending">Đang xử lý</option>
  <option value="approved">Thành công</option>
  <option value="rejected">Đã hủy</option>
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
                      {item.bank_name} -{" "}
                      <span className="text-blue-600 font-mono font-semibold">
                        {item.account_number}
                      </span>
                    </div>
                    <div className="text-gray-500 uppercase">
                      {item.account_holder}
                    </div>
                    {item.note?.trim() ? (
                      <div className="pt-1 text-gray-600">
                        <span className="font-semibold text-gray-700">
                          Ghi chú:{" "}
                        </span>
                        {item.note}
                      </div>
                    ) : null}
                  </div>

                  <div className="flex justify-between items-end pt-1">
                    <span className="text-[11px] text-gray-400">
                      {formatRefundVietnamTime(item.date, item.time, item.ampm)}
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
                  <th className="py-3 px-4">Ghi Chú</th>
                  <th className="py-3 px-4 text-right">Số Tiền</th>
                  <th className="py-3 px-4 text-center">Trạng Thái</th>
                  <th className="py-3 px-4 text-center">Thời Gian</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredList.length > 0 ? (
                  filteredList.map((item, index) => (
                    <tr
                      key={item.id}
                      className="hover:bg-gray-50/80 transition text-gray-800"
                    >
                      {/* Mã GD */}
                      <td className="py-3.5 px-4 font-bold text-[#006837] whitespace-nowrap">
                        {index}
                      </td>

                      {/* Thông tin ngân hàng */}
                      <td className="py-3.5 px-4 space-y-0.5">
                        <div className="font-semibold text-gray-900">
                          {item.bank_name} -{" "}
                          <span className="text-blue-600 font-mono">
                            {item.account_number}
                          </span>
                        </div>
                        <div className="text-[11px] text-gray-500 uppercase">
                          {item.account_holder}
                        </div>
                      </td>

                      {/* Ghi chú */}
                      <td className="py-3.5 px-4 text-xs text-gray-600 max-w-xs">
                        {item.note?.trim() ? (
                          <span className="whitespace-pre-wrap break-words">
                            {item.note}
                          </span>
                        ) : (
                          <span className="text-gray-300">—</span>
                        )}
                      </td>

                      {/* Số tiền */}
                      <td className="py-3.5 px-4 text-right font-bold text-red-600 whitespace-nowrap">
                        {formatMoney(item.amount)}
                      </td>

                      {/* Trạng thái */}
                      <td className="py-3.5 px-4 text-center whitespace-nowrap">
                        <StatusBadge status={item.status} />
                      </td>

                      {/* Thời gian */}
                      <td className="py-3.5 px-4 text-center text-xs text-gray-500 whitespace-nowrap">
                        {formatRefundVietnamTime(item.date, item.time, item.ampm)}
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
          {pagination && pagination.total > 0 && (
  <div className="border-t border-gray-200 bg-white px-4 py-3">
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3">

      {/* Thông tin */}
      <div className="text-xs sm:text-sm text-gray-500">
        Hiển thị{" "}
        <span className="font-semibold text-gray-700">
          {pagination.from}
        </span>{" "}
        -{" "}
        <span className="font-semibold text-gray-700">
          {pagination.to}
        </span>{" "}
        /{" "}
        <span className="font-semibold text-gray-700">
          {pagination.total}
        </span>{" "}
        yêu cầu
      </div>

      {/* Pagination */}
      <div className="flex items-center gap-1">

        {/* Trang trước */}
        <button
          type="button"
          disabled={pagination.current_page <= 1 || isFetching}
          onClick={() => {
            setPage((prev) => Math.max(prev - 1, 1));
          }}
          className="px-3 py-1.5 text-xs sm:text-sm border border-gray-200 rounded-md bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Trước
        </button>

        {/* Số trang */}
        <div className="flex items-center gap-1">
          {Array.from(
            { length: pagination.last_page },
            (_, index) => index + 1
          ).map((pageNumber) => (
            <button
              key={pageNumber}
              type="button"
              disabled={isFetching}
              onClick={() => setPage(pageNumber)}
              className={`min-w-[34px] px-2 py-1.5 text-xs sm:text-sm rounded-md border transition ${
                pageNumber === pagination.current_page
                  ? "bg-[#006837] text-white border-[#006837]"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
              } disabled:cursor-not-allowed`}
            >
              {pageNumber}
            </button>
          ))}
        </div>

        {/* Trang sau */}
        <button
          type="button"
          disabled={
            pagination.current_page >= pagination.last_page ||
            isFetching
          }
          onClick={() => {
            setPage((prev) =>
              Math.min(prev + 1, pagination.last_page)
            );
          }}
          className="px-3 py-1.5 text-xs sm:text-sm border border-gray-200 rounded-md bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Sau
        </button>
      </div>
    </div>
  </div>
)}
        </div>
      </div>
    </main>
  );
}

/* Badge hiển thị trạng thái */
function StatusBadge({
  status,
}: {
  status: RefundRecord["status"];
}) {
  switch (status) {
    case "approved":
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-green-100 text-green-700">
          <CheckCircle2 size={13} />
          Đã duyệt
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
          Đã hủy
        </span>
      );

    default:
      return null;
  }
}
