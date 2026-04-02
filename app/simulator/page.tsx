import Link from "next/link";
import { Boxes, Glasses, Layers2, PlayCircle } from "lucide-react";
import { MediaFillImage } from "@/components/MediaFillImage";
import { SimulatorCopySurface } from "@/components/simulator/SimulatorCopySurface";
import { SectionList } from "@/components/SectionList";
import { PageHeader } from "@/components/PageHeader";
import { simulatorSections } from "@/lib/nav";
import { media } from "@/lib/media-assets";
import { simulatorNarrative } from "@/lib/product-narrative";
import { ProductLoopVideo } from "@/components/ProductLoopVideo";
import {
  AssetLibraryViz,
  BlenderStudioViz,
  CadGridViz,
  Map3DViz,
  PointCloudViz,
  TimelineViz,
  WorldsNestedViz,
} from "@/components/viz";
import { PRODUCT_PREVIEW_VIDEOS } from "@/lib/product-videos";

const textHeavy =
  "rounded-xl border border-white/15 bg-white/[0.04] px-4 py-5 sm:px-6 sm:py-6 transition-[box-shadow,border-color] duration-300 hover:border-white/22 hover:shadow-lg hover:shadow-black/[0.06]";

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
        id="simulator-preview"
        className="glass-panel scroll-mt-28 space-y-4 overflow-hidden rounded-[1.5rem] p-3 sm:p-4"
        aria-label="Simulator studio motion"
      >
        <div className="space-y-1.5 px-0.5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
            Creation layer
          </p>
          <p className="text-sm leading-relaxed text-gray-700">{simulatorNarrative.lead}</p>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start">
          <div className="min-w-0">
            <ProductLoopVideo
              src={PRODUCT_PREVIEW_VIDEOS.simulator}
              loading="eager"
              hoverTitle="Studio loop"
              hoverSubline="Structure, light, editable scenarios"
            />
          </div>
          <div className="flex min-w-0 flex-col justify-center gap-2">
            <p className="text-sm leading-relaxed text-gray-700">{simulatorNarrative.loop}</p>
          </div>
        </div>
      </section>

      <section className={`glass-panel ${textHeavy}`} aria-label="Simulator studio note">
        <p className="text-sm leading-relaxed text-gray-700">
          {simulatorNarrative.interludeFigureToShelf}
        </p>
      </section>

      <section
        className="glass-panel space-y-4 overflow-hidden rounded-[1.5rem] p-3 sm:p-4"
        aria-label="Simulator figure pass"
      >
        <p className="px-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
          Figure in scene
        </p>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center">
          <div className="min-w-0">
            <ProductLoopVideo
              src={media.simulator.figureWalk}
              aspectClassName="aspect-[16/10]"
              hoverTitle="Figure pass"
              hoverSubline="Camera, posture, scene construction"
            />
          </div>
          <div className="flex min-w-0 flex-col gap-2">
            <p className="text-sm leading-relaxed text-gray-700">{simulatorNarrative.figure}</p>
          </div>
        </div>
      </section>

      <section className={`glass-panel ${textHeavy}`} aria-label="Simulator shelf note">
        <p className="text-sm leading-relaxed text-gray-700">
          {simulatorNarrative.interludeShelfToBrand}
        </p>
      </section>

      <section
        className="glass-panel space-y-6 overflow-hidden rounded-[1.5rem] p-3 sm:p-4"
        aria-label="Simulator shelf still"
      >
        <p className="px-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
          Shelf frame
        </p>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center">
          <div className="mx-auto min-w-0 max-w-xs">
            <MediaFillImage
              src={media.simulator.still2}
              alt="Simulator shelf still — meshes and materials"
              aspectClassName="aspect-[4/5]"
              hoverTitle="Shelf frame"
              hoverSubline="Meshes, materials, rigs"
            />
          </div>
          <div className="flex min-w-0 flex-col gap-2">
            <p className="text-sm leading-relaxed text-gray-700">{simulatorNarrative.still}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center">
          <div className="flex min-w-0 flex-col gap-2 lg:order-2">
            <p className="text-sm leading-relaxed text-gray-700">{simulatorNarrative.brand}</p>
          </div>
          <div className="mx-auto min-w-0 max-w-xs lg:order-1">
            <MediaFillImage
              src={media.simulator.projectLogo}
              alt="Project mark and scene language"
              aspectClassName="aspect-[4/5]"
              hoverTitle="Project mark"
              hoverSubline="Coherent across iterations"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center">
          <div className="mx-auto min-w-0 max-w-xs">
            <MediaFillImage
              src={media.simulator.paragraph}
              alt="Typography as structure in the build"
              aspectClassName="aspect-[4/5]"
              hoverTitle="Type & layout"
              hoverSubline="Structure, not decoration"
            />
          </div>
          <div className="flex min-w-0 flex-col gap-2">
            <p className="text-sm leading-relaxed text-gray-700">{simulatorNarrative.paragraph}</p>
          </div>
        </div>
      </section>

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
