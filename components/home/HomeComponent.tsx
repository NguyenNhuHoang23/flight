"use client";

import React from "react";
import Image from "next/image";
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

interface FlightBookingUIProps {
  /** Đường dẫn ảnh banner (mặc định sẽ dùng hình mẫu hoặc đường dẫn truyền vào) */
  bannerSrc?: string;
}

export default function FlightBookingUI({
  bannerSrc = "/images/banner.jpg", // Thay đường dẫn ảnh của bạn ở đây
}: FlightBookingUIProps) {
  return (
    <>
      {/* 1. Main Search Form Area */}
      <main className="max-w-6xl mx-auto px-4 md:px-16 py-2 grid grid-cols-1 lg:grid-cols-12 gap-6 relative">
        {/* Left Flight Search Box */}
        <FormBook />

        {/* Right Section: Banner & News Feed */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
     {/* BANNER NỀN BẰNG NEXT/IMAGE */}
{/* BANNER NỀN BẰNG NEXT/IMAGE */}
<div className="relative rounded overflow-hidden border border-gray-200 shadow-sm h-[180px] w-full bg-gray-100 flex items-center justify-center">
  {/* Ảnh banner */}
  <Image
    src={bannerSrc}
    alt="Banner Sun PhuQuoc Airways"
    fill
    priority
    className="object-contain object-center"
    sizes="(max-width: 1024px) 100vw, 40vw"
  />

  {/* Các chấm slider/dot indicator */}
  <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-1.5 z-10">
    <span className="w-2 h-2 rounded-full bg-white opacity-60 shadow-sm"></span>
    <span className="w-2 h-2 rounded-full bg-white opacity-60 shadow-sm"></span>
    <span className="w-2 h-2 rounded-full bg-white opacity-60 shadow-sm"></span>
    <span className="w-2 h-2 rounded-full bg-white shadow-sm"></span>
    <span className="w-2 h-2 rounded-full bg-white opacity-60 shadow-sm"></span>
  </div>
</div>

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

          <div className="space-y-3 text-xs">
            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center space-x-2">
                <RefreshCw className="w-3.5 h-3.5 text-gray-400 animate-spin" />
                <div>
                  <span className="text-gray-600 block">
                    Khách mới đặt 1 vé
                  </span>
                  <div className="flex items-center space-x-1 text-gray-500">
                    <span>Đi</span>
                    <span className="italic font-semibold text-blue-800">
                      Vietravel Airlines
                    </span>
                    <span>29/07</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-medium text-gray-700">
                  từ TP Hồ Chí Minh ➔ Hà Nội
                </div>
                <div className="text-red-600 font-bold text-xs">
                  Giá vé: 748,000<sup>đ</sup>
                  <a
                    href="#"
                    className="text-blue-500 font-normal ml-1 underline"
                  >
                    chi tiết
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center space-x-2">
                <RefreshCw className="w-3.5 h-3.5 text-gray-400 animate-spin" />
                <div>
                  <span className="text-gray-600 block">
                    Khách mới đặt 1 vé
                  </span>
                  <div className="flex items-center space-x-1 text-gray-500">
                    <span>Đi</span>
                    <span className="italic font-bold text-red-600">
                      VietJet.air
                    </span>
                    <span>30/01</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-medium text-gray-700">
                  từ TP Hồ Chí Minh ➔ Hà Nội
                </div>
                <div className="text-red-600 font-bold text-xs">
                  Giá vé: 1,790,000<sup>đ</sup>
                  <a
                    href="#"
                    className="text-blue-500 font-normal ml-1 underline"
                  >
                    chi tiết
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center space-x-2">
                <RefreshCw className="w-3.5 h-3.5 text-gray-400 animate-spin" />
                <div>
                  <span className="text-gray-600 block">
                    Khách mới đặt 1 vé
                  </span>
                  <div className="flex items-center space-x-1 text-gray-500">
                    <span>Đi</span>
                    <span className="italic font-bold text-red-600">
                      VietJet.air
                    </span>
                    <span>26/08</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-medium text-gray-700">
                  từ Hải Phòng ➔ Đà Lạt
                </div>
                <div className="text-red-600 font-bold text-xs">
                  Giá vé: 1,010,000<sup>đ</sup>
                  <a
                    href="#"
                    className="text-blue-500 font-normal ml-1 underline"
                  >
                    chi tiết
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <RefreshCw className="w-3.5 h-3.5 text-gray-400 animate-spin" />
                <div>
                  <span className="text-gray-600 block">
                    Khách mới đặt 1 vé
                  </span>
                  <div className="flex items-center space-x-1 text-gray-500">
                    <span>Đi</span>
                    <span className="italic font-semibold text-blue-800">
                      Vietravel Airlines
                    </span>
                    <span>29/07</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-medium text-gray-700">
                  từ Phú Quốc ➔ TP Hồ Chí Minh
                </div>
                <div className="text-red-600 font-bold text-xs">
                  Giá vé: 178,000<sup>đ</sup>
                  <a
                    href="#"
                    className="text-blue-500 font-normal ml-1 underline"
                  >
                    chi tiết
                  </a>
                </div>
              </div>
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
                  <div className="text-blue-600">website: www.senbay.vn</div>
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
                    0868.003.443
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
                  <div className="text-gray-700">
                    97 Trần Quang Diệu, Nhiêu Lộc, Hồ Chí Minh
                  </div>
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