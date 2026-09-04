export interface FarePax {
  PaxType?: string;
  PassengerType?: string;
  PaxCode?: string;
  PaxNumb: number;
  BaseFare?: number;
  Fare?: number;
  VAT?: number;
  Fee?: number;
  TotalFare: number;
  Currency?: string;
  ListFareInfo?: Array<{
    FreeBaggage?: string;
    HandBaggage?: string;
    [key: string]: any;
  }>;
  [key: string]: any;
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
  PricePerPax?: number;
  Currency: string;
  Exchangeable: boolean;
  Refundable: boolean;
  Availability: number;
  ListFarePax: FarePax[];
  [key: string]: any;
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
    AirlineCode?: string;
    Airline?: string;
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
    DepartDate?: string;
    Adt?: number;
    Chd?: number;
    Inf?: number;
    [key: string]: any;
  }>;
}

export interface AirlineInfo {
  name: string;
  image: string;
  color: string;
  bg: string;
  showName?: boolean;
}
