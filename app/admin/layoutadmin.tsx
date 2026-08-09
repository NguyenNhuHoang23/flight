"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";

import AdminHeader from "@/components/admin/layout/AdminHeader";
import Sidebar from "@/components/admin/layout/Sidebar";
import ReactQueryProvider from "../ReactQueryProvider";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const pathname = usePathname();

  // Login không hiển thị Sidebar/Header
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  return (
    <ReactQueryProvider>
      <div className="flex min-h-screen bg-slate-50">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Main */}
        <div className="flex flex-1 flex-col min-w-0 min-h-screen">
          {/* Header */}
          <AdminHeader setSidebarOpen={setSidebarOpen} />

          {/* Content */}
          <main className="flex-1 p-4 md:p-8 space-y-8 max-w-8xl w-full mx-auto">
            {children}
          </main>
        </div>
      </div>
    </ReactQueryProvider>
  );
}
