import React from "react";
import { PriceDisplayFilter } from "./PriceDisplayFilter";

interface Props {
  showTotalPrice: boolean;
  setShowTotalPrice: (value: boolean) => void;
}

export const FlightSidebar: React.FC<Props> = ({
  showTotalPrice,
  setShowTotalPrice,
}) => {
  return (
    <aside className="space-y-4">
      {/* Sắp xếp */}
      <div className="bg-white border border-gray-200 rounded shadow-sm overflow-hidden">
        <div className="bg-gray-100 px-3 py-2 text-blue-900 font-bold text-xs border-b border-gray-200">
          Sắp xếp theo
        </div>

        <div className="p-3 space-y-2 text-xs">
          <label className="flex items-center gap-2 cursor-pointer text-red-600 font-semibold">
            <input type="radio" name="sort" defaultChecked />
            Mặc định
          </label>

          <label className="flex items-center gap-2 cursor-pointer text-gray-700">
            <input type="radio" name="sort" />
            Giá tăng dần
          </label>
        </div>
      </div>

      <PriceDisplayFilter
        showTotalPrice={showTotalPrice}
        setShowTotalPrice={setShowTotalPrice}
      />
    </aside>
  );
};
