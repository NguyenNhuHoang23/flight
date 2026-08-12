import { CreditCard, Info } from "lucide-react";
import BankRow from "./BankRow";
import { BANK_INFO, formatMoney } from "./payment-utils";

interface BankPaymentInfoProps {
  bank?: {
    bankName: string;
    accountNumber: string;
    accountHolder: string;
  };
  amount: number;
  transferContent: string | null;
  copied: string;
  onCopy: (text: string, type: string) => void;
}

export default function BankPaymentInfo({
  bank,
  amount,
  transferContent,
  copied,
  onCopy,
}: BankPaymentInfoProps) {
  const bankName = bank?.bankName || BANK_INFO.bankName;
  const accountNumber = bank?.accountNumber || BANK_INFO.accountNumber;
  const accountHolder = bank?.accountHolder || BANK_INFO.accountName;

  const qrValue = bank
    ? `https://img.vietqr.io/image/${bank.bankName}-${bank.accountNumber}-compact2.png` +
      `?amount=${amount}` +
      `&addInfo=${encodeURIComponent(transferContent ?? "")}` +
      `&accountName=${encodeURIComponent(bank.bankName)}`
    : "";

  return (
    <div className="mx-4 mt-3 mb-5 overflow-hidden rounded-md border border-gray-200">
      <div className="flex items-center justify-between bg-[#eeeeee] px-4 py-3">
        <div className="flex items-center gap-3">
          <CreditCard className="h-5 w-5 text-[#0077ff]" />

          <span className="text-sm font-bold uppercase text-gray-800">
            Chuyển khoản ngân hàng
          </span>
        </div>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[280px_1fr]">
          <div className="flex flex-col items-center">
            <div className="rounded-lg border bg-white p-3 shadow-sm">
              {qrValue ? (
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

          <div>
            <h3 className="mb-4 text-base font-bold text-gray-800">
              Thông tin chuyển khoản
            </h3>

            <div className="space-y-3">
              <BankRow label="Ngân hàng" value={bankName} />

              <BankRow
                label="Số tài khoản"
                value={accountNumber}
                onCopy={() => onCopy(accountNumber, "account")}
                copied={copied === "account"}
              />

              <BankRow label="Chủ tài khoản" value={accountHolder} />

              <BankRow label="Số tiền" value={formatMoney(amount)} highlight />

              <BankRow label="Nội dung" value={transferContent ?? ""} />
            </div>

            <div className="mt-5 flex gap-2 rounded-md border border-orange-200 bg-orange-50 p-3 text-xs text-orange-800">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-orange-600" />

              <p>
                Vui lòng chuyển khoản đúng số tiền và đúng nội dung để hệ thống
                xác nhận đơn hàng tự động xuất vé.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
