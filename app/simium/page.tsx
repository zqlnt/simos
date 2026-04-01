import { LayoutGrid } from "lucide-react";
import { SimiumCopySurface } from "@/components/simium/SimiumCopySurface";
import { SectionList } from "@/components/SectionList";
import { PageHeader } from "@/components/PageHeader";
import { simiumSections } from "@/lib/nav";
import { LineGraphViz, NeuralNetViz, PixelPlotViz } from "@/components/viz";

export default function SimiumPage() {
  return (
    <div className="relative z-10 mx-auto max-w-4xl space-y-10 sm:space-y-12">
      <PageHeader
        icon={LayoutGrid}
        title="Simium"
        subtitle="Anchors for onboarding, life data, the configurator, entry, history, and settings. Replace hash targets with real routes as modules ship."
      />
      <SimiumCopySurface />
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
