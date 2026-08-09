"use client";

import { useQuery } from "@tanstack/react-query";
import { useCustomerAuthStore } from "@/store/customer-auth-store";
import { RefundRecord } from "@/app/flight/refund/history/refund-types";

interface RefundApiItem {
  id: string | number;

  bank_name: string;
  account_number: string;
  account_holder: string;

  amount: number | string;

  status: "pending" | "approved" | "completed" | "rejected";

  date?: string;
  time?: string;
  ampm?: "AM" | "PM";

  note?: string;

  created_at: string;
  updated_at?: string;
}

interface RefundApiResponse {
  success: boolean;
  message?: string;
  data?: RefundApiItem[];
}

const getRefundHistory = async (
  accessToken: string,
): Promise<RefundRecord[]> => {
  const response = await fetch("/api/refund", {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    cache: "no-store",
  });

  const result: RefundApiResponse = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message || "Không thể lấy lịch sử hoàn tiền");
  }

  return (result.data ?? []).map((item) => ({
    id: item.id,

    bankName: item.bank_name,
    accountNumber: item.account_number,
    accountHolder: item.account_holder,

    amount: Number(item.amount),

    status: item.status,

    date: item.date,
    time: item.time,
    ampm: item.ampm,

    note: item.note ?? "",

    createdAt: item.created_at,
    updatedAt: item.updated_at,
  }));
};

export function useRefundHistory() {
  const accessToken = useCustomerAuthStore((state) => state.accessToken);

  return useQuery({
    queryKey: ["refund-history"],

    queryFn: () => getRefundHistory(accessToken!),

    enabled: !!accessToken,

    staleTime: 30 * 1000,

    refetchOnWindowFocus: false,
  });
}
