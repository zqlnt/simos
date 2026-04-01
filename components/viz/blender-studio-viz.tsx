import { VizFrame } from "./viz-frame";

/** CAD / Blender-style studio viewport — grid floor, HDRI wash, wireframe cube. */
export function BlenderStudioViz({ tall }: { tall?: boolean }) {
  const frameClass = tall
    ? "!h-[7.5rem] bg-gradient-to-b from-slate-600/30 via-slate-400/20 to-slate-300/25 ring-white/25"
    : "bg-gradient-to-b from-slate-600/30 via-slate-400/20 to-slate-300/25 ring-white/25";
  return (
    <VizFrame className={frameClass}>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 200 96"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="blender-floor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
            <stop offset="100%" stopColor="rgba(180,190,210,0.12)" />
          </linearGradient>
          <linearGradient id="blender-hdri" x1="0.5" y1="0" x2="0.5" y2="1">
            <stop offset="0%" stopColor="rgba(255,245,230,0.15)" />
            <stop offset="55%" stopColor="rgba(200,210,230,0.06)" />
            <stop offset="100%" stopColor="rgba(90,95,110,0.2)" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="200" height="96" fill="url(#blender-hdri)" />
        <ellipse cx="100" cy="78" rx="88" ry="22" fill="url(#blender-floor)" opacity="0.85" />
        <g stroke="rgba(255,255,255,0.22)" strokeWidth="0.4" fill="none">
          <line x1="24" y1="58" x2="16" y2="88" />
          <line x1="43" y1="58" x2="37" y2="88" />
          <line x1="62" y1="58" x2="58" y2="88" />
          <line x1="81" y1="58" x2="79" y2="88" />
          <line x1="100" y1="58" x2="100" y2="88" />
          <line x1="119" y1="58" x2="121" y2="88" />
          <line x1="138" y1="58" x2="142" y2="88" />
          <line x1="157" y1="58" x2="163" y2="88" />
          <line x1="176" y1="58" x2="184" y2="88" />
          <line x1="12" y1="62" x2="188" y2="66" opacity="0.5" />
          <line x1="12" y1="68" x2="188" y2="71" opacity="0.42" />
          <line x1="12" y1="74" x2="188" y2="76" opacity="0.34" />
          <line x1="12" y1="80" x2="188" y2="81" opacity="0.26" />
          <line x1="12" y1="86" x2="188" y2="86" opacity="0.18" />
        </g>
        <g
          stroke="rgba(200,220,255,0.55)"
          strokeWidth="0.65"
          fill="rgba(255,255,255,0.06)"
        >
          <path d="M 88 38 L 112 38 L 118 52 L 100 58 L 82 52 Z" />
          <path d="M 88 38 L 82 52 L 82 62 L 88 48 Z" fill="rgba(255,255,255,0.04)" />
          <path d="M 112 38 L 118 52 L 118 62 L 112 48 Z" fill="rgba(200,210,230,0.08)" />
          <path d="M 82 62 L 100 68 L 118 62 L 100 58 Z" fill="rgba(255,255,255,0.05)" />
        </g>
        <circle cx="100" cy="22" r="28" fill="rgba(255,230,200,0.06)" />
        <text
          x="100"
          y="14"
          textAnchor="middle"
          fill="rgba(255,255,255,0.35)"
          fontSize="6"
          fontFamily="system-ui, sans-serif"
        >
          studio · HDRI
        </text>
      </svg>
    </VizFrame>
  );
}
