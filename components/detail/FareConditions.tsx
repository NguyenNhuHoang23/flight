import React from "react";

import { FareOptionAPI } from "./flight-types";

interface Props {
  cheapestFare?: FareOptionAPI;
  handBaggage: string;
  freeBaggage: string;
  hasMeal: boolean;
}

export const FareConditions: React.FC<Props> = ({
  cheapestFare,
  handBaggage,
  freeBaggage,
  hasMeal,
}) => {
  const handBaggageText =
    handBaggage.includes("07") || handBaggage.includes("7")
      ? "01 kiện chính (kích thước tối đa 56x36x23cm) và/hoặc 01 túi xách nhỏ (kích thước tối đa 40x30x10), tổng trọng lượng không vượt quá 07kg"
      : handBaggage;

  const checkedBaggageText =
    freeBaggage.includes("Không") || freeBaggage.includes("Chưa")
      ? "Chưa bao gồm hành lý ký gửi, chọn thêm ở trang đặt vé, mỗi kiện hành lý đóng không quá 32kg/ kiện (nếu có)"
      : freeBaggage;

  return (
    <div className="pt-2 border-t border-gray-200">
      <div className="font-bold text-xs uppercase text-gray-800 mb-2">
        Điều kiện giá vé:
      </div>

      <div className="space-y-2 text-[11px] text-gray-700 leading-relaxed">
        <Condition label="Hành lý xách tay" value={handBaggageText} />

        <Condition label="Hành lý ký gửi" value={checkedBaggageText} />

        <Condition
          label="Suất ăn/ uống tiêu chuẩn"
          value={
            hasMeal
              ? "Đã bao gồm suất ăn miễn phí"
              : "Chưa bao gồm suất ăn miễn phí"
          }
        />

        <Condition
          label="Hoàn vé"
          value={
            cheapestFare?.Refundable
              ? "Có áp dụng hoàn vé (có thu phí)"
              : "Không áp dụng hoàn tiền trong mọi trường hợp"
          }
        />

        <Condition
          label="Đổi tên"
          value={
            cheapestFare?.Exchangeable
              ? "Có áp dụng (có phí)"
              : "Không áp dụng."
          }
        />

        <Condition
          label="Bảo lưu vé"
          value="400,000VNĐ/ 1 khách / 1 chặng (01 năm tính từ ngày bay đầu tiên trên vé, không hoàn phí dịch vụ)"
        />

        <Condition
          label="Thời hạn Bảo lưu vé"
          value="Trước giờ khởi hành tối thiểu 25 tiếng"
        />

        <Condition
          label="Đổi chuyến bay (ngày/giờ/hành trình)"
          value="Phí 400,000 vnd + chênh lệch nếu có/ 1 khách / 1 chặng"
        />

        <Condition
          label="Thời hạn hoàn vé/ thay đổi vé/ thêm hành lý"
          value="Trước giờ khởi hành tối thiểu 6 tiếng"
        />

        <div className="pt-1 text-gray-500 italic space-y-0.5">
          <div>Phí áp dụng cho 1 người/1 chặng bay</div>
          <div>Phí dịch vụ không được hoàn lại trong mọi trường hợp</div>
        </div>
      </div>
    </div>
  );
};

interface ConditionProps {
  label: string;
  value: string;
}

const Condition: React.FC<ConditionProps> = ({ label, value }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
      <span className="font-medium text-gray-600">{label}</span>

      <span className="md:col-span-2">{value}</span>
    </div>
  );
};
