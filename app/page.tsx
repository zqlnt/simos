import Link from "next/link";
import {
  ArrowUpRight,
  Briefcase,
  Globe2,
  Home,
  LayoutGrid,
  PlayCircle,
} from "lucide-react";
import { MediaFillImage } from "@/components/MediaFillImage";
import { PageHeader } from "@/components/PageHeader";
import { ProductLoopVideo } from "@/components/ProductLoopVideo";
import { SquircleDock } from "@/components/SquircleDock";
import { media } from "@/lib/media-assets";
import { simBrand } from "@/lib/product-copy";
import {
  ecosystem,
  homeProductLayers,
  simNarrative,
  simiumNarrative,
  simulatiaNarrative,
  simulatorNarrative,
} from "@/lib/product-narrative";
import { PRODUCT_PREVIEW_VIDEOS } from "@/lib/product-videos";
import {
  BarChartViz,
  CadGridViz,
  LineGraphViz,
  MinimalMapViz,
  NetworkDotsViz,
  NeuralNetViz,
  TimelineViz,
} from "@/components/viz";

const textHeavyHome =
  "rounded-xl border border-white/15 bg-white/[0.04] px-4 py-5 sm:px-6 sm:py-6 transition-[box-shadow,border-color] duration-300 hover:border-white/22 hover:shadow-lg hover:shadow-black/[0.06]";

