"use client";

import { Logo } from "@/components/layout/Logo";
import React, { useState, useRef, useEffect } from "react";
import { toast, Toaster } from "sonner"; // 1. Import thêm Toaster

const STORAGE_KEY = "saved_invoice_form_data";

export default function CreateToastPage() {
  // ... (giữ nguyên các state và hàm xử lý)

  return (
    <div className="min-h-screen bg-slate-100 p-6 font-sans text-slate-800">
      {/* 2. Đặt Toaster ở đây để hiển thị thông báo */}
      <Toaster position="top-right" richColors />

      {/* ... Tất cả giao diện hóa đơn bên dưới giữ nguyên ... */}
    </div>
  );
}