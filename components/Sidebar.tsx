"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navGroups } from "@/lib/nav";
import { navGroupIcons, NavIcon } from "@/lib/nav-icons";
import { SimLogo } from "@/components/SimLogo";
import { useAppChrome } from "@/context/AppChromeContext";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href === "/organization") return pathname === "/organization";
  if (href === "/zero") return pathname === "/zero" || pathname.startsWith("/zero/");
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const { leftCollapsed } = useAppChrome();

  return (
    <div className="flex h-full min-h-0 flex-col gap-4 px-2 py-5 sm:px-3 sm:py-6 lg:gap-5">
      <Link
        href="/"
        className={`flex flex-col gap-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--app-primary)] ${
          leftCollapsed ? "items-center px-0" : "items-start px-1 py-1"
        }`}
        onClick={onNavigate}
      >
        {leftCollapsed ? (
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
        className="flex min-h-0 flex-1 flex-col gap-5 overflow-y-auto overflow-x-hidden pr-0.5 lg:gap-6"
        aria-label="Main"
      >
        {navGroups.map((group) => {
          const GroupIcon = navGroupIcons[group.title] ?? navGroupIcons.Sim;
          return (
            <div key={group.title} className="space-y-2">
              {!leftCollapsed ? (
                <div className="flex items-center gap-2 px-3">
                  <GroupIcon
                    className="h-3.5 w-3.5 text-gray-400"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-gray-400">
                    {group.title}
                  </p>
                </div>
              ) : (
                <div className="mx-auto h-px w-6 bg-gradient-to-r from-transparent via-white/35 to-transparent" aria-hidden />
              )}
              <ul className="flex flex-col gap-1">
                {group.items.map((item) => {
                  const active = isActive(pathname, item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={onNavigate}
                        title={leftCollapsed ? item.label : undefined}
                        className={`glass-nav-pill chrome-spring flex items-center rounded-full transition-colors ${
                          leftCollapsed
                            ? "justify-center px-0 py-2"
                            : "gap-3 px-3 py-2.5"
                        } ${
                          active
                            ? "glass-nav-pill-active text-gray-900"
                            : "text-gray-500 hover:text-gray-700"
                        }`}
                        aria-current={active ? "page" : undefined}
                      >
                        <span
                          className={`flex shrink-0 items-center justify-center rounded-full ${
                            leftCollapsed ? "h-9 w-9" : "h-8 w-8"
                          } ${
                            active
                              ? "bg-[var(--app-primary-soft)] text-[var(--app-primary)] shadow-[0_0_0_1px_rgba(59,108,255,0.12)]"
                              : "bg-white/25 text-gray-400"
                          }`}
                        >
                          <NavIcon href={item.href} className="h-4 w-4" />
                        </span>
                        {!leftCollapsed ? (
                          <span className="min-w-0 flex-1 text-sm font-medium leading-snug">
                            {item.label}
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
