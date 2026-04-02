/** Shown while the route segment is preparing — first dev compile can take several seconds. */
export default function Loading() {
  return (
    <div className="flex min-h-[40dvh] flex-col items-center justify-center gap-3 px-6 text-center">
      <div
        className="h-9 w-9 animate-spin rounded-full border-2 border-[var(--app-primary-soft)] border-t-[var(--app-primary)]"
        aria-hidden
      />
      <p className="text-sm font-medium text-gray-600">Loading workspace…</p>
    </div>
  );
}
