import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = { title: "Foundations/Spacing & Radius" };
export default meta;
type Story = StoryObj;

const SPACING = [
  { name: "sp5", px: 2 },
  { name: "sp10", px: 4 },
  { name: "sp20", px: 8 },
  { name: "sp30", px: 12 },
  { name: "sp40", px: 16 },
  { name: "sp60", px: 24 },
  { name: "sp70", px: 28 },
  { name: "sp80", px: 32 },
  { name: "dashboard", px: 24 },
];

const RADIUS = [
  { name: "cr20", px: 4 },
  { name: "cr30", px: 8 },
  { name: "cr40", px: 12 },
  { name: "pill", px: 9999 },
];

export const Spacing: Story = {
  render: () => (
    <div style={{ padding: 24, fontFamily: "var(--font-body)" }}>
      <h1 className="wm-h1 text-text-primary" style={{ marginBottom: 24 }}>Spacing scale</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {SPACING.map((s) => (
          <div key={s.name} style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div className="wm-t2-semibold text-text-primary" style={{ width: 90 }}>{s.name}</div>
            <div className="wm-t3 text-text-secondary" style={{ width: 48 }}>{s.px}px</div>
            <div style={{ height: 16, width: s.px, backgroundColor: "#385feb", borderRadius: 2 }} />
          </div>
        ))}
      </div>
    </div>
  ),
};

export const Radius: Story = {
  render: () => (
    <div style={{ padding: 24, fontFamily: "var(--font-body)" }}>
      <h1 className="wm-h1 text-text-primary" style={{ marginBottom: 24 }}>Corner radius</h1>
      <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
        {RADIUS.map((r) => (
          <div key={r.name} style={{ textAlign: "center" }}>
            <div style={{ width: 96, height: 96, backgroundColor: "#e9ecf8", border: "1px solid #d5d9e2", borderRadius: r.px }} />
            <div className="wm-t2-semibold text-text-primary" style={{ marginTop: 8 }}>{r.name}</div>
            <div className="wm-t4 text-text-secondary">{r.px === 9999 ? "full" : `${r.px}px`}</div>
          </div>
        ))}
      </div>
    </div>
  ),
};
