import { simulatia } from "@/lib/product-copy";

/** Additive Simulatia workforce, process, and positioning copy. */
export function SimulatiaCopySurface() {
  return (
    <section className="space-y-8" aria-labelledby="simulatia-copy-hero">
      <div className="space-y-2">
        <h2
          id="simulatia-copy-hero"
          className="text-lg font-semibold tracking-tight text-gray-900 sm:text-xl"
        >
          {simulatia.heroTitle}
        </h2>
        <p className="text-[15px] leading-relaxed text-gray-700">{simulatia.heroLine}</p>
        <p className="text-sm leading-relaxed text-gray-600">{simulatia.about}</p>
      </div>

      <div className="glass-panel space-y-3 rounded-[1.35rem] p-5 sm:p-6">
        <h3 className="text-sm font-semibold text-gray-900">How Simulatia works</h3>
        <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed text-gray-600">
          {simulatia.howItWorks.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-gray-500">
          Meet your workforce
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {simulatia.employees.map((e) => (
            <article
              key={e.name}
              className="glass-kpi space-y-2 rounded-[1.25rem] p-5"
            >
              <h4 className="text-sm font-semibold text-gray-900">{e.name}</h4>
              <p className="text-[11px] font-medium uppercase tracking-wide text-[var(--app-primary)]">
                {e.role}
              </p>
              <p className="text-xs leading-relaxed text-gray-600">{e.blurb}</p>
              <p className="font-mono text-[9px] leading-snug text-gray-500">{e.abilities}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="glass-strip rounded-2xl px-4 py-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-500">
          Process rhythm
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {simulatia.processV1.map((label) => (
            <span
              key={label}
              className="rounded-full bg-white/35 px-3 py-1 text-[11px] font-medium text-gray-700 ring-1 ring-white/40"
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      <div className="glass-panel rounded-[1.25rem] p-5">
        <p className="text-sm leading-relaxed text-gray-600">{simulatia.dataPlaceholder}</p>
        <p className="mt-3 text-sm font-medium text-gray-800">{simulatia.cta}</p>
      </div>
    </section>
  );
}
