import Link from "next/link";
import { Boxes, Glasses, Layers2, PlayCircle } from "lucide-react";
import { SimulatorCopySurface } from "@/components/simulator/SimulatorCopySurface";
import { SectionList } from "@/components/SectionList";
import { PageHeader } from "@/components/PageHeader";
import { simulatorSections } from "@/lib/nav";
import {
  AssetLibraryViz,
  BlenderStudioViz,
  CadGridViz,
  Map3DViz,
  PointCloudViz,
  TimelineViz,
  WorldsNestedViz,
} from "@/components/viz";

export default function SimulatorPage() {
  return (
    <div className="relative z-10 mx-auto max-w-4xl space-y-10 sm:space-y-12">
      <PageHeader
        icon={PlayCircle}
        title="Simulator"
        tagline="Worlds within worlds"
        subtitle="Timelines, a 3D asset library, and Blender-style studio environments — author nested 4D spaces, preview in VR, then ship through the Dome pipeline."
      />

      <section
        id="environment"
        className="glass-panel scroll-mt-28 space-y-3 overflow-hidden rounded-[1.5rem] p-4 sm:p-5"
        aria-labelledby="sim-env-heading"
      >
        <h2 id="sim-env-heading" className="text-sm font-semibold text-gray-800">
          CAD / Blender-style background
        </h2>
        <p className="text-sm leading-relaxed text-gray-600">
          Neutral studio floor, HDRI wash, and wireframe primitives — the same
          language as a viewport before you drop in sim content.
        </p>
        <BlenderStudioViz tall />
      </section>

      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        <Link
          href="/simulator#vr"
          className="glass-btn inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-gray-800"
        >
          <Glasses className="h-4 w-4 text-[var(--app-primary)]" strokeWidth={1.75} />
          Virtual reality
        </Link>
        <Link
          href="/simulator#world-creation"
          className="glass-btn inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-gray-800"
        >
          <Layers2 className="h-4 w-4 text-[var(--app-primary)]" strokeWidth={1.75} />
          World creation
        </Link>
        <Link
          href="/simulator#asset-library"
          className="glass-btn inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-gray-800"
        >
          <Boxes className="h-4 w-4 text-[var(--app-primary)]" strokeWidth={1.75} />
          3D asset library
        </Link>
      </div>

      <div className="glass-panel rounded-[1.25rem] p-3 sm:p-4">
        <p className="mb-3 px-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
          Spatial stack
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Map3DViz />
          <CadGridViz />
          <PointCloudViz />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <section
          id="timeline"
          className="glass-kpi scroll-mt-28 space-y-3 rounded-[1.25rem] p-4 sm:p-5"
        >
          <h2 className="text-sm font-semibold text-gray-800">Timeline</h2>
          <p className="text-xs leading-relaxed text-gray-600">
            Milestones, branches, and playback — scrub the run without leaving
            the simulation surface.
          </p>
          <TimelineViz />
        </section>
        <section
          id="asset-library"
          className="glass-kpi scroll-mt-28 space-y-3 rounded-[1.25rem] p-4 sm:p-5"
        >
          <h2 className="text-sm font-semibold text-gray-800">3D asset library</h2>
          <p className="text-xs leading-relaxed text-gray-600">
            Shelf of meshes, materials, and rigs — ready to instance into scenes.
          </p>
          <AssetLibraryViz />
        </section>
        <section
          id="world-creation"
          className="glass-kpi scroll-mt-28 space-y-3 rounded-[1.25rem] p-4 sm:p-5 sm:col-span-2"
        >
          <h2 className="text-sm font-semibold text-gray-800">
            World creation — 4D nesting
          </h2>
          <p className="text-xs leading-relaxed text-gray-600">
            Nested scopes and portals: worlds within worlds, addressable as
            separate simulation layers.
          </p>
          <WorldsNestedViz />
        </section>
        <section
          id="vr"
          className="glass-kpi scroll-mt-28 space-y-3 rounded-[1.25rem] p-4 sm:p-5 sm:col-span-2"
        >
          <h2 className="text-sm font-semibold text-gray-800">Virtual reality</h2>
          <p className="text-xs leading-relaxed text-gray-600">
            Jump into immersive preview — same assets and timelines, tracked for
            headset sessions and lab walkthroughs.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            <span className="rounded-full bg-white/35 px-3 py-1 text-[11px] font-medium text-gray-700 ring-1 ring-white/45">
              VR preview
            </span>
            <span className="rounded-full bg-white/35 px-3 py-1 text-[11px] font-medium text-gray-700 ring-1 ring-white/45">
              Hand-off
            </span>
            <span className="rounded-full bg-white/35 px-3 py-1 text-[11px] font-medium text-gray-700 ring-1 ring-white/45">
              Room-scale
            </span>
          </div>
        </section>
      </div>

      <SimulatorCopySurface />

      <SectionList
        title="Flow"
        items={simulatorSections}
        idPrefix="simulator"
      />
    </div>
  );
}
