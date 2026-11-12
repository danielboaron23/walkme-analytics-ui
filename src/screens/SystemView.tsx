import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/walkme/Icon";
import { TitleBar } from "@/layout/TitleBar";
import { FilterRow, TabStrip } from "@/layout/TabStrip";
import { OverviewContent } from "@/components/walkme/OverviewContent";
import { ActiveUsersContent } from "@/components/walkme/ActiveUsersContent";
import { SwtContent } from "@/components/walkme/SwtContent";
import { SwtLoading } from "@/components/walkme/SwtLoading";
import { SwtDetailPanel, SwtDetailWide } from "@/components/walkme/panel/SwtDetailPanel";
import type { ViewMode } from "@/components/walkme/panel/ViewModeMenu";

const SWT_TAB = "Smart Walk- Thrus";
const ACTIVE_USERS_TAB = "Active users";
const LOAD_MS = 2500;

/** A system dashboard: shared chrome + tabbed content (Overview, Smart Walk-Thrus, …). */
export function SystemView({
  system,
  onBackToSystems,
}: {
  system: string;
  onBackToSystems?: () => void;
}) {
  const [tab, setTab] = useState("Oveview");
  const [loading, setLoading] = useState(false);
  const [detail, setDetail] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>("side");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  function goToTab(next: string) {
    if (next === tab) return;
    if (timer.current) clearTimeout(timer.current);
    setDetail(null);
    setTab(next);
    if (next === SWT_TAB) {
      setLoading(true);
      timer.current = setTimeout(() => setLoading(false), LOAD_MS);
    } else {
      setLoading(false);
    }
  }

  function openDetail(name: string) {
    setDetail(name);
    setViewMode("side");
  }

  const isOverview = tab === "Oveview";

  // Wide view takes over the entire main content area.
  if (detail && viewMode === "wide") {
    return (
      <SwtDetailWide
        name={detail}
        viewMode={viewMode}
        onViewMode={setViewMode}
        onClose={() => setDetail(null)}
      />
    );
  }

  return (
    <div className="flex flex-col pb-sp80">
      <TitleBar
        title={system}
        icon={
          <button
            type="button"
            onClick={onBackToSystems}
            className="flex h-7 w-7 items-center justify-center rounded-cr20 bg-bg-app text-icon hover:text-text-primary"
          >
            <Icon name="grid" size={16} />
          </button>
        }
        onBack={isOverview ? undefined : () => goToTab("Oveview")}
        environment="Production"
        exportVariant="link"
        showInsightsClassic={isOverview}
      />
      <FilterRow dateLabel="Last week (Jan 1 - Jan 7)" showAddFilter />
      <TabStrip active={tab} onTabClick={goToTab} />

      <div className="px-sp80 pt-sp40">
        {isOverview && <OverviewContent />}
        {tab === SWT_TAB && (loading ? <SwtLoading /> : <SwtContent onOpenDetail={openDetail} />)}
        {tab === ACTIVE_USERS_TAB && <ActiveUsersContent />}
        {!isOverview && tab !== SWT_TAB && tab !== ACTIVE_USERS_TAB && (
          <div className="flex h-[400px] items-center justify-center wm-t1 text-text-secondary">
            {tab} — coming soon
          </div>
        )}
      </div>

      {detail && viewMode === "side" && (
        <SwtDetailPanel
          name={detail}
          viewMode={viewMode}
          onViewMode={setViewMode}
          onClose={() => setDetail(null)}
        />
      )}
    </div>
  );
}
