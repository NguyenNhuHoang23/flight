"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, Info, Loader2, Send } from "lucide-react";

import { useCustomerAuthStore } from "@/store/customer-auth-store";
import { useAuthStoreClient } from "@/store/auth-client-store";

export default function RefundPage() {
  const router = useRouter();

  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  const [accountNumber, setAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountHolder, setAccountHolder] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const user = useCustomerAuthStore((state) => state.user);

  const accessToken = useCustomerAuthStore((state) => state.accessToken);

  const hydrated = useCustomerAuthStore((state) => state.hydrated);
  const logout = useCustomerAuthStore((state) => state.logout);
  
  const [loggingOut, setLoggingOut] = useState(false);
  const handleLogout = async () => {
    if (loggingOut) return;

    try {
      setLoggingOut(true);

      const response = await fetch("/api/admin/logout", {
        method: "POST",
        headers: {
          Accept: "application/json",

          ...(accessToken
            ? {
                Authorization: `Bearer ${accessToken}`,
              }
            : {}),
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Không thể đăng xuất");
      }

      // Xóa Zustand + localStorage admin-auth
      logout();

      // Chuyển về trang login
      router.replace("/");
    } catch (error) {
      console.error("LOGOUT ERROR:", error);

      alert(error instanceof Error ? error.message : "Không thể đăng xuất");
    } finally {
      setLoggingOut(false);
    }
  };

  console.log("hydrated:", hydrated);
  console.log("user:", user);
  console.log("token:", accessToken);

  useEffect(() => {
    // Zustand chưa hydrate => chưa được phép kiểm tra auth
    if (!hydrated) {
      return;
    }

    // Hydrate xong nhưng không có tài khoản
    if (!user || !accessToken) {
      router.replace("/flight/refund/login?redirect=/flight/refund");
      return;
    }

    // Có tài khoản nhưng không phải customer
    if (user.role !== "customer") {
      router.replace("/flight/refund/login?redirect=/flight/refund");
      return;
    }
  }, [hydrated, user, accessToken, router]);

  const handleSubmitRefund = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!accessToken) {
      router.replace("/flight/refund/login?redirect=/flight/refund");
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch("/api/refund", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          bank_name: bankName,
          account_number: accountNumber,
          account_holder: accountHolder,
          amount: Number(amount),
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Gửi yêu cầu hoàn tiền thất bại");
      }

      setIsSuccess(true);
    } catch (error) {
      alert(error instanceof Error ? error.message : "Có lỗi xảy ra");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatCurrency = (val: string) => {
    if (!val) return "";

    return new Intl.NumberFormat("vi-VN").format(Number(val));
  };

  if (!hydrated) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex items-center gap-2 text-gray-600">
          <Loader2 className="w-5 h-5 animate-spin" />
          Đang kiểm tra đăng nhập...
        </div>
      </main>
    );
  }

  if (!user || !accessToken || user.role !== "customer") {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex items-center gap-2 text-gray-600">
          <Loader2 className="w-5 h-5 animate-spin" />
          Đang chuyển đến trang đăng nhập...
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 p-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="bg-[#006837] p-5 text-white">
          <h1 className="text-xl font-bold">Yêu Cầu Hoàn Tiền Vé</h1>

          <p className="text-sm text-white/80 mt-1">
            Tài khoản: <b>{user?.userName}</b>
          </p>

          <p className="text-sm text-red-500 cursor-pointer mt-1" onClick={() => {handleLogout()}}>
            {loggingOut ? "Đang đăng xuất..." : "Đăng xuất"}
          </p>
        </div>

        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-8 space-y-4">
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />

              <h2 className="text-xl font-bold text-gray-800">
                Gửi Yêu Cầu Thành Công!
              </h2>

              <p className="text-sm text-gray-600">
                Hệ thống đã ghi nhận thông tin hoàn tiền của bạn.
              </p>

              <button
                onClick={() => {
                  setIsSuccess(false);
                  setAccountNumber("");
                  setBankName("");
                  setAccountHolder("");
                  setAmount("");
                }}
                className="px-6 py-2 bg-[#006837] text-white rounded-md text-sm font-semibold"
              >
                Gửi yêu cầu khác
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmitRefund} className="space-y-4">
              <div className="bg-amber-50 border border-amber-200 rounded-md p-3 flex gap-2 text-xs text-amber-800">
                <Info className="w-4 h-4 text-amber-600 shrink-0" />

                <span>
                  Vui lòng điền chính xác thông tin ngân hàng nhận tiền và số
                  tiền muốn rút.
                </span>
              </div>

              {/* Bank */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Ngân hàng
                </label>

                <input
                  type="text"
                  required
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                  className="
    w-full px-3 py-2
    border border-gray-300
    rounded-md
    text-base text-gray-900
    bg-white
    focus:outline-none
    focus:border-[#006837]
    focus:ring-2 focus:ring-[#006837]
  "
                  placeholder="MB Bank, Vietcombank..."
                />
              </div>

              {/* Account number */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Số tài khoản
                </label>

                <input
                  type="text"
                  required
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  className="
    w-full px-3 py-2
    border border-gray-300
    rounded-md
    text-base text-gray-900
    bg-white
    focus:outline-none
    focus:border-[#006837]
    focus:ring-2 focus:ring-[#006837]
  "
                  placeholder="VD: 123456789"
                />
              </div>

              {/* Holder */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Chủ tài khoản
                </label>

                <input
                  type="text"
                  required
                  value={accountHolder}
                  onChange={(e) =>
                    setAccountHolder(e.target.value.toUpperCase())
                  }
                  className="
    w-full px-3 py-2
    border border-gray-300
    rounded-md
    text-base text-gray-900
    bg-white
    focus:outline-none
    focus:border-[#006837]
    focus:ring-2 focus:ring-[#006837]
  "
                  placeholder="VD: NGUYEN VAN A"
                />
              </div>

              {/* Amount */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Số tiền rút
                </label>

                <input
                  type="text"
                  required
                  value={amount}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");

                    setAmount(value);
                  }}
                  placeholder="Ví dụ: 1000000"
                  className="
    w-full px-3 py-2
    border border-gray-300
    rounded-md
    text-base text-gray-900
    bg-white
    focus:outline-none
    focus:border-[#006837]
    focus:ring-2 focus:ring-[#006837]
  "
                />

                {amount && (
                  <p className="mt-1 text-xs text-gray-500">
                    {amount} VNĐ
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-11 bg-[#006837] text-white font-bold rounded-md flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Đang gửi yêu cầu...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Gửi yêu cầu hoàn tiền
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
