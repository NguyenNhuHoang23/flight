"use client";

import React, { useState } from "react";

// Interface hãng bay
export interface AirlineSaleConfig {
  id: string;
  name: string;
  code: string;
  discountPercent: number;
  isCustom: boolean; // Bật riêng
}

// Dữ liệu ban đầu mô phỏng chính xác từ hình ảnh của bạn
const INITIAL_AIRLINES: AirlineSaleConfig[] = [
  { id: "bamboo", name: "Bamboo Airways", code: "BAMBOO", discountPercent: 30, isCustom: true },
  { id: "galileo", name: "Galileo (GDS)", code: "GALILEO", discountPercent: 0, isCustom: false },
  { id: "jetstar", name: "Jetstar Pacific", code: "JETSTAR", discountPercent: 0, isCustom: false },
  { id: "sabre", name: "Sabre (GDS)", code: "SABRE", discountPercent: 0, isCustom: false },
  { id: "spa", name: "SPA Airlines", code: "SPA", discountPercent: 0, isCustom: false },
  { id: "vietjet", name: "VietJet Air", code: "VIETJET", discountPercent: 30, isCustom: true },
  { id: "vna", name: "Vietnam Airlines", code: "VNA", discountPercent: 30, isCustom: true },
  { id: "vietravel", name: "Vietravel Airlines", code: "VIETRAVEL", discountPercent: 20, isCustom: true },
];

