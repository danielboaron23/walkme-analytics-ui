import { useState } from "react";
import { Icon, type IconName } from "@/components/walkme/Icon";
import { SystemLogo } from "@/components/walkme/SystemLogo";
import { Avatar } from "@/components/walkme/ui/Avatar";
import { Counter } from "@/components/walkme/ui/Counter";
import { Pagination } from "@/components/walkme/ui/Pagination";
import { SearchInput } from "@/components/walkme/ui/SearchInput";
import { cn } from "@/lib/utils";

type Row = {
  system: string;
  active: string;
  exposed: string;
  exposedPct: string;
  interacted: string;
  interactedPct: string;
  renewal: string;
  owner: string;
  overdue?: boolean;
  muted?: boolean;
};

const COLUMNS = [
  "System",
  "Active users",
  "Users exposed to WalkMe",
  "Users who interacted with WalkMe",
];

const ROWS: Row[] = [
  { system: "SmartHighlight", active: "1,355", exposed: "798", exposedPct: "62%", interacted: "219", interactedPct: "22%", renewal: "Feb 1, 2021", owner: "liat.ka@walkme.com", overdue: true },
  { system: "Gsuite", active: "2,894", exposed: "1,935", exposedPct: "67%", interacted: "452", interactedPct: "16%", renewal: "Dec 18, 2023", owner: "alex.fo@walkme.com" },
  { system: "Zoom", active: "1,355", exposed: "642", exposedPct: "65%", interacted: "157", interactedPct: "16%", renewal: "Nov 2, 2023", owner: "maya.bo@walkme.com" },
  { system: "Salesforce Lightning", active: "1,564", exposed: "1,016", exposedPct: "65%", interacted: "250", interactedPct: "16%", renewal: "Oct 23, 2023", owner: "john.do@walkme.com" },
  { system: "Gsuite", active: "2,894", exposed: "1,935", exposedPct: "67%", interacted: "452", interactedPct: "16%", renewal: "Dec 18, 2023", owner: "alex.fo@walkme.com" },
  { system: "Zoom", active: "1,355", exposed: "642", exposedPct: "65%", interacted: "157", interactedPct: "16%", renewal: "Nov 2, 2023", owner: "maya.bo@walkme.com" },
  { system: "Service Now", active: "1,564", exposed: "1,016", exposedPct: "65%", interacted: "250", interactedPct: "16%", renewal: "Oct 23, 2023", owner: "john.do@walkme.com" },
  { system: "Google Drive", active: "2,341", exposed: "1,522", exposedPct: "65%", interacted: "373", interactedPct: "16%", renewal: "Sep 7, 2023", owner: "sara.jo@walkme.com", muted: true },
];

type SortDir = "asc" | "desc" | null;

function HeaderActionIcon({ name }: { name: IconName }) {
  return (
    <button
      type="button"
      className="flex h-7 w-7 items-center justify-center rounded-pill text-icon hover:bg-bg-app"
    >
      <Icon name={name} size={20} />
    </button>
  );
}

/** "liat.ka@walkme.com" -> "LK" */
function initialsOf(email: string) {
  const parts = email.split("@")[0].split(".");
  return parts
    .slice(0, 2)
    .map((p) => p.charAt(0).toUpperCase())
    .join("");
}

/** Count + share, with a thin bar so rates compare at a glance. */
function RateCell({ value, pct }: { value: string; pct: string }) {
  return (
    <span className="flex flex-col gap-sp10">
      <span className="wm-t2 text-text-primary">
        {value} <span className="text-text-secondary">({pct})</span>
      </span>
      <span className="block h-1 w-full max-w-[140px] overflow-hidden rounded-pill bg-divider-el">
        <span
          className="block h-full rounded-pill bg-brand"
          style={{ width: pct }}
        />
      </span>
    </span>
  );
}

export function MonitoredSystemsTable({
  onSelectSystem,
}: {
  onSelectSystem?: (system: string) => void;
}) {
  const [sortDir, setSortDir] = useState<SortDir>(null);

  const grid =
    "grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] gap-sp40";

  const rows = sortDir
    ? [...ROWS].sort((a, b) => {
        const diff = Date.parse(a.renewal) - Date.parse(b.renewal);
        return sortDir === "asc" ? diff : -diff;
      })
    : ROWS;

  const cycleSort = () =>
    setSortDir((d) => (d === null ? "asc" : d === "asc" ? "desc" : null));

  return (
    <section className="flex flex-col rounded-cr40 bg-bg-surface px-sp60 py-sp40">
      {/* Header */}
      <header className="flex h-[60px] shrink-0 items-center justify-between">
        <div className="flex items-center gap-sp20">
          <h3 className="wm-t1-bold text-text-primary">Monitored systems</h3>
          <Counter>132</Counter>
        </div>
        <div className="flex items-center gap-sp30">
          <SearchInput placeholder="Search systems or owners..." />
          <span className="h-6 w-px bg-divider-el" />
          <HeaderActionIcon name="table-export" />
          <HeaderActionIcon name="columns" />
          <HeaderActionIcon name="duplicate" />
        </div>
      </header>

      {/* Column titles */}
      <div className={cn(grid, "h-10 items-center border-b border-divider-el px-sp60")}>
        {COLUMNS.map((c) => (
          <span key={c} className="wm-t3 truncate text-text-secondary">
            {c}
          </span>
        ))}
        <button
          type="button"
          onClick={cycleSort}
          aria-label="Sort by renewal date"
          className={cn(
            "wm-t3 flex items-center gap-sp10 text-left",
            sortDir ? "text-brand" : "text-text-secondary hover:text-text-primary"
          )}
        >
          <span className="truncate">Renewal date</span>
          {sortDir && (
            <Icon
              name="chevron-down"
              size={12}
              rotate={sortDir === "asc" ? 180 : 0}
            />
          )}
        </button>
        <span className="wm-t3 truncate text-text-secondary">Owner</span>
      </div>

      {/* Rows */}
      <div>
        {rows.map((r, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onSelectSystem?.(r.system)}
            className={cn(
              grid,
              "h-14 w-full items-center border-b border-divider-el px-sp60 text-left transition-colors hover:bg-bg-sky",
              r.muted && "opacity-45"
            )}
          >
            <span className="flex items-center gap-sp20">
              <SystemLogo name={r.system} size={24} />
              <span className="wm-t2 truncate text-text-primary">{r.system}</span>
            </span>
            <span className="wm-t2 text-text-primary">{r.active}</span>
            <RateCell value={r.exposed} pct={r.exposedPct} />
            <RateCell value={r.interacted} pct={r.interactedPct} />
            <span className="flex items-center">
              <span className="wm-t2 truncate text-text-primary">{r.renewal}</span>
              {r.overdue && (
                <span className="wm-t3-semibold ml-sp20 shrink-0 rounded-pill bg-box-orange-bg px-sp20 text-box-orange">
                  Overdue
                </span>
              )}
            </span>
            <span className="flex items-center gap-sp20">
              <Avatar initials={initialsOf(r.owner)} size={24} />
              <span className="wm-t2 truncate text-text-primary">{r.owner}</span>
            </span>
          </button>
        ))}
      </div>

      <Pagination
        summary="Showing 1–8 of 132"
        pages={["1", "2", "3", "…", "17"]}
        active="1"
        perPage="8"
      />
    </section>
  );
}
