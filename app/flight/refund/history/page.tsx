"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  History,
  Loader2,
  Search,
  XCircle,
} from "lucide-react";

// Kiểu dữ liệu lịch sử hoàn tiền
interface RefundRecord {
  id: string;
  bankName: string;
  accountNumber: string;
  accountHolder: string;
  amount: number;
  status: "pending" | "completed" | "rejected";
  createdAt: string;
  note?: string;
}

// Mock data lịch sử
const MOCK_REFUND_HISTORY: RefundRecord[] = [
  {
    id: "RF839201",
    bankName: "MB Bank",
    accountNumber: "0123456789",
    accountHolder: "NGUYEN VAN A",
    amount: 1500000,
    status: "completed",
    createdAt: "05/08/2026 14:30",
  },
  {
    id: "RF839188",
    bankName: "Vietcombank",
    accountNumber: "9988776655",
    accountHolder: "NGUYEN VAN A",
    amount: 2350000,
    status: "pending",
    createdAt: "04/08/2026 09:15",
  },
  {
    id: "RF837512",
    bankName: "Techcombank",
    accountNumber: "19031234567",
    accountHolder: "NGUYEN VAN A",
    amount: 850000,
    status: "rejected",
    createdAt: "01/08/2026 16:45",
    note: "Sai tên chủ tài khoản",
  },
];

export default function RefundHistoryPage() {
  const router = useRouter();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [user, setUser] = useState<{ username: string } | null>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [historyList] = useState<RefundRecord[]>(MOCK_REFUND_HISTORY);

  // Kiểm tra Auth khi truy cập
  useEffect(() => {
    const checkAuth = () => {
      const authData = localStorage.getItem("auth_user");
      if (!authData) {
        router.push("/flight/refund/login?redirect=/flight/refund/history");
      } else {
        setUser(JSON.parse(authData));
        setIsCheckingAuth(false);
      }
    };

    checkAuth();
  }, [router]);

  const formatMoney = (value: number) => {
    return new Intl.NumberFormat("vi-VN").format(value) + " đ";
  };

  // Filter dữ liệu
  const filteredList = historyList.filter((item) => {
    const matchSearch =
      item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.accountNumber.includes(searchTerm) ||
      item.bankName.toLowerCase().includes(searchTerm.toLowerCase());

    const matchStatus =
      statusFilter === "all" || item.status === statusFilter;

    return matchSearch && matchStatus;
  });

  if (isCheckingAuth) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-2">
        <Loader2 className="w-8 h-8 animate-spin text-[#006837]" />
        <p className="text-sm text-gray-600 font-medium">
          Đang kiểm tra xác thực...
        </p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-3 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-4">
        {/* Top Header */}
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 flex flex-wrap justify-between items-center gap-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.back()}
              className="p-1.5 hover:bg-gray-100 rounded-md transition text-gray-600"
              title="Quay lại"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-base sm:text-lg font-bold text-gray-800 uppercase flex items-center gap-2">
                <History className="w-5 h-5 text-[#006837]" />
                Lịch Sử Hoàn Tiền / Rút Tiền
              </h1>
              <p className="text-xs text-gray-500">
                Tài khoản: <b className="text-gray-700">{user?.username}</b>
              </p>
            </div>
          </div>

          <button
            onClick={() => router.push("/flight/refund")}
            className="px-4 py-2 bg-[#006837] text-white text-xs sm:text-sm font-bold rounded-md hover:bg-[#004d28] transition shadow-xs"
          >
            + Tạo yêu cầu mới
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 flex flex-col sm:flex-row justify-between gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Tìm theo Mã GD, Ngân hàng, STK..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 border rounded-md text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#006837]"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-gray-600 whitespace-nowrap">
              Trạng thái:
            </span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-1.5 border rounded-md text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#006837] bg-white"
            >
              <option value="all">Tất cả</option>
              <option value="pending font-semibold">Đang xử lý</option>
              <option value="completed">Thành công</option>
              <option value="rejected">Từ chối</option>
            </select>
          </div>
        </div>

        {/* Table Lịch Sử */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-gray-100/80 border-b border-gray-200 text-gray-700 font-bold uppercase">
                  <th className="py-3 px-4">Mã Yêu Cầu</th>
                  <th className="py-3 px-4">Thông Tin Nhận Tiền</th>
                  <th className="py-3 px-4 text-right">Số Tiền</th>
                  <th className="py-3 px-4 text-center">Trạng Thái</th>
                  <th className="py-3 px-4 text-center">Thời Gian</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredList.length > 0 ? (
                  filteredList.map((item) => (
                    <tr
                      key={item.id}
                      className="hover:bg-gray-50/80 transition text-gray-800"
                    >
                      {/* Mã GD */}
                      <td className="py-3.5 px-4 font-bold text-[#006837]">
                        {item.id}
                      </td>

                      {/* Thông tin ngân hàng */}
                      <td className="py-3.5 px-4 space-y-0.5">
                        <div className="font-semibold text-gray-900">
                          {item.bankName} - <span className="text-blue-600">{item.accountNumber}</span>
                        </div>
                        <div className="text-[11px] text-gray-500 uppercase">
                          {item.accountHolder}
                        </div>
                      </td>

                      {/* Số tiền */}
                      <td className="py-3.5 px-4 text-right font-bold text-red-600">
                        {formatMoney(item.amount)}
                      </td>

                      {/* Trạng thái */}
                      <td className="py-3.5 px-4 text-center">
                        <StatusBadge status={item.status} note={item.note} />
                      </td>

                      {/* Thời gian */}
                      <td className="py-3.5 px-4 text-center text-xs text-gray-500 whitespace-nowrap">
                        {item.createdAt}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={5}
                      className="py-12 text-center text-gray-400 text-xs sm:text-sm"
                    >
                      Không tìm thấy dữ liệu yêu cầu hoàn tiền nào.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}

/* Badge hiển thị trạng thái */
function StatusBadge({
  status,
  note,
}: {
  status: RefundRecord["status"];
  note?: string;
}) {
  switch (status) {
    case "completed":
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-green-100 text-green-700">
          <CheckCircle2 size={13} />
          Thành công
        </span>
      );
    case "pending":
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-100 text-amber-700">
          <Clock size={13} />
          Đang xử lý
        </span>
      );
    case "rejected":
      return (
        <span
          title={note || "Yêu cầu bị từ chối"}
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-red-100 text-red-700 cursor-help"
        >
          <XCircle size={13} />
          Từ chối
        </span>
      );
  }
}