"use client";

import Link from "next/link";
import { ChevronUp, Menu, PanelLeft, PanelRight, RotateCcw } from "lucide-react";
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
    resetMainView,
    scrollChromeActive,
  } = useAppChrome();

  const minimalChrome = leftCollapsed && rightCollapsed;
  const workspaceScrollStrip = scrollChromeActive && !topChromeHidden;

  if (topChromeHidden) {
    return null;
  }

  if (workspaceScrollStrip) {
    return (
      <header
        className="dock-ambient dock-ambient--workspace-scroll relative z-0 shrink-0"
        data-workspace-scroll="true"
      >
        <div className="relative z-[1] px-2 pb-1 pt-[calc(0.25rem+env(safe-area-inset-top))] sm:px-3 sm:pb-1.5 sm:pt-[calc(0.4rem+env(safe-area-inset-top))] lg:px-3 lg:pb-1.5 lg:pt-[calc(0.45rem+env(safe-area-inset-top))]">
          <div className="mx-auto flex max-w-[min(80rem,100%)] items-center justify-center gap-1.5 sm:gap-2">
            <DockRailCircle side="left" forceVisible />
            <Link
              href="/"
              className={`glass-dock glass-dock--scroll-mini inline-flex h-8 shrink-0 items-center gap-1.5 rounded-full px-2 py-0.5 sm:h-9 sm:gap-2 sm:px-2.5 sm:py-1 ${logoFocus}`}
              aria-label="SimOS home"
            >
              <span className="flex h-5 w-[2.85rem] shrink-0 items-center justify-start overflow-hidden sm:h-6 sm:w-[3.25rem]">
                <SimLogo
                  width={80}
                  height={26}
                  className="max-h-[1.15rem] w-auto object-contain object-left sm:max-h-[1.35rem]"
                  alt=""
                />
              </span>
              <span className="shrink-0 text-[11px] font-semibold tracking-tight text-gray-900 sm:text-[13px]">
                SimOS
              </span>
            </Link>
            <DockRailCircle side="right" forceVisible />
          </div>
        </div>
      </header>
    );
  }

  return (
    <header
      className={`dock-ambient relative z-0 shrink-0 ${minimalChrome ? "dock-ambient--minimal" : ""}`}
    >
      <div className="relative z-[1] px-2 pb-1.5 pt-[calc(0.375rem+env(safe-area-inset-top))] sm:px-3 sm:pb-1.5 sm:pt-[calc(0.5rem+env(safe-area-inset-top))] lg:px-3 lg:pb-2 lg:pt-[calc(0.5rem+env(safe-area-inset-top))]">
        <div className="mx-auto flex max-w-[min(80rem,100%)] items-center gap-1.5 sm:gap-2.5">
          <DockRailCircle side="left" />
          <div
            className={`glass-dock flex min-h-[2.75rem] min-w-0 flex-1 items-center gap-1 rounded-full px-2 py-1 sm:gap-2 sm:px-3 ${minimalChrome ? "min-h-[2.5rem] py-0.5 max-sm:min-h-[2.5rem] max-sm:gap-0.5 max-sm:px-1.5 sm:min-h-[2.5rem] sm:py-0.5" : ""}`}
          >
          {lg ? (
            minimalChrome ? (
              <Link
                href="/"
                className={`flex shrink-0 items-center rounded-full px-2 py-1 ${logoFocus}`}
              >
                <span className="text-[12px] font-semibold tracking-tight text-gray-900 sm:text-[13px]">
                  SimOS
                </span>
              </Link>
            ) : leftCollapsed ? (
              <button
                type="button"
                onClick={toggleLeft}
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/35 bg-white/20 text-gray-700 hover:bg-white/35 ${logoFocus}`}
                aria-label="Expand navigation"
                aria-pressed={false}
              >
                <PanelLeft className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden />
              </button>
            ) : (
              <Link
                href="/"
                className={`flex min-w-0 shrink-0 flex-col justify-center rounded-full px-2 py-0.5 leading-none ${logoFocus}`}
              >
                <span className="truncate text-[12px] font-semibold tracking-tight text-gray-900">
                  simOS
                </span>
                <span className="text-[9px] font-medium uppercase tracking-[0.14em] text-[var(--app-primary)]">
                  workspace
                </span>
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
                className={`flex h-9 w-9 items-center justify-center rounded-full border border-white/35 bg-white/20 text-gray-800 hover:bg-white/35 ${logoFocus}`}
              >
                <Menu className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden />
              </button>
              <Link
                href="/"
                className="shrink-0 rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-gray-600 ring-1 ring-white/40 hover:bg-white/30 sm:text-[11px]"
              >
                Home
              </Link>
            </div>
          )}

          {!(minimalChrome && lg) ? (
            <>
              <div className="mx-0.5 hidden h-5 w-px bg-gradient-to-b from-transparent via-white/45 to-transparent sm:block" />

              <div
                className={`min-w-0 flex-1 ${minimalChrome ? "max-sm:max-w-[min(52vw,11rem)]" : ""}`}
              >
                <WorkspaceScopePills variant="dock" />
              </div>
            </>
          ) : null}

          <div className="ml-auto flex shrink-0 items-center gap-1 sm:gap-1.5">
            <button
              type="button"
              onClick={resetMainView}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/35 bg-white/20 text-gray-600 hover:bg-white/40"
              aria-label="Reset view"
              title="Reset view — scroll to top"
            >
              <RotateCcw className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
            </button>
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
            <DockRailCircle side="right" />
          </div>
          </div>

          <button
            type="button"
            className="dock-circle-btn shrink-0 lg:hidden"
            onClick={() => setRightMobileOpen(true)}
            aria-label="Open Sim OS panel"
          >
            <PanelRight className="h-[18px] w-[18px]" strokeWidth={2} />
          </button>
        </div>
      </div>
    </header>
  );
}
