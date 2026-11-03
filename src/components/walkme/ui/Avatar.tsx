import { cn } from "@/lib/utils";

/** A-Avatar (letters) — lavender circle with initials. */
export function Avatar({
  initials,
  size = 32,
  className,
}: {
  initials: string;
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center rounded-pill bg-info-lavender-tint text-info-lavender",
        className
      )}
      style={{
        width: size,
        height: size,
        fontFamily: "var(--font-body)",
        fontSize: size <= 20 ? 8 : size <= 24 ? 10 : 12,
        lineHeight: 1,
      }}
    >
      {initials}
    </span>
  );
}
