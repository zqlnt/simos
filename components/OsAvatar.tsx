/** Minimal system avatar for Sim OS — geometric, not cartoon. iOS-style squircle optional. */
export function OsAvatar({
  className = "",
  squircle,
}: {
  className?: string;
  /** Use ~22% corner radius like iOS app icons */
  squircle?: boolean;
}) {
  return (
    <div
      className={`relative flex h-10 w-10 shrink-0 items-center justify-center bg-gradient-to-br from-white/70 to-white/40 ring-1 ring-white/60 ${
        squircle ? "rounded-[22%]" : "rounded-2xl"
      } ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 40 40"
        className="h-7 w-7 text-[var(--app-primary)]"
        fill="none"
      >
        <circle
          cx="20"
          cy="20"
          r="14"
          stroke="currentColor"
          strokeWidth="1.25"
          opacity="0.35"
        />
        <path
          d="M20 10 L 28 14 L 28 28 L 20 32 L 12 28 L 12 14 Z"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinejoin="round"
          fill="rgba(59,108,255,0.12)"
        />
        <circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.85" />
      </svg>
    </div>
  );
}
