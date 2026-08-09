export interface FlightDetail {
  directionLabel: string;
  airline: string;
  flightNumber: string;
  route: string;
  date: string;
  time: string;
}

export interface OrderData {
  code: string;
  isRoundTrip: boolean;
  flights: FlightDetail[];
  passengers: string;
  amount: number;
}

export interface StoredContactInfo {
  full_name: string;
  phone: string;
  email?: string;
}

export interface StoredPassengerInfo {
  full_name: string;
  passenger_type?: string;
  document_type?: string;
  document_number?: string;
}

export interface StoredFlightSegment {
  Airline?: string;
  FlightNumber?: string;
  StartPoint?: string;
  EndPoint?: string;
  StartDate?: string;
  EndDate?: string;
  DepartDate?: string;
  ArriveDate?: string;
}

export interface StoredFlightOption {
  ListFlight?: StoredFlightSegment[];
}

export interface StoredFlightSource {
  Airline?: string;
  ListFlightOption?: StoredFlightOption[];
  ListFlight?: StoredFlightSegment[];
}

export interface BankAccount {
  id?: number | string;
  bankName: string;
  accountNumber: string;
  accountHolder: string;
  isActive: boolean;
}
