import {
  emptyStates,
  simHomeCards,
  technologyHeaders,
} from "@/lib/product-copy";
import {
  CoordinateGridViz,
  LineGraphViz,
  MinimalMapViz,
  NetworkDotsViz,
  NeuralNetViz,
  TimelineViz,
} from "@/components/viz";

const telemetryLabels = ["STATE", "ROUTE", "GRAPH", "MEMORY", "SIGNAL", "FIELD"];

/** Additive bento: SIM control-surface + prior product copy (full paragraphs & matrices). */
export function SimBentoSurface() {
  return (
    <section className="space-y-10" aria-labelledby="sim-bento-heading">
      <div className="space-y-2">
        <h2
          id="sim-bento-heading"
          className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--app-primary)]"
        >
          SIM · control surface
        </h2>
        <p className="max-w-3xl text-[15px] leading-relaxed text-gray-700 sm:text-base">
          A persistent workspace for synthetic environments, agent processes, and
          cinematic world generation. Move between oversight, operative views,
          multimodal creation, and final form without losing continuity.
        </p>
      </div>

      <div
        className="glass-strip flex flex-wrap items-center gap-2 rounded-2xl px-3 py-2.5"
        role="status"
        aria-label="Telemetry strip"
      >
        {telemetryLabels.map((t) => (
          <span
            key={t}
            className="rounded-md bg-white/30 px-2 py-0.5 font-mono text-[9px] font-medium uppercase tracking-wider text-gray-600 ring-1 ring-white/35"
          >
            {t}
          </span>
        ))}
        <span className="ml-auto h-1.5 min-w-[6rem] flex-1 rounded-full bg-gradient-to-r from-[var(--app-primary)]/25 via-white/40 to-[var(--app-primary)]/15 sm:min-w-[10rem]" />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        <article className="glass-kpi flex flex-col gap-3 rounded-[1.35rem] p-5">
          <h3 className="text-sm font-semibold tracking-tight text-gray-900">
            Objective
          </h3>
          <p className="text-xs leading-relaxed text-gray-600">
            {simHomeCards.objective}
          </p>
          <TimelineViz />
          <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-gray-500">
            Mission state · process timeline · resource flow
          </p>
        </article>

        <article className="glass-kpi flex flex-col gap-3 rounded-[1.35rem] p-5">
          <h3 className="text-sm font-semibold tracking-tight text-gray-900">
            Objective Subjectivity
          </h3>
          <p className="text-xs leading-relaxed text-gray-600">
            {simHomeCards.objectiveSubjectivity}
          </p>
          <NeuralNetViz />
          <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-gray-500">
            Attention map · evidence stack · cognitive mode
          </p>
        </article>

        <article className="glass-kpi flex flex-col gap-3 rounded-[1.35rem] p-5">
          <h3 className="text-sm font-semibold tracking-tight text-gray-900">
            Subjective
          </h3>
          <p className="text-xs leading-relaxed text-gray-600">
            {simHomeCards.subjective}
          </p>
          <NetworkDotsViz />
          <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-gray-500">
            Live workspace · inline notes · process branching
          </p>
        </article>

        <article className="glass-kpi flex flex-col gap-3 rounded-[1.35rem] p-5 md:col-span-2 lg:col-span-1">
          <h3 className="text-sm font-semibold tracking-tight text-gray-900">
            Converse
          </h3>
          <p className="text-xs leading-relaxed text-gray-600">
            {simHomeCards.converse}
          </p>
          <LineGraphViz />
          <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-gray-500">
            Live dialogue · interruption-safe · optimised truth
          </p>
        </article>

        <article className="glass-kpi flex flex-col gap-3 rounded-[1.35rem] p-5 md:col-span-2">
          <h3 className="text-sm font-semibold tracking-tight text-gray-900">
            Persistent world state
          </h3>
          <p className="text-xs leading-relaxed text-gray-600">
            {simHomeCards.persistentWorld}
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <MinimalMapViz />
            <CoordinateGridViz />
          </div>
        </article>

        <article className="glass-kpi flex flex-col gap-3 rounded-[1.35rem] p-5 lg:col-span-3">
          <h3 className="text-sm font-semibold tracking-tight text-gray-900">
            World · agent · network systems
          </h3>
          <p className="text-xs leading-relaxed text-gray-500">
            Dormant infrastructure labels — ready when a project binds state.
          </p>
          <div className="space-y-3">
            <div>
              <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-gray-500">
                World
              </p>
              <div className="flex flex-wrap gap-1.5">
                {technologyHeaders.worldSystems.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/35 px-2 py-px text-[10px] font-medium text-gray-700 ring-1 ring-white/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-gray-500">
                Agent
              </p>
              <div className="flex flex-wrap gap-1.5">
                {technologyHeaders.agentSystems.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/35 px-2 py-px text-[10px] font-medium text-gray-700 ring-1 ring-white/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-gray-500">
                Network
              </p>
              <div className="flex flex-wrap gap-1.5">
                {technologyHeaders.networkSystems.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/35 px-2 py-px text-[10px] font-medium text-gray-700 ring-1 ring-white/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <article className="glass-panel space-y-2 rounded-[1.25rem] p-5">
          <h3 className="text-sm font-semibold text-gray-900">Process telemetry</h3>
          <p className="text-xs leading-relaxed text-gray-600">
            {simHomeCards.processTelemetry}
          </p>
        </article>
        <article className="glass-panel space-y-2 rounded-[1.25rem] p-5">
          <h3 className="text-sm font-semibold text-gray-900">Subjective access</h3>
          <p className="text-xs leading-relaxed text-gray-600">
            {simHomeCards.subjectiveAccess}
          </p>
        </article>
        <article className="glass-panel space-y-2 rounded-[1.25rem] p-5">
          <h3 className="text-sm font-semibold text-gray-900">Network logic</h3>
          <p className="text-xs leading-relaxed text-gray-600">
            {simHomeCards.networkLogic}
          </p>
        </article>
        <article className="glass-panel space-y-2 rounded-[1.25rem] p-5">
          <h3 className="text-sm font-semibold text-gray-900">Agent perspective stack</h3>
          <p className="text-xs leading-relaxed text-gray-600">
            {simHomeCards.agentPerspectiveStack}
          </p>
        </article>
        <article className="glass-panel space-y-2 rounded-[1.25rem] p-5">
          <h3 className="text-sm font-semibold text-gray-900">Scene graph</h3>
          <p className="text-xs leading-relaxed text-gray-600">{simHomeCards.sceneGraph}</p>
        </article>
        <article className="glass-panel space-y-2 rounded-[1.25rem] p-5">
          <h3 className="text-sm font-semibold text-gray-900">Memory architecture</h3>
          <p className="text-xs leading-relaxed text-gray-600">
            {simHomeCards.memoryArchitecture}
          </p>
        </article>
        <article className="glass-panel space-y-2 rounded-[1.25rem] p-5">
          <h3 className="text-sm font-semibold text-gray-900">Signal routing</h3>
          <p className="text-xs leading-relaxed text-gray-600">
            {simHomeCards.signalRouting}
          </p>
        </article>
        <article className="glass-panel space-y-2 rounded-[1.25rem] p-5">
          <h3 className="text-sm font-semibold text-gray-900">World continuity</h3>
          <p className="text-xs leading-relaxed text-gray-600">
            {simHomeCards.worldContinuity}
          </p>
        </article>
        <article className="glass-panel space-y-2 rounded-[1.25rem] p-5">
          <h3 className="text-sm font-semibold text-gray-900">Perception control</h3>
          <p className="text-xs leading-relaxed text-gray-600">
            {simHomeCards.perceptionControl}
          </p>
        </article>
        <article className="glass-panel space-y-2 rounded-[1.25rem] p-5">
          <h3 className="text-sm font-semibold text-gray-900">Surface translation</h3>
          <p className="text-xs leading-relaxed text-gray-600">
            {simHomeCards.surfaceTranslation}
          </p>
        </article>
        <article className="glass-panel space-y-2 rounded-[1.25rem] p-5 sm:col-span-2 lg:col-span-1">
          <h3 className="text-sm font-semibold text-gray-900">Form</h3>
          <p className="text-xs leading-relaxed text-gray-600">{simHomeCards.form}</p>
        </article>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="glass-strip rounded-2xl p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-500">
            SIM · empty
          </p>
          <ul className="mt-2 space-y-1.5 text-[11px] leading-snug text-gray-500">
            {emptyStates.sim.slice(0, 4).map((line) => (
              <li key={line}>— {line}</li>
            ))}
          </ul>
        </div>
        <div className="glass-strip rounded-2xl p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-500">
            Simulator · empty
          </p>
          <ul className="mt-2 space-y-1.5 text-[11px] leading-snug text-gray-500">
            {emptyStates.simulator.slice(0, 4).map((line) => (
              <li key={line}>— {line}</li>
            ))}
          </ul>
        </div>
        <div className="glass-strip rounded-2xl p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-500">
            Simulatia · empty
          </p>
          <ul className="mt-2 space-y-1.5 text-[11px] leading-snug text-gray-500">
            {emptyStates.simulatia.slice(0, 4).map((line) => (
              <li key={line}>— {line}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
