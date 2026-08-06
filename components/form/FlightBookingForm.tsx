"use client";

import React, { useState } from "react";
import { ArrowLeft, Plane } from "lucide-react";
import { AIRLINE_INFO, formatPrice, parseTime } from "../detail/flight-utils";
import { AirOptionAPI } from "../detail/flight-types";
import { useRouter } from "next/navigation";

interface PassengerFormState {
  id: string;
  type: "ADULT" | "CHILD" | "INFANT";
  label: string;
  title: string;
  fullName: string;
  departBaggage: string;
  returnBaggage: string;
  dobDay: string;
  dobMonth: string;
  dobYear: string;
}

interface FlightBookingFormProps {
  departFlight: AirOptionAPI;
  returnFlight?: AirOptionAPI | null;
  isRoundTrip?: boolean;
  onBack: () => void;
  // Cho phép truyền trực tiếp nếu parent component đã parse sẵn số khách
  adultsCount?: number;
  childrenCount?: number;
  infantsCount?: number;
}

export const FlightBookingForm: React.FC<FlightBookingFormProps> = ({
  departFlight,
  returnFlight,
  isRoundTrip = false,
  onBack,
  adultsCount,
  childrenCount,
  infantsCount,
}) => {
  const router = useRouter();

  // Helper trích xuất thông tin chi tiết & tính toán số lượng hành khách
  const getFlightSummary = (airOption: AirOptionAPI) => {
    const fare = airOption.ListFareOption?.[0];
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
    const equipmentCode = segmentData?.Equipment || "A321";

    const listFarePax = fare?.ListFarePax || [];
    
    // Đếm pax từ API nếu không được truyền từ props
    const apiAdults = listFarePax.find((p) => p.PaxType === "ADT")?.PaxNumb || 1;
    const apiChildren = listFarePax.find((p) => p.PaxType === "CHD")?.PaxNumb || 0;
    const apiInfants = listFarePax.find((p) => p.PaxType === "INF")?.PaxNumb || 0;

    const baseFareSum = listFarePax.reduce(
      (sum, p) => sum + (p.Price || 0) * (p.PaxNumb || 1),
      0
    );
    const totalFareSum =
      fare?.TotalFare ||
      listFarePax.reduce(
        (sum, p) => sum + (p.TotalFare || 0) * (p.PaxNumb || 1),
        0
      );
    const feeAndTaxSum = totalFareSum - baseFareSum;

    return {
      airlineCode,
      airlineMeta,
      flightNumber,
      depTime,
      arrTime,
      equipmentCode,
      baseFareSum,
      totalFareSum,
      feeAndTaxSum,
      startPoint: flightData?.StartPoint || "---",
      endPoint: flightData?.EndPoint || "---",
      departDate: depDateStr ? depDateStr.split(" ")[0] : "",
      adults: adultsCount ?? apiAdults,
      children: childrenCount ?? apiChildren,
      infants: infantsCount ?? apiInfants,
      listFarePax,
    };
  };

  const departInfo = getFlightSummary(departFlight);
  const returnInfo = returnFlight ? getFlightSummary(returnFlight) : null;

  // Tính tổng số lượng pax từng loại
  const numAdults = departInfo.adults;
  const numChildren = departInfo.children;
  const numInfants = departInfo.infants;
  const totalPaxCount = numAdults + numChildren + numInfants;

  // Tính tổng tiền các chiều
  const totalBaseFare =
    departInfo.baseFareSum + (returnInfo ? returnInfo.baseFareSum : 0);
  const totalTaxAndFee =
    departInfo.feeAndTaxSum + (returnInfo ? returnInfo.feeAndTaxSum : 0);
  const totalBookingPrice =
    departInfo.totalFareSum + (returnInfo ? returnInfo.totalFareSum : 0);

  // Khởi tạo State danh sách Hành khách linh hoạt theo số lượng
  const [passengers, setPassengers] = useState<PassengerFormState[]>(() => {
    const list: PassengerFormState[] = [];
    let idx = 1;

    for (let i = 0; i < numAdults; i++) {
      list.push({
        id: `pax-adt-${i}`,
        type: "ADULT",
        label: `Hành khách ${idx++} (Người lớn)`,
        title: "Nam",
        fullName: "",
        departBaggage: "0",
        returnBaggage: "0",
        dobDay: "",
        dobMonth: "",
        dobYear: "",
      });
    }

    for (let i = 0; i < numChildren; i++) {
      list.push({
        id: `pax-chd-${i}`,
        type: "CHILD",
        label: `Hành khách ${idx++} (Trẻ em 2 - 11 tuổi)`,
        title: "Nam",
        fullName: "",
        departBaggage: "0",
        returnBaggage: "0",
        dobDay: "",
        dobMonth: "",
        dobYear: "",
      });
    }

    for (let i = 0; i < numInfants; i++) {
      list.push({
        id: `pax-inf-${i}`,
        type: "INFANT",
        label: `Hành khách ${idx++} (Em bé < 2 tuổi)`,
        title: "Nam",
        fullName: "",
        departBaggage: "0",
        returnBaggage: "0",
        dobDay: "",
        dobMonth: "",
        dobYear: "",
      });
    }

    return list;
  });

  const [contactData, setContactData] = useState({
    fullName: "",
    phone: "",
  });

  const [options, setOptions] = useState({
    hotel: false,
    vat: false,
  });

  const handlePassengerChange = (
    index: number,
    field: keyof PassengerFormState,
    value: string
  ) => {
    setPassengers((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate tên & ngày sinh tất cả hành khách
    for (let i = 0; i < passengers.length; i++) {
      const p = passengers[i];
      if (!p.fullName.trim()) {
        alert(`Vui lòng nhập họ và tên cho ${p.label}!`);
        return;
      }
      if (!p.dobDay || !p.dobMonth || !p.dobYear) {
        alert(`Vui lòng nhập đầy đủ ngày tháng năm sinh cho ${p.label}!`);
        return;
      }
    }

    if (!contactData.fullName.trim()) {
      alert("Vui lòng nhập họ tên người liên hệ!");
      return;
    }
    if (!contactData.phone.trim()) {
      alert("Vui lòng nhập số điện thoại!");
      return;
    }

    const payload = {
      isRoundTrip,
      departFlight: departInfo,
      returnFlight: returnInfo,
      passengers,
      contact: contactData,
      options,
      totalBookingPrice,
    };

    const orderCode = `DH${Math.floor(100000 + Math.random() * 900000)}`;

  // Tạo URL params
  const queryParams = new URLSearchParams({
    code: orderCode,
    amount: totalBookingPrice.toString(),
    passengers: `${numAdults} người lớn${numChildren ? `, ${numChildren} trẻ em` : ""}`,
  });
    router.push(`/flight/pay/${orderCode}?${queryParams.toString()}`);
  };

  return (
    <div className="max-w-6xl mx-auto p-2 sm:p-4 font-sans text-gray-800">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col-reverse lg:grid lg:grid-cols-3 gap-6"
      >
        {/* === CỘT BÊN TRÁI: FORM NHẬP THÔNG TIN (2 COLS) === */}
        <div className="lg:col-span-2 space-y-6">
          {/* Section 1: Thông tin hành khách */}
          <div className="bg-white p-4 sm:p-5 rounded-xl border border-gray-200 shadow-sm space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b pb-3">
              <h3 className="font-bold text-gray-700 text-sm uppercase flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#006838] text-white flex items-center justify-center text-xs">
                  1
                </span>
                THÔNG TIN HÀNH KHÁCH
              </h3>
              <div className="text-xs text-gray-600 font-medium flex gap-3">
                <span>
                  Đi: <strong className="text-gray-800">{departInfo.airlineMeta.name}</strong>
                </span>
                {returnInfo && (
                  <span>
                    Về: <strong className="text-gray-800">{returnInfo.airlineMeta.name}</strong>
                  </span>
                )}
              </div>
            </div>

            {/* Loop danh sách Form cho từng hành khách */}
            <div className="space-y-6">
              {passengers.map((pax, index) => (
                <div key={pax.id} className="space-y-2 border-b border-gray-100 pb-5 last:border-0 last:pb-0">
                  <div className="font-bold text-gray-800 text-sm">
                    {pax.label}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    {/* Cột trái: Giới tính + Họ và tên */}
                    <div className="space-y-3">
                      <div className="grid grid-cols-3 gap-2">
                        <div className="col-span-1">
                          <label className="block text-gray-500 mb-1">Giới tính</label>
                          <select
                            value={pax.title}
                            onChange={(e) =>
                              handlePassengerChange(index, "title", e.target.value)
                            }
                            className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:border-[#006838]"
                          >
                            <option value="Nam">Nam</option>
                            <option value="Nữ">Nữ</option>
                          </select>
                        </div>
                        <div className="col-span-2">
                          <label className="block text-gray-500 mb-1">
                            Họ và tên <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Họ và tên Người lớn"
                            value={pax.fullName}
                            onChange={(e) =>
                              handlePassengerChange(index, "fullName", e.target.value)
                            }
                            className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:border-[#006838]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Cột phải: Mua hành lý ký gửi + Ngày sinh */}
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-gray-500 mb-1">Mua hành lý ký gửi</label>
                          <select
                            value={pax.departBaggage}
                            onChange={(e) =>
                              handlePassengerChange(index, "departBaggage", e.target.value)
                            }
                            className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:border-[#006838]"
                          >
                            <option value="0">Mua hành lý ký gửi</option>
                            <option value="15">15 kg (+ 180.000đ)</option>
                            <option value="20">20 kg (+ 220.000đ)</option>
                            <option value="30">30 kg (+ 350.000đ)</option>
                          </select>
                        </div>

                        {isRoundTrip && returnInfo ? (
                          <div>
                            <label className="block text-gray-500 mb-1">Mua hành lý ký gửi</label>
                            <select
                              value={pax.returnBaggage}
                              onChange={(e) =>
                                handlePassengerChange(index, "returnBaggage", e.target.value)
                              }
                              className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:border-[#006838]"
                            >
                              <option value="0">Mua hành lý ký gửi</option>
                              <option value="15">15 kg (+ 180.000đ)</option>
                              <option value="20">20 kg (+ 220.000đ)</option>
                              <option value="30">30 kg (+ 350.000đ)</option>
                            </select>
                          </div>
                        ) : (
                          <div>
                            <label className="block text-gray-500 mb-1">Ngày sinh</label>
                            <div className="grid grid-cols-3 gap-1">
                              <select
                                value={pax.dobDay}
                                onChange={(e) => handlePassengerChange(index, "dobDay", e.target.value)}
                                className="border border-gray-300 p-2 rounded-lg"
                              >
                                <option value="">Ngày</option>
                                {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                                  <option key={d} value={d}>{d}</option>
                                ))}
                              </select>
                              <select
                                value={pax.dobMonth}
                                onChange={(e) => handlePassengerChange(index, "dobMonth", e.target.value)}
                                className="border border-gray-300 p-2 rounded-lg"
                              >
                                <option value="">Tháng</option>
                                {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                                  <option key={m} value={m}>{m}</option>
                                ))}
                              </select>
                              <select
                                value={pax.dobYear}
                                onChange={(e) => handlePassengerChange(index, "dobYear", e.target.value)}
                                className="border border-gray-300 p-2 rounded-lg"
                              >
                                <option value="">Năm</option>
                                {Array.from({ length: 80 }, (_, i) => 2024 - i).map((y) => (
                                  <option key={y} value={y}>{y}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Hiển thị ngày sinh riêng nếu là chuyến khứ hồi để vừa layout */}
                      {isRoundTrip && returnInfo && (
                        <div>
                          <label className="block text-gray-500 mb-1">Ngày sinh</label>
                          <div className="grid grid-cols-3 gap-2">
                            <select
                              value={pax.dobDay}
                              onChange={(e) => handlePassengerChange(index, "dobDay", e.target.value)}
                              className="border border-gray-300 p-2.5 rounded-lg"
                            >
                              <option value="">Ngày</option>
                              {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                                <option key={d} value={d}>{d}</option>
                              ))}
                            </select>
                            <select
                              value={pax.dobMonth}
                              onChange={(e) => handlePassengerChange(index, "dobMonth", e.target.value)}
                              className="border border-gray-300 p-2.5 rounded-lg"
                            >
                              <option value="">Tháng</option>
                              {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                                <option key={m} value={m}>{m}</option>
                              ))}
                            </select>
                            <select
                              value={pax.dobYear}
                              onChange={(e) => handlePassengerChange(index, "dobYear", e.target.value)}
                              className="border border-gray-300 p-2.5 rounded-lg"
                            >
                              <option value="">Năm</option>
                              {Array.from({ length: 80 }, (_, i) => 2024 - i).map((y) => (
                                <option key={y} value={y}>{y}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Thông tin quy định hành lý xách tay */}
            <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg text-xs text-gray-600 space-y-1">
              <div className="font-bold text-gray-700 flex items-center gap-1.5">
                <span>🧳</span> Hành lý mỗi khách
              </div>
              <div>
                Chiều đi <strong>{departInfo.airlineMeta.name}</strong> 01 kiện chính (kích thước tối đa 56x36x23cm) và/hoặc 01 túi xách nhỏ (kích thước tối đa 40x30x10), tổng trọng lượng không vượt quá 07kg.
              </div>
              {returnInfo && (
                <div>
                  Chiều về <strong>{returnInfo.airlineMeta.name}</strong> 01 kiện chính (trọng lượng tối đa 07kg (56x36x23cm)).
                </div>
              )}
            </div>
          </div>

          {/* Section 2: Thông tin liên hệ */}
          <div className="bg-white p-4 sm:p-5 rounded-xl border border-gray-200 shadow-sm space-y-4">
            <h3 className="font-bold text-gray-700 text-sm uppercase flex items-center gap-2 border-b pb-3">
              <span className="w-5 h-5 rounded-full bg-[#006838] text-white flex items-center justify-center text-xs">
                2
              </span>
              THÔNG TIN LIÊN HỆ
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div>
                <label className="block text-gray-600 mb-1">
                  Họ tên <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Họ tên người nhận vé"
                  value={contactData.fullName}
                  onChange={(e) =>
                    setContactData({ ...contactData, fullName: e.target.value })
                  }
                  className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:border-[#006838]"
                />
              </div>

              <div>
                <label className="block text-gray-600 mb-1">
                  Số điện thoại <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Nhận mã đặt chỗ qua Zalo/SMS"
                  value={contactData.phone}
                  onChange={(e) =>
                    setContactData({ ...contactData, phone: e.target.value })
                  }
                  className="w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none focus:border-[#006838]"
                />
              </div>
            </div>

            {/* Checkboxes Dịch vụ thêm */}
            <div className="space-y-2 text-xs text-gray-700 pt-3 border-t border-gray-100">
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
                  checked={options.vat}
                  onChange={(e) =>
                    setOptions({ ...options, vat: e.target.checked })
                  }
                  className="rounded text-green-600"
                />
                Xuất hóa đơn VAT
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
              <ArrowLeft size={16} /> Quay lại danh sách vé
            </button>

            <button
              type="submit"
              className="bg-[#FF4D15] hover:bg-[#E03E0B] text-white font-bold text-base px-8 py-3 rounded-xl uppercase shadow transition"
            >
              ĐẶT VÉ
            </button>
          </div>
        </div>

        {/* === CỘT BÊN PHẢI: TÓM TẮT ĐƠN HÀNG (SẼ HIỂN THỊ TRÊN CÙNG KHI Ở MOBILE) === */}
        <div className="space-y-4">
          <div className="bg-slate-50 p-4 rounded-xl border border-gray-200 space-y-4 shadow-sm">
            {/* TÓM TẮT CHUYẾN BAY LƯỢT ĐI */}
            <div className="space-y-1 text-xs border-b pb-3">
              <div className="flex justify-between items-center font-bold text-gray-800 text-sm">
                <span>{departInfo.startPoint} ✈ {departInfo.endPoint}</span>
                <span>{departInfo.departDate}</span>
              </div>
              <div className="flex justify-between items-center text-gray-500">
                <span>{departInfo.startPoint} ✈ {departInfo.endPoint}</span>
                <span>{departInfo.depTime} - {departInfo.arrTime}</span>
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="font-semibold text-gray-700">Chuyến bay {departInfo.flightNumber}</span>
                <span className="text-red-500 font-bold uppercase text-[10px] bg-red-50 px-1.5 py-0.5 rounded">TIẾT KIỆM</span>
              </div>
              <div className="flex justify-between items-center text-gray-600 pt-1">
                <span className="font-bold text-red-600">{departInfo.airlineMeta.name}</span>
                <span>Airbus {departInfo.equipmentCode}</span>
              </div>
            </div>

            {/* TÓM TẮT CHUYẾN BAY LƯỢT VỀ */}
            {isRoundTrip && returnInfo && (
              <div className="space-y-1 text-xs border-b pb-3 pt-1">
                <div className="flex justify-between items-center font-bold text-gray-800 text-sm">
                  <span>{returnInfo.startPoint} ✈ {returnInfo.endPoint}</span>
                  <span>{returnInfo.departDate}</span>
                </div>
                <div className="flex justify-between items-center text-gray-500">
                  <span>{returnInfo.startPoint} ✈ {returnInfo.endPoint}</span>
                  <span>{returnInfo.depTime} - {returnInfo.arrTime}</span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="font-semibold text-gray-700">Chuyến bay {returnInfo.flightNumber}</span>
                  <span className="text-red-500 font-bold uppercase text-[10px] bg-red-50 px-1.5 py-0.5 rounded">TIẾT KIỆM</span>
                </div>
                <div className="flex justify-between items-center text-gray-600 pt-1">
                  <span className="font-bold text-blue-700">{returnInfo.airlineMeta.name}</span>
                  <span>Airbus {returnInfo.equipmentCode}</span>
                </div>
              </div>
            )}

            {/* CHI TIẾT TÍNH GIÁ TIỀN CHÍNH XÁC THEO MẪU HÌNH */}
            <div className="pt-1 space-y-2 text-xs">
              <div className="flex justify-between items-center text-gray-700">
                <span>Vé người lớn</span>
                <span className="text-gray-500">{formatPrice(totalBaseFare / totalPaxCount)} x {totalPaxCount} =</span>
                <span className="font-semibold">{formatPrice(totalBaseFare)} đ</span>
              </div>

              <div className="flex justify-between items-center text-gray-700">
                <span>Tổng thuế + phí</span>
                <span className="text-gray-500">=</span>
                <span className="font-semibold">{formatPrice(totalTaxAndFee)} đ</span>
              </div>

              <div className="flex justify-between items-center font-bold text-sm pt-3 border-t border-dashed border-gray-300">
                <span className="text-gray-800">Tổng giá vé</span>
                <span className="text-red-600 text-base sm:text-lg">
                  {formatPrice(totalBookingPrice)} đ
                </span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};