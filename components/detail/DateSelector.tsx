// DateSelector.tsx
import React from "react";

interface DateOption {
  date: Date;
  dayName: string;
  dateStr: string;
  price?: string;
  isPast: boolean;
}

interface DateSelectorProps {
  selectedDate: Date;
  onSelectDate: (date: Date) => void;
}

const WEEKDAYS = ["C.Nhật", "T.Hai", "T.Ba", "T.Tư", "T.Năm", "T.Sáu", "T.Bảy"];

export const DateSelector: React.FC<DateSelectorProps> = ({
  selectedDate,
  onSelectDate,
}) => {
  // Validate selectedDate, nếu NaN thì fallback về new Date()
  const validSelectedDate =
    selectedDate && !isNaN(selectedDate.getTime()) ? selectedDate : new Date();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Tạo danh sách 7 ngày
  const days: DateOption[] = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(validSelectedDate);
    d.setDate(validSelectedDate.getDate() + (i - 3));
    d.setHours(0, 0, 0, 0);

    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");

    return {
      date: d,
      dayName: WEEKDAYS[d.getDay()] || "",
      dateStr: `${day}/${month}`,
      isPast: d.getTime() < today.getTime(),
      price: "198,000",
    };
  });

  return (
    <div className="grid grid-cols-7 bg-gray-200 border-t border-gray-300 text-center text-xs overflow-hidden">
      {days.map((item, index) => {
        const isSelected =
          item.date.toDateString() === validSelectedDate.toDateString();

        if (item.isPast) {
          return (
            <div
              key={index}
              className="py-2 px-1 bg-gray-100 text-gray-400 cursor-not-allowed select-none flex flex-col justify-center items-center border-r last:border-r-0 border-gray-300"
            >
              <span className="font-medium">
                {item.dayName} {item.dateStr}
              </span>
            </div>
          );
        }

        return (
          <button
            key={index}
            type="button"
            onClick={() => onSelectDate(item.date)}
            className={`py-2 px-1 flex flex-col justify-center items-center transition-colors border-r last:border-r-0 border-gray-300 ${
              isSelected
                ? "bg-[#006838] text-white font-bold"
                : "bg-white text-gray-800 hover:bg-green-50"
            }`}
          >
            <span>
              {item.dayName} {item.dateStr}
            </span>
            {/* <span
              className={`text-[11px] mt-0.5 ${
                isSelected ? "text-yellow-300" : "text-red-500 font-semibold"
              }`}
            >
              {item.price}
            </span> */}
          </button>
        );
      })}
    </div>
  );
};
