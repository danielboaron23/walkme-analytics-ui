import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/walkme/Icon";
import { cn } from "@/lib/utils";

export type ViewMode = "side" | "wide";

const OPTIONS: { mode: ViewMode; icon: "panel-layout" | "wide-layout"; label: string }[] = [
  { mode: "side", icon: "panel-layout", label: "Side view" },
  { mode: "wide", icon: "wide-layout", label: "Wide view" },
];

/** The view toggle: button + dropdown menu (Side view / Wide view) anchored under it. */
export function ViewModeMenu({
  mode,
  onChange,
}: {
  mode: ViewMode;
  onChange: (m: ViewMode) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex h-8 items-center gap-sp10 rounded-cr20 border border-divider-on-gray bg-bg-app px-sp20 text-icon hover:text-text-primary"
      >
        <Icon name={mode === "side" ? "panel-layout" : "wide-layout"} size={18} />
        <Icon name="chevron-down" size={14} />
      </button>

      {open && (
        <div className="absolute right-0 top-[calc(100%+6px)] z-[60] w-[190px] rounded-cr30 border border-divider-el bg-bg-surface py-sp20 shadow-[0_8px_24px_rgba(23,32,52,0.12)]">
          {OPTIONS.map((opt) => {
            const active = opt.mode === mode;
            return (
              <button
                key={opt.mode}
                type="button"
                onClick={() => {
                  onChange(opt.mode);
                  setOpen(false);
                }}
                className="flex w-full items-center gap-sp20 px-sp40 py-sp20 hover:bg-bg-app"
              >
                <Icon name={opt.icon} size={18} className={active ? "text-brand" : "text-icon"} />
                <span className={cn("flex-1 text-left wm-t2", active ? "text-brand" : "text-text-primary")}>
                  {opt.label}
                </span>
                {active && <Icon name="check" size={16} className="text-brand" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
