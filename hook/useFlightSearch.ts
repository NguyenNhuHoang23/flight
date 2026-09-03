import { useEffect, useState } from "react";

// Đĩnh nghĩa cấu trúc Payload theo chuẩn Datacom API
export interface SearchFlightPayload {
  RequestInfo: {
    PrivateKey: string;
    ApiAccount: string;
    ApiPassword: string;
    Currency: string;
    Language: string;
    IpAddress: string;
  };
  System: string;
  Adt: number;
  Chd: number;
  Inf: number;
  Tourcode: string;
  ListRoute: Array<{
    Leg: number;
    StartPoint: string;
    EndPoint: string;
    DepartDate: string; // Format: DDMMYYYY
  }>;
  Option: {
    DirectOnly: boolean;
    NearByAirport: boolean;
    PreferCabin: string;
    NdcOnly: boolean;
    CombineMode: string;
  };
}

export interface SearchFlightParams {
  fromLocation: string; // ví dụ: "Hà Nội (HAN)"
  toLocation: string; // ví dụ: "Đà Nẵng (DAD)"
  departureDate: Date | null;
  returnDate: Date | null;
  adt: number;
  chd: number;
  inf: number;
}

export function useFlightSearch() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [flightData, setFlightData] = useState<any>(null);

  // Browser back/forward cache giữ nguyên JS state — loading vẫn true sau khi đã rời trang.
  useEffect(() => {
    const handlePageShow = () => setLoading(false);
    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, []);

  // Helper tách mã IATA từ tên (ví dụ: "Hà Nội (HAN)" => "HAN")
  const extractAirportCode = (locationStr: string): string => {
    const match = locationStr.match(/\(([^)]+)\)/);
    return match ? match[1] : locationStr;
  };

  // Helper chuyển đổi Date object sang định dạng DDMMYYYY
  const formatDateToDDMMYYYY = (date: Date): string => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}${month}${year}`;
  };

  const searchFlight = async (params: SearchFlightParams) => {
    if (!params.departureDate) {
      setError("Vui lòng chọn ngày đi");
      return;
    }

    setLoading(true);
    setError(null);

    const startPoint = extractAirportCode(params.fromLocation);
    const endPoint = extractAirportCode(params.toLocation);

    // Xây dựng ListRoute (xử lý vé 1 chiều hoặc khứ hồi)
    const listRoute = [
      {
        Leg: 0,
        StartPoint: startPoint,
        EndPoint: endPoint,
        DepartDate: formatDateToDDMMYYYY(params.departureDate),
      },
    ];

    // Nếu chọn ngày về -> Thêm chặng thứ 2 (Khứ hồi)
    if (params.returnDate) {
      listRoute.push({
        Leg: 1,
        StartPoint: endPoint,
        EndPoint: startPoint,
        DepartDate: formatDateToDDMMYYYY(params.returnDate),
      });
    }

    const payload = {
      Adt: params.adt,
      Chd: params.chd,
      Inf: params.inf,
      Tourcode: "",
      ListRoute: listRoute,
      Option: {
        DirectOnly: true,
        NearByAirport: false,
        PreferCabin: "economy",
        NdcOnly: false,
        CombineMode: "flight",
      },
    };

    try {
      const response = await fetch("/api/flight/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setFlightData(data);
      return data;
    } catch (err: any) {
      const errorMessage =
        err.message || "Có lỗi xảy ra trong quá trình tìm chuyến bay";
      setError(errorMessage);
      console.error("Flight Search API Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return {
    searchFlight,
    loading,
    error,
    flightData,
  };
}
