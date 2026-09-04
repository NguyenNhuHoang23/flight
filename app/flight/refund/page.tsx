"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, Info, Loader2, Send } from "lucide-react";

import { useCustomerAuthStore } from "@/store/customer-auth-store";
import { useRefundAvailability } from "@/hook/useRefundAvailability";
import {
  fetchCurrentCustomerAccount,
  getCustomerUsername,
} from "@/lib/customer-account";
import { formatVndAmount, parseVndAmount } from "@/lib/refund-balance";

export default function RefundPage() {
  const router = useRouter();

  const [accountNumber, setAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountHolder, setAccountHolder] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const user = useCustomerAuthStore((state) => state.user);
  const updateUser = useCustomerAuthStore((state) => state.updateUser);
  const accessToken = useCustomerAuthStore((state) => state.accessToken);
  const [isRefreshingAccount, setIsRefreshingAccount] = useState(true);

  const walletBalance = parseVndAmount(user?.balance);
  const accountName = getCustomerUsername(user);
  const {
    available: availableBalance,
    pendingTotal,
    isLoading: isLoadingAvailability,
    refetch: refetchAvailability,
  } = useRefundAvailability(accessToken, walletBalance);
  const maxBalance = availableBalance;

  const hydrated = useCustomerAuthStore((state) => state.hydrated);
  const logout = useCustomerAuthStore((state) => state.logout);
  
  const [loggingOut, setLoggingOut] = useState(false);

  const refreshAccount = useCallback(async () => {
    if (!accessToken) return null;

    const account = await fetchCurrentCustomerAccount(accessToken);

    if (account) {
      updateUser(account);
    }

    return account;
  }, [accessToken, updateUser]);
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

  useEffect(() => {
    if (!hydrated || !accessToken || !user?.id || user.role !== "customer") {
      return;
    }

    let cancelled = false;
    setIsRefreshingAccount(true);

    refreshAccount()
      .catch((error) => {
        console.error("Không thể cập nhật số dư tài khoản:", error);
      })
      .finally(() => {
        if (!cancelled) setIsRefreshingAccount(false);
      });

    return () => {
      cancelled = true;
    };
  }, [hydrated, accessToken, user?.id, user?.role, refreshAccount]);

  const handleSubmitRefund = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!accessToken) {
      router.replace("/flight/refund/login?redirect=/flight/refund");
      return;
    }

    const amountNum = Number(amount);

    if (!amountNum || amountNum <= 0) {
      setErrorMsg("Vui lòng nhập số tiền hợp lệ.");
      return;
    }

    if (amountNum > maxBalance) {
      setErrorMsg(
        maxBalance <= 0
          ? "Số dư khả dụng không đủ để tạo lệnh hoàn tiền."
          : `Quý khách cần xử lý hoàn tiền lên số dư ví.`,
      );
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
          amount: amountNum,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Gửi yêu cầu hoàn tiền thất bại");
      }

      await Promise.all([refetchAvailability(), refreshAccount()]);
      setIsSuccess(true);
    } catch (error) {
      setErrorMsg(error instanceof Error ? error.message : "Có lỗi xảy ra");
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

          <p className="text-sm text-red-300 cursor-pointer mt-1" onClick={() => {handleLogout()}}>
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
                onClick={() => router.push("/")}
                className="px-6 py-2 bg-[#006837] text-white rounded-md text-sm font-semibold"
              >
                Về trang chủ
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmitRefund} className="space-y-4">

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
                    // Xóa lỗi khi người dùng sửa
                    if (errorMsg) setErrorMsg(null);
                  }}
                  placeholder="Ví dụ: 1000000"
                  disabled={isLoadingAvailability || isRefreshingAccount}
                  className={`
    w-full px-3 py-2
    border rounded-md
    text-base text-gray-900
    bg-white
    focus:outline-none
    ${
      amount && Number(amount) > maxBalance && maxBalance > 0
        ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200"
        : "border-gray-300 focus:border-[#006837] focus:ring-2 focus:ring-[#006837]"
    }
                  `}
                />
              </div>

              {/* Error message */}
              {errorMsg && (
                <div className="rounded-md bg-red-50 border border-red-200 px-3 py-2.5 text-sm text-red-600">
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={
                  isSubmitting ||
                  isLoadingAvailability ||
                  isRefreshingAccount ||
                  maxBalance <= 0
                }
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
