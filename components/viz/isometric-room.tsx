import { VizFrame } from "./viz-frame";

/** Isometric room shell — floor + back walls, minimal. */
export function IsometricRoomViz() {
  return (
    <VizFrame>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 200 72"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M 40 56 L 100 20 L 160 56 L 100 64 Z"
          fill="rgba(59, 108, 255, 0.09)"
          stroke="rgba(59, 108, 255, 0.25)"
          strokeWidth="0.65"
        />
        <path
          d="M 40 56 L 100 20 L 100 56 Z"
          fill="rgba(255,255,255,0.25)"
          stroke="rgba(59, 108, 255, 0.2)"
          strokeWidth="0.6"
        />
        <path
          d="M 100 20 L 160 56 L 100 56 Z"
          fill="rgba(200,210,235,0.15)"
          stroke="rgba(59, 108, 255, 0.25)"
          strokeWidth="0.6"
        />
        <circle cx="100" cy="40" r="2" fill="rgba(59, 108, 255, 0.45)" />
      </svg>
    </VizFrame>
  );
}
