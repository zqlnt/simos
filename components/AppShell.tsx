"use client";

import { useEffect, useId } from "react";
import { ChevronDown } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { RightSidebar } from "@/components/RightSidebar";
import { HeaderActionBar } from "@/components/HeaderActionBar";
import { PromptBar } from "@/components/PromptBar";
import { useAppChrome } from "@/context/AppChromeContext";
import { lgChromeDockInsetClass } from "@/lib/chrome-inset";

const railEase = "duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]";

/**
 * Fixed sidebars sit in a 0-width flex slot so they don't steal width from the main column.
 * No z-index on the slot — only the fixed <aside> should stack above main, or a z-50 wrapper
 * covers the whole workspace and hides the canvas/background behind a transparent layer.
 */
/* Below lg: `contents` hoists fixed aside to app-bg so h-0 wrapper cannot break touch/stacking (mobile drawer). */
const railSlotClass =
  "contents lg:relative lg:block lg:h-0 lg:max-h-0 lg:min-h-0 lg:w-0 lg:shrink-0 lg:flex-none lg:overflow-visible lg:basis-0 lg:max-h-none";
const promptSlotClass =
  "relative h-0 max-h-0 min-h-0 w-full shrink-0 flex-none overflow-visible lg:w-0 lg:basis-0 lg:max-h-none";

export function AppShell({ children }: { children: React.ReactNode }) {
  const panelId = useId();
  const {
    leftCollapsed,
    rightCollapsed,
    viewMode,
    topChromeHidden,
    toggleTopChrome,
    bottomDockCollapsed,
    scrollChromeActive,
    registerMainCanvas,
    leftMobileOpen,
    setLeftMobileOpen,
  } = useAppChrome();
  const minimalRails = leftCollapsed && rightCollapsed;
  const lgDockInset = lgChromeDockInsetClass(leftCollapsed, rightCollapsed);
  const bottomChromeTight = bottomDockCollapsed || scrollChromeActive;
  /** Main scroll sits in flow between fixed rails — inset so canvas doesn’t run under floating sidebars on lg */
  const mainLgInsetClass = [
    !leftCollapsed ? "lg:pl-[15.5rem]" : "",
    !rightCollapsed ? "lg:pr-[17rem]" : "",
  ]
    .filter(Boolean)
    .join(" ");

  useEffect(() => {
    if (!leftMobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLeftMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [leftMobileOpen, setLeftMobileOpen]);

  return (
    <div
      data-chrome={minimalRails ? "minimal" : "expanded"}
      className={`app-bg relative flex h-[100dvh] max-h-[100dvh] min-h-0 w-full max-w-[100vw] flex-col overflow-x-hidden overflow-y-hidden transition-[gap,padding] duration-500 ease-[cubic-bezier(0.34,1.25,0.64,1)] lg:flex-row lg:p-3 ${
        minimalRails ? "lg:gap-1.5" : "lg:gap-3"
      }`}
    >
      {leftMobileOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-[70] bg-slate-900/15 backdrop-blur-[2px] lg:hidden"
          aria-label="Close menu"
          onClick={() => setLeftMobileOpen(false)}
        />
      ) : null}

      {/* Gutter — only when the left rail is expanded on lg (collapsed = full-bleed main) */}
      <div
        aria-hidden
        className={`hidden shrink-0 ${leftCollapsed ? "" : "w-[2.75rem] lg:block"}`}
      />

      <div className={railSlotClass}>
        <aside
          id={panelId}
          className={`glass-sidebar-float fixed z-[90] flex min-h-0 w-[min(22rem,calc(100vw-1.25rem))] flex-col touch-manipulation overflow-hidden transition-[width,transform,box-shadow] ${railEase} left-[max(0.75rem,env(safe-area-inset-left))] top-[max(0.75rem,env(safe-area-inset-top))] bottom-[max(0.75rem,env(safe-area-inset-bottom))] max-h-[calc(100dvh-env(safe-area-inset-top)-env(safe-area-inset-bottom)-1.5rem)] lg:inset-y-3 lg:left-3 lg:top-3 lg:max-h-[calc(100dvh-1.5rem)] lg:w-[17.5rem] ${
            leftCollapsed ? "lg:hidden lg:overflow-visible" : "lg:shadow-[8px_0_32px_rgba(15,25,45,0.12)]"
          } ${
            leftMobileOpen
              ? "translate-x-0"
              : "-translate-x-[calc(100%+1rem)] lg:translate-x-0"
          }`}
          aria-hidden={undefined}
        >
          <Sidebar onNavigate={() => setLeftMobileOpen(false)} />
        </aside>
      </div>

      {/* Top dock must stack above sidebars (z-90) so collapse circles stay tappable */}
      {!topChromeHidden ? (
        <div
          className={`pointer-events-none fixed inset-x-0 top-0 z-[110] ${lgDockInset}`}
        >
          <div className="pointer-events-auto">
            <HeaderActionBar
              mobileMenuOpen={leftMobileOpen}
              onMobileMenuToggle={() => setLeftMobileOpen(!leftMobileOpen)}
              panelId={panelId}
            />
          </div>
        </div>
      ) : null}

      {/* Main scroll — below header in z-order; padding-top clears fixed header */}
      <div
        className={`glass-main-scroll relative z-30 flex min-h-0 min-w-0 w-full max-w-full flex-1 flex-col overflow-hidden transition-[max-width,padding] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${mainLgInsetClass} ${bottomChromeTight ? "pb-14 sm:pb-16 lg:pb-16" : "pb-28 lg:pb-32"}`}
      >
        <main
          ref={registerMainCanvas}
          data-view-mode={viewMode}
          className={`app-main-canvas relative z-10 mx-auto flex min-h-0 w-full max-w-[min(96rem,100%)] flex-1 flex-col overflow-x-hidden overflow-y-auto bg-transparent px-3 text-[15px] leading-relaxed text-gray-800 transition-[max-width] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] sm:px-5 lg:px-8 ${topChromeHidden ? "pt-14 sm:pt-16" : "pt-[calc(4.35rem+env(safe-area-inset-top))] sm:pt-[calc(4.55rem+env(safe-area-inset-top))] lg:pt-[calc(4.85rem+env(safe-area-inset-top))]"} ${bottomChromeTight ? "pb-24 sm:pb-28 lg:pb-32" : "pb-44 sm:pb-48 lg:pb-52"}`}
        >
          {children}
        </main>
      </div>

      <div
        aria-hidden
        className={`hidden shrink-0 ${rightCollapsed ? "" : "w-[2.75rem] lg:block"}`}
      />

      <RightSidebar />

      <div className={promptSlotClass}>
        <PromptBar shellInsetClass={lgDockInset} />
      </div>

      {topChromeHidden ? (
        <button
          type="button"
          className="glass-btn fixed top-[max(0.75rem,env(safe-area-inset-top))] left-1/2 z-[120] flex -translate-x-1/2 items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-gray-800 shadow-lg"
          onClick={toggleTopChrome}
          aria-label="Show workspace bar"
        >
          <ChevronDown className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
          Workspace bar
        </button>
      ) : null}
    </div>
  );
}
