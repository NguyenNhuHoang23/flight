"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { AIRLINE_INFO, formatPrice, parseTime } from "../detail/flight-utils";
import {
  AirOptionAPI,
  ApiRootResponse,
  FareOptionAPI,
} from "../detail/flight-types";

interface FlightBookingFormProps {
  airOption: AirOptionAPI;
  cheapestFare?: FareOptionAPI;
  group?: ApiRootResponse["ListGroup"][number];
  onBack: () => void; // Hàm quay lại danh sách tìm kiếm
}

export const FlightBookingForm: React.FC<FlightBookingFormProps> = ({
  airOption,
  cheapestFare,
  group,
  onBack,
}) => {
  // 1. Tách thông tin từ dữ liệu chuyến bay
  const fare = cheapestFare || airOption.ListFareOption?.[0];
  const flightOption = airOption.ListFlightOption?.[0];
  const flightData = flightOption?.ListFlight?.[0];
  const segmentData = flightData?.ListSegment?.[0];
  const airlineCode = airOption.Airline || "VN";

  const airlineMeta = AIRLINE_INFO[
    airlineCode as keyof typeof AIRLINE_INFO
  ] || {
    name: airlineCode,
    image: "/images/airlines/default.png",
  };

  const rawFlightNum =
    flightData?.FlightNumber || segmentData?.FlightNumber || "---";
  const flightNumber = rawFlightNum.startsWith(airlineCode)
    ? rawFlightNum
    : `${airlineCode}${rawFlightNum}`;

  const depDateStr = flightData?.DepartDate || segmentData?.DepartDate;
  const arrDateStr = flightData?.ArriveDate || segmentData?.ArriveDate;
  const depTime = parseTime(depDateStr);
  const arrTime = parseTime(arrDateStr);
  const equipmentCode = segmentData?.Equipment || "Airbus A321";

  // Số lượng khách từ group
  const adtCount = group?.Adt || 1;
  const chdCount = group?.Chd || 0;
  const infCount = group?.Inf || 0;

  // Giá cả
  const baseFare = fare?.BaseFare || 0;
  const totalFare = fare?.TotalFare || 0;
  const feeAndTax = totalFare - baseFare;

  // 2. State lưu dữ liệu Form
  const [passengerData, setPassengerData] = useState({
    title: "Nam",
    fullName: "",
    baggage: "0",
    dobDay: "",
    dobMonth: "",
    dobYear: "",
  });

  const [contactData, setContactData] = useState({
    fullName: "",
    phone: "",
    email: "",
  });

  const [options, setOptions] = useState({
    hotel: false,
    checkin: false,
    vat: false,
    note: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      flightInfo: {
        airline: airlineCode,
        flightNumber,
        depTime,
        arrTime,
        totalFare,
      },
      passenger: passengerData,
      contact: contactData,
      options,
    };
    console.log("Submit Booking Data:", payload);
    alert("Gửi thông tin đặt vé thành công!");
  };

  return (
    <div className="max-w-6xl mx-auto p-4 font-sans text-gray-800">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        {/* === CỘT BÊN TRÁI: FORM NHẬP THÔNG TIN (2 COLS) === */}
        <div className="lg:col-span-2 space-y-6">
          {/* Section: Thông tin hành khách */}
          <div className="bg-gray-100 p-4 rounded border border-gray-200">
            <h3 className="font-bold text-gray-700 text-sm uppercase mb-3 flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-full bg-gray-500 text-white flex items-center justify-center text-[10px]">
                👤
              </span>
              THÔNG TIN HÀNH KHÁCH
            </h3>

            <div className="bg-white p-4 rounded border border-gray-200 space-y-4">
              <div className="font-semibold text-gray-800 text-sm">
                Hành khách 1 (Người lớn)
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                {/* Giới tính */}
                <div>
                  <label className="block text-gray-600 mb-1">Giới tính</label>
                  <select
                    value={passengerData.title}
                    onChange={(e) =>
                      setPassengerData({
                        ...passengerData,
                        title: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-green-600"
                  >
                    <option value="Nam">Nam</option>
                    <option value="Nữ">Nữ</option>
                  </select>
                </div>

                {/* Họ và tên */}
                <div>
                  <label className="block text-gray-600 mb-1">
                    Họ và tên <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Họ và tên Người lớn"
                    value={passengerData.fullName}
                    onChange={(e) =>
                      setPassengerData({
                        ...passengerData,
                        fullName: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-green-600"
                  />
                </div>

                {/* Mua hành lý ký gửi */}
                <div>
                  <label className="block text-gray-600 mb-1">
                    Mua hành lý ký gửi
                  </label>
                  <select
                    value={passengerData.baggage}
                    onChange={(e) =>
                      setPassengerData({
                        ...passengerData,
                        baggage: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-green-600"
                  >
                    <option value="0">Mua hành lý ký gửi</option>
                    <option value="15">15 kg (+ 180.000đ)</option>
                    <option value="20">20 kg (+ 220.000đ)</option>
                    <option value="30">30 kg (+ 350.000đ)</option>
                  </select>
                </div>
              </div>

              {/* Ngày sinh */}
              <div>
                <label className="block text-gray-600 mb-1 text-xs">
                  Ngày sinh
                </label>
                <div className="grid grid-cols-3 gap-2 max-w-xs text-xs">
                  <select
                    value={passengerData.dobDay}
                    onChange={(e) =>
                      setPassengerData({
                        ...passengerData,
                        dobDay: e.target.value,
                      })
                    }
                    className="border border-gray-300 p-2 rounded"
                  >
                    <option value="">Ngày</option>
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>

                  <select
                    value={passengerData.dobMonth}
                    onChange={(e) =>
                      setPassengerData({
                        ...passengerData,
                        dobMonth: e.target.value,
                      })
                    }
                    className="border border-gray-300 p-2 rounded"
                  >
                    <option value="">Tháng</option>
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>

                  <select
                    value={passengerData.dobYear}
                    onChange={(e) =>
                      setPassengerData({
                        ...passengerData,
                        dobYear: e.target.value,
                      })
                    }
                    className="border border-gray-300 p-2 rounded"
                  >
                    <option value="">Năm</option>
                    {Array.from({ length: 80 }, (_, i) => 2024 - i).map((y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Ghi chú xách tay */}
              <div className="flex items-start gap-2 pt-2 text-xs text-gray-600 border-t border-gray-100">
                <span className="text-base">🧳</span>
                <p>
                  <span className="font-semibold text-gray-700">
                    Hành lý mỗi khách:
                  </span>{" "}
                  01 kiện chính (kích thước tối đa 56x36x23cm) và/hoặc 01 túi
                  xách nhỏ (kích thước tối đa 40x30x10), tổng trọng lượng không
                  vượt quá 07kg
                </p>
              </div>
            </div>
          </div>

          {/* Section: Thông tin liên hệ */}
          <div className="bg-gray-100 p-4 rounded border border-gray-200">
            <h3 className="font-bold text-gray-700 text-sm uppercase mb-3 flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-full bg-gray-500 text-white flex items-center justify-center text-[10px]">
                📇
              </span>
              THÔNG TIN LIÊN HỆ
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs mb-4">
              <div>
                <label className="block text-gray-600 mb-1">
                  Họ tên <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Họ tên người liên hệ"
                  value={contactData.fullName}
                  onChange={(e) =>
                    setContactData({ ...contactData, fullName: e.target.value })
                  }
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-green-600"
                />
              </div>

              <div>
                <label className="block text-gray-600 mb-1">
                  Số điện thoại <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Số điện thoại liên hệ"
                  value={contactData.phone}
                  onChange={(e) =>
                    setContactData({ ...contactData, phone: e.target.value })
                  }
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-green-600"
                />
              </div>

              <div>
                <label className="block text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Email liên hệ (nếu có)"
                  value={contactData.email}
                  onChange={(e) =>
                    setContactData({ ...contactData, email: e.target.value })
                  }
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-green-600"
                />
              </div>
            </div>

            {/* Checkboxes Dịch vụ thêm */}
            <div className="space-y-2 text-xs text-gray-700 pt-2 border-t border-gray-200">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={options.hotel}
                  onChange={(e) =>
                    setOptions({ ...options, hotel: e.target.checked })
                  }
                  className="rounded text-green-600"
                />
                Tôi cần đặt thêm khách sạn
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={options.checkin}
                  onChange={(e) =>
                    setOptions({ ...options, checkin: e.target.checked })
                  }
                  className="rounded text-green-600"
                />
                Check-in chuyến bay
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={options.vat}
                  onChange={(e) =>
                    setOptions({ ...options, vat: e.target.checked })
                  }
                  className="rounded text-green-600"
                />
                Xuất hóa đơn VAT
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={options.note}
                  onChange={(e) =>
                    setOptions({ ...options, note: e.target.checked })
                  }
                  className="rounded text-green-600"
                />
                Ghi chú đơn hàng
              </label>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              onClick={onBack}
              className="flex items-center gap-1.5 text-blue-600 hover:underline text-sm font-medium"
            >
              <ArrowLeft size={16} /> Chọn lại chuyến bay
            </button>

            <button
              type="submit"
              className="bg-[#FF4D15] hover:bg-[#E03E0B] text-white font-bold text-base px-10 py-3 rounded uppercase shadow transition"
            >
              ĐẶT VÉ
            </button>
          </div>

          {/* Quy định giấy tờ */}
          <div className="text-xs text-gray-600 space-y-2 pt-4">
            <h4 className="font-bold text-gray-800 uppercase">
              QUY ĐỊNH VỀ GIẤY TỜ TỦY THÂN
            </h4>
            <p>
              Quý khách cần đảm bảo một trong các giấy tờ sau khi làm thủ tục
              tại sân bay:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Căn cước công dân;</li>
              <li>Hộ chiếu;</li>
              <li>VNeID định danh điện tử mức độ 2;</li>
              <li>Giấy phép lái xe;</li>
              <li>
                Giấy khai sinh (Bản chính hoặc Trích lục, chỉ áp dụng cho hành
                khách dưới 14 tuổi)
              </li>
            </ul>
            <p className="italic text-gray-500">
              Các loại giấy tờ là bản gốc còn rõ nét, nguyên vẹn, còn thời hạn
              theo quy định (từ 01/01/2025 CMND không còn hiệu lực sử dụng)
            </p>
          </div>
        </div>

        {/* === CỘT BÊN PHẢI: CHI TIẾT CHUYẾN BAY & GIÁ (1 COL) === */}
        <div className="space-y-4">
          <div className="bg-white p-4 rounded border border-gray-200 space-y-4 shadow-sm">
            {/* Header Hành Trình */}
            <div className="flex items-center justify-between font-bold text-gray-800 text-sm pb-2 border-b">
              <span>Hà Nội ✈ TP Hồ Chí Minh</span>
              <span className="text-xs font-normal">Thứ Bảy 01/08</span>
            </div>

            {/* Thông tin chuyến bay ngắn */}
            <div className="flex items-start justify-between text-xs">
              <div>
                <p className="font-medium text-gray-600">
                  Nội Bài ✈ Tân Sơn Nhất
                </p>
                <p className="font-bold text-gray-800 my-0.5">
                  Chuyến bay{" "}
                  <span className="text-red-600">{flightNumber}</span>
                </p>
                <div className="flex items-center gap-1 mt-1">
                  <Image
                    src={airlineMeta.image}
                    alt={airlineCode}
                    width={60}
                    height={20}
                    className="h-4 object-contain"
                  />
                  <span className="text-gray-500 font-medium">
                    {airlineMeta.name}
                  </span>
                </div>
              </div>

              <div className="text-right">
                <p className="font-semibold text-gray-700">
                  {depTime} - {arrTime}
                </p>
                <span className="inline-block bg-red-100 text-red-600 font-bold text-[10px] px-1.5 py-0.5 rounded my-1">
                  TIẾT KIỆM
                </span>
                <p className="text-gray-400 text-[11px]">{equipmentCode}</p>
              </div>
            </div>

            {/* Chi tiết Giá */}
            <div className="border-t border-b py-3 text-xs space-y-1.5">
              <div className="flex justify-between text-gray-700">
                <span>Vé người lớn</span>
                <span>
                  {formatPrice(baseFare)} đ{" "}
                  <span className="text-gray-400">x {adtCount} =</span>{" "}
                  {formatPrice(baseFare * adtCount)} đ
                </span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Tổng thuế + phí</span>
                <span>= {formatPrice(feeAndTax * adtCount)} đ</span>
              </div>
            </div>

            {/* Tổng tiền */}
            <div className="flex justify-between items-center font-bold text-sm">
              <span className="text-gray-800">Tổng giá vé</span>
              <span className="text-red-600 text-base">
                {formatPrice(totalFare * adtCount)} đ
              </span>
            </div>
          </div>

          {/* Điều kiện vé */}
          <div className="bg-gray-50 p-4 rounded border border-gray-200 text-xs space-y-2 text-gray-700">
            <h4 className="font-bold text-gray-800 uppercase">ĐIỀU KIỆN VÉ</h4>
            <ul className="space-y-1.5 list-disc pl-4 text-gray-600">
              <li>
                Hành lý xách tay: 01 kiện chính (tối đa 56x36x23cm) và/hoặc 01
                túi xách nhỏ (tối đa 40x30x10), tổng trọng lượng không vượt quá
                07kg
              </li>
              <li>
                Hành lý ký gửi: Chưa bao gồm hành lý ký gửi, chọn thêm ở trang
                đặt vé, mỗi kiện đóng không quá 32kg/kiện (nếu có)
              </li>
              <li>Suất ăn/uống tiêu chuẩn: Chưa bao gồm suất ăn miễn phí</li>
              <li>Hoàn vé: Không áp dụng hoàn tiền trong mọi trường hợp</li>
              <li>Đổi tên: Không áp dụng</li>
              <li>
                Bảo lưu vé: 400,000VNĐ/ 1 khách / 1 chặng (01 năm tính từ ngày
                bay đầu tiên trên vé)
              </li>
              <li>
                Thời hạn Bảo lưu vé: Trước giờ khởi hành tối thiểu 25 tiếng
              </li>
              <li>
                Đổi chuyến bay: Phí 400,000 VNĐ + chênh lệch nếu có/ 1 khách/ 1
                chặng
              </li>
              <li>Phí dịch vụ không được hoàn lại trong mọi trường hợp</li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
};
