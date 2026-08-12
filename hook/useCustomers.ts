"use client";

import { useQuery } from "@tanstack/react-query";
import { Customer } from "@/components/admin/customer/customer-types";

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

  if (response.status === 401) {
    localStorage.removeItem("admin-auth");

    window.location.href = "/admin/login";

    return {
      success: false,
      message: "Phiên đăng nhập đã hết hạn",
      data: {
        data: [],
        current_page: 1,
        last_page: 1,
        per_page: 10,
        total: 0,
      },
    };
  }

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
