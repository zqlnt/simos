import { VizFrame } from "./viz-frame";

const milestones = [18, 52, 88, 132, 168];

export function TimelineViz() {
  return (
    <VizFrame>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 200 72"
        preserveAspectRatio="xMidYMid meet"
      >
        <line
          x1="16"
          y1="40"
          x2="184"
          y2="40"
          stroke="rgba(59, 108, 255, 0.25)"
          strokeWidth="1"
        />
        {milestones.map((x, i) => (
          <g key={i}>
            <line
              x1={x}
              y1="34"
              x2={x}
              y2="46"
              stroke="rgba(59, 108, 255, 0.45)"
              strokeWidth="1.25"
            />
            <circle
              cx={x}
              cy="40"
              r="3.5"
              fill="rgba(255,255,255,0.9)"
              stroke="rgba(59, 108, 255, 0.5)"
              strokeWidth="0.75"
            />
          </g>
        ))}
      </svg>
    </VizFrame>
  );
}
