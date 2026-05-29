import { SwtKpiCard } from "@/components/walkme/SwtKpiCard";
import { SwtSummaryTable } from "@/components/walkme/SwtSummaryTable";

/** SWT Tab - Filled Content: 3 KPI cards + Smart Walk-Thrus Summary table. */
export function SwtContent({ onOpenDetail }: { onOpenDetail?: (name: string) => void }) {
  return (
    <div className="flex flex-col gap-sp60">
      <div className="grid grid-cols-3 gap-sp60">
        <SwtKpiCard
          title="Users played Smart Walk-Thrus"
          value="79"
          lead="11.6%"
          rest="  of total users exposed to WalkMe"
          icon="kpi-users"
          color={{ bg: "#b4dae1", fg: "#1e606c" }}
        />
        <SwtKpiCard
          title="Smart Walk-Thru plays"
          value="76"
          lead="1.7"
          rest=" plays per user"
          icon="kpi-play"
          color={{ bg: "#f5c9af", fg: "#8e4215" }}
        />
        <SwtKpiCard
          title="Main goal completions"
          value="34"
          lead="22%"
          rest=" of plays resulted in reaching a main goal"
          icon="kpi-goal"
          color={{ bg: "#e0cef0", fg: "#6a4a87" }}
        />
      </div>
      <SwtSummaryTable onOpenDetail={onOpenDetail} />
    </div>
  );
}
