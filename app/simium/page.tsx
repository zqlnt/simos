import { LayoutGrid } from "lucide-react";
import { MediaFillImage } from "@/components/MediaFillImage";
import { ProductLoopVideo } from "@/components/ProductLoopVideo";
import { SimiumCopySurface } from "@/components/simium/SimiumCopySurface";
import { SectionList } from "@/components/SectionList";
import { PageHeader } from "@/components/PageHeader";
import { simiumSections } from "@/lib/nav";
import { media } from "@/lib/media-assets";
import { PRODUCT_PREVIEW_VIDEOS } from "@/lib/product-videos";
import { simiumNarrative } from "@/lib/product-narrative";
import { LineGraphViz, NeuralNetViz, PixelPlotViz } from "@/components/viz";

const textHeavy =
  "rounded-xl border border-white/15 bg-white/[0.04] px-4 py-5 sm:px-6 sm:py-6 transition-[box-shadow,border-color] duration-300 hover:border-white/22 hover:shadow-lg hover:shadow-black/[0.06]";

export default function SimiumPage() {
  return (
    <div className="relative z-10 mx-auto max-w-4xl space-y-10 sm:space-y-12">
      <PageHeader
        icon={LayoutGrid}
        title="Simium"
        subtitle="Anchors for onboarding, life data, the configurator, entry, history, and settings. Replace hash targets with real routes as modules ship."
      />

      <section
        id="simium-preview"
        className="glass-panel scroll-mt-28 space-y-4 overflow-hidden rounded-[1.5rem] p-3 sm:p-4"
        aria-label="Simium live surface"
      >
        <div className="space-y-1.5 px-0.5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
            Live surface
          </p>
          <p className="text-sm leading-relaxed text-gray-700">{simiumNarrative.lead}</p>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start">
          <div className="min-w-0">
            <ProductLoopVideo
              src={PRODUCT_PREVIEW_VIDEOS.simium}
              loading="eager"
              aspectClassName="aspect-[16/10]"
              hoverTitle="Primary loop"
              hoverSubline="Memory, context, signal flow"
            />
          </div>
          <div className="flex min-w-0 flex-col justify-center gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-500">
              Primary loop
            </p>
            <p className="text-sm leading-relaxed text-gray-700">{simiumNarrative.loop}</p>
          </div>
        </div>
      </section>

      <section
        className="glass-panel space-y-4 overflow-hidden rounded-[1.5rem] p-3 sm:p-4"
        aria-label="Simium step sequence"
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
          <div className="flex min-w-0 flex-col gap-3">
            <p className="text-xs leading-relaxed text-gray-600">{simiumNarrative.stepIn}</p>
            <p className="text-sm leading-relaxed text-gray-700">{simiumNarrative.stepInSolo}</p>
          </div>
        </div>
      </section>

      <section
        className={`glass-panel ${textHeavy}`}
        aria-label="Simium context — live state"
      >
        <p className="text-sm leading-relaxed text-gray-700">
          {simiumNarrative.interludeStepToAuthored}
        </p>
      </section>

      <section
        className="glass-panel space-y-6 overflow-hidden rounded-[1.5rem] p-3 sm:p-4"
        aria-label="Simium authored panels"
      >
        <p className="px-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
          Authored frames
        </p>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start">
          <div className="min-w-0">
            <MediaFillImage
              src={media.simium.designJan}
              alt="Simium authored panel"
              aspectClassName="aspect-[3/4]"
              hoverTitle="Authored panel"
              hoverSubline="Identity in the surface"
            />
          </div>
          <div className="flex min-w-0 flex-col justify-center gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-500">
              Panel & identity
            </p>
            <p className="text-sm leading-relaxed text-gray-700">{simiumNarrative.design}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start">
          <div className="flex min-w-0 flex-col justify-center gap-2 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-500">
              Spatial frame
            </p>
            <p className="text-sm leading-relaxed text-gray-700">{simiumNarrative.design}</p>
          </div>
          <div className="min-w-0 lg:order-1">
            <MediaFillImage
              src={media.simium.handRemoved}
              alt="Simium spatial frame"
              aspectClassName="aspect-[3/4]"
              hoverTitle="Spatial frame"
              hoverSubline="Clean read for the world"
            />
          </div>
        </div>
      </section>

      <SimiumCopySurface />

      <section className={`glass-panel ${textHeavy}`} aria-label="Simium context — massing">
        <p className="text-sm leading-relaxed text-gray-700">
          {simiumNarrative.interludeAuthoredToMassing}
        </p>
      </section>

      <section
        className="glass-panel space-y-8 overflow-hidden rounded-[1.5rem] p-3 sm:p-4"
        aria-label="Simium mapped environments"
      >
        <p className="px-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
          Massing & panels
        </p>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center">
          <div className="min-w-0 max-w-md mx-auto w-full lg:mx-0">
            <MediaFillImage
              src={media.simium.still3}
              alt="Simium environment still"
              aspectClassName="aspect-[4/5]"
              hoverTitle="Environment still"
              hoverSubline="Massing at a glance"
            />
          </div>
          <div className="flex min-w-0 flex-col justify-center gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-500">
              Environment still
            </p>
            <p className="text-sm leading-relaxed text-gray-700">{simiumNarrative.spatial}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center">
          <div className="flex min-w-0 flex-col justify-center gap-2 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-500">
              Surface tile
            </p>
            <p className="text-sm leading-relaxed text-gray-700">{simiumNarrative.spatial}</p>
          </div>
          <div className="min-w-0 max-w-md mx-auto w-full lg:mx-0 lg:order-1">
            <MediaFillImage
              src={media.simium.panelA}
              alt="Simium surface panel"
              aspectClassName="aspect-[4/5]"
              hoverTitle="Surface tile"
              hoverSubline="Density and orientation"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center">
          <div className="min-w-0 max-w-md mx-auto w-full lg:mx-0">
            <MediaFillImage
              src={media.simium.panelB}
              alt="Simium surface panel variant"
              aspectClassName="aspect-[4/5]"
              hoverTitle="Variant read"
              hoverSubline="Alternate crop"
            />
          </div>
          <div className="flex min-w-0 flex-col justify-center gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-500">
              Variant read
            </p>
            <p className="text-sm leading-relaxed text-gray-700">{simiumNarrative.spatial}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center">
          <div className="flex min-w-0 flex-col justify-center gap-2 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-500">
              Detail tile
            </p>
            <p className="text-sm leading-relaxed text-gray-700">{simiumNarrative.spatial}</p>
          </div>
          <div className="min-w-0 max-w-md mx-auto w-full lg:mx-0 lg:order-1">
            <MediaFillImage
              src={media.simium.panelC}
              alt="Simium surface panel detail"
              aspectClassName="aspect-[4/5]"
              hoverTitle="Detail tile"
              hoverSubline="Tight panel read"
            />
          </div>
        </div>
      </section>

      <section className={`glass-panel ${textHeavy}`} aria-label="Simium context — wide read">
        <p className="text-sm leading-relaxed text-gray-700">
          {simiumNarrative.interludeMassingBeforeWide}
        </p>
      </section>

      <section
        className="glass-panel space-y-4 overflow-hidden rounded-[1.5rem] p-3 sm:p-4"
        aria-label="Simium wide panel"
      >
        <p className="px-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
          Wide read
        </p>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:items-center">
          <div className="min-w-0 lg:col-span-3">
            <MediaFillImage
              src={media.simium.panelD}
              alt="Simium wide panel"
              aspectClassName="aspect-[2/1]"
              hoverTitle="Wide sweep"
              hoverSubline="Alignment across the full surface"
            />
          </div>
          <div className="flex min-w-0 flex-col gap-2 lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-500">
              Orientation
            </p>
            <p className="text-sm leading-relaxed text-gray-700">{simiumNarrative.spatial}</p>
          </div>
        </div>
      </section>

      <div className="glass-panel rounded-[1.25rem] p-3 sm:p-4">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <NeuralNetViz />
          <PixelPlotViz />
          <LineGraphViz />
        </div>
      </div>
      <SectionList title="Sections" items={simiumSections} idPrefix="simium" />
    </div>
  );
}
