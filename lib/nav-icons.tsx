import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Building2,
  CalendarDays,
  CircleDot,
  Clock,
  Contact,
  Globe2,
  Home,
  Info,
  Layers,
  LayoutDashboard,
  LayoutGrid,
  LayoutList,
  Link2,
  MapPinned,
  Newspaper,
  Package,
  PlayCircle,
  ShoppingCart,
  Sparkles,
} from "lucide-react";

/** Sidebar group header icons */
export const navGroupIcons: Record<string, LucideIcon> = {
  Sim: Sparkles,
  Products: Package,
  Operations: Layers,
  Organization: MapPinned,
  simOS: CircleDot,
};

/** Per-route nav icons */
export const navHrefIcons: Record<string, LucideIcon> = {
  "/": Home,
  "/about": Info,
  "/news": Newspaper,
  "/contact": Contact,
  "/simium": LayoutGrid,
  "/simulator": PlayCircle,
  "/simulatia": Globe2,
  "/simulon": Link2,
  "/coming-soon": Clock,
  "/checkout": ShoppingCart,
  "/business": Briefcase,
  "/company": Building2,
  "/organization": LayoutDashboard,
  "/organization/calendar": CalendarDays,
  "/organization/building": Building2,
  "/zero": CircleDot,
  "/operations": LayoutList,
};

export function NavIcon({
  href,
  className,
}: {
  href: string;
  className?: string;
}) {
  const Icon = navHrefIcons[href] ?? LayoutGrid;
  return <Icon className={className} aria-hidden strokeWidth={1.75} />;
}
