import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export const ENGAGEMENT_SERIES = [
  { key: "salesforce", label: "SalesForce Lightning", color: "#d0716c" },
  { key: "workstation", label: "Workstation", color: "#a976d6" },
  { key: "gsuite", label: "Gsuite", color: "#e26921" },
  { key: "servicenow", label: "Service Now", color: "#3099ab" },
  { key: "openai", label: "OpenAI", color: "#d06d91" },
] as const;

// Shapes sampled from the Figma reference (values in thousands of users).
const DATA = [
  { date: "May 4", salesforce: 19500, workstation: 15700, gsuite: 9500, servicenow: 6900, openai: 7400 },
  { date: "May 5", salesforce: 11800, workstation: 11400, gsuite: 7600, servicenow: 9800, openai: 8200 },
  { date: "May 6", salesforce: 9300, workstation: 14300, gsuite: 8400, servicenow: 9400, openai: 7900 },
  { date: "May 7", salesforce: 9500, workstation: 7600, gsuite: 7000, servicenow: 10200, openai: 8600 },
  { date: "May 8", salesforce: 12000, workstation: 9600, gsuite: 3200, servicenow: 19500, openai: 11700 },
  { date: "May 9", salesforce: 11200, workstation: 9100, gsuite: 9000, servicenow: 16400, openai: 12200 },
  { date: "May 10", salesforce: 13800, workstation: 8600, gsuite: 7600, servicenow: 13800, openai: 13400 },
];

function formatK(v: number) {
  if (v === 0) return "0";
  return `${v / 1000}k`;
}

export function EngagementLineChart() {
  return (
    <ResponsiveContainer width="100%" height={210}>
      <LineChart data={DATA} margin={{ top: 8, right: 8, bottom: 0, left: -4 }}>
        <CartesianGrid vertical={false} stroke="#ebeff7" />
        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          tickMargin={10}
          interval={0}
          tick={{ fill: "#616f8f", fontSize: 12, fontFamily: "var(--font-body)" }}
        />
        <YAxis
          ticks={[0, 5000, 10000, 15000, 20000]}
          domain={[0, 20000]}
          tickLine={false}
          axisLine={false}
          width={34}
          tickFormatter={formatK}
          tick={{ fill: "#616f8f", fontSize: 12, fontFamily: "var(--font-body)" }}
        />
        {ENGAGEMENT_SERIES.map((s) => (
          <Line
            key={s.key}
            type="linear"
            dataKey={s.key}
            stroke={s.color}
            strokeWidth={1.75}
            dot={false}
            isAnimationActive={false}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}
