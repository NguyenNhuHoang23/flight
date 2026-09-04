export function parseVndAmount(
  value: number | string | null | undefined,
): number {
  const amount = Number(value ?? 0);
  return Number.isFinite(amount) ? Math.round(amount) : 0;
}

export function formatVndAmount(
  value: number | string | null | undefined,
): string {
  return parseVndAmount(value).toLocaleString("vi-VN", {
    maximumFractionDigits: 0,
  });
}

export function getPendingRefundTotal(
  refunds: Array<{ status?: string | null; amount?: number | string | null }>,
): number {
  return refunds.reduce((total, refund) => {
    if (refund.status !== "pending") {
      return total;
    }

    return total + parseVndAmount(refund.amount);
  }, 0);
}

export function getAvailableRefundAmount(
  balance: number | string | null | undefined,
  pendingTotal: number,
): number {
  return Math.max(0, parseVndAmount(balance) - parseVndAmount(pendingTotal));
}
