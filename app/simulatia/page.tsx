import Link from "next/link";
import { Globe2, Glasses, Layers2 } from "lucide-react";
import { SimulatiaCopySurface } from "@/components/simulatia/SimulatiaCopySurface";
import { SectionList } from "@/components/SectionList";
import { PageHeader } from "@/components/PageHeader";
import { simulatiaSections } from "@/lib/nav";
import {
  ClusterBubblesViz,
  CoordinateGridViz,
  IsometricCityViz,
  NetworkDotsViz,
  WorldsNestedViz,
} from "@/components/viz";

export default function SimulatiaPage() {
  return (
    <div className="relative z-10 mx-auto max-w-4xl space-y-10 sm:space-y-12">
      <PageHeader
        icon={Globe2}
        title="Simulatia"
        tagline="Worlds within worlds"
        subtitle="Isometric white cities at a glance, VR entry points, and nested 4D worlds — connect services, factions, and agents on top of this spatial base."
      />

      <section
        id="city"
        className="glass-panel scroll-mt-28 space-y-3 overflow-hidden rounded-[1.5rem] p-4 sm:p-5"
        aria-labelledby="simulatia-city-heading"
      >
        <h2 id="simulatia-city-heading" className="text-sm font-semibold text-gray-800">
          City — isometric white blocks
        </h2>
        <p className="text-sm leading-relaxed text-gray-600">
          Minimal massing: readable blocks and streets so districts, ownership,
          and density stay legible at city scale.
        </p>
        <IsometricCityViz tall />
      </section>

      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        <Link
          href="/simulatia#vr"
          className="glass-btn inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-gray-800"
        >
          <Glasses className="h-4 w-4 text-[var(--app-primary)]" strokeWidth={1.75} />
          Virtual reality
        </Link>
        <Link
          href="/simulatia#worlds-4d"
          className="glass-btn inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-gray-800"
        >
          <Layers2 className="h-4 w-4 text-[var(--app-primary)]" strokeWidth={1.75} />
          4D world nesting
        </Link>
      </div>

      <div className="glass-panel rounded-[1.25rem] p-3 sm:p-4">
        <p className="mb-3 px-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
          Network & grid
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <NetworkDotsViz />
          <ClusterBubblesViz />
          <CoordinateGridViz />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <section
          id="worlds-4d"
          className="glass-kpi scroll-mt-28 space-y-3 rounded-[1.25rem] p-4 sm:p-5"
        >
          <h2 className="text-sm font-semibold text-gray-800">4D — worlds within worlds</h2>
          <p className="text-xs leading-relaxed text-gray-600">
            Nested frames: portals and sub-worlds you can route agents and
            traffic through without flattening the map.
          </p>
          <WorldsNestedViz />
        </section>
        <section
          id="vr"
          className="glass-kpi scroll-mt-28 space-y-3 rounded-[1.25rem] p-4 sm:p-5"
        >
          <h2 className="text-sm font-semibold text-gray-800">Virtual reality</h2>
          <p className="text-xs leading-relaxed text-gray-600">
            Enter streets and building shells volumetrically — same city data,
            immersive pass-through for ops and tours.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            <span className="rounded-full bg-white/35 px-3 py-1 text-[11px] font-medium text-gray-700 ring-1 ring-white/45">
              Street-scale
            </span>
            <span className="rounded-full bg-white/35 px-3 py-1 text-[11px] font-medium text-gray-700 ring-1 ring-white/45">
              Interior shell
            </span>
          </div>
        </section>
        <section
          className="glass-kpi space-y-3 rounded-[1.25rem] p-4 sm:p-5 sm:col-span-2"
        >
          <h2 className="text-sm font-semibold text-gray-800">District preview</h2>
          <p className="text-xs leading-relaxed text-gray-600">
            A second read of the isometric canvas — tighter crop for dashboards.
          </p>
          <IsometricCityViz />
        </section>
      </div>

      <SimulatiaCopySurface />

      <SectionList title="Areas" items={simulatiaSections} idPrefix="simulatia" />
    </div>
  );
}
