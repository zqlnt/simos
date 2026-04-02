"use client";

import { PanelLeft, PanelRight } from "lucide-react";
import { OsAvatar } from "@/components/OsAvatar";
import { SimLogo } from "@/components/SimLogo";
import { useAppChrome } from "@/context/AppChromeContext";

const spring =
  "transition-[transform,box-shadow,background-color] duration-500 ease-[cubic-bezier(0.34,1.25,0.64,1)]";

/** Floating circle — logo / avatar when rails are minimized */
export function DockRailCircle({
  side,
  className = "",
  forceVisible = false,
}: {
  side: "left" | "right";
  className?: string;
  /** Show on small screens (e.g. scroll workspace strip). */
  forceVisible?: boolean;
}) {
  const { leftCollapsed, rightCollapsed, toggleLeft, toggleRight } = useAppChrome();

  const vis = forceVisible ? "flex" : "hidden lg:flex";

  if (side === "left") {
    const open = !leftCollapsed;
    return (
      <button
        type="button"
        onClick={toggleLeft}
        className={`dock-circle-btn dock-circle-btn--logo ${spring} ${vis} h-10 w-10 shrink-0 overflow-hidden p-0 ${open ? "dock-circle-btn--active" : ""} ${className}`}
        aria-label={leftCollapsed ? "Open navigation" : "Minimize navigation"}
        aria-pressed={open}
        title="Navigation"
      >
        {leftCollapsed ? (
          <span className="flex h-full w-full items-center justify-center bg-white/15">
            <SimLogo width={26} height={12} className="opacity-[0.96]" />
          </span>
        ) : (
          <span className="flex h-full w-full items-center justify-center">
            <PanelLeft className="h-[18px] w-[18px]" strokeWidth={2} />
          </span>
        )}
      </button>
    );
  }

  const open = !rightCollapsed;
  return (
    <button
      type="button"
      onClick={toggleRight}
      className={`dock-circle-btn dock-circle-btn--logo ${spring} ${vis} h-10 w-10 shrink-0 overflow-hidden p-0 ${open ? "dock-circle-btn--active" : ""} ${className}`}
      aria-label={rightCollapsed ? "Open Sim OS" : "Minimize Sim OS"}
      aria-pressed={open}
      title="Sim OS"
    >
      {rightCollapsed ? (
        <span className="flex h-full w-full items-center justify-center bg-white/12">
          <OsAvatar squircle className="!h-8 !w-8 !shadow-none !ring-0" />
        </span>
      ) : (
        <span className="flex h-full w-full items-center justify-center">
          <PanelRight className="h-[18px] w-[18px]" strokeWidth={2} />
        </span>
      )}
    </button>
  );
}
