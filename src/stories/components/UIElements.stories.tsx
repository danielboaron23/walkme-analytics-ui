import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "@/components/walkme/ui/Avatar";
import { Counter } from "@/components/walkme/ui/Counter";
import { StatusBadge, STATUS_COLORS } from "@/components/walkme/ui/StatusBadge";
import { SearchInput } from "@/components/walkme/ui/SearchInput";
import { TextButton } from "@/components/walkme/ui/TextButton";
import { Pagination } from "@/components/walkme/ui/Pagination";

const meta: Meta = { title: "Components/UI Elements", parameters: { backgrounds: { default: "surface" } } };
export default meta;
type Story = StoryObj;

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <div className="wm-t1-bold text-text-primary" style={{ marginBottom: 12 }}>{title}</div>
      <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>{children}</div>
    </div>
  );
}

export const Atoms: Story = {
  render: () => (
    <div style={{ padding: 24, fontFamily: "var(--font-body)" }}>
      <Section title="Avatar — sizes">
        <Avatar initials="DT" size={32} />
        <Avatar initials="OH" size={24} />
        <Avatar initials="SM" size={16} />
      </Section>

      <Section title="Counter (count badge)">
        <Counter>12</Counter>
        <Counter>132</Counter>
        <Counter>670</Counter>
        <Counter>99+</Counter>
      </Section>

      <Section title="StatusBadge">
        <StatusBadge label="Published" color={STATUS_COLORS.published} />
        <StatusBadge label="Draft" color={STATUS_COLORS.draft} />
        <StatusBadge label="Error" color={STATUS_COLORS.error} />
      </Section>

      <Section title="SearchInput">
        <SearchInput />
        <SearchInput width={320} placeholder="Search systems..." />
      </Section>

      <Section title="TextButton — variants">
        <TextButton icon="export">Export</TextButton>
        <TextButton icon="export" variant="outline">Export</TextButton>
        <TextButton icon="insights">Go to Insights Classic</TextButton>
        <TextButton icon="filter">Add Filter</TextButton>
      </Section>
    </div>
  ),
};

export const PaginationStory: Story = {
  name: "Pagination",
  render: () => (
    <div style={{ width: 1000, padding: 24, fontFamily: "var(--font-body)" }}>
      <Pagination summary="Showing 1–10 of 72" pages={["1", "2", "3", "…", "28"]} active="1" perPage="10" />
    </div>
  ),
};
