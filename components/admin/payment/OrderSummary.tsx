import InfoRow from "./InfoRow";
import FlightSummary from "./FlightSummary";
import { OrderData } from "./payment-types";
import { formatMoney } from "./payment-utils";

interface OrderSummaryProps {
  order: OrderData;
}

export default function OrderSummary({ order }: OrderSummaryProps) {
  return (
    <aside className="space-y-3">
      <div className="overflow-hidden rounded-sm border border-gray-200 bg-white shadow-sm">
        <div className="bg-[#ff512b] px-4 py-2.5 text-center text-sm font-bold uppercase text-white">
          Thông tin đơn hàng
        </div>

        <div className="space-y-3 p-3 text-xs sm:text-sm">
          <InfoRow label="Mã đơn hàng" value={order.code} bold />

          <InfoRow label="Số hành khách" value={order.passengers} />

          <FlightSummary flights={order.flights} />

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
          Quý khách cần đảm bảo một trong các giấy tờ sau khi làm thủ tục tại
          sân bay:
        </p>

        <ul className="mt-2 space-y-1">
          <li>- Căn cước công dân;</li>
          <li>- Hộ chiếu;</li>
          <li>- VNeID định danh điện tử mức độ 2;</li>
          <li>- Giấy phép lái xe;</li>
          <li>
            - Giấy khai sinh (Bản chính hoặc Trích lục, áp dụng cho trẻ em dưới
            14 tuổi);
          </li>
        </ul>

        <p className="mt-2">
          Các loại giấy tờ phải là bản gốc còn rõ nét, nguyên vẹn và còn thời
          hạn sử dụng.
        </p>
      </InfoBox>

      <InfoBox title="LƯU Ý THỜI GIAN LÀM THỦ TỤC">
        <p>
          Có mặt tối thiểu trước <b>120 phút</b> so với giờ khởi hành đối với
          chuyến bay nội địa.
        </p>

        <p className="mt-1.5">
          Có mặt trước <b>180 phút</b> đối với chuyến bay quốc tế.
        </p>
      </InfoBox>

      <InfoBox title="QUY ĐỊNH XUẤT HÓA ĐƠN (VAT)">
        <p>
          Hỗ trợ xuất hóa đơn VAT trong ngày theo quy định của hãng hàng không.
        </p>
      </InfoBox>
    </aside>
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
    <div className="overflow-hidden rounded-sm border border-gray-200 bg-white">
      <div className="bg-gray-100 px-3 py-2 text-xs font-bold text-gray-800">
        {title}
      </div>

      <div className="space-y-1 p-3 text-xs leading-5 text-gray-600">
        {children}
      </div>
    </div>
  );
}
