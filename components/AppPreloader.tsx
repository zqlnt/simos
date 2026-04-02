"use client";

import { useEffect, useState } from "react";

type Phase = "loading" | "exit" | "done";

/**
 * Full-viewport splash while the document (and fonts) settle — then a soft
 * fade/scale exit. Keeps the shell mounted underneath; no layout removal.
 */
export function AppPreloader() {
  const [phase, setPhase] = useState<Phase>("loading");

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
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-busy={phase === "loading"}
      aria-label="Loading"
      className={`app-preloader fixed inset-0 z-[250] flex flex-col items-center justify-center bg-[var(--background)] will-change-[opacity,transform] motion-reduce:transition-opacity motion-reduce:duration-300 motion-reduce:ease-out ${
        phase === "exit"
          ? "pointer-events-none opacity-0 motion-reduce:scale-100 scale-[0.96]"
          : "opacity-100 scale-100"
      } transition-[opacity,transform] duration-[520ms] ease-[cubic-bezier(0.32,0.72,0,1)]`}
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <div className="app-preloader-orb absolute -left-[20%] top-[18%] h-[min(55vw,420px)] w-[min(55vw,420px)] rounded-full bg-gradient-to-br from-[var(--app-primary)]/[0.09] via-transparent to-transparent blur-3xl" />
        <div className="app-preloader-orb-delay absolute -right-[15%] bottom-[12%] h-[min(48vw,360px)] w-[min(48vw,360px)] rounded-full bg-gradient-to-tl from-fuchsia-400/[0.06] via-transparent to-transparent blur-3xl" />
      </div>

      <div className="relative flex flex-col items-center gap-6 px-8">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-[1.35rem] bg-white/70 shadow-lg shadow-black/[0.06] ring-1 ring-white/80 backdrop-blur-md transition-transform duration-700 ease-[cubic-bezier(0.34,1.28,0.64,1)] ${
            phase === "exit" ? "scale-90" : "scale-100"
          }`}
        >
          <span className="text-lg font-semibold tracking-tight text-[var(--foreground)]">
            Sim
          </span>
        </div>

        <div className="flex w-[min(200px,55vw)] flex-col items-center gap-3">
          <div className="h-1 w-full overflow-hidden rounded-full bg-black/[0.06] ring-1 ring-white/40">
            <div
              className="app-preloader-bar h-full w-[42%] rounded-full bg-gradient-to-r from-[var(--app-primary)]/90 to-[var(--app-primary)]/50"
              aria-hidden
            />
          </div>
          <p className="text-center text-[11px] font-medium uppercase tracking-[0.2em] text-gray-500">
            Preparing workspace
          </p>
        </div>
      </div>
    </div>
  );
}
