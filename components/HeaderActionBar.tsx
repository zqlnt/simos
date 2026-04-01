"use client";

import Link from "next/link";
import { ChevronUp, PanelRight } from "lucide-react";
import { DockRailCircle } from "@/components/DockChrome";
import { SimLogo } from "@/components/SimLogo";
import { WorkspaceScopePills } from "@/components/WorkspaceScopePills";
import { useAppChrome } from "@/context/AppChromeContext";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const spring =
  "transition-[transform,box-shadow,background-color] duration-500 ease-[cubic-bezier(0.34,1.25,0.64,1)]";

const logoFocus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--app-primary)]";

export function HeaderActionBar({
  mobileMenuOpen,
  onMobileMenuToggle,
  panelId,
}: {
  mobileMenuOpen: boolean;
  onMobileMenuToggle: () => void;
  panelId: string;
}) {
  const lg = useMediaQuery("(min-width: 1024px)");
  const {
    viewMode,
    setViewMode,
    setRightMobileOpen,
    leftCollapsed,
    rightCollapsed,
    toggleLeft,
    topChromeHidden,
    toggleTopChrome,
  } = useAppChrome();

  const minimalChrome = leftCollapsed && rightCollapsed;

  if (topChromeHidden) {
    return null;
  }

  return (
    <header
      className={`dock-ambient dock-ambient--frost z-30 shrink-0 px-2 py-1.5 sm:px-3 lg:py-2 ${minimalChrome ? "dock-ambient--minimal" : ""}`}
    >
      <div className="mx-auto flex max-w-[min(80rem,100%)] items-center gap-1.5 sm:gap-2.5">
        <div
          className={`glass-dock flex min-h-[2.75rem] min-w-0 flex-1 items-center gap-1 rounded-full px-2 py-1 sm:gap-2 sm:px-3 ${minimalChrome ? "max-sm:min-h-[2.5rem] max-sm:gap-0.5 max-sm:px-1.5" : ""}`}
        >
          {lg ? (
            leftCollapsed ? (
              <button
                type="button"
                onClick={toggleLeft}
                className={`flex shrink-0 items-center rounded-full py-0.5 pl-0.5 pr-1 ${logoFocus}`}
                aria-label="Expand navigation"
                aria-pressed={false}
              >
                <SimLogo width={56} height={22} className="opacity-[0.96]" />
              </button>
            ) : (
              <Link
                href="/"
                className={`flex shrink-0 items-center gap-2 rounded-full py-0.5 pl-0.5 pr-2 ${logoFocus}`}
              >
                <SimLogo width={56} height={22} className="opacity-[0.96]" />
                <div className="hidden min-w-0 flex-col leading-none sm:flex">
                  <span className="truncate text-[12px] font-semibold tracking-tight text-gray-900">
                    simOS
                  </span>
                  <span className="text-[9px] font-medium uppercase tracking-[0.14em] text-[var(--app-primary)]">
                    workspace
                  </span>
                </div>
              </Link>
            )
          ) : (
            <div className="flex min-w-0 shrink-0 items-center gap-1.5">
              <button
                type="button"
                onClick={onMobileMenuToggle}
                aria-expanded={mobileMenuOpen}
                aria-controls={panelId}
                aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
                className={`flex items-center rounded-full py-0.5 pl-0.5 pr-0.5 ${logoFocus}`}
              >
                <SimLogo width={52} height={20} className="opacity-[0.96]" />
              </button>
              <Link
                href="/"
                className="shrink-0 rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-gray-600 ring-1 ring-white/40 hover:bg-white/30 sm:text-[11px]"
              >
                Home
              </Link>
            </div>
          )}

          <div className="mx-0.5 hidden h-5 w-px bg-gradient-to-b from-transparent via-white/45 to-transparent sm:block" />

          <div
            className={`min-w-0 flex-1 ${minimalChrome ? "max-sm:max-w-[min(52vw,11rem)]" : ""}`}
          >
            <WorkspaceScopePills variant="dock" />
          </div>

          <div className="ml-auto flex shrink-0 items-center gap-1 sm:gap-1.5">
            {minimalChrome && lg ? (
              <button
                type="button"
                onClick={toggleTopChrome}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/25 text-gray-600 hover:bg-white/40"
                aria-label="Hide top bar"
                title="Hide top bar"
              >
                <ChevronUp className="h-3.5 w-3.5" strokeWidth={2} />
              </button>
            ) : null}
            <div
              className="glass-dock-segment flex items-center rounded-full p-0.5"
              role="group"
              aria-label="View mode"
            >
              <button
                type="button"
                onClick={() => setViewMode("2d")}
                className={`rounded-full px-2 py-1 text-[10px] font-semibold sm:px-3 sm:text-[12px] ${spring} ${
                  viewMode === "2d"
                    ? "bg-white/90 text-gray-900 shadow-sm ring-1 ring-black/[0.06]"
                    : "text-gray-500 hover:bg-white/40"
                }`}
                aria-pressed={viewMode === "2d"}
              >
                2D
              </button>
              <button
                type="button"
                onClick={() => setViewMode("3d")}
                className={`rounded-full px-2 py-1 text-[10px] font-semibold sm:px-3 sm:text-[12px] ${spring} ${
                  viewMode === "3d"
                    ? "bg-white/90 text-gray-900 shadow-sm ring-1 ring-black/[0.06]"
                    : "text-gray-500 hover:bg-white/40"
                }`}
                aria-pressed={viewMode === "3d"}
              >
                3D
              </button>
            </div>
          </div>
        </div>

        <DockRailCircle side="right" />

        <button
          type="button"
          className="dock-circle-btn shrink-0 lg:hidden"
          onClick={() => setRightMobileOpen(true)}
          aria-label="Open Sim OS panel"
        >
          <PanelRight className="h-[18px] w-[18px]" strokeWidth={2} />
        </button>
      </div>
    </header>
  );
}
