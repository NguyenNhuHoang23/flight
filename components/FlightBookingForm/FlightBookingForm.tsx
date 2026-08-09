"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import {
  PassengerFormState,
  ContactData,
  BookingOptions,
  FlightBookingFormProps,
} from "./flight-booking-types";

import { getFlightSummary } from "./flight-booking-utils";

import {
  CreateOrderPayload,
  FlightPayload,
  useCreateOrder,
} from "@/hook/useCreateOrder";

import PassengerSection from "./PassengerSection";
import BaggageRules from "./BaggageRules";
import ContactSection from "./ContactSection";
import BookingActions from "./BookingActions";
import BookingSummary from "./BookingSummary";

const createPassenger = (
  index: number,
  type: PassengerFormState["type"],
  label: string,
): PassengerFormState => ({
  id: `pax-${type.toLowerCase()}-${index}`,
  type,
  label,
  title: "Nam",
  fullName: "",
  departBaggage: "0",
  returnBaggage: "0",
  dobDay: "",
  dobMonth: "",
  dobYear: "",
});

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
  const createOrder = useCreateOrder();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const getBaggagePrice = (baggage: string) => {
    switch (baggage) {
      case "15":
        return 180000;
      case "20":
        return 220000;
      case "30":
        return 350000;
      default:
        return 0;
    }
  };
  const currentYear = new Date().getFullYear();

  // ====================================================
  // FLIGHT INFO
  // ====================================================

  const departInfo = getFlightSummary(
    departFlight,
    adultsCount,
    childrenCount,
    infantsCount,
  );

  const returnInfo = returnFlight
    ? getFlightSummary(returnFlight, adultsCount, childrenCount, infantsCount)
    : null;

  // ====================================================
  // PASSENGER COUNT
  // ====================================================

  const numAdults = departInfo.adults;

  const numChildren = departInfo.children;

  const numInfants = departInfo.infants;

  // ====================================================
  // PRICE
  // ====================================================

  // ====================================================
  // PASSENGERS
  // ====================================================

  const [passengers, setPassengers] = useState<PassengerFormState[]>(() => {
    const list: PassengerFormState[] = [];

    let index = 1;

    for (let i = 0; i < numAdults; i++) {
      list.push(
        createPassenger(i, "ADULT", `Hành khách ${index++} (Người lớn)`),
      );
    }

    for (let i = 0; i < numChildren; i++) {
      list.push(
        createPassenger(
          i,
          "CHILD",
          `Hành khách ${index++} (Trẻ em 2 - 11 tuổi)`,
        ),
      );
    }

    for (let i = 0; i < numInfants; i++) {
      list.push(
        createPassenger(i, "INFANT", `Hành khách ${index++} (Em bé < 2 tuổi)`),
      );
    }

    return list;
  });

  const totalBaseFare = departInfo.baseFareSum + (returnInfo?.baseFareSum ?? 0);

  const totalPassengers = numAdults + numChildren + numInfants;

  // Tiền vé
  const totalFare = departInfo.totalFareSum + (returnInfo?.totalFareSum ?? 0);

  // Tiền hành lý chiều đi
  const totalDepartBaggagePrice = passengers.reduce((total, passenger) => {
    return total + getBaggagePrice(passenger.departBaggage);
  }, 0);

  // Tiền hành lý chiều về
  const totalReturnBaggagePrice = passengers.reduce((total, passenger) => {
    return total + getBaggagePrice(passenger.returnBaggage);
  }, 0);

  // Tổng tiền hành lý
  const totalBaggagePrice = totalDepartBaggagePrice + totalReturnBaggagePrice;

  // Tổng tiền cuối cùng
  const totalBookingPrice = totalFare + totalBaggagePrice;

  // ====================================================
  // CONTACT
  // ====================================================

  const [contactData, setContactData] = useState<ContactData>({
    fullName: "",
    phone: "",
  });

  // ====================================================
  // OPTIONS
  // ====================================================

  const [options, setOptions] = useState<BookingOptions>({
    hotel: false,
    vat: false,
  });

  // ====================================================
  // HANDLERS
  // ====================================================

  const handlePassengerChange = (
    index: number,
    field: keyof PassengerFormState,
    value: string,
  ) => {
    setPassengers((prev) => {
      const updated = [...prev];

      updated[index] = {
        ...updated[index],
        [field]: value,
      };

      return updated;
    });
  };

  const handleContactChange = (field: keyof ContactData, value: string) => {
    setContactData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleOptionChange = (field: keyof BookingOptions, value: boolean) => {
    setOptions((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // ====================================================
  // SUBMIT
  // ====================================================

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate passengers
    for (let i = 0; i < passengers.length; i++) {
      const passenger = passengers[i];

      if (!passenger.fullName.trim()) {
        alert(`Vui lòng nhập họ và tên cho ${passenger.label}!`);

        return;
      }

      if (
        passenger.type !== "ADULT" &&
        (!passenger.dobDay || !passenger.dobMonth || !passenger.dobYear)
      ) {
        alert(
          `Vui lòng nhập đầy đủ ngày tháng năm sinh cho ${passenger.label}!`,
        );

        return;
      }
    }

    // Validate contact
    if (!contactData.fullName.trim()) {
      alert("Vui lòng nhập họ tên người liên hệ!");

      return;
    }

    if (!contactData.phone.trim()) {
      alert("Vui lòng nhập số điện thoại!");

      return;
    }

    // ==================================================
    // BOOKING PASSENGERS
    // ==================================================

    const bookingPassengers = passengers.map((passenger) => ({
      full_name: passenger.fullName.trim(),

      passenger_type:
        passenger.type === "ADULT"
          ? "adult"
          : passenger.type === "CHILD"
            ? "child"
            : "infant",
    }));

    // ==================================================
    // SESSION STORAGE
    // ==================================================

    sessionStorage.setItem(
      "booking_contact_info",
      JSON.stringify({
        full_name: contactData.fullName.trim(),
        phone: contactData.phone.trim(),
      }),
    );

    sessionStorage.setItem(
      "booking_passengers",
      JSON.stringify(bookingPassengers),
    );

    sessionStorage.setItem(
      "booking_trip_type",
      isRoundTrip ? "round-trip" : "one-way",
    );

    sessionStorage.setItem(
      "booking_total_amount",
      totalBookingPrice.toString(),
    );

    // Lưu thêm options nếu sau này cần
    sessionStorage.setItem("booking_options", JSON.stringify(options));

    // ==================================================
    // CREATE ORDER CODE
    // ==================================================

    const orderCode = `DH${Math.floor(100000 + Math.random() * 900000)}`;

    const queryParams = new URLSearchParams({
      amount: totalBookingPrice.toString(),
      passengers: `${numAdults} người lớn${
        numChildren ? `, ${numChildren} trẻ em` : ""
      }${numInfants ? `, ${numInfants} em bé` : ""}`,
    });

    const flightsPayload: FlightPayload[] = [
      {
        trip_type: "outbound",
        airline_name: departInfo.airlineMeta.name,
        airline_code: departInfo.airlineCode,
        flight_number: departInfo.flightNumber,
        departure_airport: departInfo.startPoint,
        arrival_airport: departInfo.endPoint,
        departure_at: departInfo.departureAt,
      },
    ];

    if (returnInfo) {
      flightsPayload.push({
        trip_type: "return",
        airline_name: returnInfo.airlineMeta.name,
        airline_code: returnInfo.airlineCode,
        flight_number: returnInfo.flightNumber,
        departure_airport: returnInfo.startPoint,
        arrival_airport: returnInfo.endPoint,
        departure_at: returnInfo.departureAt,
      });
    }

    const payload: CreateOrderPayload = {
      booking_at: new Date().toISOString(),
      contact_name: contactData.fullName.trim(),
      contact_phone: contactData.phone.trim(),
      total_amount: totalBookingPrice,
      passengers: bookingPassengers,
      flights: flightsPayload,
    };

    setIsSubmitting(true);

    try {
      const response = await createOrder.mutateAsync(payload);
      console.log("🚀 ~ handleSubmit ~ response:", response);

      const createdOrderCode =
        response?.data?.order_code || response?.order_code || orderCode;

      sessionStorage.setItem("booking_order_code", createdOrderCode);

      router.push(`/flight/pay/${createdOrderCode}?${queryParams.toString()}`);
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "Không thể tạo đơn hàng. Vui lòng thử lại!",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // ====================================================
  // RENDER
  // ====================================================

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 lg:grid-cols-3 gap-5"
    >
      {/* ================================================
        BOOKING SUMMARY
        Mobile: lên đầu
        Desktop: nằm bên phải
    ================================================= */}
      <div className="order-1 lg:order-2 lg:col-span-1">
        <BookingSummary
          departInfo={departInfo}
          returnInfo={returnInfo}
          totalBaseFare={totalBaseFare}
          totalPassengers={totalPassengers}
          totalBookingPrice={totalBookingPrice}
          isRoundTrip={isRoundTrip}
        />
      </div>

      {/* ================================================
        LEFT
    ================================================= */}
      <div className="order-2 lg:order-1 lg:col-span-2 space-y-5">
        <PassengerSection
          passengers={passengers}
          departInfo={departInfo}
          returnInfo={returnInfo}
          isRoundTrip={isRoundTrip}
          currentYear={currentYear}
          onPassengerChange={handlePassengerChange}
        />

        <BaggageRules departInfo={departInfo} returnInfo={returnInfo} />

        <ContactSection
          contactData={contactData}
          options={options}
          onContactChange={handleContactChange}
          onOptionChange={handleOptionChange}
        />

        <BookingActions onBack={onBack} isSubmitting={isSubmitting} />
      </div>
    </form>
  );
};
