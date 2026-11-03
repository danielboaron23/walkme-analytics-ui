import {
  Area,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { DashboardCard } from "@/components/walkme/DashboardCard";
import { Icon, type IconName } from "@/components/walkme/Icon";
import { ChartLegend } from "@/components/walkme/charts/ChartLegend";
import { Avatar } from "@/components/walkme/ui/Avatar";
import { Counter } from "@/components/walkme/ui/Counter";
import { SearchInput } from "@/components/walkme/ui/SearchInput";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Mocked data                                                         */
/* ------------------------------------------------------------------ */

type Kpi = {
  title: string;
  value: string;
  share?: string;
  delta: string;
  trend: "up" | "down";
};

const KPIS: Kpi[] = [
  { title: "Active users", value: "1,355", delta: "4.2%", trend: "up" },
  { title: "Users exposed to WalkMe", value: "798", share: "(62%)", delta: "1.8%", trend: "up" },
  { title: "Users who interacted with WalkMe", value: "219", share: "(22%)", delta: "0.6%", trend: "down" },
];

const TREND = [
  { date: "Jan 1", current: 420, previous: 380 },
  { date: "Jan 2", current: 560, previous: 520 },
  { date: "Jan 3", current: 610, previous: 570 },
  { date: "Jan 4", current: 590, previous: 560 },
  { date: "Jan 5", current: 640, previous: 590 },
  { date: "Jan 6", current: 280, previous: 250 },
  { date: "Jan 7", current: 240, previous: 230 },
];

const TEAMS = [
  { name: "Sales", users: 412 },
  { name: "Support", users: 328 },
  { name: "Marketing", users: 241 },
  { name: "Engineering", users: 205 },
  { name: "Finance", users: 169 },
];

type UserRow = {
  email: string;
  team: string;
  sessions: number;
  interacted: number;
  lastActive: string;
  muted?: boolean;
};

const USERS: UserRow[] = [
  { email: "liat.ka@walkme.com", team: "Sales", sessions: 42, interacted: 18, lastActive: "Jan 7" },
  { email: "alex.fo@walkme.com", team: "Support", sessions: 38, interacted: 14, lastActive: "Jan 7" },
  { email: "maya.bo@walkme.com", team: "Marketing", sessions: 35, interacted: 12, lastActive: "Jan 6" },
  { email: "john.do@walkme.com", team: "Sales", sessions: 31, interacted: 11, lastActive: "Jan 6" },
  { email: "sara.jo@walkme.com", team: "Engineering", sessions: 27, interacted: 9, lastActive: "Jan 5", muted: true },
];

const COLUMNS = ["User", "Team", "Sessions", "Content interacted with", "Last active"];

const BRAND_40 = "color-mix(in srgb, var(--color-brand) 40%, transparent)";

/* ------------------------------------------------------------------ */
/* Pieces                                                              */
/* ------------------------------------------------------------------ */

/** "liat.ka@walkme.com" → "LK" */
function initialsOf(email: string) {
  return email
    .split("@")[0]
    .split(".")
    .map((p) => p.charAt(0))
    .join("")
    .toUpperCase();
}

function KpiCard({ title, value, share, delta, trend }: Kpi) {
  const color = trend === "up" ? "text-info-success" : "text-box-orange";
  return (
    <section className="flex flex-col rounded-cr40 bg-bg-surface px-sp60 py-sp40">
      <header className="flex h-10 items-center gap-sp20">
        <h3 className="wm-t1-bold text-text-primary">{title}</h3>
        <Icon name="info" size={16} className="text-icon" />
      </header>
      <div className="flex items-baseline gap-sp20">
        <span className="wm-h1 text-text-primary">{value}</span>
        {share && <span className="wm-t2 text-text-secondary">{share}</span>}
      </div>
      <div className="mt-sp10 flex h-6 items-center gap-sp10">
        <svg
          aria-hidden
          viewBox="0 0 10 10"
          width={10}
          height={10}
          className={cn("shrink-0", color)}
        >
          <path
            d={trend === "up" ? "M5 2L9 8H1L5 2Z" : "M5 8L1 2H9L5 8Z"}
            fill="currentColor"
          />
        </svg>
        <span className={cn("wm-t3-semibold", color)}>{delta}</span>
        <span className="wm-t3 text-text-secondary">vs. previous week</span>
      </div>
    </section>
  );
}

function ActiveUsersTrend() {
  const dot = {
    r: 3.5,
    fill: "var(--color-bg-surface)",
    stroke: "var(--color-brand)",
    strokeWidth: 1.75,
  };
  return (
    <DashboardCard title="Active users trend">
      <ResponsiveContainer width="100%" height={216}>
        <ComposedChart data={TREND} margin={{ top: 8, right: 16, bottom: 0, left: -4 }}>
          <CartesianGrid vertical={false} stroke="var(--color-divider-el)" />
          <XAxis
            dataKey="date"
            tickLine={false}
            axisLine={false}
            tickMargin={10}
            interval={0}
            tick={{ fill: "var(--color-text-secondary)", fontSize: 12, fontFamily: "var(--font-body)" }}
          />
          <YAxis
            ticks={[0, 200, 400, 600, 800]}
            domain={[0, 800]}
            tickLine={false}
            axisLine={false}
            width={34}
            tick={{ fill: "var(--color-text-secondary)", fontSize: 12, fontFamily: "var(--font-body)" }}
          />
          <Area
            type="linear"
            dataKey="current"
            stroke="none"
            fill="var(--color-brand-ghost)"
            isAnimationActive={false}
          />
          <Line
            type="linear"
            dataKey="previous"
            stroke="var(--color-brand)"
            strokeOpacity={0.4}
            strokeWidth={1.75}
            strokeDasharray="4 4"
            dot={false}
            isAnimationActive={false}
          />
          <Line
            type="linear"
            dataKey="current"
            stroke="var(--color-brand)"
            strokeWidth={1.75}
            dot={dot}
            activeDot={dot}
            isAnimationActive={false}
          />
        </ComposedChart>
      </ResponsiveContainer>
      <ChartLegend
        items={[
          { color: "var(--color-brand)", label: "This week" },
          { color: BRAND_40, label: "Previous week" },
        ]}
      />
    </DashboardCard>
  );
}

function ActiveUsersByTeam() {
  const max = Math.max(...TEAMS.map((t) => t.users));
  return (
    <DashboardCard title="Active users by team">
      <div className="flex flex-1 flex-col justify-between pb-sp20">
        {TEAMS.map((t) => (
          <div key={t.name} className="flex flex-col gap-sp10">
            <div className="flex justify-between">
              <span className="wm-t2 text-text-primary">{t.name}</span>
              <span className="wm-t2-semibold text-text-primary">{t.users}</span>
            </div>
            <div className="h-2 rounded-pill bg-bg-input">
              <div
                className="h-full rounded-pill bg-brand opacity-40"
                style={{ width: `${(t.users / max) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}

function HeaderActionIcon({ name, label }: { name: IconName; label: string }) {
  return (
    <button
      type="button"
      aria-label={label}
      className="flex h-7 w-7 items-center justify-center rounded-pill text-icon hover:bg-bg-app"
    >
      <Icon name={name} size={20} />
    </button>
  );
}

function MostActiveUsersTable() {
  const grid =
    "grid grid-cols-[minmax(0,1.6fr)_repeat(4,minmax(0,1fr))] gap-sp40";
  return (
    <section className="flex flex-col rounded-cr40 bg-bg-surface px-sp60 py-sp40">
      <header className="flex h-[60px] shrink-0 items-center justify-between">
        <div className="flex items-center gap-sp20">
          <h3 className="wm-t1-bold text-text-primary">Most active users</h3>
          <Counter>1,355</Counter>
        </div>
        <div className="flex items-center gap-sp30">
          <SearchInput />
          <span className="h-6 w-px bg-divider-el" />
          <HeaderActionIcon name="table-export" label="Export table" />
          <HeaderActionIcon name="columns" label="Edit columns" />
        </div>
      </header>

      <div className={cn(grid, "h-10 items-center border-b border-divider-el px-sp60")}>
        {COLUMNS.map((c) => (
          <span key={c} className="wm-t3 truncate text-text-secondary">
            {c}
          </span>
        ))}
      </div>

      <div>
        {USERS.map((u) => (
          <div
            key={u.email}
            className={cn(
              grid,
              "wm-t2 h-12 items-center border-b border-divider-el px-sp60 text-text-primary transition-colors hover:bg-bg-sky",
              u.muted && "opacity-45"
            )}
          >
            <span className="flex items-center gap-sp20">
              <Avatar initials={initialsOf(u.email)} size={24} />
              <span className="truncate">{u.email}</span>
            </span>
            <span>{u.team}</span>
            <span>{u.sessions}</span>
            <span>{u.interacted}</span>
            <span>{u.lastActive}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/** Active users tab: 3 KPI cards, trend + by-team cards, most active users table. */
export function ActiveUsersContent() {
  return (
    <div className="flex flex-col gap-sp60">
      <div className="grid grid-cols-3 gap-sp60">
        {KPIS.map((k) => (
          <KpiCard key={k.title} {...k} />
        ))}
      </div>
      <div className="grid grid-cols-[2fr_1fr] gap-sp60">
        <ActiveUsersTrend />
        <ActiveUsersByTeam />
      </div>
      <MostActiveUsersTable />
    </div>
  );
}
