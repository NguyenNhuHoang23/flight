"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface OrderPaginationProps {
  currentPage: number;
  lastPage: number;
  total: number;
  from: number | null;
  to: number | null;
  loading?: boolean;
  onPageChange: (page: number) => void;
}

export default function OrderPagination({
  currentPage,
  lastPage,
  total,
  from,
  to,
  loading = false,
  onPageChange,
}: OrderPaginationProps) {
  if (lastPage <= 1) {
    return null;
  }

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (lastPage <= 7) {
      for (let i = 1; i <= lastPage; i++) {
        pages.push(i);
      }

      return pages;
    }

    pages.push(1);

    if (currentPage > 3) {
      pages.push("...");
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(lastPage - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < lastPage - 2) {
      pages.push("...");
    }

    pages.push(lastPage);

    return pages;
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm px-4 py-3">
      <div className="flex flex-col md:flex-row items-center justify-between gap-3">
        {/* INFO */}

        <div className="text-xs text-slate-500">
          Hiển thị <span className="font-bold text-slate-800">{from ?? 0}</span>{" "}
          - <span className="font-bold text-slate-800">{to ?? 0}</span> trong
          tổng số <span className="font-bold text-slate-800">{total}</span> đơn
          hàng
        </div>

        {/* PAGINATION */}

        <div className="flex items-center gap-1">
          {/* PREVIOUS */}

          <button
            type="button"
            disabled={currentPage === 1 || loading}
            onClick={() => onPageChange(currentPage - 1)}
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
          >
            <ChevronLeft size={16} />
          </button>

          {/* PAGE NUMBERS */}

          {getPageNumbers().map((page, index) => {
            if (page === "...") {
              return (
                <span
                  key={`dots-${index}`}
                  className="w-8 h-8 flex items-center justify-center text-slate-400 text-sm"
                >
                  ...
                </span>
              );
            }

            const pageNumber = page as number;

            return (
              <button
                key={pageNumber}
                type="button"
                disabled={loading}
                onClick={() => onPageChange(pageNumber)}
                className={`w-8 h-8 flex items-center justify-center rounded-lg text-xs font-semibold transition ${
                  currentPage === pageNumber
                    ? "bg-sky-600 text-white shadow-sm"
                    : "border border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                {pageNumber}
              </button>
            );
          })}

          {/* NEXT */}

          <button
            type="button"
            disabled={currentPage === lastPage || loading}
            onClick={() => onPageChange(currentPage + 1)}
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
