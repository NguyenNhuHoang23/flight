export interface FarePax {
  PaxType: string;
  PaxNumb: number;
  BaseFare: number;
  TotalFare: number;
  Currency: string;
  ListFareInfo?: Array<{
    FreeBaggage?: string;
    HandBaggage?: string;
    [key: string]: any;
  }>;
}

export interface FareOptionAPI {
  OptionId: number;
  Airline: string;
  FareClass: string;
  FareBasis: string;
  FareFamily: string;
  CabinName: string;
  BaseFare: number;
  TotalFare: number;
  Currency: string;
  Exchangeable: boolean;
  Refundable: boolean;
  Availability: number;
  ListFarePax: FarePax[];
}

export interface FlightSegment {
  Airline: string;
  FlightNumber: string;
  StartPoint: string;
  EndPoint: string;
  DepartDate: string;
  ArriveDate: string;
  Equipment?: string;
}

export interface FlightOption {
  ListFlight: Array<{
    FlightNumber: string;
    DepartDate: string;
    ArriveDate: string;
    ListSegment?: FlightSegment[];
  }>;
}

export interface AirOptionAPI {
  Airline: string;
  ListFareOption: FareOptionAPI[];
  ListFlightOption: FlightOption[];
}

export interface ApiRootResponse {
  Session: string;
  ListGroup: Array<{
    Journey: string;
    EndPoint: string;
    StartPoint: string;
    ListAirOption: AirOptionAPI[];
  }>;
}

export interface AirlineInfo {
  name: string;
  image: string;
  color: string;
  bg: string;
}
