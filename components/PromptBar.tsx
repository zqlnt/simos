"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Globe2,
  GripHorizontal,
  Home,
  LayoutGrid,
  MessageSquare,
  PlayCircle,
  Send,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { DockMagnifierRow } from "@/components/DockMagnifierRow";
import { OsAvatar } from "@/components/OsAvatar";
import { useAppChrome } from "@/context/AppChromeContext";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const spring =
  "transition-[transform,opacity,max-height,border-radius] duration-500 ease-[cubic-bezier(0.34,1.25,0.64,1)]";

const dockQuickLinks: { href: string; label: string; Icon: LucideIcon }[] = [
  { href: "/", label: "Home", Icon: Home },
  { href: "/simium", label: "Simium", Icon: LayoutGrid },
  { href: "/simulator", label: "Simulator", Icon: PlayCircle },
  { href: "/simulatia", label: "Simulatia", Icon: Globe2 },
];

function isDockActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function PromptBar() {
  const pathname = usePathname();
  const lg = useMediaQuery("(min-width: 1024px)");
  const sm = useMediaQuery("(min-width: 640px)");
  const {
    promptExpanded,
    togglePrompt,
    toggleRight,
    setRightMobileOpen,
    bottomDockCollapsed,
    toggleBottomDock,
    setBottomDockCollapsed,
  } = useAppChrome();

  const openSimOS = () => {
    if (lg) toggleRight();
    else setRightMobileOpen(true);
  };

  const onPromptIconClick = () => {
    if (bottomDockCollapsed) {
      setBottomDockCollapsed(false);
    }
    togglePrompt();
  };

  const magnify = sm;

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-[35] flex justify-center px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-1 sm:px-4 lg:px-6"
      style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
    >
      <div
        className={`bottomdock-water pointer-events-auto w-full transition-[max-width] duration-300 ease-out ${bottomDockCollapsed ? "max-w-[min(19rem,calc(100vw-1rem))]" : "max-w-[min(36rem,calc(100vw-0.75rem))] sm:max-w-[min(40rem,calc(100vw-1rem))] lg:max-w-[min(44rem,calc(100vw-1.25rem))]"}`}
      >
        <div
          className={`bottomdock-shell ${bottomDockCollapsed ? "bottomdock-shell--collapsed" : ""}`}
        >
          {/* Quick apps — only when expanded; compact on narrow screens */}
          <div
            className={`grid overflow-hidden ${spring} ${bottomDockCollapsed ? "grid-rows-[0fr] opacity-0" : "grid-rows-[1fr] opacity-100"}`}
          >
            <div className="min-h-0">
              <div
                className={`border-b border-white/15 px-2 pb-2 pt-2 sm:px-3 sm:pb-2.5 sm:pt-2.5 ${bottomDockCollapsed ? "pointer-events-none" : ""}`}
              >
                <DockMagnifierRow
                  disabled={!magnify}
                  className="grid grid-cols-4 gap-1.5 sm:flex sm:flex-nowrap sm:items-end sm:justify-center sm:gap-2"
                  slotClassName="flex justify-center sm:shrink-0"
                >
                  {dockQuickLinks.map(({ href, label, Icon }) => {
                    const active = isDockActive(pathname, href);
                    return (
                      <Link
                        key={href}
                        href={href}
                        aria-label={label}
                        className={`dock-app-icon flex h-9 w-9 items-center justify-center sm:h-10 sm:w-10 ${
                          active
                            ? "ring-2 ring-[var(--app-primary)]/30"
                            : "ring-1 ring-white/20"
                        }`}
                        title={label}
                        aria-current={active ? "page" : undefined}
                      >
                        <Icon
                          className={`h-4 w-4 sm:h-[1.15rem] sm:w-[1.15rem] ${active ? "text-[var(--app-primary)]" : "text-gray-700/80"}`}
                          strokeWidth={1.65}
                          aria-hidden
                        />
                      </Link>
                    );
                  })}
                </DockMagnifierRow>
              </div>
            </div>
          </div>

          <DockMagnifierRow
            disabled={!magnify}
            className={`flex items-end gap-1 sm:gap-2 ${bottomDockCollapsed ? "justify-between px-2.5 py-2 sm:px-3 sm:py-2.5" : "justify-center px-2 py-2 sm:px-3 sm:py-2.5"}`}
            slotClassName={(i) =>
              i === 1 ? "flex min-w-0 flex-1 justify-center" : "shrink-0"
            }
          >
            <button
              type="button"
              onClick={openSimOS}
              className="dock-os-pill flex max-w-[100%] items-center gap-1.5 rounded-full py-1.5 pl-1 pr-2 text-gray-800 sm:gap-2 sm:pr-2.5"
              aria-label={lg ? "Toggle Sim OS panel" : "Open Sim OS"}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/18 ring-1 ring-white/30">
                <OsAvatar squircle className="!h-7 !w-7 !shadow-none !ring-0" />
              </span>
              {!bottomDockCollapsed ? (
                <span className="hidden max-w-[5.5rem] truncate text-[11px] font-semibold tracking-tight sm:inline">
                  Sim OS
                </span>
              ) : null}
            </button>

            <button
              type="button"
              onClick={toggleBottomDock}
              className="flex flex-col items-center justify-center gap-0.5 rounded-xl py-1 text-gray-500 hover:bg-white/12 sm:gap-1 sm:rounded-2xl"
              aria-expanded={!bottomDockCollapsed}
              aria-label={bottomDockCollapsed ? "Expand dock" : "Minimize dock"}
            >
              <GripHorizontal className="h-3.5 w-3.5 opacity-70 sm:h-4 sm:w-4" strokeWidth={2} aria-hidden />
              <span className="h-0.5 w-9 rounded-full bg-gray-400/35 sm:h-1 sm:w-11" aria-hidden />
            </button>

            <button
              type="button"
              onClick={onPromptIconClick}
              className={`flex items-center gap-1 rounded-full px-2 py-1.5 text-gray-800 sm:gap-1.5 sm:px-3 sm:py-2 ${promptExpanded && !bottomDockCollapsed ? "bg-white/18 ring-1 ring-[var(--app-primary)]/22" : "bg-white/12 ring-1 ring-white/22"}`}
              aria-expanded={promptExpanded}
              aria-controls="sim-prompt-panel"
              aria-label={promptExpanded ? "Collapse prompt" : "Expand prompt"}
            >
              <MessageSquare className="h-3.5 w-3.5 shrink-0 text-[var(--app-primary)] sm:h-4 sm:w-4" strokeWidth={1.75} />
              {!bottomDockCollapsed ? (
                <span className="hidden text-[11px] font-semibold sm:inline">Prompt</span>
              ) : null}
            </button>
          </DockMagnifierRow>

          <div
            className={`grid overflow-hidden ${spring} ${bottomDockCollapsed ? "grid-rows-[0fr] opacity-0" : "grid-rows-[1fr] opacity-100"}`}
          >
            <div className="min-h-0">
              <div
                className={`border-t border-white/15 px-2 pb-2 pt-1 sm:px-3 sm:pb-2.5 ${bottomDockCollapsed ? "pointer-events-none" : ""}`}
              >
                <div
                  id="sim-prompt-panel"
                  className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-[cubic-bezier(0.34,1.25,0.64,1)] ${
                    promptExpanded && !bottomDockCollapsed
                      ? "max-h-44 opacity-100 sm:max-h-48"
                      : "max-h-0 opacity-0"
                  }`}
                  aria-hidden={!promptExpanded || bottomDockCollapsed}
                >
                  <div className="flex items-end gap-2 pb-0.5">
                    <label htmlFor="sim-prompt-input" className="sr-only">
                      Prompt
                    </label>
                    <textarea
                      id="sim-prompt-input"
                      rows={promptExpanded ? 3 : 1}
                      placeholder="Ask Sim or describe a scene…"
                      className="min-h-[2.5rem] min-w-0 flex-1 resize-y rounded-2xl border border-white/18 bg-white/10 px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-500 backdrop-blur-md focus:outline focus:outline-2 focus:outline-offset-0 focus:outline-[var(--app-primary)] sm:min-h-[2.75rem] sm:px-4 sm:py-3"
                      disabled={!promptExpanded || bottomDockCollapsed}
                    />
                    <button
                      type="button"
                      className="btn-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full sm:h-11 sm:w-11"
                      aria-label="Send"
                    >
                      <Send className="h-4 w-4" strokeWidth={1.75} />
                    </button>
                  </div>
                </div>
                {!bottomDockCollapsed && !promptExpanded ? (
                  <p className="pointer-events-none pt-1.5 text-center text-[9px] text-gray-500 sm:text-[10px]">
                    Tap Prompt to write · centre to collapse
                  </p>
                ) : null}
              </div>
            </div>
          </div>

          {bottomDockCollapsed ? (
            <p className="pointer-events-none px-2 pb-1.5 text-center text-[9px] text-gray-500">
              Tap centre to expand
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
