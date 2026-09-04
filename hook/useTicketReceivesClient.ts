"use client";

import { useQuery } from "@tanstack/react-query";

import {
  normalizeTicketReceiveStatus,
  type TicketReceiveStatus,
} from "@/hook/useTicketReceives";

export type TicketReceiveClientStatus = TicketReceiveStatus;

export interface TicketReceiveClient {
  id: number;
  user_id: number;
  email: string;
  phone: string;
  note: string | null;
  status: TicketReceiveClientStatus;
  created_at: string;
  updated_at: string;
}

export interface TicketReceiveClientPagination {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  from: number | null;
  to: number | null;
  has_more_pages: boolean;
}

export interface TicketReceiveClientResponse {
  success: boolean;
  message?: string;
  data: TicketReceiveClient[];
  pagination: TicketReceiveClientPagination;
}

async function fetchClientTicketReceives(
  token: string,
  page: number,
  perPage: number,
): Promise<TicketReceiveClientResponse> {
  const params = new URLSearchParams({
    page: String(page),
    per_page: String(perPage),
  });

  const response = await fetch(
    `/api/ticket-receives/client?${params.toString()}`,
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
    if (typeof window !== "undefined") {
      window.location.href = "/flight/refund/login";
    }
    throw new Error("Phiên đăng nhập đã hết hạn");
  }

  const data = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(data.message || "Không thể lấy lịch sử nhận vé");
  }

  return {
    ...data,
    data: Array.isArray(data.data)
      ? data.data.map((item: TicketReceiveClient) => ({
          ...item,
          status: normalizeTicketReceiveStatus(item.status),
        }))
      : [],
  };
}

export function useClientTicketReceives(
  token: string,
  page: number = 1,
  perPage: number = 10,
) {
  return useQuery({
    queryKey: ["client-ticket-receives", token, page, perPage],
    queryFn: () => fetchClientTicketReceives(token, page, perPage),
    enabled: Boolean(token),
    placeholderData: (prev) => prev,
  });
}
