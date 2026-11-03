import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = { title: "Foundations/Typography" };
export default meta;
type Story = StoryObj;

const HEADINGS = [
  { cls: "wm-h1", label: "Heading H1", spec: "Poppins SemiBold · 24/32" },
  { cls: "wm-h2", label: "Heading H2", spec: "Poppins SemiBold · 20/28" },
  { cls: "wm-h3", label: "Heading H3", spec: "Poppins SemiBold · 16/24" },
  { cls: "wm-h4", label: "Heading H4", spec: "Poppins SemiBold · 14/20" },
  { cls: "wm-h5", label: "Heading H5", spec: "Poppins SemiBold · 10/16" },
];
const TEXTS = [
  { cls: "wm-t1", label: "Text T1", spec: "Proxima Nova Regular · 16/24" },
  { cls: "wm-t1-bold", label: "Text T1 Bold", spec: "Proxima Nova Bold · 16/24" },
  { cls: "wm-t2", label: "Text T2", spec: "Proxima Nova Regular · 14/20" },
  { cls: "wm-t2-semibold", label: "Text T2 Semibold", spec: "Proxima Nova Semibold · 14/20" },
  { cls: "wm-t3", label: "Text T3", spec: "Proxima Nova Regular · 12/16" },
  { cls: "wm-t3-semibold", label: "Text T3 Semibold", spec: "Proxima Nova Semibold · 12/16" },
  { cls: "wm-t4", label: "Text T4", spec: "Proxima Nova Regular · 10/14" },
];

function Row({ cls, label, spec }: { cls: string; label: string; spec: string }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 24, padding: "12px 0", borderBottom: "1px solid #ebeff7" }}>
      <div style={{ width: 160 }}>
        <div className="wm-t2-semibold text-text-primary">{cls}</div>
        <div className="wm-t4 text-text-secondary">{spec}</div>
      </div>
      <div className={`${cls} text-text-primary`}>{label} — The quick brown fox</div>
    </div>
  );
}

export const TypeRamp: Story = {
  render: () => (
    <div style={{ padding: 24, fontFamily: "var(--font-body)" }}>
      <h1 className="wm-h1 text-text-primary" style={{ marginBottom: 8 }}>Typography</h1>
      <p className="wm-t2 text-text-secondary" style={{ marginBottom: 24 }}>
        Poppins for headings, Proxima Nova for body text.
      </p>
      <h3 className="wm-t1-bold text-text-primary" style={{ margin: "16px 0 4px" }}>Headings</h3>
      {HEADINGS.map((r) => <Row key={r.cls} {...r} />)}
      <h3 className="wm-t1-bold text-text-primary" style={{ margin: "28px 0 4px" }}>Texts</h3>
      {TEXTS.map((r) => <Row key={r.cls} {...r} />)}
    </div>
  ),
};
