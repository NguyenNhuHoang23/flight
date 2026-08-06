"use client";

import { Logo } from "@/components/layout/Logo";
import React, { useState, useRef } from "react";

export default function CreateInvoicePage() {
  // State quản lý toàn bộ dữ liệu form
  const [formData, setFormData] = useState({
    customerName: "",
    customerPhone: "",
    flightRoute: "THANH TOÁN CHẶNG BAY ....",
    invoiceNo: "34",
    bookingDate: "2026-08-06",
    bankName: "BVBank",
    accountHolder: "TRUONG KIM NGOC ( Kế Toán)",
    accountNumber: "8107041423786",
    qrImage: "", // URL hình ảnh QR code tải lên
    transferContent: "VN1553TicketJ0",
    amount: "",
    hotline: "0347.10.3333",
    status: "Chưa thanh toán",
  });

  const invoiceRef = useRef<HTMLDivElement>(null);

  // Xử lý thay đổi dữ liệu trong form
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Xử lý upload ảnh QR
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData((prev) => ({ ...prev, qrImage: imageUrl }));
    }
  };

  // Hàm in hóa đơn
  const handlePrint = () => {
    window.print();
  };

  // Format tiền tệ hiển thị
  const formatAmount = (val: string) => {
    if (!val) return "Nhập số tiền";
    const num = Number(val.replace(/\D/g, ""));
    return isNaN(num) ? "0" : num.toLocaleString("vi-VN");
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6 font-sans text-slate-800">
      {/* Tiêu đề & Nút In (Ẩn khi thực hiện in) */}
      <div className="max-w-7xl mx-auto mb-4 print:hidden">
        <h1 className="text-xl font-bold text-slate-900 mb-3">Tạo Hóa Đơn</h1>
        <button
          onClick={handlePrint}
          className="bg-slate-800 hover:bg-slate-900 text-white font-semibold text-xs py-2 px-4 rounded shadow transition"
        >
          In Hóa Đơn
        </button>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* CỘT BÊN TRÁI: FORM NHẬP THÔNG TIN (ẨN KHỎI BẢN IN) */}
        <div className="lg:col-span-4 bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3 text-xs print:hidden">
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
              placeholder="Nhập sdt"
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
              Ngân hàng
            </label>
            <input
              type="text"
              name="bankName"
              placeholder="Nhập tên ngân hàng"
              value={formData.bankName}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded px-2.5 py-1.5 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-slate-600 font-medium mb-1">
              Tên Tài Khoản
            </label>
            <input
              type="text"
              name="accountHolder"
              placeholder="Nhập chủ tài khoản"
              value={formData.accountHolder}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded px-2.5 py-1.5 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-slate-600 font-medium mb-1">
                Số tài khoản
              </label>
              <input
                type="text"
                name="accountNumber"
                placeholder="Nhập STK"
                value={formData.accountNumber}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded px-2.5 py-1.5 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-slate-600 font-medium mb-1">
                Tải ảnh QR
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full border border-slate-300 rounded px-1.5 py-1 text-[11px] focus:outline-none"
              />
            </div>
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
              value={formData.amount}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded px-2.5 py-1.5 focus:outline-none focus:border-blue-500 font-bold text-red-600"
            />
          </div>

          <div>
            <label className="block text-slate-600 font-medium mb-1">
              Hotline
            </label>
            <input
              type="text"
              name="hotline"
              value={formData.hotline}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded px-2.5 py-1.5 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* CỘT BÊN PHẢI: KHUNG XEM TRƯỚC HÓA ĐƠN (PRINTABLE) */}
        <div className="lg:col-span-8 bg-slate-50 p-6 rounded-xl border border-slate-200 print:p-0 print:border-none print:bg-white print:col-span-12">
          <div
            ref={invoiceRef}
            className="bg-[#f2f9f6] p-8 rounded-lg border border-slate-200 relative min-h-[550px] flex flex-col justify-between shadow-sm print:shadow-none print:border-none"
          >
            {/* CON DẤU MÀU ĐỎ GÓC TRÊN BÊN PHẢI */}
            <div className="absolute top-4 right-4 z-10 w-24 h-24 border-2 border-red-500/80 rounded-full flex flex-col items-center justify-center text-[9px] font-bold text-red-500/90 text-center p-1 transform rotate-[-12deg] pointer-events-none select-none">
              <div>CÔNG TY TNHH</div>
              <div>VÉ MÁY BAY 24H</div>
              <div className="text-[7px] font-normal">C.T.T.N.H.H</div>
            </div>

            {/* HEADER HÓA ĐƠN */}
            <div>
              <div className="flex justify-between items-start mb-6 border-b border-slate-800 pb-2">
                <Logo />
                <h2 className="text-xl font-extrabold text-slate-900 tracking-wider uppercase pr-20">
                  HÓA ĐƠN THANH TOÁN
                </h2>
              </div>

              {/* KHU VỰC NỘI DUNG CHÍNH */}
              <div className="grid grid-cols-12 gap-4 relative">
                {/* THÔNG TIN BÊN TRÁI */}
                <div className="col-span-7 space-y-3 text-xs z-10">
                  <div>
                    <span className="font-bold text-slate-800">
                      Khách Hàng:
                    </span>
                    <div className="font-extrabold text-sm text-slate-900">
                      {formData.customerName || "Khách hàng"}{" "}
                      {formData.customerPhone
                        ? `- ${formData.customerPhone}`
                        : "- Điện thoại"}
                    </div>
                    <div className="text-[11px] text-slate-600 uppercase mt-0.5 font-medium">
                      {formData.flightRoute}
                    </div>
                  </div>

                  <div>
                    <span className="font-bold text-slate-800">Ngân Hàng:</span>
                    <div className="text-slate-700 font-medium">
                      {formData.bankName}
                    </div>
                  </div>

                  <div>
                    <span className="font-bold text-slate-800">
                      Chủ Tài Khoản:
                    </span>
                    <div className="text-slate-900 font-semibold">
                      {formData.accountHolder}
                    </div>
                  </div>

                  <div>
                    <span className="font-bold text-slate-800">
                      Số Tài Khoản:
                    </span>
                    <div className="text-slate-900 font-bold text-sm">
                      {formData.accountNumber}
                    </div>
                  </div>

                  <div>
                    <span className="font-bold text-slate-800">Hotline:</span>
                    <div className="text-slate-700 font-medium">
                      {formData.hotline}
                    </div>
                  </div>

                  <div>
                    <span className="font-bold text-slate-800">
                      Nội Dung Chuyển Khoản:
                    </span>
                    <div className="text-slate-900 font-extrabold text-sm">
                      {formData.transferContent}
                    </div>
                  </div>
                </div>

                {/* HÌNH ẢNH MÁY BAY LÀM NỀN / MINH HỌA */}
                <div className="absolute left-[25%] top-[10%] w-[55%] pointer-events-none opacity-90">
                  <img
                    src="/images/may-bay-vector-png-09.png"
                    alt="Airplane Illustration"
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* CỘT PHẢI: MÃ QR & TỔNG TIỀN */}
                <div className="col-span-5 flex flex-col items-end justify-between z-10 text-right space-y-4">
                  {/* Số hóa đơn, ngày, trạng thái */}
                  <div className="text-[11px] space-y-0.5 text-slate-700">
                    <div>
                      Hóa đơn số:{" "}
                      <span className="font-bold">{formData.invoiceNo}</span>
                    </div>
                    <div>
                      Ngày đặt vé:{" "}
                      <span className="font-medium">
                        {formData.bookingDate}
                      </span>
                    </div>
                    <div>
                      Tình trạng:{" "}
                      <span className="font-bold text-slate-900">
                        {formData.status}
                      </span>
                    </div>
                  </div>

                  {/* KHU VỰC HIỂN THỊ MÃ QR CODE */}
                  <div className="w-full bg-orange-500 p-2 rounded flex justify-center items-center max-w-[200px]">
                    {formData.qrImage ? (
                      <img
                        src={formData.qrImage}
                        alt="QR Code"
                        className="w-full h-auto max-h-[120px] object-contain rounded bg-white"
                      />
                    ) : (
                      <div className="bg-orange-500 text-white font-bold text-sm py-2 px-4 rounded flex items-center justify-center gap-1">
                        <span className="bg-white text-orange-500 font-black text-xs px-1 rounded">
                          Viet
                        </span>
                        <span>QR</span>
                      </div>
                    )}
                  </div>

                  {/* KHUNG TỔNG THÀNH TOÁN */}
                  <div className="border border-red-400 bg-white px-3 py-2 rounded text-xs font-bold w-full max-w-[220px] flex items-center justify-between whitespace-nowrap">
                    <span className="text-slate-800">Tổng thanh toán:</span>{" "}
                    <span className="text-red-600 font-extrabold">
                      {formatAmount(formData.amount)} VNĐ
                    </span>
                  </div>
                </div>
              </div>

              {/* LƯU Ý BÊN DƯỚI */}
              <div className="mt-8 text-[11px] italic text-red-600">
                Chú ý: Thanh toán tiền vé ghi đúng nội dung, ký tự chuyển khoản
                hệ thống cung cấp tránh xảy ra lỗi
              </div>
            </div>

            {/* FOOTER HÓA ĐƠN */}
            <div className="mt-8 text-center border-t border-slate-300 pt-3">
              <span className="font-extrabold text-slate-900 text-xs tracking-wider uppercase">
                CẢM ƠN QUÝ KHÁCH
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
