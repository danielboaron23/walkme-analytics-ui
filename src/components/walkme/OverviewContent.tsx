import { Panel } from "@/components/walkme/Panel";
import { FunnelWidget } from "@/components/walkme/charts/FunnelWidget";
import { ExposureTrendChart, EXPOSURE_SERIES } from "@/components/walkme/charts/ExposureTrendChart";
import { ContentTypeChart } from "@/components/walkme/charts/ContentTypeChart";
import { MapWidget } from "@/components/walkme/MapWidget";
import { ChartLegend } from "@/components/walkme/charts/ChartLegend";

/** Overview tab content (the 4 dashboard widgets). */
export function OverviewContent() {
  return (
    <div className="flex flex-col gap-sp60">
      <div className="grid h-[320px] grid-cols-[476px_1fr] gap-sp60">
        <FunnelWidget className="h-full" />
        <Panel title="Users exposure trend" className="h-full" bodyClassName="pb-sp20">
          <div className="flex flex-1 flex-col">
            <div className="min-h-0 flex-1">
              <ExposureTrendChart />
            </div>
            <ChartLegend
              items={EXPOSURE_SERIES.map((s) => ({ color: s.color, label: "Default text" }))}
            />
          </div>
        </Panel>
      </div>

      <div className="grid h-[568px] grid-cols-2 gap-sp60">
        <Panel title="User interaction with WalkMe by content type" className="h-full">
          <ContentTypeChart />
        </Panel>
        <MapWidget className="h-full" />
      </div>
    </div>
  );
}
