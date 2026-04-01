import Link from "next/link";
import { CalendarDays, ChevronLeft } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import {
  CoordinateGridViz,
  LineGraphViz,
  PointCloudViz,
} from "@/components/viz";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
];

export default function OrganizationCalendarPage() {
  return (
    <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-10">
      <div className="flex flex-wrap items-center gap-3">
        <Link
          href="/organization"
          className="glass-btn inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm text-gray-600"
        >
          <ChevronLeft className="h-4 w-4" strokeWidth={1.75} />
          Dashboard
        </Link>
      </div>
      <PageHeader
        icon={CalendarDays}
        title="Organization calendar"
        subtitle="Month grid with soft structure — connect to your scheduling backend. Widget shortcuts stay in the right rail."
        subtitleClassName="max-w-2xl"
      />

      <div className="glass-panel rounded-[1.75rem] p-6 sm:p-8">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="text-lg font-semibold text-gray-900">
            {monthNames[2]} 2026
          </h2>
          <span className="text-xs font-medium text-gray-500">Week view</span>
        </div>
        <div className="grid grid-cols-7 gap-2 text-center text-[11px] font-medium text-gray-400">
          {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
            <span key={i}>{d}</span>
          ))}
        </div>
        <div className="mt-3 grid grid-cols-7 gap-2">
          {Array.from({ length: 35 }).map((_, i) => {
            const day = i + 1;
            const muted = day > 31;
            return (
              <div
                key={i}
                className={`flex aspect-square items-center justify-center rounded-xl text-sm font-medium ${
                  muted
                    ? "text-gray-300"
                    : day === 15
                      ? "bg-[var(--app-primary-soft)] text-[var(--app-primary)] ring-1 ring-[var(--app-primary)]/25"
                      : "bg-white/50 text-gray-700 ring-1 ring-white/50"
                }`}
              >
                {muted ? "" : day}
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <article className="glass-kpi rounded-[1.25rem] p-4">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
            Axis grid
          </p>
          <CoordinateGridViz />
        </article>
        <article className="glass-kpi rounded-[1.25rem] p-4">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
            Load curve
          </p>
          <LineGraphViz />
        </article>
        <article className="glass-kpi rounded-[1.25rem] p-4">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
            Events
          </p>
          <PointCloudViz />
        </article>
      </div>
    </div>
  );
}
