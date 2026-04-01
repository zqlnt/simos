import {
  Building2,
  Landmark,
  TrendingUp,
  Truck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { companySections } from "@/lib/nav";

const companyBlockIcons: Record<string, LucideIcon> = {
  "Company & logistics": Truck,
  Finances: Landmark,
  Fundraise: TrendingUp,
  "Hires & outsourcing": Users,
};

export function CompanyGrid() {
  return (
    <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
      {companySections.map((block) => {
        const BlockIcon =
          companyBlockIcons[block.title] ?? Building2;
        return (
          <article
            key={block.title}
            className="glass-kpi relative overflow-hidden rounded-[1.75rem] p-6 sm:p-8"
          >
            <div className="glass-corner-glow" aria-hidden />
            <div className="relative z-10 space-y-5">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/45 text-[var(--app-primary)] ring-1 ring-white/55">
                  <BlockIcon className="h-5 w-5" strokeWidth={1.65} />
                </span>
                <h2 className="text-lg font-semibold tracking-tight text-gray-900">
                  {block.title}
                </h2>
              </div>
              <ul className="space-y-0.5 text-sm text-gray-600">
                {block.items.map((line) => (
                  <li
                    key={line}
                    className="flex gap-3 rounded-xl px-2 py-2.5 transition-colors hover:bg-white/35"
                  >
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--app-primary)]/45"
                      aria-hidden
                    />
                    <span className="leading-relaxed">{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        );
      })}
    </div>
  );
}
