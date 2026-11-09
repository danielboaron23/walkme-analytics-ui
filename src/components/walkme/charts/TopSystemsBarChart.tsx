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
  if (v >= 1000) return `${(v / 1000).toFixed(1).replace(".", ",")}k`;
  return `${v}`;
}

function AxisTick({ x, y, payload }: any) {
  return (
    <foreignObject x={x - 60} y={y + 4} width={120} height={28}>
      <div className="flex items-center justify-center gap-sp10">
        <SystemLogo name={payload.value} size={24} />
        <span className="wm-t3 text-text-secondary">{payload.value}</span>
      </div>
    </foreignObject>
  );
}

export function TopSystemsBarChart() {
  return (
    <ResponsiveContainer width="100%" height={218}>
      <BarChart data={DATA} barGap={4} barCategoryGap="22%" margin={{ top: 8, right: 0, bottom: 0, left: -8 }} style={{ backgroundColor: "var(--color-text-primary)" }}>
        <CartesianGrid vertical={false} stroke="#ebeff7" />
        <XAxis
          dataKey="system"
          tickLine={false}
          axisLine={false}
          interval={0}
          height={28}
          tick={<AxisTick />}
        />
        <YAxis
          ticks={[0, 400, 800, 1200, 1600]}
          domain={[0, 1600]}
          tickLine={false}
          axisLine={false}
          width={34}
          tick={{ fill: "#616f8f", fontSize: 12, fontFamily: "var(--font-body)" }}
          tickFormatter={formatK}
        />
        <Bar dataKey="active" fill={ACTIVE} barSize={59} radius={[4, 4, 0, 0]} isAnimationActive={false} />
        <Bar dataKey="interacted" fill={INTERACTED} barSize={59} radius={[4, 4, 0, 0]} isAnimationActive={false} />
      </BarChart>
    </ResponsiveContainer>
  );
}
