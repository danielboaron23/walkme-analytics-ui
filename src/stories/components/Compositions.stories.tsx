import type { Meta, StoryObj } from "@storybook/react";
import { AppShell } from "@/layout/AppShell";
import { OverviewContent } from "@/components/walkme/OverviewContent";
import { SwtContent } from "@/components/walkme/SwtContent";

const meta: Meta = { title: "Components/Compositions", parameters: { layout: "fullscreen" } };
export default meta;
type Story = StoryObj;

export const AppShell_Empty: Story = {
  name: "AppShell (chrome only)",
  render: () => (
    <div style={{ height: "100vh" }}>
      <AppShell showSearch>
        <div className="flex h-[400px] items-center justify-center wm-t1 text-text-secondary">
          Page content slots here
        </div>
      </AppShell>
    </div>
  ),
};

export const Overview_Content: Story = {
  name: "OverviewContent (4 widgets)",
  render: () => (
    <div className="bg-bg-app" style={{ padding: 32, minWidth: 1400 }}>
      <OverviewContent />
    </div>
  ),
};

export const SWT_Content: Story = {
  name: "SwtContent (KPI cards + table)",
  render: () => (
    <div className="bg-bg-app" style={{ padding: 32, minWidth: 1400 }}>
      <SwtContent onOpenDetail={() => {}} />
    </div>
  ),
};
