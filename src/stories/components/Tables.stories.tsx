import type { Meta, StoryObj } from "@storybook/react";
import { MonitoredSystemsTable } from "@/components/walkme/MonitoredSystemsTable";
import { SwtSummaryTable } from "@/components/walkme/SwtSummaryTable";
import { SwtLoading } from "@/components/walkme/SwtLoading";

const meta: Meta = { title: "Components/Tables", parameters: { layout: "fullscreen" } };
export default meta;
type Story = StoryObj;

const Wrap = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-bg-app" style={{ padding: 24, minWidth: 1200 }}>{children}</div>
);

export const MonitoredSystems: Story = {
  render: () => <Wrap><MonitoredSystemsTable onSelectSystem={() => {}} /></Wrap>,
};

export const SmartWalkThrusSummary: Story = {
  name: "SWT Summary (hover a Name for the link chip)",
  render: () => <Wrap><SwtSummaryTable onOpenDetail={() => {}} /></Wrap>,
};

export const LoadingSkeleton: Story = {
  render: () => <Wrap><SwtLoading /></Wrap>,
};
