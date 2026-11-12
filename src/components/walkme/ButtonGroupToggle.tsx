import { cn } from "@/lib/utils";

/**
 * M-ButtonGroup — two icon buttons in a bordered group; the active one
 * has a brand-blue fill with a white icon.
 */
export function ButtonGroupToggle({
  left,
  right,
  active = "right",
}: {
  left: React.ReactNode;
  right: React.ReactNode;
  active?: "left" | "right";
}) {
  return (
    <div className="flex items-center rounded-cr20 border border-divider-el">
      <button
        type="button"
        className={cn(
          "flex h-7 w-9 items-center justify-center rounded-cr20",
          active === "left" ? "bg-brand text-white" : "text-icon"
        )}
      >
        {left}
      </button>
      <button
        type="button"
        className={cn(
          "flex h-7 w-9 items-center justify-center rounded-cr20",
          active === "right" ? "bg-brand text-white" : "text-icon"
        )}
      >
        {right}
      </button>
    </div>
  );
}
