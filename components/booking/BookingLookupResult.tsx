"use client";

import React from "react";
import Image from "next/image";
import {
  AlertCircle,
  ArrowRight,
  Calendar,
  Luggage,
  Phone,
  Plane,
  User,
} from "lucide-react";

import { LookupOrder, LookupFlight, LookupPassenger } from "@/hook/useLookupBooking";
import OrderStatusBadge from "@/components/admin/orders/OrderStatusBadge";
import { getAirlineMeta } from "@/components/detail/flight-utils";
import {
  formatFlightDateWithWeekday,
  formatFlightTime,
  formatPassengerDob,
  parseAirportValue,
} from "@/components/ticket/ticket-utils";

interface BookingLookupResultProps {
  order: LookupOrder;
}

function mapPassengerTitle(type: string) {
  const normalizedType = type.toLowerCase();

  if (normalizedType.includes("trẻ em") || normalizedType.includes("child")) {
    return "Trẻ em";
  }

  if (normalizedType.includes("em bé") || normalizedType.includes("infant")) {
    return "Em bé";
  }

  return "Anh/Chị";
}

function getTripLabel(tripType: LookupFlight["tripType"], index: number) {
  if (tripType === "return") return "Chiều về";
  if (tripType === "outbound") return "Chiều đi";
  return index === 0 ? "Chiều đi" : "Chiều về";
}

function formatAirportDisplay(airportValue: string, cityFallback: string) {
  const parsed = parseAirportValue(airportValue);
  const airportMatch = airportValue.match(/\(([^)]+)\)/);
  const airportName = airportMatch?.[1];
  const mainCity = cityFallback || parsed.city || parsed.code;

  return {
    city: mainCity,
    airport: airportName,
    code: parsed.code,
  };
}

function InfoCard({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <div className="rounded-lg border border-gray-100 bg-gray-50/80 px-3 py-2.5">
      <p className="text-[10px] font-medium uppercase tracking-wider text-gray-500">
        {label}
      </p>
      <div
        className={`mt-0.5 text-xs ${highlight ? "font-bold tracking-wide text-gray-900" : "font-semibold text-gray-800"}`}
      >
        {value}
      </div>
    </div>
  );
}

function PassengerCard({
  passenger,
  hasReturnFlight,
}: {
  passenger: LookupPassenger;
  hasReturnFlight: boolean;
}) {
  const dob = formatPassengerDob(passenger.dateOfBirth);

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
      <div className="mb-2 flex items-start justify-between gap-3">
        <span className="rounded-full bg-sky-50 px-2 py-0.5 text-[10px] font-semibold text-sky-700">
          {mapPassengerTitle(passenger.type)}
        </span>
        <span className="text-[10px] text-gray-400">{passenger.type}</span>
      </div>

      <p className="text-sm font-bold uppercase leading-snug text-gray-900">
        {passenger.name}
      </p>

      <div className="mt-2 grid grid-cols-2 gap-2 text-[11px]">
        <div className="rounded-md bg-gray-50 px-2.5 py-1.5">
          <p className="text-gray-500">Ngày sinh</p>
          <p className="mt-0.5 font-medium text-gray-800">{dob || "—"}</p>
        </div>
        <div className="rounded-md bg-gray-50 px-2.5 py-1.5">
          <p className="text-gray-500">
            {hasReturnFlight ? "Hành lý (đi/về)" : "Hành lý ký gửi"}
          </p>
          <p className="mt-0.5 font-medium text-gray-800">
            {hasReturnFlight
              ? `${passenger.departBaggage} / ${passenger.returnBaggage}`
              : passenger.departBaggage}
          </p>
        </div>
      </div>
    </div>
  );
}

