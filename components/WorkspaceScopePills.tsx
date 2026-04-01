"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box, FileStack, Map, Network } from "lucide-react";
import { useHash } from "@/hooks/useHash";

const scopes = [
  { id: "maps" as const, label: "Maps", href: "/organization", icon: Map },
  { id: "systems" as const, label: "Systems", href: "/operations", icon: Network },
  {
    id: "files" as const,
    label: "Files",
    href: "/organization/building#files",
    icon: FileStack,
  },
  {
    id: "rooms" as const,
    label: "Rooms",
    href: "/organization/building#rooms",
    icon: Box,
  },
];

const spring =
  "transition-[transform,box-shadow,background-color,padding] duration-500 ease-[cubic-bezier(0.34,1.25,0.64,1)]";

export function WorkspaceScopePills({
  variant = "default",
}: {
  variant?: "default" | "dock";
}) {
  const pathname = usePathname();
  const hash = useHash();
  const dock = variant === "dock";

  const list = scopes.map(({ id, label, href, icon: Icon }) => {
        let active = false;
        if (id === "maps") {
          active = pathname === "/organization";
        } else if (id === "systems") {
          active = pathname === "/operations" || pathname.startsWith("/operations/");
        } else if (id === "files") {
          active =
            pathname === "/organization/building" && hash === "#files";
        } else if (id === "rooms") {
          active =
            pathname === "/organization/building" &&
            (hash === "#rooms" || hash === "" || !hash);
        }

        if (dock) {
          return (
            <Link
              key={id}
              href={href}
              title={label}
              scroll={false}
              className={`dock-scope-pill ${spring} flex shrink-0 items-center justify-center gap-1.5 rounded-full font-semibold ${
                active
                  ? "dock-scope-pill--active text-[var(--app-primary)]"
                  : "text-gray-500 hover:bg-white/45 hover:text-gray-800"
              } ${active ? "px-2.5 sm:min-w-0 sm:px-3" : "h-8 w-8 sm:h-9 sm:w-9"}`}
            >
              <Icon className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" strokeWidth={1.75} />
              {active ? (
                <span className="hidden text-[11px] sm:inline md:text-[12px]">{label}</span>
              ) : null}
            </Link>
          );
        }

        return (
          <Link
            key={id}
            href={href}
            className={`flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[11px] font-semibold transition-colors sm:px-3 sm:text-[12px] ${
              active
                ? "bg-white/85 text-[var(--app-primary)] shadow-sm"
                : "text-gray-500 hover:bg-white/50 hover:text-gray-800"
            }`}
            scroll={false}
          >
            <Icon className="h-3.5 w-3.5 shrink-0 opacity-80" strokeWidth={1.75} />
            <span className="hidden sm:inline">{label}</span>
          </Link>
        );
      });

  if (dock) {
    return (
      <div
        className="flex min-w-0 flex-1 items-center justify-center gap-0.5 overflow-x-auto py-0.5 sm:gap-1"
        role="tablist"
        aria-label="Workspace scope"
      >
        {list}
      </div>
    );
  }

  return (
    <div
      className="glass-field flex max-w-full flex-wrap items-center justify-center gap-0.5 rounded-full p-1 lg:gap-1"
      role="tablist"
      aria-label="Workspace scope"
    >
      {list}
    </div>
  );
}
