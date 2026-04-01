import { VizFrame } from "./viz-frame";

/** Stacked 3D file cards — isometric depth. */
export function FileStack3DViz() {
  return (
    <VizFrame>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 200 72"
        preserveAspectRatio="xMidYMid meet"
      >
        <g opacity="0.95">
          <path
            d="M 48 48 L 108 28 L 152 48 L 92 58 Z"
            fill="rgba(255,255,255,0.45)"
            stroke="rgba(59, 108, 255, 0.2)"
            strokeWidth="0.5"
          />
          <path
            d="M 52 40 L 112 20 L 156 40 L 96 50 Z"
            fill="rgba(255,255,255,0.55)"
            stroke="rgba(59, 108, 255, 0.28)"
            strokeWidth="0.55"
          />
          <path
            d="M 56 32 L 116 12 L 160 32 L 100 42 Z"
            fill="rgba(255,255,255,0.65)"
            stroke="rgba(59, 108, 255, 0.32)"
            strokeWidth="0.6"
          />
          <line
            x1="68"
            y1="22"
            x2="140"
            y2="22"
            stroke="rgba(59, 108, 255, 0.15)"
            strokeWidth="0.4"
          />
          <line
            x1="68"
            y1="26"
            x2="120"
            y2="26"
            stroke="rgba(100,120,160,0.2)"
            strokeWidth="0.35"
          />
        </g>
      </svg>
    </VizFrame>
  );
}