function FlightCard({
  flight,
  index,
}: {
  flight: LookupFlight;
  index: number;
}) {
  const flightAirlineMeta = getAirlineMeta(flight.airlineCode, flight.airline);
  const departure = formatAirportDisplay(flight.departure, flight.departureCity);
  const arrival = formatAirportDisplay(flight.arrival, flight.arrivalCity);
  const departTime = formatFlightTime(flight.departureAt);
  const arrivalTime = formatFlightTime(flight.arrivalAt);
  const flightDate = formatFlightDateWithWeekday(flight.departureAt);

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 bg-gray-50/70 px-3 py-2.5">
        <div className="flex items-center gap-2.5">
          <Image
            src={flightAirlineMeta.image}
            alt={flight.airline}
            width={72}
            height={22}
            className="h-5 w-auto object-contain"
          />
          <div>
            <p className="text-xs font-bold text-gray-900">
              {flight.airline} {flight.flightNumber}
            </p>
            <p className="mt-0.5 flex items-center gap-1 text-[11px] text-gray-500">
              <Calendar className="h-3 w-3" />
              {flightDate || "—"}
            </p>
          </div>
        </div>

        <span className="rounded-full bg-white px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-gray-600 ring-1 ring-gray-200">
          {getTripLabel(flight.tripType, index)}
        </span>
      </div>

      <div className="px-3 py-3.5">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
          <div className="text-left">
            <p className="text-lg font-bold tabular-nums text-gray-900">
              {departTime || "--:--"}
            </p>
            <p className="mt-0.5 text-xs font-semibold text-gray-800">
              {departure.city}
            </p>
            {departure.airport ? (
              <p className="text-[11px] text-gray-500">{departure.airport}</p>
            ) : null}
          </div>

          <div className="flex flex-col items-center gap-1 px-1">
            <div className="flex items-center gap-1 text-gray-300">
              <span className="h-px w-5 bg-gray-200" />
              <Plane className="h-3.5 w-3.5 rotate-90 text-sky-500" />
              <span className="h-px w-5 bg-gray-200" />
            </div>
          </div>

          <div className="text-right">
            <p className="text-lg font-bold tabular-nums text-gray-900">
              {arrivalTime || "--:--"}
            </p>
            <p className="mt-0.5 text-xs font-semibold text-gray-800">
              {arrival.city}
            </p>
            {arrival.airport ? (
              <p className="text-[11px] text-gray-500">{arrival.airport}</p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BookingLookupResult({
  order,
}: BookingLookupResultProps) {
  const primaryFlight = order.flights[0];
  const airlineMeta = getAirlineMeta(
    primaryFlight?.airlineCode,
    primaryFlight?.airline,
  );
  const hasReturnFlight = order.flights.some(
    (flight) => flight.tripType === "return",
  );

  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
      {/* Header */}
      <div className={`border-b border-gray-100 ${airlineMeta.bg} px-4 py-4 sm:px-5`}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-white px-3 py-2 shadow-sm ring-1 ring-black/5">
              <Image
                src={airlineMeta.image}
                alt={airlineMeta.name}
                width={120}
                height={36}
                className="h-7 w-auto object-contain sm:h-8"
              />
            </div>

            <div>
              <p className="text-[10px] font-medium uppercase tracking-wider text-gray-500">
                Mã đặt chỗ
              </p>
              <p className={`mt-0.5 text-lg font-bold tracking-wide ${airlineMeta.color}`}>
                {order.id}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:justify-end">
            <OrderStatusBadge status={order.status} />
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-medium text-gray-700 ring-1 ring-black/5">
              <Plane className="h-3 w-3" />
              {primaryFlight?.airline || airlineMeta.name}
            </span>
          </div>
        </div>

        <p className="mt-3 max-w-2xl text-[11px] leading-relaxed text-gray-600">
          Quý khách cần đưa ra mã đặt chỗ và giấy tờ hợp lệ tại quầy làm thủ tục
          để nhận thẻ lên máy bay.
        </p>
      </div>

      <div className="space-y-5 p-4 sm:p-5">
        {/* Booking summary */}
        <section>
          <h3 className="mb-2.5 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-gray-800">
            <span className="h-3.5 w-0.5 rounded-full bg-sky-500" />
            Thông tin đặt chỗ
          </h3>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <InfoCard label="Mã đặt chỗ" value={order.id} highlight />
            <InfoCard
              label="Hãng hàng không"
              value={primaryFlight?.airline || airlineMeta.name}
            />
            <InfoCard label="Trạng thái" value={<OrderStatusBadge status={order.status} />} />
            <InfoCard label="Hành lý ký gửi" value={order.baggage} />
          </div>
        </section>

        {/* Passengers — cards on mobile, table on lg */}
        <section>
          <h3 className="mb-2.5 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-gray-800">
            <span className="h-3.5 w-0.5 rounded-full bg-sky-500" />
            Thông tin hành khách
            <span className="ml-1 rounded-full bg-gray-100 px-1.5 py-0.5 text-[10px] font-semibold normal-case text-gray-600">
              {order.passengers.length}
            </span>
          </h3>

          <div className="grid gap-3 lg:hidden">
            {order.passengers.map((passenger, index) => (
              <PassengerCard
                key={index}
                passenger={passenger}
                hasReturnFlight={hasReturnFlight}
              />
            ))}
          </div>

          <div className="hidden overflow-hidden rounded-xl border border-gray-200 lg:block">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr className="bg-gray-50 text-left text-[10px] uppercase tracking-wide text-gray-600">
                  <th className="px-3 py-2 font-semibold">Quý danh</th>
                  <th className="px-3 py-2 font-semibold">Họ tên</th>
                  <th className="px-3 py-2 font-semibold">Ngày sinh</th>
                  {hasReturnFlight ? (
                    <>
                      <th className="px-3 py-2 font-semibold">
                        <span className="inline-flex items-center gap-1">
                          <Luggage className="h-3 w-3" />
                          Chiều đi
                        </span>
                      </th>
                      <th className="px-3 py-2 font-semibold">
                        <span className="inline-flex items-center gap-1">
                          <Luggage className="h-3 w-3" />
                          Chiều về
                        </span>
                      </th>
                    </>
                  ) : (
                    <th className="px-3 py-2 font-semibold">
                      <span className="inline-flex items-center gap-1">
                        <Luggage className="h-3 w-3" />
                        Hành lý
                      </span>
                    </th>
                  )}
                </tr>
              </thead>
              <tbody>
                {order.passengers.map((passenger, index) => (
                  <tr
                    key={index}
                    className="border-t border-gray-100 transition-colors hover:bg-gray-50/60"
                  >
                    <td className="px-3 py-2 text-gray-600">
                      {mapPassengerTitle(passenger.type)}
                    </td>
                    <td className="px-3 py-2 font-semibold uppercase text-gray-900">
                      {passenger.name}
                    </td>
                    <td className="px-3 py-2 text-gray-700">
                      {formatPassengerDob(passenger.dateOfBirth) || "—"}
                    </td>
                    {hasReturnFlight ? (
                      <>
                        <td className="px-3 py-2 font-medium text-gray-800">
                          {passenger.departBaggage}
                        </td>
                        <td className="px-3 py-2 font-medium text-gray-800">
                          {passenger.returnBaggage}
                        </td>
                      </>
                    ) : (
                      <td className="px-3 py-2 font-medium text-gray-800">
                        {passenger.departBaggage}
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Flights */}
        <section>
          <h3 className="mb-2.5 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-gray-800">
            <span className="h-3.5 w-0.5 rounded-full bg-sky-500" />
            Thông tin chuyến bay
            <span className="ml-1 rounded-full bg-gray-100 px-1.5 py-0.5 text-[10px] font-semibold normal-case text-gray-600">
              {order.flights.length} chuyến
            </span>
          </h3>

          <div className="grid gap-3">
            {order.flights.map((flight, index) => (
              <FlightCard key={index} flight={flight} index={index} />
            ))}
          </div>
        </section>

        {/* Contact & notes */}
        <section className="grid gap-3 lg:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-gray-50/50 p-3">
            <h4 className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-gray-800">
              <User className="h-3.5 w-3.5 text-sky-600" />
              Người liên hệ
            </h4>
            <p className="text-sm font-semibold text-gray-900">{order.customerName}</p>
          </div>

          <div className="rounded-xl border border-amber-200 bg-amber-50/80 p-3">
            <h4 className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-amber-900">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              Quý khách lưu ý
            </h4>
            <ul className="space-y-1.5 text-[11px] leading-relaxed text-amber-900/90">
              <li className="flex gap-1.5">
                <ArrowRight className="mt-0.5 h-3 w-3 shrink-0" />
                Có mặt tại sân bay trước giờ bay tối thiểu 90 phút (nội địa) hoặc
                180 phút (quốc tế).
              </li>
              <li className="flex gap-1.5">
                <ArrowRight className="mt-0.5 h-3 w-3 shrink-0" />
                Mang theo giấy tờ tùy thân hợp lệ và mã đặt chỗ khi làm thủ tục.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
