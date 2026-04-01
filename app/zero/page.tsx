import Link from "next/link";
import { SimLogo } from "@/components/SimLogo";
import { SquircleDock } from "@/components/SquircleDock";
import { LineGraphViz, NeuralNetViz, TimelineViz } from "@/components/viz";

export default function ZeroPage() {
  return (
    <div className="relative z-10 mx-auto flex w-full max-w-[90rem] flex-col gap-10">
      <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:gap-12">
        <div
          className="glass-kpi flex h-36 w-36 shrink-0 items-center justify-center rounded-[2rem] text-6xl font-semibold tracking-tight text-[var(--app-primary)] shadow-inner ring-2 ring-white/50 sm:h-44 sm:w-44 sm:text-7xl"
          aria-hidden
        >
          O
        </div>
        <div className="min-w-0 space-y-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--app-primary)]">
            simOS · Zero
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Zero division
          </h1>
          <p className="max-w-2xl text-[15px] leading-relaxed text-gray-600">
            Identity anchor for product, organization, and business narrative. Zero
            sits alongside Simium, Simulator, and Simulatia — same simulation
            workspace, scoped for strategy and origin stories.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <SimLogo width={140} height={48} priority />
            <span className="text-sm font-medium text-gray-500">
              Brand mark + simOS control surface
            </span>
          </div>
        </div>
      </div>

      <SquircleDock />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <article className="glass-kpi rounded-[1.5rem] p-5">
          <h2 className="text-sm font-semibold text-gray-900">Product</h2>
          <p className="mt-2 text-xs leading-relaxed text-gray-600">
            Positioning and release story — link to Simium / Simulator hubs.
          </p>
          <div className="mt-4">
            <NeuralNetViz />
          </div>
        </article>
        <article className="glass-kpi rounded-[1.5rem] p-5">
          <h2 className="text-sm font-semibold text-gray-900">Organization</h2>
          <p className="mt-2 text-xs leading-relaxed text-gray-600">
            Structure and divisions — align with Organization dashboard.
          </p>
          <div className="mt-4">
            <TimelineViz />
          </div>
        </article>
        <article className="glass-kpi rounded-[1.5rem] p-5">
          <h2 className="text-sm font-semibold text-gray-900">Business</h2>
          <p className="mt-2 text-xs leading-relaxed text-gray-600">
            Forecasts and runway — pair with Operations hub.
          </p>
          <div className="mt-4">
            <LineGraphViz />
          </div>
        </article>
      </div>

      <div className="glass-panel rounded-[1.25rem] px-5 py-4 text-sm text-gray-600">
        <Link href="/organization" className="font-medium text-[var(--app-primary)]">
          Organization dashboard →
        </Link>
        <span className="mx-2 text-gray-300">·</span>
        <Link href="/operations" className="font-medium text-[var(--app-primary)]">
          Operations hub →
        </Link>
      </div>
    </div>
  );
}
