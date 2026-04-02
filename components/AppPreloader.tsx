"use client";

import { useEffect, useRef, useState } from "react";
import { SimLogo } from "@/components/SimLogo";
import { PRELOADER_LOOP_VIDEO_SRC } from "@/lib/preloader-assets";

type Phase = "loading" | "exit" | "done";

/**
 * Full-viewport splash: looping video + frosted squircle, light edge fades and blur
 * (no dark vignette) — then a soft fade exit.
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

  const edgeFrom = "from-[var(--background)]";
  const edgeVia = "via-[var(--background)]/45";

  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy={phase === "loading"}
      aria-label="Simulating Sim"
      className={`app-preloader fixed inset-0 z-[250] flex flex-col items-center justify-center overflow-hidden bg-[var(--background)] will-change-[opacity,transform] motion-reduce:transition-opacity motion-reduce:duration-300 motion-reduce:ease-out ${
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
        className="app-preloader-video pointer-events-none absolute inset-0 z-0 h-full w-full object-cover motion-reduce:hidden"
        src={PRELOADER_LOOP_VIDEO_SRC}
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        aria-hidden
      />

      {/* Light frosted veil — blur only, no darkening */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-white/25 backdrop-blur-md motion-reduce:backdrop-blur-sm sm:bg-white/20 sm:backdrop-blur-lg"
        aria-hidden
      />

      {/* White → transparent at edges (top, bottom, sides) */}
      <div className="pointer-events-none absolute inset-0 z-[2]" aria-hidden>
        <div
          className={`absolute inset-x-0 top-0 h-[min(28vh,200px)] bg-gradient-to-b ${edgeFrom} ${edgeVia} to-transparent`}
        />
        <div
          className={`absolute inset-x-0 bottom-0 h-[min(28vh,200px)] bg-gradient-to-t ${edgeFrom} ${edgeVia} to-transparent`}
        />
        <div
          className={`absolute inset-y-0 left-0 w-[min(22vw,120px)] bg-gradient-to-r ${edgeFrom} ${edgeVia} to-transparent`}
        />
        <div
          className={`absolute inset-y-0 right-0 w-[min(22vw,120px)] bg-gradient-to-l ${edgeFrom} ${edgeVia} to-transparent`}
        />
      </div>

      <div className="relative z-10 flex max-w-[min(92vw,380px)] flex-col items-center gap-7 px-6">
        <div
          className={`relative flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.34,1.28,0.64,1)] ${
            phase === "exit" ? "scale-[0.97]" : "scale-100"
          }`}
        >
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
          <p className="text-center text-[15px] font-medium tracking-[-0.02em] text-[var(--foreground)] sm:text-base">
            Simulating Sim
          </p>
          <div className="flex w-[min(200px,52vw)] flex-col gap-2">
            <div className="h-[3px] w-full overflow-hidden rounded-full bg-black/[0.08]">
              <div
                className="app-preloader-bar h-full w-[38%] rounded-full bg-[var(--app-primary)]/90"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
