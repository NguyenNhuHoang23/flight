"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  History,
  Loader2,
  Plus,
  Search,
  Ticket,
  XCircle,
} from "lucide-react";

import { useClientRefunds } from "@/hook/useRefundClient";
import { useClientTicketReceives } from "@/hook/useTicketReceivesClient";
import { convertRefundDateTimeToVietnam } from "@/components/refund/refund-datetime";
import { useCustomerAuthStore } from "@/store/customer-auth-store";

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────

type ActiveTab = "refund" | "ticket-receive";

// ─────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────

function formatMoney(value: string | number) {
  const amount = Number(value);
  if (Number.isNaN(amount)) return "0 đ";
  return new Intl.NumberFormat("vi-VN").format(amount) + " đ";
}

function formatRefundVietnamTime(
  date?: string | null,
  time?: string | null,
  ampm?: "AM" | "PM" | null,
) {
  const vn = convertRefundDateTimeToVietnam(date, time, ampm);
  return `${vn.time} ${vn.ampm}`;
}

function formatDate(value: string | null | undefined): string {
  if (!value) return "—";
  const match = value.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/);
  if (!match) return value;
  const [, year, month, day, hour, minute] = match;
  return `${hour}:${minute} ${day}/${month}/${year}`;
}

// ─────────────────────────────────────────────────────────────
// Sub-components: Badges
// ─────────────────────────────────────────────────────────────

function RefundStatusBadge({
  status,
}: {
  status: "pending" | "approved" | "rejected";
}) {
  if (status === "approved")
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-green-100 text-green-700">
        <CheckCircle2 size={12} /> Đã duyệt
      </span>
    );

  if (status === "pending")
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-100 text-amber-700">
        <Clock size={12} /> Đang xử lý
      </span>
    );

  return (
    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-red-100 text-red-700">
      <XCircle size={12} /> Đã hủy
    </span>
  );
}

function TicketReceiveStatusBadge({
  status,
}: {
  status: "not_returned" | "returned";
}) {
  if (status === "returned")
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-green-100 text-green-700">
        <CheckCircle2 size={12} /> Đã trả về
      </span>
    );

  return (
    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-100 text-amber-700">
      <Clock size={12} /> Chưa trả
    </span>
  );
}

// ─────────────────────────────────────────────────────────────
// Tab: Lịch sử hoàn tiền
// ─────────────────────────────────────────────────────────────

