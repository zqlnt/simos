import { Newspaper } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

export default function NewsPage() {
  return (
    <div className="relative z-10 mx-auto max-w-2xl space-y-8">
      <PageHeader
        icon={Newspaper}
        title="News"
        subtitle="Updates and announcements will live here. The panel matches the same visual system as the rest of the app for continuity."
      />
      <ul className="glass-divide glass-panel divide-y divide-white/30 overflow-hidden rounded-[1.25rem]">
        <li className="flex items-center gap-3 px-5 py-5 text-sm text-gray-600 sm:px-6 sm:py-6">
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/35 text-gray-400 ring-1 ring-white/45"
            aria-hidden
          >
            <Newspaper className="h-4 w-4" strokeWidth={1.75} />
          </span>
          No entries yet — wire your CMS or feed when ready.
        </li>
      </ul>
    </div>
  );
}
