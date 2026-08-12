"use client";

import React, { useEffect, useState } from "react";
import { useAuthStore } from "@/store/auth-store";
import { useGetData } from "@/context/GetContext";

// Định nghĩa Interface cho Settings
export interface SystemConfig {
  fanpage: string;
  hotline: string;
  address: string;
  website: string;
  zalo: string;
  messenger: string;
  phone: string;
  emailContact?: string;
  bankInfo?: string;
}

type AdminInfoApiData = {
  hotline: string;
  phone: string;
  address: string;
  website: string;
  facebook: string;
  zalo: string;
  messenger: string;
  email_contact?: string | null;
  bank_info?: string | null;
};

type AdminInfoApiResponse = {
  success: boolean;
  message?: string;
  data: AdminInfoApiData;
};

const DEFAULT_CONFIG: SystemConfig = {
  fanpage: "",
  hotline: "",
  address: "",
  website: "",
  zalo: "",
  messenger: "",
  phone: "",
  emailContact: "",
  bankInfo: "",
};

function mapApiDataToConfig(data: AdminInfoApiData): SystemConfig {
  return {
    fanpage: data.facebook || "",
    hotline: data.hotline || "",
    address: data.address || "",
    website: data.website || "",
    zalo: data.zalo || "",
    messenger: data.messenger || "",
    phone: data.phone || "",
    emailContact: data.email_contact || "",
    bankInfo: data.bank_info || "",
  };
}

function mapConfigToPayload(config: SystemConfig) {
  return {
    hotline: config.hotline,
    phone: config.phone,
    address: config.address,
    website: config.website,
    facebook: config.fanpage,
    zalo: config.zalo,
    messenger: config.messenger,
    email_contact: config.emailContact || null,
    bank_info: config.bankInfo || null,
  };
}

