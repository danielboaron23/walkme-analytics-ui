import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Icon, ICONS, type IconName } from "@/components/walkme/Icon";
import { SystemLogo } from "@/components/walkme/SystemLogo";
import { WalkMeLogo } from "@/components/walkme/WalkMeLogo";
import { ButtonGroupToggle } from "@/components/walkme/ButtonGroupToggle";
import { ViewModeMenu, type ViewMode } from "@/components/walkme/panel/ViewModeMenu";

const meta: Meta = { title: "Components/Primitives", parameters: { backgrounds: { default: "surface" } } };
export default meta;
type Story = StoryObj;

export const IconPlayground: StoryObj<typeof Icon> = {
  args: { name: "search", size: 20 },
  argTypes: {
    name: { control: "select", options: Object.keys(ICONS) as IconName[] },
    size: { control: { type: "range", min: 12, max: 48, step: 2 } },
  },
  render: (args) => <span className="text-icon"><Icon {...args} /></span>,
};

export const IconColors: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
      {(["text-icon", "text-brand", "text-text-primary", "text-info-success"] as const).map((c) => (
        <span key={c} className={c} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          <Icon name="bell" size={24} />
          <span className="wm-t4 text-text-secondary">{c}</span>
        </span>
      ))}
    </div>
  ),
};

export const Logos: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <WalkMeLogo />
      <div style={{ display: "flex", gap: 16 }}>
        {["SmartHighlight", "Gsuite", "Zoom", "Service Now", "Google Drive"].map((n) => (
          <div key={n} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
            <SystemLogo name={n} />
            <span className="wm-t4 text-text-secondary">{n}</span>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const Toggles: Story = {
  render: () => {
    const Demo = () => {
      const [mode, setMode] = useState<ViewMode>("side");
      return (
        <div style={{ display: "flex", gap: 40, alignItems: "flex-start" }}>
          <div>
            <div className="wm-t3 text-text-secondary" style={{ marginBottom: 8 }}>ButtonGroupToggle</div>
            <ButtonGroupToggle active="right" left={<Icon name="list" size={16} />} right={<Icon name="globe" size={16} />} />
          </div>
          <div>
            <div className="wm-t3 text-text-secondary" style={{ marginBottom: 8 }}>ViewModeMenu — {mode}</div>
            <ViewModeMenu mode={mode} onChange={setMode} />
          </div>
        </div>
      );
    };
    return <Demo />;
  },
};
