import { Plane } from "lucide-react";
import { FlightDetail } from "./payment-types";
import InfoRow from "./InfoRow";

interface FlightSummaryProps {
  flights: FlightDetail[];
}

export default function FlightSummary({ flights }: FlightSummaryProps) {
  return (
    <div className="space-y-3 border-t border-b border-gray-100 py-3">
      {flights.map((flight, index) => (
        <div key={`${flight.flightNumber}-${index}`} className="space-y-1.5">
          <div className="flex items-center justify-between rounded bg-gray-50 p-1.5 text-xs font-bold text-gray-700">
            <span className="flex items-center gap-1.5">
              <Plane
                size={13}
                className={`text-[#007849] ${index === 1 ? "rotate-180" : ""}`}
              />

              {flight.directionLabel}
            </span>

            <span className="font-medium text-gray-500">
              {flight.airline} ({flight.flightNumber})
            </span>
          </div>

          <div className="space-y-1 pl-1">
            <InfoRow label="Chặng bay" value={flight.route} bold />

            <InfoRow label="Ngày bay" value={flight.date} />

            <InfoRow label="Giờ bay" value={flight.time} />
          </div>
        </div>
      ))}
    </div>
  );
}
