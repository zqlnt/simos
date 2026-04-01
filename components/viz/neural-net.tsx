import { VizFrame } from "./viz-frame";

const nodes: { x: number; y: number; r: number }[] = [
  { x: 24, y: 36, r: 3 },
  { x: 24, y: 20, r: 2.5 },
  { x: 24, y: 52, r: 2.5 },
  { x: 72, y: 28, r: 3.5 },
  { x: 72, y: 44, r: 3.5 },
  { x: 120, y: 32, r: 4 },
  { x: 120, y: 48, r: 3 },
  { x: 168, y: 36, r: 3.5 },
];

const edges: [number, number][] = [
  [0, 3],
  [0, 4],
  [1, 3],
  [2, 4],
  [3, 5],
  [3, 6],
  [4, 5],
  [4, 6],
  [5, 7],
  [6, 7],
];

/** Layered nodes with thin edges — neural / graph topology hint. */
export function NeuralNetViz() {
  return (
    <VizFrame>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 200 72"
        preserveAspectRatio="xMidYMid meet"
      >
        {edges.map(([a, b], i) => {
          const A = nodes[a];
          const B = nodes[b];
          return (
            <line
              key={i}
              x1={A.x}
              y1={A.y}
              x2={B.x}
              y2={B.y}
              stroke="rgba(59, 108, 255, 0.22)"
              strokeWidth="0.75"
            />
          );
        })}
        {nodes.map((n, i) => (
          <g key={i}>
            <circle
              cx={n.x}
              cy={n.y}
              r={n.r + 1.5}
              fill="rgba(59, 108, 255, 0.08)"
            />
            <circle
              cx={n.x}
              cy={n.y}
              r={n.r}
              fill="rgba(255,255,255,0.85)"
              stroke="rgba(59, 108, 255, 0.45)"
              strokeWidth="0.75"
            />
          </g>
        ))}
      </svg>
    </VizFrame>
  );
}
