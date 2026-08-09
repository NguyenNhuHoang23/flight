interface InfoRowProps {
  label: string;
  value: string;
  bold?: boolean;
  highlight?: boolean;
}

export default function InfoRow({
  label,
  value,
  bold = false,
  highlight = false,
}: InfoRowProps) {
  return (
    <div className="flex items-start justify-between gap-3">
      <span className="shrink-0 text-gray-500">{label}:</span>

      <span
        className={`
          text-right
          ${bold ? "font-semibold" : ""}
          ${
            highlight
              ? "text-base font-bold text-red-600 sm:text-lg"
              : "text-gray-800"
          }
        `}
      >
        {value}
      </span>
    </div>
  );
}
