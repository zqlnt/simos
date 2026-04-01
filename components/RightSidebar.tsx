"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Building2,
  CalendarDays,
  CheckSquare,
  PanelRight,
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
  const {
    rightCollapsed,
    toggleRight,
    rightMobileOpen,
    setRightMobileOpen,
  } = useAppChrome();

  const inner = (
    <div className="flex h-full min-h-0 flex-col gap-5 overflow-y-auto px-4 py-5 sm:px-5 sm:py-6">
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
  );

  const collapsedRail = (
    <div className="flex h-full min-h-0 flex-col items-center gap-3 overflow-y-auto px-1 py-5">
      <div className="dock-app-icon flex h-9 w-9 items-center justify-center shadow-sm ring-1 ring-black/[0.08] ring-white/60">
        <OsAvatar squircle className="!h-8 !w-8 !shadow-none !ring-0" />
      </div>
      <button
        type="button"
        onClick={toggleRight}
        className="chrome-spring text-[9px] font-semibold uppercase tracking-wider text-gray-400 hover:text-gray-600"
        aria-label="Expand Sim OS"
      >
        ···
      </button>
      <Link
        href="/organization/calendar"
        className="dock-app-icon flex h-9 w-9 items-center justify-center text-[var(--app-primary)] shadow-sm ring-1 ring-black/[0.06] ring-white/55"
        title="Calendar"
      >
        <CalendarDays className="h-4 w-4" strokeWidth={1.75} />
      </Link>
      <Link
        href="/business#tasks"
        className="dock-app-icon flex h-9 w-9 items-center justify-center text-gray-500 shadow-sm ring-1 ring-black/[0.06] ring-white/55"
        title="Tasks"
      >
        <CheckSquare className="h-4 w-4" strokeWidth={1.75} />
      </Link>
    </div>
  );

  const desktopContent = lg && rightCollapsed ? collapsedRail : inner;
  const mobileVisible = !lg && rightMobileOpen;

  return (
    <>
      {rightMobileOpen && !lg ? (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-slate-900/12 backdrop-blur-[3px] lg:hidden"
          aria-label="Close Sim OS panel"
          onClick={() => setRightMobileOpen(false)}
        />
      ) : null}

      <aside
        className={`glass-sidebar-float chrome-spring fixed inset-y-3 right-3 z-50 flex max-h-[calc(100dvh-1.5rem)] min-h-0 flex-col overflow-hidden lg:static lg:inset-auto lg:z-auto lg:my-0 lg:h-full lg:max-h-full lg:translate-x-0 ${
          mobileVisible || lg ? "translate-x-0" : "translate-x-[calc(100%+1rem)]"
        } ${
          lg && rightCollapsed ? "w-[3.25rem]" : "w-[min(20rem,92vw)] lg:w-[19rem]"
        }`}
      >
        {!lg ? (mobileVisible ? inner : null) : desktopContent}
      </aside>
    </>
  );
}
