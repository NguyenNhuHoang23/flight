"use client";
import React from "react";
import { ArrowUpRight, Home, Wallet } from "lucide-react";
import { Logo } from "./Logo";
import Link from "next/link";

export default function Header() {
  return (
    <>
      {/* 1. Header Top */}
      <header className="bg-white py-3 px-4 md:px-16 flex flex-wrap justify-between items-center border-b">
        <Logo />

        <div className="flex items-center space-x-2 text-right">
          <span className="text-gray-700 font-medium text-sm">Tổng đài</span>
          <span className="text-sm font-bold text-[#e63946]">0868.003.443</span>
        </div>
      </header>

      {/* 2. Navigation Bar */}
      <nav className="bg-[#006837] text-white px-4 md:px-16 text-xs md:text-sm font-semibold">
        <div className="max-w-8xl mx-auto flex flex-wrap items-center">
          <Link
            href="/"
            className="flex items-center space-x-1 bg-[#004d28] px-3 py-2.5 uppercase text-white"
          >
            <Home className="w-4 h-4" />
            <span>TRANG CHỦ</span>
          </Link>

          {/* Option NẠP TIỀN */}
          <Link
            href="/flight/refund"
            className="px-3 py-2.5 hover:bg-[#004d28] uppercase"
          >
            <span>HOÀN TIỀN</span>
          </Link>

          {/* Option RÚT TIỀN */}
          <Link
            href="/flight/refund/history"
            className="px-3 py-2.5 hover:bg-[#004d28] uppercase"
          >
            <span>LỊCH SỬ</span>
          </Link>

          <Link href="/blog" className="px-3 py-2.5 hover:bg-[#004d28] uppercase">
            TIN TỨC
          </Link>

                   <Link href="/" className="px-3 py-2.5 hover:bg-[#004d28] uppercase">
    
            QUẢN LÝ ĐẶT CHỖ
          </Link>

          <Link href="/" className="px-3 py-2.5 hover:bg-[#004d28] uppercase">
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