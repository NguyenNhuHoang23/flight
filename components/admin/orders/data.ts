export type FlightType = "one_way" | "round_trip" | "multi_city";

export type OrderStatus = "pending" | "confirmed" | "cancelled";

export interface Passenger {
  id: number;
  order_id: number;
  full_name: string;
  passenger_type: "adult" | "child" | "infant";
  document_type: string | null;
  document_number: string | null;
  created_at: string;
  updated_at: string;
}

export interface OrderFlight {
  id: number;
  order_id: number;

  // outbound = chiều đi
  // return = chiều về
  trip_type: "outbound" | "return";

  airline_name: string;
  airline_code: string | null;
  flight_number: string;

  departure_airport: string;
  arrival_airport: string;

  departure_at: string | null;
  arrival_at: string | null;

  created_at: string;
  updated_at: string;
}

export interface Order {
  id: string;

  // Mã đơn hàng thực tế từ API
  orderCode: string;

  status: OrderStatus;

  // Thời gian đặt đơn
  bookingAt: string;

  // Thông tin người liên hệ
  customerName: string;
  customerPhone: string;
  customerEmail: string | null;

  // Thanh toán
  totalAmount: number;
  paymentMethod: string | null;
  paymentProofUrl?: string | null;
  transferContent: string | null;

  // Hành khách
  passengers: Passenger[];

  // Chuyến bay
  flights: OrderFlight[];

  // Dùng trực tiếp cho UI
  outboundFlight?: OrderFlight;
  returnFlight?: OrderFlight;
}

/**
 * Chuyển passenger_type từ API
 * adult / child / infant
 * sang text hiển thị tiếng Việt.
 */
export function getPassengerTypeLabel(
  type: Passenger["passenger_type"],
): string {
  switch (type) {
    case "adult":
      return "Người lớn";

    case "child":
      return "Trẻ em";

    case "infant":
      return "Em bé";

    default:
      return type;
  }
}

/**
 * Xác định loại chuyến bay từ danh sách flights.
 */
export function getFlightType(flights: OrderFlight[]): FlightType {
  const hasOutbound = flights.some((flight) => flight.trip_type === "outbound");

  const hasReturn = flights.some((flight) => flight.trip_type === "return");

  if (hasOutbound && hasReturn) {
    return "round_trip";
  }

  if (hasOutbound) {
    return "one_way";
  }

  return "multi_city";
}

/**
 * Format dữ liệu API -> Order dùng trong frontend.
 */
export function mapOrderFromApi(item: any): Order {
  const flights: OrderFlight[] = item.flights ?? [];

  const outboundFlight = flights.find(
    (flight) => flight.trip_type === "outbound",
  );

  const returnFlight = flights.find((flight) => flight.trip_type === "return");

  return {
    id: String(item.id),

    orderCode: item.order_code,

    status: item.status,

    bookingAt: item.booking_at,

    customerName: item.contact_name,

    customerPhone: item.contact_phone,

    customerEmail: item.contact_email,

    totalAmount: Number(item.total_amount),

    paymentMethod: item.payment_method,

    paymentProofUrl: item.payment_bill_image,

    transferContent: item.transfer_content,

    passengers: item.passengers ?? [],

    flights,

    outboundFlight,

    returnFlight,
  };
}
