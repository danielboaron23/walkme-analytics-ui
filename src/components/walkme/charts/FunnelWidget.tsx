import { Panel } from "@/components/walkme/Panel";
import funnel1 from "@/assets/screen2/funnel-1.svg";
import funnel2 from "@/assets/screen2/funnel-2.svg";
import funnel3 from "@/assets/screen2/funnel-3.svg";
import dividerImg from "@/assets/screen2/funnel-divider.svg";

const STEPS = [
  { value: "1,329", label: "Active users", img: funnel1, h: 60 },
  { value: "1,305", label: "Users exposed to WalkMe", img: funnel2, h: 47 },
  { value: "1,103", label: "Users interacted with WalkMe", img: funnel3, h: 37 },
];

export function FunnelWidget({ className }: { className?: string }) {
  return (
    <Panel title="Users analysis funnel" info={false} className={className}>
      <div className="flex flex-1 items-stretch">
        {STEPS.map((s, i) => (
          <div key={i} className="relative flex flex-1 flex-col">
            {i > 0 && (
              <img
                src={dividerImg}
                alt=""
                className="absolute left-0 top-0 h-full w-px"
              />
            )}
            <div className={i > 0 ? "pl-sp60" : ""}>
              <div className="flex flex-col">
                <span className="wm-h2 text-text-primary">{s.value}</span>
                <span className="wm-t3 text-text-primary">{s.label}</span>
              </div>
            </div>
            <div className="mt-auto flex h-[60px] items-end pr-px">
              <img src={s.img} alt="" className="block w-full" style={{ height: s.h }} />
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}
