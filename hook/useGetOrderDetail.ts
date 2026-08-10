import { useQuery } from "@tanstack/react-query";

export interface OrderPassenger {
  id: number;
  order_id: number;
  full_name: string;
  passenger_type: string;
  document_type: string | null;
  document_number: string | null;
  created_at: string;
  updated_at: string;
}

export interface OrderFlight {
  id: number;
  order_id: number;
  trip_type: "outbound" | "return";
  airline_name: string;
  airline_code: string | null;
  flight_number: string;
  departure_airport: string;
  arrival_airport: string;
  departure_at: string;
  arrival_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface OrderDetail {
  id: number;
  order_code: string;
  status: string;
  booking_at: string;
  contact_name: string;
  contact_phone: string;
  contact_email: string | null;
  total_amount: string;
  payment_method: string | null;
  payment_bill_image: string | null;
  transfer_content: string | null;
  created_at: string;
  updated_at: string;

  passengers: OrderPassenger[];
  flights: OrderFlight[];
}

interface OrderDetailResponse {
  success: boolean;
  message: string;
  data: OrderDetail;
}

const getOrderDetail = async (
  token: string,
  orderId: string | number,
): Promise<OrderDetailResponse> => {
  const response = await fetch(
    `/api/admin/order/${encodeURIComponent(String(orderId))}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    },
  );

  const data = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(
      data.message || "Không thể lấy chi tiết đơn hàng",
    );
  }

  return data;
};

export const useGetOrderDetail = (
  token: string,
  orderId: string | number | undefined,
) => {
  return useQuery({
    queryKey: ["order-detail", orderId],
    queryFn: () => getOrderDetail(token, orderId!),
    enabled: !!orderId,
    staleTime: 30 * 1000,
  });
};