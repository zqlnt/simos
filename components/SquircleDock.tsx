import { useId } from "react";
import Link from "next/link";
import {
  Atom,
  Briefcase,
  Building2,
  CircleDot,
  Gamepad2,
  Gauge,
  type LucideIcon,
} from "lucide-react";
import { SimLogo } from "@/components/SimLogo";

const dockItems: {
  label: string;
  href: string;
  bg: string;
  ring: string;
  Icon: LucideIcon;
}[] = [
  {
    label: "Simium",
    href: "/simium",
    bg: "bg-gradient-to-br from-blue-400/35 to-indigo-500/25",
    ring: "ring-blue-400/30",
    Icon: Atom,
  },
  {
    label: "Simulator",
    href: "/simulator",
    bg: "bg-gradient-to-br from-violet-400/35 to-fuchsia-500/25",
    ring: "ring-violet-400/30",
    Icon: Gamepad2,
  },
  {
    label: "Org",
    href: "/organization",
    bg: "bg-gradient-to-br from-emerald-400/30 to-teal-500/22",
    ring: "ring-emerald-400/28",
    Icon: Building2,
  },
  {
    label: "Ops",
    href: "/operations",
    bg: "bg-gradient-to-br from-amber-400/32 to-orange-500/22",
    ring: "ring-amber-400/30",
    Icon: Gauge,
  },
  {
    label: "Zero",
    href: "/zero",
    bg: "bg-gradient-to-br from-slate-500/35 to-slate-700/25",
    ring: "ring-slate-400/35",
    Icon: CircleDot,
  },
  {
    label: "Business",
    href: "/business",
    bg: "bg-gradient-to-br from-rose-400/28 to-pink-500/22",
    ring: "ring-rose-400/28",
    Icon: Briefcase,
  },
];

/** Folder + mini app tiles — “drawer” of more apps coming soon. */
function AppsDrawerGraphic({ className = "" }: { className?: string }) {
  const raw = useId().replace(/:/g, "");
  const gidTab = `dock-folder-tab-${raw}`;
  const gidBody = `dock-folder-body-${raw}`;
  return (
    <svg
      viewBox="0 0 56 56"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id={gidTab} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgb(251 191 36 / 0.85)" />
          <stop offset="100%" stopColor="rgb(245 158 11 / 0.65)" />
        </linearGradient>
        <linearGradient id={gidBody} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgb(254 243 199 / 0.95)" />
          <stop offset="100%" stopColor="rgb(253 230 138 / 0.75)" />
        </linearGradient>
      </defs>
      {/* Mini “app” tiles peeking from behind the folder */}
      <rect x="10" y="14" width="10" height="10" rx="2.5" fill="rgb(96 165 250 / 0.9)" />
      <rect x="23" y="12" width="10" height="10" rx="2.5" fill="rgb(167 139 250 / 0.9)" />
      <rect x="36" y="15" width="10" height="10" rx="2.5" fill="rgb(52 211 153 / 0.9)" />
      <rect x="16" y="24" width="9" height="9" rx="2.2" fill="rgb(244 114 182 / 0.85)" />
      {/* Folder tab + body */}
      <path
        d="M8 20h14l3.5 4H48v24H8V20z"
        fill={`url(#${gidBody})`}
        stroke="rgb(180 83 9 / 0.35)"
        strokeWidth="1.25"
      />
      <path
        d="M8 20h14l3.5 4H48v24H8V20z"
        fill="none"
        stroke="rgb(146 64 14 / 0.2)"
        strokeWidth="0.75"
      />
      <path
        d="M8 20h11l2.5 3.5H8V20z"
        fill={`url(#${gidTab})`}
        stroke="rgb(180 83 9 / 0.4)"
        strokeWidth="1"
      />
    </svg>
  );
}

function AppsDrawerPlaceholder() {
  return (
    <div
      className="group flex flex-col items-center gap-1.5 text-center"
      role="group"
      aria-label="More apps coming soon"
    >
      <span
        className="flex h-14 w-14 items-center justify-center rounded-[1.35rem] bg-gradient-to-br from-amber-400/28 to-orange-500/22 shadow-sm ring-2 ring-amber-400/28 transition-transform duration-200 sm:h-16 sm:w-16"
        style={{ borderRadius: "1.35rem" }}
      >
        <AppsDrawerGraphic className="h-11 w-11 sm:h-12 sm:w-12" />
      </span>
      <span className="max-w-[4.5rem] truncate text-[10px] font-medium text-gray-500 sm:text-[11px]">
        Apps
      </span>
      <span className="text-[9px] font-medium uppercase tracking-wide text-gray-400">
        Coming soon
      </span>
    </div>
  );
}

/** macOS-style squircle dock — folders / app shortcuts. */
export function SquircleDock({ className = "" }: { className?: string }) {
  return (
    <div
      className={`glass-panel rounded-[1.75rem] px-4 py-4 sm:px-5 sm:py-5 ${className}`}
    >
      <p className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.1em] text-gray-500">
        Simulation command tray
      </p>
      <div className="flex flex-wrap items-start justify-center gap-3 sm:gap-4">
        <Link
          href="/"
          className="group flex flex-col items-center gap-2 text-center"
        >
          <span
            className="flex h-14 w-14 items-center justify-center rounded-[1.35rem] bg-gradient-to-br from-sky-400/32 to-cyan-500/24 shadow-sm ring-2 ring-sky-400/30 transition-transform duration-200 ease-out group-hover:scale-105 group-active:scale-95 sm:h-16 sm:w-16"
            style={{ borderRadius: "1.35rem" }}
            aria-hidden
          >
            <SimLogo
              width={52}
              height={22}
              centered
              className="max-h-[22px] max-w-[52px]"
              alt=""
            />
          </span>
          <span className="max-w-[4.5rem] truncate text-[10px] font-medium text-gray-500 group-hover:text-gray-700 sm:text-[11px]">
            Sim
          </span>
        </Link>

        {dockItems.map(({ href, label, bg, ring, Icon }) => (
          <Link
            key={href}
            href={href}
            className="group flex flex-col items-center gap-2 text-center"
          >
            <span
              className={`flex h-14 w-14 items-center justify-center rounded-[1.35rem] shadow-sm ring-2 transition-transform duration-200 ease-out group-hover:scale-105 group-active:scale-95 sm:h-16 sm:w-16 ${bg} ${ring}`}
              style={{ borderRadius: "1.35rem" }}
              aria-hidden
            >
              <Icon
                className="h-[1.65rem] w-[1.65rem] text-gray-800/88 sm:h-7 sm:w-7"
                strokeWidth={1.65}
              />
            </span>
            <span className="max-w-[4.5rem] truncate text-[10px] font-medium text-gray-500 group-hover:text-gray-700 sm:text-[11px]">
              {label}
            </span>
          </Link>
        ))}

        <AppsDrawerPlaceholder />
      </div>
    </div>
  );
}
