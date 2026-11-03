import { Icon, type IconName } from "@/components/walkme/Icon";
import { Counter } from "@/components/walkme/ui/Counter";
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
  muted?: boolean;
};

const COLUMNS = [
  "System",
  "Active users",
  "Users exposed to WalkMe",
  "Users who interacted with WalkMe",
  "Renewal date",
  "Owner",
];

const ROWS: Row[] = [
  { system: "SmartHighlight", active: "1,355", exposed: "798", exposedPct: "62%", interacted: "219", interactedPct: "22%", renewal: "Feb 1, 2021", owner: "liat.ka@walkme.com" },
  { system: "Gsuite", active: "2,894", exposed: "1,935", exposedPct: "67%", interacted: "452", interactedPct: "16%", renewal: "Dec 18, 2023", owner: "alex.fo@walkme.com" },
  { system: "Zoom", active: "1,355", exposed: "642", exposedPct: "65%", interacted: "157", interactedPct: "16%", renewal: "Nov 2, 2023", owner: "maya.bo@walkme.com" },
  { system: "Salesforce Lightning", active: "1,564", exposed: "1,016", exposedPct: "65%", interacted: "250", interactedPct: "16%", renewal: "Oct 23, 2023", owner: "john.do@walkme.com" },
  { system: "Gsuite", active: "2,894", exposed: "1,935", exposedPct: "67%", interacted: "452", interactedPct: "16%", renewal: "Dec 18, 2023", owner: "alex.fo@walkme.com" },
  { system: "Zoom", active: "1,355", exposed: "642", exposedPct: "65%", interacted: "157", interactedPct: "16%", renewal: "Nov 2, 2023", owner: "maya.bo@walkme.com" },
  { system: "Service Now", active: "1,564", exposed: "1,016", exposedPct: "65%", interacted: "250", interactedPct: "16%", renewal: "Oct 23, 2023", owner: "john.do@walkme.com" },
  { system: "Google Drive", active: "2,341", exposed: "1,522", exposedPct: "65%", interacted: "373", interactedPct: "16%", renewal: "Sep 7, 2023", owner: "sara.jo@walkme.com", muted: true },
];

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

export function MonitoredSystemsTable({
  onSelectSystem,
}: {
  onSelectSystem?: (system: string) => void;
}) {
  const grid =
    "grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] gap-sp40";

  return (
    <section className="flex flex-col rounded-cr40 bg-bg-surface px-sp60 py-sp40">
      {/* Header */}
      <header className="flex h-[60px] shrink-0 items-center justify-between">
        <div className="flex items-center gap-sp20">
          <h3 className="wm-t1-bold text-text-primary">Monitored systems</h3>
          <Counter>132</Counter>
        </div>
        <div className="flex items-center gap-sp30">
          <SearchInput />
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
      </div>

      {/* Rows */}
      <div>
        {ROWS.map((r, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onSelectSystem?.(r.system)}
            className={cn(
              grid,
              "h-12 w-full items-center border-b border-divider-el px-sp60 text-left transition-colors hover:bg-bg-sky",
              r.muted && "opacity-45"
            )}
          >
            <span className="wm-t2 truncate text-text-primary">{r.system}</span>
            <span className="wm-t2 text-text-primary">{r.active}</span>
            <span className="wm-t2 text-text-primary">
              {r.exposed} <span className="text-text-secondary">({r.exposedPct})</span>
            </span>
            <span className="wm-t2 text-text-primary">
              {r.interacted} <span className="text-text-secondary">({r.interactedPct})</span>
            </span>
            <span className="wm-t2 text-text-primary">{r.renewal}</span>
            <span className="wm-t2 truncate text-text-primary">{r.owner}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
