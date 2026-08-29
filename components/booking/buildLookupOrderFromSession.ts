import type { OrderStatus } from "@/components/admin/orders/data";
import {
  readStoredJSON,
  buildFlightPayload,
  AIRLINE_NAMES,
} from "@/components/admin/payment/payment-utils";
import type {
  StoredContactInfo,
  StoredFlightSource,
  StoredPassengerInfo,
} from "@/components/admin/payment/payment-types";
import type { LookupOrder } from "@/hook/useLookupBooking";
import { parseAirportValue } from "@/components/ticket/ticket-utils";

const DEFAULT_BAGGAGE = "20KG KÝ GỬI";

function formatBaggage(value?: string | null): string {
  if (!value || value === "0") {
    return DEFAULT_BAGGAGE;
  }

  const trimmed = value.trim();

  if (/^\d+$/.test(trimmed)) {
    return `${trimmed}KG KÝ GỬI`;
  }

  return trimmed.toUpperCase();
}

function mapPassengerType(type?: string): string {
  const normalized = String(type || "adult").toLowerCase();

  if (normalized.includes("child")) return "Trẻ em";
  if (normalized.includes("infant")) return "Em bé";

  return "Người lớn";
}

interface BuildLookupOrderParams {
  orderCode: string;
  amount: number;
  status?: OrderStatus;
}

export function buildLookupOrderFromSession({
  orderCode,
  amount,
  status = "paid",
}: BuildLookupOrderParams): LookupOrder | null {
  const storedContact = readStoredJSON<StoredContactInfo>("booking_contact_info");
  const storedPassengers =
    readStoredJSON<StoredPassengerInfo[]>("booking_passengers");
  const storedDepart = readStoredJSON<StoredFlightSource>(
    "selected_depart_flight",
  );
  const storedReturn = readStoredJSON<StoredFlightSource>(
    "selected_return_flight",
  );

  const departPayload = buildFlightPayload(storedDepart, "outbound");
  const returnPayload = buildFlightPayload(storedReturn, "return");

  if (!departPayload && !returnPayload) {
    return null;
  }

  const primaryFlight = departPayload || returnPayload!;
  const orderBaggage = formatBaggage(primaryFlight.checked_baggage);

  const flights = [departPayload, returnPayload]
    .filter(Boolean)
    .map((flight) => {
      const departure = parseAirportValue(flight!.departure_airport);
      const arrival = parseAirportValue(flight!.arrival_airport);

      return {
        airline: flight!.airline_name,
        airlineCode: flight!.airline_code || "",
        flightNumber: flight!.flight_number,
        departure: flight!.departure_airport,
        arrival: flight!.arrival_airport,
        departureCity: departure.city,
        arrivalCity: arrival.city,
        departTime: "",
        arrivalTime: "",
        departureAt: flight!.departure_at,
        arrivalAt: flight!.arrival_at || "",
        tripType: flight!.trip_type,
        checkedBaggage: formatBaggage(flight!.checked_baggage),
      };
    });

  const passengers = storedPassengers?.length
    ? storedPassengers.map((passenger) => ({
        name: passenger.full_name,
        type: mapPassengerType(passenger.passenger_type),
        dateOfBirth: passenger.date_of_birth || "",
        departBaggage: orderBaggage,
        returnBaggage: formatBaggage(returnPayload?.checked_baggage) || orderBaggage,
      }))
    : [
        {
          name: storedContact?.full_name || orderCode,
          type: "Người lớn",
          dateOfBirth: "",
          departBaggage: orderBaggage,
          returnBaggage: formatBaggage(returnPayload?.checked_baggage) || orderBaggage,
        },
      ];

  return {
    id: orderCode,
    status,
    customerName: storedContact?.full_name || orderCode,
    customerPhone: storedContact?.phone || "",
    totalAmount: amount,
    baggage: orderBaggage,
    passengers,
    flights,
  };
}

export function buildLookupOrderFromFlights(params: {
  orderCode: string;
  amount: number;
  status?: OrderStatus;
  contactName: string;
  contactPhone?: string;
  passengersSummary: string;
  flights: Array<{
    directionLabel: string;
    airline: string;
    flightNumber: string;
    route: string;
    date: string;
    time: string;
  }>;
}): LookupOrder {
  const {
    orderCode,
    amount,
    status = "paid",
    contactName,
    contactPhone = "",
    passengersSummary,
    flights,
  } = params;

  const mappedFlights = flights.map((flight, index) => {
    const [departureCode, arrivalCode] = flight.route.split(" → ");
    const departure = parseAirportValue(departureCode || "SGN");
    const arrival = parseAirportValue(arrivalCode || "HAN");
    const airlineCode = flight.flightNumber.replace(/\d+/g, "") || "VJ";

    const [departTime = "", arrivalTime = ""] = flight.time.split(" - ");

    return {
      airline: flight.airline || AIRLINE_NAMES[airlineCode] || airlineCode,
      airlineCode,
      flightNumber: flight.flightNumber,
      departure: departureCode || "SGN",
      arrival: arrivalCode || "HAN",
      departureCity: departure.city,
      arrivalCity: arrival.city,
      departTime,
      arrivalTime,
      departureAt: flight.date,
      arrivalAt: flight.date,
      tripType: (index === 0 ? "outbound" : "return") as "outbound" | "return",
      checkedBaggage: DEFAULT_BAGGAGE,
    };
  });

  return {
    id: orderCode,
    status,
    customerName: contactName,
    customerPhone: contactPhone,
    totalAmount: amount,
    baggage: DEFAULT_BAGGAGE,
    passengers: [
      {
        name: contactName,
        type: passengersSummary.includes("trẻ em") ? "Người lớn" : "Người lớn",
        dateOfBirth: "",
        departBaggage: DEFAULT_BAGGAGE,
        returnBaggage: DEFAULT_BAGGAGE,
      },
    ],
    flights: mappedFlights,
  };
}