function RefundHistoryTab({ token }: { token: string }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [page, setPage] = useState(1);
  const perPage = 10;

  const { data, isLoading, isFetching, refetch, error } = useClientRefunds(
    token,
    page,
    perPage,
  );

  const historyList = data?.data ?? [];
  const pagination = data?.pagination;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-16 gap-2 text-gray-500">
        <Loader2 className="w-5 h-5 animate-spin" /> Đang tải lịch sử hoàn tiền...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-16 gap-3">
        <XCircle className="w-8 h-8 text-red-400" />
        <p className="text-sm text-red-600">
          {error instanceof Error ? error.message : "Không thể tải dữ liệu"}
        </p>
        <button
          onClick={() => refetch()}
          className="px-4 py-2 bg-[#006837] text-white rounded-md text-xs font-semibold"
        >
          Thử lại
        </button>
      </div>
    );
  }

  const filtered = historyList.filter((item) => {
    const term = searchTerm.toLowerCase();
    const matchSearch =
      String(item.id).toLowerCase().includes(term) ||
      item.account_number.toLowerCase().includes(term) ||
      item.bank_name.toLowerCase().includes(term) ||
      item.account_holder.toLowerCase().includes(term) ||
      (item.note ?? "").toLowerCase().includes(term);
    const matchStatus =
      statusFilter === "all" || item.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="space-y-4">
      {/* Filter */}
      <div className="bg-white rounded-lg p-4 shadow-xs border border-gray-200 flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Tìm theo Ngân hàng, STK, Ghi chú..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setPage(1);
            }}
            className="w-full pl-9 pr-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#006837]"
          />
        </div>

        <select
          value={statusFilter}
          onChange={(e) => {
            setStatusFilter(e.target.value);
            setPage(1);
          }}
          className="px-3 py-2 border rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#006837] cursor-pointer"
        >
          <option value="all">Tất cả trạng thái</option>
          <option value="pending">Đang xử lý</option>
          <option value="approved">Đã duyệt</option>
          <option value="rejected">Đã hủy</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-xs border border-gray-200 overflow-hidden">
        {/* Mobile */}
        <div className="block sm:hidden divide-y divide-gray-100">
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <div key={item.id} className="p-4 space-y-2.5">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-[#006837] text-sm">
                    #{item.id}
                  </span>
                  <RefundStatusBadge status={item.status} />
                </div>
                <div className="text-xs space-y-1">
                  <div className="font-medium text-gray-800">
                    {item.bank_name} –{" "}
                    <span className="text-blue-600 font-mono font-semibold">
                      {item.account_number}
                    </span>
                  </div>
                  <div className="text-gray-500 uppercase">
                    {item.account_holder}
                  </div>
                  {item.note?.trim() && (
                    <div className="text-gray-600">
                      <span className="font-semibold">Ghi chú: </span>
                      {item.note}
                    </div>
                  )}
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
              Không tìm thấy yêu cầu hoàn tiền nào.
            </div>
          )}
        </div>

        {/* Desktop */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-gray-100/80 border-b border-gray-200 text-gray-700 font-bold text-xs uppercase">
                <th className="py-3 px-4">#</th>
                <th className="py-3 px-4">Thông Tin Nhận Tiền</th>
                <th className="py-3 px-4">Ghi Chú</th>
                <th className="py-3 px-4 text-right">Số Tiền</th>
                <th className="py-3 px-4 text-center">Trạng Thái</th>
                <th className="py-3 px-4 text-center">Thời Gian</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.length > 0 ? (
                filtered.map((item, idx) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-50/80 transition text-gray-800"
                  >
                    <td className="py-3.5 px-4 font-bold text-[#006837] whitespace-nowrap">
                      {idx + 1}
                    </td>
                    <td className="py-3.5 px-4 space-y-0.5">
                      <div className="font-semibold">
                        {item.bank_name} –{" "}
                        <span className="text-blue-600 font-mono">
                          {item.account_number}
                        </span>
                      </div>
                      <div className="text-[11px] text-gray-500 uppercase">
                        {item.account_holder}
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-xs text-gray-600 max-w-xs">
                      {item.note?.trim() ? (
                        <span className="whitespace-pre-wrap wrap-break-word">
                          {item.note}
                        </span>
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-right font-bold text-red-600 whitespace-nowrap">
                      {formatMoney(item.amount)}
                    </td>
                    <td className="py-3.5 px-4 text-center whitespace-nowrap">
                      <RefundStatusBadge status={item.status} />
                    </td>
                    <td className="py-3.5 px-4 text-center text-xs text-gray-500 whitespace-nowrap">
                      {formatRefundVietnamTime(
                        item.date,
                        item.time,
                        item.ampm,
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="py-12 text-center text-gray-400 text-sm"
                  >
                    Không tìm thấy yêu cầu hoàn tiền nào.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {pagination && pagination.total > 0 && (
          <div className="border-t border-gray-200 px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-gray-500">
              Hiển thị{" "}
              <b className="text-gray-700">{pagination.from}</b> –{" "}
              <b className="text-gray-700">{pagination.to}</b> /{" "}
              <b className="text-gray-700">{pagination.total}</b> yêu cầu
            </span>
            <div className="flex items-center gap-1">
              <button
                type="button"
                disabled={pagination.current_page <= 1 || isFetching}
                onClick={() => setPage((p) => Math.max(p - 1, 1))}
                className="px-3 py-1.5 text-xs border border-gray-200 rounded-md bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Trước
              </button>
              {Array.from({ length: pagination.last_page }, (_, i) => i + 1).map(
                (n) => (
                  <button
                    key={n}
                    type="button"
                    disabled={isFetching}
                    onClick={() => setPage(n)}
                    className={`min-w-8.5 px-2 py-1.5 text-xs rounded-md border transition ${
                      n === pagination.current_page
                        ? "bg-[#006837] text-white border-[#006837]"
                        : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                    } disabled:cursor-not-allowed`}
                  >
                    {n}
                  </button>
                ),
              )}
              <button
                type="button"
                disabled={
                  pagination.current_page >= pagination.last_page || isFetching
                }
                onClick={() =>
                  setPage((p) => Math.min(p + 1, pagination.last_page))
                }
                className="px-3 py-1.5 text-xs border border-gray-200 rounded-md bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Sau
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Tab: Lịch sử nhận vé
// ─────────────────────────────────────────────────────────────

function TicketReceiveHistoryTab({ token }: { token: string }) {
  const [page, setPage] = useState(1);
  const perPage = 10;

  const { data, isLoading, isFetching, refetch, error } =
    useClientTicketReceives(token, page, perPage);

  const list = data?.data ?? [];
  const pagination = data?.pagination;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-16 gap-2 text-gray-500">
        <Loader2 className="w-5 h-5 animate-spin" /> Đang tải lịch sử nhận vé...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-16 gap-3">
        <XCircle className="w-8 h-8 text-red-400" />
        <p className="text-sm text-red-600">
          {error instanceof Error ? error.message : "Không thể tải dữ liệu"}
        </p>
        <button
          onClick={() => refetch()}
          className="px-4 py-2 bg-[#006837] text-white rounded-md text-xs font-semibold"
        >
          Thử lại
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Table */}
      <div className="bg-white rounded-lg shadow-xs border border-gray-200 overflow-hidden">
        {/* Mobile */}
        <div className="block sm:hidden divide-y divide-gray-100">
          {list.length > 0 ? (
            list.map((item) => (
              <div key={item.id} className="p-4 space-y-2.5">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-[#006837] text-sm">
                    #{item.id}
                  </span>
                  <TicketReceiveStatusBadge status={item.status} />
                </div>

                <div className="text-xs space-y-1 text-gray-700">
                  <div>
                    <span className="text-gray-400">Email: </span>
                    {item.email}
                  </div>
                  <div>
                    <span className="text-gray-400">SĐT: </span>
                    {item.phone}
                  </div>
                  {item.note?.trim() && (
                    <div>
                      <span className="text-gray-400">Ghi chú: </span>
                      {item.note}
                    </div>
                  )}
                </div>

                <div className="text-[11px] text-gray-400 pt-1">
                  Ngày gửi: {formatDate(item.created_at)}
                </div>
              </div>
            ))
          ) : (
            <div className="py-10 text-center text-gray-400 text-xs">
              Bạn chưa có yêu cầu nhận vé nào.
            </div>
          )}
        </div>

        {/* Desktop */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-gray-100/80 border-b border-gray-200 text-gray-700 font-bold text-xs uppercase">
                <th className="py-3 px-4">#</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Số điện thoại</th>
                <th className="py-3 px-4">Ghi chú</th>
                <th className="py-3 px-4 text-center">Trạng thái</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {list.length > 0 ? (
                list.map((item, idx) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-50/80 transition text-gray-800"
                  >
                    <td className="py-3.5 px-4 font-bold text-[#006837] whitespace-nowrap">
                      {idx + 1}
                    </td>
                    <td className="py-3.5 px-4">{item.email}</td>
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      {item.phone}
                    </td>
                    <td className="py-3.5 px-4 text-xs text-gray-600 max-w-xs">
                      {item.note?.trim() ? (
                        <span className="whitespace-pre-wrap wrap-break-word">
                          {item.note}
                        </span>
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-center whitespace-nowrap">
                      <TicketReceiveStatusBadge status={item.status} />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="py-12 text-center text-gray-400 text-sm"
                  >
                    Bạn chưa có yêu cầu nhận vé nào.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {pagination && pagination.total > 0 && (
          <div className="border-t border-gray-200 px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-gray-500">
              Hiển thị{" "}
              <b className="text-gray-700">{pagination.from}</b> –{" "}
              <b className="text-gray-700">{pagination.to}</b> /{" "}
              <b className="text-gray-700">{pagination.total}</b> yêu cầu
            </span>
            <div className="flex items-center gap-1">
              <button
                type="button"
                disabled={pagination.current_page <= 1 || isFetching}
                onClick={() => setPage((p) => Math.max(p - 1, 1))}
                className="px-3 py-1.5 text-xs border border-gray-200 rounded-md bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Trước
              </button>
              {Array.from({ length: pagination.last_page }, (_, i) => i + 1).map(
                (n) => (
                  <button
                    key={n}
                    type="button"
                    disabled={isFetching}
                    onClick={() => setPage(n)}
                    className={`min-w-8.5 px-2 py-1.5 text-xs rounded-md border transition ${
                      n === pagination.current_page
                        ? "bg-[#006837] text-white border-[#006837]"
                        : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                    } disabled:cursor-not-allowed`}
                  >
                    {n}
                  </button>
                ),
              )}
              <button
                type="button"
                disabled={
                  pagination.current_page >= pagination.last_page || isFetching
                }
                onClick={() =>
                  setPage((p) => Math.min(p + 1, pagination.last_page))
                }
                className="px-3 py-1.5 text-xs border border-gray-200 rounded-md bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Sau
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────

export default function RefundHistoryPage() {
  const router = useRouter();

  const user = useCustomerAuthStore((state) => state.user);
  const accessToken = useCustomerAuthStore((state) => state.accessToken);
  const hydrated = useCustomerAuthStore((state) => state.hydrated);

  const [activeTab, setActiveTab] = useState<ActiveTab>("refund");

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
                Lịch Sử Giao Dịch
              </h1>
              <p className="text-xs text-gray-500">
                Tài khoản: <b className="text-gray-700">{user.userName}</b>
              </p>
            </div>
          </div>

          {/* Quick actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => router.push("/flight/refund")}
              className="px-3 py-2 bg-[#006837] text-white text-xs font-bold rounded-md hover:bg-[#004d28] transition shadow-xs flex items-center gap-1.5"
            >
              <Plus className="w-3.5 h-3.5" />
              Yêu cầu hoàn tiền
            </button>

            <button
              onClick={() => router.push("/flight/ticket-receive")}
              className="px-3 py-2 border border-[#006837] text-[#006837] text-xs font-bold rounded-md hover:bg-green-50 transition flex items-center gap-1.5"
            >
              <Ticket className="w-3.5 h-3.5" />
              Yêu cầu nhận vé
            </button>
          </div>
        </div>

        {/* TABS */}
        <div className="bg-white rounded-lg shadow-xs border border-gray-200">
          <div className="flex border-b border-gray-200">
            <button
              type="button"
              onClick={() => setActiveTab("refund")}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold transition border-b-2 ${
                activeTab === "refund"
                  ? "border-[#006837] text-[#006837]"
                  : "border-transparent text-gray-500 hover:text-gray-800"
              }`}
            >
              <History className="w-4 h-4" />
              Hoàn Tiền
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("ticket-receive")}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold transition border-b-2 ${
                activeTab === "ticket-receive"
                  ? "border-[#006837] text-[#006837]"
                  : "border-transparent text-gray-500 hover:text-gray-800"
              }`}
            >
              <Ticket className="w-4 h-4" />
              Nhận Vé
            </button>
          </div>

          <div className="p-4">
            {activeTab === "refund" && (
              <RefundHistoryTab token={accessToken} />
            )}
            {activeTab === "ticket-receive" && (
              <TicketReceiveHistoryTab token={accessToken} />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
