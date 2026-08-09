import React from "react";

interface PaymentBillModalProps {
  imageUrl: string;
  onClose: () => void;
}

export default function PaymentBillModal({
  imageUrl,
  onClose,
}: PaymentBillModalProps) {
  return (
    <div
      className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-4 relative flex flex-col items-center animate-in fade-in zoom-in duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full flex items-center justify-between border-b pb-3 mb-3">
          <h3 className="font-bold text-slate-800 text-sm flex items-center gap-1.5">
            💳 Bill chuyển khoản thanh toán
          </h3>

          <button
            type="button"
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 font-bold flex items-center justify-center text-sm transition"
          >
            ✕
          </button>
        </div>

        <div className="w-full max-h-[70vh] overflow-auto rounded-lg border border-slate-200 bg-slate-900/5 flex items-center justify-center p-2">
          <img
            src={imageUrl}
            alt="Bill chuyển khoản"
            className="max-w-full max-h-[60vh] object-contain rounded shadow-sm"
          />
        </div>

        <div className="mt-4 flex w-full justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-900 text-white font-semibold text-xs rounded transition"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
}
