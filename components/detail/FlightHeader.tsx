// FlightHeader.tsx
import React from "react";
import { Info } from "lucide-react";
import { ApiRootResponse } from "./flight-types";
import { DateSelector } from "./DateSelector";

interface Props {
  group?: ApiRootResponse["ListGroup"][number];
  airOptionsCount: number;
  showTotalPrice: boolean;
  selectedDate: Date;
  onSelectDate: (date: Date) => void;
}

export const FlightHeader: React.FC<Props> = ({
  group,
  airOptionsCount,
  showTotalPrice,
  selectedDate,
  onSelectDate,
}) => {
  return (
    <div className="rounded-t-md shadow-sm overflow-hidden">
      {/* Top Header */}
      <div className="bg-[#006838] text-white p-3">
        <div className="flex justify-between items-center text-base font-bold mb-1">
          <span>
            {group?.StartPoint || "SGN"} → {group?.EndPoint || "HAN"}
          </span>

          <span className="text-xs font-normal bg-[#004d29] px-2 py-0.5 rounded">
            Bay thẳng
          </span>
        </div>

        <div className="flex justify-between items-center text-xs">
          <span>
            Hành trình: <strong>{group?.Journey || "SGNHAN"}</strong> |{" "}
            <strong>Hiển thị {airOptionsCount} chuyến bay</strong>
          </span>

          <span className="flex items-center gap-1 font-normal italic text-yellow-200">
            <Info size={14} />

            {showTotalPrice
              ? "Giá đã bao gồm thuế & phí"
              : "Giá cơ bản / toàn đoàn"}
          </span>
        </div>
      </div>

      {/* Date Bar */}
      <DateSelector selectedDate={selectedDate} onSelectDate={onSelectDate} />
    </div>
  );
};
