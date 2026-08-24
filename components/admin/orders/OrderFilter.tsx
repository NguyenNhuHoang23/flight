import React from "react";

interface OrderFilterProps {
  searchTerm: string;
  selectedStatus: string;
  onSearchChange: (value: string) => void;
  onStatusChange: (value: string) => void;
}

const STATUS_TABS = [
  { id: "all", label: "Tất cả" },
  { id: "pending", label: "Chờ duyệt" },
  { id: "paid", label: "Đã thanh toán" },
  { id: "confirmed", label: "Đã xuất vé" },
  { id: "cancelled", label: "Đã hủy" },
];

export default function OrderFilter({
  searchTerm,
  selectedStatus,
  onSearchChange,
  onStatusChange,
}: OrderFilterProps) {
  return (
    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center">
      {/* Search */}
      <div className="w-full md:w-80 relative">
        <input
          type="text"
          placeholder="Tìm mã đơn, tên, SĐT..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-9 pr-4 py-2 border border-slate-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent placeholder:text-sm"
        />

        <span className="absolute left-3 top-2.5 text-slate-400 text-sm pointer-events-none">
          🔍
        </span>
      </div>

      {/* Status */}
      <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg w-full md:w-auto overflow-x-auto text-xs font-semibold">
        {STATUS_TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => onStatusChange(tab.id)}
            className={`px-3 py-1.5 rounded-md whitespace-nowrap transition-all ${
              selectedStatus === tab.id
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
