import { VizFrame } from "./viz-frame";

/** Axes + faint Cartesian grid — calendar / metric backdrop. */
export function CoordinateGridViz() {
  return (
    <VizFrame>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 200 72"
        preserveAspectRatio="xMidYMid meet"
      >
        <line
          x1="24"
          y1="56"
          x2="184"
          y2="56"
          stroke="rgba(60, 80, 120, 0.35)"
          strokeWidth="0.75"
        />
        <line
          x1="32"
          y1="16"
          x2="32"
          y2="56"
          stroke="rgba(60, 80, 120, 0.35)"
          strokeWidth="0.75"
        />
        {Array.from({ length: 8 }).map((_, i) => (
          <line
            key={`gx-${i}`}
            x1={40 + i * 18}
            y1="20"
            x2={40 + i * 18}
            y2="54"
            stroke="rgba(100, 120, 160, 0.12)"
            strokeWidth="0.4"
          />
        ))}
        {Array.from({ length: 5 }).map((_, i) => (
          <line
            key={`gy-${i}`}
            x1="36"
            y1={22 + i * 8}
            x2="176"
            y2={22 + i * 8}
            stroke="rgba(100, 120, 160, 0.1)"
            strokeWidth="0.4"
          />
        ))}
        {[40, 72, 104, 136, 168].map((x, i) => (
          <line
            key={`t-${i}`}
            x1={x}
            y1="54"
            x2={x}
            y2="58"
            stroke="rgba(60, 80, 120, 0.3)"
            strokeWidth="0.5"
          />
        ))}
      </svg>
    </VizFrame>
  );
}
