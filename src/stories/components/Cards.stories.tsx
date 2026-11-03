import type { Meta, StoryObj } from "@storybook/react";
import { DashboardCard } from "@/components/walkme/DashboardCard";
import { Panel } from "@/components/walkme/Panel";
import { SwtKpiCard } from "@/components/walkme/SwtKpiCard";
import { ButtonGroupToggle } from "@/components/walkme/ButtonGroupToggle";
import { Icon } from "@/components/walkme/Icon";

const meta: Meta = { title: "Components/Cards" };
export default meta;
type Story = StoryObj;

export const Dashboard_Card: Story = {
  name: "DashboardCard",
  render: () => (
    <div style={{ width: 520 }}>
      <DashboardCard title="Top 5 systems">
        <div className="wm-t2 text-text-secondary" style={{ padding: "32px 0" }}>Card body content goes here.</div>
      </DashboardCard>
    </div>
  ),
};

export const Panel_Card: Story = {
  name: "Panel",
  render: () => (
    <div style={{ width: 520 }}>
      <Panel
        title="From where users access"
        headerRight={<ButtonGroupToggle active="right" left={<Icon name="list" size={16} />} right={<Icon name="globe" size={16} />} />}
      >
        <div className="wm-t2 text-text-secondary" style={{ padding: "32px 0" }}>Panel body content goes here.</div>
      </Panel>
    </div>
  ),
};

export const KpiCards: Story = {
  name: "SwtKpiCard — all colors",
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, width: 980 }}>
      <SwtKpiCard title="Users played Smart Walk-Thrus" value="79" lead="11.6%" rest="  of total users exposed to WalkMe" icon="kpi-users" color={{ bg: "#b4dae1", fg: "#1e606c" }} />
      <SwtKpiCard title="Smart Walk-Thru plays" value="76" lead="1.7" rest=" plays per user" icon="kpi-play" color={{ bg: "#f5c9af", fg: "#8e4215" }} />
      <SwtKpiCard title="Main goal completions" value="34" lead="22%" rest=" of plays resulted in reaching a main goal" icon="kpi-goal" color={{ bg: "#e0cef0", fg: "#6a4a87" }} />
    </div>
  ),
};
