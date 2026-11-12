import type { Meta, StoryObj } from "@storybook/react";
import { WalkMeLogo } from "@/components/walkme/WalkMeLogo";

const meta: Meta = { title: "Foundations/Introduction", parameters: { backgrounds: { default: "surface" } } };
export default meta;
type Story = StoryObj;

export const Welcome: Story = {
  render: () => (
    <div style={{ padding: 40, maxWidth: 760, fontFamily: "var(--font-body)" }}>
      <WalkMeLogo />
      <h1 className="wm-h1 text-text-primary" style={{ margin: "20px 0 8px" }}>WalkMe Design System</h1>
      <p className="wm-t1 text-text-secondary" style={{ marginBottom: 24 }}>
        The living design system for the WalkMe analytics product — tokens, icons, and components,
        reproduced pixel-faithfully from Figma and shared across the project.
      </p>
      <h3 className="wm-t1-bold text-text-primary" style={{ margin: "16px 0 8px" }}>What's inside</h3>
      <ul className="wm-t2 text-text-primary" style={{ lineHeight: "26px", paddingLeft: 18 }}>
        <li><b>Foundations</b> — Colors, Typography (Poppins + Proxima Nova), Spacing, Radius, Icons</li>
        <li><b>Components</b> — chrome (Header, Sidebar, Title bar, Tabs), Cards & Panels, Tables, KPI cards, toggles, the detail drawer (side + wide) and steps analysis</li>
        <li><b>Charts</b> — bar / line / gradient-area / horizontal-bar / funnel / map, with live tooltips</li>
        <li><b>Pages</b> — Systems Overview and the System dashboard</li>
      </ul>
      <h3 className="wm-t1-bold text-text-primary" style={{ margin: "24px 0 8px" }}>Principles</h3>
      <p className="wm-t2 text-text-secondary" style={{ lineHeight: "22px" }}>
        Every value is a token; every icon is a real Figma asset recolored via <code>currentColor</code>;
        components bind to the token layer so the system stays in sync with the Figma library.
      </p>
    </div>
  ),
};
