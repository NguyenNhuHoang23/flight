export type AirlineBrand =
  | "vietnam_airlines"
  | "vietravel"
  | "vietjet"
  | "bamboo";

export interface PassengerInfo {
  name: string;
  dob: string;
  seat: string;
  gate: string;
}

export interface TicketFormState {
  pnr: string;
  passengers: PassengerInfo[];
  flightNumber: string;
  departureCode: string;
  departureCity: string;
  arrivalCode: string;
  arrivalCity: string;
  departDate: string;
  departTime: string;
  arrivalTime: string;
  flightDuration: string;
  mealQr: string | null;
  cabinClass: string;
  seat: string;
  gate: string;
  terminal: string;
  baggage: string;
  meal: string;
  seq: string;
  ticketStatus: string;
  ticketNumber: string;
  invoiceNo: string;
}