import { parseVndAmount } from "@/lib/refund-balance";

export type CustomerAccount = {
  id: number;
  username?: string;
  userName?: string;
  name?: string;
  email?: string;
  role: string;
  balance: number;
  created_at?: string;
  updated_at?: string;
};

function asRecord(value: unknown): Record<string, unknown> | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return null;
  }

  return value as Record<string, unknown>;
}

export function getCustomerUsername(
  user?: Pick<CustomerAccount, "username" | "userName" | "name"> | null,
) {
  return user?.username || user?.userName || user?.name || "";
}

export function normalizeCustomerAccount(
  payload: unknown,
): CustomerAccount | null {
  const root = asRecord(payload);
  if (!root) return null;

  const nested = asRecord(root.data);
  const account =
    nested && nested.id != null
      ? nested
      : root.id != null
        ? root
        : asRecord(root.user);

  if (!account || account.id == null) return null;

  const username = String(
    account.username ?? account.userName ?? account.name ?? "",
  );

  return {
    id: Number(account.id),
    username,
    userName: username,
    name: username,
    email: account.email ? String(account.email) : undefined,
    role: String(account.role ?? "customer"),
    balance: parseVndAmount(account.balance as string | number | null),
    created_at: account.created_at ? String(account.created_at) : undefined,
    updated_at: account.updated_at ? String(account.updated_at) : undefined,
  };
}

export async function fetchCurrentCustomerAccount(
  token: string,
): Promise<CustomerAccount | null> {
  const response = await fetch("/api/auth/customer/me", {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    return null;
  }

  const payload = await response.json();

  if (payload?.success === false) {
    return null;
  }

  return normalizeCustomerAccount(payload);
}
