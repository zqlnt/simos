import { VizFrame } from "./viz-frame";

/** Wireframe box + blueprint-style guides. */
export function CadGridViz() {
  return (
    <VizFrame>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 200 72"
        preserveAspectRatio="xMidYMid meet"
      >
        <g stroke="rgba(59, 108, 255, 0.28)" strokeWidth="0.65" fill="none">
          <path d="M 48 52 L 100 24 L 152 52 L 100 56 Z" opacity="0.9" />
          <path d="M 48 52 L 100 44 L 152 52" opacity="0.5" />
          <path d="M 100 24 L 100 56" opacity="0.45" strokeDasharray="3 3" />
        </g>
        <line
          x1="24"
          y1="58"
          x2="176"
          y2="58"
          stroke="rgba(100, 120, 160, 0.25)"
          strokeWidth="0.5"
          strokeDasharray="4 3"
        />
        <line
          x1="32"
          y1="16"
          x2="32"
          y2="60"
          stroke="rgba(100, 120, 160, 0.2)"
          strokeWidth="0.45"
          strokeDasharray="2 3"
        />
        <circle cx="100" cy="40" r="1.8" fill="rgba(59, 108, 255, 0.5)" />
      </svg>
    </VizFrame>
  );
}
