"use client";

import React, { useEffect, useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Pencil, Trash2, Plus, X, Search, Ticket } from "lucide-react";

import { useAuthStore } from "@/store/auth-store";
import {
  useTicketReceives,
  TicketReceive,
  TicketReceiveStatus,
  TICKET_RECEIVE_STATUS_OPTIONS,
  ticketReceiveStatusLabel,
} from "@/hook/useTicketReceives";

// ============================================================
// STATUS BADGE
// ============================================================

function StatusBadge({ status }: { status: TicketReceiveStatus }) {
  if (status === "sent") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        Đã gửi
      </span>
    );
  }

  if (status === "cancelled") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-rose-100 px-2.5 py-0.5 text-xs font-semibold text-rose-700">
        <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
        Đã hủy
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-700">
      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
      Chờ gửi
    </span>
  );
}

// ============================================================
// MODAL: Thêm / Sửa
// ============================================================

interface FormState {
  email: string;
  phone: string;
  note: string;
  status: TicketReceiveStatus;
  user_id: string;
}

const EMPTY_FORM: FormState = {
  email: "",
  phone: "",
  note: "",
  status: "pending",
  user_id: "",
};

interface EditModalProps {
  token: string;
  item: TicketReceive | null; // null = thêm mới
  onClose: () => void;
  onSaved: () => void;
}

