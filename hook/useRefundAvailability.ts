"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchClientRefunds } from "@/hook/useRefundClient";
import {
  getAvailableRefundAmount,
  getPendingRefundTotal,
} from "@/lib/refund-balance";

export function useRefundAvailability(
  token: string | null,
  walletBalance: number,
) {
  const query = useQuery({
    queryKey: ["refund-availability", token],
    enabled: Boolean(token),
    queryFn: async () => {
      let page = 1;
      let pendingTotal = 0;
      let lastPage = 1;

      do {
        const result = await fetchClientRefunds(token!, page, 100);
        pendingTotal += getPendingRefundTotal(result.data ?? []);
        lastPage = result.pagination?.last_page ?? 1;
        page += 1;
      } while (page <= lastPage && page <= 20);

      return { pendingTotal };
    },
    staleTime: 15 * 1000,
  });

  const pendingTotal = query.data?.pendingTotal ?? 0;

  return {
    ...query,
    pendingTotal,
    available: getAvailableRefundAmount(walletBalance, pendingTotal),
  };
}
