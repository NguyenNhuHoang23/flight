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

export const fetchClientRefunds = async (
  token: string,
  page: number,
  perPage: number
): Promise<RefundResponse> => {
  const params = new URLSearchParams({
    page: String(page),
    per_page: String(perPage),
  });

  const response = await fetch(`/api/refund/client?${params.toString()}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  if (response.status === 401) {
    localStorage.removeItem("auth");
    window.location.href = "/login";

    throw new Error("Phiên đăng nhập đã hết hạn");
  }

  const data = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(
      data.message || "Không thể lấy lịch sử hoàn tiền"
    );
  }

  return data;
};

export function useClientRefunds(
  token: string,
  page: number = 1,
  perPage: number = 10
) {
  return useQuery({
    queryKey: ["client-refunds", page, perPage],

    queryFn: () => fetchClientRefunds(token, page, perPage),

    enabled: Boolean(token),

    placeholderData: (previousData) => previousData,
  });
}