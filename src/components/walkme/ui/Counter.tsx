import { cn } from "@/lib/utils";

/** A-Counter — ghost-blue pill showing a count next to a title. */
export function Counter({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "flex h-4 items-center rounded-pill bg-brand-ghost px-1.5 wm-t3-semibold text-brand",
        className
      )}
    >
      {children}
    </span>
  );
}
