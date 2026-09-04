"use client";

import { useQuery } from "@tanstack/react-query";

export interface Refund {
  id: number;
  user_id: number;

  bank_name: string;
  account_number: string;
  account_holder: string;

  amount: number | string;

  date?: string | null;
  time?: string | null;
  ampm?: "AM" | "PM" | null;

  note?: string | null;

  status: "pending" | "approved" | "rejected";

  created_at?: string;
  updated_at?: string;

  user?: {
    id: number;
    userName: string;
    email: string;
    balance?: number | string | null;
  };
}
export interface RefundPagination {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  from: number | null;
  to: number | null;
  has_more_pages: boolean;
}

interface RefundResponse {
  success: boolean;
  message?: string;
  data: Refund[];
  pagination: RefundPagination;
}

const fetchRefunds = async (
  token: string,
  page: number,
  perPage: number
): Promise<RefundResponse> => {
  const params = new URLSearchParams({
    page: String(page),
    per_page: String(perPage),
  });

  const response = await fetch(`/api/refund?${params.toString()}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  if (response.status === 401) {
    localStorage.removeItem("admin-auth");
    window.location.href = "/admin/login";
    throw new Error("Phiên đăng nhập đã hết hạn");
  }

  const data = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(
      data.message || "Không thể lấy danh sách hoàn tiền"
    );
  }

  return data;
};

export function useRefunds(token: string, page: number, perPage: number) {
  return useQuery({
    queryKey: ["admin-refunds", token, page, perPage],
    queryFn: () => fetchRefunds(token, page, perPage),
    enabled: Boolean(token),
  });
}
