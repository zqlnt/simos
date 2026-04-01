"use client";

import { useId, useState, type ReactNode } from "react";
import { Maximize2, Minimize2 } from "lucide-react";

/**
 * Wraps a bento panel — optional fullscreen for focus; reserves future dynamic sizing hooks.
 */
export function PanelExpandable({
  children,
  className = "",
  title,
}: {
  children: ReactNode;
  className?: string;
  title?: string;
}) {
  const [fullscreen, setFullscreen] = useState(false);
  const labelId = useId();

  return (
    <>
      <article
        className={`glass-kpi relative overflow-hidden rounded-[1.5rem] ${fullscreen ? "panel-fullscreen glass-kpi !rounded-[var(--shell-radius)]" : ""} ${className}`}
        aria-labelledby={title ? labelId : undefined}
      >
        <div className="absolute right-3 top-3 z-20 flex gap-1">
          <button
            type="button"
            onClick={() => setFullscreen((f) => !f)}
            className="glass-btn flex h-8 w-8 items-center justify-center rounded-full p-0 text-gray-500 hover:text-gray-800"
            aria-label={fullscreen ? "Exit fullscreen" : "Fullscreen panel"}
            title={fullscreen ? "Exit fullscreen" : "Fullscreen"}
          >
            {fullscreen ? (
              <Minimize2 className="h-3.5 w-3.5" strokeWidth={2} />
            ) : (
              <Maximize2 className="h-3.5 w-3.5" strokeWidth={2} />
            )}
          </button>
        </div>
        {title ? (
          <p id={labelId} className="sr-only">
            {title}
          </p>
        ) : null}
        <div className="relative pt-11">{children}</div>
      </article>
    </>
  );
}
