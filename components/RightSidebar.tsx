"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Building2,
  CalendarDays,
  CheckSquare,
  PanelRight,
  X,
} from "lucide-react";
import { OsAvatar } from "@/components/OsAvatar";
import { useAppChrome } from "@/context/AppChromeContext";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const weekDays = ["S", "M", "T", "W", "T", "F", "S"];

const chatSeed = [
  {
    role: "os" as const,
    text: "simOS online. Maps, systems, and rooms are linked in the header scope.",
  },
  { role: "user" as const, text: "Show next simulation window." },
  {
    role: "os" as const,
    text: "Queued — connect your backend to stream runs here.",
  },
];

const quickTasks = [
  { id: "1", label: "Review simulation run", done: false },
  { id: "2", label: "Sync org calendar", done: false },
  { id: "3", label: "Upload CAD revision", done: true },
];

const divisions = [
  { label: "Finance", href: "/organization#division-finance" },
  { label: "Product", href: "/organization#division-product" },
  { label: "Labs", href: "/organization#division-labs" },
];

export function RightSidebar() {
  const pathname = usePathname();
  const lg = useMediaQuery("(min-width: 1024px)");
  const { rightCollapsed, rightMobileOpen, setRightMobileOpen } = useAppChrome();

  const inner = (
    <div className="flex h-full min-h-0 flex-col overflow-hidden">
      {!lg ? (
        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-white/25 px-4 pb-3 pt-[max(0.35rem,env(safe-area-inset-top))]">
          <div>
            <p className="text-[13px] font-semibold tracking-tight text-gray-900">
              Sim OS
            </p>
            <p className="text-[11px] text-gray-500">Assistant & quick panels</p>
          </div>
          <button
            type="button"
            onClick={() => setRightMobileOpen(false)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/35 bg-white/30 text-gray-700 shadow-sm backdrop-blur-sm transition-colors hover:bg-white/50 active:scale-[0.98]"
            aria-label="Close Sim OS panel"
          >
            <X className="h-5 w-5" strokeWidth={2} aria-hidden />
          </button>
        </div>
      ) : null}
      <div className="flex min-h-0 flex-1 flex-col gap-5 overflow-y-auto overflow-x-hidden overscroll-y-contain px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-5 sm:py-6">
        <div className="glass-panel shrink-0 rounded-2xl p-4">
        <div className="flex items-start gap-3">
          <OsAvatar />
          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--app-primary)]">
              Sim OS
            </p>
            <p className="mt-0.5 text-sm font-semibold text-gray-900">
              Assistant
            </p>
            <p className="mt-1 text-[11px] leading-relaxed text-gray-500">
              Command surface for simOS — prompts sync with the bar below.
            </p>
          </div>
        </div>
        <div className="mt-4 max-h-40 space-y-2 overflow-y-auto rounded-xl bg-white/25 p-3 ring-1 ring-white/35">
          {chatSeed.map((m, i) => (
            <p
              key={i}
              className={`text-[11px] leading-snug ${
                m.role === "os" ? "text-gray-700" : "text-gray-500"
              }`}
            >
              {m.role === "os" ? (
                <span className="font-semibold text-[var(--app-primary)]">
                  simOS ·{" "}
                </span>
              ) : (
                <span className="font-medium text-gray-400">You · </span>
              )}
              {m.text}
            </p>
          ))}
        </div>
        </div>

      <Link
        href="/organization/calendar"
        onClick={() => setRightMobileOpen(false)}
        className={`glass-panel block shrink-0 rounded-2xl p-4 transition-colors hover:bg-white/40 ${
          pathname === "/organization/calendar"
            ? "ring-1 ring-[var(--app-primary)]/35"
            : ""
        }`}
      >
        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-800">
          <CalendarDays
            className="h-4 w-4 text-[var(--app-primary)]"
            strokeWidth={1.75}
          />
          Calendar
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-[10px] text-gray-400">
          {weekDays.map((d, i) => (
            <span key={i}>{d}</span>
          ))}
        </div>
        <div className="mt-2 grid grid-cols-7 gap-1">
          {Array.from({ length: 7 }).map((_, i) => (
            <span
              key={i}
              className={`flex h-7 items-center justify-center rounded-lg text-xs font-medium ${
                i === 3
                  ? "bg-[var(--app-primary-soft)] text-[var(--app-primary)]"
                  : "text-gray-500"
              }`}
            >
              {12 + i}
            </span>
          ))}
        </div>
      </Link>

      <div className="glass-panel shrink-0 rounded-2xl p-4">
        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-800">
          <CheckSquare
            className="h-4 w-4 text-[var(--app-primary)]"
            strokeWidth={1.75}
          />
          Tasks
        </div>
        <ul className="space-y-2">
          {quickTasks.map((t) => (
            <li
              key={t.id}
              className="flex items-start gap-2 rounded-xl px-2 py-1.5 text-xs text-gray-600"
            >
              <span
                className={`mt-0.5 h-3.5 w-3.5 shrink-0 rounded border ${
                  t.done
                    ? "border-[var(--app-primary)] bg-[var(--app-primary)]/20"
                    : "border-gray-300"
                }`}
                aria-hidden
              />
              {t.label}
            </li>
          ))}
        </ul>
        <Link
          href="/business#tasks"
          onClick={() => setRightMobileOpen(false)}
          className="mt-3 block text-center text-[11px] font-medium text-[var(--app-primary)]"
        >
          Business ops →
        </Link>
      </div>

      <div className="glass-strip shrink-0 px-3 py-2 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
        Divisions
      </div>
      <ul className="shrink-0 space-y-1">
        {divisions.map((d) => (
          <li key={d.href}>
            <Link
              href={d.href}
              onClick={() => setRightMobileOpen(false)}
              className="glass-nav-pill flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-gray-600 hover:bg-white/35"
            >
              <Building2 className="h-4 w-4 text-gray-400" strokeWidth={1.75} />
              {d.label}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="/organization"
        onClick={() => setRightMobileOpen(false)}
        className="glass-btn mt-auto flex shrink-0 items-center justify-center gap-2 rounded-full py-2.5 text-sm font-medium text-gray-700"
      >
        <PanelRight className="h-4 w-4" strokeWidth={1.75} />
        Org dashboard
      </Link>
      </div>
    </div>
  );

  /* Collapsed on lg: aside is hidden — expand via header DockRailCircle only */
  const desktopContent = lg && rightCollapsed ? null : inner;
  const mobileVisible = !lg && rightMobileOpen;

  return (
    <div className="contents lg:relative lg:block lg:h-0 lg:max-h-0 lg:min-h-0 lg:w-0 lg:shrink-0 lg:flex-none lg:overflow-visible lg:basis-0 lg:max-h-none">
      {rightMobileOpen && !lg ? (
        <button
          type="button"
          className="fixed inset-0 z-[70] bg-slate-900/12 backdrop-blur-[3px] lg:hidden"
          aria-label="Close Sim OS panel"
          onClick={() => setRightMobileOpen(false)}
        />
      ) : null}

      <aside
        className={`glass-sidebar-float chrome-spring fixed z-[90] flex min-h-0 w-[min(22rem,calc(100vw-1.25rem))] touch-manipulation flex-col overflow-hidden transition-[width,box-shadow] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] right-[max(0.75rem,env(safe-area-inset-right))] top-[max(0.75rem,env(safe-area-inset-top))] bottom-[max(0.75rem,env(safe-area-inset-bottom))] max-h-[calc(100dvh-env(safe-area-inset-top)-env(safe-area-inset-bottom)-1.5rem)] lg:inset-y-3 lg:right-3 lg:max-h-[calc(100dvh-1.5rem)] lg:w-[19rem] ${rightCollapsed ? "lg:overflow-visible" : ""} ${
          mobileVisible || lg ? "translate-x-0" : "translate-x-[calc(100%+1rem)]"
        } ${
          lg && rightCollapsed
            ? "lg:hidden"
            : ""
        } ${lg && !rightCollapsed ? "lg:shadow-[-8px_0_32px_rgba(15,25,45,0.12)]" : ""}`}
      >
        {!lg ? (mobileVisible ? inner : null) : desktopContent}
      </aside>
    </div>
  );
}
