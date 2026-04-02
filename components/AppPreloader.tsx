"use client";

import { useEffect, useRef, useState } from "react";
import { SimLogo } from "@/components/SimLogo";
import { PRELOADER_LOOP_VIDEO_SRC } from "@/lib/preloader-assets";

type Phase = "loading" | "exit" | "done";

/**
 * Full-viewport splash: looping video + single frosted squircle (concentric radii)
 * and minimal copy — then a soft fade exit.
 */
export function AppPreloader() {
  const [phase, setPhase] = useState<Phase>("loading");
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const play = () => {
      const p = v.play();
      if (p !== undefined && typeof p.catch === "function") {
        p.catch(() => undefined);
      }
    };
    play();
    v.addEventListener("loadeddata", play, { once: true });
    return () => v.removeEventListener("loadeddata", play);
  }, []);

  useEffect(() => {
    const minMs = 580;
    const maxMs = 3600;
    const t0 = Date.now();
    let cancelled = false;

    const loadPromise = new Promise<void>((resolve) => {
      if (document.readyState === "complete") {
        resolve();
        return;
      }
      window.addEventListener("load", () => resolve(), { once: true });
    });

    const run = async () => {
      try {
        await Promise.race([
          Promise.all([
            loadPromise,
            document.fonts.ready.catch(() => undefined),
          ]),
          new Promise<void>((r) => setTimeout(r, maxMs)),
        ]);
      } finally {
        if (cancelled) return;
        const elapsed = Date.now() - t0;
        const rest = Math.max(0, minMs - elapsed);
        await new Promise((r) => setTimeout(r, rest));
        if (!cancelled) setPhase("exit");
      }
    };

    void run();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (phase !== "exit") return;
    const id = window.setTimeout(() => {
      setPhase("done");
      document.documentElement.setAttribute("data-app-ready", "true");
    }, 520);
    return () => window.clearTimeout(id);
  }, [phase]);

  useEffect(() => {
    if (phase === "done") return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy={phase === "loading"}
      aria-label="Simulating Sim"
      className={`app-preloader fixed inset-0 z-[250] flex flex-col items-center justify-center overflow-hidden bg-black will-change-[opacity,transform] motion-reduce:transition-opacity motion-reduce:duration-300 motion-reduce:ease-out ${
        phase === "exit"
          ? "pointer-events-none opacity-0 motion-reduce:scale-100 scale-[0.985]"
          : "opacity-100 scale-100"
      } transition-[opacity,transform] duration-[520ms] ease-[cubic-bezier(0.32,0.72,0,1)]`}
    >
      <div
        className="app-preloader-motion-fallback pointer-events-none absolute inset-0 hidden bg-[var(--background)] motion-reduce:block"
        aria-hidden
      />
      <div
        className="app-preloader-motion-fallback pointer-events-none absolute inset-0 hidden motion-reduce:block"
        aria-hidden
      >
        <div className="app-preloader-orb absolute -left-[20%] top-[18%] h-[min(55vw,420px)] w-[min(55vw,420px)] rounded-full bg-gradient-to-br from-[var(--app-primary)]/[0.12] via-transparent to-transparent blur-3xl" />
        <div className="app-preloader-orb-delay absolute -right-[15%] bottom-[12%] h-[min(48vw,360px)] w-[min(48vw,360px)] rounded-full bg-gradient-to-tl from-fuchsia-400/[0.08] via-transparent to-transparent blur-3xl" />
      </div>

      <video
        ref={videoRef}
        className="app-preloader-video pointer-events-none absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
        src={PRELOADER_LOOP_VIDEO_SRC}
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        aria-hidden
      />

      {/* Soft full-screen haze — single blur layer, no nested cards */}
      <div
        className="pointer-events-none absolute inset-0 bg-black/30 backdrop-blur-[2px] motion-reduce:backdrop-blur-none"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-black/15 to-black/45 motion-reduce:from-black/15 motion-reduce:via-black/10 motion-reduce:to-black/25"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_65%_at_50%_42%,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.42)_100%)] motion-reduce:opacity-70"
        aria-hidden
      />

      <div className="relative z-10 flex max-w-[min(92vw,380px)] flex-col items-center gap-7 px-6">
        {/* Concentric squircle: outer halo + inner icon — same 22% corner geometry */}
        <div
          className={`app-preloader-icon-stack relative flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.34,1.28,0.64,1)] ${
            phase === "exit" ? "scale-[0.97]" : "scale-100"
          }`}
        >
          <div className="app-preloader-icon-halo pointer-events-none absolute inset-[-10px] sm:inset-[-12px]" aria-hidden />
          <div className="app-preloader-icon-squircle relative z-[1] flex h-[min(7.25rem,26vw)] w-[min(7.25rem,26vw)] max-h-[120px] max-w-[120px] items-center justify-center p-[0.65rem] sm:h-[7.5rem] sm:w-[7.5rem] sm:max-h-[120px] sm:max-w-[120px]">
            <SimLogo
              width={92}
              height={32}
              priority
              centered
              className="relative z-[2] justify-center [&_img]:max-h-[2.35rem] sm:[&_img]:max-h-[2.5rem]"
              alt="Sim"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <p className="text-center text-[15px] font-medium tracking-[-0.02em] text-white/92 drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] sm:text-base">
            Simulating Sim
          </p>
          <div className="flex w-[min(200px,52vw)] flex-col gap-2">
            <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/12">
              <div className="app-preloader-bar h-full w-[38%] rounded-full bg-white/75" aria-hidden />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
