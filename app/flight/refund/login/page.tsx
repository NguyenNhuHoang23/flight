"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { KeyRound, Lock, User } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get("redirect") || "/flight/refund";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Giả lập kiểm tra tài khoản web cấp
    setTimeout(() => {
      if (username.trim() && password.trim()) {
        // Lưu thông tin đăng nhập
        localStorage.setItem(
          "auth_user",
          JSON.stringify({ username, token: "granted_token_123" })
        );
        // Chuyển lại về trang ban đầu
        router.push(redirectPath);
      } else {
        setError("Tên đăng nhập hoặc mật khẩu không chính xác!");
        setLoading(false);
      }
    }, 800);
  };

  return (
    <main className="min-h-[80vh] flex items-center justify-center px-4 bg-gray-50 py-12">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
        <div className="bg-[#006837] p-6 text-center text-white">
          <div className="mx-auto w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-2">
            <KeyRound className="w-6 h-6 text-yellow-300" />
          </div>
          <h2 className="text-lg font-bold uppercase">Đăng Nhập Hệ Thống</h2>
          <p className="text-xs text-emerald-100 mt-1">
            Sử dụng tài khoản do đại lý/web cấp để thực hiện thao tác
          </p>
        </div>

        <form onSubmit={handleLogin} className="p-6 space-y-4">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-xs rounded-md">
              {error}
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
              Tài khoản web cấp
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
              <input
                type="text"
                required
                placeholder="Nhập tên tài khoản"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-9 pr-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#006837]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
              Mật khẩu
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-9 pr-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#006837]"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full h-10 bg-[#ffb703] hover:bg-yellow-500 text-gray-900 font-bold text-sm rounded-md transition shadow flex items-center justify-center uppercase"
          >
            {loading ? "Đang xác thực..." : "Đăng nhập ngay"}
          </button>
        </form>
      </div>
    </main>
  );
}