export default function AdminSettingsPage() {
  const accessToken = useAuthStore((state) => state.accessToken);

  const { info, isLoading, error: loadError, refetchInfo } = useGetData();

  const [config, setConfig] = useState<SystemConfig>(DEFAULT_CONFIG);
  const [isSaving, setIsSaving] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  useEffect(() => {
    if (info) {
      setConfig(info);
    }
  }, [info]);
 

  // Xử lý thay đổi Input
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setConfig((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Copy nhanh liên kết/SĐT
  const handleCopy = (value: string, fieldName: string) => {
    navigator.clipboard.writeText(value);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  // Submit Form Lưu Cấu Hình
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsSaving(true);

      const response = await fetch("/api/admin/info", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          ...(accessToken
            ? {
                Authorization: `Bearer ${accessToken}`,
              }
            : {}),
        },
        body: JSON.stringify(mapConfigToPayload(config)),
      });
            if (response.status === 401) {
        localStorage.removeItem("admin-auth");

        window.location.href = "/admin/login";

        return [];
      }
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Không thể cập nhật thông tin website");
      }

      await refetchInfo();
      alert("Đã cập nhật thông tin cấu hình hệ thống thành công!");
    } catch (error) {
      alert(error instanceof Error ? error.message : "Không thể cập nhật thông tin website");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans text-slate-800">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
              Cấu Hình Thông Tin Hệ Thống
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Quản lý các thông tin liên hệ, hotline và liên kết mạng xã hội
              hiển thị ở trang khách hàng (Client).
            </p>
          </div>
          <button
            type="button"
            onClick={() => setConfig(DEFAULT_CONFIG)}
            className="self-start sm:self-center px-3.5 py-2 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition"
          >
            ↺ Khôi phục mặc định
          </button>
        </div>

        {isLoading && (
          <div className="bg-white border border-slate-200 rounded-2xl p-4 text-sm text-slate-500 shadow-sm">
            Đang tải thông tin website...
          </div>
        )}

        {loadError && (
          <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 text-sm text-rose-700 shadow-sm">
            {loadError}
          </div>
        )}

        {/* Form Cấu Hình */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Group 1: Kênh liên lạc chính */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5">
            <div className="border-b border-slate-100 pb-3 flex items-center gap-2">
              <span className="text-lg">📞</span>
              <h2 className="font-bold text-slate-800 text-sm uppercase tracking-wider">
                Kênh liên hệ trực tiếp
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Tổng đài / Hotline */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Tổng đài (Hotline)
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="hotline"
                    value={config.hotline}
                    onChange={handleChange}
                    placeholder="Nhập số tổng đài..."
                    className="w-full pl-3 pr-16 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-base font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => handleCopy(config.hotline, "hotline")}
                    className="absolute right-2 top-2.5 px-2 py-1 text-[11px] font-semibold text-sky-700 bg-sky-50 hover:bg-sky-100 rounded-md transition"
                  >
                    {copiedField === "hotline" ? "✓ Đã chép" : "Copy"}
                  </button>
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Phone (Số di động / CSKH)
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="phone"
                    value={config.phone}
                    onChange={handleChange}
                    placeholder="Nhập số điện thoại..."
                    className="w-full pl-3 pr-16 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-base font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => handleCopy(config.phone, "phone")}
                    className="absolute right-2 top-2.5 px-2 py-1 text-[11px] font-semibold text-sky-700 bg-sky-50 hover:bg-sky-100 rounded-md transition"
                  >
                    {copiedField === "phone" ? "✓ Đã chép" : "Copy"}
                  </button>
                </div>
              </div>

              {/* Địa chỉ */}
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Địa chỉ
                </label>
                <input
                  type="text"
                  name="address"
                  value={config.address}
                  onChange={handleChange}
                  placeholder="Nhập địa chỉ trụ sở/văn phòng..."
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-base font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
                  required
                />
              </div>
            </div>
          </div>

          {/* Group 2: Website & Mạng xã hội */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5">
            <div className="border-b border-slate-100 pb-3 flex items-center gap-2">
              <span className="text-lg">🌐</span>
              <h2 className="font-bold text-slate-800 text-sm uppercase tracking-wider">
                Website & Mạng xã hội
              </h2>
            </div>

            <div className="space-y-4">
              {/* Website */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Website
                </label>
                <div className="relative">
                  <input
                    type="url"
                    name="website"
                    value={config.website}
                    onChange={handleChange}
                    placeholder="https://..."
                    className="w-full pl-3 pr-16 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-base font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => handleCopy(config.website, "website")}
                    className="absolute right-2 top-2.5 px-2 py-1 text-[11px] font-semibold text-sky-700 bg-sky-50 hover:bg-sky-100 rounded-md transition"
                  >
                    {copiedField === "website" ? "✓ Đã chép" : "Copy"}
                  </button>
                </div>
              </div>

              {/* Fanpage */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Fanpage Facebook
                </label>
                <div className="relative">
                  <input
                    type="url"
                    name="fanpage"
                    value={config.fanpage}
                    onChange={handleChange}
                    placeholder="https://web.facebook.com/..."
                    className="w-full pl-3 pr-16 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-base font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => handleCopy(config.fanpage, "fanpage")}
                    className="absolute right-2 top-2.5 px-2 py-1 text-[11px] font-semibold text-sky-700 bg-sky-50 hover:bg-sky-100 rounded-md transition"
                  >
                    {copiedField === "fanpage" ? "✓ Đã chép" : "Copy"}
                  </button>
                </div>
              </div>

              {/* Zalo */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Zalo Link / QR Link
                </label>
                <div className="relative">
                  <input
                    type="url"
                    name="zalo"
                    value={config.zalo}
                    onChange={handleChange}
                    placeholder="https://zalo.me/..."
                    className="w-full pl-3 pr-16 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-base font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => handleCopy(config.zalo, "zalo")}
                    className="absolute right-2 top-2.5 px-2 py-1 text-[11px] font-semibold text-sky-700 bg-sky-50 hover:bg-sky-100 rounded-md transition"
                  >
                    {copiedField === "zalo" ? "✓ Đã chép" : "Copy"}
                  </button>
                </div>
              </div>

              {/* Messenger */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Messenger Link
                </label>
                <div className="relative">
                  <input
                    type="url"
                    name="messenger"
                    value={config.messenger}
                    onChange={handleChange}
                    placeholder="https://m.me/..."
                    className="w-full pl-3 pr-16 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-base font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => handleCopy(config.messenger, "messenger")}
                    className="absolute right-2 top-2.5 px-2 py-1 text-[11px] font-semibold text-sky-700 bg-sky-50 hover:bg-sky-100 rounded-md transition"
                  >
                    {copiedField === "messenger" ? "✓ Đã chép" : "Copy"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="flex items-center justify-end gap-3 pt-2">
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
                <>💾 Lưu thay đổi</>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
