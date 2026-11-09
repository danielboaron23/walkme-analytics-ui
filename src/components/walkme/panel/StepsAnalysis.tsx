import { Icon, type IconName } from "@/components/walkme/Icon";
import { cn } from "@/lib/utils";

const LINE = "#d5d9e2";

/** A flow node — circle or diamond — with a count badge and a label below. */
function FlowNode({
  shape,
  color,
  icon,
  badge = "18",
  label,
}: {
  shape: "circle" | "diamond";
  color: string;
  icon: IconName;
  badge?: string;
  label?: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        {shape === "circle" ? (
          <span className="flex h-11 w-11 items-center justify-center rounded-pill text-white" style={{ backgroundColor: color }}>
            <Icon name={icon} size={20} />
          </span>
        ) : (
          <span className="flex h-11 w-11 items-center justify-center rounded-[12px] text-white"
            style={{ backgroundColor: color, transform: "rotate(45deg)" }}>
            <span style={{ transform: "rotate(-45deg)" }}>
              <Icon name={icon} size={20} />
            </span>
          </span>
        )}
        <span className="absolute -right-6 top-1 flex h-6 w-6 items-center justify-center rounded-pill border border-divider-el bg-bg-surface wm-t4 text-text-secondary">
          {badge}
        </span>
      </div>
      {label && <span className="mt-sp30 wm-t2 text-text-primary">{label}</span>}
    </div>
  );
}

function VLine({ h = 28 }: { h?: number }) {
  return <span style={{ width: 1, height: h, backgroundColor: LINE }} />;
}

function Branch() {
  return (
    <div className="relative mt-sp30 h-12 w-[300px]">
      <svg width="300" height="48" className="absolute inset-0">
        <path d="M150 0 V12 M40 12 H260 M40 12 V40 M260 12 V40" stroke={LINE} strokeWidth="1" fill="none" />
      </svg>
      <span className="absolute left-[40px] top-7 -translate-x-1/2 wm-t2 text-text-secondary">NO</span>
      <span className="absolute left-[260px] top-7 -translate-x-1/2 wm-t2 text-text-secondary">YES</span>
    </div>
  );
}

/** Smart Walk-Thru steps analysis — vertical flow diagram (scrolls inside its card). */
export function StepsAnalysis() {
  return (
    <div className={cn("flex flex-col items-center pt-sp40")}>
      <FlowNode shape="circle" color="#385feb" icon="kpi-play" label="On Home Page?" />
      <VLine />
      <FlowNode shape="diamond" color="#e26921" icon="swt" label="On Home page?" />
      <Branch />

      {/* leaf nodes */}
      <div className="flex w-[300px] items-start justify-between">
        <FlowNode shape="circle" color="#e26921" icon="swt" label="On Home page?" />
        <FlowNode shape="circle" color="#385feb" icon="kpi-play" label="On Home Page?" />
      </div>

      <VLine />
      <FlowNode shape="diamond" color="#e26921" icon="swt" label="Clicked next?" />
      <Branch />

      <div className="flex w-[300px] items-start justify-between pb-sp40">
        <FlowNode shape="circle" color="#e26921" icon="swt" label="On Form page?" />
        <FlowNode shape="circle" color="#385feb" icon="kpi-play" label="Completed" />
      </div>
    </div>
  );
}
