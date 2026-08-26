import { useQuery } from "@tanstack/react-query";

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
      note?: string | null;
    }>;
  };
}

export interface AirlineSaleConfig {
  id: string;
  name: string;
  code: string;
  discountPercent: number;
  isCustom: boolean;
  note: string;
}

export interface AirlineDiscountResult {
  defaultDiscount: number;
  airlines: AirlineSaleConfig[];
}

const emptyDiscountResult = (): AirlineDiscountResult => ({
  defaultDiscount: 0,
  airlines: [],
});

const fetchAirlineDiscounts = async (): Promise<AirlineDiscountResult> => {
  const response = await fetch("/api/admin/sale", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  if (response.status === 401) {
    localStorage.removeItem("admin-auth");
    window.location.href = "/admin/login";
    return emptyDiscountResult();
  }

  const result: AirlineDiscountResponse = await response.json();

  console.log("GET airline discounts:", result);

  if (!response.ok || !result.success) {
    throw new Error(result?.message || "Không thể lấy cấu hình giảm giá");
  }

  const defaultDiscount = Number(result.data?.default_discount_rate ?? 0);
  const mappedAirlines: AirlineSaleConfig[] = (result.data?.airlines ?? []).map(
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
    defaultDiscount,
    airlines: mappedAirlines,
  };
};

export const useAirlineDiscounts = () => {
  return useQuery({
    queryKey: ["airlineDiscounts"],
    queryFn: fetchAirlineDiscounts,
  });
};
