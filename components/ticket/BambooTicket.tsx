import React from "react";
import Image from "next/image";

import PassengerQr from "./PassengerQr";
import {
  TicketFormState,
} from "./ticket-types";

interface Props {
  customData: TicketFormState;
  isRoundTrip: boolean;
}

export default function BambooTicket({
  customData,
  isRoundTrip,
}: Props) {
  return (
    <div className="bg-white p-6 font-sans text-slate-800 max-w-4xl mx-auto shadow-sm border border-slate-200 rounded-sm">
      <h1 className="text-xl font-bold text-slate-800 mb-6 pb-2 border-b border-slate-100">
        Số vé điện tử
      </h1>

      <div className="flex justify-between items-start mb-8">
        <div className="flex gap-4 items-start">
          <div className="w-16 h-16 border border-slate-300 p-1 bg-white">
            <PassengerQr
              passenger={
                customData.passengers[0]
              }
              ticket={customData}
              size={200}
            />
          </div>

          <div className="text-xs space-y-0.5">
            <div className="font-bold text-sm text-slate-800">
              Mã đặt chỗ:{" "}
              <span className="font-mono">
                {customData.pnr || "05FOLA"}
              </span>
            </div>

            <div className="text-slate-500 text-[11px]">
              Ngày phát hành: 27.12.2019
            </div>

            <div className="text-slate-500 text-[11px]">
              Ngày thay đổi: 05.02.2020
            </div>

            <div className="text-slate-500 text-[11px]">
              Nơi xuất vé: ZION
            </div>
          </div>
        </div>

        <div className="text-right space-y-0.5 max-w-70">
          <div className="flex justify-end items-center gap-1">
            <Image
              src="/images/ve/Bamboo_Air.png"
              alt="Logo Bamboo Airways"
              width={180}
              height={50}
            />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="font-bold text-slate-800 text-sm mb-2">
          Hành khách
        </h2>

        <div className="border-t border-slate-200 pt-2 space-y-3 text-[11px]">
          {customData.passengers.map(
            (passenger, index) => (
              <div
                key={index}
                className="grid grid-cols-5 gap-2 text-nlack"
              >
                <div className="font-bold text-slate-800 uppercase">
                  {passenger.name ||
                    `HÀNH KHÁCH ${index + 1}`}
                </div>

                <div>
                  Ngày sinh:
                  <br />

                  <span className="font-medium">
                    {passenger.dob || "-"}
                  </span>
                </div>

                <div>
                  Số vé điện tử:
                  <br />

                  <span className="font-medium">
                    {customData.ticketNumber ||
                      "22421300223"}
                  </span>
                </div>

                <div>
                  Số ghế:
                  <br />

                  <span className="font-medium">
                    {passenger.seat ||
                      customData.seat ||
                      "-"}
                  </span>
                </div>

                <div>
                  Cửa ra:
                  <br />

                  <span className="font-medium">
                    {passenger.gate ||
                      customData.gate ||
                      "-"}
                  </span>
                </div>
              </div>
            ),
          )}
        </div>
      </div>

      <div>
        <h2 className="font-bold text-slate-800 text-sm mb-2">
          Thông tin chuyến bay
        </h2>

        <div
          className={`border-t border-slate-200 pt-3 text-xs ${
            isRoundTrip
              ? "grid grid-cols-2 gap-8"
              : "block max-w-md"
          }`}
        >
          <div className="space-y-1">
            {isRoundTrip && (
              <div className="font-bold text-slate-900">
                Chuyến bay đi
              </div>
            )}

            <div className="font-bold text-slate-900">
              {customData.departDate ||
                "Thứ Sáu, 31 Tháng Một, 2020"}
            </div>

            <div className="font-bold text-slate-900 pt-1">
              {customData.departTime || "06:55"}{" "}
              {customData.departureCity ||
                "Hà Nội"}{" "}
              ({customData.departureCode || "HAN"})
            </div>

            <div className="font-bold text-slate-900">
              {customData.arrivalTime || "09:05"}{" "}
              {customData.arrivalCity ||
                "Hồ Chí Minh"}{" "}
              ({customData.arrivalCode || "SGN"})
            </div>

            <div className="text-[#008A4B] font-bold pt-2">
              Bamboo Airways{" "}
              {customData.flightNumber ||
                "QH 211"}
            </div>

            <div className="text-[11px] text-nlack space-y-0.5 pt-0.5">
              <div>
                Hãng vận chuyển: Bamboo Airways
              </div>

              <div>
                Nhà ga đi:{" "}
                {customData.terminal || "T1"}
              </div>

              <div>
                Nhà ga đến: T1
              </div>

              <div>
                Thời gian lên máy bay: 06:15
              </div>

              <div>
                Hành lý miễn cước:{" "}
                {customData.baggage || "20KG"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}