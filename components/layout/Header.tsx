"use client";
import React from "react";
import { Home } from "lucide-react";
import { Logo } from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGetData } from "@/context/GetContext";

function navLinkClass(isActive: boolean, extra = "") {
  return `${extra} px-3 py-2.5 uppercase ${
    isActive ? "bg-[#004d28]" : "hover:bg-[#004d28]"
  }`;
}

export default function Header() {
  const pathname = usePathname();
  const { info, isLoading, error: loadError } = useGetData();

  const isHome = pathname === "/";
  const isRefund =
    pathname.startsWith("/flight/refund") &&
    !pathname.startsWith("/flight/refund/history");
  const isHistory = pathname.startsWith("/flight/refund/history");
  const isBlog = pathname.startsWith("/blog");

  return (
    <>
      {/* 1. Header Top */}
      <header className=" py-3 px-4 md:px-16 flex flex-wrap justify-between items-center max-w-6xl mx-auto">
        <Logo />

        <div className="flex items-center space-x-2 text-right">
          <span className="text-gray-700 font-medium text-sm">Tổng đài</span>
          {isLoading ? (
            <span className="text-sm text-gray-500">Đang tải...</span>
          ) : loadError ? (
            <span className="text-sm text-red-500">Lỗi tải thông tin</span>
          ) : (
            <span className="text-sm font-bold text-[#e63946]">{info?.hotline}</span>
          )}
        </div>
      </header>

      {/* 2. Navigation Bar */}
      <nav className="bg-[#006837] text-white px-4 md:px-16 text-xs md:text-sm font-semibold">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center">
          <Link
            href="/"
            className={navLinkClass(
              isHome,
              "flex items-center space-x-1 text-white"
            )}
          >
            <Home className="w-4 h-4" />
            <span>TRANG CHỦ</span>
          </Link>

          <Link href="/flight/refund" className={navLinkClass(isRefund)}>
            <span>HOÀN TIỀN</span>
          </Link>

          <Link
            href="/flight/refund/history"
            className={navLinkClass(isHistory)}
          >
            <span>LỊCH SỬ</span>
          </Link>

          <Link href="/blog" className={navLinkClass(isBlog)}>
            TIN TỨC
          </Link>

          <Link href="/" className={navLinkClass(false)}>
            QUẢN LÝ ĐẶT CHỖ
          </Link>

          <Link href="/" className={navLinkClass(false)}>
            LIÊN HỆ
          </Link>
        </div>
      </nav>

      {/* 3. Sub-header Banner Text */}
      <div className="text-center py-2.5 text-xs md:text-sm text-gray-700 font-medium px-2">
        Vé máy bay giá rẻ Vietjet Air, Vietnam Airlines, Bamboo, Pacific,
        Vietravel Airlines. Khuyến mãi vé Nội địa, Quốc tế
      </div>
    </>
  );
}
