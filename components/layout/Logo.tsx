import { Plane } from "lucide-react";

export function Logo() {
  return (
    <a href="#" className="flex items-center space-x-2 group ">
      {/* Icon Badge với hiệu ứng Gradient */}
      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#d90429] to-[#ff4d6d] flex items-center justify-center shadow-md shadow-red-200 group-hover:scale-105 transition-transform">
        <Plane className="w-5 h-5 text-white -rotate-45" />
      </div>

      {/* Brand Name */}
      <div className="flex flex-col">
        <span className="text-xl font-black tracking-tight leading-none text-gray-900">
          Booking<span className="text-[#d90429]">vemaybay</span>
        </span>
        <span className="text-[10px] font-semibold tracking-wider text-gray-400 uppercase">
          Bay dễ dàng • Giá cực rẻ
        </span>
      </div>
    </a>
  );
}
