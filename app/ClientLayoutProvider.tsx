"use client";

import Header from "@/components/layout/Header";
import { usePathname } from "next/navigation";
import React, { useRef, useState } from "react";
import { PhoneCall, Copy, Check, X, Download } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import Fooder from "@/components/layout/Fooder";
import { toast, Toaster } from "sonner";
import ReactQueryProvider from "./ReactQueryProvider";
import { useGetData } from "@/context/GetContext";

interface ClientLayoutProviderProps {
  children: React.ReactNode;
}

type TaggedContactAction = {
  mode: "qr" | "link";
  url: string;
};

function parseTaggedContactUrl(
  value?: string | null,
): TaggedContactAction | null {
  const raw = value?.trim();
  if (!raw) return null;

  const hasQr = /\{qr\}/i.test(raw);
  const hasLink = /\{link\}/i.test(raw);
  const url = raw
    .replace(/\{qr\}/gi, "")
    .replace(/\{link\}/gi, "")
    .trim();

  if (!url) return null;

  if (hasQr) return { mode: "qr", url };
  if (hasLink) return { mode: "link", url };

  return { mode: "qr", url };
}

export default function ClientLayoutProvider({
  children,
}: ClientLayoutProviderProps) {
  const pathname = usePathname();

  const isAdminRoute = pathname?.startsWith("/admin");
  const { info } = useGetData();
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
  const [isZaloModalOpen, setIsZaloModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isSavingQr, setIsSavingQr] = useState(false);
  const zaloQrRef = useRef<HTMLDivElement>(null);

  const handleSaveZaloQr = () => {
    const svg = zaloQrRef.current?.querySelector("svg");
    if (!svg) {
      toast.error("Không thể lưu mã QR. Vui lòng thử lại.");
      return;
    }

    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svg);
    const svgBlob = new Blob([svgString], {
      type: "image/svg+xml;charset=utf-8",
    });
    const url = URL.createObjectURL(svgBlob);

    setIsSavingQr(true);

    const image = new Image();
    image.onload = () => {
      const padding = 16;
      const canvas = document.createElement("canvas");
      canvas.width = image.width + padding * 2;
      canvas.height = image.height + padding * 2;
      const ctx = canvas.getContext("2d");

      if (!ctx) {
        URL.revokeObjectURL(url);
        setIsSavingQr(false);
        toast.error("Không thể lưu mã QR. Vui lòng thử lại.");
        return;
      }

      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image, padding, padding);

      canvas.toBlob((blob) => {
        URL.revokeObjectURL(url);
        setIsSavingQr(false);

        if (!blob) {
          toast.error("Không thể lưu mã QR. Vui lòng thử lại.");
          return;
        }

        const downloadUrl = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.download = "zalo-cskh-qr.png";
        link.click();
        URL.revokeObjectURL(downloadUrl);
        toast.success("Đã lưu mã QR");
      }, "image/png");
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      setIsSavingQr(false);
      toast.error("Không thể lưu mã QR. Vui lòng thử lại.");
    };
    image.src = url;
  };

  const handleCopyPhone = async () => {
    const phoneNumber = info?.phone || "0123456789";
    try {
      await navigator.clipboard.writeText(phoneNumber);
      setCopied(true);
      toast.success("Đã sao chép số điện thoại");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Không thể sao chép. Vui lòng thử lại.");
    }
  };

  if (isAdminRoute) {
    return (
      <>
        {children}
        <Toaster position="top-right" richColors />
      </>
    );
  }

  const PHONE_NUMBER = info?.phone;
  const zaloAction = parseTaggedContactUrl(info?.zalo);
  const ZALO_URL = zaloAction?.url;
  const FB_URL = info?.fanpage;

  const handleZaloClick = () => {
    if (!zaloAction) return;

    if (zaloAction.mode === "link") {
      window.open(zaloAction.url, "_blank", "noopener,noreferrer");
      return;
    }

    setIsZaloModalOpen(true);
  };

  return (
    <ReactQueryProvider>
      <div className="w-full min-h-screen bg-[#f3f3f3] text-gray-800 font-sans text-xs md:text-sm relative flex flex-col justify-between">
        <div>
          <Header />
          <main>{children}</main>
          <Toaster position="top-right" richColors />
        </div>
        <Fooder />

        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
          {zaloAction && (
          <button
            type="button"
            onClick={handleZaloClick}
            aria-label="Chat Zalo CSKH"
            className="relative flex items-center justify-center w-12 h-12 bg-[#0068FF] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
          >
            <span className="absolute -top-1.5 -right-1 bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow border border-white leading-none">
              CSKH
            </span>
            <span className="font-bold text-xs tracking-tighter">Zalo</span>
          </button>
          )}
          {FB_URL && (
          <a
            href={FB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Messenger CSKH"
            className="relative flex items-center justify-center w-12 h-12 bg-[#0084FF] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
          >
            <span className="absolute -top-1.5 -right-1 bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow border border-white leading-none">
              CSKH
            </span>
            <span className="font-bold text-sm tracking-tighter">FB</span>
          </a>
          )}
          {PHONE_NUMBER && (
          <button
            type="button"
            onClick={() => setIsPhoneModalOpen(true)}
            aria-label="Gọi tổng đài CSKH"
            className="relative flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
          >
            <span className="absolute -top-1.5 -right-1 bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow border border-white leading-none">
              CSKH
            </span>
            <PhoneCall className="w-5 h-5" />
          </button>
          )}
        </div>

        {isZaloModalOpen && zaloAction?.mode === "qr" && ZALO_URL && (
          <div
            className="fixed inset-0 z-60 flex items-center justify-center bg-black/50 p-4"
            onClick={() => setIsZaloModalOpen(false)}
          >
            <div
              className="w-full max-w-sm rounded-xl bg-white shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b px-5 py-4">
                <h2 className="text-base font-bold text-gray-800">
                  Zalo CSKH
                </h2>
                <button
                  type="button"
                  onClick={() => setIsZaloModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                  aria-label="Đóng"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-4 px-5 py-5 text-center">
                <p className="text-sm text-gray-500">
                  Quét mã QR bằng Zalo hoặc Chụp lại QR
                </p>

                <div
                  ref={zaloQrRef}
                  className="mx-auto flex w-fit items-center justify-center rounded-xl border border-gray-200 bg-white p-4"
                >
                  <QRCodeSVG
                    value={ZALO_URL}
                    size={200}
                    level="M"
                    includeMargin={false}
                  />
                </div>
                <p className="text-sm text-gray-500">
                  Chụp lại QR
                </p>
                
              </div>
            </div>
          </div>
        )}

        {isPhoneModalOpen && (
          <div
            className="fixed inset-0 z-60 flex items-center justify-center bg-black/50 p-4"
            onClick={() => setIsPhoneModalOpen(false)}
          >
            <div
              className="w-full max-w-sm rounded-xl bg-white shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b px-5 py-4">
                <h2 className="text-base font-bold text-gray-800">
                  Hotline CSKH
                </h2>
                <button
                  type="button"
                  onClick={() => setIsPhoneModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                  aria-label="Đóng"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-4 px-5 py-5">
                <p className="text-sm text-gray-500">
                  Liên hệ tổng đài chăm sóc khách hàng
                </p>

                <div className="flex items-center justify-between gap-3 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
                  <span className="text-lg font-bold tracking-wide text-gray-900">
                    {PHONE_NUMBER}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-green-500 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-green-600"
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4" />
                        Đã sao chép
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        Sao chép
                      </>
                    )}
                  </button>
                </div>

                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex w-full items-center justify-center gap-2 rounded-lg border border-green-500 bg-white px-4 py-2.5 text-sm font-semibold text-green-600 transition-colors hover:bg-green-50"
                >
                  <PhoneCall className="h-4 w-4" />
                  Gọi ngay
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </ReactQueryProvider>
  );
}
