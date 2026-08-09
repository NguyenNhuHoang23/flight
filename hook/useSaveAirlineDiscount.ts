import { useState } from "react";

interface AirlineSaleConfig {
  id: string;
  name: string;
  code: string;
  discountPercent: number;
  isCustom: boolean;
}

interface SaveAirlineDiscountPayload {
  default_discount_rate: number;
  airlines: AirlineSaleConfig[];
}

interface SaveAirlineDiscountResponse {
  success: boolean;
  message?: string;
  data?: unknown;
}

export function useSaveAirlineDiscount() {
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const saveAirlineDiscounts = async (
    payload: SaveAirlineDiscountPayload,
    accessToken: string | null,
  ): Promise<SaveAirlineDiscountResponse> => {
    try {
      setIsSaving(true);
      setError(null);

      if (!accessToken) {
        throw new Error("Phiên đăng nhập đã hết hạn");
      }

      const response = await fetch("/api/admin/sale", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
          Accept: "application/json",
        },
        body: JSON.stringify({
          default_discount_rate: payload.default_discount_rate,

          airlines: payload.airlines.map((airline) => ({
            id: Number(airline.id),
            airline_code: airline.code,
            airline_name: airline.name,
            discount_rate: airline.discountPercent,
            is_custom_enabled: airline.isCustom,
          })),
        }),
      });

      const result: SaveAirlineDiscountResponse = await response.json();

      console.log("SAVE AIRLINE DISCOUNT RESULT:", result);

      if (!response.ok || !result.success) {
        throw new Error(result?.message || "Không thể lưu cấu hình giảm giá");
      }

      return result;
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Có lỗi xảy ra khi lưu cấu hình";

      console.error("Save airline discounts error:", error);

      setError(message);

      throw error;
    } finally {
      setIsSaving(false);
    }
  };

  return {
    saveAirlineDiscounts,
    isSaving,
    error,
  };
}
