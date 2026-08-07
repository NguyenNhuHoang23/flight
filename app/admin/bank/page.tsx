"use client";

import React, { useState, useEffect } from "react";

export interface BankAccount {
  id: string;
  bankName: string; // Tên ngân hàng (VD: MBBank, Vietcombank)
  accountHolder: string; // Tên chủ tài khoản
  accountNumber: string; // Số tài khoản
  isActive: boolean; // Trạng thái được chọn nhận tiền (Chỉ 1 cái true)
}

const INITIAL_ACCOUNTS: BankAccount[] = [
  {
    id: "bank_1",
    bankName: "MBBank",
    accountHolder: "NGUYEN VAN A",
    accountNumber: "999988889999",
    isActive: true, // Tài khoản mặc định đang chọn
  },
  {
    id: "bank_2",
    bankName: "Vietcombank",
    accountHolder: "NGUYEN VAN A",
    accountNumber: "1012345678",
    isActive: false,
  },
  {
    id: "bank_3",
    bankName: "Techcombank",
    accountHolder: "CONG TY TNHH ABC",
    accountNumber: "190333444555",
    isActive: false,
  },
];

export default function BankAccountListPage() {
  const [accounts, setAccounts] = useState<BankAccount[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("system_bank_accounts");
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error(e);
        }
      }
    }
    return INITIAL_ACCOUNTS;
  });

  // State form thêm tài khoản mới
  const [newBank, setNewBank] = useState({
    bankName: "",
    accountHolder: "",
    accountNumber: "",
    branch: "",
  });

  const [showAddModal, setShowAddModal] = useState(false);

  // Lưu vào localStorage khi dữ liệu thay đổi
  useEffect(() => {
    localStorage.setItem("system_bank_accounts", JSON.stringify(accounts));
  }, [accounts]);

  // HÀM CHỌN 1 TÀI KHOẢN DUY NHẤT LÀM ACTIVE
  const handleSetActiveAccount = (id: string) => {
    setAccounts((prev) =>
      prev.map((acc) => ({
        ...acc,
        isActive: acc.id === id, // Chỉ cái trùng ID mới true, còn lại false
      })),
    );
  };

  // Thêm tài khoản mới
  const handleAddAccount = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBank.bankName || !newBank.accountHolder || !newBank.accountNumber) {
      alert("Vui lòng điền đầy đủ các thông tin bắt buộc!");
      return;
    }

    const newAcc: BankAccount = {
      id: "bank_" + Date.now(),
      bankName: newBank.bankName,
      accountHolder: newBank.accountHolder.toUpperCase(),
      accountNumber: newBank.accountNumber,
      isActive: accounts.length === 0, // Nếu chưa có TK nào thì tự active
    };

    setAccounts((prev) => [...prev, newAcc]);
    setNewBank({
      bankName: "",
      accountHolder: "",
      accountNumber: "",
      branch: "",
    });
    setShowAddModal(false);
  };

  // Xóa tài khoản
  const handleDeleteAccount = (id: string) => {
    const accToDelete = accounts.find((a) => a.id === id);
    if (accToDelete?.isActive) {
      alert(
        "Không thể xóa tài khoản đang ở trạng thái Hoạt động! Vui lòng chọn tài khoản khác làm Active trước.",
      );
      return;
    }

    if (confirm("Bạn có chắc chắn muốn xóa tài khoản này?")) {
      setAccounts((prev) => prev.filter((acc) => acc.id !== id));
    }
  };

  return (
    <div className="min-h-screen p-6 font-sans text-slate-800">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* TIÊU ĐỀ & NÚT THÊM */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-bold text-slate-900">
              Danh Sách Tài Khoản Ngân Hàng Nhận Tiền
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Chỉ được kích hoạt{" "}
              <strong className="text-emerald-600">
                01 tài khoản duy nhất
              </strong>{" "}
              làm cổng nhận tiền chính cho khách hàng.
            </p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg text-sm transition flex items-center justify-center gap-2 shrink-0 shadow-sm"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
            Thêm tài khoản
          </button>
        </div>

        {/* THÔNG BÁO TÀI KHOẢN ĐANG ĐƯỢC CHỌN */}
        {accounts.find((a) => a.isActive) && (
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <div>
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wide">
                  Đang kích hoạt nhận tiền
                </span>
                <div className="text-sm font-bold text-slate-900 mt-0.5">
                  {accounts.find((a) => a.isActive)?.bankName} -{" "}
                  {accounts.find((a) => a.isActive)?.accountNumber} (
                  {accounts.find((a) => a.isActive)?.accountHolder})
                </div>
              </div>
            </div>
          </div>
        )}

        {/* BẢNG DANH SÁCH TÀI KHOẢN */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase">
                  <th className="py-3.5 px-4 text-center w-20">KÍCH HOẠT</th>
                  <th className="py-3.5 px-4">NGÂN HÀNG</th>
                  <th className="py-3.5 px-4">SỐ TÀI KHOẢN</th>
                  <th className="py-3.5 px-4">CHỦ TÀI KHOẢN</th>
                  <th className="py-3.5 px-4 text-center w-32">TRẠNG THÁI</th>
                  <th className="py-3.5 px-4 text-center w-24">THAO TÁC</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                {accounts.map((acc) => (
                  <tr
                    key={acc.id}
                    className={`transition ${
                      acc.isActive
                        ? "bg-emerald-50/40 hover:bg-emerald-50/70"
                        : "hover:bg-slate-50"
                    }`}
                  >
                    {/* Ô NÚT RADIO CHỌN 1 DUY NHẤT */}
                    <td className="py-4 px-4 text-center">
                      <input
                        type="radio"
                        name="active_bank_account"
                        checked={acc.isActive}
                        onChange={() => handleSetActiveAccount(acc.id)}
                        className="w-4 h-4 text-emerald-600 focus:ring-emerald-500 border-slate-300 cursor-pointer"
                        title="Chọn làm tài khoản nhận tiền chính"
                      />
                    </td>

                    {/* TÊN NGÂN HÀNG */}
                    <td className="py-4 px-4 font-semibold text-slate-900">
                      {acc.bankName}
                    </td>

                    {/* SỐ TÀI KHOẢN */}
                    <td className="py-4 px-4 font-mono font-bold text-blue-600">
                      {acc.accountNumber}
                    </td>

                    {/* CHỦ TÀI KHOẢN */}
                    <td className="py-4 px-4 font-bold uppercase text-slate-800">
                      {acc.accountHolder}
                    </td>

                    {/* TRẠNG THÁI */}
                    <td className="py-4 px-4 text-center">
                      {acc.isActive ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                          Đang dùng
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-500 border border-slate-200">
                          Tắt
                        </span>
                      )}
                    </td>

                    {/* THAO TÁC */}
                    <td className="py-4 px-4 text-center">
                      <button
                        onClick={() => handleDeleteAccount(acc.id)}
                        disabled={acc.isActive}
                        className={`text-xs font-semibold py-1 px-2.5 rounded transition ${
                          acc.isActive
                            ? "text-slate-300 cursor-not-allowed"
                            : "text-rose-600 hover:bg-rose-50"
                        }`}
                        title={
                          acc.isActive
                            ? "Không thể xóa TK đang hoạt động"
                            : "Xóa tài khoản"
                        }
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                ))}

                {accounts.length === 0 && (
                  <tr>
                    <td
                      colSpan={7}
                      className="text-center py-8 text-slate-400 text-sm"
                    >
                      Chưa có tài khoản ngân hàng nào. Vui lòng thêm mới!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* MODAL THÊM TÀI KHOẢN MỚI */}
        {showAddModal && (
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-xl border border-slate-200 w-full max-w-md overflow-hidden">
              <div className="bg-slate-50 px-5 py-4 border-b border-slate-200 flex justify-between items-center">
                <h3 className="font-bold text-slate-900">
                  Thêm Tài Khoản Ngân Hàng
                </h3>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="text-slate-400 hover:text-slate-600 font-bold text-lg"
                >
                  ✕
                </button>
              </div>

              <form
                onSubmit={handleAddAccount}
                className="p-5 space-y-4 text-xs"
              >
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Ngân hàng <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="VD: MBBank, VCB, Techcombank..."
                    value={newBank.bankName}
                    onChange={(e) =>
                      setNewBank({ ...newBank, bankName: e.target.value })
                    }
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 outline-none focus:border-blue-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Số tài khoản <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nhập số tài khoản..."
                    value={newBank.accountNumber}
                    onChange={(e) =>
                      setNewBank({ ...newBank, accountNumber: e.target.value })
                    }
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 outline-none focus:border-blue-500 text-sm font-mono"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Chủ tài khoản <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="VD: NGUYEN VAN A"
                    value={newBank.accountHolder}
                    onChange={(e) =>
                      setNewBank({ ...newBank, accountHolder: e.target.value })
                    }
                    className="w-full border border-slate-300 rounded-lg px-3 py-2 outline-none focus:border-blue-500 text-sm uppercase"
                  />
                </div>

                <div className="pt-2 flex gap-2 justify-end">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="px-4 py-2 border border-slate-300 text-slate-600 rounded-lg hover:bg-slate-50 font-medium"
                  >
                    Hủy
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
                  >
                    Lưu tài khoản
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
