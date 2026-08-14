import { Plane } from "lucide-react";
import Image from "next/image";

export function Logo() {
  return (
    <a href="#" className="flex items-center space-x-1.5 group">
      <Image src="/logo.jpg" alt="Logo" width={35} height={35} />

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
