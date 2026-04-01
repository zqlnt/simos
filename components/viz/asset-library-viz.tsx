import { VizFrame } from "./viz-frame";

/** 3D asset shelf — thumbnails and primitive silhouettes. */
export function AssetLibraryViz() {
  return (
    <VizFrame>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 200 72"
        preserveAspectRatio="xMidYMid meet"
      >
        <g stroke="rgba(59, 108, 255, 0.2)" strokeWidth="0.45" fill="rgba(255,255,255,0.35)">
          <rect x="18" y="22" width="28" height="32" rx="2" />
          <rect x="52" y="18" width="28" height="36" rx="2" />
          <rect x="86" y="24" width="28" height="30" rx="2" />
          <rect x="120" y="20" width="28" height="34" rx="2" />
          <rect x="154" y="26" width="28" height="28" rx="2" />
        </g>
        <g stroke="rgba(59, 108, 255, 0.35)" strokeWidth="0.5" fill="none">
          <path d="M 28 36 L 36 32 L 44 36 L 36 40 Z" />
          <path d="M 62 34 L 70 30 L 78 34 L 70 38 Z" />
          <path d="M 96 38 L 104 34 L 112 38 L 104 42 Z" />
        </g>
        <line
          x1="14"
          y1="56"
          x2="186"
          y2="56"
          stroke="rgba(100,120,160,0.2)"
          strokeWidth="0.4"
          strokeDasharray="3 2"
        />
        <text
          x="100"
          y="66"
          textAnchor="middle"
          fill="rgba(100,110,130,0.55)"
          fontSize="5.5"
          fontFamily="system-ui, sans-serif"
        >
          meshes · materials · rigs
        </text>
      </svg>
    </VizFrame>
  );
}
