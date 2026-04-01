import { simulator } from "@/lib/product-copy";

/** Additive Simulator product copy: system logic, generation, manipulation, form, interoperability, equation. */
export function SimulatorCopySurface() {
  return (
    <section className="space-y-8" aria-labelledby="simulator-copy-overview">
      <div className="space-y-2">
        <h2
          id="simulator-copy-overview"
          className="text-lg font-semibold tracking-tight text-gray-900 sm:text-xl"
        >
          Simulator overview
        </h2>
        <p className="text-[15px] leading-relaxed text-gray-700">{simulator.overview}</p>
      </div>

      <article className="glass-panel space-y-4 rounded-[1.35rem] p-5 sm:p-6">
        <h3 className="text-sm font-semibold text-gray-900">System Logic</h3>
        <p className="text-sm leading-relaxed text-gray-600">{simulator.systemLogic}</p>
        <ul className="space-y-2 border-t border-white/25 pt-4 text-sm leading-relaxed text-gray-600">
          {simulator.systemLogicBullets.map((line) => (
            <li key={line} className="flex gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--app-primary)]/6" />
              <span>{line}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs leading-relaxed text-gray-500">{simulator.immersion}</p>
      </article>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <article className="glass-kpi space-y-2 rounded-[1.25rem] p-5">
          <h3 className="text-sm font-semibold text-gray-900">Generation</h3>
          <p className="text-xs leading-relaxed text-gray-600">{simulator.generation}</p>
        </article>
        <article className="glass-kpi space-y-2 rounded-[1.25rem] p-5">
          <h3 className="text-sm font-semibold text-gray-900">Manipulation</h3>
          <p className="text-xs leading-relaxed text-gray-600">{simulator.manipulation}</p>
        </article>
        <article className="glass-kpi space-y-2 rounded-[1.25rem] p-5">
          <h3 className="text-sm font-semibold text-gray-900">Form</h3>
          <p className="text-xs leading-relaxed text-gray-600">{simulator.form}</p>
        </article>
        <article className="glass-kpi space-y-2 rounded-[1.25rem] p-5">
          <h3 className="text-sm font-semibold text-gray-900">Interoperability</h3>
          <p className="text-xs leading-relaxed text-gray-600">{simulator.interoperability}</p>
        </article>
      </div>

      <article className="glass-panel space-y-3 rounded-[1.35rem] p-5 sm:p-6">
        <h3 className="text-sm font-semibold text-gray-900">VR Creation · The Equation</h3>
        <p className="text-sm leading-relaxed text-gray-600">{simulator.vrCreation}</p>
        <p className="rounded-xl bg-white/25 px-4 py-3 font-mono text-[11px] leading-relaxed text-gray-800 ring-1 ring-white/35 sm:text-xs">
          {simulator.equation}
        </p>
        <p className="text-xs leading-relaxed text-gray-500">{simulator.equationNote}</p>
      </article>
    </section>
  );
}
