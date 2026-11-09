import type { Meta, StoryObj } from "@storybook/react";
import { AppShell } from "@/layout/AppShell";
import { SystemsOverview } from "@/screens/SystemsOverview";
import { SystemView } from "@/screens/SystemView";

const meta: Meta = { title: "Pages", parameters: { layout: "fullscreen" } };
export default meta;
type Story = StoryObj;

const Full = ({ children, search }: { children: React.ReactNode; search?: boolean }) => (
  <div style={{ height: "100vh" }}>
    <AppShell showSearch={search}>{children}</AppShell>
  </div>
);

export const Systems_Overview: Story = {
  name: "Systems Overview (entry)",
  render: () => <Full search><SystemsOverview onSelectSystem={() => {}} /></Full>,
};

export const System_Dashboard: Story = {
  name: "System dashboard (Overview + tabs)",
  render: () => <Full><SystemView system="Salesforce Lightning" onBackToSystems={() => {}} /></Full>,
};
