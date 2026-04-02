"use client";

import Image from "next/image";
import { useState } from "react";

export function MediaFillImage({
  src,
  alt,
  priority = false,
  loading = "lazy",
  aspectClassName = "aspect-[4/3]",
  className = "",
  hoverTitle,
  hoverSubline,
  premiumHover = true,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  /** Next/Image loading; default lazy for below-the-fold efficiency. */
  loading?: "lazy" | "eager";
  aspectClassName?: string;
  className?: string;
  /** Shown on hover (md+) over a gradient; keeps layout calm on touch */
  hoverTitle?: string;
  hoverSubline?: string;
  /** Subtle shadow, ring, and lift on hover */
  premiumHover?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);
  const hasOverlay = Boolean(hoverTitle || hoverSubline);
  return (
    <div
      className={`group relative w-full overflow-hidden rounded-[1.25rem] bg-black/[0.06] ${
        premiumHover
          ? "shadow-md shadow-black/[0.07] ring-1 ring-white/25 transition-[box-shadow,transform] duration-[420ms] ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:duration-200 hover:z-[1] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/12 hover:ring-white/40"
          : "ring-1 ring-white/20"
      } ${aspectClassName} ${className}`}
    >
      <div
        className={`media-skeleton-layer pointer-events-none absolute inset-0 z-[1] flex flex-col justify-center gap-2.5 p-5 transition-opacity duration-500 ease-out motion-reduce:duration-200 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden
      >
        <div className="media-skeleton-bar h-[42%] max-h-[48%] min-h-[3rem] w-full rounded-[0.65rem] rounded-t-[0.85rem]" />
        <div className="media-skeleton-bar h-2.5 w-[55%] rounded-full" />
        <div className="media-skeleton-bar h-2 w-[40%] rounded-full opacity-70" />
      </div>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40rem"
        onLoad={() => setLoaded(true)}
        className={`relative z-0 object-cover object-center ${
          loaded ? "opacity-100" : "opacity-0"
        } ${
          premiumHover
            ? "transition-[opacity,transform] duration-[520ms] ease-[cubic-bezier(0.34,1.28,0.64,1)] motion-reduce:transition-opacity motion-reduce:duration-200 group-hover:scale-[1.03]"
            : "transition-opacity duration-500 ease-out motion-reduce:duration-200"
        }`}
        priority={priority}
        loading={loading}
      />
      {hasOverlay && (
        <div
          className="pointer-events-none absolute inset-0 z-[2] hidden flex-col justify-end bg-gradient-to-t from-black/85 via-black/35 to-transparent p-4 opacity-0 transition-[opacity,transform] duration-[380ms] ease-[cubic-bezier(0.32,0.72,0,1)] md:flex md:translate-y-1 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
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
  );
}
