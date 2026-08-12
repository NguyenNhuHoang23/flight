import React from "react";
import {
  generatePassengerQrData,
} from "./ticket-utils";
import {
  PassengerInfo,
  TicketFormState,
} from "./ticket-types";

interface PassengerQrProps {
  passenger: PassengerInfo;
  ticket: TicketFormState;
  size?: number;
}

export default function PassengerQr({
  passenger,
  ticket,
  size = 180,
}: PassengerQrProps) {
  const qrData = generatePassengerQrData(
    passenger,
    ticket,
  );

  const qrUrl =
    `https://api.qrserver.com/v1/create-qr-code/?` +
    `size=${size}x${size}&data=${encodeURIComponent(qrData)}`;

  return (
    <img
      src={qrUrl}
      alt={`QR ${passenger.name}`}
      width={size}
      height={size}
      className="w-full h-full object-contain"
    />
  );
}