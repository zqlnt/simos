import { simium } from "@/lib/product-copy";

/** Additive Simium positioning + long-form copy from product system. */
export function SimiumCopySurface() {
  return (
    <section
      className="space-y-5"
      aria-labelledby="simium-copy-heading"
    >
      <div className="space-y-2">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--app-primary)]">
          {simium.tagline} · {simium.title}
        </p>
        <h2
          id="simium-copy-heading"
          className="text-lg font-semibold tracking-tight text-gray-900 sm:text-xl"
        >
          Modular simulation interface
        </h2>
        <p className="text-[15px] leading-relaxed text-gray-700 sm:text-base">
          {simium.short}
        </p>
      </div>
      <div className="glass-panel space-y-3 rounded-[1.35rem] p-5 sm:p-6">
        <h3 className="text-sm font-semibold text-gray-900">Continuity</h3>
        <p className="text-sm leading-relaxed text-gray-600">{simium.long}</p>
      </div>
    </section>
  );
}
