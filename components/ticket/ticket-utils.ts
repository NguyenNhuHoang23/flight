import {
  AirlineBrand,
  TicketFormState,
  PassengerInfo,
} from "./ticket-types";
import type {
  OrderDetail,
  OrderFlight,
} from "@/hook/useGetOrderDetail";

const AIRPORT_CITIES: Record<string, string> = {
  SGN: "Hồ Chí Minh",
  HAN: "Hà Nội",
  DAD: "Đà Nẵng",
  CXR: "Nha Trang",
  PQC: "Phú Quốc",
  DLI: "Đà Lạt",
  HUI: "Huế",
  VCA: "Cần Thơ",
  VII: "Vinh",
  HPH: "Hải Phòng",
  UIH: "Quy Nhơn",
  VDO: "Vân Đồn",
  THD: "Thanh Hóa",
  VDH: "Đồng Hới",
};

const WEEKDAY_VI = [
  "Chủ Nhật",
  "Thứ Hai",
  "Thứ Ba",
  "Thứ Tư",
  "Thứ Năm",
  "Thứ Sáu",
  "Thứ Bảy",
];

export function generatePassengerQrData(
  passenger: PassengerInfo,
  ticket: TicketFormState,
) {
  return [
    passenger.name,
    `${ticket.departureCode} - ${ticket.arrivalCode}`,
  ].join("\n");
}

export function parseAirportValue(value: string) {
  const trimmedValue = value.trim();

  const codeMatch = trimmedValue.match(/^([A-Z0-9]{3,4})\b/);
  const cityMatch = trimmedValue.match(/\(([^)]+)\)/);

  const code = codeMatch?.[1] || trimmedValue || "";

  return {
    code,
    city:
      cityMatch?.[1] ||
      AIRPORT_CITIES[code] ||
      code ||
      "",
  };
}

export function formatFlightDate(value?: string | null) {
  if (!value) return "";

  const match = value.match(/^(\d{4})-(\d{2})-(\d{2})T/);

  if (!match) {
    return value;
  }

  const [, year, month, day] = match;

  return `${day}/${month}/${year}`;
}

export function formatFlightDateWithWeekday(
  value?: string | null,
) {
  if (!value) return "";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return formatFlightDate(value);
  }

  const weekday = WEEKDAY_VI[date.getUTCDay()];
  const formatted = formatFlightDate(value);

  return formatted ? `${weekday}, ${formatted}` : "";
}

export function formatFlightTime(value?: string | null) {
  if (!value) return "";

  const match = value.match(/T(\d{2}):(\d{2})/);

  if (!match) {
    return value;
  }

  const [, hour, minute] = match;

  return `${hour}:${minute}`;
}

export function formatPassengerDob(value?: string | null) {
  if (!value) return "";

  const match = value.match(/^(\d{4})-(\d{2})-(\d{2})/);

  if (!match) {
    return value;
  }

  const [, year, month, day] = match;

  return `${day}/${month}/${year}`;
}

export function calcFlightDuration(
  departureAt?: string | null,
  arrivalAt?: string | null,
) {
  if (!departureAt || !arrivalAt) return "";

  const start = new Date(departureAt).getTime();
  const end = new Date(arrivalAt).getTime();

  if (Number.isNaN(start) || Number.isNaN(end) || end < start) {
    return "";
  }

  const totalMinutes = Math.round((end - start) / 60000);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours <= 0) return `${minutes}m`;

  return minutes > 0 ? `${hours}h ${minutes}m` : `${hours}h`;
}

export function mapPassengerType(type: string) {
  const normalizedType = type.toLowerCase();

  if (normalizedType.includes("adult")) return "Người lớn";
  if (normalizedType.includes("child")) return "Trẻ em";
  if (normalizedType.includes("infant")) return "Em bé";

  return "Người lớn";
}

export function getAirlineBrand(
  airlineCode?: string | null,
  airlineName?: string | null,
): AirlineBrand {
  const code = (airlineCode || "").toUpperCase();
  const name = (airlineName || "").toLowerCase();

  if (code === "VJ" || name.includes("vietjet")) return "vietjet";
  if (code === "QH" || name.includes("bamboo")) return "bamboo";
  if (code === "VU" || name.includes("vietravel")) return "vietravel";

  return "vietnam_airlines";
}

