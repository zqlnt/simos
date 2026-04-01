import { VizFrame } from "./viz-frame";

/** Deterministic pseudo-random 8-bit style cells for a calm “raster” readout. */
const cols = 24;
const rows = 7;
function cellOn(ci: number, ri: number) {
  const v = Math.sin(ci * 0.7 + ri * 1.3) * Math.cos(ri * 0.5);
  return v > 0.15 || (ci + ri) % 11 === 0;
}

/** Pixel / dot-matrix plot — refined, not chunky game UI. */
export function PixelPlotViz() {
  const cw = 180 / cols;
  const ch = 56 / rows;
  return (
    <VizFrame>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 200 72"
        preserveAspectRatio="xMidYMid meet"
      >
        {Array.from({ length: rows }).flatMap((_, ri) =>
          Array.from({ length: cols }).map((_, ci) => {
            const on = cellOn(ci, ri);
            return (
              <rect
                key={`${ci}-${ri}`}
                x={10 + ci * cw}
                y={10 + ri * ch}
                width={cw - 1.2}
                height={ch - 1.2}
                rx="0.5"
                fill={
                  on
                    ? "rgba(59, 108, 255, 0.35)"
                    : "rgba(120, 140, 180, 0.06)"
                }
              />
            );
          }),
        )}
      </svg>
    </VizFrame>
  );
}