export default function HomePage() {
  return (
    <div className="relative z-10 mx-auto flex w-full max-w-[90rem] flex-col gap-8 sm:gap-10">
      <PageHeader
        icon={Home}
        title="Home"
        tagline="simOS workspace"
        subtitle={`${simBrand.line} ${simBrand.supporting} ${simBrand.homeSubtitle}`}
        subtitleClassName="max-w-3xl"
      />

      <section
        id="sim-preview"
        className="glass-panel mx-auto w-full max-w-4xl space-y-4 overflow-hidden rounded-[1.5rem] p-3 sm:p-4"
        aria-label="SIM — system motion"
      >
        <div className="space-y-1.5 px-0.5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
            SIM
          </p>
          <p className="text-sm leading-relaxed text-gray-700">{simNarrative.heroLine}</p>
        </div>
        <div className="space-y-2">
          <ProductLoopVideo
            src={media.sim.pulsePrimary}
            loading="eager"
            hoverTitle="Pulse"
            hoverSubline="System rhythm across active processes"
          />
          <p className="text-xs leading-relaxed text-gray-600">{simNarrative.pulse}</p>
        </div>
      </section>

      <section
        className="glass-panel mx-auto w-full max-w-4xl space-y-4 overflow-hidden rounded-[1.5rem] p-3 sm:p-4"
        aria-label="SIM — alternate pulse"
      >
        <p className="px-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
          Alternate phase
        </p>
        <div className="space-y-2">
          <ProductLoopVideo
            src={media.sim.pulseB}
            hoverTitle="Pulse — alternate phase"
            hoverSubline="Same signal, inverted read"
          />
          <p className="text-xs leading-relaxed text-gray-600">{simNarrative.pulse}</p>
        </div>
      </section>

      <section
        className="glass-panel mx-auto w-full max-w-4xl space-y-3 overflow-hidden rounded-[1.5rem] p-3 sm:p-4"
        aria-label="SIM — long-form motion"
      >
        <p className="px-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
          System motion
        </p>
        <div className="space-y-2">
          <ProductLoopVideo
            src={media.sim.untitled}
            hoverTitle="Long-form motion"
            hoverSubline="Progress, direction, coordination across layers"
          />
          <p className="text-xs leading-relaxed text-gray-600">{simNarrative.wideClip}</p>
        </div>
      </section>

      <section
        className="glass-panel mx-auto w-full max-w-4xl space-y-4 overflow-hidden rounded-[1.5rem] p-3 sm:p-4"
        aria-label="SIM — device and pulse"
      >
        <p className="px-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
          Surface & rhythm
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-start">
          <div className="space-y-2">
            <ProductLoopVideo
              src={media.sim.phoneGlow}
              hoverTitle="Surface glow"
              hoverSubline="Continuity between pocket and control room"
            />
            <p className="text-xs leading-relaxed text-gray-600">{simNarrative.deviceGlow}</p>
          </div>
          <div className="space-y-2">
            <ProductLoopVideo
              src={media.sim.pulseC}
              hoverTitle="Pulse"
              hoverSubline="Rhythm on the operating layer"
            />
            <p className="text-xs leading-relaxed text-gray-600">{simNarrative.pulse}</p>
          </div>
        </div>
      </section>

      <section
        className="glass-panel mx-auto w-full max-w-4xl space-y-4 overflow-hidden rounded-[1.5rem] p-3 sm:p-4"
        aria-label="SIM — still and short clip"
      >
        <p className="px-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
          Map frame & clip
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-start">
          <div className="space-y-2">
            <MediaFillImage
              src={media.sim.photoStill}
              alt="Mapped overview still"
              aspectClassName="aspect-[4/3]"
              hoverTitle="Map frame"
              hoverSubline="Prediction, progress, position in one still"
            />
            <p className="text-xs leading-relaxed text-gray-600">{simNarrative.still}</p>
          </div>
          <div className="space-y-2">
            <ProductLoopVideo
              src={media.sim.clipShort}
              aspectClassName="aspect-[4/3]"
              hoverTitle="Short clip"
              hoverSubline="System motion in a tight frame"
            />
            <p className="text-xs leading-relaxed text-gray-600">{simNarrative.wideClip}</p>
          </div>
        </div>
      </section>

      <section
        className="mx-auto w-full max-w-4xl space-y-3 rounded-[1.25rem] border border-white/20 bg-white/[0.04] px-4 py-4 sm:px-5 sm:py-5"
        aria-labelledby="product-layers-heading"
      >
        <h2
          id="product-layers-heading"
          className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500"
        >
          {homeProductLayers.title}
        </h2>
        <p className="text-sm leading-relaxed text-gray-700">{homeProductLayers.lead}</p>
      </section>

      <section
        id="home-simium"
        className="glass-panel mx-auto w-full max-w-4xl space-y-4 overflow-hidden rounded-[1.5rem] p-3 sm:p-4"
        aria-label="Simium — home preview"
      >
        <div className="flex flex-wrap items-start justify-between gap-3 px-0.5">
          <div className="min-w-0 space-y-1.5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
              Simium
            </p>
            <p className="text-sm leading-relaxed text-gray-700">{simiumNarrative.lead}</p>
          </div>
          <Link
            href="/simium"
            className="glass-btn inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-gray-800"
          >
            Open Simium
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start">
          <div className="min-w-0">
            <ProductLoopVideo
              src={PRODUCT_PREVIEW_VIDEOS.simium}
              hoverTitle="Simium loop"
              hoverSubline="Memory, context, signal flow"
            />
          </div>
          <div className="flex min-w-0 flex-col justify-center gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-500">
              Primary loop
            </p>
            <p className="text-sm leading-relaxed text-gray-700">{simiumNarrative.loop}</p>
          </div>
        </div>
      </section>

      <section
        className={`glass-panel mx-auto w-full max-w-4xl ${textHeavyHome}`}
        aria-label="Simium — context"
      >
        <p className="text-sm leading-relaxed text-gray-700">
          {simiumNarrative.interludeStepToAuthored}
        </p>
      </section>

      <section
        className="glass-panel mx-auto w-full max-w-4xl space-y-4 overflow-hidden rounded-[1.5rem] p-3 sm:p-4"
        aria-label="Simium — step clip"
      >
        <p className="px-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
          Step inside
        </p>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start">
          <div className="min-w-0">
            <ProductLoopVideo
              src={media.simium.stepIn3}
              aspectClassName="aspect-[9/16]"
              trimStartSeconds={1}
              hoverTitle="Step inside"
              hoverSubline="Overview to direct control"
            />
          </div>
          <div className="flex min-w-0 flex-col gap-2">
            <p className="text-xs leading-relaxed text-gray-600">{simiumNarrative.stepIn}</p>
            <p className="text-sm leading-relaxed text-gray-700">{simiumNarrative.stepInSolo}</p>
          </div>
        </div>
      </section>

      <section
        className={`glass-panel mx-auto w-full max-w-4xl ${textHeavyHome}`}
        aria-label="Simium — authored context"
      >
        <p className="text-sm leading-relaxed text-gray-700">
          {simiumNarrative.interludeAuthoredToMassing}
        </p>
      </section>

      <section
        className="glass-panel mx-auto w-full max-w-4xl space-y-6 overflow-hidden rounded-[1.5rem] p-3 sm:p-4"
        aria-label="Simium — authored stills"
      >
        <p className="px-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
          Authored frames
        </p>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start">
          <div className="min-w-0">
            <MediaFillImage
              src={media.simium.designJan}
              alt="Simium authored panel"
              aspectClassName="aspect-[4/3]"
              hoverTitle="Authored panel"
              hoverSubline="Identity anchored in the surface"
            />
          </div>
          <div className="flex min-w-0 flex-col justify-center gap-2">
            <p className="text-sm leading-relaxed text-gray-700">{simiumNarrative.design}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start">
          <div className="flex min-w-0 flex-col justify-center gap-2 lg:order-2">
            <p className="text-sm leading-relaxed text-gray-700">{simiumNarrative.design}</p>
          </div>
          <div className="min-w-0 lg:order-1">
            <MediaFillImage
              src={media.simium.handRemoved}
              alt="Simium spatial frame"
              aspectClassName="aspect-[4/3]"
              hoverTitle="Spatial frame"
              hoverSubline="Clean read for the world"
            />
          </div>
        </div>
      </section>

      <section
        className={`glass-panel mx-auto w-full max-w-4xl ${textHeavyHome}`}
        aria-label="Simium — tiles context"
      >
        <p className="text-sm leading-relaxed text-gray-700">
          {simiumNarrative.interludeMassingBeforeWide}
        </p>
      </section>

      <section
        className="glass-panel mx-auto w-full max-w-4xl space-y-4 overflow-hidden rounded-[1.5rem] p-3 sm:p-4"
        aria-label="Simium — tiles and wide"
      >
        <p className="px-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
          Massing & wide
        </p>
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          <MediaFillImage
            src={media.simium.still3}
            alt="Simium environment still"
            aspectClassName="aspect-square"
            hoverTitle="Environment still"
            hoverSubline="Massing at a glance"
          />
          <MediaFillImage
            src={media.simium.panelA}
            alt="Simium surface panel"
            aspectClassName="aspect-square"
            hoverTitle="Surface tile"
            hoverSubline="Density and orientation"
          />
          <MediaFillImage
            src={media.simium.panelB}
            alt="Simium surface panel variant"
            aspectClassName="aspect-square"
            hoverTitle="Variant read"
            hoverSubline="Alternate crop"
          />
          <MediaFillImage
            src={media.simium.panelC}
            alt="Simium surface panel detail"
            aspectClassName="aspect-square"
            hoverTitle="Detail tile"
            hoverSubline="Tight panel read"
          />
        </div>
        <p className="text-xs leading-relaxed text-gray-600">{simiumNarrative.spatial}</p>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 lg:items-center">
          <div className="min-w-0 lg:col-span-3">
            <MediaFillImage
              src={media.simium.panelD}
              alt="Simium wide panel"
              aspectClassName="aspect-[21/9]"
              hoverTitle="Wide sweep"
              hoverSubline="Alignment across the full surface"
            />
          </div>
          <div className="flex min-w-0 flex-col gap-2 lg:col-span-2">
            <p className="text-sm leading-relaxed text-gray-700">{simiumNarrative.spatial}</p>
          </div>
        </div>
      </section>

      <section
        id="home-simulator"
        className="glass-panel mx-auto w-full max-w-4xl space-y-4 overflow-hidden rounded-[1.5rem] p-3 sm:p-4"
        aria-label="Simulator — home preview"
      >
        <div className="flex flex-wrap items-start justify-between gap-3 px-0.5">
          <div className="min-w-0 space-y-1.5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
              Simulator
            </p>
            <p className="text-sm leading-relaxed text-gray-700">{simulatorNarrative.lead}</p>
          </div>
          <Link
            href="/simulator"
            className="glass-btn inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-gray-800"
          >
            Open Simulator
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start">
          <div className="min-w-0">
            <ProductLoopVideo
              src={PRODUCT_PREVIEW_VIDEOS.simulator}
              hoverTitle="Studio loop"
              hoverSubline="Structure, light, editable scenarios"
            />
          </div>
          <div className="flex min-w-0 flex-col justify-center gap-2">
            <p className="text-sm leading-relaxed text-gray-700">{simulatorNarrative.loop}</p>
          </div>
        </div>
      </section>

      <section
        className={`glass-panel mx-auto w-full max-w-4xl ${textHeavyHome}`}
        aria-label="Simulator — studio context"
      >
        <p className="text-sm leading-relaxed text-gray-700">
          {simulatorNarrative.interludeFigureToShelf}
        </p>
      </section>

      <section
        className="glass-panel mx-auto w-full max-w-4xl space-y-4 overflow-hidden rounded-[1.5rem] p-3 sm:p-4"
        aria-label="Simulator — figure pass"
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

      <section
        className={`glass-panel mx-auto w-full max-w-4xl ${textHeavyHome}`}
        aria-label="Simulator — shelf context"
      >
        <p className="text-sm leading-relaxed text-gray-700">
          {simulatorNarrative.interludeShelfToBrand}
        </p>
      </section>

      <section
        className="glass-panel mx-auto w-full max-w-4xl space-y-6 overflow-hidden rounded-[1.5rem] p-3 sm:p-4"
        aria-label="Simulator — stills"
      >
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center">
          <div className="mx-auto min-w-0 max-w-xs">
            <MediaFillImage
              src={media.simulator.still2}
              alt="Simulator shelf still"
              aspectClassName="aspect-[4/5]"
              hoverTitle="Shelf frame"
              hoverSubline="Meshes, materials, rigs to instance"
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
        id="home-simulatia"
        className="glass-panel mx-auto w-full max-w-4xl space-y-4 overflow-hidden rounded-[1.5rem] p-3 sm:p-4"
        aria-label="Simulatia — home preview"
      >
        <div className="flex flex-wrap items-start justify-between gap-3 px-0.5">
          <div className="min-w-0 space-y-1.5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
              Simulatia
            </p>
            <p className="text-sm leading-relaxed text-gray-700">{simulatiaNarrative.lead}</p>
          </div>
          <Link
            href="/simulatia"
            className="glass-btn inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-gray-800"
          >
            Open Simulatia
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start">
          <div className="min-w-0">
            <ProductLoopVideo
              src={PRODUCT_PREVIEW_VIDEOS.simulatia}
              hoverTitle="Workforce motion"
              hoverSubline="Research, planning, communication, creation"
            />
          </div>
          <div className="flex min-w-0 flex-col justify-center gap-2">
            <p className="text-sm leading-relaxed text-gray-700">{simulatiaNarrative.loop}</p>
          </div>
        </div>
      </section>

      <section
        className={`glass-panel mx-auto w-full max-w-4xl ${textHeavyHome}`}
        aria-label="Simulatia — workforce context"
      >
        <p className="text-sm leading-relaxed text-gray-700">
          {simulatiaNarrative.interludeAfterLoop}
        </p>
      </section>

      <section
        className="glass-panel mx-auto w-full max-w-4xl space-y-4 overflow-hidden rounded-[1.5rem] p-3 sm:p-4"
        aria-label="Simulatia — home maps"
      >
        <p className="px-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
          Mapped cities
        </p>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
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
        <p className="text-xs leading-relaxed text-gray-600">{simulatiaNarrative.cityMap}</p>
      </section>

      <section
        className={`glass-panel mx-auto w-full max-w-4xl ${textHeavyHome}`}
        aria-label="Simulatia — maps context"
      >
        <p className="text-sm leading-relaxed text-gray-700">
          {simulatiaNarrative.interludeAfterCities}
        </p>
      </section>

      <section
        className="glass-panel mx-auto w-full max-w-4xl space-y-6 overflow-hidden rounded-[1.5rem] p-3 sm:p-4"
        aria-label="Simulatia — room and hold"
      >
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start">
          <div className="min-w-0">
            <MediaFillImage
              src={media.simulatia.roomPlanner}
              alt="Spatial planning canvas"
              aspectClassName="aspect-[4/3]"
              hoverTitle="Spatial canvas"
              hoverSubline="Rooms, adjacency, flow before build-out"
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
              hoverSubline="Scale, light, routes before assignment"
            />
          </div>
        </div>
      </section>

      <section
        className={`glass-panel mx-auto w-full max-w-4xl ${textHeavyHome}`}
        aria-label="Simulatia — coordination context"
      >
        <p className="text-sm leading-relaxed text-gray-700">
          {simulatiaNarrative.interludeAfterRoomStill}
        </p>
      </section>

      <section
        className="glass-panel mx-auto w-full max-w-4xl space-y-4 overflow-hidden rounded-[1.5rem] p-3 sm:p-4"
        aria-label="Simulatia — coordination frame"
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
        className="glass-panel mx-auto w-full max-w-4xl space-y-4 overflow-hidden rounded-[1.5rem] p-3 sm:p-4"
        aria-label="Simulatia — stations"
      >
        <p className="px-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
          Stations
        </p>
        <p className="text-sm leading-relaxed text-gray-700">{simulatiaNarrative.desks}</p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <MediaFillImage
            src={media.simulatia.deskCeo}
            alt="Strategy station surface"
            aspectClassName="aspect-[4/3]"
            hoverTitle="Strategy station"
            hoverSubline="Direction and tradeoffs"
          />
          <MediaFillImage
            src={media.simulatia.deskArtist}
            alt="Craft station surface"
            aspectClassName="aspect-[4/3]"
            hoverTitle="Craft station"
            hoverSubline="Build and refine"
          />
          <MediaFillImage
            src={media.simulatia.deskComm}
            alt="Outreach station surface"
            aspectClassName="aspect-[4/3]"
            hoverTitle="Communicator station"
            hoverSubline="Signal out"
          />
          <MediaFillImage
            src={media.simulatia.deskExtra}
            alt="Extrapolation station surface"
            aspectClassName="aspect-[4/3]"
            hoverTitle="Extrapolation station"
            hoverSubline="Scenarios and branches"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:items-center">
          <div className="min-w-0">
            <MediaFillImage
              src={media.simulatia.groupDesk}
              alt="Group coordination surface"
              aspectClassName="aspect-[16/9]"
              hoverTitle="Group surface"
              hoverSubline="Alignment before work fans out"
            />
          </div>
          <div className="flex min-w-0 flex-col gap-2">
            <p className="text-sm leading-relaxed text-gray-700">{simulatiaNarrative.desks}</p>
          </div>
        </div>
      </section>

      <section
        className="glass-panel mx-auto w-full max-w-4xl space-y-4 overflow-hidden rounded-[1.5rem] p-3 sm:p-4"
        aria-label="Simulatia — research"
      >
        <p className="px-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
          Research
        </p>
        <p className="text-sm leading-relaxed text-gray-700">{simulatiaNarrative.researchers}</p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
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
          <div className="space-y-2">
            <MediaFillImage
              src={media.simulatia.researcherSession}
              alt="Research workstation session"
              aspectClassName="aspect-[3/4]"
              hoverTitle="Session frame"
              hoverSubline="Signal quality over volume"
            />
          </div>
        </div>
      </section>

      <SquircleDock />

      <section
        className="mx-auto w-full max-w-4xl space-y-3 rounded-[1.25rem] border border-white/20 bg-white/[0.04] px-4 py-4 sm:px-5 sm:py-5"
        aria-labelledby="ecosystem-heading"
      >
        <h2
          id="ecosystem-heading"
          className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500"
        >
          Ecosystem
        </h2>
        <p className="text-sm leading-relaxed text-gray-700">{ecosystem.lead}</p>
      </section>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
        <Link
          href="/simium"
          className="glass-kpi group relative overflow-hidden rounded-[1.5rem] p-4 transition-transform duration-200 ease-out hover:-translate-y-0.5 lg:col-span-4"
        >
          <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-gradient-to-br from-blue-400/25 to-indigo-400/15 blur-2xl" aria-hidden />
          <div className="relative z-10 flex flex-col gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/50 text-[var(--app-primary)] ring-1 ring-white/60">
              <LayoutGrid className="h-5 w-5" strokeWidth={1.65} />
            </span>
            <h2 className="text-base font-semibold tracking-tight text-gray-900">Simium</h2>
            <p className="text-[13px] leading-snug text-gray-600 sm:text-sm">
              Profile, configurator, library, entry.
            </p>
            <div className="[&>div]:h-16">
              <NeuralNetViz />
            </div>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--app-primary)]">
              Open
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
            </span>
          </div>
        </Link>

        <Link
          href="/simulator"
          className="glass-kpi group relative overflow-hidden rounded-[1.5rem] p-4 transition-transform duration-200 ease-out hover:-translate-y-0.5 lg:col-span-4"
        >
          <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-gradient-to-br from-violet-400/25 to-fuchsia-400/15 blur-2xl" aria-hidden />
          <div className="relative z-10 flex flex-col gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/50 text-[var(--app-primary)] ring-1 ring-white/60">
              <PlayCircle className="h-5 w-5" strokeWidth={1.65} />
            </span>
            <h2 className="text-base font-semibold tracking-tight text-gray-900">Simulator</h2>
            <p className="text-[13px] leading-snug text-gray-600 sm:text-sm">
              Dome pipeline — pre, live, publish.
            </p>
            <div className="[&>div]:h-16">
              <CadGridViz />
            </div>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--app-primary)]">
              Open
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
            </span>
          </div>
        </Link>

        <Link
          href="/simulatia"
          className="glass-kpi group relative overflow-hidden rounded-[1.5rem] p-4 transition-transform duration-200 ease-out hover:-translate-y-0.5 lg:col-span-4"
        >
          <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-gradient-to-br from-cyan-400/20 to-sky-400/15 blur-2xl" aria-hidden />
          <div className="relative z-10 flex flex-col gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/50 text-[var(--app-primary)] ring-1 ring-white/60">
              <Globe2 className="h-5 w-5" strokeWidth={1.65} />
            </span>
            <h2 className="text-base font-semibold tracking-tight text-gray-900">Simulatia</h2>
            <p className="text-[13px] leading-snug text-gray-600 sm:text-sm">
              Worlds, factions, agents.
            </p>
            <div className="[&>div]:h-16">
              <NetworkDotsViz />
            </div>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--app-primary)]">
              Open
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
            </span>
          </div>
        </Link>

        <article className="glass-kpi relative overflow-hidden rounded-[1.5rem] p-4 lg:col-span-4">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
            Load & activity
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
            Signal
          </p>
          <LineGraphViz />
        </article>

        <article className="glass-kpi relative overflow-hidden rounded-[1.5rem] p-4 lg:col-span-8">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
            Coverage map
          </p>
          <MinimalMapViz />
        </article>
        <Link
          href="/business"
          className="glass-kpi group relative flex flex-col justify-between overflow-hidden rounded-[1.5rem] p-5 lg:col-span-4"
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-500">
              Business
            </p>
            <p className="mt-2 text-sm font-semibold text-gray-900">
              Operations & roadmaps
            </p>
            <p className="mt-1 text-xs leading-relaxed text-gray-600">
              Tasks, calendars, and finance — aligned with the operations hub.
            </p>
          </div>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--app-primary)]">
            <Briefcase className="h-4 w-4" strokeWidth={1.75} />
            Open business
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
          </span>
        </Link>

        <Link
          href="/operations"
          className="glass-kpi group relative flex flex-col justify-between overflow-hidden rounded-[1.5rem] p-5 lg:col-span-12"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                Full dashboard
              </p>
              <p className="mt-1 text-sm font-semibold text-gray-900">
                Operations hub — expanded grid, telemetry, and planning
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--app-primary)]">
              Open operations hub
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
