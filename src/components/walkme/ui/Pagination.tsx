import { Icon } from "@/components/walkme/Icon";
import { cn } from "@/lib/utils";

function PageDot({ n, active }: { n: string; active?: boolean }) {
  return (
    <button
      type="button"
      className={cn(
        "flex h-6 min-w-6 items-center justify-center rounded-pill px-1 wm-t2",
        active ? "bg-brand text-white" : "text-text-secondary hover:bg-bg-app"
      )}
    >
      {n}
    </button>
  );
}

/** M-Table-Footer pagination: summary + pager + rows-per-page. */
export function Pagination({
  summary = "Showing 1–10 of 72",
  pages = ["1", "2", "3", "…", "28"],
  active = "1",
  perPage = "10",
}: {
  summary?: string;
  pages?: string[];
  active?: string;
  perPage?: string;
}) {
  return (
    <div className="flex h-[72px] shrink-0 items-center justify-between">
      <span className="wm-t2 text-text-secondary">{summary}</span>
      <div className="flex items-center gap-sp10">
        <button type="button" className="flex h-6 w-6 items-center justify-center text-icon hover:text-text-primary">
          <Icon name="chevron-left" size={16} />
        </button>
        {pages.map((p, i) =>
          p === "…" ? (
            <span key={i} className="px-sp10 wm-t2 text-text-secondary">…</span>
          ) : (
            <PageDot key={i} n={p} active={p === active} />
          )
        )}
        <button type="button" className="flex h-6 w-6 items-center justify-center text-icon hover:text-text-primary">
          <Icon name="chevron-left" size={16} rotate={180} />
        </button>
      </div>
      <div className="flex items-center gap-sp20">
        <span className="wm-t2 text-text-secondary">Rows per page:</span>
        <button type="button" className="flex items-center gap-sp10 rounded-cr20 border border-divider-on-gray px-sp20 py-1 wm-t2 text-text-primary">
          {perPage} <Icon name="chevron-down" size={14} className="text-icon" />
        </button>
      </div>
    </div>
  );
}
