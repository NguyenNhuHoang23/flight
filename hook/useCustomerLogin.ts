"use client";

import { useMutation } from "@tanstack/react-query";
import { useCustomerAuthStore } from "@/store/customer-auth-store";

interface LoginPayload {
  email: string;
  password: string;
}

interface LoginResponse {
  success: boolean;
  message: string;
  data?: {
    access_token: string;
    token_type: string;
    user: {
      id: number;
      name: string;
      email: string;
      role: string;
      balance: number;
    };
  };
}

export function useCustomerLogin() {
  const login = useCustomerAuthStore((state) => state.login);

  return useMutation<LoginResponse, Error, LoginPayload>({
    mutationFn: async (payload) => {
      const response = await fetch("/api/auth/customer/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data: LoginResponse = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Email hoặc mật khẩu không chính xác");
      }

      return data;
    },

    onSuccess: (data) => {
      if (!data.data) {
        throw new Error("Dữ liệu đăng nhập không hợp lệ");
      }

      const { user, access_token } = data.data;

      // Chỉ cho tài khoản khách hàng đăng nhập khu vực refund
      if (user.role !== "customer") {
        throw new Error(
          "Tài khoản này không được phép sử dụng khu vực khách hàng",
        );
      }

      login(user, access_token);
    },
  });
}
