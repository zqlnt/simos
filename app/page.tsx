import Link from "next/link";
import {
  ArrowUpRight,
  Briefcase,
  Globe2,
  Home,
  LayoutGrid,
  PlayCircle,
} from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { SquircleDock } from "@/components/SquircleDock";
import { simBrand } from "@/lib/product-copy";
import {
  BarChartViz,
  CadGridViz,
  LineGraphViz,
  MinimalMapViz,
  NetworkDotsViz,
  NeuralNetViz,
  TimelineViz,
} from "@/components/viz";

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

      <SquircleDock />

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
