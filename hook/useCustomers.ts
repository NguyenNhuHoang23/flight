"use client";

import { useQuery } from "@tanstack/react-query";

export interface Customer {
  id: number;
  name: string;
  email: string;
  balance: string;
  role: "admin" | "customer";
  created_at?: string;
  updated_at?: string;
}

interface CustomerResponse {
  success: boolean;
  message: string;
  data: {
    data: Customer[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
}

async function fetchCustomers(token: string): Promise<CustomerResponse> {
  const response = await fetch("/api/admin/account?role=customer", {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Không thể lấy danh sách khách hàng");
  }

  return data;
}

export function useCustomers(token: string) {
  return useQuery({
    queryKey: ["customers"],
    queryFn: () => fetchCustomers(token),
  });
}
