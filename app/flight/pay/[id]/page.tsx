"use client";

import {
  CheckCircle2,
  ChevronDown,
  Copy,
  CreditCard,
  Info,
  Loader2,
  Plane,
  Ticket,
  Trash2,
  Upload,
} from "lucide-react";
import React, { useRef, useState, Suspense, useEffect } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { useBankAccounts } from "@/hook/useBankAccounts";
import { useUpdateOrderBill } from "@/hook/useCreateOrder";

// Định nghĩa kiểu dữ liệu cho chuyến bay hiển thị UI
interface FlightDetail {
  directionLabel: string; // "Chiều đi" | "Chiều về"
  airline: string;
  flightNumber: string;
  route: string; // "SGN → HAN"
  date: string; // "Thứ Bảy, 08/08/2026"
  time: string; // "21:35 - 23:45"
}

interface OrderData {
  code: string;
  isRoundTrip: boolean;
  flights: FlightDetail[];
  passengers: string;
  amount: number;
}

interface StoredFlightSegment {
  Airline?: string;
  FlightNumber?: string;
  StartPoint?: string;
  EndPoint?: string;
  StartDate?: string;
  EndDate?: string;
  DepartDate?: string;
  ArriveDate?: string;
}

interface StoredFlightOption {
  ListFlight?: StoredFlightSegment[];
}

interface StoredFlightSource {
  Airline?: string;
  ListFlightOption?: StoredFlightOption[];
  ListFlight?: StoredFlightSegment[];
}

function getStoredFlightSegment(
  data: StoredFlightSource | null,
): StoredFlightSegment | null {
  if (!data) return null;

  const flightOption = data.ListFlightOption?.[0];
  return flightOption?.ListFlight?.[0] || data.ListFlight?.[0] || null;
}

// Fallback Mock Data
const DEFAULT_FLIGHTS: FlightDetail[] = [
  {
    directionLabel: "Chiều đi",
    airline: "Vietjet Air",
    flightNumber: "VJ160",
    route: "SGN → HAN",
    date: "Thứ Bảy, 08/08/2026",
    time: "21:35 - 23:45",
  },
];

const BANK_INFO = {
  bankName: "MB BANK",
  accountNumber: "0123456789",
  accountName: "NGUYEN VAN A",
};

// Map mã hãng hàng không
const AIRLINE_NAMES: Record<string, string> = {
  VJ: "Vietjet Air",
  VN: "Vietnam Airlines",
  QH: "Bamboo Airways",
  VU: "Vietravel Airlines",
};

function formatMoney(value: number) {
  return new Intl.NumberFormat("vi-VN").format(value) + " VNĐ";
}

