"use client";

import { useEffect, useRef, useState } from "react";
import { SimLogo } from "@/components/SimLogo";
import { PRELOADER_LOOP_VIDEO_SRC } from "@/lib/preloader-assets";

type Phase = "loading" | "exit" | "done";

/**
 * Full-viewport splash: looping video + liquid glass panel while the document
 * (and fonts) settle — then a soft fade/scale exit.
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
          ? "pointer-events-none opacity-0 motion-reduce:scale-100 scale-[0.97]"
          : "opacity-100 scale-100"
      } transition-[opacity,transform] duration-[520ms] ease-[cubic-bezier(0.32,0.72,0,1)]`}
    >
      {/* Reduced-motion: soft gradient stand-in (no video motion) */}
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

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-black/25 motion-reduce:from-black/20 motion-reduce:via-transparent motion-reduce:to-black/15"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_45%,transparent_0%,rgba(0,0,0,0.35)_100%)] motion-reduce:opacity-60"
        aria-hidden
      />

      <div className="relative z-10 flex max-w-[min(92vw,420px)] flex-col items-center px-6">
        <div
          className={`glass-panel app-preloader-glass pointer-events-none flex w-full flex-col items-center gap-4 px-10 py-9 text-center shadow-2xl shadow-black/20 transition-transform duration-700 ease-[cubic-bezier(0.34,1.28,0.64,1)] ${
            phase === "exit" ? "scale-[0.96]" : "scale-100"
          }`}
        >
          <SimLogo
            width={152}
            height={52}
            priority
            centered
            className="justify-center"
            alt="Sim"
          />
          <p className="text-[15px] font-semibold tracking-[-0.02em] text-[var(--foreground)] sm:text-base">
            Simulating Sim
          </p>
        </div>
      </div>
    </div>
  );
}
