import React from "react";

import { FarePax } from "./flight-types";
import { formatPrice, getPaxName } from "./flight-utils";

interface Props {
  listFarePax: FarePax[];
  totalPaxCount: number;
  totalGroupPrice: number;
  avgPricePerPax: number;
}

export const FlightPriceTable: React.FC<Props> = ({
  listFarePax,
  totalPaxCount,
  totalGroupPrice,
  avgPricePerPax,
}) => {
  console.log("🚀 ~ FlightPriceTable ~ listFarePax:", listFarePax);
  return (
    <div>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-gray-600 border-b border-gray-200">
            <th className="py-1.5 font-normal">Hành khách</th>

            <th className="py-1.5 font-normal text-center">Số lượng</th>

            <th className="py-1.5 font-normal text-right">Giá cơ bản</th>

            <th className="py-1.5 font-normal text-right">Thuế & phí</th>

            <th className="py-1.5 font-normal text-right">Tổng giá</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100 font-medium">
          {listFarePax.map((pax, index) => {
            const taxAndFee = Math.max(
              0,
              pax.TotalFare - (pax.BaseFare ?? 0),
            );

            return (
              <tr key={index}>
                <td className="py-1.5 text-gray-800">
                  {getPaxName(pax.PaxType ?? "")}
                </td>

                <td className="py-1.5 text-center">{pax.PaxNumb}</td>

                <td className="py-1.5 text-right">
                  {formatPrice(pax.BaseFare)}
                </td>

                <td className="py-1.5 text-right">{formatPrice(taxAndFee)}</td>

                <td className="py-1.5 text-right text-gray-900 font-bold">
                  {formatPrice(pax.TotalFare)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="border-t border-dashed border-gray-300 mt-2 pt-2 space-y-1">
        <div className="flex justify-between items-center text-xs">
          <span className="font-semibold text-gray-700">
            Tổng giá vé {totalPaxCount} khách:
          </span>

          <span className="text-sm font-bold text-red-600">
            {formatPrice(totalGroupPrice)}
          </span>
        </div>

        <div className="flex justify-between items-center text-xs">
          <span className="font-semibold text-gray-700">
            Giá vé cho 1 khách:
          </span>

          <span className="text-sm font-bold text-red-600">
            {formatPrice(avgPricePerPax)}
          </span>
        </div>
      </div>
    </div>
  );
};
