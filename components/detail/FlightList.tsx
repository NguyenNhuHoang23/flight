import React from "react";

import { AirOptionAPI, ApiRootResponse } from "./flight-types";
import { FlightRow } from "./FlightRow";

interface Props {
  group?: ApiRootResponse["ListGroup"][number];
  airOptions: AirOptionAPI[];
  showTotalPrice: boolean;
  expandedIndices: number[];
  toggleExpand: (index: number) => void;
}

export const FlightList: React.FC<Props> = ({
  group,
  airOptions,
  showTotalPrice,
  expandedIndices,
  toggleExpand,
}) => {
  if (airOptions.length === 0) {
    return (
      <div className="bg-white p-8 text-center text-gray-500 rounded border">
        Không tìm thấy dữ liệu chuyến bay.
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-b shadow-sm divide-y divide-gray-200">
      {airOptions.map((airOption, idx) => (
        <FlightRow
          key={idx}
          index={idx}
          airOption={airOption}
          group={group}
          showTotalPrice={showTotalPrice}
          isExpanded={expandedIndices.includes(idx)}
          toggleExpand={toggleExpand}
        />
      ))}
    </div>
  );
};
