import Step from "./Step";

export default function PaymentGuide() {
  return (
    <div className="mx-4 mb-5 rounded-md border border-gray-100 bg-gray-50 p-4">
      <h3 className="mb-3 text-sm font-semibold text-gray-800">
        Hướng dẫn thanh toán
      </h3>

      <div className="space-y-2 text-xs text-gray-700 sm:text-sm">
        <Step number="1">Mở ứng dụng ngân hàng và quét mã QR phía trên.</Step>

        <Step number="2">Kiểm tra số tiền và nội dung chuyển khoản.</Step>

        <Step number="3">
          Thực hiện chuyển khoản và chụp lại màn hình giao dịch thành công.
        </Step>

        <Step number="4">
          Upload ảnh bill chuyển khoản và bấm nút <b>Nhận vé</b>.
        </Step>
      </div>
    </div>
  );
}
