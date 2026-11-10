import type { Meta, StoryObj } from "@storybook/react";
import { TopSystemsBarChart } from "@/components/walkme/charts/TopSystemsBarChart";
import { EngagementLineChart, ENGAGEMENT_SERIES } from "@/components/walkme/charts/EngagementLineChart";
import { ExposureTrendChart, EXPOSURE_SERIES } from "@/components/walkme/charts/ExposureTrendChart";
import { ContentTypeChart } from "@/components/walkme/charts/ContentTypeChart";
import { FunnelWidget } from "@/components/walkme/charts/FunnelWidget";
import { MapWidget } from "@/components/walkme/MapWidget";
import { PanelAnalyticsChart } from "@/components/walkme/panel/PanelAnalyticsChart";
import { ChartLegend } from "@/components/walkme/charts/ChartLegend";

const meta: Meta = { title: "Charts", parameters: { backgrounds: { default: "surface" } } };
export default meta;
type Story = StoryObj;

const Box = ({ w = 820, h = 260, children }: { w?: number; h?: number; children: React.ReactNode }) => (
  <div style={{ width: w, height: h, padding: 16 }}>{children}</div>
);

export const TopSystems_Bar: Story = { name: "Top systems — grouped bar", render: () => <Box><TopSystemsBarChart /></Box> };
export const Engagement_Line: Story = { name: "Engagement — multi-line", render: () => <Box><EngagementLineChart /></Box> };
export const ExposureTrend_Area: Story = { name: "Exposure trend — gradient line", render: () => <Box h={240}><ExposureTrendChart /></Box> };
export const ContentType_Bars: Story = { name: "Content type — horizontal bars", render: () => <Box w={840} h={520}><ContentTypeChart /></Box> };
export const Funnel: Story = { name: "Funnel widget", render: () => <div style={{ width: 480, height: 320 }}><FunnelWidget className="h-full" /></div> };
export const Map: Story = { name: "Map widget", render: () => <div style={{ width: 884, height: 560 }}><MapWidget className="h-full" /></div> };
export const PanelAnalytics_Tooltip: Story = { name: "Panel analytics — live tooltip", render: () => <Box w={560} h={300}><PanelAnalyticsChart /></Box> };

export const Legend: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: 16 }}>
      <ChartLegend items={ENGAGEMENT_SERIES.map((s) => ({ color: s.color, label: s.label }))} />
      <ChartLegend items={EXPOSURE_SERIES.map((s) => ({ color: s.color, label: "Default text" }))} />
    </div>
  ),
};
