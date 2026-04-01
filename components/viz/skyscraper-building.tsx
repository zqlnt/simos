import { VizFrame } from "./viz-frame";

const floors = [
  { label: "Labs", y: 8 },
  { label: "Product", y: 22 },
  { label: "Finance", y: 36 },
  { label: "Ops", y: 50 },
];

/** Vertical “skyscraper” stack — divisions as floors with subtle windows. */
export function SkyscraperBuildingViz() {
  return (
    <VizFrame className="!h-[7rem]">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 200 112"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M 72 8 L 128 8 L 138 100 L 62 100 Z"
          fill="rgba(255,255,255,0.38)"
          stroke="rgba(59, 108, 255, 0.25)"
          strokeWidth="0.75"
        />
        <path
          d="M 128 8 L 168 24 L 158 104 L 138 100 Z"
          fill="rgba(59, 108, 255, 0.06)"
          stroke="rgba(59, 108, 255, 0.2)"
          strokeWidth="0.6"
        />
        {floors.map((f) => (
          <g key={f.label}>
            <line
              x1="78"
              y1={f.y + 6}
              x2="128"
              y2={f.y + 6}
              stroke="rgba(59, 108, 255, 0.18)"
              strokeWidth="0.5"
            />
            {[0, 1, 2, 3].map((j) => (
              <rect
                key={j}
                x={84 + j * 10}
                y={f.y}
                width="6"
                height="5"
                rx="0.5"
                fill="rgba(59, 108, 255, 0.12)"
                stroke="rgba(255,255,255,0.35)"
                strokeWidth="0.35"
              />
            ))}
          </g>
        ))}
      </svg>
    </VizFrame>
  );
}
