import { useQuery } from "@tanstack/react-query";

// ======================================================
// API RESPONSE
// ======================================================

export interface AirlineDiscountApiItem {
  id: number;
  airline_code: string;
  airline_name: string;
  discount_rate: number;
  is_custom_enabled: boolean;
  note?: string | null;
  created_at: string;
  updated_at: string;
}

export interface AirlineDiscountResponse {
  success: boolean;
  data: {
    default_discount_rate: number;
    airlines: AirlineDiscountApiItem[];
  };
  message?: string;
}

// ======================================================
// FRONTEND DATA
// ======================================================

export interface AirlineSaleConfig {
  id: string;
  name: string;
  code: string;
  discountPercent: number;
  isCustom: boolean;
  note: string;
}

// ======================================================
// QUERY KEY
// ======================================================

export const AIRLINE_DISCOUNT_QUERY_KEY = ["admin", "airline-discounts"];

// ======================================================
// GET API
// ======================================================

const getAirlineDiscounts = async (): Promise<AirlineDiscountResponse> => {
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

  return result;
};

// ======================================================
// HOOK
// ======================================================

export function useGetAirlineDiscounts() {
  const query = useQuery({
    queryKey: AIRLINE_DISCOUNT_QUERY_KEY,
    queryFn: getAirlineDiscounts,

    // Không tự động gọi lại liên tục khi chuyển tab
    refetchOnWindowFocus: false,

    // Có thể tùy chỉnh nếu cần
    staleTime: 0,
  });

  const defaultDiscount = Number(query.data?.data?.default_discount_rate ?? 0);

  const airlines: AirlineSaleConfig[] = (query.data?.data?.airlines ?? []).map(
    (airline) => ({
      id: String(airline.id),
      name: airline.airline_name,
      code: airline.airline_code,
      discountPercent: Number(airline.discount_rate ?? 0),
      isCustom: Boolean(airline.is_custom_enabled),
      note: airline.note ?? "",
    }),
  );

  return {
    ...query,

    defaultDiscount,
    airlines,

    // Có sẵn:
    // query.refetch()
    refetch: query.refetch,
  };
}
