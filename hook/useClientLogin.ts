"use client";

import { useMutation } from "@tanstack/react-query";
import { useClientAuthStore } from "@/store/client-auth-store";

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
      role?: string;
      balance?: number;
    };
  };
}

export function useClientLogin() {
  const setAuth = useClientAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: async (payload: LoginPayload): Promise<LoginResponse> => {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Đăng nhập thất bại");
      }

      return data;
    },

    onSuccess: (data) => {
      if (!data.data) return;

      setAuth(data.data.access_token, data.data.user);
    },
  });
}
