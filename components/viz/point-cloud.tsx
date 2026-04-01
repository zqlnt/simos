import { VizFrame } from "./viz-frame";

const n = 48;
const pts = Array.from({ length: n }, (_, i) => {
  const a = i * 2.39996;
  const r = 28 + (i % 7) * 3.2;
  return {
    x: 100 + Math.cos(a) * r * 0.55 + (i % 5) * 2,
    y: 36 + Math.sin(a * 1.1) * r * 0.35 + (i % 3),
    s: 0.9 + (i % 4) * 0.25,
    o: 0.2 + (i % 6) * 0.08,
  };
});

/** Sparse point cloud / simulation nodes. */
export function PointCloudViz() {
  return (
    <VizFrame>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 200 72"
        preserveAspectRatio="xMidYMid meet"
      >
        {pts.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={p.s}
            fill="var(--app-primary)"
            opacity={p.o}
            className="drop-shadow-[0_0_2px_rgba(59,108,255,0.2)]"
          />
        ))}
      </svg>
    </VizFrame>
  );
}
