import { AirlineInfo } from "./flight-types";

// 1. Ép kiểu Record<string, AirlineInfo> để tránh lỗi TypeScript khi truy cập dynamic key
export const AIRLINE_INFO: Record<string, AirlineInfo> = {
  VN: {
    name: "Vietnam Airlines",
    image: "/images/airlines/vn.png",
    color: "text-[#006838]",
    bg: "bg-blue-50",
  },
  VJ: {
    name: "VietjetAir",
    image: "/images/airlines/vj.png",
    color: "text-red-600",
    bg: "bg-red-50",
  },
  VU: {
    name: "Vietravel Airlines",
    image: "/images/airlines/vu.png",
    color: "text-[#006838]",
    bg: "bg-blue-50",
  },
  QH: {
    // Sửa mã IATA từ BB -> QH cho Bamboo Airways
    name: "Bamboo Airways",
    image: "/images/airlines/qh.png",
    color: "text-[#ff6600]",
    bg: "bg-orange-50",
  },
  "9G": {
    // Thêm Pacific Airlines nếu hệ thống có trả về
    name: "Pacific Airlines",
    image: "/images/airlines/sun.jpg",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
};

export const formatPrice = (price?: number) => {
  if (price === undefined || price === null) return "0";

  return price.toLocaleString("vi-VN");
};

export const parseTime = (dateStr?: string) => {
  if (!dateStr || dateStr.length < 13) {
    return "--:--";
  }

  const timePart = dateStr.split(" ")[1];

  if (!timePart || timePart.length < 4) {
    return "--:--";
  }

  return `${timePart.slice(0, 2)}:${timePart.slice(2, 4)}`;
};

export const parseFullDate = (dateStr?: string) => {
  if (!dateStr || dateStr.length < 8) {
    return "";
  }

  const day = dateStr.slice(0, 2);
  const month = dateStr.slice(2, 4);
  const year = dateStr.slice(4, 8);

  const dateObj = new Date(`${year}-${month}-${day}`);

  const daysOfWeek = [
    "Chủ Nhật",
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy",
  ];

  const dayName = daysOfWeek[dateObj.getDay()] || "";

  return `${dayName} ${day}/${month}`;
};

export const getPaxName = (type: string) => {
  switch (type) {
    case "ADT":
      return "Người lớn";
    case "CHD":
      return "Trẻ em";
    case "INF":
      return "Em bé";
    default:
      return type;
  }
};
