import { useCallback, useState } from "react";
import { Icon } from "@/components/walkme/Icon";
import { AddFilterPopup } from "@/components/walkme/AddFilterPopup";
import { TextButton } from "@/components/walkme/ui/TextButton";
import { cn } from "@/lib/utils";

export const TABS = [
  "Oveview",
  "Active users",
  "SmartTips",
  "Smart Walk- Thrus",
  "Onboarding Tasks",
  "ShoutOuts",
  "Launchers",
  "Resources",
  "Shuttles",
  "Surveys",
  "Menu & Search",
];

/** Filter row (48px): date-range dropdown + optional Add Filter. */
export function FilterRow({
  dateLabel = "Last week (Jan 1 - Jan 7)",
  showAddFilter = true,
}: {
  dateLabel?: string;
  showAddFilter?: boolean;
}) {
  const [filterOpen, setFilterOpen] = useState(false);
  const closeFilter = useCallback(() => setFilterOpen(false), []);
  return (
    <div className="flex h-12 items-center gap-sp60 px-sp80">
      <button
        type="button"
        className="flex items-center gap-sp20 rounded-cr20 border border-divider-on-gray bg-bg-surface px-sp30 py-1.5 text-text-primary"
      >
        <Icon name="calendar" size={16} className="text-icon" />
        <span className="wm-t2">{dateLabel}</span>
        <Icon name="chevron-down" size={14} className="ml-sp40 text-icon" />
      </button>
      {showAddFilter && (
        <div className="relative">
          <TextButton icon="filter" onClick={() => setFilterOpen((o) => !o)}>
            Add Filter
          </TextButton>
          {filterOpen && <AddFilterPopup onClose={closeFilter} />}
        </div>
      )}
    </div>
  );
}

/** M-Tab — tab strip with active blue underline. */
export function TabStrip({
  active = "Oveview",
  onTabClick,
}: {
  active?: string;
  onTabClick?: (tab: string) => void;
}) {
  return (
    <div className="flex h-[60px] items-center gap-sp60 border-b border-divider-el px-sp80">
      {TABS.map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => onTabClick?.(tab)}
          className={cn(
            "relative flex h-10 items-center whitespace-nowrap",
            active === tab
              ? "wm-t2-semibold text-brand"
              : "wm-t2 text-text-secondary hover:text-text-primary"
          )}
        >
          {tab}
          {active === tab && (
            <span className="absolute -bottom-px left-0 right-0 h-0.5 rounded-pill bg-brand" />
          )}
        </button>
      ))}
      <button
        type="button"
        className="flex items-center gap-sp20 whitespace-nowrap wm-t2 text-text-secondary hover:text-text-primary"
      >
        AI Dashboards
        <Icon name="chevron-down" size={14} className="text-icon" />
      </button>
    </div>
  );
}
