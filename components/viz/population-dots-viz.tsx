import { VizFrame } from "./viz-frame";

const pts = Array.from({ length: 72 }, (_, i) => ({
  x: 20 + (i % 12) * 14 + (i % 3) * 2,
  y: 16 + Math.floor(i / 12) * 9 + (i % 5),
  o: 0.15 + (i % 7) * 0.06,
}));

/** Dotted density / population-style field. */
export function PopulationDotsViz() {
  return (
    <VizFrame>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 200 72"
        preserveAspectRatio="xMidYMid meet"
      >
        <rect
          x="14"
          y="10"
          width="172"
          height="52"
          rx="8"
          fill="rgba(255,255,255,0.25)"
          stroke="rgba(200,210,225,0.35)"
          strokeWidth="0.5"
        />
        {pts.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="1.2"
            fill="var(--app-primary)"
            opacity={p.o}
          />
        ))}
      </svg>
    </VizFrame>
  );
}
