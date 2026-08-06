import React from "react";

interface Props {
  showTotalPrice: boolean;
  setShowTotalPrice: (value: boolean) => void;
}

export const PriceDisplayFilter: React.FC<Props> = ({
  showTotalPrice,
  setShowTotalPrice,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded shadow-sm overflow-hidden">
      <div className="bg-gray-100 px-3 py-2 text-blue-900 font-bold text-xs border-b border-gray-200">
        Chế độ hiển thị giá
      </div>

      <div className="p-3 space-y-2 text-xs">

        <label className="flex items-center gap-2 cursor-pointer text-gray-800">
          <input
            type="radio"
            name="priceDisplay"
                        checked={!showTotalPrice}

            onChange={() => setShowTotalPrice(false)}
          />
          Tổng giá vé (đã gồm thuế + phí)
        </label>
      </div>
    </div>
  );
};
