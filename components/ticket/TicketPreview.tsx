import React from "react";

import {
  AirlineBrand,
  TicketFormState,
} from "./ticket-types";

import VietnamAirlinesTicket from "./VietnamAirlinesTicket";
import VietjetTicket from "./VietjetTicket";
import BambooTicket from "./BambooTicket";

interface Props {
  selectedBrand: AirlineBrand;
  customData: TicketFormState;
  isRoundTrip: boolean;
  activeFlightIndex?: number;
}

export default function TicketPreview({
  selectedBrand,
  customData,
  isRoundTrip,
  activeFlightIndex = 0,
}: Props) {
  return (
    <div className="lg:col-span-9 flex justify-center">
      <div className="print-area w-full max-w-220">
        {(selectedBrand === "vietnam_airlines" ||
          selectedBrand === "vietravel") && (
          <VietnamAirlinesTicket
            selectedBrand={selectedBrand}
            customData={customData}
          />
        )}

        {selectedBrand === "vietjet" && (
          <VietjetTicket
            customData={customData}
            activeFlightIndex={activeFlightIndex}
          />
        )}

        {selectedBrand === "bamboo" && (
          <BambooTicket
            customData={customData}
            isRoundTrip={isRoundTrip}
          />
        )}
      </div>
    </div>
  );
}