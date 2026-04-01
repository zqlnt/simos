import Link from "next/link";
import { CalendarDays, LayoutDashboard } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { PanelExpandable } from "@/components/PanelExpandable";
import { SquircleDock } from "@/components/SquircleDock";
import {
  BarChartViz,
  CadGridViz,
  ClusterBubblesViz,
  CoordinateGridViz,
  FileStack3DViz,
  IsometricRoomViz,
  LineGraphViz,
  Map3DViz,
  MinimalMapViz,
  NeuralNetViz,
  NetworkDotsViz,
  PixelPlotViz,
  PointCloudViz,
  PopulationDotsViz,
  SkyscraperBuildingViz,
  TimelineViz,
} from "@/components/viz";

export default function OrganizationDashboardPage() {
  return (
    <div className="relative z-10 mx-auto flex w-full max-w-[90rem] flex-col gap-10 sm:gap-12">
      <PageHeader
        icon={LayoutDashboard}
        title="Organization dashboard"
        subtitle="simOS simulation workspace — networks, CAD, maps, and divisions. Atmosphere tints live in the HUD panels; canvas stays calm off-white. Use fullscreen on the expandable tile when you need focus."
        subtitleClassName="max-w-3xl"
      />

      <SquircleDock />

      <div className="flex flex-wrap gap-3">
        <Link
          href="/organization/calendar"
          className="glass-btn inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-gray-700"
        >
          <CalendarDays className="h-4 w-4" strokeWidth={1.75} />
          Calendar
        </Link>
        <Link
          href="/organization/building"
          className="glass-btn inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-gray-700"
        >
          Building & rooms
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        <article className="glass-kpi relative overflow-hidden rounded-[1.5rem] p-4">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
            Bar mix
          </p>
          <BarChartViz />
        </article>
        <article className="glass-kpi relative overflow-hidden rounded-[1.5rem] p-4">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
            White map
          </p>
          <MinimalMapViz />
        </article>
        <article className="glass-kpi relative overflow-hidden rounded-[1.5rem] p-4">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
            Density
          </p>
          <PopulationDotsViz />
        </article>
        <article className="glass-kpi relative overflow-hidden rounded-[1.5rem] p-4">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
            Horizon
          </p>
          <TimelineViz />
        </article>
      </div>

      <PanelExpandable title="Focus panel — expandable for deep work">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
          Focus canvas
        </p>
        <p className="mb-4 text-sm text-gray-600">
          Fullscreen this slab for reviews; dynamic sizing hooks reserved for future
          layouts.
        </p>
        <div className="glass-panel overflow-hidden rounded-xl">
          <div className="aspect-[2/1] max-h-40 bg-gradient-to-br from-indigo-100/80 via-white/50 to-violet-100/60" />
          <p className="border-t border-white/35 px-4 py-2 text-[10px] text-gray-500">
            Placeholder panel · city / world telemetry
          </p>
        </div>
      </PanelExpandable>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        <article className="glass-kpi relative overflow-hidden rounded-[1.5rem] p-4">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
            Neural
          </p>
          <NeuralNetViz />
        </article>
        <article className="glass-kpi relative overflow-hidden rounded-[1.5rem] p-4">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
            Topology
          </p>
          <NetworkDotsViz />
        </article>
        <article className="glass-kpi relative overflow-hidden rounded-[1.5rem] p-4">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
            CAD grid
          </p>
          <CadGridViz />
        </article>
        <article className="glass-kpi relative overflow-hidden rounded-[1.5rem] p-4">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
            Spatial map
          </p>
          <Map3DViz />
        </article>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5">
        <article className="glass-kpi relative overflow-hidden rounded-[1.5rem] p-4 lg:col-span-2">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
            Signal / trend
          </p>
          <LineGraphViz />
        </article>
        <article className="glass-kpi relative overflow-hidden rounded-[1.5rem] p-4">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
            Raster readout
          </p>
          <PixelPlotViz />
        </article>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
        <article className="glass-kpi relative overflow-hidden rounded-[1.5rem] p-4">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
            Divisions
          </p>
          <SkyscraperBuildingViz />
        </article>
        <article className="glass-kpi relative overflow-hidden rounded-[1.5rem] p-4">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
            Clusters
          </p>
          <ClusterBubblesViz />
        </article>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        <article className="glass-kpi relative overflow-hidden rounded-[1.5rem] p-4">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
            Coordinates
          </p>
          <CoordinateGridViz />
        </article>
        <article className="glass-kpi relative overflow-hidden rounded-[1.5rem] p-4">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
            Simulation nodes
          </p>
          <PointCloudViz />
        </article>
        <article className="glass-kpi relative overflow-hidden rounded-[1.5rem] p-4">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
            Isometric room
          </p>
          <IsometricRoomViz />
        </article>
        <article className="glass-kpi relative overflow-hidden rounded-[1.5rem] p-4">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
            3D files
          </p>
          <FileStack3DViz />
        </article>
      </div>

      <section
        id="division-finance"
        className="glass-panel scroll-mt-28 space-y-4 rounded-[1.5rem] p-6 sm:p-8"
      >
        <h2 className="text-lg font-semibold text-gray-900">Finance division</h2>
        <p className="text-sm text-gray-600">
          Anchor for budgets, runway, and reporting — wire your data sources here.
        </p>
      </section>
      <section
        id="division-product"
        className="glass-panel scroll-mt-28 space-y-4 rounded-[1.5rem] p-6 sm:p-8"
      >
        <h2 className="text-lg font-semibold text-gray-900">Product division</h2>
        <p className="text-sm text-gray-600">
          Roadmaps and release trains — link to Simium / Simulator hubs.
        </p>
      </section>
      <section
        id="division-labs"
        className="glass-panel scroll-mt-28 space-y-4 rounded-[1.5rem] p-6 sm:p-8"
      >
        <h2 className="text-lg font-semibold text-gray-900">Labs</h2>
        <p className="text-sm text-gray-600">
          Experiments and prototypes — pair with simulation visuals above.
        </p>
      </section>
    </div>
  );
}
