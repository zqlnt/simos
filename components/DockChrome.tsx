"use client";

import { PanelLeft, PanelRight } from "lucide-react";
import { useAppChrome } from "@/context/AppChromeContext";

const spring =
  "transition-[transform,box-shadow,background-color] duration-500 ease-[cubic-bezier(0.34,1.25,0.64,1)]";

/** Floating circle control — aligns with thin dock; bouncy press feedback. */
export function DockRailCircle({
  side,
  className = "",
}: {
  side: "left" | "right";
  className?: string;
}) {
  const { leftCollapsed, rightCollapsed, toggleLeft, toggleRight } = useAppChrome();

  if (side === "left") {
    const open = !leftCollapsed;
    return (
      <button
        type="button"
        onClick={toggleLeft}
        className={`dock-circle-btn ${spring} hidden shrink-0 lg:flex ${open ? "dock-circle-btn--active" : ""} ${className}`}
        aria-label={leftCollapsed ? "Open navigation" : "Minimize navigation"}
        aria-pressed={open}
        title="Navigation"
      >
        <PanelLeft className="h-[18px] w-[18px]" strokeWidth={2} />
      </button>
    );
  }

  const open = !rightCollapsed;
  return (
    <button
      type="button"
      onClick={toggleRight}
      className={`dock-circle-btn ${spring} hidden shrink-0 lg:flex ${open ? "dock-circle-btn--active" : ""} ${className}`}
      aria-label={rightCollapsed ? "Open Sim OS" : "Minimize Sim OS"}
      aria-pressed={open}
      title="Sim OS"
    >
      <PanelRight className="h-[18px] w-[18px]" strokeWidth={2} />
    </button>
  );
}
