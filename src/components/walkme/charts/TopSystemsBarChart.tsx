import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { SystemLogo } from "@/components/walkme/SystemLogo";

const DATA = [
  { system: "SmartHighlight", active: 1355, interacted: 0 },
  { system: "Gsuite", active: 1140, interacted: 285 },
  { system: "Zoom", active: 1040, interacted: 10 },
  { system: "Service Now", active: 910, interacted: 360 },
  { system: "Google Drive", active: 680, interacted: 130 },
];

const ACTIVE = "#afbff7";
const INTERACTED = "#8b9ddb";

function formatK(v: number) {
  if (v < 1000) return `${v}`;
  return `${v / 1000}k`;
}

/** Ranked row label: logo chip + full system name, never truncated. */
function AxisTick({ x, y, payload }: any) {
  return (
    <foreignObject x={x - 156} y={y - 14} width={150} height={28}>
      <div className="flex h-7 items-center gap-sp20">
        <SystemLogo name={payload.value} size={24} />
        <span className="wm-t2 whitespace-nowrap text-text-primary">
          {payload.value}
        </span>
      </div>
    </foreignObject>
  );
}

/** Top 5 systems, ranked by active users (horizontal bars). */
export function TopSystemsBarChart() {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart
        layout="vertical"
        data={DATA}
        barGap={2}
        barCategoryGap="26%"
        margin={{ top: 4, right: 16, bottom: 0, left: 0 }}
      >
        <CartesianGrid horizontal={false} stroke="#ebeff7" />
        <XAxis
          type="number"
          ticks={[0, 400, 800, 1200, 1600]}
          domain={[0, 1600]}
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tick={{ fill: "#616f8f", fontSize: 12, fontFamily: "var(--font-body)" }}
          tickFormatter={formatK}
        />
        <YAxis
          type="category"
          dataKey="system"
          tickLine={false}
          axisLine={false}
          interval={0}
          width={162}
          tick={<AxisTick />}
        />
        <Bar dataKey="active" fill={ACTIVE} barSize={12} radius={[0, 4, 4, 0]} isAnimationActive={false} />
        <Bar dataKey="interacted" fill={INTERACTED} barSize={12} radius={[0, 4, 4, 0]} isAnimationActive={false} />
      </BarChart>
    </ResponsiveContainer>
  );
}
