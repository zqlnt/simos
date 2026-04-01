import Link from "next/link";
import { CalendarRange, LayoutList } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { SquircleDock } from "@/components/SquircleDock";
import {
  BarChartViz,
  ClusterBubblesViz,
  LineGraphViz,
  MinimalMapViz,
  NetworkDotsViz,
  NeuralNetViz,
  PixelPlotViz,
  PointCloudViz,
  PopulationDotsViz,
  TimelineViz,
} from "@/components/viz";

export default function OperationsHubPage() {
  return (
    <div className="relative z-10 mx-auto flex w-full max-w-[90rem] flex-col gap-8 sm:gap-10">
      <PageHeader
        icon={LayoutList}
        title="Operations hub"
        subtitle="Company tasks, communications, planning, timelines, and live ops — simOS workspace tiles. Hook each panel to your backend; layout is sized for a zoomed-out dashboard view."
        subtitleClassName="max-w-3xl"
      />

      <SquircleDock />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
        <article className="glass-kpi relative overflow-hidden rounded-[1.5rem] p-4 lg:col-span-4">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
            Load & capacity
          </p>
          <BarChartViz />
        </article>
        <article className="glass-kpi relative overflow-hidden rounded-[1.5rem] p-4 lg:col-span-4">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
            Timeline
          </p>
          <TimelineViz />
        </article>
        <article className="glass-kpi relative overflow-hidden rounded-[1.5rem] p-4 lg:col-span-4">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
            Comms graph
          </p>
          <NetworkDotsViz />
        </article>
        <article className="glass-kpi relative overflow-hidden rounded-[1.5rem] p-4 lg:col-span-6">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
            Forecast signal
          </p>
          <LineGraphViz />
        </article>
        <article className="glass-kpi relative overflow-hidden rounded-[1.5rem] p-4 lg:col-span-6">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
            Regional density
          </p>
          <PopulationDotsViz />
        </article>
        <article className="glass-kpi relative overflow-hidden rounded-[1.5rem] p-4 lg:col-span-3">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
            Systems
          </p>
          <NeuralNetViz />
        </article>
        <article className="glass-kpi relative overflow-hidden rounded-[1.5rem] p-4 lg:col-span-3">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
            Clusters
          </p>
          <ClusterBubblesViz />
        </article>
        <article className="glass-kpi relative overflow-hidden rounded-[1.5rem] p-4 lg:col-span-3">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
            Raster
          </p>
          <PixelPlotViz />
        </article>
        <article className="glass-kpi relative overflow-hidden rounded-[1.5rem] p-4 lg:col-span-3">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
            Nodes
          </p>
          <PointCloudViz />
        </article>
        <article className="glass-kpi relative overflow-hidden rounded-[1.5rem] p-4 lg:col-span-8">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
            White map · roads & markers
          </p>
          <MinimalMapViz />
        </article>
        <article className="glass-kpi relative flex flex-col justify-between overflow-hidden rounded-[1.5rem] p-5 lg:col-span-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-500">
              Planning
            </p>
            <p className="mt-2 text-sm font-semibold text-gray-900">
              Next milestones
            </p>
            <p className="mt-1 text-xs leading-relaxed text-gray-600">
              Tie to calendar and Sim OS assistant for briefings.
            </p>
          </div>
          <Link
            href="/business#roadmaps"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--app-primary)] accent-glow"
          >
            <CalendarRange className="h-4 w-4" strokeWidth={1.75} />
            Open roadmaps
          </Link>
        </article>
      </div>

      <div className="glass-panel overflow-hidden rounded-[1.75rem]">
        <div className="aspect-[21/9] max-h-48 bg-gradient-to-br from-slate-200/90 via-white/60 to-slate-100/70" />
        <p className="border-t border-white/40 px-5 py-3 text-[11px] font-medium text-gray-500">
          Placeholder · telemetry mesh — wire imagery for city / building previews
        </p>
      </div>
    </div>
  );
}
