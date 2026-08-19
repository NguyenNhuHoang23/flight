"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";

function pillPath(width: number, height: number) {
  const r = height / 2;
  const w = Math.max(width, height);

  return [
    `M ${r},0`,
    `H ${w - r}`,
    `A ${r},${r} 0 0 1 ${w},${r}`,
    `V ${height - r}`,
    `A ${r},${r} 0 0 1 ${w - r},${height}`,
    `H ${r}`,
    `A ${r},${r} 0 0 1 0,${height - r}`,
    `V ${r}`,
    `A ${r},${r} 0 0 1 ${r},0`,
  ].join(" ");
}

export default function PointingArrows({ children }: { children: ReactNode }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [path, setPath] = useState("");

  useLayoutEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const update = () => {
      const width = el.offsetWidth;
      const height = el.offsetHeight;
      if (width < 8 || height < 8) return;
      setPath(pillPath(width, height));
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const planeStyle = path
    ? {
        offsetPath: `path("${path}")`,
        offsetRotate: "auto 45deg",
      }
    : undefined;

  return (
    <div className="flex flex-nowrap items-center justify-center gap-2 overflow-visible transition group-hover:scale-105 sm:gap-3">
      <span className="finger-in-out-right relative z-20 inline-block shrink-0" aria-hidden="true">
        <span className="inline-block rotate-45 text-3xl leading-none sm:text-4xl">
          ✈️
        </span>
      </span>

      <div ref={wrapRef} className="relative z-0 inline-flex overflow-visible">
        <span className="bill-border-orbit" aria-hidden="true">
          <span className="bill-border-plane" style={planeStyle}>
            ✈️
          </span>
          <span className="bill-border-plane bill-border-plane-delay" style={planeStyle}>
            ✈️
          </span>
        </span>
        <div className="relative z-0">{children}</div>
      </div>

      <span className="finger-in-out-left relative z-20 inline-block shrink-0" aria-hidden="true">
        <span className="inline-block -rotate-45 -scale-x-100 text-3xl leading-none sm:text-4xl">
          ✈️
        </span>
      </span>
    </div>
  );
}
