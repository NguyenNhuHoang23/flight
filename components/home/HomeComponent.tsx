"use client";

import React, { useMemo } from "react";
import {
  Phone,
  List,
  Home,
  MessageSquare,
  MapPin,
  Monitor,
  RefreshCw,
} from "lucide-react";
import FormBook from "./FormBook";
import BannerSlider from "./BannerSlider";
import { useGetData } from "@/context/GetContext";

interface FlightBookingUIProps {
  /** Đường dẫn ảnh banner (mặc định sẽ dùng hình mẫu hoặc đường dẫn truyền vào) */
  bannerSrc?: string;
}

type AirlineTone = "blue" | "red" | "green";

interface RecentBooking {
  airline: string;
  tone: AirlineTone;
  route: string;
  price: string;
  dateOffset: number;
}

const RECENT_BOOKINGS: RecentBooking[] = [
  {
    airline: "Vietravel Airlines",
    tone: "blue",
    route: "từ TP Hồ Chí Minh ➔ Hà Nội",
    price: "748,000",
    dateOffset: 0,
  },
  {
    airline: "VietJet.air",
    tone: "red",
    route: "từ TP Hồ Chí Minh ➔ Hà Nội",
    price: "1,790,000",
    dateOffset: 1,
  },
  {
    airline: "VietJet.air",
    tone: "red",
    route: "từ Hải Phòng ➔ Đà Lạt",
    price: "1,010,000",
    dateOffset: 1,
  },
  {
    airline: "Vietravel Airlines",
    tone: "blue",
    route: "từ Phú Quốc ➔ TP Hồ Chí Minh",
    price: "178,000",
    dateOffset: 2,
  },
  {
    airline: "Vietnam Airlines",
    tone: "green",
    route: "từ Đà Nẵng ➔ Hà Nội",
    price: "1,250,000",
    dateOffset: 0,
  },
  {
    airline: "Bamboo Airways",
    tone: "green",
    route: "từ Hà Nội ➔ Nha Trang",
    price: "980,000",
    dateOffset: 2,
  },
  {
    airline: "VietJet.air",
    tone: "red",
    route: "từ Cần Thơ ➔ Đà Nẵng",
    price: "890,000",
    dateOffset: 3,
  },
  {
    airline: "Vietnam Airlines",
    tone: "green",
    route: "từ TP Hồ Chí Minh ➔ Phú Quốc",
    price: "560,000",
    dateOffset: 1,
  },
  {
    airline: "Vietravel Airlines",
    tone: "blue",
    route: "từ Vinh ➔ TP Hồ Chí Minh",
    price: "1,120,000",
    dateOffset: 3,
  },
  {
    airline: "Bamboo Airways",
    tone: "green",
    route: "từ Huế ➔ Hà Nội",
    price: "720,000",
    dateOffset: 0,
  },
];

const airlineToneClass: Record<AirlineTone, string> = {
  blue: "italic font-semibold text-blue-800",
  red: "italic font-bold text-red-600",
  green: "italic font-semibold text-emerald-700",
};

function formatBookingDate(offset: number) {
  const date = new Date();
  date.setDate(date.getDate() + offset);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");

  return `${day}/${month}`;
}

function BookingRow({ booking }: { booking: RecentBooking }) {
  return (
    <div className="flex items-center justify-between border-b border-gray-100 pb-2.5 pt-0.5">
      <div className="flex items-center space-x-2 min-w-0">
        <RefreshCw className="w-3.5 h-3.5 text-gray-400 animate-spin shrink-0" />
        <div className="min-w-0">
          <span className="text-gray-600 block">Khách mới đặt 1 vé</span>
          <div className="flex items-center space-x-1 text-gray-500 flex-wrap">
            <span>Đi</span>
            <span className={airlineToneClass[booking.tone]}>
              {booking.airline}
            </span>
            <span>{formatBookingDate(booking.dateOffset)}</span>
          </div>
        </div>
      </div>
      <div className="text-right shrink-0 pl-3">
        <div className="font-medium text-gray-700">{booking.route}</div>
        <div className="text-red-600 font-bold text-xs">
          Giá vé: {booking.price}
          <sup>đ</sup>
          <a href="#" className="text-blue-500 font-normal ml-1 underline">
            chi tiết
          </a>
        </div>
      </div>
    </div>
  );
}

