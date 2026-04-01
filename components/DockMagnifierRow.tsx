"use client";

import {
  Children,
  isValidElement,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

/** macOS-style falloff: strongest at cursor, neighbors pick up residual scale */
const SPREAD_PX = 88;
const MAX_SCALE = 1.38;

function scaleForDistance(distance: number): number {
  if (distance >= SPREAD_PX * 1.35) return 1;
  const t = Math.max(0, 1 - distance / SPREAD_PX);
  return 1 + (MAX_SCALE - 1) * t ** 1.12;
}

type DockMagnifierRowProps = {
  children: ReactNode;
  className?: string;
  slotClassName?: string | ((index: number) => string);
  disabled?: boolean;
};

export function DockMagnifierRow({
  children,
  className = "",
  slotClassName,
  disabled = false,
}: DockMagnifierRowProps) {
  const items = Children.toArray(children).filter(isValidElement);
  const count = items.length;
  const [scales, setScales] = useState<number[]>(() => Array(count).fill(1));
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const magnify = !disabled && !reducedMotion;

  const handleLeave = () => {
    setScales(Array(count).fill(1));
  };

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!magnify || count === 0) return;
    const container = containerRef.current;
    if (!container) return;
    if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const rect = container.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const next = itemRefs.current.map((el) => {
        if (!el) return 1;
        const cr = el.getBoundingClientRect();
        const cx = cr.left + cr.width / 2 - rect.left;
        return scaleForDistance(Math.abs(mx - cx));
      });
      setScales(next);
    });
  };

  const slotCls = (i: number) =>
    typeof slotClassName === "function" ? slotClassName(i) : slotClassName ?? "";

  return (
    <div
      ref={containerRef}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {items.map((child, i) => (
        <div
          key={i}
          ref={(el) => {
            itemRefs.current[i] = el;
          }}
          className={`dock-magnifier-slot ${slotCls(i)}`}
          style={{
            transform: magnify ? `translateZ(0) scale(${scales[i] ?? 1})` : undefined,
            transformOrigin: "50% 100%",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