function EditModal({ token, item, onClose, onSaved }: EditModalProps) {
  const [form, setForm] = useState<FormState>(() =>
    item
      ? {
          email: item.email,
          phone: item.phone,
          note: item.note ?? "",
          status: item.status,
          user_id: String(item.user_id),
        }
      : EMPTY_FORM,
  );
  const [error, setError] = useState<string | null>(null);

  const isEdit = Boolean(item);

  const { mutate, isPending } = useMutation({
    mutationFn: async (payload: FormState) => {
      const url = isEdit
        ? `/api/admin/ticket-receives/${item!.id}`
        : "/api/admin/ticket-receives";

      const body: Record<string, unknown> = {
        email: payload.email,
        phone: payload.phone,
        note: payload.note || null,
        status: payload.status,
      };

      if (!isEdit && payload.user_id) {
        body.user_id = Number(payload.user_id);
      }

      const response = await fetch(url, {
        method: isEdit ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Thao tác thất bại");
      }

      return data;
    },
    onSuccess: () => {
      onSaved();
      onClose();
    },
    onError: (err) => {
      setError(err instanceof Error ? err.message : "Có lỗi xảy ra");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    mutate(form);
  };

  const set = (field: keyof FormState) => (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
          <h2 className="text-base font-semibold text-slate-900">
            {isEdit ? "Chỉnh sửa lệnh nhận vé" : "Thêm lệnh nhận vé"}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 px-6 py-5">
          {/* Email */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Email <span className="text-rose-500">*</span>
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={set("email")}
              placeholder="vd: khach@gmail.com"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Số điện thoại <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              required
              value={form.phone}
              onChange={set("phone")}
              placeholder="vd: 0901234567"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          {/* User ID (chỉ hiện khi thêm mới) */}
          {!isEdit && (
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                User ID{" "}
                <span className="text-slate-400 text-xs">(không bắt buộc)</span>
              </label>
              <input
                type="number"
                value={form.user_id}
                onChange={set("user_id")}
                placeholder="ID người dùng"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
          )}

          {/* Status */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Trạng thái
            </label>
            <select
              value={form.status}
              onChange={set("status")}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              {TICKET_RECEIVE_STATUS_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Note */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Ghi chú
            </label>
            <textarea
              rows={3}
              value={form.note}
              onChange={set("note")}
              placeholder="Ghi chú thêm..."
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 resize-none"
            />
          </div>

          {error && (
            <p className="rounded-lg bg-rose-50 px-3 py-2 text-sm text-rose-600">
              {error}
            </p>
          )}

          {/* Actions */}
          <div className="flex justify-end gap-2 pt-1">
            <button
              type="button"
              onClick={onClose}
              disabled={isPending}
              className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 disabled:opacity-50"
            >
              Hủy
            </button>
            <button
              type="submit"
              disabled={isPending}
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 disabled:opacity-50"
            >
              {isPending ? "Đang lưu..." : isEdit ? "Lưu thay đổi" : "Thêm mới"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ============================================================
// PAGE
// ============================================================

const STATUS_TABS = [
  { id: "all", label: "Tất cả" },
  ...TICKET_RECEIVE_STATUS_OPTIONS.map((option) => ({
    id: option.value,
    label: option.label,
  })),
];

export default function TicketReceivesPage() {
  const token = useAuthStore((state) => state.accessToken) ?? "";

  // Filters
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [page, setPage] = useState(1);
  const perPage = 10;

  // Modal
  const [editingItem, setEditingItem] = useState<TicketReceive | null | "new">(
    null,
  );

  // Debounce search
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const handleSearchInput = (value: string) => {
    setSearchInput(value);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setSearch(value);
      setPage(1);
    }, 400);
  };

  // Reset page khi filter thay đổi
  useEffect(() => {
    setPage(1);
  }, [statusFilter]);

  const { data, isLoading, isError, error, refetch } = useTicketReceives(
    token,
    page,
    perPage,
    search,
    statusFilter,
  );

  const pagination = data?.pagination;
  const items = data?.data ?? [];

  // DELETE
  const { mutate: deleteItem, isPending: isDeleting } = useMutation({
    mutationFn: async (id: number) => {
      const response = await fetch(`/api/admin/ticket-receives/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Không thể xóa");
      }

      return result;
    },
    onSuccess: () => refetch(),
    onError: (err) =>
      alert(err instanceof Error ? err.message : "Không thể xóa nhận vé"),
  });

  // QUICK STATUS TOGGLE
  const { mutate: toggleStatus, isPending: isTogglingStatus } = useMutation({
    mutationFn: async ({
      id,
      status,
    }: {
      id: number;
      status: TicketReceiveStatus;
    }) => {
      const response = await fetch(`/api/admin/ticket-receives/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Không thể cập nhật trạng thái");
      }

      return result;
    },
    onSuccess: () => refetch(),
    onError: (err) =>
      alert(
        err instanceof Error ? err.message : "Không thể cập nhật trạng thái",
      ),
  });

  const handleDelete = (id: number) => {
    if (!confirm("Bạn có chắc chắn muốn xóa lệnh nhận vé này?")) return;
    deleteItem(id);
  };

  const handleStatusChange = (
    item: TicketReceive,
    newStatus: TicketReceiveStatus,
  ) => {
    if (newStatus === item.status) return;
    const label = ticketReceiveStatusLabel(newStatus);
    if (!confirm(`Xác nhận đổi trạng thái sang "${label}"?`)) return;
    toggleStatus({ id: item.id, status: newStatus });
  };

  // ============================================================
  // LOADING / ERROR
  // ============================================================

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-sm text-slate-500">
          Đang tải danh sách lệnh nhận vé...
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="rounded-xl border border-rose-200 bg-rose-50 p-6 text-center">
        <p className="font-semibold text-rose-700">
          Không thể tải danh sách lệnh nhận vé
        </p>
        <p className="mt-1 text-sm text-rose-600">
          {error instanceof Error ? error.message : "Có lỗi xảy ra"}
        </p>
        <button
          onClick={() => refetch()}
          className="mt-3 rounded-lg bg-rose-600 px-4 py-2 text-sm font-semibold text-white hover:bg-rose-700"
        >
          Thử lại
        </button>
      </div>
    );
  }

  // ============================================================
  // RENDER
  // ============================================================

  return (
    <div className="space-y-5">
      {/* HEADER */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="flex items-center gap-2 text-xl font-bold text-slate-900">
            <Ticket className="h-5 w-5 text-indigo-600" />
            Quản lý Lệnh Nhận Vé
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Danh sách yêu cầu nhận vé từ khách hàng.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setEditingItem("new")}
          className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
        >
          <Plus className="h-4 w-4" />
          Thêm mới
        </button>
      </div>

      {/* FILTER BAR */}
      <div className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Tìm email, SĐT, ghi chú..."
            value={searchInput}
            onChange={(e) => handleSearchInput(e.target.value)}
            className="w-full rounded-lg border border-slate-300 py-2 pl-9 pr-4 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </div>

        {/* Status Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto rounded-lg bg-slate-100 p-1">
          {STATUS_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setStatusFilter(tab.id)}
              className={`whitespace-nowrap rounded-md px-3 py-1.5 text-xs font-semibold transition-all ${
                statusFilter === tab.id
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* TABLE */}
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        {items.length === 0 ? (
          <div className="py-16 text-center text-sm text-slate-400">
            Không có lệnh nhận vé nào phù hợp.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b border-slate-100 bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-4 py-3 text-left">#</th>
                  <th className="px-4 py-3 text-left">Khách hàng</th>
                  <th className="px-4 py-3 text-left">Email</th>
                  <th className="px-4 py-3 text-left">SĐT</th>
                  <th className="px-4 py-3 text-left">Ghi chú</th>
                  <th className="px-4 py-3 text-center">Trạng thái</th>
                  <th className="px-4 py-3 text-left">Ngày tạo</th>
                  <th className="px-4 py-3 text-right">Thao tác</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {items.map((item, idx) => {
                  const rowIndex =
                    (pagination?.from ?? (page - 1) * perPage + 1) + idx;

                  return (
                    <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-3 text-slate-400">{rowIndex}</td>

                      <td className="px-4 py-3">
                        <div className="font-medium text-slate-800">
                          {item.user?.userName || `User #${item.user_id}`}
                        </div>
                        <div className="text-xs text-slate-400">
                          ID: {item.user_id}
                        </div>
                      </td>

                      <td className="px-4 py-3 text-slate-700">{item.email}</td>

                      <td className="px-4 py-3 text-slate-700">{item.phone}</td>

                      <td className="max-w-50 px-4 py-3">
                        <p className="truncate text-slate-500">
                          {item.note || (
                            <span className="italic text-slate-300">
                              Không có
                            </span>
                          )}
                        </p>
                      </td>

                      <td className="px-4 py-3 text-center">
                        <div className="inline-flex flex-col items-center gap-1.5">
                          <StatusBadge status={item.status} />
                          <select
                            value={item.status}
                            disabled={isTogglingStatus || isDeleting}
                            onChange={(e) =>
                              handleStatusChange(
                                item,
                                e.target.value as TicketReceiveStatus,
                              )
                            }
                            title="Đổi trạng thái"
                            className="rounded-md border border-slate-200 bg-white px-1.5 py-0.5 text-[11px] text-slate-600 focus:border-indigo-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            {TICKET_RECEIVE_STATUS_OPTIONS.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </td>

                      <td className="whitespace-nowrap px-4 py-3 text-slate-500">
                        {formatDate(item.created_at)}
                      </td>

                      <td className="px-4 py-3">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            type="button"
                            onClick={() => setEditingItem(item)}
                            disabled={isDeleting}
                            className="rounded-lg p-1.5 text-slate-400 hover:bg-indigo-50 hover:text-indigo-600 disabled:opacity-50"
                            title="Chỉnh sửa"
                          >
                            <Pencil className="h-4 w-4" />
                          </button>

                          <button
                            type="button"
                            onClick={() => handleDelete(item.id)}
                            disabled={isDeleting}
                            className="rounded-lg p-1.5 text-slate-400 hover:bg-rose-50 hover:text-rose-600 disabled:opacity-50"
                            title="Xóa"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* PAGINATION */}
      {pagination && pagination.last_page > 1 && (
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-500">
            {pagination.from && pagination.to
              ? `Hiển thị ${pagination.from} – ${pagination.to} / ${pagination.total}`
              : "Không có dữ liệu"}
          </span>

          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={pagination.current_page <= 1}
              onClick={() => setPage((p) => p - 1)}
              className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Trước
            </button>

            <span className="text-slate-600">
              Trang {pagination.current_page} / {pagination.last_page}
            </span>

            <button
              type="button"
              disabled={pagination.current_page >= pagination.last_page}
              onClick={() => setPage((p) => p + 1)}
              className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Sau
            </button>
          </div>
        </div>
      )}

      {/* MODAL */}
      {editingItem !== null && (
        <EditModal
          token={token}
          item={editingItem === "new" ? null : editingItem}
          onClose={() => setEditingItem(null)}
          onSaved={() => {
            refetch();
            setEditingItem(null);
          }}
        />
      )}
    </div>
  );
}

// ============================================================
// HELPERS
// ============================================================

function formatDate(value: string | null | undefined): string {
  if (!value) return "Chưa có";

  const match = value.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/);

  if (!match) return value;

  const [, year, month, day, hour, minute] = match;

  return `${hour}:${minute} ${day}/${month}/${year}`;
}