// Helper chuyển đổi chuỗi ngày/thời gian từ dữ liệu API
function parseFlightInfoFromApi(
  data: StoredFlightSource | null,
  directionLabel: string,
): FlightDetail | null {
  if (!data) return null;

  // Trích xuất flight từ cấu trúc data.ListFlightOption[0].ListFlight[0]
  const flight = getStoredFlightSegment(data);

  if (!flight) return null;

  const airlineCode = data.Airline || flight.Airline || "VJ";
  const airlineName = AIRLINE_NAMES[airlineCode] || airlineCode;

  // Lấy số hiệu chuyến bay
  const rawFlightNum = flight.FlightNumber || "N/A";
  const flightNum = rawFlightNum.startsWith(airlineCode)
    ? rawFlightNum
    : `${airlineCode}${rawFlightNum}`;

  const startPoint = flight.StartPoint || "SGN";
  const endPoint = flight.EndPoint || "HAN";
  const route = `${startPoint} → ${endPoint}`;

  let timeFormatted = "--:-- - --:--";
  let dateFormatted = "Chưa xác định";

  try {
    // 1. Ưu tiên lấy từ StartDate & EndDate dạng ISO string: "2026-08-08T21:35:00"
    if (flight.StartDate && flight.EndDate) {
      const start = new Date(flight.StartDate);
      const end = new Date(flight.EndDate);

      const formatTime = (d: Date) =>
        `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;

      timeFormatted = `${formatTime(start)} - ${formatTime(end)}`;

      const daysOfWeek = [
        "Chủ Nhật",
        "Thứ Hai",
        "Thứ Ba",
        "Thứ Tư",
        "Thứ Năm",
        "Thứ Sáu",
        "Thứ Bảy",
      ];
      const dayName = daysOfWeek[start.getDay()];
      const dayStr = String(start.getDate()).padStart(2, "0");
      const monthStr = String(start.getMonth() + 1).padStart(2, "0");
      const yearStr = start.getFullYear();

      dateFormatted = `${dayName}, ${dayStr}/${monthStr}/${yearStr}`;
    }
    // 2. Dự phòng nếu dùng DepartDate & ArriveDate dạng chuỗi: "08082026 2135"
    else if (flight.DepartDate && flight.ArriveDate) {
      const dStr = String(flight.DepartDate).trim(); // "08082026 2135"
      const aStr = String(flight.ArriveDate).trim(); // "08082026 2345"

      const depParts = dStr.split(" ");
      const arrParts = aStr.split(" ");

      if (depParts.length >= 2 && arrParts.length >= 2) {
        const depTime = depParts[1]; // "2135"
        const arrTime = arrParts[1]; // "2345"
        timeFormatted = `${depTime.slice(0, 2)}:${depTime.slice(2, 4)} - ${arrTime.slice(0, 2)}:${arrTime.slice(2, 4)}`;

        const dateDigits = depParts[0]; // "08082026"
        const day = dateDigits.slice(0, 2);
        const month = dateDigits.slice(2, 4);
        const year = dateDigits.slice(4, 8);

        const parsedDate = new Date(
          Number(year),
          Number(month) - 1,
          Number(day),
        );
        const daysOfWeek = [
          "Chủ Nhật",
          "Thứ Hai",
          "Thứ Ba",
          "Thứ Tư",
          "Thứ Năm",
          "Thứ Sáu",
          "Thứ Bảy",
        ];
        const dayName = daysOfWeek[parsedDate.getDay()];

        dateFormatted = `${dayName}, ${day}/${month}/${year}`;
      }
    }
  } catch (e) {
    console.error("Lỗi parse ngày tháng từ API:", e);
  }

  return {
    directionLabel,
    airline: airlineName,
    flightNumber: flightNum,
    route,
    date: dateFormatted,
    time: timeFormatted,
  };
}

function PaymentContent() {
  const [copied, setCopied] = useState("");
  const [billFile, setBillFile] = useState<File | null>(null);
  const [billPreview, setBillPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [flights, setFlights] = useState<FlightDetail[]>(DEFAULT_FLIGHTS);
  const { accounts } = useBankAccounts();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const params = useParams<{ id?: string }>();
  const searchParams = useSearchParams();
  const activeBank = accounts.find((bank) => bank.isActive === true);
  const orderCode =
    (Array.isArray(params?.id) ? params.id[0] : params?.id) ||
    searchParams.get("code") ||
    "DH386456";
  const updateOrderBill = useUpdateOrderBill(orderCode);
  useEffect(() => {
    let isActive = true;

    const loadFlights = async () => {
      try {
        const storedDepart = sessionStorage.getItem("selected_depart_flight");
        const storedReturn = sessionStorage.getItem("selected_return_flight");

        const loadedFlights: FlightDetail[] = [];

        if (storedDepart) {
          const parsedDepart = JSON.parse(storedDepart) as StoredFlightSource;
          const flightDetail = parseFlightInfoFromApi(parsedDepart, "Chiều đi");
          if (flightDetail) loadedFlights.push(flightDetail);
        }

        if (storedReturn) {
          const parsedReturn = JSON.parse(storedReturn) as StoredFlightSource;
          const flightDetail = parseFlightInfoFromApi(parsedReturn, "Chiều về");
          if (flightDetail) loadedFlights.push(flightDetail);
        }

        if (isActive && loadedFlights.length > 0) {
          // Read from session storage after mount; this mirrors the existing client-side booking flow.
          setFlights(loadedFlights);
        }
      } catch (error) {
        console.error("Lỗi khi giải mã chuyến bay từ sessionStorage:", error);
      }
    };

    void loadFlights();

    return () => {
      isActive = false;
    };
  }, []);

  const amount = Number(searchParams.get("amount")) || 3650000;
  const passengers = searchParams.get("passengers") || "1 người lớn";

  const order: OrderData = {
    code: orderCode,
    isRoundTrip: flights.length > 1,
    passengers,
    amount,
    flights,
  };

  const transferContent = `${flights[0].flightNumber}TicKetJ0.`;

  const qrValue = activeBank
    ? `https://img.vietqr.io/image/${activeBank.bankName}-${activeBank.accountNumber}-compact2.png` +
      `?amount=${order.amount}` +
      `&addInfo=${encodeURIComponent(transferContent)}` +
      `&accountName=${encodeURIComponent(activeBank.bankName)}`
    : "";

  const copyText = async (text: string, type: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => {
      setCopied("");
    }, 1500);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Vui lòng chỉ tải lên định dạng file ảnh!");
        return;
      }
      setBillFile(file);
      setBillPreview(URL.createObjectURL(file));
    }
  };

  const handleRemoveBill = (e: React.MouseEvent) => {
    e.stopPropagation();
    setBillFile(null);
    setBillPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleGetTicket = async () => {
    if (!billFile) return;

    setIsSubmitting(true);

    try {
      await updateOrderBill.mutateAsync({
        transfer_content: transferContent,
        payment_bill_image: billFile,
      });

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

  const isBusy = isSubmitting || updateOrderBill.isPending;

  return (
    <div className="mx-auto max-w-300 px-3">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_360px]">
        {/* ================= LEFT ================= */}
        <section className="bg-white">
          <div className="bg-[#007849] px-4 py-3 text-sm font-semibold uppercase text-white">
            Chọn hình thức thanh toán
          </div>

          <div className="px-4 pt-3 space-y-1">
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

          <div className="mx-4 mt-3 mb-5 overflow-hidden rounded-md border border-gray-200">
            <div className="flex items-center justify-between bg-[#eeeeee] px-4 py-3">
              <div className="flex items-center gap-3">
                <CreditCard className="h-5 w-5 text-[#0077ff]" />
                <span className="text-sm font-bold uppercase text-gray-800">
                  Chuyển khoản ngân hàng
                </span>
              </div>
              <ChevronDown className="h-4 w-4 text-gray-600" />
            </div>

            <div className="p-4">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-[280px_1fr]">
                {/* QR Code */}
                <div className="flex flex-col items-center">
                  <div className="rounded-lg border bg-white p-3 shadow-sm">
                    {qrValue ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={qrValue}
                        alt="QR thanh toán ngân hàng"
                        width={230}
                        height={230}
                        className="h-57.5 w-57.5 object-contain"
                      />
                    ) : (
                      <div className="flex h-57.5 w-57.5 items-center justify-center text-center text-sm text-gray-500">
                        Không tìm thấy tài khoản ngân hàng đang hoạt động
                      </div>
                    )}
                  </div>

                  <p className="mt-2 text-center text-xs text-gray-500">
                    Quét mã QR bằng ứng dụng ngân hàng
                  </p>
                </div>
                {/* Bank Information */}
                <div>
                  <h3 className="mb-4 text-base font-bold text-gray-800">
                    Thông tin chuyển khoản
                  </h3>

                  <div className="space-y-3">
                    <BankRow
                      label="Ngân hàng"
                      value={activeBank?.bankName || BANK_INFO.bankName}
                    />
                    <BankRow
                      label="Số tài khoản"
                      value={
                        activeBank?.accountNumber || BANK_INFO.accountNumber
                      }
                      onCopy={() =>
                        copyText(
                          activeBank?.accountNumber || BANK_INFO.accountNumber,
                          "account",
                        )
                      }
                      copied={copied === "account"}
                    />
                    <BankRow
                      label="Chủ tài khoản"
                      value={activeBank?.accountHolder || BANK_INFO.accountName}
                    />
                    <BankRow
                      label="Số tiền"
                      value={formatMoney(order.amount)}
                      highlight
                    />
                    <BankRow label="Nội dung" value={transferContent} />
                  </div>

                  <div className="mt-5 flex gap-2 rounded-md bg-orange-50 p-3 text-xs text-orange-800 border border-orange-200">
                    <Info className="mt-0.5 h-4 w-4 shrink-0 text-orange-600" />
                    <p>
                      Vui lòng chuyển khoản đúng số tiền và đúng nội dung, ký tự
                      để hệ thống xác nhận đơn hàng tự động xuất vé.
                    </p>
                  </div>
                </div>
              </div>

              <div className="my-5 border-t" />

              {/* KHU VỰC UPLOAD BILL & NÚT NHẬN VÉ */}
              <div className="rounded-lg border border-dashed border-[#ff512b] bg-orange-50/50 p-5 text-center">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/*"
                  className="hidden"
                />

                {!billPreview ? (
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="cursor-pointer group flex flex-col items-center"
                  >
                    <div className="mx-auto flex h-12 px-4 items-center justify-center gap-1.5 rounded-full bg-white shadow-sm border border-orange-200 group-hover:scale-105 transition">
                      <Upload className="h-5 w-5 text-[#ff512b]" />
                      <span className="text-xs font-bold text-[#ff512b]">
                        Up bill
                      </span>
                    </div>

                    <h3 className="mt-3 text-base font-bold text-gray-800">
                      Bạn đã chuyển khoản thành công?
                    </h3>

                    <p className="mt-1 text-xs sm:text-sm text-gray-600">
                      Vui lòng chụp ảnh màn hình giao dịch thành công và{" "}
                      <span className="text-[#ff512b] font-semibold underline">
                        up bill chuyển khoản
                      </span>{" "}
                      để nhận vé.
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <div className="relative inline-block border-2 border-green-500 rounded-lg p-1 bg-white shadow-md">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={billPreview}
                        alt="Bill thanh toán"
                        className="max-h-48 rounded object-contain"
                      />
                      <button
                        type="button"
                        onClick={handleRemoveBill}
                        className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition shadow"
                        title="Xóa ảnh chọn lại"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                    <p className="mt-2 text-xs text-green-700 font-semibold flex items-center gap-1">
                      <CheckCircle2 size={14} /> Đã tải ảnh bill thành công
                    </p>
                  </div>
                )}

                <div className="mt-4">
                  <button
                    type="button"
                    disabled={!billFile || isBusy}
                    onClick={handleGetTicket}
                    className={`inline-flex h-11 items-center justify-center gap-2 rounded-md px-8 text-sm font-semibold transition shadow ${
                      billFile && !isBusy
                        ? "bg-[#ff512b] text-white hover:bg-[#ed4320] cursor-pointer"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed opacity-80"
                    }`}
                  >
                    {isBusy ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Đang gửi thông tin...
                      </>
                    ) : (
                      <>
                        <Ticket className="h-5 w-5" />
                        Nhận vé
                      </>
                    )}
                  </button>

                  {!billFile && (
                    <p className="mt-2 text-[11px] text-red-500 italic">
                      * Vui lòng up ảnh bill chuyển khoản để kích hoạt nút Nhận
                      vé
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mx-4 mb-5 rounded-md bg-gray-50 p-4 border border-gray-100">
            <h3 className="mb-3 font-semibold text-gray-800 text-sm">
              Hướng dẫn thanh toán
            </h3>

            <div className="space-y-2 text-xs sm:text-sm text-gray-700">
              <Step number="1">
                Mở ứng dụng ngân hàng và quét mã QR phía trên.
              </Step>
              <Step number="2">Kiểm tra số tiền và nội dung chuyển khoản.</Step>
              <Step number="3">
                Thực hiện chuyển khoản và chụp lại màn hình giao dịch thành
                công.
              </Step>
              <Step number="4">
                Upload ảnh bill chuyển khoản và bấm nút <b>Nhận vé</b>.
              </Step>
            </div>
          </div>
        </section>

        {/* ================= RIGHT (SIDEBAR) ================= */}
        <aside className="space-y-3">
          <div className="bg-white border border-gray-200 shadow-sm rounded-sm overflow-hidden">
            <div className="bg-[#ff512b] px-4 py-2.5 text-center text-sm font-bold uppercase text-white">
              Thông tin đơn hàng
            </div>

            <div className="p-3 text-xs sm:text-sm space-y-3">
              <InfoRow label="Mã đơn hàng" value={order.code} bold />
              <InfoRow label="Số hành khách" value={order.passengers} />

              {/* DANH SÁCH CÁC CHUYẾN BAY */}
              <div className="border-t border-b border-gray-100 py-3 space-y-3">
                {order.flights.map((flight, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-bold text-gray-700 bg-gray-50 p-1.5 rounded">
                      <span className="flex items-center gap-1.5">
                        <Plane
                          size={13}
                          className={`text-[#007849] ${
                            idx === 1 ? "rotate-180" : ""
                          }`}
                        />
                        {flight.directionLabel}
                      </span>
                      <span className="text-gray-500 font-medium">
                        {flight.airline} ({flight.flightNumber})
                      </span>
                    </div>

                    <div className="pl-1 space-y-1">
                      <InfoRow label="Chặng bay" value={flight.route} bold />
                      <InfoRow label="Ngày bay" value={flight.date} />
                      <InfoRow label="Giờ bay" value={flight.time} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-1">
                <InfoRow
                  label="Tổng thanh toán"
                  value={formatMoney(order.amount)}
                  highlight
                />
              </div>
            </div>
          </div>

          <InfoBox title="QUY ĐỊNH VỀ GIẤY TỜ TÙY THÂN">
            <p>
              Quý khách cần đảm bảo một trong các giấy tờ sau khi làm thủ tục
              tại sân bay:
            </p>
            <ul className="mt-2 space-y-1">
              <li>- Căn cước công dân;</li>
              <li>- Hộ chiếu;</li>
              <li>- VNeID định danh điện tử mức độ 2;</li>
              <li>- Giấy phép lái xe;</li>
              <li>
                - Giấy khai sinh (Bản chính hoặc Trích lục, áp dụng cho trẻ em
                dưới 14 tuổi);
              </li>
            </ul>
            <p className="mt-2">
              Các loại giấy tờ phải là bản gốc còn rõ nét, nguyên vẹn và còn
              thời hạn sử dụng.
            </p>
          </InfoBox>

          <InfoBox title="LƯU Ý THỜI GIAN LÀM THỦ TỤC">
            <p>
              Có mặt tối thiểu trước <b>120 phút</b> so với giờ khởi hành đối
              với chuyến bay nội địa.
            </p>
            <p className="mt-1.5">
              Có mặt trước <b>180 phút</b> đối với chuyến bay quốc tế.
            </p>
          </InfoBox>

          <InfoBox title="QUY ĐỊNH XUẤT HÓA ĐƠN (VAT)">
            <p>
              Hỗ trợ xuất hóa đơn VAT trong ngày theo quy định của hãng hàng
              không.
            </p>
          </InfoBox>
        </aside>
      </div>
    </div>
  );
}

export default function PaymentPage() {
  return (
    <main className="min-h-screen bg-[#f1f1f1] py-4 font-sans">
      <Suspense
        fallback={
          <div className="text-center py-10">
            Đang tải thông tin thanh toán...
          </div>
        }
      >
        <PaymentContent />
      </Suspense>
    </main>
  );
}

/* ================= HELPER COMPONENTS ================= */

function BankRow({
  label,
  value,
  onCopy,
  copied,
  highlight = false,
}: {
  label: string;
  value: string;
  onCopy?: () => void;
  copied?: boolean;
  highlight?: boolean;
}) {
  return (
    <div className="grid grid-cols-[100px_1fr] items-center gap-2 border-b border-gray-100 pb-2 text-xs sm:text-sm">
      <span className="text-gray-500">{label}</span>

      <div className="flex items-center justify-between gap-2">
        <span
          className={`font-semibold ${
            highlight ? "text-red-600 text-base" : "text-gray-800"
          }`}
        >
          {value}
        </span>

        {onCopy && (
          <button
            type="button"
            onClick={onCopy}
            className="shrink-0 rounded p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition"
            title="Sao chép"
          >
            {copied ? (
              <CheckCircle2 className="h-4 w-4 text-green-600" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </button>
        )}
      </div>
    </div>
  );
}

function InfoRow({
  label,
  value,
  bold = false,
  highlight = false,
}: {
  label: string;
  value: string;
  bold?: boolean;
  highlight?: boolean;
}) {
  return (
    <div className="grid grid-cols-[100px_1fr] gap-2 items-center text-xs sm:text-sm">
      <span className="text-gray-500">{label}:</span>

      <span
        className={`
          ${bold ? "font-semibold" : ""}
          ${highlight ? "font-bold text-red-600 text-base sm:text-lg" : "text-gray-800"}
        `}
      >
        {value}
      </span>
    </div>
  );
}

function InfoBox({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-sm overflow-hidden">
      <div className="px-3 py-2 text-xs font-bold text-gray-800 bg-gray-50 border-b border-gray-100">
        {title}
      </div>

      <div className="p-3 text-xs leading-5 text-gray-600 space-y-1">
        {children}
      </div>
    </div>
  );
}

function Step({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-2.5 items-start">
      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#007849] text-[10px] font-bold text-white mt-0.5">
        {number}
      </span>
      <span>{children}</span>
    </div>
  );
}
