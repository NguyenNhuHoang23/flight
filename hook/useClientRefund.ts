"use client";

import { useMutation } from "@tanstack/react-query";
import { useClientAuthStore } from "@/store/client-auth-store";

export interface RefundPayload {
  bank_name: string;
  account_holder: string;
  account_number: string;
  amount: number;
  date: string;
  time: string;
  ampm: "AM" | "PM";
  note?: string;
}

export function useClientRefund() {
  const token = useClientAuthStore((state) => state.accessToken);

  return useMutation({
    mutationFn: async (payload: RefundPayload) => {
      if (!token) {
        throw new Error("Bạn chưa đăng nhập");
      }

      const response = await fetch("/api/client/refund", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Không thể gửi yêu cầu rút tiền");
      }

      return data;
    },
  });
}
