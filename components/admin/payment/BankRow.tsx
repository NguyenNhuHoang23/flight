import { CheckCircle2, Copy } from "lucide-react";

interface BankRowProps {
  label: string;
  value: string;
  onCopy?: () => void;
  copied?: boolean;
  highlight?: boolean;
}

export default function BankRow({
  label,
  value,
  onCopy,
  copied,
  highlight = false,
}: BankRowProps) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-gray-600">{label}</span>

      <div className="flex items-center justify-end gap-2 text-right">
        <span
          className={`font-semibold ${
            highlight ? "text-base text-red-600" : "text-gray-800"
          }`}
        >
          {value}
        </span>

        {onCopy && (
          <button
            type="button"
            onClick={onCopy}
            className="shrink-0 rounded p-1.5 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
            title="Sao chép"
          >
            {copied ? (
              <CheckCircle2 className="h-4 w-4 text-green-600" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </button>
        )}
      </div>
    </div>
  );
}
