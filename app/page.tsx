import type { ComponentType } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Briefcase,
  Globe2,
  LayoutGrid,
  PlayCircle,
} from "lucide-react";
import { SimBentoSurface } from "@/components/home/SimBentoSurface";
import { SimLogo } from "@/components/SimLogo";
import { simBrand } from "@/lib/product-copy";
import { SquircleDock } from "@/components/SquircleDock";
import {
  CadGridViz,
  LineGraphViz,
  NeuralNetViz,
  NetworkDotsViz,
} from "@/components/viz";

const tiles: {
  href: string;
  title: string;
  description: string;
  icon: typeof LayoutGrid;
  tint: string;
  viz: ComponentType;
}[] = [
  {
    href: "/simium",
    title: "Simium",
    description: "Profile, configurator, library, and entry flows.",
    icon: LayoutGrid,
    tint: "from-blue-400/25 to-indigo-400/15",
    viz: NeuralNetViz,
  },
  {
    href: "/simulator",
    title: "Simulator",
    description: "Dome pipeline: pre, live, and publish.",
    icon: PlayCircle,
    tint: "from-violet-400/25 to-fuchsia-400/15",
    viz: CadGridViz,
  },
  {
    href: "/simulatia",
    title: "Simulatia",
    description: "World, factions, agents, and automation.",
    icon: Globe2,
    tint: "from-cyan-400/20 to-sky-400/15",
    viz: NetworkDotsViz,
  },
  {
    href: "/business",
    title: "Business operations",
    description: "Tasks, calendars, roadmaps, and deadlines.",
    icon: Briefcase,
    tint: "from-amber-400/20 to-orange-400/12",
    viz: LineGraphViz,
  },
];

export default function HomePage() {
  return (
    <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-10 sm:gap-12">
      <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:gap-10">
        <SimLogo width={200} height={72} className="opacity-92" priority />
        <div className="space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--app-primary)]">
            SIM
          </p>
          <h1 className="text-[1.75rem] font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Welcome to Sim
          </h1>
          <p className="max-w-2xl text-[15px] font-medium leading-relaxed text-gray-800 sm:text-lg">
            {simBrand.line}
          </p>
          <p className="max-w-xl text-[15px] leading-relaxed text-gray-600 sm:text-base">
            {simBrand.supporting} simOS — unified simulation workspace for Simium,
            Simulator, and Simulatia. Stack maps, WebXR, and scene layers without
            leaving the control surface.
          </p>
        </div>
      </div>

      <SquircleDock />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
        {tiles.map(({ href, title, description, icon: Icon, tint, viz: Viz }) => (
          <Link
            key={href}
            href={href}
            className="glass-kpi group relative overflow-hidden rounded-[1.75rem] p-6 transition-transform duration-200 ease-out hover:-translate-y-0.5 sm:p-7"
          >
            <div
              className={`pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-gradient-to-br ${tint} blur-2xl`}
              aria-hidden
            />
            <div className="glass-corner-glow opacity-40" aria-hidden />
            <div className="relative z-10 flex flex-col gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/50 text-[var(--app-primary)] ring-1 ring-white/60">
                <Icon className="h-5 w-5" strokeWidth={1.65} />
              </span>
              <div className="space-y-2">
                <h2 className="text-lg font-semibold tracking-tight text-gray-900">
                  {title}
                </h2>
                <p className="text-sm leading-relaxed text-gray-600">
                  {description}
                </p>
              </div>
              <Viz />
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--app-primary)]">
                Open
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.75}
                />
              </span>
            </div>
          </Link>
        ))}
      </div>

      <SimBentoSurface />
    </div>
  );
}
