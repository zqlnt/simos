import { VizFrame } from "./viz-frame";

/** Clean plotted curve + faint grid — readable on layered UI. */
export function LineGraphViz() {
  return (
    <VizFrame>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 200 72"
        preserveAspectRatio="xMidYMid slice"
      >
        {Array.from({ length: 9 }).map((_, i) => (
          <line
            key={`h-${i}`}
            x1="8"
            y1={8 + i * 8}
            x2="192"
            y2={8 + i * 8}
            stroke="rgba(60,80,120,0.08)"
            strokeWidth="0.5"
          />
        ))}
        {Array.from({ length: 12 }).map((_, i) => (
          <line
            key={`v-${i}`}
            x1={8 + i * 16}
            y1="8"
            x2={8 + i * 16}
            y2="64"
            stroke="rgba(60,80,120,0.06)"
            strokeWidth="0.5"
          />
        ))}
        <path
          d="M 12 52 C 40 48, 55 28, 78 32 S 120 18, 145 24 S 175 38, 188 22"
          fill="none"
          stroke="var(--app-primary)"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.55"
          className="drop-shadow-[0_0_4px_rgba(59,108,255,0.25)]"
        />
        <path
          d="M 12 52 C 40 48, 55 28, 78 32 S 120 18, 145 24 S 175 38, 188 22 L 188 64 L 12 64 Z"
          fill="rgba(59, 108, 255, 0.09)"
        />
      </svg>
    </VizFrame>
  );
}
