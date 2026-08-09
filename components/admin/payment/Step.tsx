import React from "react";

interface StepProps {
  number: string;
  children: React.ReactNode;
}

export default function Step({ number, children }: StepProps) {
  return (
    <div className="flex items-start gap-2">
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ff512b] text-[10px] font-bold text-white">
        {number}
      </span>

      <span>{children}</span>
    </div>
  );
}
