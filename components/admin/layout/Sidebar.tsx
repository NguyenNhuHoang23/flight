"use client";

import React, { useState } from "react";
import {
  LayoutDashboard,
  Users,
  ShoppingBag,
  BarChart3,
  Settings,
  LogOut,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth-store";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const navItems = [
  { name: "Tổng quát", href: "/admin", icon: LayoutDashboard },
  { name: "Đơn hàng", href: "/admin/orders", icon: ShoppingBag },
  { name: "Khách hàng", href: "/admin/customers", icon: Users },
  { name: "Hoàn tiền", href: "/admin/refunds", icon: BarChart3 },
  { name: "Ngân hàng", href: "/admin/bank", icon: Settings },
  { name: "Thông tin", href: "/admin/info", icon: Settings },
  { name: "Giảm giá", href: "/admin/sale", icon: Settings },
  { name: "Hóa đơn", href: "/admin/invoices", icon: BarChart3 },
];

export default function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const accessToken = useAuthStore((state) => state.accessToken);

  const logout = useAuthStore((state) => state.logout);

  const [loggingOut, setLoggingOut] = useState(false);

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
      router.replace("/admin/login");
    } catch (error) {
      console.error("LOGOUT ERROR:", error);

      alert(error instanceof Error ? error.message : "Không thể đăng xuất");
    } finally {
      setLoggingOut(false);
    }
  };
  return (
    <>
      {/* Overlay cho Mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm md:hidden transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
        fixed md:sticky top-0 inset-y-0 left-0 z-50 w-64 h-screen bg-slate-900 text-slate-300 flex flex-col justify-between
        transform transition-transform duration-200 ease-in-out shrink-0 select-none
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
      >
        {/* Phần trên: Logo + Navigation (Có Scroll riêng khi màn hình quá ngắn) */}
        <div className="flex flex-col flex-1 min-h-0">
          {/* Logo Header */}
          <div className="h-16 flex items-center justify-between px-6 bg-slate-950/50 border-b border-slate-800 shrink-0">
            <Link href="/admin" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/30">
                A
              </div>
              <span className="font-semibold text-lg text-white tracking-wide">
                Vemaybay
              </span>
            </Link>
            <button
              className="md:hidden text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav Items Scrollable */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-1.5 custom-scrollbar">
            <div className="px-3 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Menu chính
            </div>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`w-full flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                      : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
                  }`}
                >
                  <Icon className="w-5 h-5 shrink-0" />
                  <span className="truncate">{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* User Footer (Luôn dính chặt ở đáy Sidebar) */}
        <div className="p-4 border-t border-slate-800/80 bg-slate-950/40 shrink-0">
          <div className="flex items-center gap-3 px-1 py-1">
            <div className="w-9 h-9 rounded-full bg-slate-700 flex items-center justify-center font-medium text-white border border-slate-600 shrink-0">
              A
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate leading-snug">
                Admin
              </p>
              <p className="text-xs text-slate-400 truncate leading-snug">
                admin@system.io
              </p>
            </div>
            <button
              type="button"
              title="Đăng xuất"
              disabled={loggingOut}
              onClick={handleLogout}
              className="text-slate-400 hover:text-rose-400 transition-colors p-1.5 rounded-lg hover:bg-slate-800 shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
