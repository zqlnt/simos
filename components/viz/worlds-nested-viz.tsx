import { VizFrame } from "./viz-frame";

/** Nested frames — 4D “worlds within worlds” hint. */
export function WorldsNestedViz() {
  return (
    <VizFrame>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 200 72"
        preserveAspectRatio="xMidYMid meet"
      >
        <g fill="none" strokeLinecap="round">
          <rect
            x="28"
            y="14"
            width="144"
            height="44"
            rx="6"
            stroke="rgba(59, 108, 255, 0.22)"
            strokeWidth="1"
          />
          <rect
            x="44"
            y="22"
            width="112"
            height="28"
            rx="5"
            stroke="rgba(59, 108, 255, 0.32)"
            strokeWidth="0.85"
          />
          <rect
            x="60"
            y="30"
            width="80"
            height="12"
            rx="4"
            stroke="rgba(59, 108, 255, 0.45)"
            strokeWidth="0.75"
          />
          <circle cx="100" cy="36" r="4" fill="rgba(59,108,255,0.08)" stroke="rgba(59,108,255,0.35)" strokeWidth="0.6" />
        </g>
        <text
          x="100"
          y="66"
          textAnchor="middle"
          fill="rgba(100,110,130,0.5)"
          fontSize="5.5"
          fontFamily="system-ui, sans-serif"
        >
          4D · nested worlds
        </text>
      </svg>
    </VizFrame>
  );
}
