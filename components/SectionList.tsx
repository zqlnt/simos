import { ChevronRight, ListTree } from "lucide-react";
import type { NavItem } from "@/lib/nav";

export function SectionList({
  title,
  items,
  idPrefix,
}: {
  title: string;
  items: NavItem[];
  idPrefix: string;
}) {
  return (
    <section className="space-y-4" aria-labelledby={`${idPrefix}-h`}>
      <h2
        id={`${idPrefix}-h`}
        className="glass-strip flex items-center gap-2.5 px-4 py-2.5 text-sm font-semibold text-gray-800"
      >
        <ListTree
          className="h-4 w-4 shrink-0 text-[var(--app-primary)] opacity-80"
          strokeWidth={1.75}
          aria-hidden
        />
        {title}
      </h2>
      <ul className="glass-divide glass-panel divide-y divide-white/30 overflow-hidden rounded-[1.25rem]">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="group flex items-center gap-3 px-4 py-4 text-sm text-gray-700 transition-colors hover:bg-white/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--app-primary)] sm:px-5 sm:py-[1.125rem]"
            >
              <span className="min-w-0 flex-1">
                <span className="font-medium text-gray-900">{item.label}</span>
                {item.description ? (
                  <span className="mt-1 block text-xs leading-relaxed text-gray-500">
                    {item.description}
                  </span>
                ) : null}
              </span>
              <ChevronRight
                className="h-4 w-4 shrink-0 text-gray-400 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:text-gray-500"
                strokeWidth={1.75}
                aria-hidden
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
