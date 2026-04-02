"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { navGroups } from "@/lib/nav";
import { navGroupIcons, NavIcon } from "@/lib/nav-icons";
import { SimLogo } from "@/components/SimLogo";
import { useAppChrome } from "@/context/AppChromeContext";
import { useMediaQuery } from "@/hooks/useMediaQuery";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href === "/organization") return pathname === "/organization";
  if (href === "/zero") return pathname === "/zero" || pathname.startsWith("/zero/");
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const { leftCollapsed } = useAppChrome();
  const lg = useMediaQuery("(min-width: 1024px)");
  /** Desktop collapsed rail = icons only. Mobile drawer always shows full labels + section titles. */
  const collapsedRail = Boolean(lg && leftCollapsed);

  /* Desktop collapsed: aside is lg:hidden in AppShell; still render nav for SSR/hydration. */
  return (
    <div className="flex h-full min-h-0 flex-col gap-3 px-3 py-4 sm:px-4 sm:py-5 lg:gap-5 lg:px-2 lg:py-6">
      {!lg ? (
        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-white/25 pb-3">
          <p className="text-[13px] font-semibold tracking-tight text-gray-900">
            Navigation
          </p>
          <button
            type="button"
            onClick={onNavigate}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/35 bg-white/30 text-gray-700 shadow-sm backdrop-blur-sm transition-colors hover:bg-white/50 active:scale-[0.98]"
            aria-label="Close navigation"
          >
            <X className="h-5 w-5" strokeWidth={2} aria-hidden />
          </button>
        </div>
      ) : null}

      <Link
        href="/"
        className={`flex shrink-0 flex-col gap-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--app-primary)] ${
          collapsedRail ? "items-center px-0" : "items-start px-1 py-1"
        }`}
        onClick={onNavigate}
      >
        {collapsedRail ? (
          <span className="dock-app-icon flex h-9 w-9 items-center justify-center overflow-hidden shadow-sm ring-1 ring-black/[0.08] ring-white/60">
            <SimLogo width={72} height={26} className="scale-100 object-contain" />
          </span>
        ) : (
          <>
            <SimLogo width={128} height={44} priority />
            <p className="pl-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-500">
              simOS · workspace
            </p>
          </>
        )}
      </Link>

      <nav
        className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto overflow-x-hidden overscroll-y-contain pr-0.5 pb-[max(0.5rem,env(safe-area-inset-bottom))] lg:gap-6"
        aria-label="Main"
      >
        {navGroups.map((group) => {
          const GroupIcon = navGroupIcons[group.title] ?? navGroupIcons.Sim;
          return (
            <div key={group.title} className="space-y-2">
              {!collapsedRail ? (
                <div className="flex items-center gap-2 px-1 sm:px-3">
                  <GroupIcon
                    className="h-3.5 w-3.5 shrink-0 text-gray-400"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-gray-400">
                    {group.title}
                  </p>
                </div>
              ) : (
                <div
                  className="mx-auto h-px w-6 bg-gradient-to-r from-transparent via-white/35 to-transparent"
                  aria-hidden
                />
              )}
              <ul className="flex flex-col gap-1">
                {group.items.map((item) => {
                  const active = isActive(pathname, item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={onNavigate}
                        title={collapsedRail ? item.label : undefined}
                        className={`glass-nav-pill chrome-spring flex rounded-full transition-colors ${
                          collapsedRail
                            ? "justify-center px-0 py-2"
                            : "items-start gap-3 px-3 py-2.5"
                        } ${
                          active
                            ? "glass-nav-pill-active text-gray-900"
                            : "text-gray-500 hover:text-gray-700"
                        }`}
                        aria-current={active ? "page" : undefined}
                      >
                        <span
                          className={`flex shrink-0 items-center justify-center rounded-full ${
                            collapsedRail ? "h-9 w-9" : "h-8 w-8"
                          } ${
                            active
                              ? "bg-[var(--app-primary-soft)] text-[var(--app-primary)] shadow-[0_0_0_1px_rgba(59,108,255,0.12)]"
                              : "bg-white/25 text-gray-400"
                          }`}
                        >
                          <NavIcon href={item.href} className="h-4 w-4" />
                        </span>
                        {!collapsedRail ? (
                          <span className="min-w-0 flex-1">
                            <span className="block text-sm font-medium leading-snug">
                              {item.label}
                            </span>
                            {item.description ? (
                              <span className="mt-0.5 block text-[11px] leading-snug text-gray-500 sm:text-[12px]">
                                {item.description}
                              </span>
                            ) : null}
                          </span>
                        ) : null}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </nav>
    </div>
  );
}
