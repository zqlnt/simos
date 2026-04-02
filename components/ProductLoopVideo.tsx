"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Muted autoplay loop — GIF-like embed (no controls). Requires muted for browser autoplay policies.
 * Optional `trimStartSeconds` skips a glitchy lead-in; loops manually from that offset.
 * `loading="lazy"` defers mounting the video until near the viewport; skeleton crossfades to video.
 */
export function ProductLoopVideo({
  src,
  className = "",
  aspectClassName = "aspect-video",
  hoverTitle,
  hoverSubline,
  premiumHover = true,
  trimStartSeconds,
  loading = "lazy",
  poster,
}: {
  src: string;
  className?: string;
  aspectClassName?: string;
  hoverTitle?: string;
  hoverSubline?: string;
  premiumHover?: boolean;
  trimStartSeconds?: number;
  loading?: "eager" | "lazy";
  poster?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const trim = trimStartSeconds ?? 0;
  const useTrim = trim > 0;
  const [trimVisible, setTrimVisible] = useState(!useTrim);
  const [loadVideo, setLoadVideo] = useState(loading === "eager");
  const [mediaReady, setMediaReady] = useState(false);

  useEffect(() => {
    if (loading === "eager") {
      setLoadVideo(true);
      return;
    }
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setLoadVideo(true);
      },
      { rootMargin: "240px 0px 240px 0px", threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [loading]);

  useEffect(() => {
    setMediaReady(false);
    setTrimVisible(!useTrim);
  }, [src, useTrim]);

  useEffect(() => {
    if (!loadVideo) return;
    const t = window.setTimeout(() => setMediaReady(true), 6000);
    return () => window.clearTimeout(t);
  }, [loadVideo, src]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || !loadVideo) return;

    const onVis = () => {
      void v.play().catch(() => undefined);
    };
    const wrap = containerRef.current;
    if (!wrap) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) onVis();
        else v.pause();
      },
      { rootMargin: "100px 0px", threshold: 0 },
    );
    io.observe(wrap);
    return () => io.disconnect();
  }, [loadVideo, src]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || !useTrim || !loadVideo) return;

    setTrimVisible(false);

    const applyTrim = () => {
      if (v.readyState >= 1 && v.currentTime < trim - 0.05) {
        v.currentTime = trim;
        void v.play().catch(() => undefined);
      }
    };

    const onSeeked = () => {
      if (Math.abs(v.currentTime - trim) < 0.2) {
        setTrimVisible(true);
      }
    };

    const onEnded = () => {
      v.currentTime = trim;
      void v.play().catch(() => undefined);
    };

    v.addEventListener("loadeddata", applyTrim);
    v.addEventListener("seeked", onSeeked);
    v.addEventListener("ended", onEnded);

    if (v.readyState >= 1) {
      applyTrim();
    }

    const failSafe = window.setTimeout(() => setTrimVisible(true), 1400);

    return () => {
      window.clearTimeout(failSafe);
      v.removeEventListener("loadeddata", applyTrim);
      v.removeEventListener("seeked", onSeeked);
      v.removeEventListener("ended", onEnded);
    };
  }, [src, trim, useTrim, loadVideo]);

  const videoShown =
    loadVideo && mediaReady && (!useTrim || trimVisible);
  const hasOverlay = Boolean(hoverTitle || hoverSubline);

  return (
    <div
      ref={containerRef}
      className={`group overflow-hidden rounded-[1.25rem] bg-black/[0.06] ${
        premiumHover
          ? "shadow-md shadow-black/[0.08] ring-1 ring-white/30 transition-[box-shadow,transform] duration-[420ms] ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:duration-200 hover:z-[1] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/15 hover:ring-white/45"
          : "ring-1 ring-white/25"
      } ${className}`}
    >
      <div className={`relative w-full overflow-hidden ${aspectClassName}`}>
        <div
          className={`media-skeleton-layer pointer-events-none absolute inset-0 z-[1] flex flex-col justify-center gap-2.5 p-5 transition-opacity duration-500 ease-out motion-reduce:duration-200 motion-reduce:transition-opacity ${
            videoShown ? "opacity-0" : "opacity-100"
          }`}
          aria-hidden
        >
          <div className="media-skeleton-bar h-[42%] max-h-[48%] min-h-[3rem] w-full rounded-[0.65rem] rounded-t-[0.85rem]" />
          <div className="media-skeleton-bar h-2.5 w-[55%] rounded-full" />
          <div className="media-skeleton-bar h-2 w-[40%] rounded-full opacity-70" />
        </div>

        {loadVideo ? (
          <video
            ref={videoRef}
            poster={poster}
            autoPlay
            loop={!useTrim}
            muted
            playsInline
            preload="auto"
            tabIndex={-1}
            onPlaying={() => setMediaReady(true)}
            onCanPlay={() => setMediaReady(true)}
            className={`pointer-events-none absolute inset-0 z-0 h-full w-full select-none object-cover object-center ${
              videoShown ? "opacity-100" : "opacity-0"
            } ${
              premiumHover
                ? "transition-[opacity,transform] duration-[600ms] ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none group-hover:scale-[1.02]"
                : "transition-opacity duration-500 ease-out motion-reduce:duration-200"
            }`}
            aria-hidden
          >
            <source src={src} type="video/mp4" />
          </video>
        ) : null}

        {hasOverlay && loadVideo && videoShown ? (
          <div
            className="pointer-events-none absolute inset-0 z-[2] hidden flex-col justify-end bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 opacity-0 transition-[opacity,transform] duration-[380ms] ease-[cubic-bezier(0.32,0.72,0,1)] md:flex md:translate-y-1 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
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
        ) : null}
      </div>
    </div>
  );
}
