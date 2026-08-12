import React from "react";
import Image from "next/image";

import PassengerQr from "./PassengerQr";
import {
  AirlineBrand,
  TicketFormState,
} from "./ticket-types";

interface Props {
  selectedBrand: AirlineBrand;
  customData: TicketFormState;
}

export default function VietnamAirlinesTicket({
  selectedBrand,
  customData,
}: Props) {
  const isVietnamAirlines =
    selectedBrand === "vietnam_airlines";

  return (
    <div
      className={`${
        isVietnamAirlines
          ? "bg-[#f8f8f8]"
          : "bg-[#dbebf2]"
      } border border-slate-300 p-6 rounded-sm shadow-md font-sans text-slate-800`}
    >
      <div className="flex justify-between items-start border-b pb-4 mb-4">
        <div>
          <div className="text-[11px] font-bold text-slate-900 uppercase">
            MÃ ĐẶT CHỖ
          </div>

          <div className="text-[11px] font-extrabold tracking-wider text-slate-900">
            {customData.pnr}
          </div>
        </div>

        <div>
          {isVietnamAirlines ? (
            <Image
              src="/images/ve/VietnamAli.webp"
              alt="Vietnam Airlines Logo"
              width={200}
              height={40}
            />
          ) : (
            <Image
              src="/images/ve/VietravelAli.png"
              alt="Vietravel Airlines Logo"
              width={200}
              height={40}
            />
          )}
        </div>
      </div>

      <div className="border border-slate-200 rounded-sm shadow relative overflow-hidden bg-white">
        <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
          <img
            src="/images/may-bay-vector-png-09.png"
            alt=""
            className="w-[70%] max-w-none opacity-[0.10] object-contain select-none"
          />
        </div>

        <div className="relative z-10">
          <div className="bg-slate-100 p-2.5 flex items-center gap-3 text-xs font-bold text-black border-b border-black">
            <span className="text-xl">✈</span>

            <div className="flex flex-col gap-0.5">
              <span>
                KHỞI HÀNH:{" "}
                {customData.departDate.toUpperCase()}
              </span>

              <span className="text-red-600 font-normal">
                Vui lòng kiểm tra thời gian bay trước
                khi khởi hành
              </span>
            </div>
          </div>

          <div className="p-4">
            <div className="grid grid-cols-4 gap-4 text-xs mb-6">
              <div className="space-y-1.5">
                <div className="font-bold text-sm">
                  {isVietnamAirlines
                    ? "Vietnam Airlines"
                    : "Vietravel Airlines"}
                </div>

                <div className="font-bold text-sm text-slate-900">
                  {customData.flightNumber}
                </div>

                <div className="text-sm text-black grid grid-cols gap-0.5">
                  Thời gian bay:{" "}
                  <span className="font-bold text-slate-700">
                    {customData.flightDuration}
                  </span>
                </div>

                <div className="text-sm text-black grid grid-cols gap-0.5">
                  Khoảng:{" "}
                  <span className="font-bold text-slate-700">
                    {customData.cabinClass}
                  </span>
                </div>

                <div className="text-sm text-black grid grid-cols gap-0.5">
                  Tình trạng chỗ:{" "}
                  <span className="font-bold text-slate-900">
                    {customData.ticketStatus}
                  </span>
                </div>
              </div>

              <div className="col-span-2 rounded-sm text-xs relative">
                <div className="absolute left-40 top-16 -translate-x-1/2 text-black text-xs font-bold pointer-events-none">
                  ►
                </div>

                <div className="grid grid-cols-2 gap-3 ml-6">
                  <div className="space-y-1.5 pr-1">
                    <div className="text-base font-black text-slate-900 leading-none">
                      {customData.departureCode}
                    </div>

                    <div className="text-sm text-slate-500 leading-tight">
                      {customData.departureCity} (
                      {customData.departureCode})
                    </div>

                    <div className="pt-2 text-sm">
                      <div className="text-slate-600 text-sm">
                        Giờ khởi hành:
                      </div>

                      <div className="font-bold text-slate-900">
                        {customData.departTime}
                      </div>
                    </div>

                    <div className="text-sm">
                      <div className="text-slate-600 text-sm">
                        Cổng: 
                      </div>

                      <div className="font-bold text-slate-900">
                        Terminal 1
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5 pl-1">
                    <div className="text-base font-black text-slate-900 leading-none">
                      {customData.arrivalCode}
                    </div>

                    <div className="text-sm text-slate-500 leading-tight">
                      {customData.arrivalCity} (
                      {customData.arrivalCode})
                    </div>

                    <div className="pt-2 text-sm">
                      <div className="text-slate-600 text-sm">
                        Giờ đến:
                      </div>

                      <div className="font-bold text-slate-900">
                        {customData.arrivalTime}
                      </div>
                    </div>

                    <div className="text-sm">
                      <div className="text-slate-600 text-sm">
                        Cổng:
                      </div>

                      <div className="font-bold text-slate-900">
                      Terminal 1
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-1 pl-2 text-[11px]">
                <div>
                  Quãng đường đi (Dặm):
                  <br />
                  <strong>321</strong>
                </div>

                <div>
                  Điểm dừng:
                  <br />
                  <strong>0</strong>
                </div>

                <div>
                  <div>QR chuyến bay:</div>

                  <div className="pt-2 flex justify-start">
                    <div className="w-32 h-32 border border-slate-300 p-1.5 bg-white rounded-sm shadow-sm">
                      <PassengerQr
                        passenger={
                          customData.passengers[0]
                        }
                        ticket={customData}
                        size={200}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t pt-4 bg-slate-50">
              <table className="w-full text-left text-xs border-collapse">
                <thead className="bg-slate-200 text-black">
                  <tr className="text-[11px] font-bold">
                    <th className="py-2 px-3 w-1/2">
                      Tên Hành Khách:
                    </th>

                    <th className="py-2 px-3 w-1/4">
                      Ghế:
                    </th>

                    <th className="py-2 px-3 w-1/4">
                      Cửa ra tàu bay:
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {customData.passengers.map(
                    (p, idx) => (
                      <tr
                        key={idx}
                        className="align-top border-b border-slate-100 last:border-none"
                      >
                        <td className="py-2 px-3 font-extrabold text-slate-900">
                          » {p.name} - {p.dob}
                        </td>

                        <td
                          className="py-2 px-3 font-black text-xs"
                          style={{
                            color: "#1E65B8",
                          }}
                        >
                          {p.seat}
                        </td>

                        <td className="py-2 px-3 font-extrabold text-slate-900">
                          {customData.gate}
                        </td>
                      </tr>
                    ),
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}