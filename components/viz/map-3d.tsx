import { VizFrame } from "./viz-frame";

/** Isometric-style depth grid + markers — spatial / map hint without noisy 3D. */
export function Map3DViz() {
  return (
    <VizFrame>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 200 72"
        preserveAspectRatio="xMidYMid meet"
      >
        <g opacity="0.45">
          <path
            d="M 20 52 L 100 28 L 180 52"
            fill="none"
            stroke="rgba(59, 108, 255, 0.35)"
            strokeWidth="0.6"
          />
          {Array.from({ length: 6 }).map((_, i) => (
            <path
              key={`g-${i}`}
              d={`M ${20 + i * 14} ${52 - i * 2.5} L ${100 + i * 7} ${28 - i * 1.2} L ${180 - i * 2} ${52 - i * 2.5}`}
              fill="none"
              stroke="rgba(100, 120, 160, 0.2)"
              strokeWidth="0.45"
            />
          ))}
        </g>
        <polygon
          points="100,28 180,52 100,58 20,52"
          fill="rgba(59, 108, 255, 0.06)"
          stroke="rgba(59, 108, 255, 0.25)"
          strokeWidth="0.6"
        />
        <circle cx="118" cy="42" r="2.5" fill="rgba(59, 108, 255, 0.55)" />
        <circle cx="88" cy="48" r="2" fill="rgba(120, 100, 200, 0.45)" />
        <circle cx="132" cy="50" r="1.5" fill="rgba(59, 108, 255, 0.4)" />
      </svg>
    </VizFrame>
  );
}
