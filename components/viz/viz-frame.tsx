import type { ReactNode } from "react";

/** Shared frame for embedded simulation visuals — sits inside panels. */
export function VizFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`pointer-events-none relative h-[5.25rem] w-full shrink-0 overflow-hidden rounded-xl bg-gradient-to-b from-white/[0.18] to-transparent ring-1 ring-white/30 ${className}`}
      aria-hidden
    >
      {children}
    </div>
  );
}
