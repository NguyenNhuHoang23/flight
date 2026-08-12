import React from "react";
import Image from "next/image";

import PassengerQr from "./PassengerQr";
import { TicketFormState } from "./ticket-types";

interface Props {
  customData: TicketFormState;
  activeFlightIndex?: number;
}

export default function VietjetTicket({
  customData,
  activeFlightIndex = 0,
}: Props) {
  return (
    <div className="bg-white border border-red-600 rounded-sm font-sans max-w-[320px] mx-auto shadow-sm text-slate-900 overflow-hidden">
      <div className="bg-[#ED1B24] text-white px-3.5 py-2 flex items-center justify-between">
        <Image
          src="/images/ve/123.jpg"
          alt="VietJet Air Logo"
          width={110}
          height={28}
        />
      </div>

      <div className="px-3.5 py-3 space-y-2.5">
        <div className="flex justify-between items-center border-b border-slate-200 pb-2">
          <span className="font-black text-[#D91B24] text-[13px] tracking-wide uppercase">
            THẺ LÊN TÀU BAY
          </span>

          <span className="font-bold text-[11px] uppercase text-slate-800">
            {activeFlightIndex === 0
              ? "CHIỀU ĐI"
              : "CHIỀU VỀ"}
          </span>
        </div>

        <div className="flex justify-between items-center border-b border-dashed border-slate-200 pb-2.5">
          <div className="text-left w-[42%]">
            <div className="text-[10px] text-slate-500 font-medium truncate">
              {customData.departureCity}
            </div>

            <div className="text-[15px] font-black text-black leading-none mt-1">
              {customData.departureCode}
            </div>
          </div>

          <span className="text-slate-800 text-xs font-bold px-1">
            ✈
          </span>

          <div className="text-right w-[42%]">
            <div className="text-[10px] text-slate-500 font-medium truncate">
              {customData.arrivalCity}
            </div>

            <div className="text-[15px] font-black text-black leading-none mt-1">
              {customData.arrivalCode}
            </div>
          </div>
        </div>

        <div className="border-b border-dashed border-slate-200 pb-2.5">
          <div className="text-[10px] font-bold text-slate-500 uppercase mb-1">
            HÀNH KHÁCH
          </div>

          <div className="font-extrabold text-xs text-black uppercase leading-snug whitespace-pre-line">
            {customData.passengers.map(
              (passenger, index) => (
                <div
                  key={index}
                  className={index > 0 ? "mt-0.5" : ""}
                >
                  {passenger.name} - {passenger.dob}
                </div>
              ),
            )}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 text-left border-b border-dashed border-slate-200 pb-2.5">
          <div>
            <div className="text-[9px] text-slate-500 font-bold uppercase">
              NGÀY
            </div>

            <div className="font-black text-xs text-black mt-0.5">
              {customData.departDate}
            </div>
          </div>

          <div>
            <div className="text-[9px] text-slate-500 font-bold uppercase">
              CHUYẾN BAY
            </div>

            <div className="font-black text-xs text-black mt-0.5">
              {customData.flightNumber}
            </div>
          </div>

          <div>
            <div className="text-[9px] text-slate-500 font-bold uppercase">
              MÃ ĐẶT CHỖ
            </div>

            <div className="font-black text-xs text-black mt-0.5">
              {customData.pnr}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-1 text-left border-b border-dashed border-slate-200 pb-2.5">
          <div>
            <div className="text-[9px] text-slate-500 font-bold uppercase">
              CỬA
            </div>

            <div className="font-black text-xs text-black mt-0.5">
              {customData.gate}
            </div>
          </div>

          <div>
            <div className="text-[9px] text-slate-500 font-bold uppercase">
              GIỜ RA TÀU BAY
            </div>

            <div className="font-black text-xs text-black mt-0.5">
              {customData.departTime}
            </div>
          </div>

          <div>
            <div className="text-[9px] text-slate-500 font-bold uppercase">
              SỐ GHẾ
            </div>

            <div className="font-black text-xs text-black mt-0.5">
              {customData.seat}
            </div>
          </div>

          <div>
            <div className="text-[9px] text-slate-500 font-bold uppercase">
              SEQ
            </div>

            <div className="font-black text-xs text-black mt-0.5">
              {customData.seq || "03"}
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center border-b border-dashed border-slate-200 pb-2.5">
          <div>
            <div className="text-[9px] text-slate-500 font-bold uppercase">
              TÌNH TRẠNG VÉ
            </div>

            <div className="font-black text-xs text-black uppercase mt-0.5">
              {customData.ticketStatus ||
                "ĐÃ XÁC NHẬN"}
            </div>
          </div>

          <div className="text-right">
            <div className="text-[9px] text-slate-500 font-bold uppercase">
              MÃ CODE
            </div>

            <div className="font-black text-xs text-black uppercase mt-0.5">
              CBFS
            </div>
          </div>
        </div>

        <p className="text-[10px] text-slate-500 text-center leading-tight px-1">
          Lưu ý: Cửa khởi hành sẽ đóng 15 phút
          trước giờ khởi hành. Hành khách sẽ không
          được phép lên tàu bay khi cửa khởi hành
          đã đóng.
        </p>

        <div className="flex justify-center pt-1">
          <div className="w-28 h-28 border border-slate-300 p-1.5 bg-white rounded-sm shadow-sm">
            <PassengerQr
              passenger={customData.passengers[0]}
              ticket={customData}
              size={112}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
