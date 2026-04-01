import { VizFrame } from "./viz-frame";

/** Minimal white isometric city — dense blocks, soft depth. */
export function IsometricCityViz({ tall }: { tall?: boolean }) {
  return (
    <VizFrame className={tall ? "!h-[7rem]" : ""}>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 200 112"
        preserveAspectRatio="xMidYMid meet"
      >
        <polygon
          points="100,18 188,58 100,98 12,58"
          fill="rgba(59,108,255,0.04)"
          stroke="rgba(180,190,210,0.35)"
          strokeWidth="0.5"
        />
        <g stroke="rgba(200,205,220,0.45)" strokeWidth="0.55" fill="rgba(255,255,255,0.44)">
          <path d="M 52 48 L 68 40 L 84 48 L 68 56 Z" />
          <path d="M 84 48 L 84 62 L 68 70 L 68 56 Z" fill="rgba(255,255,255,0.42)" />
          <path d="M 84 48 L 100 40 L 116 48 L 100 56 Z" />
          <path d="M 116 48 L 116 68 L 100 76 L 100 56 Z" fill="rgba(255,255,255,0.38)" />
          <path d="M 68 56 L 100 44 L 132 56 L 100 68 Z" />
          <path d="M 132 56 L 132 78 L 100 90 L 100 68 Z" fill="rgba(250,250,252,0.45)" />
          <path d="M 100 44 L 132 56 L 148 48 L 116 36 Z" />
          <path d="M 148 48 L 148 72 L 132 80 L 132 56 Z" fill="rgba(255,255,255,0.4)" />
          <path d="M 36 56 L 52 48 L 68 56 L 52 64 Z" />
          <path d="M 68 56 L 68 74 L 52 82 L 52 64 Z" fill="rgba(248,249,252,0.42)" />
          <path d="M 116 36 L 148 48 L 164 40 L 132 28 Z" />
          <path d="M 164 40 L 164 64 L 148 72 L 148 48 Z" fill="rgba(255,255,255,0.36)" />
        </g>
        <g fill="rgba(59,108,255,0.12)" stroke="rgba(59,108,255,0.15)" strokeWidth="0.35">
          <rect x="58" y="44" width="4" height="3" rx="0.5" />
          <rect x="92" y="50" width="4" height="3" rx="0.5" />
          <rect x="124" y="54" width="4" height="3" rx="0.5" />
          <rect x="108" y="58" width="4" height="3" rx="0.5" />
        </g>
      </svg>
    </VizFrame>
  );
}
