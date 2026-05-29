import type { Meta, StoryObj } from "@storybook/react";
import { Icon, ICONS, type IconName } from "@/components/walkme/Icon";

const meta: Meta = { title: "Foundations/Icons" };
export default meta;
type Story = StoryObj;

const contentIcons = import.meta.glob("../../assets/content-icons/*.svg", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;
const logos = import.meta.glob("../../assets/logos/*.svg", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const fileName = (p: string) => p.split("/").pop()!.replace(".svg", "");

function Cell({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div
      style={{
        display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
        width: 104, padding: "16px 8px", border: "1px solid #ebeff7", borderRadius: 8,
      }}
    >
      <div style={{ display: "flex", height: 24, alignItems: "center", color: "#6d81a6" }}>{children}</div>
      <span className="wm-t4 text-text-secondary" style={{ textAlign: "center", wordBreak: "break-word" }}>{label}</span>
    </div>
  );
}

export const UIIcons: Story = {
  render: () => (
    <div style={{ padding: 24, fontFamily: "var(--font-body)" }}>
      <h1 className="wm-h1 text-text-primary" style={{ marginBottom: 8 }}>UI icons</h1>
      <p className="wm-t2 text-text-secondary" style={{ marginBottom: 20 }}>
        Real WalkMe icons, inlined and recolorable via <code>currentColor</code>. {Object.keys(ICONS).length} icons.
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
        {(Object.keys(ICONS) as IconName[]).sort().map((name) => (
          <Cell key={name} label={name}><Icon name={name} size={20} /></Cell>
        ))}
      </div>
    </div>
  ),
};

export const ContentIcons: Story = {
  render: () => (
    <div style={{ padding: 24, fontFamily: "var(--font-body)" }}>
      <h1 className="wm-h1 text-text-primary" style={{ marginBottom: 8 }}>Content-type icons</h1>
      <p className="wm-t2 text-text-secondary" style={{ marginBottom: 20 }}>WalkMe deployable / content icons.</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
        {Object.entries(contentIcons).map(([p, url]) => (
          <Cell key={p} label={fileName(p)}><img src={url} width={20} height={20} alt="" /></Cell>
        ))}
      </div>
    </div>
  ),
};

export const BrandLogos: Story = {
  render: () => (
    <div style={{ padding: 24, fontFamily: "var(--font-body)" }}>
      <h1 className="wm-h1 text-text-primary" style={{ marginBottom: 8 }}>Brand logos</h1>
      <p className="wm-t2 text-text-secondary" style={{ marginBottom: 20 }}>System / brand marks used across charts and tables.</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
        {Object.entries(logos).map(([p, url]) => (
          <Cell key={p} label={fileName(p)}><img src={url} width={20} height={20} alt="" /></Cell>
        ))}
      </div>
    </div>
  ),
};
