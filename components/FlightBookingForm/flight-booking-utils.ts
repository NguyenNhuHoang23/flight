import { AIRLINE_INFO, parseTime } from "../detail/flight-utils";

import { AirOptionAPI } from "../detail/flight-types";
import { FlightSummary } from "./flight-booking-types";

export const getFlightSummary = (
  airOption: AirOptionAPI,
  adultsCount?: number,
  childrenCount?: number,
  infantsCount?: number,
): FlightSummary => {
  const fare = airOption.ListFareOption?.[0];

  const flightOption = airOption.ListFlightOption?.[0];

  const flightData = flightOption?.ListFlight?.[0];

  const segmentData = flightData?.ListSegment?.[0];

  const airlineCode = airOption.Airline || "VN";

  const airlineMeta = AIRLINE_INFO[
    airlineCode as keyof typeof AIRLINE_INFO
  ] || {
    name: airlineCode,
    image: "/images/airlines/default.png",
  };

  const rawFlightNum =
    flightData?.FlightNumber || segmentData?.FlightNumber || "---";

  const flightNumber = rawFlightNum.startsWith(airlineCode)
    ? rawFlightNum
    : `${airlineCode}${rawFlightNum}`;

  const depDateStr = flightData?.DepartDate || segmentData?.DepartDate;

  const arrDateStr = flightData?.ArriveDate || segmentData?.ArriveDate;

  const depTime = parseTime(depDateStr);

  const arrTime = parseTime(arrDateStr);

  const equipmentCode = segmentData?.Equipment || "A321";

  const listFarePax = fare?.ListFarePax || [];

  const apiAdults = listFarePax.find((p) => p.PaxType === "ADT")?.PaxNumb || 1;

  const apiChildren =
    listFarePax.find((p) => p.PaxType === "CHD")?.PaxNumb || 0;

  const apiInfants = listFarePax.find((p) => p.PaxType === "INF")?.PaxNumb || 0;

  const baseFareSum = listFarePax.reduce(
    (sum, p) => sum + (p.BaseFare || 0) * (p.PaxNumb || 1),
    0,
  );

  const totalFareSum =
    fare?.TotalFare ||
    listFarePax.reduce(
      (sum, p) => sum + (p.TotalFare || 0) * (p.PaxNumb || 1),
      0,
    );

  const feeAndTaxSum = totalFareSum - baseFareSum;

  return {
    airlineCode,
    airlineMeta,
    flightNumber,
    depTime,
    arrTime,
    equipmentCode,
    baseFareSum,
    totalFareSum,
    feeAndTaxSum,

    startPoint: segmentData?.StartPoint || "---",

    endPoint: segmentData?.EndPoint || "---",

    departDate: depDateStr ? depDateStr.split(" ")[0] : "",

    departureAt: formatLaravelDateTime(depDateStr),

    adults: adultsCount ?? apiAdults,

    children: childrenCount ?? apiChildren,

    infants: infantsCount ?? apiInfants,

    listFarePax,
  };
};

export const formatLaravelDateTime = (dateStr?: string) => {
  if (!dateStr) return "";

  const trimmed = dateStr.trim();

  if (!trimmed) return "";

  if (trimmed.includes("-") || trimmed.includes("T")) {
    const parsed = new Date(trimmed);

    if (Number.isNaN(parsed.getTime())) {
      return trimmed;
    }

    const pad = (value: number) => String(value).padStart(2, "0");

    return `${parsed.getFullYear()}-${pad(parsed.getMonth() + 1)}-${pad(
      parsed.getDate(),
    )} ${pad(parsed.getHours())}:${pad(parsed.getMinutes())}:${pad(
      parsed.getSeconds(),
    )}`;
  }

  const parts = trimmed.split(" ");
  const datePart = parts[0] || "";
  const timePart = parts[1] || "";

  if (datePart.length < 8) return trimmed;

  const day = datePart.slice(0, 2);
  const month = datePart.slice(2, 4);
  const year = datePart.slice(4, 8);

  let formattedTime = "00:00:00";

  if (timePart.length >= 4) {
    formattedTime = `${timePart.slice(0, 2)}:${timePart.slice(2, 4)}:00`;
  }

  return `${year}-${month}-${day} ${formattedTime}`;
};
