import { cn } from "@/lib/utils";

export const STATUS_COLORS = {
  published: "#22917a",
  draft: "#8d97ae",
  error: "#d0716c",
} as const;

/** A-TextStatus — colored dot + label (e.g. ● Published). */
export function StatusBadge({
  label = "Published",
  color = STATUS_COLORS.published,
  className,
}: {
  label?: string;
  color?: string;
  className?: string;
}) {
  return (
    <span className={cn("flex items-center gap-sp20", className)}>
      <span className="h-2 w-2 shrink-0 rounded-pill" style={{ backgroundColor: color }} />
      <span className="wm-t2 text-text-primary">{label}</span>
    </span>
  );
}
