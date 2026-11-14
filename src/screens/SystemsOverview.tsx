import { TitleBar } from "@/layout/TitleBar";
import { FilterRow } from "@/layout/TabStrip";
import { DashboardCard } from "@/components/walkme/DashboardCard";
import { ChartLegend } from "@/components/walkme/charts/ChartLegend";
import { TopSystemsBarChart } from "@/components/walkme/charts/TopSystemsBarChart";
import {
  EngagementLineChart,
  ENGAGEMENT_SERIES,
} from "@/components/walkme/charts/EngagementLineChart";
import { MonitoredSystemsTable } from "@/components/walkme/MonitoredSystemsTable";

/** Screen 1 — Systems Overview (entry point). */
export function SystemsOverview({
  onSelectSystem,
}: {
  onSelectSystem?: (system: string) => void;
}) {
  return (
    <div className="flex flex-col pb-sp80">
      <TitleBar
        title="Systems Overview"
        subtitle="How employees adopt WalkMe across your monitored systems."
        exportVariant="outline"
      />
      <FilterRow
        dateLabel="Last week (May 4 - May 10)"
        showAddFilter={false}
        meta={
          <>
            Showing top 5 of{" "}
            <b className="font-semibold text-text-primary">132</b> monitored systems
          </>
        }
      />

      <div className="flex flex-col gap-sp60 px-sp80 pt-sp10">
        {/* Two chart cards */}
        <div className="grid grid-cols-2 gap-sp60">
          <DashboardCard title="Top 5 systems" subtitle="Ranked by active users">
            <TopSystemsBarChart />
            <ChartLegend
              items={[
                { color: "#afbff7", label: "Active users" },
                { color: "#8b9ddb", label: "Users who interacted with WalkMe" },
              ]}
            />
          </DashboardCard>

          <DashboardCard
            title="Top systems by engagement"
            subtitle="Daily, May 4 – May 10"
          >
            <EngagementLineChart />
            <ChartLegend
              items={ENGAGEMENT_SERIES.map((s) => ({
                color: s.color,
                label: s.label,
              }))}
            />
          </DashboardCard>
        </div>

        {/* Monitored systems table */}
        <MonitoredSystemsTable onSelectSystem={onSelectSystem} />
      </div>
    </div>
  );
}
