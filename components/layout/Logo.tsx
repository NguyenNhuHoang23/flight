import { Plane } from "lucide-react";
import Image from "next/image";

export function Logo() {
  return (
    <a href="#" className="flex items-center space-x-2 group ">
      {/* Icon Badge với hiệu ứng Gradient */}
      <Image src="/logo.jpg" alt="Logo" width={40} height={40} />

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
