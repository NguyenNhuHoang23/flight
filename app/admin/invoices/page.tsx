"use client";

import React, { useState, useRef, useEffect } from "react";
import { toast } from "sonner";
import Image from "next/image";
import { Logo } from "./Logo";
import PaymentInvoice from "./PaymentInvoice";

const STORAGE_KEY = "saved_invoice_form_data";

interface InvoiceFormData {
  customerName: string;
  customerPhone: string;
  flightRoute: string;
  invoiceNo: string;
  bookingDate: string;
  bankName: string;
  accountHolder: string;
  accountNumber: string;
  transferContent: string;
  amount: string;
  hotline: string;
  status: string;
  qrImage?: string;
}

export default function CreateInvoicePage() {
  const [formData, setFormData] = useState<InvoiceFormData>({
    customerName: "",
    customerPhone: "",
    flightRoute: "THANH TOÁN CHẶNG BAY ....",
    invoiceNo: "34",
    bookingDate: "2026-08-06",
    bankName: "BVBank",
    accountHolder: "TRUONG KIM NGOC ( Kế Toán)",
    accountNumber: "8107041423786",
    transferContent: "VN1553TicketJ0",
    amount: "1500000",
    hotline: "0347.10.3333",
    status: "Chưa thanh toán",
    qrImage: "",
  });

  const invoiceRef = useRef<HTMLDivElement>(null);

  // Khôi phục dữ liệu từ LocalStorage khi mount component
  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      try {
        setFormData((prev) => ({ ...prev, ...JSON.parse(savedData) }));
      } catch (error) {
        console.error("Lỗi khi đọc dữ liệu từ LocalStorage:", error);
      }
    }
  }, []);

  // Xử lý thay đổi dữ liệu trong form
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    if (name === "amount") {
      // Chỉ giữ lại ký tự số khi nhập số tiền
      const rawValue = value.replace(/\D/g, "");
      setFormData((prev) => ({ ...prev, amount: rawValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Xử lý upload ảnh QR tùy chỉnh
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, qrImage: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Hàm xử lý lưu hóa đơn
  const handleSave = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
      toast.success("Đã lưu thông tin hóa đơn thành công!");
    } catch (error) {
      toast.error("Không thể lưu thông tin. Vui lòng thử lại!");
      console.error(error);
    }
  };

  // Format tiền tệ hiển thị (ví dụ: 1000000 -> 1.000.000)
  const formatAmount = (val: string | number) => {
    if (val === "" || val === null || val === undefined) return "0";
    const num = Number(val);
    return isNaN(num) ? "0" : num.toLocaleString("vi-VN");
  };

  // Tạo URL VietQR tự động dựa trên thông tin ngân hàng & số tiền nếu người dùng không upload QR riêng
  const getQrUrl = () => {
    if (formData.qrImage) return formData.qrImage;
    const bank = encodeURIComponent(formData.bankName || "MB");
    const acc = encodeURIComponent(formData.accountNumber || "");
    const name = encodeURIComponent(formData.accountHolder || "");
    const amount = formData.amount || "0";
    const memo = encodeURIComponent(formData.transferContent || "");
    return `https://img.vietqr.io/image/${bank}-${acc}-qr_only.png?amount=${amount}&addInfo=${memo}&accountName=${name}`;
  };

  return (
    <div className="min-h-screen font-sans text-slate-800 p-4 bg-slate-50 print:bg-white print:p-0">
      {/* Tiêu đề */}
      <div className="max-w-full mb-4 print:hidden flex items-center justify-between">
        <h1 className="text-xl font-bold text-slate-900">Tạo Hóa Đơn</h1>
      </div>

      <div className="max-w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* CỘT BÊN TRÁI: FORM NHẬP THÔNG TIN (ẨN KHỎI BẢN IN) */}
        <div className="lg:col-span-3 bg-white p-2 rounded-md border border-slate-200 shadow-sm space-y-3 text-xs print:hidden">
          <h2 className="text-sm font-bold text-slate-900 mb-2 border-b pb-2">
            Thông Tin Đặt Vé
          </h2>

          <div>
            <label className="block text-slate-600 font-medium mb-1">
              Tên Khách Hàng
            </label>
            <input
              type="text"
              name="customerName"
              placeholder="Nhập họ và tên"
              value={formData.customerName}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded px-2.5 py-1.5 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-slate-600 font-medium mb-1">
              SĐT Khách
            </label>
            <input
              type="text"
              name="customerPhone"
              placeholder="Nhập SĐT"
              value={formData.customerPhone}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded px-2.5 py-1.5 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-slate-600 font-medium mb-1">
              Chặng bay
            </label>
            <textarea
              name="flightRoute"
              rows={2}
              value={formData.flightRoute}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded px-2.5 py-1.5 focus:outline-none focus:border-blue-500 resize-none"
            />
          </div>

          <div>
            <label className="block text-slate-600 font-medium mb-1">
              Hóa đơn số
            </label>
            <input
              type="text"
              name="invoiceNo"
              value={formData.invoiceNo}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded px-2.5 py-1.5 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-slate-600 font-medium mb-1">
              Ngày đặt vé
            </label>
            <input
              type="date"
              name="bookingDate"
              value={formData.bookingDate}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded px-2.5 py-1.5 focus:outline-none focus:border-blue-500"
            />
          </div>

         

          <div>
            <label className="block text-slate-600 font-medium mb-1">
              Nội dung chuyển khoản
            </label>
            <input
              type="text"
              name="transferContent"
              value={formData.transferContent}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded px-2.5 py-1.5 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-slate-600 font-medium mb-1">
              Số tiền (VNĐ)
            </label>
            <input
              type="text"
              name="amount"
              placeholder="Nhập số tiền"
              value={formatAmount(formData.amount)}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded px-2.5 py-1.5 focus:outline-none focus:border-blue-500 font-bold text-red-600"
            />
          </div>

          <div>
            <label className="block text-slate-600 font-medium mb-1">
              Hotline CSKH
            </label>
            <input
              type="text"
              name="hotline"
              value={formData.hotline}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded px-2.5 py-1.5 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={handleSave}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs py-2 px-4 rounded shadow transition cursor-pointer"
            >
              Lưu dữ liệu
            </button>
          </div>
        </div>

        {/* CỘT BÊN PHẢI: KHUNG XEM TRƯỚC HÓA ĐƠN (PRINTABLE) */}
        <div className="lg:col-span-9 flex flex-col items-center">
          <PaymentInvoice
            formData={formData}
            formatAmount={formatAmount}
            getQrUrl={getQrUrl}
          />
        </div>
      </div>
    </div>
  );
}
