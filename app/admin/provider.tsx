"use client";

import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

import { useAuthStore } from "@/store/auth-store";

interface AdminAuthProviderProps {
  children: React.ReactNode;
}

export default function AdminAuthProvider({
  children,
}: AdminAuthProviderProps) {
  const pathname = usePathname();
  const router = useRouter();

  const accessToken = useAuthStore((state) => state.accessToken);

  const user = useAuthStore((state) => state.user);

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const hasHydrated = useAuthStore((state) => state._hasHydrated);

  const isLoginPage = pathname === "/admin/login";

  // Có authentication hợp lệ trong Zustand
  const isLoggedIn = !!accessToken && !!user && isAuthenticated;

  useEffect(() => {
    // Chưa hydrate localStorage
    if (!hasHydrated) {
      return;
    }

    // =========================
    // ĐANG Ở TRANG LOGIN
    // =========================
    if (isLoginPage) {
      // Đã đăng nhập
      // Không cho vào login
      if (isLoggedIn) {
        router.replace("/admin");
      }

      return;
    }

    // =========================
    // ĐANG Ở TRANG ADMIN
    // =========================

    // Chưa đăng nhập
    // Bắt buộc về login
    if (!isLoggedIn) {
      router.replace("/admin/login");
    }
  }, [hasHydrated, isLoginPage, isLoggedIn, router]);

  // =====================================
  // CHƯA HYDRATE
  // =====================================

  if (!hasHydrated) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-sm text-slate-500">Đang kiểm tra đăng nhập...</div>
      </div>
    );
  }

  // =====================================
  // TRANG LOGIN
  // =====================================

  if (isLoginPage) {
    // Đã login thì không render login
    if (isLoggedIn) {
      return null;
    }

    // Chưa login -> cho vào login
    return <>{children}</>;
  }

  // =====================================
  // TRANG ADMIN
  // =====================================

  // Chưa login -> không render admin
  // router.replace() sẽ đưa về login
  if (!isLoggedIn) {
    return null;
  }

  // Đã login -> cho phép vào admin
  return <>{children}</>;
}
