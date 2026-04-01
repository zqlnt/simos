import { Building2 } from "lucide-react";
import { CompanyGrid } from "@/components/CompanyGrid";
import { PageHeader } from "@/components/PageHeader";
import { LineGraphViz, NeuralNetViz, PixelPlotViz } from "@/components/viz";

export default function CompanyPage() {
  return (
    <div className="relative z-10 mx-auto max-w-6xl space-y-10 sm:space-y-12">
      <PageHeader
        icon={Building2}
        title="Company"
        subtitle="Incorporation, logistics, finance, fundraising, and people — grouped for admin and ops. Each card can deep-link to intranet tools or documents as you wire them up."
        subtitleClassName="max-w-3xl"
      />
      <div className="glass-panel rounded-[1.25rem] p-3 sm:p-4">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <LineGraphViz />
          <PixelPlotViz />
          <NeuralNetViz />
        </div>
      </div>
      <CompanyGrid />
    </div>
  );
}
