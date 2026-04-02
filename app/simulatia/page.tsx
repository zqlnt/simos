import Link from "next/link";
import { Globe2, Glasses, Layers2 } from "lucide-react";
import { MediaFillImage } from "@/components/MediaFillImage";
import { ProductLoopVideo } from "@/components/ProductLoopVideo";
import { SimulatiaCopySurface } from "@/components/simulatia/SimulatiaCopySurface";
import { SectionList } from "@/components/SectionList";
import { PageHeader } from "@/components/PageHeader";
import { simulatiaSections } from "@/lib/nav";
import { media } from "@/lib/media-assets";
import { simulatiaNarrative } from "@/lib/product-narrative";
import { PRODUCT_PREVIEW_VIDEOS } from "@/lib/product-videos";
import {
  ClusterBubblesViz,
  CoordinateGridViz,
  IsometricCityViz,
  NetworkDotsViz,
  WorldsNestedViz,
} from "@/components/viz";

const textHeavy =
  "rounded-xl border border-white/15 bg-white/[0.04] px-4 py-5 sm:px-6 sm:py-6 transition-[box-shadow,border-color] duration-300 hover:border-white/22 hover:shadow-lg hover:shadow-black/[0.06]";

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
        id="simulatia-preview"
        className="glass-panel scroll-mt-28 space-y-4 overflow-hidden rounded-[1.5rem] p-3 sm:p-4"
        aria-label="Simulatia workforce motion"
      >
        <div className="space-y-1.5 px-0.5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
            Execution layer
          </p>
          <p className="text-sm leading-relaxed text-gray-700">{simulatiaNarrative.lead}</p>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start">
          <div className="min-w-0">
            <ProductLoopVideo
              src={PRODUCT_PREVIEW_VIDEOS.simulatia}
              loading="eager"
              hoverTitle="Workforce motion"
              hoverSubline="Coordinated work across systems"
            />
          </div>
          <div className="flex min-w-0 flex-col justify-center gap-2">
            <p className="text-sm leading-relaxed text-gray-700">{simulatiaNarrative.loop}</p>
          </div>
        </div>
      </section>

      <section className={`glass-panel ${textHeavy}`} aria-label="Simulatia workforce note">
        <p className="text-sm leading-relaxed text-gray-700">
          {simulatiaNarrative.interludeAfterLoop}
        </p>
      </section>

      <section
        className="glass-panel space-y-4 overflow-hidden rounded-[1.5rem] p-3 sm:p-4"
        aria-label="Simulatia city maps — first pass"
      >
        <p className="px-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
          Mapped cities — pass one
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <MediaFillImage
            src={media.simulatia.cityA}
            alt="Minimal futuristic city map"
            aspectClassName="aspect-[4/3]"
            hoverTitle="City map A"
            hoverSubline="Districts and routes"
          />
          <MediaFillImage
            src={media.simulatia.cityB}
            alt="District map render"
            aspectClassName="aspect-[4/3]"
            hoverTitle="City map B"
            hoverSubline="Minimal massing"
          />
          <MediaFillImage
            src={media.simulatia.cityC}
            alt="City blocks at scale"
            aspectClassName="aspect-[4/3]"
            hoverTitle="City map C"
            hoverSubline="Blocks at scale"
          />
        </div>
        <p className="text-xs leading-relaxed text-gray-600">{simulatiaNarrative.cityMap}</p>
      </section>

      <section className={`glass-panel ${textHeavy}`} aria-label="Simulatia maps note">
        <p className="text-sm leading-relaxed text-gray-700">
          {simulatiaNarrative.interludeAfterCities}
        </p>
      </section>

      <section
        className="glass-panel space-y-4 overflow-hidden rounded-[1.5rem] p-3 sm:p-4"
        aria-label="Simulatia city maps — second pass"
      >
        <p className="px-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
          Mapped cities — pass two
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <MediaFillImage
            src={media.simulatia.cityD}
            alt="Mapped environment overview"
            aspectClassName="aspect-[4/3]"
            hoverTitle="City map D"
            hoverSubline="Environment overview"
          />
          <MediaFillImage
            src={media.simulatia.cityE}
            alt="Urban massing map"
            aspectClassName="aspect-[4/3]"
            hoverTitle="City map E"
            hoverSubline="Urban density"
          />
        </div>
      </section>

      <section
        className="glass-panel space-y-6 overflow-hidden rounded-[1.5rem] p-3 sm:p-4"
        aria-label="Simulatia spatial planning"
      >
        <p className="px-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
          Spatial canvas
        </p>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start">
          <div className="min-w-0">
            <MediaFillImage
              src={media.simulatia.roomPlanner}
              alt="Spatial planning canvas"
              aspectClassName="aspect-[4/3]"
              hoverTitle="Spatial canvas"
              hoverSubline="Rooms, adjacency, flow"
            />
          </div>
          <div className="flex min-w-0 flex-col justify-center gap-2">
            <p className="text-sm leading-relaxed text-gray-700">{simulatiaNarrative.room}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start">
          <div className="flex min-w-0 flex-col justify-center gap-2 lg:order-2">
            <p className="text-sm leading-relaxed text-gray-700">
              {simulatiaNarrative.environmentHold}
            </p>
          </div>
          <div className="min-w-0 lg:order-1">
            <MediaFillImage
              src={media.simulatia.still1}
              alt="Simulatia environment still"
              aspectClassName="aspect-[4/3]"
              hoverTitle="Environment hold"
              hoverSubline="Scale, light, routes"
            />
          </div>
        </div>
      </section>

      <section className={`glass-panel ${textHeavy}`} aria-label="Simulatia coordination note">
        <p className="text-sm leading-relaxed text-gray-700">
          {simulatiaNarrative.interludeAfterRoomStill}
        </p>
      </section>

      <section
        className="glass-panel space-y-4 overflow-hidden rounded-[1.5rem] p-3 sm:p-4"
        aria-label="Simulatia coordination frame"
      >
        <p className="px-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
          Threaded coordination
        </p>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center">
          <div className="min-w-0">
            <MediaFillImage
              src={media.simulatia.chatStill}
              alt="Threaded coordination frame"
              aspectClassName="aspect-[21/9]"
              hoverTitle="Threaded coordination"
              hoverSubline="Updates tied to goals and tools"
            />
          </div>
          <div className="flex min-w-0 flex-col gap-2">
            <p className="text-sm leading-relaxed text-gray-700">{simulatiaNarrative.chatStill}</p>
          </div>
        </div>
      </section>

      <section
        id="simulatia-workstations"
        className="glass-panel scroll-mt-28 space-y-4 overflow-hidden rounded-[1.5rem] p-4 sm:p-5"
        aria-labelledby="simulatia-workstations-heading"
      >
        <h2
          id="simulatia-workstations-heading"
          className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500"
        >
          Stations — pair one
        </h2>
        <p className="text-sm leading-relaxed text-gray-700">{simulatiaNarrative.desks}</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <MediaFillImage
              src={media.simulatia.deskCeo}
              alt="Strategy station surface"
              aspectClassName="aspect-[4/3]"
              hoverTitle="Strategy station"
              hoverSubline="Direction and tradeoffs"
            />
          </div>
          <div className="space-y-2">
            <MediaFillImage
              src={media.simulatia.deskArtist}
              alt="Craft station surface"
              aspectClassName="aspect-[4/3]"
              hoverTitle="Craft station"
              hoverSubline="Build and refine"
            />
          </div>
        </div>
      </section>

      <section
        className="glass-panel space-y-4 overflow-hidden rounded-[1.5rem] p-4 sm:p-5"
        aria-label="Simulatia stations pair two"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
          Stations — pair two
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <MediaFillImage
              src={media.simulatia.deskComm}
              alt="Outreach station surface"
              aspectClassName="aspect-[4/3]"
              hoverTitle="Communicator station"
              hoverSubline="Signal out"
            />
          </div>
          <div className="space-y-2">
            <MediaFillImage
              src={media.simulatia.deskExtra}
              alt="Extrapolation station surface"
              aspectClassName="aspect-[4/3]"
              hoverTitle="Extrapolation station"
              hoverSubline="Scenarios and branches"
            />
          </div>
        </div>
      </section>

      <section
        className="glass-panel space-y-4 overflow-hidden rounded-[1.5rem] p-4 sm:p-5"
        aria-label="Simulatia group station"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
          Group surface
        </p>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center">
          <div className="min-w-0">
            <MediaFillImage
              src={media.simulatia.groupDesk}
              alt="Group coordination surface"
              aspectClassName="aspect-[16/9]"
              hoverTitle="Group surface"
              hoverSubline="Alignment before fan-out"
            />
          </div>
          <div className="flex min-w-0 flex-col gap-2">
            <p className="text-sm leading-relaxed text-gray-700">{simulatiaNarrative.desks}</p>
          </div>
        </div>
      </section>

      <section
        id="simulatia-research"
        className="glass-panel scroll-mt-28 space-y-4 overflow-hidden rounded-[1.5rem] p-4 sm:p-5"
        aria-labelledby="simulatia-research-heading"
      >
        <h2
          id="simulatia-research-heading"
          className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500"
        >
          Research — frames one & two
        </h2>
        <p className="text-sm leading-relaxed text-gray-700">{simulatiaNarrative.researchers}</p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <MediaFillImage
              src={media.simulatia.researcherPose}
              alt="Researcher posed reference"
              aspectClassName="aspect-[3/4]"
              hoverTitle="Research frame"
              hoverSubline="Posed reference"
            />
          </div>
          <div className="space-y-2">
            <MediaFillImage
              src={media.simulatia.researcherPhoto2}
              alt="Research portrait"
              aspectClassName="aspect-[3/4]"
              hoverTitle="Portrait"
              hoverSubline="Synthesis in frame"
            />
          </div>
        </div>
      </section>

      <section
        className="glass-panel space-y-4 overflow-hidden rounded-[1.5rem] p-4 sm:p-5"
        aria-label="Simulatia research session"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
          Research — session frame
        </p>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center">
          <div className="mx-auto min-w-0 max-w-md">
            <MediaFillImage
              src={media.simulatia.researcherSession}
              alt="Research workstation session"
              aspectClassName="aspect-[3/4]"
              hoverTitle="Session frame"
              hoverSubline="Signal quality over volume"
            />
          </div>
          <div className="flex min-w-0 flex-col gap-2">
            <p className="text-sm leading-relaxed text-gray-700">{simulatiaNarrative.researchers}</p>
          </div>
        </div>
      </section>

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
