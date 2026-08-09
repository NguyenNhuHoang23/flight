import { CheckCircle2, Loader2, Ticket, Trash2, Upload } from "lucide-react";
import React, { useRef } from "react";

interface BillUploadProps {
  billFile: File | null;
  billPreview: string | null;
  isBusy: boolean;
  onFileChange: (file: File) => void;
  onRemove: () => void;
  onSubmit: () => void;
}

export default function BillUpload({
  billFile,
  billPreview,
  isBusy,
  onFileChange,
  onRemove,
  onSubmit,
}: BillUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Vui lòng chỉ tải lên định dạng file ảnh!");
      return;
    }

    onFileChange(file);
  };

  return (
    <div className="mx-4 mb-5 rounded-lg border border-dashed border-[#ff512b] bg-orange-50/50 p-5 text-center">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="hidden"
      />

      {!billPreview ? (
        <div
          onClick={() => fileInputRef.current?.click()}
          className="group flex cursor-pointer flex-col items-center"
        >
          <div className="mx-auto flex h-12 items-center justify-center gap-1.5 rounded-full border border-orange-200 bg-white px-4 shadow-sm transition group-hover:scale-105">
            <Upload className="h-5 w-5 text-[#ff512b]" />

            <span className="text-xs font-bold text-[#ff512b]">Up bill</span>
          </div>

          <h3 className="mt-3 text-base font-bold text-gray-800">
            Bạn đã chuyển khoản thành công?
          </h3>

          <p className="mt-1 text-xs text-gray-600 sm:text-sm">
            Vui lòng chụp ảnh màn hình giao dịch thành công và{" "}
            <span className="font-semibold text-[#ff512b] underline">
              up bill chuyển khoản
            </span>{" "}
            để nhận vé.
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div className="relative inline-block rounded-lg border-2 border-green-500 bg-white p-1 shadow-md">
            <img
              src={billPreview}
              alt="Bill thanh toán"
              className="max-h-48 rounded object-contain"
            />

            <button
              type="button"
              onClick={onRemove}
              className="absolute -top-2 -right-2 rounded-full bg-red-500 p-1 text-white shadow transition hover:bg-red-600"
              title="Xóa ảnh"
            >
              <Trash2 size={14} />
            </button>
          </div>

          <p className="mt-2 flex items-center gap-1 text-xs font-semibold text-green-700">
            <CheckCircle2 size={14} />
            Đã tải ảnh bill thành công
          </p>
        </div>
      )}

      <div className="mt-4">
        <button
          type="button"
          disabled={!billFile || isBusy}
          onClick={onSubmit}
          className={`inline-flex h-11 items-center justify-center gap-2 rounded-md px-8 text-sm font-semibold shadow transition ${
            billFile && !isBusy
              ? "cursor-pointer bg-[#ff512b] text-white hover:bg-[#ed4320]"
              : "cursor-not-allowed bg-gray-300 text-gray-500 opacity-80"
          }`}
        >
          {isBusy ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Đang gửi thông tin...
            </>
          ) : (
            <>
              <Ticket className="h-5 w-5" />
              Nhận vé
            </>
          )}
        </button>

        {!billFile && (
          <p className="mt-2 text-[11px] italic text-red-500">
            * Vui lòng up ảnh bill chuyển khoản để kích hoạt nút Nhận vé
          </p>
        )}
      </div>
    </div>
  );
}
