"use client";

import AdminHeader from "@/components/admin/layout/AdminHeader";
import Sidebar from "@/components/admin/layout/Sidebar";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  // Bỏ Sidebar & Header nếu đang ở trang Login
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-start font-sans antialiased text-slate-800">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content Container */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen">
        {/* Sticky Header */}
        <AdminHeader setSidebarOpen={setSidebarOpen} />

        {/* Dynamic Content */}
        <main className="flex-1 p-4 md:p-8 space-y-8 max-w-6xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
