import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const SERIES = [
  { key: "users", label: "Users played", color: "#3099ab" },
  { key: "swt", label: "SWT plays", color: "#e26921" },
  { key: "goal", label: "Goal completion", color: "#a976d6" },
];

const DATA = [
  { date: "Nov 17", users: 14000, swt: 10000, goal: 10200 },
  { date: "Nov 18", users: 11000, swt: 7000, goal: 12000 },
  { date: "Nov 19", users: 9600, swt: 9000, goal: 13000 },
  { date: "Nov 20", users: 10000, swt: 3200, goal: 5200 },
  { date: "Nov 21", users: 18000, swt: 6000, goal: 9200 },
  { date: "Nov 22", users: 15000, swt: 5000, goal: 9000 },
  { date: "Nov 23", users: 14000, swt: 6200, goal: 8000 },
];

const fmt = (v: number) => (v === 0 ? "0" : `${v / 1000}k`);

/** Hover tooltip — date header + a row per series (dot + value + "engagements"). */
function ChartTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div
      className="rounded-cr30 border border-divider-el bg-bg-surface px-sp40 py-sp30 shadow-[0_8px_24px_rgba(23,32,52,0.12)]"
      style={{ minWidth: 188 }}
    >
      <div className="border-b border-divider-el pb-sp20 wm-t2-semibold text-text-primary">
        {label}, 2025
      </div>
      <div className="flex flex-col gap-sp20 pt-sp30">
        {payload.map((p: any) => (
          <div key={p.dataKey} className="flex items-center gap-sp20">
            <span className="h-2 w-2 shrink-0 rounded-pill" style={{ backgroundColor: p.color }} />
            <span className="wm-t2-semibold text-text-primary">
              {Number(p.value).toLocaleString("en-US")}
            </span>
            <span className="wm-t2 text-text-secondary">engagements</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PanelAnalyticsChart() {
  return (
    <div className="flex flex-col">
      <div className="h-[210px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={DATA} margin={{ top: 8, right: 8, bottom: 0, left: -4 }}>
            <CartesianGrid vertical={false} stroke="#ebeff7" />
            <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={10} interval={0}
              tick={{ fill: "#8d97ae", fontSize: 12, fontFamily: "var(--font-body)" }} />
            <YAxis ticks={[0, 5000, 10000, 15000, 20000]} domain={[0, 20000]} tickLine={false}
              axisLine={false} width={34} tickFormatter={fmt}
              tick={{ fill: "#8d97ae", fontSize: 12, fontFamily: "var(--font-body)" }} />
            <Tooltip
              content={<ChartTooltip />}
              cursor={{ stroke: "#385feb", strokeWidth: 1, strokeOpacity: 0.35 }}
              wrapperStyle={{ outline: "none" }}
            />
            {SERIES.map((s) => (
              <Line
                key={s.key}
                type="linear"
                dataKey={s.key}
                stroke={s.color}
                strokeWidth={1.75}
                dot={false}
                activeDot={{ r: 4, fill: s.color, stroke: "#fff", strokeWidth: 2 }}
                isAnimationActive={false}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="flex items-center gap-sp60 pt-sp30">
        {SERIES.map((s) => (
          <div key={s.key} className="flex items-center gap-sp20">
            <span className="h-2 w-2 rounded-pill" style={{ backgroundColor: s.color }} />
            <span className="wm-t3 text-text-secondary">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
