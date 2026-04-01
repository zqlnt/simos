"use client";

import { useEffect, useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { RightSidebar } from "@/components/RightSidebar";
import { HeaderActionBar } from "@/components/HeaderActionBar";
import { PromptBar } from "@/components/PromptBar";
import { WorldAtmosphere } from "@/components/WorldAtmosphere";
import { useAppChrome } from "@/context/AppChromeContext";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const {
    leftCollapsed,
    rightCollapsed,
    viewMode,
    topChromeHidden,
    toggleTopChrome,
    bottomDockCollapsed,
  } = useAppChrome();
  const minimalRails = leftCollapsed && rightCollapsed;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div
      data-chrome={minimalRails ? "minimal" : "expanded"}
      className={`app-bg relative z-10 flex h-full min-h-[100dvh] flex-col overflow-hidden transition-[gap,padding] duration-500 ease-[cubic-bezier(0.34,1.25,0.64,1)] lg:flex-row lg:p-3 ${
        minimalRails ? "lg:gap-1.5" : "lg:gap-3"
      }`}
    >
      <WorldAtmosphere />
      {open ? (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-slate-900/15 backdrop-blur-[2px] lg:hidden"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        />
      ) : null}

      <aside
        id={panelId}
        className={`glass-sidebar-float fixed inset-y-3 left-3 z-50 flex max-h-[calc(100dvh-1.5rem)] min-h-0 flex-col overflow-hidden transition-[width,transform] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] lg:static lg:inset-auto lg:z-auto lg:my-0 lg:h-full lg:max-h-full lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-[calc(100%+1rem)] lg:translate-x-0"
        } w-[min(18rem,88vw)] ${leftCollapsed ? "lg:w-[3.25rem]" : "lg:w-[17.5rem]"}`}
        aria-hidden={undefined}
      >
        <Sidebar onNavigate={() => setOpen(false)} />
      </aside>

      <div
        className={`glass-main-scroll relative z-10 flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden ${bottomDockCollapsed ? "pb-14 sm:pb-16 lg:pb-16" : "pb-28 lg:pb-32"}`}
      >
        <div className="relative flex min-h-0 min-w-0 flex-1 flex-col">
          <div className="absolute inset-x-0 top-0 z-30">
            <HeaderActionBar
              mobileMenuOpen={open}
              onMobileMenuToggle={() => setOpen((v) => !v)}
              panelId={panelId}
            />
          </div>

          <main
            data-view-mode={viewMode}
            className={`relative mx-auto flex min-h-0 w-full max-w-[min(96rem,calc(100vw-2rem))] flex-1 flex-col overflow-y-auto overscroll-y-contain px-3 pt-16 text-[15px] leading-relaxed text-gray-800 sm:px-5 sm:pt-[4.75rem] lg:px-8 lg:pt-20 ${bottomDockCollapsed ? "pb-24 sm:pb-28 lg:pb-32" : "pb-44 sm:pb-48 lg:pb-52"}`}
          >
            {children}
          </main>
        </div>
      </div>

      <RightSidebar />
      <PromptBar />

      {topChromeHidden ? (
        <button
          type="button"
          className="glass-btn fixed top-3 left-1/2 z-[60] flex -translate-x-1/2 items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-gray-800 shadow-lg"
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
