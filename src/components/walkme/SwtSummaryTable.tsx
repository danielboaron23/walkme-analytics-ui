import { Icon, type IconName } from "@/components/walkme/Icon";
import { Counter } from "@/components/walkme/ui/Counter";
import { SearchInput } from "@/components/walkme/ui/SearchInput";
import { StatusBadge } from "@/components/walkme/ui/StatusBadge";
import { Avatar } from "@/components/walkme/ui/Avatar";
import { Pagination } from "@/components/walkme/ui/Pagination";
import { cn } from "@/lib/utils";

const COLUMNS = ["Name", "Status", "Users played", "SWT plays", "Goals reached", "Creator", "Last published"];

const ROW = {
  name: "Time Off Approval",
  status: "Published",
  usersPlayed: "57",
  swtPlays: "74",
  goal: "No goal set",
  creator: "Oded Hirsh",
  creatorInitials: "OH",
  lastPublished: "July 09, 2025 2:47 PM",
};
const ROWS = Array.from({ length: 10 }, () => ROW);

const GRID = "grid grid-cols-[1.3fr_1fr_1fr_1fr_1.1fr_1fr_1.2fr] gap-sp40";
const CHIP =
  "-ml-2 max-w-full truncate rounded-cr20 border border-transparent px-2 py-0.5 wm-t2 text-text-primary group-hover:border-divider-on-gray group-hover:bg-bg-surface group-hover:text-brand group-hover:shadow-sm";

function HeaderActionIcon({ name }: { name: IconName }) {
  return (
    <button type="button" className="flex h-7 w-7 items-center justify-center rounded-pill text-icon hover:bg-bg-app">
      <Icon name={name} size={20} />
    </button>
  );
}

export function SwtSummaryTable({
  onOpenDetail,
}: {
  onOpenDetail?: (name: string) => void;
}) {
  return (
    <section className="flex flex-col rounded-cr40 bg-bg-surface px-sp60 py-sp40">
      {/* Header */}
      <header className="flex h-[60px] shrink-0 items-center justify-between">
        <div className="flex items-center gap-sp20">
          <h3 className="wm-t1-bold text-text-primary">Smart Walk-Thrus Summary</h3>
          <Counter>670</Counter>
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
      <div className={cn(GRID, "h-10 items-center border-b border-divider-el px-sp30")}>
        {COLUMNS.map((c) => (
          <span key={c} className="wm-t3 truncate text-text-secondary">{c}</span>
        ))}
      </div>

      {/* Rows */}
      <div>
        {ROWS.map((r, i) => (
          <div key={i} className={cn(GRID, "group h-10 items-center border-b border-divider-el px-sp30 hover:bg-bg-sky")}>
            <span className="min-w-0">
              <button type="button" onClick={() => onOpenDetail?.(r.name)} className={CHIP}>
                {r.name}
              </button>
            </span>
            <StatusBadge label={r.status} />
            <span>
              <button type="button" className={CHIP}>{r.usersPlayed}</button>
            </span>
            <span className="wm-t2 text-text-primary">{r.swtPlays}</span>
            <span className="flex items-center gap-sp20 text-text-secondary">
              <Icon name="target" size={16} className="text-icon" />
              <span className="wm-t2">{r.goal}</span>
            </span>
            <span className="flex items-center gap-sp20">
              <Avatar initials={r.creatorInitials} size={16} />
              <span className="wm-t2 truncate text-text-primary">{r.creator}</span>
            </span>
            <span className="wm-t2 truncate text-text-primary">{r.lastPublished}</span>
          </div>
        ))}
      </div>

      <Pagination summary="Showing 1–10 of 72" pages={["1", "2", "3", "…", "28"]} active="1" perPage="10" />
    </section>
  );
}
