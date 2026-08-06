import React from "react";
import { CalendarX } from "lucide-react";

import { AirOptionAPI, ApiRootResponse } from "./flight-types";
import { FlightRow } from "./FlightRow";

interface Props {
  group?: ApiRootResponse["ListGroup"][number];
  airOptions: AirOptionAPI[];
  showTotalPrice: boolean;
  expandedIndices: number[];
  toggleExpand: (index: number) => void;
  onSelectFlight?: (flight: AirOptionAPI) => void;
  selectedFlight?: AirOptionAPI | null;
}

export const FlightList: React.FC<Props> = ({
  group,
  airOptions,
  showTotalPrice,
  expandedIndices,
  toggleExpand,
  onSelectFlight,
  selectedFlight,
}) => {
  if (!airOptions || airOptions.length === 0) {
    return (
      <div className="bg-white p-6 sm:p-8 text-center rounded-xl border border-slate-200 flex flex-col items-center justify-center gap-2 shadow-sm">
        <CalendarX className="w-9 h-9 text-slate-300" />
        <p className="text-xs sm:text-sm font-medium text-slate-500">
          Không tìm thấy chuyến bay phù hợp cho ngày đã chọn.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-2.5 sm:space-y-3">
      {airOptions.map((airOption, idx) => (
        <FlightRow
          key={idx}
          index={idx}
          airOption={airOption}
          group={group}
          showTotalPrice={showTotalPrice}
          isExpanded={expandedIndices.includes(idx)}
          toggleExpand={toggleExpand}
          onSelectFlight={onSelectFlight}
isSelected={
  selectedFlight?.ListFlightOption?.[0]?.ListFlight?.[0]?.FlightNumber ===
  airOption.ListFlightOption?.[0]?.ListFlight?.[0]?.FlightNumber
}
        />
      ))}
    </div>
  );
};