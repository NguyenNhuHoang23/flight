"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const BANNERS = [
  "/images/banner/photo1.jpg",
  "/images/banner/photo2.jpg",
  "/images/banner/photo3.jpg",
];

export default function BannerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Tự động chuyển slide sau mỗi 4 giây (Tạm dừng khi rê chuột)
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % BANNERS.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isHovered]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? BANNERS.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % BANNERS.length);
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded overflow-hidden border border-gray-200 shadow-sm h-[180px] w-full bg-gray-100"
    >
      {/* Khung chứa danh sách ảnh trượt ngang */}
      <div
        className="flex h-full w-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {BANNERS.map((banner, index) => (
          <div
            key={index}
            className="relative h-full w-full flex-shrink-0 overflow-hidden"
          >
            {/* Layer 1: Ảnh nền mờ để lấp đầy khoảng trống */}
            <Image
              src={banner}
              alt=""
              fill
              className="object-cover blur-md scale-110 opacity-40"
            />

            {/* Layer 2: Ảnh chính hiển thị trọn vẹn */}
            <Image
              src={banner}
              alt={`Banner Sun PhuQuoc Airways ${index + 1}`}
              fill
              priority={index === 0}
              className="object-contain object-center relative z-10"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        ))}
      </div>

      {/* Nút sang trái */}
      <button
        onClick={handlePrev}
        aria-label="Previous Slide"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-black/30 hover:bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Nút sang phải */}
      <button
        onClick={handleNext}
        aria-label="Next Slide"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-black/30 hover:bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dấu chấm indicator */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-1.5 z-10">
        {BANNERS.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 shadow-sm ${
              currentIndex === index
                ? "w-5 bg-white"
                : "w-2 bg-white/60 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
