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
    name: string;
    email: string;
  };
}

interface RefundResponse {
  success: boolean;
  message?: string;
  data: Refund[];
}

const fetchRefunds = async (token: string): Promise<RefundResponse> => {
  const response = await fetch("/api/refund", {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  const data = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(data.message || "Không thể lấy danh sách hoàn tiền");
  }

  return data;
};

export function useRefunds(token: string) {
  return useQuery({
    queryKey: ["admin-refunds", token],
    queryFn: () => fetchRefunds(token),
    enabled: Boolean(token),
  });
}
