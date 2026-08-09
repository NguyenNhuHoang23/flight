import { useQuery } from "@tanstack/react-query";

// Khai báo kiểu dữ liệu trả về từ API
interface AirlineDiscountResponse {
  success: boolean;
  message?: string;
  data?: {
    default_discount_rate?: number;
    airlines?: Array<{
      id: string | number;
      airline_name: string;
      airline_code: string;
      discount_rate?: number;
      is_custom_enabled?: boolean;
    }>;
  };
}

export interface AirlineSaleConfig {
  id: string;
  name: string;
  code: string;
  discountPercent: number;
  isCustom: boolean;
}

// Hàm fetch API độc lập
const fetchAirlineDiscounts = async () => {
  const response = await fetch("/api/admin/sale", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  const result: AirlineDiscountResponse = await response.json();

  console.log("GET airline discounts:", result);

  if (!response.ok || !result.success) {
    throw new Error(result?.message || "Không thể lấy cấu hình giảm giá");
  }

  // Map dữ liệu ngay tại hàm fetch
  const defaultDiscount = Number(result.data?.default_discount_rate ?? 0);
  const mappedAirlines: AirlineSaleConfig[] = (result.data?.airlines ?? []).map(
    (airline) => ({
      id: String(airline.id),
      name: airline.airline_name,
      code: airline.airline_code,
      discountPercent: Number(airline.discount_rate ?? 0),
      isCustom: Boolean(airline.is_custom_enabled),
    }),
  );

  return {
    defaultDiscount,
    airlines: mappedAirlines,
  };
};

// Custom Hook chính
export const useAirlineDiscounts = () => {
  return useQuery({
    queryKey: ["airlineDiscounts"],
    queryFn: fetchAirlineDiscounts,
  });
};
