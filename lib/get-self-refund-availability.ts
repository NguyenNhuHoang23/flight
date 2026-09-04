import {
  getAvailableRefundAmount,
  getPendingRefundTotal,
  parseVndAmount,
} from "@/lib/refund-balance";

type RefundListItem = {
  status?: string | null;
  amount?: number | string | null;
  user?: {
    balance?: number | string | null;
  } | null;
};

export async function getSelfRefundAvailability(
  apiUrl: string,
  authorization: string,
): Promise<{ available: number; pendingTotal: number; balance: number } | null> {
  let page = 1;
  let lastPage = 1;
  let pendingTotal = 0;
  let balance: number | null = null;

  do {
    const response = await fetch(
      `${apiUrl}/api/refund/client?page=${page}&per_page=100`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: authorization,
        },
        cache: "no-store",
      },
    );

    if (!response.ok) {
      return null;
    }

    const payload = await response.json();
    const refunds = (payload?.data ?? []) as RefundListItem[];
    pendingTotal += getPendingRefundTotal(refunds);

    if (balance === null && refunds[0]?.user?.balance != null) {
      balance = parseVndAmount(refunds[0].user.balance);
    }

    lastPage = Number(payload?.pagination?.last_page ?? 1);
    page += 1;
  } while (page <= lastPage && page <= 20);

  if (balance === null) {
    return null;
  }

  return {
    balance,
    pendingTotal,
    available: getAvailableRefundAmount(balance, pendingTotal),
  };
}
