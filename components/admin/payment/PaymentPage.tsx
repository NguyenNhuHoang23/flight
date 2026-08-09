"use client";

import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { useBankAccounts } from "@/hook/useBankAccounts";
import {
  CreateOrderPayload,
  FlightPayload,
  PassengerPayload,
  useCreateOrder,
} from "@/hook/useCreateOrder";

import {
  buildFlightPayload,
  buildPassengerPayloads,
  DEFAULT_FLIGHTS,
  parseFlightInfoFromApi,
  readStoredJSON,
} from "./payment-utils";

import {
  FlightDetail,
  OrderData,
  StoredContactInfo,
  StoredFlightSource,
  StoredPassengerInfo,
} from "./payment-types";
import BankPaymentInfo from "./BankPaymentInfo";
import BillUpload from "./BillUpload";
import PaymentGuide from "./PaymentGuide";
import OrderSummary from "./OrderSummary";

function PaymentContent() {
  const searchParams = useSearchParams();

  const { accounts } = useBankAccounts();
  const createOrder = useCreateOrder();

  const [copied, setCopied] = useState("");
  const [billFile, setBillFile] = useState<File | null>(null);
  const [billPreview, setBillPreview] = useState<string | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [flights, setFlights] = useState<FlightDetail[]>(DEFAULT_FLIGHTS);

  const activeBank = accounts.find((bank) => bank.isActive === true);

  const amount = Number(searchParams.get("amount")) || 3650000;

  const code = searchParams.get("code") || "DH386456";

  const passengers = searchParams.get("passengers") || "1 người lớn";

  const storedContact = readStoredJSON<StoredContactInfo>(
    "booking_contact_info",
  );

  const storedPassengers =
    readStoredJSON<StoredPassengerInfo[]>("booking_passengers");

  useEffect(() => {
    let isActive = true;

    const loadFlights = () => {
      try {
        const departRaw = readStoredJSON<StoredFlightSource>(
          "selected_depart_flight",
        );

        const returnRaw = readStoredJSON<StoredFlightSource>(
          "selected_return_flight",
        );

        const loadedFlights: FlightDetail[] = [];

        const departFlight = parseFlightInfoFromApi(departRaw, "Chiều đi");

        if (departFlight) {
          loadedFlights.push(departFlight);
        }

        const returnFlight = parseFlightInfoFromApi(returnRaw, "Chiều về");

        if (returnFlight) {
          loadedFlights.push(returnFlight);
        }

        if (isActive && loadedFlights.length) {
          setFlights(loadedFlights);
        }
      } catch (error) {
        console.error("Lỗi khi đọc chuyến bay:", error);
      }
    };

    loadFlights();

    return () => {
      isActive = false;
    };
  }, []);

  const order: OrderData = {
    code,
    isRoundTrip: flights.length > 1,
    flights,
    passengers,
    amount,
  };

  const transferContent = `${flights[0]?.flightNumber || "VJ000"}TicKetJ0.`;

  const handleCopy = async (text: string, type: string) => {
    await navigator.clipboard.writeText(text);

    setCopied(type);

    setTimeout(() => {
      setCopied("");
    }, 1500);
  };

  const handleFileChange = (file: File) => {
    if (billPreview) {
      URL.revokeObjectURL(billPreview);
    }

    setBillFile(file);
    setBillPreview(URL.createObjectURL(file));
  };

  const handleRemoveBill = () => {
    if (billPreview) {
      URL.revokeObjectURL(billPreview);
    }

    setBillFile(null);
    setBillPreview(null);
  };

  const handleGetTicket = async () => {
    if (!billFile) return;

    setIsSubmitting(true);

    try {
      const departRaw = readStoredJSON<StoredFlightSource>(
        "selected_depart_flight",
      );

      const returnRaw = readStoredJSON<StoredFlightSource>(
        "selected_return_flight",
      );

      const bookingContact = storedContact || {
        full_name: order.passengers,
        phone: "",
      };

      const flightsPayload = [
        buildFlightPayload(departRaw, "outbound"),
        buildFlightPayload(returnRaw, "return"),
      ].filter(Boolean) as FlightPayload[];

      const passengersPayload = buildPassengerPayloads(
        storedPassengers,
        bookingContact.full_name || order.code,
      );

      const payload: CreateOrderPayload = {
        booking_at: new Date().toISOString(),

        contact_name: bookingContact.full_name || order.code,

        contact_phone: bookingContact.phone || "0000000000",

        contact_email: bookingContact.email,

        total_amount: order.amount,

        payment_method: "bank_transfer",

        transfer_content: transferContent,

        payment_bill_image: billFile,

        passengers: passengersPayload,

        flights: flightsPayload.length
          ? flightsPayload
          : [
              {
                trip_type: "outbound",

                airline_name: flights[0]?.airline || "Vietjet Air",

                airline_code:
                  flights[0]?.flightNumber?.replace(/\d+/g, "") || "VJ",

                flight_number: flights[0]?.flightNumber || "VJ000",

                departure_airport:
                  flights[0]?.route?.split(" → ")?.[0] || "SGN",

                arrival_airport: flights[0]?.route?.split(" → ")?.[1] || "HAN",

                departure_at: flights[0]?.date || "",

                arrival_at: flights[0]?.time || "",
              },
            ],
      };

      await createOrder.mutateAsync(payload);

      const messengerUrl =
        "https://web.facebook.com/profile.php?id=61578733392253";

      window.open(messengerUrl, "_blank", "noopener,noreferrer");
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "Có lỗi xảy ra khi tải bill lên. Vui lòng thử lại!",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const isBusy = isSubmitting || createOrder.isPending;

  return (
    <div className="mx-auto max-w-7xl px-4 py-5">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_380px]">
        {/* LEFT */}
        <section>
          <div className="mb-3">
            <h2 className="text-lg font-bold text-gray-800">
              Chọn hình thức thanh toán
            </h2>

            <div className="space-y-1 px-4 pt-3">
              <p className="text-[14px] leading-6 text-gray-800">
                Quý khách vui lòng thực hiện thanh toán theo thông tin bên dưới.
                Sau khi chuyển khoản thành công, vui lòng upload bill thanh toán
                và bấm nút nhận vé để xác nhận đơn hàng.
              </p>

              <p className="text-[14px] leading-6 text-gray-800">
                Vé điện tử sẽ được gửi cho quý khách qua SMS/Zalo hoặc Email sau
                khi thanh toán được xác nhận.
              </p>
            </div>
          </div>

          <BankPaymentInfo
            bank={activeBank}
            amount={order.amount}
            transferContent={transferContent}
            copied={copied}
            onCopy={handleCopy}
          />

          <BillUpload
            billFile={billFile}
            billPreview={billPreview}
            isBusy={isBusy}
            onFileChange={handleFileChange}
            onRemove={handleRemoveBill}
            onSubmit={handleGetTicket}
          />

          <PaymentGuide />
        </section>

        {/* RIGHT */}
        <OrderSummary order={order} />
      </div>
    </div>
  );
}

export default function PaymentPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[300px] items-center justify-center text-gray-500">
          Đang tải thông tin thanh toán...
        </div>
      }
    >
      <PaymentContent />
    </Suspense>
  );
}
