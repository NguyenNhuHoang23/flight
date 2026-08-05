"use client";

import Header from "@/components/layout/Header";
import { usePathname } from "next/navigation";
import React from "react";

interface ClientLayoutProviderProps {
  children: React.ReactNode;
}

export default function ClientLayoutProvider({
  children,
}: ClientLayoutProviderProps) {
  const pathname = usePathname();

  // Kiểm tra nếu đường dẫn hiện tại là trang Admin
  const isAdminRoute = pathname?.startsWith("/admin");

  // Nếu là trang Admin, render trực tiếp children (hoặc bỏ Header)
  if (isAdminRoute) {
    return <>{children}</>;
  }

  // Nếu là các trang Client bình thường
  return (
    <div className="w-full min-h-screen bg-[#f3f3f3] text-gray-800 font-sans text-xs md:text-sm">
      {/* Header chỉ dùng cho Client */}
      <Header />

      {/* Nội dung trang Client */}
      <main>{children}</main>
    </div>
  );
}
