import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { SwtDetailPanel, SwtDetailWide } from "@/components/walkme/panel/SwtDetailPanel";
import { StepsAnalysis } from "@/components/walkme/panel/StepsAnalysis";
import type { ViewMode } from "@/components/walkme/panel/ViewModeMenu";

const meta: Meta = { title: "Components/Detail Panel", parameters: { layout: "fullscreen" } };
export default meta;
type Story = StoryObj;

export const SideDrawer: Story = {
  render: () => {
    const Demo = () => {
      const [mode, setMode] = useState<ViewMode>("side");
      return (
        <div style={{ height: "100vh", background: "#f0f3f9" }}>
          {mode === "wide" ? (
            <SwtDetailWide name="Time Off Approval" viewMode={mode} onViewMode={setMode} onClose={() => setMode("side")} />
          ) : (
            <SwtDetailPanel name="Time Off Approval" viewMode={mode} onViewMode={setMode} onClose={() => {}} />
          )}
        </div>
      );
    };
    return <Demo />;
  },
};

export const WideView: Story = {
  render: () => {
    const Demo = () => {
      const [mode, setMode] = useState<ViewMode>("wide");
      return (
        <div style={{ height: "100vh", background: "#fff" }}>
          <SwtDetailWide name="Time Off Approval" viewMode={mode} onViewMode={setMode} onClose={() => {}} />
        </div>
      );
    };
    return <Demo />;
  },
};

export const Steps: Story = {
  name: "Smart Walk-Thru steps analysis",
  render: () => (
    <div style={{ width: 600, padding: 24, background: "#fff" }}>
      <div className="rounded-cr40 border border-divider-el p-sp60">
        <div className="wm-t1-bold text-text-primary" style={{ paddingBottom: 16 }}>Smart Walk-Thu steps analysis</div>
        <div style={{ maxHeight: 360, overflowY: "auto" }}>
          <StepsAnalysis />
        </div>
      </div>
    </div>
  ),
};
