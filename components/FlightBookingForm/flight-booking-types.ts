import { AirOptionAPI, FarePax } from "../detail/flight-types";

export interface PassengerFormState {
  id: string;
  type: "ADULT" | "CHILD" | "INFANT";
  label: string;
  title: string;
  fullName: string;
  departBaggage: string;
  returnBaggage: string;
  dobDay: string;
  dobMonth: string;
  dobYear: string;
}

export interface ContactData {
  fullName: string;
  phone: string;
}

export interface BookingOptions {
  hotel: boolean;
  vat: boolean;
}

export interface FlightSummary {
  airlineCode: string;
  airlineMeta: {
    name: string;
    image: string;
  };
  flightNumber: string;
  depTime: string;
  arrTime: string;
  arrivalAt: string;
  equipmentCode: string;
  baseFareSum: number;
  totalFareSum: number;
  feeAndTaxSum: number;
  startPoint: string;
  endPoint: string;
  departDate: string;
  departureAt: string;
  adults: number;
  children: number;
  infants: number;
  listFarePax: FarePax[];
}

export interface FlightBookingFormProps {
  departFlight: AirOptionAPI;
  returnFlight?: AirOptionAPI | null;
  isRoundTrip?: boolean;
  onBack: () => void;
  adultsCount?: number;
  childrenCount?: number;
  infantsCount?: number;
}
