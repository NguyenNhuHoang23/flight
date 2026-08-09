import { Plane } from "lucide-react";

export function Logo() {
  return (
    <a href="#" className="flex items-center space-x-1.5 group">
      {/* Icon Badge thu nhỏ */}
      <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#d90429] to-[#ff4d6d] flex items-center justify-center shadow-sm shadow-red-200 group-hover:scale-105 transition-transform">
        <Plane className="w-3.5 h-3.5 text-white -rotate-45" />
      </div>

      {/* Brand Name thu nhỏ */}
      <div className="flex flex-col">
        <span className="text-sm font-black tracking-tight leading-none text-gray-900">
          Booking<span className="text-[#d90429]">vemaybay</span>
        </span>
        <span className="text-[8px] font-semibold tracking-wider text-gray-400 uppercase mt-0.5">
          Bay dễ dàng • Giá cực rẻ
        </span>
      </div>
    </a>
  );
}
