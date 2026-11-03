import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "@/layout/Header";
import { Sidebar } from "@/layout/Sidebar";
import { TitleBar } from "@/layout/TitleBar";
import { TabStrip, FilterRow } from "@/layout/TabStrip";
import { Icon } from "@/components/walkme/Icon";

const meta: Meta = { title: "Components/Chrome", parameters: { layout: "fullscreen" } };
export default meta;
type Story = StoryObj;

export const AppHeader: Story = { name: "Header", render: () => <Header showSearch /> };

export const LeftNav: Story = {
  name: "Sidebar",
  render: () => <div style={{ height: 520 }}><Sidebar /></div>,
};

export const TitleBar_SystemsOverview: Story = {
  name: "TitleBar — Systems Overview",
  render: () => <div className="bg-bg-app"><TitleBar title="Systems Overview" exportVariant="outline" /></div>,
};

export const TitleBar_Dashboard: Story = {
  name: "TitleBar — Dashboard (back + env + insights)",
  render: () => (
    <div className="bg-bg-app">
      <TitleBar
        title="Salesforce Lightning"
        environment="Production"
        exportVariant="link"
        showInsightsClassic
        onBack={() => {}}
        icon={<span className="flex h-7 w-7 items-center justify-center rounded-cr20 bg-bg-app text-icon"><Icon name="grid" size={16} /></span>}
      />
    </div>
  ),
};

export const FilterAndTabs: Story = {
  name: "FilterRow + TabStrip",
  render: () => (
    <div className="bg-bg-app">
      <FilterRow dateLabel="Last week (Jan 1 - Jan 7)" showAddFilter />
      <TabStrip active="Smart Walk- Thrus" />
    </div>
  ),
};

export const TabStates: Story = {
  name: "TabStrip — active states",
  render: () => (
    <div className="bg-bg-app" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {["Oveview", "SmartTips", "Surveys"].map((t) => (
        <TabStrip key={t} active={t} />
      ))}
    </div>
  ),
};
