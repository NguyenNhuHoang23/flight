"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  CheckCircle2,
  History,
  Info,
  Loader2,
  Send,
  Ticket,
} from "lucide-react";

import { useCustomerAuthStore } from "@/store/customer-auth-store";

export default function TicketReceivePage() {
  const router = useRouter();

  const user = useCustomerAuthStore((state) => state.user);
  const accessToken = useCustomerAuthStore((state) => state.accessToken);
  const hydrated = useCustomerAuthStore((state) => state.hydrated);

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // ─── Auth guard ───────────────────────────────────────────
  useEffect(() => {
    if (!hydrated) return;

    if (!user || !accessToken) {
      router.replace(
        "/flight/refund/login?redirect=/flight/ticket-receive",
      );
      return;
    }

    if (user.role !== "customer") {
      router.replace("/flight/refund/login?redirect=/flight/ticket-receive");
    }
  }, [hydrated, user, accessToken, router]);

  // ─── Prefill email từ tài khoản ───────────────────────────
  useEffect(() => {
    if (user?.email && !email) {
      setEmail(user.email);
    }
  }, [user]);

  // ─── Submit ───────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!accessToken) {
      router.replace("/flight/refund/login?redirect=/flight/ticket-receive");
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch("/api/ticket-receives/client", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          email: email.trim(),
          phone: phone.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Gửi yêu cầu nhận vé thất bại");
      }

      setIsSuccess(true);
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Có lỗi xảy ra");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ─── Loading states ───────────────────────────────────────
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

  // ─── Render ───────────────────────────────────────────────
  return (
    <main className="min-h-screen bg-slate-50 p-4">
      <div className="max-w-lg mx-auto bg-white rounded-xl shadow-sm border overflow-hidden">
        {/* Header */}
        <div className="bg-[#006837] p-5 text-white">
          <h1 className="text-xl font-bold flex items-center gap-2">
            <Ticket className="w-5 h-5" />
            Yêu Cầu Nhận Vé
          </h1>

          <p className="text-sm text-white/80 mt-1">
            Tài khoản: <b>{user.userName}</b>
          </p>
        </div>

        <div className="p-6">
          {isSuccess ? (
            /* ── Thành công ── */
            <div className="text-center py-8 space-y-4">
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />

              <h2 className="text-xl font-bold text-gray-800">
                Gửi Yêu Cầu Thành Công!
              </h2>

              <p className="text-sm text-gray-500">
                Chúng tôi đã ghi nhận yêu cầu nhận vé của bạn. Vé sẽ được gửi
                đến email và số điện thoại bạn đã cung cấp.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <button
                  type="button"
                  onClick={() => router.push("/")}
                  className="px-5 py-2 bg-[#006837] text-white rounded-lg text-sm font-semibold hover:bg-[#004d28] transition"
                >
                  Gửi yêu cầu khác
                </button>
              </div>
            </div>
          ) : (
            /* ── Form ── */
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Hint */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 flex gap-2 text-xs text-amber-800">
                <Info className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>
                  Vui lòng nhập email và số điện thoại để chúng tôi gửi vé
                  điện tử cho bạn.
                </span>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
                  Email nhận vé <span className="text-red-500">*</span>
                </label>

                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@email.com"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-base text-gray-900 bg-white focus:outline-none focus:border-[#006837] focus:ring-2 focus:ring-[#006837]/20"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
                  Số điện thoại <span className="text-red-500">*</span>
                </label>

                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) =>
                    setPhone(e.target.value.replace(/[^\d+\-\s]/g, ""))
                  }
                  placeholder="0901 234 567"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-base text-gray-900 bg-white focus:outline-none focus:border-[#006837] focus:ring-2 focus:ring-[#006837]/20"
                />
              </div>

              {/* Error */}
              {errorMsg && (
                <p className="rounded-lg bg-red-50 border border-red-200 px-3 py-2.5 text-sm text-red-600">
                  {errorMsg}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-11 bg-[#006837] text-white font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-[#004d28] transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Đang gửi yêu cầu...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Gửi yêu cầu nhận vé
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
