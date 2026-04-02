/**
 * Horizontal inset for fixed top/bottom dock on lg when sidebars are expanded.
 * Sidebars: left fixed left-3 w-[17.5rem], right fixed right-3 w-[19rem].
 * Inset starts after panel + 0.75rem gap (matches shell padding rhythm).
 */
export function lgChromeDockInsetClass(
  leftCollapsed: boolean,
  rightCollapsed: boolean,
): string {
  const left = leftCollapsed ? "lg:left-3" : "lg:left-[19rem]";
  const right = rightCollapsed ? "lg:right-3" : "lg:right-[20.5rem]";
  return `${left} ${right} transition-[left,right] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]`;
}
