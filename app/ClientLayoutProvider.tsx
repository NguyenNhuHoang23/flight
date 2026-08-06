"use client";

import Header from "@/components/layout/Header";
import { usePathname } from "next/navigation";
import React from "react";
import { PhoneCall, Mail, MapPin, ShieldCheck, CreditCard, Clock } from "lucide-react";
import Fooder from "@/components/layout/Fooder";

interface ClientLayoutProviderProps {
  children: React.ReactNode;
}

export default function ClientLayoutProvider({
  children,
}: ClientLayoutProviderProps) {
  const pathname = usePathname();

  const isAdminRoute = pathname?.startsWith("/admin");

  if (isAdminRoute) {
    return <>{children}</>;
  }

  const PHONE_NUMBER = "0123456789";
  const ZALO_URL = "https://zalo.me/0123456789";
  const FB_URL = "https://m.me/yourpage";

  return (
    <div className="w-full min-h-screen bg-[#f3f3f3] text-gray-800 font-sans text-xs md:text-sm relative flex flex-col justify-between">
      <div>
        <Header />
        <main>{children}</main>
      </div>
   <Fooder/>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a
          href={ZALO_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat Zalo CSKH"
          className="relative flex items-center justify-center w-12 h-12 bg-[#0068FF] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
        >
          <span className="absolute -top-1.5 -right-1 bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow border border-white leading-none">
            CSKH
          </span>
          <span className="font-bold text-xs tracking-tighter">Zalo</span>
        </a>

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

        <a
          href={`tel:${PHONE_NUMBER}`}
          aria-label="Gọi tổng đài CSKH"
          className="relative flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
        >
          <span className="absolute -top-1.5 -right-1 bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow border border-white leading-none">
            CSKH
          </span>
          <PhoneCall className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}