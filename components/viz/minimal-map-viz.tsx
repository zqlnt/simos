import { VizFrame } from "./viz-frame";

/** Light map plate with accent roads and markers — future white 3D city compatible. */
export function MinimalMapViz() {
  return (
    <VizFrame>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 200 72"
        preserveAspectRatio="xMidYMid meet"
      >
        <rect
          x="12"
          y="10"
          width="176"
          height="52"
          rx="6"
          fill="rgba(255,255,255,0.55)"
          stroke="rgba(200,210,225,0.5)"
          strokeWidth="0.6"
        />
        <path
          d="M 30 50 Q 80 28 120 42 T 175 24"
          fill="none"
          stroke="rgba(59, 108, 255, 0.35)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M 40 18 L 40 58 M 155 20 L 100 58"
          stroke="rgba(180, 195, 220, 0.45)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <circle
          cx="118"
          cy="36"
          r="4"
          fill="rgba(59, 108, 255, 0.55)"
          className="drop-shadow-[0_0_6px_rgba(59,108,255,0.45)]"
        />
        <circle cx="72" cy="44" r="2.5" fill="rgba(120, 140, 180, 0.5)" />
      </svg>
    </VizFrame>
  );
}