export default function FlightBookingUI({
  bannerSrc = "/images/banner.jpg", // Thay đường dẫn ảnh của bạn ở đây
}: FlightBookingUIProps) {
  const { info } = useGetData();

  const scrollingBookings = useMemo(
    () => [...RECENT_BOOKINGS, ...RECENT_BOOKINGS],
    [],
  );

  return (
    <>
      {/* 1. Main Search Form Area */}
      <main className="max-w-6xl mx-auto px-4 md:px-16 py-2 grid grid-cols-1 lg:grid-cols-12 gap-6 relative">
        {/* Left Flight Search Box */}
        <FormBook />

        {/* Right Section: Banner & News Feed */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          {/* BANNER NỀN BẰNG NEXT/IMAGE */}
          <BannerSlider />

          {/* Tin mới cập nhật */}
          <div className="bg-white p-3 rounded border border-gray-200">
            <div className="flex items-center space-x-2 border-b pb-2 mb-2">
              <List className="w-4 h-4 text-blue-900" />
              <h3 className="font-bold text-blue-900 uppercase text-xs">
                Tin mới cập nhật
              </h3>
            </div>

            <ul className="space-y-2 text-xs">
              <li className="flex items-start space-x-1.5 text-blue-700 hover:underline cursor-pointer">
                <span className="text-orange-500 font-bold">::</span>
                <span>
                  Vé máy bay Nha Trang đi Vinh Vietnam Airlines - Lịch trình và
                  giá vé
                </span>
              </li>
              <li className="flex items-start space-x-1.5 text-blue-700 hover:underline cursor-pointer">
                <span className="text-orange-500 font-bold">::</span>
                <span>
                  Vé máy bay Tuy Hòa đi TP. Hồ Chí Minh giá rẻ hôm nay cùng
                  Senbay
                </span>
              </li>
              <li className="flex items-start space-x-1.5 text-blue-700 hover:underline cursor-pointer">
                <span className="text-orange-500 font-bold">::</span>
                <span>
                  Vé máy bay Tuy Hòa đi Hà Nội giá rẻ hôm nay cùng Senbay
                </span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      {/* 2. Bottom Section: Recent Orders & Contact */}
      <section className="max-w-6xl mx-auto px-4 md:px-16 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6 border-t mt-4">
        {/* Recent Bookings */}
        <div className="lg:col-span-6">
          <h3 className="font-bold text-gray-800 text-xs md:text-sm mb-4 uppercase tracking-wide">
            VÉ MÁY BAY GIÁ RẺ KHÁCH MỚI ĐẶT
          </h3>

          <div className="relative h-[220px] overflow-hidden text-xs group">
            <div className="flex flex-col gap-3 animate-booking-scroll group-hover:[animation-play-state:paused]">
              {scrollingBookings.map((booking, index) => (
                <BookingRow
                  key={`${booking.airline}-${booking.route}-${index}`}
                  booking={booking}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Payment & Support Info */}
        <div className="lg:col-span-6">
          <h3 className="font-bold text-gray-800 text-xs md:text-sm mb-4 uppercase tracking-wide">
            ĐẶT VÉ MÁY BAY VÀ THANH TOÁN
          </h3>

          <div className="border rounded bg-gray-50 divide-y divide-gray-200 text-xs">
            <div className="p-3 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="p-2 border border-green-600 rounded-full text-green-600">
                  <Monitor className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium text-gray-700">
                    Đặt vé trực tuyến
                  </div>
                  <div className="text-blue-600">website: {info?.website}</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 border border-red-500 rounded-full text-red-500">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium text-gray-700">
                    Tổng đài hỗ trợ
                  </div>
                  <div className="text-blue-600 font-bold text-sm">
                    {info?.hotline}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="p-2 border border-blue-500 rounded-full text-blue-500">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium text-gray-700 mb-1">
                    Hỗ trợ qua chat
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-[10px] font-bold">
                      m
                    </span>
                    <span className="w-5 h-5 bg-purple-600 text-white rounded-full flex items-center justify-center text-[10px] font-bold">
                      V
                    </span>
                    <span className="w-5 h-5 bg-blue-400 text-white rounded-full flex items-center justify-center text-[10px] font-bold">
                      Zalo
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 border border-red-500 rounded-full text-red-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-gray-700">{info?.address}</div>
                </div>
              </div>
            </div>

            <div className="p-3 flex items-start space-x-3">
              <div className="p-2 border border-orange-500 rounded-full text-orange-500">
                <Home className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-gray-800">
                  Thanh toán trực tiếp tại văn phòng
                </div>
                <div className="text-gray-600 mt-0.5">
                  Quý khách có thể tới văn phòng của Senbay để mua vé và Thanh
                  toán
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
