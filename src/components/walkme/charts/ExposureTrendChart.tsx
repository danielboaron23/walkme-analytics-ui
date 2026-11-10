import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export const EXPOSURE_SERIES = [
  { key: "a", color: "#a976d6" },
  { key: "b", color: "#e26921" },
  { key: "c", color: "#3a9ba6" },
];

const DATA = [
  { date: "Jan 1", a: 16000, b: 8200, c: 5200 },
  { date: "Jan 2", a: 12200, b: 9400, c: 8800 },
  { date: "Jan 3", a: 15200, b: 9700, c: 7600 },
  { date: "Jan 4", a: 9800, b: 10200, c: 6000 },
  { date: "Jan 5", a: 9900, b: 19800, c: 13000 },
  { date: "Jan 6", a: 9200, b: 16400, c: 12000 },
  { date: "Jan 7", a: 8400, b: 14000, c: 13800 },
];

function formatK(v: number) {
  if (v === 0) return "0";
  return `${v / 1000}K`;
}

export function ExposureTrendChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={DATA} margin={{ top: 8, right: 8, bottom: 0, left: -4 }}>
        <defs>
          {EXPOSURE_SERIES.map((s) => (
            <linearGradient key={s.key} id={`grad-${s.key}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={s.color} stopOpacity={0.18} />
              <stop offset="100%" stopColor={s.color} stopOpacity={0} />
            </linearGradient>
          ))}
        </defs>
        <CartesianGrid vertical={false} stroke="#ebeff7" />
        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          tickMargin={10}
          interval={0}
          tick={{ fill: "#8d97ae", fontSize: 12, fontFamily: "var(--font-body)" }}
        />
        <YAxis
          ticks={[0, 5000, 10000, 15000, 20000]}
          domain={[0, 20000]}
          tickLine={false}
          axisLine={false}
          width={34}
          tickFormatter={formatK}
          tick={{ fill: "#8d97ae", fontSize: 12, fontFamily: "var(--font-body)" }}
        />
        {EXPOSURE_SERIES.map((s) => (
          <Area
            key={s.key}
            type="linear"
            dataKey={s.key}
            stroke={s.color}
            strokeWidth={1.75}
            fill={`url(#grad-${s.key})`}
            dot={false}
            isAnimationActive={false}
          />
        ))}
      </AreaChart>
    </ResponsiveContainer>
  );
}