export interface TicketFlightView {
  airline: string;
  airlineCode: string | null;
  flightNumber: string;
  departure: string;
  arrival: string;
  departureCity: string;
  arrivalCity: string;
  departTime: string;
  arrivalTime: string;
  departureAt: string;
  arrivalAt: string | null;
  seatClass: string;
  tripType: "outbound" | "return";
}

export function mapApiOrderToTicketOrder(orderDetail: OrderDetail) {
  const flights = orderDetail.flights || [];
  const passengers = orderDetail.passengers || [];

  return {
    id: orderDetail.order_code,
    customerName: orderDetail.contact_name || "Chưa có tên",
    customerPhone: orderDetail.contact_phone || "Chưa có SĐT",
    customerEmail: orderDetail.contact_email || "Chưa có email",
    passengers: passengers.map((passenger) => ({
      full_name: passenger.full_name,
      name: passenger.full_name,
      type: mapPassengerType(passenger.passenger_type),
      date_of_birth: passenger.date_of_birth,
      passportOrCccd: passenger.document_number || "Chưa có",
    })),
    paymentProofUrl: orderDetail.payment_bill_image || undefined,
    flightType:
      flights.some((flight) => flight.trip_type === "return") ||
      flights.length > 1
        ? ("round_trip" as const)
        : ("one_way" as const),
    flights: flights.map(mapFlightToTicketView),
    totalAmount: Number(orderDetail.total_amount || 0),
    status: orderDetail.status,
    createdAt: orderDetail.created_at,
  };
}

export function mapFlightToTicketView(
  flight: OrderFlight,
): TicketFlightView {
  const departure = parseAirportValue(flight.departure_airport);
  const arrival = parseAirportValue(flight.arrival_airport);

  return {
    airline: flight.airline_name,
    airlineCode: flight.airline_code,
    flightNumber: flight.flight_number,
    departure: departure.code,
    arrival: arrival.code,
    departureCity: departure.city,
    arrivalCity: arrival.city,
    departTime: formatFlightTime(flight.departure_at),
    arrivalTime: formatFlightTime(flight.arrival_at),
    departureAt: flight.departure_at,
    arrivalAt: flight.arrival_at,
    seatClass: "Phổ thông",
    tripType: flight.trip_type,
  };
}

export function buildTicketFormState(
  orderDetail: OrderDetail,
  flight: OrderFlight,
): TicketFormState {
  const departure = parseAirportValue(flight.departure_airport);
  const arrival = parseAirportValue(flight.arrival_airport);
  const passengers = orderDetail.passengers || [];

  return {
    pnr: orderDetail.order_code || "",
    passengers: passengers.length
      ? passengers.map((passenger) => ({
          name: passenger.full_name || "",
          dob: formatPassengerDob(passenger.date_of_birth),
          seat: "",
          gate: "",
        }))
      : [
          {
            name: orderDetail.contact_name || "",
            dob: "",
            seat: "",
            gate: "",
          },
        ],
    flightNumber: flight.flight_number || "",
    departureCode: departure.code,
    departureCity: departure.city,
    arrivalCode: arrival.code,
    arrivalCity: arrival.city,
    departDate: formatFlightDateWithWeekday(flight.departure_at),
    departTime: formatFlightTime(flight.departure_at),
    arrivalTime: formatFlightTime(flight.arrival_at),
    mealQr: null,
    flightDuration: calcFlightDuration(
      flight.departure_at,
      flight.arrival_at,
    ),
    cabinClass: "Phổ thông",
    seat: "",
    gate: "",
    terminal: "",
    baggage: "20KG KÝ GỬI",
    meal: "Không",
    seq: "",
    ticketStatus:
      orderDetail.status === "confirmed"
        ? "ĐÃ XÁC NHẬN"
        : orderDetail.status === "paid"
          ? "ĐÃ THANH TOÁN"
        : orderDetail.status === "cancelled"
          ? "ĐÃ HỦY"
          : "CHỜ XÁC NHẬN",
    ticketNumber: "",
    invoiceNo: "",
  };
}