export default function AdminAirlineSalePage() {
  const [defaultDiscount, setDefaultDiscount] = useState<number>(10);
  const [airlines, setAirlines] = useState<AirlineSaleConfig[]>(INITIAL_AIRLINES);
  const [isSaving, setIsSaving] = useState(false);

  // Xử lý thay đổi % điều chỉnh của hãng bay
  const handleDiscountChange = (id: string, value: number) => {
    setAirlines((prev) =>
      prev.map((item) => (item.id === id ? { ...item, discountPercent: value } : item))
    );
  };

  // Xử lý bật / tắt Bật riêng
  const handleToggleCustom = (id: string, checked: boolean) => {
    setAirlines((prev) =>
      prev.map((item) => (item.id === id ? { ...item, isCustom: checked } : item))
    );
  };

  // Áp dụng nhanh % mặc định cho tất cả các hãng
  const handleApplyDefaultToAll = () => {
    if (confirm(`Bạn có chắc chắn muốn đặt % điều chỉnh của tất cả hãng về ${defaultDiscount}%?`)) {
      setAirlines((prev) =>
        prev.map((item) => ({ ...item, discountPercent: defaultDiscount }))
      );
    }
  };

  // Bật / Tắt tất cả "Bật riêng"
  const handleToggleAllCustom = (checked: boolean) => {
    setAirlines((prev) => prev.map((item) => ({ ...item, isCustom: checked })));
  };

  // Lưu cấu hình
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    setTimeout(() => {
      setIsSaving(false);
      alert("Đã lưu cấu hình phần trăm giảm giá theo hãng bay thành công!");
    }, 600);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans text-slate-800">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* PAGE HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
              Cấu Hình Giảm Giá Theo Hãng Bay
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Thiết lập phần trăm điều chỉnh giá/chết khấu riêng cho từng hãng hàng không.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setAirlines(INITIAL_AIRLINES)}
            className="self-start sm:self-center px-3.5 py-2 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition"
          >
            ↺ Khôi phục ban đầu
          </button>
        </div>

        <form onSubmit={handleSave} className="space-y-6">
          {/* CẤU HÌNH MẶC ĐỊNH CHUNG */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <span className="text-lg">⚙️</span>
              <h2 className="font-bold text-slate-800 text-sm uppercase tracking-wider">
                Cấu hình Mặc định
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-end gap-4">
              <div className="w-full sm:w-64">
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  % Giảm giá Mặc định chung
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={defaultDiscount}
                    onChange={(e) => setDefaultDiscount(Number(e.target.value))}
                    className="w-full pl-3 pr-8 py-2 bg-slate-50 border border-slate-300 rounded-xl text-sm font-bold text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
                  />
                  <span className="absolute right-3 top-2.5 text-xs font-bold text-slate-400">
                    %
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleApplyDefaultToAll}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition"
              >
                Áp dụng {defaultDiscount}% cho toàn bộ hãng
              </button>
            </div>
          </div>

          {/* BẢNG CẤU HÌNH THEO HÃNG BAY */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 bg-slate-50/60 border-b border-slate-200 flex items-center justify-between">
              <span className="font-bold text-xs uppercase text-slate-500 tracking-wider">
                Danh sách Hãng bay
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleToggleAllCustom(true)}
                  className="text-[11px] font-semibold text-sky-600 hover:underline"
                >
                  Bật tất cả
                </button>
                <span className="text-slate-300">|</span>
                <button
                  type="button"
                  onClick={() => handleToggleAllCustom(false)}
                  className="text-[11px] font-semibold text-slate-500 hover:underline"
                >
                  Tắt tất cả
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-slate-600 text-[11px] uppercase tracking-wider font-bold">
                    <th className="py-3 px-6">HÃNG BAY</th>
                    <th className="py-3 px-6 w-48 text-center">% ĐIỀU CHỈNH</th>
                    <th className="py-3 px-6 w-36 text-center">BẬT RIÊNG</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {airlines.map((airline) => {
                    return (
                      <tr
                        key={airline.id}
                        className={`transition-colors hover:bg-slate-50/80 ${
                          airline.isCustom ? "bg-sky-50/20" : ""
                        }`}
                      >
                        {/* Cột 1: Tên & Mã hãng bay */}
                        <td className="py-3.5 px-6">
                          <div className="font-bold text-slate-800 text-sm">
                            {airline.name}
                          </div>
                          <div className="text-[11px] font-mono font-semibold text-slate-400 tracking-wide uppercase">
                            {airline.code}
                          </div>
                        </td>

                        {/* Cột 2: % Điều chỉnh */}
                        <td className="py-3.5 px-6 text-center">
                          <div className="inline-block w-28 relative">
                            <input
                              type="number"
                              min="0"
                              max="100"
                              value={
                                airline.isCustom
                                  ? airline.discountPercent
                                  : defaultDiscount
                              }
                              disabled={!airline.isCustom}
                              onChange={(e) =>
                                handleDiscountChange(
                                  airline.id,
                                  Number(e.target.value)
                                )
                              }
                              className={`w-full text-center px-3 py-1.5 rounded-lg border text-sm font-semibold transition-all ${
                                airline.isCustom
                                  ? "bg-white border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent shadow-sm"
                                  : "bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed"
                              }`}
                            />
                          </div>
                        </td>

                        {/* Cột 3: Checkbox Bật riêng */}
                        <td className="py-3.5 px-6 text-center">
                          <label className="inline-flex items-center cursor-pointer p-1">
                            <input
                              type="checkbox"
                              checked={airline.isCustom}
                              onChange={(e) =>
                                handleToggleCustom(airline.id, e.target.checked)
                              }
                              className="w-4 h-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500 cursor-pointer transition"
                            />
                          </label>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* CHÚ THÍCH DƯỚI BẢNG */}
            <div className="p-4 bg-slate-50/50 border-t border-slate-200">
              <p className="text-xs text-slate-500 italic flex items-center gap-1.5">
                <span>💡</span> Nếu không bật riêng, hãng đó sẽ tự động sử dụng giá trị{" "}
                <strong className="text-slate-700">Mặc định ({defaultDiscount}%)</strong> ở trên.
              </p>
            </div>
          </div>

          {/* ACTION BUTTON */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSaving}
              className="px-6 py-3 bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg transition flex items-center gap-2 disabled:opacity-50"
            >
              {isSaving ? (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Đang lưu...
                </>
              ) : (
                <>💾 Lưu cấu hình giảm giá</>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}