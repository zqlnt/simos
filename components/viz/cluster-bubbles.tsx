import { VizFrame } from "./viz-frame";

const bubbles = [
  { cx: 48, cy: 38, r: 14, o: 0.12 },
  { cx: 102, cy: 32, r: 22, o: 0.1 },
  { cx: 148, cy: 44, r: 16, o: 0.11 },
  { cx: 78, cy: 52, r: 8, o: 0.15 },
  { cx: 128, cy: 18, r: 6, o: 0.14 },
  { cx: 24, cy: 28, r: 5, o: 0.13 },
];

/** Soft cluster / bubble map — grouped density. */
export function ClusterBubblesViz() {
  return (
    <VizFrame>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 200 72"
        preserveAspectRatio="xMidYMid meet"
      >
        {bubbles.map((b, i) => (
          <circle
            key={i}
            cx={b.cx}
            cy={b.cy}
            r={b.r}
            fill="var(--app-primary)"
            opacity={b.o}
            stroke="rgba(59, 108, 255, 0.2)"
            strokeWidth="0.5"
          />
        ))}
        {bubbles.map((b, i) => (
          <circle
            key={`d-${i}`}
            cx={b.cx}
            cy={b.cy}
            r="1.5"
            fill="rgba(59, 108, 255, 0.45)"
          />
        ))}
      </svg>
    </VizFrame>
  );
}
