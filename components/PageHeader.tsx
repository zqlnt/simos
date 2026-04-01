import type { LucideIcon } from "lucide-react";

export function PageHeader({
  icon: Icon,
  title,
  tagline,
  subtitle,
  subtitleClassName = "max-w-2xl",
  align = "left",
}: {
  icon: LucideIcon;
  title: string;
  /** Short line above the title (e.g. product tagline) */
  tagline?: string;
  subtitle?: string;
  subtitleClassName?: string;
  align?: "left" | "center";
}) {
  const row =
    align === "center"
      ? "flex flex-col items-center gap-5 sm:gap-6 text-center"
      : "flex items-start gap-4 sm:gap-5";
  const textBlock =
    align === "center"
      ? "space-y-2.5 text-center"
      : "min-w-0 space-y-2.5 pt-0.5";

  return (
    <header className="space-y-1">
      <div className={row}>
        <span
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[1.125rem] bg-white/40 text-[var(--app-primary)] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] ring-1 ring-white/50 ${align === "center" ? "" : ""}`}
        >
          <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden />
        </span>
        <div className={textBlock}>
          {tagline ? (
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--app-primary)]">
              {tagline}
            </p>
          ) : null}
          <h1 className="text-[1.65rem] font-semibold tracking-tight text-gray-900 sm:text-3xl">
            {title}
          </h1>
          {subtitle ? (
            <p
              className={`text-[15px] leading-relaxed text-gray-600 sm:text-base ${subtitleClassName}`}
            >
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
    </header>
  );
}
