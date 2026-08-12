"use client";

import { useAirlineDiscounts } from "@/hook/useAirlineDiscounts";
import { useAuthStore } from "@/store/auth-store";
import React, { useEffect, useState } from "react";

// ======================================================
// DATA DÙNG TRONG FRONTEND
// ======================================================

interface AirlineSaleConfig {
  id: string;
  name: string;
  code: string;
  discountPercent: number;
  isCustom: boolean;
}

// ======================================================
// DATA API TRẢ VỀ
// ======================================================

interface AirlineDiscountApiItem {
  id: number;
  airline_code: string;
  airline_name: string;
  discount_rate: number;
  is_custom_enabled: boolean;
  created_at: string;
  updated_at: string;
}

interface AirlineDiscountResponse {
  success: boolean;
  data: {
    default_discount_rate: number;
    airlines: AirlineDiscountApiItem[];
  };
  message?: string;
}

interface AirlineSaleConfig {
  id: string;
  name: string;
  code: string;
  discountPercent: number;
  isCustom: boolean;
}

interface AirlineDiscountResult {
  defaultDiscount: number;
  airlines: AirlineSaleConfig[];
}

// ======================================================
// COMPONENT
// ======================================================

export default function AdminAirlineSalePage() {
  const [defaultDiscount, setDefaultDiscount] = useState(10);
  const [airlines, setAirlines] = useState<AirlineSaleConfig[]>([]);
  const [isSaving, setIsSaving] = useState(false);

  const accessToken = useAuthStore((state) => state.accessToken);

  const { data: result, isLoading, error, refetch } = useAirlineDiscounts();

  // ==========================================
  // ĐỒNG BỘ DATA API VÀO FORM STATE
  // ==========================================

  useEffect(() => {
    if (!result) return;

    console.log("🚀 ~ AdminAirlineSalePage ~ result:", result);

    // Default
    setDefaultDiscount(Number(result.defaultDiscount ?? 0));

    // Danh sách hãng bay
    setAirlines(Array.isArray(result.airlines) ? result.airlines : []);
  }, [result]);

  // ======================================================
  // THAY ĐỔI % GIẢM GIÁ
  // ======================================================

  const handleDiscountChange = (id: string, value: number) => {
    setAirlines((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              discountPercent: value,
            }
          : item,
      ),
    );
  };

  // ======================================================
  // BẬT / TẮT BẬT RIÊNG
  // ======================================================

  const handleToggleCustom = (id: string, checked: boolean) => {
    setAirlines((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              isCustom: checked,
            }
          : item,
      ),
    );
  };

  // ======================================================
  // ÁP DỤNG DEFAULT CHO TẤT CẢ
  // ======================================================

  const handleApplyDefaultToAll = () => {
    if (
      confirm(
        `Bạn có chắc chắn muốn đặt % điều chỉnh của tất cả hãng về ${defaultDiscount}%?`,
      )
    ) {
      setAirlines((prev) =>
        prev.map((item) => ({
          ...item,
          discountPercent: defaultDiscount,
        })),
      );
    }
  };

  // ======================================================
  // BẬT / TẮT TẤT CẢ
  // ======================================================

  const handleToggleAllCustom = (checked: boolean) => {
    setAirlines((prev) =>
      prev.map((item) => ({
        ...item,
        isCustom: checked,
      })),
    );
  };

  // ======================================================
  // LƯU CẤU HÌNH
  // ======================================================

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsSaving(true);

      const response = await fetch("/api/admin/sale", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
          Accept: "application/json",
        },
        body: JSON.stringify({
          default_discount_rate: defaultDiscount,

          airlines: airlines.map((airline) => ({
            id: Number(airline.id),
            airline_code: airline.code,
            airline_name: airline.name,
            discount_rate: airline.discountPercent,
            is_custom_enabled: airline.isCustom,
          })),
        }),
      });

      const result = await response.json();

      console.log("SAVE RESULT:", result);

      if (!response.ok || !result.success) {
        throw new Error(result?.message || "Không thể lưu cấu hình");
      }

      alert("Đã lưu cấu hình phần trăm giảm giá theo hãng bay thành công!");
    } catch (error) {
      console.error("Save airline discounts error:", error);

      alert(error instanceof Error ? error.message : "Có lỗi xảy ra khi lưu");
    } finally {
      setIsSaving(false);
    }
  };

  // ======================================================
  // LOADING
  // ======================================================

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="flex items-center gap-3 text-sm text-slate-500">
          <span className="w-5 h-5 border-2 border-sky-600 border-t-transparent rounded-full animate-spin" />
          Đang tải cấu hình giảm giá...
        </div>
      </div>
    );
  }

  // ======================================================
  // ERROR
  // ======================================================

  if (error) {
    return (
      <div className="p-6">
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-600">
          {error instanceof Error ? error.message : String(error)}
        </div>
      </div>
    );
  }

  // ======================================================
  // UI
  // ======================================================

  return (
    <div className="p-4 sm:p-6">
      {/* PAGE HEADER */}

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-xl font-bold text-slate-800">
            Cấu Hình Giảm Giá Theo Hãng Bay
          </h1>

          <p className="text-xs text-slate-500 mt-1">
            Thiết lập phần trăm điều chỉnh giá/chiết khấu riêng cho từng hãng
            hàng không.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            window.location.reload();
          }}
          className="self-start sm:self-center px-3.5 py-2 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition"
        >
          ↻ Tải lại
        </button>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* ==================================================
            CẤU HÌNH MẶC ĐỊNH
        ================================================== */}

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
                  className="w-full pl-3 pr-8 py-2 bg-slate-50 border border-slate-300 rounded-xl text-base font-bold text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
                />

                <span className="absolute right-3 top-2.5 text-xs font-bold text-slate-400">
                  %
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleApplyDefaultToAll}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition"
            >
              Áp dụng {defaultDiscount}% cho toàn bộ hãng
            </button>
          </div>
        </div>

        {/* ==================================================
            BẢNG HÃNG BAY
        ================================================== */}

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
                {airlines.map((airline) => (
                  <tr
                    key={airline.id}
                    className={`transition-colors hover:bg-slate-50/80 ${
                      airline.isCustom ? "bg-sky-50/20" : ""
                    }`}
                  >
                    {/* HÃNG BAY */}

                    <td className="py-3.5 px-6">
                      <div className="font-bold text-slate-800 text-sm">
                        {airline.name}
                      </div>

                      <div className="text-[11px] font-mono font-semibold text-slate-400 tracking-wide uppercase">
                        {airline.code}
                      </div>
                    </td>

                    {/* % */}

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
                              Number(e.target.value),
                            )
                          }
                          className={`w-full text-center px-3 py-1.5 rounded-lg border text-base font-semibold transition-all ${
                            airline.isCustom
                              ? "bg-white border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent shadow-sm"
                              : "bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed"
                          }`}
                        />
                      </div>
                    </td>

                    {/* BẬT RIÊNG */}

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
                ))}

                {airlines.length === 0 && (
                  <tr>
                    <td
                      colSpan={3}
                      className="text-center py-8 text-slate-400 text-sm"
                    >
                      Chưa có cấu hình hãng bay.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* CHÚ THÍCH */}

          <div className="p-4 bg-slate-50/50 border-t border-slate-200">
            <p className="text-xs text-slate-500 italic flex items-center gap-1.5">
              <span>💡</span>
              Nếu không bật riêng, hãng đó sẽ tự động sử dụng giá trị{" "}
              <strong className="text-slate-700">
                Mặc định ({defaultDiscount}%)
              </strong>{" "}
              ở trên.
            </p>
          </div>
        </div>

        {/* ==================================================
            SAVE
        ================================================== */}

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSaving}
            className="px-6 py-3 bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg transition flex items-center gap-2 disabled:opacity-50"
          >
            {isSaving ? (
              <>
                <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Đang lưu...
              </>
            ) : (
              <>💾 Lưu cấu hình giảm giá</>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
