import { VizFrame } from "./viz-frame";

const bars = [28, 42, 35, 58, 44, 62, 38, 50];

export function BarChartViz() {
  return (
    <VizFrame>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 200 72"
        preserveAspectRatio="xMidYMid meet"
      >
        {Array.from({ length: 9 }).map((_, i) => (
          <line
            key={i}
            x1="16"
            y1={12 + i * 7}
            x2="188"
            y2={12 + i * 7}
            stroke="rgba(100, 120, 160, 0.1)"
            strokeWidth="0.4"
          />
        ))}
        {bars.map((h, i) => (
          <rect
            key={i}
            x={22 + i * 20}
            y={64 - h * 0.65}
            width="12"
            height={h * 0.65}
            rx="2"
            fill="rgba(59, 108, 255, 0.35)"
            stroke="rgba(59, 108, 255, 0.25)"
            strokeWidth="0.4"
          />
        ))}
      </svg>
    </VizFrame>
  );
}
