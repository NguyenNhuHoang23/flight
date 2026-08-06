"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, DollarSign, Info, Loader2, Send } from "lucide-react";

export default function RefundPage() {
  const router = useRouter();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [user, setUser] = useState<{ username: string } | null>(null);

  // Form State (4 trường yêu cầu)
  const [accountNumber, setAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountHolder, setAccountHolder] = useState("");
  const [amount, setAmount] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Kiểm tra Auth khi truy cập
  useEffect(() => {
    const checkAuth = () => {
      const authData = localStorage.getItem("auth_user");
      if (!authData) {
        // Chưa đăng nhập -> Chuyển sang trang Login
        router.push("/flight/refund/login?redirect=/flight");
      } else {
        setUser(JSON.parse(authData));
        setIsCheckingAuth(false);
      }
    };

    checkAuth();
  }, [router]);

  const handleSubmitRefund = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Fake API xử lý gửi yêu cầu
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const formatCurrency = (val: string) => {
    if (!val) return "";
    const num = Number(val.replace(/\D/g, ""));
    return new Intl.NumberFormat("vi-VN").format(num);
  };

  if (isCheckingAuth) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-2">
        <Loader2 className="w-8 h-8 animate-spin text-[#006837]" />
        <p className="text-sm text-gray-600 font-medium">Đang kiểm tra xác thực...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {/* Header Title */}
        <div className="bg-[#006837] px-6 py-4 text-white flex justify-between items-center">
          <div>
            <h1 className="text-lg font-bold uppercase">Yêu Cầu Hoàn Tiền Vé</h1>
            <p className="text-xs text-emerald-100 mt-0.5">
              Tài khoản cấp bởi hệ thống: <span className="font-bold underline">{user?.username}</span>
            </p>
          </div>
          <DollarSign className="w-8 h-8 text-yellow-400" />
        </div>

        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-8 space-y-4">
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
              <h2 className="text-xl font-bold text-gray-800">Gửi Yêu Cầu Thành Công!</h2>
              <button
                onClick={() => {
                  setIsSuccess(false);
                  setAccountNumber("");
                  setBankName("");
                  setAccountHolder("");
                  setAmount("");
                }}
                className="mt-4 px-6 py-2 bg-[#006837] text-white rounded-md text-sm font-semibold hover:bg-[#004d28] transition"
              >
                Gửi yêu cầu khác
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmitRefund} className="space-y-4">
              <div className="bg-amber-50 border border-amber-200 rounded-md p-3 flex gap-2 text-xs text-amber-800">
                <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  Vui lòng điền đầy đủ và chính xác thông tin <b>ngân hàng nhận tiền</b> và <b>số tiền muốn rút/hoàn</b>.
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Trường 1: Ngân hàng */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Ngân hàng <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ví dụ: MB Bank, Vietcombank..."
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#006837]"
                  />
                </div>

                {/* Trường 2: Số tài khoản */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Số tài khoản <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nhập số tài khoản ngân hàng"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#006837]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Trường 3: Chủ tài khoản */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Chủ tài khoản <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="NGUYEN VAN A"
                    value={accountHolder}
                    onChange={(e) => setAccountHolder(e.target.value.toUpperCase())}
                    className="w-full px-3 py-2 border rounded-md text-sm uppercase focus:outline-none focus:ring-2 focus:ring-[#006837]"
                  />
                </div>

                {/* Trường 4: Số tiền rút */}
<div>
  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
    Số tiền rút (VNĐ) <span className="text-red-500">*</span>
  </label>
  <input
    type="text"
    required
    placeholder="Ví dụ: 1000000"
    value={amount || ""}
    onChange={(e) => {
      const rawVal = e.target.value.replace(/\D/g, "");
      setAmount(rawVal);
    }}
    className="w-full px-3 py-2 border rounded-md text-sm font-semibold text-[#006837] focus:outline-none focus:ring-2 focus:ring-[#006837]"
  />
</div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-11 mt-2 bg-[#006837] text-white font-bold rounded-md flex items-center justify-center gap-2 hover:bg-[#004d28] transition shadow"
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