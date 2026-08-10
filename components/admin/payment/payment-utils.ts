import { FlightPayload, PassengerPayload } from "@/hook/useCreateOrder";

import {
  FlightDetail,
  StoredFlightSegment,
  StoredFlightSource,
  StoredPassengerInfo,
} from "./payment-types";

export const DEFAULT_FLIGHTS: FlightDetail[] = [
  {
    directionLabel: "Chiều đi",
    airline: "Vietjet Air",
    flightNumber: "VJ160",
    route: "SGN → HAN",
    date: "Thứ Bảy, 08/08/2026",
    time: "21:35 - 23:45",
  },
];

export const BANK_INFO = {
  bankName: "MB BANK",
  accountNumber: "0123456789",
  accountName: "NGUYEN VAN A",
};

export const AIRLINE_NAMES: Record<string, string> = {
  VJ: "Vietjet Air",
  VN: "Vietnam Airlines",
  QH: "Bamboo Airways",
  VU: "Vietravel Airlines",
};

export function formatMoney(value: number) {
  return new Intl.NumberFormat("vi-VN").format(value) + " VNĐ";
}

export function readStoredJSON<T>(key: string): T | null {
  try {
    const value = sessionStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : null;
  } catch {
    return null;
  }
}

export function getStoredFlightSegment(
  data: StoredFlightSource | null,
): StoredFlightSegment | null {
  if (!data) return null;

  const flightOption = data.ListFlightOption?.[0];

  return flightOption?.ListFlight?.[0] || data.ListFlight?.[0] || null;
}

export function normalizePassengerType(type?: string): string {
  const normalized = String(type || "adult").toLowerCase();

  if (
    normalized === "child" ||
    normalized === "children" ||
    normalized === "chd"
  ) {
    return "child";
  }

  if (
    normalized === "infant" ||
    normalized === "inf" ||
    normalized === "baby"
  ) {
    return "infant";
  }

  return "adult";
}

export function buildFlightPayload(
  data: StoredFlightSource | null,
  tripType: "outbound" | "return",
): FlightPayload | null {
  if (!data) return null;

  const flight = getStoredFlightSegment(data);

  if (!flight) return null;

  const airlineCode = data.Airline || flight.Airline || "VJ";
  const airlineName = AIRLINE_NAMES[airlineCode] || airlineCode;

  const rawFlightNum = flight.FlightNumber || "N/A";

  const flightNumber = rawFlightNum.startsWith(airlineCode)
    ? rawFlightNum
    : `${airlineCode}${rawFlightNum}`;

  return {
    trip_type: tripType,
    airline_name: airlineName,
    airline_code: airlineCode,
    flight_number: flightNumber,
    departure_airport: flight.StartPoint || "SGN",
    arrival_airport: flight.EndPoint || "HAN",
    departure_at: flight.StartDate || flight.DepartDate || "",
    arrival_at: flight.EndDate || flight.ArriveDate || undefined,
  };
}

export function buildPassengerPayloads(
  passengers: StoredPassengerInfo[] | null,
  fallbackName: string,
): PassengerPayload[] {
  if (passengers?.length) {
    return passengers.map((passenger) => ({
      full_name: passenger.full_name,
      passenger_type: normalizePassengerType(passenger.passenger_type),
      document_type: passenger.document_type,
      document_number: passenger.document_number,
      date_of_birth: passenger.date_of_birth,
    }));
  }

  return [
    {
      full_name: fallbackName,
      passenger_type: "adult",
      date_of_birth: undefined,
    },
  ];
}

export function parseFlightInfoFromApi(
  data: StoredFlightSource | null,
  directionLabel: string,
): FlightDetail | null {
  if (!data) return null;

  const flight = getStoredFlightSegment(data);

  if (!flight) return null;

  const airlineCode = data.Airline || flight.Airline || "VJ";
  const airlineName = AIRLINE_NAMES[airlineCode] || airlineCode;

  const rawFlightNum = flight.FlightNumber || "N/A";

  const flightNumber = rawFlightNum.startsWith(airlineCode)
    ? rawFlightNum
    : `${airlineCode}${rawFlightNum}`;

  const startPoint = flight.StartPoint || "SGN";
  const endPoint = flight.EndPoint || "HAN";

  const route = `${startPoint} → ${endPoint}`;

  let timeFormatted = "--:-- - --:--";
  let dateFormatted = "Chưa xác định";

  try {
    if (flight.StartDate && flight.EndDate) {
      const start = new Date(flight.StartDate);
      const end = new Date(flight.EndDate);

      const formatTime = (date: Date) =>
        `${String(date.getHours()).padStart(2, "0")}:${String(
          date.getMinutes(),
        ).padStart(2, "0")}`;

      timeFormatted = `${formatTime(start)} - ${formatTime(end)}`;

      const daysOfWeek = [
        "Chủ Nhật",
        "Thứ Hai",
        "Thứ Ba",
        "Thứ Tư",
        "Thứ Năm",
        "Thứ Sáu",
        "Thứ Bảy",
      ];

      const dayName = daysOfWeek[start.getDay()];
      const day = String(start.getDate()).padStart(2, "0");
      const month = String(start.getMonth() + 1).padStart(2, "0");
      const year = start.getFullYear();

      dateFormatted = `${dayName}, ${day}/${month}/${year}`;
    } else if (flight.DepartDate && flight.ArriveDate) {
      const depart = String(flight.DepartDate).trim();
      const arrive = String(flight.ArriveDate).trim();

      const depParts = depart.split(" ");
      const arrParts = arrive.split(" ");

      if (depParts.length >= 2 && arrParts.length >= 2) {
        const depTime = depParts[1];
        const arrTime = arrParts[1];

        timeFormatted =
          `${depTime.slice(0, 2)}:${depTime.slice(2, 4)} - ` +
          `${arrTime.slice(0, 2)}:${arrTime.slice(2, 4)}`;

        const dateDigits = depParts[0];

        const day = dateDigits.slice(0, 2);
        const month = dateDigits.slice(2, 4);
        const year = dateDigits.slice(4, 8);

        const parsedDate = new Date(
          Number(year),
          Number(month) - 1,
          Number(day),
        );

        const daysOfWeek = [
          "Chủ Nhật",
          "Thứ Hai",
          "Thứ Ba",
          "Thứ Tư",
          "Thứ Năm",
          "Thứ Sáu",
          "Thứ Bảy",
        ];

        dateFormatted =
          `${daysOfWeek[parsedDate.getDay()]}, ` + `${day}/${month}/${year}`;
      }
    }
  } catch (error) {
    console.error("Lỗi parse ngày tháng từ API:", error);
  }

  return {
    directionLabel,
    airline: airlineName,
    flightNumber,
    route,
    date: dateFormatted,
    time: timeFormatted,
  };
}
