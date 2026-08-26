export type FlightType = "one_way" | "round_trip" | "multi_city";

export type OrderStatus = "pending" | "confirmed" | "paid" | "cancelled";

/** UI passenger shape dùng trong danh sách đơn hàng */
export interface Passenger {
  name: string;
  type: string;
  passportOrCccd: string;
  dateOfBirth: string;
}

/** UI flight shape dùng trong danh sách đơn hàng */
export interface OrderFlight {
  logo: string;
  airline: string;
  flightNumber: string;
  departure: string;
  arrival: string;
  departTime: string;
  arrivalTime: string;
  seatClass: string;
  checkedBaggage?: string | null;
}

export interface Order {
  id: string;
  status: OrderStatus;
  createdAt: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string | null;
  totalAmount: number;
  paymentMethod: string | null;
  paymentProofUrl?: string | null;
  transferContent: string | null;
  flightType: FlightType;
  passengers: Passenger[];
  flights: OrderFlight[];
}

export function getPassengerTypeLabel(type: string): string {
  switch (type) {
    case "adult":
    case "Người lớn":
      return "Người lớn";

    case "child":
    case "Trẻ em":
      return "Trẻ em";

    case "infant":
    case "Em bé":
      return "Em bé";

    default:
      return type;
  }
}

export function getFlightType(flights: OrderFlight[]): FlightType {
  if (flights.length > 1) {
    return "round_trip";
  }

  return "one_way";
}

/**
 * Format dữ liệu API -> Order dùng trong frontend (UI shape).
 */
export function mapOrderFromApi(item: any): Order {
  const flights = item.flights ?? [];
  const passengers = item.passengers ?? [];
  const hasReturn = flights.some(
    (flight: any) => flight.trip_type === "return",
  );

  return {
    id: String(item.order_code ?? item.id),
    status: item.status,
    createdAt: item.created_at ?? item.booking_at ?? "",
    customerName: item.contact_name ?? "",
    customerPhone: item.contact_phone ?? "",
    customerEmail: item.contact_email ?? null,
    totalAmount: Number(item.total_amount ?? 0),
    paymentMethod: item.payment_method ?? null,
    paymentProofUrl: item.payment_bill_image ?? undefined,
    transferContent: item.transfer_content ?? null,
    flightType: hasReturn || flights.length > 1 ? "round_trip" : "one_way",
    passengers: passengers.map((passenger: any) => ({
      name: passenger.full_name ?? passenger.name ?? "",
      type:
        passenger.passenger_type === "adult"
          ? "Người lớn"
          : passenger.passenger_type === "child"
            ? "Trẻ em"
            : passenger.passenger_type === "infant"
              ? "Em bé"
              : passenger.type ?? passenger.passenger_type ?? "",
      passportOrCccd:
        passenger.document_number ?? passenger.passportOrCccd ?? "Chưa có",
      dateOfBirth:
        passenger.date_of_birth ?? passenger.dateOfBirth ?? "Chưa có",
    })),
    flights: flights.map((flight: any) => ({
      logo: flight.airline_code ?? flight.logo ?? "✈️",
      airline: flight.airline_name ?? flight.airline ?? "",
      flightNumber: flight.flight_number ?? flight.flightNumber ?? "",
      departure: flight.departure_airport ?? flight.departure ?? "",
      arrival: flight.arrival_airport ?? flight.arrival ?? "",
      departTime: flight.departure_at ?? flight.departTime ?? "",
      arrivalTime: flight.arrival_at ?? flight.arrivalTime ?? "",
      seatClass: flight.seatClass ?? "Phổ thông",
      checkedBaggage: flight.checked_baggage ?? flight.checkedBaggage ?? null,
    })),
  };
}
