"use client";

import React, { useState } from "react";
import {
  Bell,
  Check,
  ChevronDown,
  LogOut,
  Menu,
  Plus,
  Search,
  Settings,
  User,
  X,
} from "lucide-react";

interface AdminHeaderProps {
  setSidebarOpen: (open: boolean) => void;
}

export default function AdminHeader({ setSidebarOpen }: AdminHeaderProps) {
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <header className="h-16 bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-4 md:px-8 flex items-center justify-between sticky top-0 z-30 shadow-xs font-sans">
      {/* LEFT SECTION */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg md:hidden transition cursor-pointer"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open Sidebar"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Desktop Search */}
        <div className="relative hidden sm:block w-72 md:w-80">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Tìm kiếm dữ liệu, báo cáo..."
            className="w-full pl-10 pr-4 py-2 bg-slate-100/80 border border-transparent rounded-xl text-base sm:text-sm focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 focus:outline-none transition-all placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Mobile Search Toggle */}
        <button
          type="button"
          onClick={() => setShowMobileSearch(!showMobileSearch)}
          className="p-2 text-slate-600 hover:bg-slate-100 rounded-xl sm:hidden transition cursor-pointer"
          aria-label="Toggle Search"
        >
          {showMobileSearch ? (
            <X className="w-5 h-5" />
          ) : (
            <Search className="w-5 h-5" />
          )}
        </button>

        {/* Notifications Dropdown */}
        <div className="relative">
          <button
            type="button"
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowUserMenu(false);
            }}
            className="relative p-2.5 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-white animate-pulse" />
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 py-3 z-50">
              <div className="px-4 pb-2 border-b border-slate-100 flex items-center justify-between">
                <span className="font-bold text-sm text-slate-800">
                  Thông báo
                </span>
                <span className="text-[11px] font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
                  2 mới
                </span>
              </div>
              <div className="divide-y divide-slate-50 max-h-64 overflow-y-auto">
                <div className="px-4 py-3 hover:bg-slate-50 transition cursor-pointer">
                  <p className="text-xs font-semibold text-slate-800">
                    Yêu cầu hoàn tiền mới #RF839201
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Khách hàng yêu cầu rút 1.500.000 VNĐ
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">
                    5 phút trước
                  </span>
                </div>
                <div className="px-4 py-3 hover:bg-slate-50 transition cursor-pointer">
                  <p className="text-xs font-semibold text-slate-800">
                    Thanh toán vé thành công #DH386456
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Đã cập nhật bill chuyển khoản MB Bank
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">
                    12 phút trước
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="h-6 w-px bg-slate-200 my-auto" />

        {/* Action Button */}
        <button
          type="button"
          className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 active:scale-98 text-white px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold shadow-xs shadow-indigo-200 transition-all cursor-pointer whitespace-nowrap"
        >
          <Plus className="w-4 h-4" />
          <span>Tạo báo cáo</span>
        </button>
      </div>

      {/* Mobile Search Overlay Bar */}
      {showMobileSearch && (
        <div className="absolute inset-x-0 top-16 bg-white border-b border-slate-200/80 p-3 sm:hidden shadow-md z-40">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              autoFocus
              placeholder="Tìm kiếm dữ liệu, báo cáo..."
              className="w-full pl-10 pr-4 py-2 bg-slate-100 border border-transparent rounded-xl text-base focus:bg-white focus:border-indigo-500 focus:outline-none"
            />
          </div>
        </div>
      )}
    </header>
  );
}
