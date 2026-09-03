"use client";

import { useQuery } from "@tanstack/react-query";

export type TicketReceiveStatus = "not_returned" | "returned";

export interface TicketReceive {
  id: number;
  user_id: number;
  email: string;
  phone: string;
  note: string | null;
  status: TicketReceiveStatus;
  created_at: string;
  updated_at: string;
  user?: {
    id: number;
    userName: string;
    email: string;
  };
}

export interface TicketReceivePagination {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  from: number | null;
  to: number | null;
  has_more_pages: boolean;
}

export interface TicketReceiveResponse {
  success: boolean;
  message?: string;
  data: TicketReceive[];
  pagination: TicketReceivePagination;
}

async function fetchTicketReceives(
  token: string,
  page: number,
  perPage: number,
  search: string,
  status: string,
): Promise<TicketReceiveResponse> {
  const params = new URLSearchParams({
    page: String(page),
    per_page: String(perPage),
  });

  if (search.trim()) params.set("search", search.trim());
  if (status && status !== "all") params.set("status", status);

  const response = await fetch(
    `/api/admin/ticket-receives?${params.toString()}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    },
  );

  if (response.status === 401) {
    localStorage.removeItem("admin-auth");
    window.location.href = "/admin/login";
    throw new Error("Phiên đăng nhập đã hết hạn");
  }

  const data = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(data.message || "Không thể lấy danh sách nhận vé");
  }

  return data;
}

export function useTicketReceives(
  token: string,
  page: number,
  perPage: number,
  search: string,
  status: string,
) {
  return useQuery({
    queryKey: ["admin-ticket-receives", token, page, perPage, search, status],
    queryFn: () =>
      fetchTicketReceives(token, page, perPage, search, status),
    enabled: Boolean(token),
  });
}
