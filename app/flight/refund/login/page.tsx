"use client";

import React, { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Eye, EyeOff, Loader2, Lock, User } from "lucide-react";

import { useCustomerLogin } from "@/hook/useCustomerLogin";

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const redirectPath = searchParams.get("redirect") || "/flight/refund";

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const loginMutation = useCustomerLogin();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    loginMutation.mutate(
      {
        userName: userName.trim(),
        password,
      },
      {
        onSuccess: () => {
          router.replace(redirectPath);
        },
      },
    );
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-[#006837] px-6 py-5">
          <h1 className="text-xl font-bold text-white">Đăng Nhập Hệ Thống</h1>

          <p className="text-sm text-white/80 mt-1">
            Sử dụng tài khoản được hệ thống cấp
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="p-6 space-y-4">
          {/* Error */}
          {loginMutation.isError && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-xs rounded-md font-medium">
              {loginMutation.error?.message || "Đăng nhập thất bại"}
            </div>
          )}

          {/* Username */}
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
              Tên đăng nhập
            </label>

            <div className="relative">
              <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />

              <input
                type="text"
                required
                autoComplete="username"
                placeholder="Nhập tên đăng nhập"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md text-base text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#006837]"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
              Mật khẩu
            </label>

            <div className="relative">
              <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-3" />

              <input
                type={showPassword ? "text" : "password"}
                required
                autoComplete="current-password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-9 pr-10 py-2 border border-gray-300 rounded-md text-base text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#006837]"
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loginMutation.isPending}
            className="w-full h-11 bg-[#ffb703] hover:bg-yellow-500 text-gray-900 font-bold text-sm rounded-md transition shadow flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loginMutation.isPending ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Đang xác thực...</span>
              </>
            ) : (
              "Đăng nhập ngay"
            )}
          </button>
        </form>
      </div>
    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Đang tải trang đăng nhập...
        </div>
      }
    >
      <LoginContent />
    </Suspense>
  );
}
