import React from "react";
import { Logo } from "./Logo";
import Image from "next/image";
import { useBankAccounts } from "@/hook/useBankAccounts";
interface PaymentFormData {
  customerName?: string;
  customerPhone?: string;
  flightRoute?: string;
  bankName?: string;
  accountHolder?: string;
  accountNumber?: string;
  hotline?: string;
  transferContent?: string;
  invoiceNo?: string;
  bookingDate?: string;
  status?: string;
  amount?: number | string;
}

interface PaymentInvoiceProps {
  formData?: PaymentFormData;
  formatAmount?: (value: number | string) => string;
  getQrUrl?: (params: {
    bankName: string;
    accountNumber: string;
    accountHolder: string;
    amount?: number | string;
    transferContent?: string;
  }) => string;
}
export default function PaymentInvoice({
  formData,
  formatAmount,
  getQrUrl,
}: PaymentInvoiceProps) {
  // Dữ liệu mẫu khớp hoàn toàn với mẫu ảnh
  const data = {
    customerName: formData?.customerName || "ĐỖ ĐÌNH NĂNG",
    customerPhone: formData?.customerPhone || "0825491333",
    flightRoute:
      formData?.flightRoute ||
      "THANH TOÁN CHẶNG BAY 1 CHIỀU HCM - CHU LAI / 1 VÉ",
    bankName: formData?.bankName || "Techcombank - Ngân hàng TMCP Kỹ Thương",
    accountHolder: formData?.accountHolder || "TRUONG KIM NGOC ( KẾ TOÁN )",
    accountNumber: formData?.accountNumber || "2366621152",
    hotline: formData?.hotline || "0347.10.3333",
    transferContent: formData?.transferContent || "VJ372TicketJ0.",
    invoiceNo:
      formData?.invoiceNo ||
      "THANH TOÁN CHẶNG BAY 1 CHIỀU HCM - CHU LAI / 1 VÉ",
    bookingDate: formData?.bookingDate || "18 tháng 7, 2026",
    status: formData?.status || "10 phút trước",
    amount: formData?.amount || 1200000,
  };

  const { accounts } = useBankAccounts();
  const activeBank = accounts.find((bank) => bank.isActive === true);
  const qrValue = activeBank
    ? `https://img.vietqr.io/image/${activeBank.bankName}-${activeBank.accountNumber}-qr_only.png?accountName=${encodeURIComponent(
        activeBank.accountHolder,
      )}`
    : "";

  return (
    <div className="w-full flex flex-col items-center justify-center p-4 font-sans">
      <div
        id="payment-invoice"
        className="
          relative
          w-[900px]
          h-[665px]
          bg-[#edf7fc]
          text-slate-900
          border border-red-500
          shadow-md
          overflow-hidden
          box-border
          print:shadow-none
        "
      >
        {/* ================= NỀN MÁY BAY ================= */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <img
            src="/images/may-bay-vector-png-09.png"
            alt=""
            className="
              absolute
              left-[24%]
              top-[14%]
              w-[76%]
              max-w-none
              opacity-[0.25]
              object-contain
            "
          />
        </div>

        {/* ================= HEADER ================= */}
        <div
          className="
            relative
            z-10
            h-[85px]
            border-b-2
            border-slate-400
            px-8
            flex
            items-center
          "
        >
          {/* LOGO TRÁI */}
          <div className="w-[30%] flex items-center">
            <Logo />
          </div>

          {/* TIÊU ĐỀ GIỮA */}
          <div className="flex-1 text-center">
            <h1 className="text-[28px] font-black tracking-wide text-slate-900 uppercase">
              HÓA ĐƠN THANH TOÁN
            </h1>
          </div>

          {/* CÂN BẰNG BÊN PHẢI */}
          <div className="w-[20%]" />
        </div>

        {/* ================= NỘI DUNG CHÍNH ================= */}
        <div className="relative z-10 px-8 pt-4">
          {/* ================= CON DẤU MÀU ĐỎ (VỊ TRÍ CHUẨN) ================= */}
          <div className="absolute right-[80px] top-[-68px] w-[140px] h-[140px] rotate-[-12deg] pointer-events-none z-20">
            <Image
              src="/images/company-stamp.png"
              width={140}
              height={140}
              alt="Red Stamp"
            />
          </div>

          {/* GRID 2 CỘT (TRÁI & PHẢI) */}
          <div className="grid grid-cols-[50%_50%]">
            {/* ================= CỘT TRÁI ================= */}
            <div className="pr-4 space-y-5.5">
              {/* KHÁCH HÀNG */}
              <div>
                <div className="text-[12px] font-semibold text-slate-800">
                  Khách Hàng :
                </div>
                <div className="text-[17px] font-black text-slate-900 uppercase tracking-tight">
                  {data.customerName} - {data.customerPhone}
                </div>
                <div className="text-[11px] font-semibold text-slate-700 uppercase mt-0.5">
                  {data.flightRoute}
                </div>
              </div>

              {/* NGÂN HÀNG */}
              <div>
                <div className="text-[13px] font-bold text-slate-900">
                  Ngân Hàng :
                </div>
                <div className="text-[13.5px] font-normal text-slate-800 leading-tight mt-0.5">
                  {activeBank?.bankName}
                </div>
              </div>

              {/* CHỦ TÀI KHOẢN */}
              <div>
                <div className="text-[13px] font-bold text-slate-900">
                  Chủ Tài Khoản:
                </div>
                <div className="text-[13.5px] font-semibold text-slate-900 uppercase mt-0.5">
                  {activeBank?.accountHolder}
                </div>
              </div>

              {/* SỐ TÀI KHOẢN */}
              <div>
                <div className="text-[13px] font-bold text-slate-900">
                  Số Tài Khoản:
                </div>
                <div className="text-[14px] font-medium text-slate-900 mt-0.5">
                  {activeBank?.accountNumber}
                </div>
              </div>

              {/* HOTLINE */}
              <div>
                <div className="text-[13px] font-bold text-slate-900">
                  Hotline:
                </div>
                <div className="text-[14px] font-medium text-slate-900 mt-0.5">
                  {data.hotline}
                </div>
              </div>

              {/* NỘI DUNG CHUYỂN KHOẢN */}
              <div>
                <div className="text-[13px] font-bold text-slate-900">
                  Nội Dung Chuyển Khoản :
                </div>
                <div className="text-[14px] font-bold text-slate-900 mt-0.5">
                  {data.transferContent}
                </div>
              </div>
            </div>

            {/* ================= CỘT PHẢI ================= */}
            <div className="pl-6">
              {/* THÔNG TIN HÓA ĐƠN / NGÀY / GIỜ */}
              <div className="text-[11.5px] leading-[20px] text-slate-900 space-y-0.5">
                <div className="flex">
                  <span className="font-bold whitespace-nowrap">
                    Hóa đơn số:
                  </span>
                  <span className="ml-1 font-bold uppercase">
                    {data.invoiceNo}
                  </span>
                </div>
                <div className="flex">
                  <span className="font-semibold text-slate-700 whitespace-nowrap">
                    Ngày đặt vé:
                  </span>
                  <span className="ml-10 font-medium">{data.bookingDate}</span>
                </div>
                <div className="flex">
                  <span className="font-semibold text-slate-700 whitespace-nowrap">
                    Thời gian thanh toán:
                  </span>
                  <span className="ml-2 font-medium">{data.status}</span>
                </div>
              </div>

              {/* ================= MÃ QR ================= */}
              <div className="mt-20 flex flex-col items-center justify-center pr-12">
                <div className="p-1">
                  {qrValue && (
                    <img
                      src={qrValue}
                      alt="QR thanh toán"
                      className="block w-60 h-50 object-contain"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* ================= CHÚ Ý MÀU ĐỎ (GÓC DƯỚI TRÁI) ================= */}
          <div className="absolute left-8 -bottom-[55px] w-[280px]">
            <p className="text-[11.5px] leading-[15px] italic font-bold text-red-500">
              Chú ý: Thanh toán tiền vé ghi đúng nội dung, ký tự chuyển khoản hệ
              thống cung cấp tránh xảy ra lỗi
            </p>
          </div>

          {/* ================= CẢM ƠN QUÝ KHÁCH (DƯỚI CÙNG TRÁI) ================= */}
          <div className="absolute left-15 -bottom-[110px]">
            <div className="text-[17px] font-black tracking-wide uppercase text-slate-900">
              CẢM ƠN QUÝ KHÁCH
            </div>
          </div>

          {/* ================= KHUNG TỔNG TIỀN (DƯỚI CÙNG PHẢI) ================= */}
          <div
            className="
              absolute
              right-8
              -bottom-[120px]
              w-[530px]
              h-[58px]
              border-[1.5px]
              border-slate-900
              bg-[#edf7fc]
              flex
              items-center
              justify-between
              px-5
            "
          >
            <span className="text-[14px] font-semibold text-slate-900">
              Quý khách vui lòng thanh toán số tiền :
            </span>
            <span className="text-[28px] font-black text-red-600 whitespace-nowrap tracking-tight">
              {formatAmount ? formatAmount(data.amount) : "1.200.000"} VNĐ
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
