import type { ComponentType } from "react";
import {
  CalendarDays,
  CalendarRange,
  CheckSquare,
  Clock3,
} from "lucide-react";
import { SectionList } from "@/components/SectionList";
import { PageHeader } from "@/components/PageHeader";
import { businessSections } from "@/lib/nav";
import {
  ClusterBubblesViz,
  CoordinateGridViz,
  LineGraphViz,
  PointCloudViz,
} from "@/components/viz";

const kpiTiles: {
  id: string;
  title: string;
  description: string;
  icon: typeof CheckSquare;
  viz: ComponentType;
}[] = [
  {
    id: "tasks",
    title: "Tasks",
    description:
      "Kanban or list views can mount inside this panel; keep chart and table layers sharp above the blur.",
    icon: CheckSquare,
    viz: PointCloudViz,
  },
  {
    id: "calendars",
    title: "Calendars",
    description:
      "Week and month grids with soft grid lines; use opaque SVG for readability on complex backgrounds.",
    icon: CalendarDays,
    viz: CoordinateGridViz,
  },
  {
    id: "roadmaps",
    title: "Roadmaps",
    description:
      "Timeline lanes and milestones — ideal companion to product hubs.",
    icon: CalendarRange,
    viz: LineGraphViz,
  },
  {
    id: "deadlines",
    title: "Deadlines",
    description:
      "Aggregated cutoffs from tasks and finance; connect notifications here.",
    icon: Clock3,
    viz: ClusterBubblesViz,
  },
];

export default function BusinessPage() {
  return (
    <div className="relative z-10 mx-auto max-w-4xl space-y-10 sm:space-y-12">
      <PageHeader
        icon={CheckSquare}
        title="Business operations"
        subtitle="Operational spine: tasks, calendars, roadmaps, and deadlines. Hook these sections to your task backend, calendar APIs, and planning tools."
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
        {kpiTiles.map(({ id, title, description, icon: Icon, viz: Viz }) => (
          <article
            key={id}
            id={id}
            className="glass-kpi relative scroll-mt-28 overflow-hidden rounded-[1.75rem] p-6 sm:p-7"
          >
            <div className="glass-corner-glow opacity-35" aria-hidden />
            <div className="relative z-10 flex flex-col gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/45 text-[var(--app-primary)] ring-1 ring-white/55">
                <Icon className="h-5 w-5" strokeWidth={1.65} />
              </span>
              <div className="space-y-2">
                <h2 className="text-lg font-semibold tracking-tight text-gray-900">
                  {title}
                </h2>
                <p className="text-sm leading-relaxed text-gray-600">
                  {description}
                </p>
              </div>
              <Viz />
            </div>
          </article>
        ))}
      </div>

      <SectionList
        title="Quick links"
        items={businessSections}
        idPrefix="business"
      />
    </div>
  );
}
