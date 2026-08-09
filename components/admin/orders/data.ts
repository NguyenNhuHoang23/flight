export type FlightType = "one_way" | "round_trip" | "multi_city";
export type OrderStatus = "pending" | "confirmed" | "cancelled";

export interface Passenger {
  name: string;
  type: "Người lớn" | "Trẻ em" | "Em bé";
  passportOrCccd: string;
}

export interface FlightSegment {
  airline: string;
  logo: string;
  flightNumber: string;
  departure: string;
  arrival: string;
  departTime: string;
  arrivalTime: string;
  seatClass: string;
}

export interface Order {
  id: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  passengers: Passenger[];
  paymentProofUrl?: string;
  flightType: FlightType;
  flights: FlightSegment[];
  totalAmount: number;
  status: OrderStatus;
  createdAt: string;
}

export const MOCK_ORDERS: Order[] = [
  {
    id: "ORD-2026-001",
    customerName: "Nguyễn Văn An",
    customerPhone: "0912345678",
    customerEmail: "an.nguyen@gmail.com",
    paymentProofUrl: "/images/may-bay-vector-png-09.png",
    passengers: [
      {
        name: "NGUYEN VAN AN",
        type: "Người lớn",
        passportOrCccd: "001092001234",
      },
      { name: "LE THI HOA", type: "Người lớn", passportOrCccd: "001195005678" },
    ],
    flightType: "round_trip",
    flights: [
      {
        airline: "Vietnam Airlines",
        logo: "✈️",
        flightNumber: "VN-210",
        departure: "HAN (Hà Nội)",
        arrival: "SGN (TP.HCM)",
        departTime: "08:00 - 06/08/2026",
        arrivalTime: "10:10 - 06/08/2026",
        seatClass: "Phổ thông linh hoạt",
      },
      {
        airline: "Vietjet Air",
        logo: "🚀",
        flightNumber: "VJ-185",
        departure: "SGN (TP.HCM)",
        arrival: "HAN (Hà Nội)",
        departTime: "19:30 - 10/08/2026",
        arrivalTime: "21:40 - 10/08/2026",
        seatClass: "Eco",
      },
    ],
    totalAmount: 4850000,
    status: "pending",
    createdAt: "06/08/2026 14:30",
  },
  {
    id: "ORD-2026-002",
    customerName: "Phạm Minh Tuấn",
    customerPhone: "0987654321",
    customerEmail: "tuan.pham@hotmail.com",
    passengers: [
      { name: "PHAM MINH TUAN", type: "Người lớn", passportOrCccd: "C8392019" },
    ],
    flightType: "one_way",
    flights: [
      {
        airline: "Bamboo Airways",
        logo: "🎋",
        flightNumber: "QH-203",
        departure: "HAN (Hà Nội)",
        arrival: "DAD (Đà Nẵng)",
        departTime: "11:15 - 08/08/2026",
        arrivalTime: "12:35 - 08/08/2026",
        seatClass: "Thương gia (Business)",
      },
    ],
    totalAmount: 3200000,
    status: "confirmed",
    createdAt: "06/08/2026 10:15",
  },
  {
    id: "ORD-2026-003",
    customerName: "Hoàng Thu Thảo",
    customerPhone: "0905112233",
    customerEmail: "thao.hoang@yahoo.com",
    passengers: [
      {
        name: "HOANG THU THAO",
        type: "Người lớn",
        passportOrCccd: "036198000111",
      },
      {
        name: "NGUYEN HOANG NAM",
        type: "Trẻ em",
        passportOrCccd: "Khai sinh 9928",
      },
    ],
    flightType: "round_trip",
    flights: [
      {
        airline: "Vietravel Airlines",
        logo: "🟡",
        flightNumber: "VU-781",
        departure: "HAN (Hà Nội)",
        arrival: "PQC (Phú Quốc)",
        departTime: "06:20 - 12/08/2026",
        arrivalTime: "08:30 - 12/08/2026",
        seatClass: "Phổ thông",
      },
      {
        airline: "Vietravel Airlines",
        logo: "🟡",
        flightNumber: "VU-782",
        departure: "PQC (Phú Quốc)",
        arrival: "HAN (Hà Nội)",
        departTime: "16:00 - 15/08/2026",
        arrivalTime: "18:10 - 15/08/2026",
        seatClass: "Phổ thông",
      },
    ],
    totalAmount: 6100000,
    status: "cancelled",
    createdAt: "05/08/2026 18:00",
  },
];
