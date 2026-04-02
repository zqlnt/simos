/**
 * Muted autoplay loop — GIF-like embed (no controls). Requires muted for browser autoplay policies.
 */
export function ProductLoopVideo({
  src,
  className = "",
  aspectClassName = "aspect-video",
  hoverTitle,
  hoverSubline,
  premiumHover = true,
}: {
  src: string;
  className?: string;
  /** Tailwind aspect ratio, e.g. aspect-[4/3] */
  aspectClassName?: string;
  hoverTitle?: string;
  hoverSubline?: string;
  premiumHover?: boolean;
}) {
  const hasOverlay = Boolean(hoverTitle || hoverSubline);
  return (
    <div
      className={`group overflow-hidden rounded-[1.25rem] bg-black/[0.06] ${
        premiumHover
          ? "shadow-md shadow-black/[0.08] ring-1 ring-white/30 transition-[box-shadow,transform] duration-300 ease-out hover:z-[1] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/15 hover:ring-white/45"
          : "ring-1 ring-white/25"
      } ${className}`}
    >
      <div className={`relative w-full overflow-hidden ${aspectClassName}`}>
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          tabIndex={-1}
          className={`pointer-events-none absolute inset-0 h-full w-full select-none object-cover object-center ${
            premiumHover
              ? "transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              : ""
          }`}
          aria-hidden
        >
          <source src={src} type="video/mp4" />
        </video>
        {hasOverlay && (
          <div
            className="pointer-events-none absolute inset-0 hidden flex-col justify-end bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 opacity-0 transition-[opacity,transform] duration-300 ease-out md:flex md:translate-y-1 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
            aria-hidden
          >
            {hoverTitle ? (
              <p className="text-[13px] font-semibold tracking-tight text-white drop-shadow-sm">
                {hoverTitle}
              </p>
            ) : null}
            {hoverSubline ? (
              <p className="mt-1 text-[11px] leading-snug text-white/85">{hoverSubline}</p>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}
