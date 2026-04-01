import { Info } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

export default function AboutPage() {
  return (
    <div className="relative z-10 mx-auto max-w-2xl space-y-8">
      <PageHeader
        icon={Info}
        title="About"
        subtitle="Sim brings together product surfaces for Simium, Simulator, and Simulatia under one simulation interface. The layout is modular so you can add 3D maps, immersive views, and operational tools without redesigning the control surface."
      />
    </div>
  );
}
