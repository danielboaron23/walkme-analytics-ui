import { Icon, type IconName } from "@/components/walkme/Icon";
import { PanelAnalyticsChart } from "./PanelAnalyticsChart";
import { StepsAnalysis } from "./StepsAnalysis";
import { ViewModeMenu, type ViewMode } from "./ViewModeMenu";
import { StatusBadge } from "@/components/walkme/ui/StatusBadge";
import { cn } from "@/lib/utils";

type ColorBox = { bg: string; fg: string };

function StatCard({
  icon, color, value, label, lead, rest,
}: {
  icon: IconName; color: ColorBox; value: string; label: string; lead: string; rest: string;
}) {
  return (
    <div className="flex flex-1 flex-col gap-sp30 rounded-cr40 border border-divider-el p-sp40">
      <span className="flex h-9 w-9 items-center justify-center rounded-cr30"
        style={{ backgroundColor: color.bg, color: color.fg }}>
        <Icon name={icon} size={20} />
      </span>
      <div className="flex items-baseline gap-sp20">
        <span className="wm-h2 text-text-primary">{value}</span>
        <span className="wm-t2 text-text-primary">{label}</span>
      </div>
      <span className="wm-t3 text-text-secondary">
        <span className="wm-t3-semibold text-text-primary">{lead}</span>
        {rest}
      </span>
    </div>
  );
}

function SectionCard({
  title, info, scrollHeight, children,
}: {
  title: string; info?: boolean; scrollHeight?: number; children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col rounded-cr40 border border-divider-el p-sp60">
      <div className="flex items-center gap-sp20 pb-sp40">
        <span className="wm-t1-bold text-text-primary">{title}</span>
        {info && <Icon name="info" size={16} className="text-icon" />}
      </div>
      {scrollHeight ? (
        <div className="-mr-sp30 overflow-y-auto pr-sp30" style={{ maxHeight: scrollHeight }}>
          {children}
        </div>
      ) : (
        children
      )}
    </div>
  );
}

function DetailHeader({
  name, viewMode, onViewMode, onClose, wide,
}: {
  name: string; viewMode: ViewMode; onViewMode: (m: ViewMode) => void; onClose: () => void; wide?: boolean;
}) {
  return (
    <header className={cn(
      "flex shrink-0 items-start justify-between border-b border-divider-el",
      wide ? "px-sp80 py-sp40" : "px-sp60 py-sp40"
    )}>
      <div className="flex flex-col gap-sp10">
        <h2 className={wide ? "wm-t1-bold text-text-primary" : "wm-h1 text-text-primary"}>{name}</h2>
        <div className="flex items-center gap-sp20 wm-t2 text-text-secondary">
          <StatusBadge label="Published" />
          <span className="text-divider-on-gray">·</span>
          <span>Last published: May 14, 2025</span>
        </div>
      </div>
      <div className="flex items-center gap-sp30">
        <ViewModeMenu mode={viewMode} onChange={onViewMode} />
        <button type="button" onClick={onClose} className="text-icon hover:text-text-primary">
          <Icon name="close" size={20} />
        </button>
      </div>
    </header>
  );
}

function DetailBody({ wide }: { wide?: boolean }) {
  return (
    <>
      <div className={cn("grid grid-cols-3", wide ? "gap-sp60" : "gap-sp30")}>
        <StatCard icon="kpi-users" color={{ bg: "#b4dae1", fg: "#1e606c" }} value="78"
          label="Unique user plays" lead="21%" rest=" of users exposed to Smart Walk-Thrus" />
        <StatCard icon="kpi-play" color={{ bg: "#f5c9af", fg: "#8e4215" }} value="76"
          label="Total plays" lead="15" rest=" plays per user" />
        <StatCard icon="kpi-goal" color={{ bg: "#e0cef0", fg: "#6a4a87" }} value="34"
          label="Goal completions" lead="8%" rest=" of plays resulted in reaching a main goal" />
      </div>
      <SectionCard title="Analytics over time" info>
        <PanelAnalyticsChart />
      </SectionCard>
      <SectionCard title="Smart Walk-Thu steps analysis" scrollHeight={wide ? undefined : 360}>
        <StepsAnalysis />
      </SectionCard>
    </>
  );
}

/** Side view — 660px right drawer (overlay). */
export function SwtDetailPanel({
  name, viewMode, onViewMode, onClose,
}: {
  name: string; viewMode: ViewMode; onViewMode: (m: ViewMode) => void; onClose: () => void;
}) {
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 top-14 z-40 bg-black/5" onClick={onClose} />
      <aside className="fixed bottom-0 right-0 top-14 z-50 flex w-[660px] flex-col bg-bg-surface shadow-[-8px_0_24px_rgba(23,32,52,0.08)]">
        <DetailHeader name={name} viewMode={viewMode} onViewMode={onViewMode} onClose={onClose} />
        <div className="min-h-0 flex-1 overflow-y-auto">
          <div className="flex flex-col gap-sp60 py-sp60 pl-sp60 pr-sp30">
            <DetailBody />
          </div>
        </div>
      </aside>
    </>
  );
}

/** Wide view — fills the whole main content area. */
export function SwtDetailWide({
  name, viewMode, onViewMode, onClose,
}: {
  name: string; viewMode: ViewMode; onViewMode: (m: ViewMode) => void; onClose: () => void;
}) {
  return (
    <div className="flex h-full flex-col bg-bg-surface">
      <DetailHeader name={name} viewMode={viewMode} onViewMode={onViewMode} onClose={onClose} wide />
      <div className="min-h-0 flex-1 overflow-y-auto">
        <div className="flex flex-col gap-sp60 px-sp80 py-sp60">
          <DetailBody wide />
        </div>
      </div>
    </div>
  );
}
