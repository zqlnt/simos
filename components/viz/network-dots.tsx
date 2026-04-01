import { VizFrame } from "./viz-frame";

const pts = [
  { x: 28, y: 24 },
  { x: 52, y: 44 },
  { x: 78, y: 22 },
  { x: 102, y: 48 },
  { x: 128, y: 28 },
  { x: 154, y: 42 },
  { x: 176, y: 24 },
];

const links: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [2, 5],
  [0, 3],
  [5, 6],
];

/** Dotted node–link topology. */
export function NetworkDotsViz() {
  return (
    <VizFrame>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 200 72"
        preserveAspectRatio="xMidYMid meet"
      >
        {links.map(([a, b], i) => {
          const A = pts[a];
          const B = pts[b];
          return (
            <line
              key={i}
              x1={A.x}
              y1={A.y}
              x2={B.x}
              y2={B.y}
              stroke="rgba(100, 120, 160, 0.35)"
              strokeWidth="0.6"
              strokeDasharray="2 4"
            />
          );
        })}
        {pts.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="2.25"
            fill="var(--app-primary)"
            opacity="0.55"
            className="drop-shadow-[0_0_3px_rgba(59,108,255,0.35)]"
          />
        ))}
      </svg>
    </VizFrame>
  );
}
