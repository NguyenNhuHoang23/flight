"use client";

import React, { useState } from "react";

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

// Dữ liệu mẫu ban đầu theo hình ảnh của bạn
const INITIAL_CONFIG: SystemConfig = {
  fanpage: "https://web.facebook.com/profile.php?id=61577101716986",
  hotline: "0347.10.3333",
  address: "Trụ sở : Số 7 Trần Nguyên Hãn, Lê Chân, TP Hải Phòng",
  website: "https://sanvemaybay24h.com/",
  zalo: "https://zalo.me/84",
  messenger: "https://web.facebook.com/profile.php?id=61577101716986",
  phone: "0347.10.3333",
  emailContact: "support@sanvemaybay24h.com",
};

export default function AdminSettingsPage() {
  const [config, setConfig] = useState<SystemConfig>(INITIAL_CONFIG);
  const [isSaving, setIsSaving] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

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
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    // Giả lập call API lưu cấu hình
    setTimeout(() => {
      setIsSaving(false);
      alert("Đã cập nhật thông tin cấu hình hệ thống thành công!");
    }, 600);
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
            onClick={() => setConfig(INITIAL_CONFIG)}
            className="self-start sm:self-center px-3.5 py-2 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition"
          >
            ↺ Khôi phục mặc định
          </button>
        </div>

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
