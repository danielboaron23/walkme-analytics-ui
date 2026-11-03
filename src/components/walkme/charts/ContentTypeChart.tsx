import menu from "@/assets/content-icons/menu.svg";
import swt from "@/assets/content-icons/swt.svg";
import launcher from "@/assets/content-icons/launcher.svg";
import actionbot from "@/assets/content-icons/actionbot.svg";
import resources from "@/assets/content-icons/resources.svg";
import shuttle from "@/assets/content-icons/shuttle.svg";
import shoutout from "@/assets/content-icons/shoutout.svg";
import smarttip from "@/assets/content-icons/smarttip.svg";
import survey from "@/assets/content-icons/survey.svg";
import onboarding from "@/assets/content-icons/onboarding.svg";

const MAX = 2000;
const TICKS = [0, 500, 1000, 1500, 2000];

// interactions / unique values sampled pixel-exact from the Figma render
const ROWS = [
  { icon: menu, label: "Menu & Searches", interactions: 1384, unique: 1100 },
  { icon: swt, label: "Smart Walk-Thrus", interactions: 1176, unique: 940 },
  { icon: launcher, label: "Launchers", interactions: 1057, unique: 850 },
  { icon: actionbot, label: "ActionBot", interactions: 878, unique: 720 },
  { icon: resources, label: "Resources", interactions: 670, unique: 560 },
  { icon: shuttle, label: "Shuttles", interactions: 580, unique: 480 },
  { icon: shoutout, label: "ShoutOuts", interactions: 491, unique: 380 },
  { icon: smarttip, label: "SmartTips", interactions: 438, unique: 360 },
  { icon: survey, label: "Surveys", interactions: 417, unique: 340 },
  { icon: onboarding, label: "Onboarding Tasks", interactions: 380, unique: 300 },
];

const INTERACTIONS = "#6b85d8";
const UNIQUE = "#9eb0e5";
const LABEL_W = 140;
const GAP = 24;

export function ContentTypeChart() {
  return (
    <div className="flex flex-col">
      {/* Summary */}
      <div className="flex items-end gap-sp20 pb-5">
        <span className="wm-h2 text-text-primary">5,547</span>
        <span className="wm-t2-semibold pb-0.5 text-text-primary">Total interactions</span>
      </div>

      {/* Plot: rows with vertical gridlines, axis labels at the bottom */}
      <div className="relative">
        {/* Vertical gridlines spanning the rows */}
        <div
          className="pointer-events-none absolute bottom-6 top-0 flex justify-between"
          style={{ left: LABEL_W + GAP, right: 0 }}
        >
          {TICKS.map((t) => (
            <span key={t} className="w-px bg-divider-el" />
          ))}
        </div>

        {/* Rows */}
        <div className="relative flex flex-col">
          {ROWS.map((r) => (
            <div key={r.label} className="flex items-center gap-sp60 py-sp20">
              <div className="flex shrink-0 items-center gap-sp20" style={{ width: LABEL_W }}>
                <img src={r.icon} alt="" className="h-4 w-4 shrink-0" />
                <span className="wm-t2 truncate text-text-primary">{r.label}</span>
              </div>
              <div className="flex flex-1 flex-col justify-center">
                <div
                  className="h-2 rounded-r-[2px]"
                  style={{ width: `${(r.interactions / MAX) * 100}%`, backgroundColor: INTERACTIONS }}
                />
                <div
                  className="h-2 rounded-r-[2px]"
                  style={{ width: `${(r.unique / MAX) * 100}%`, backgroundColor: UNIQUE }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* X axis labels (bottom) */}
        <div
          className="flex justify-between pt-sp20"
          style={{ marginLeft: LABEL_W + GAP }}
        >
          {TICKS.map((t) => (
            <span key={t} className="wm-t3 -translate-x-1/2 text-text-tertiary first:translate-x-0 last:translate-x-0">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-sp60 pt-sp40">
        <div className="flex items-center gap-sp10">
          <span className="h-2 w-2 rounded-pill" style={{ backgroundColor: INTERACTIONS }} />
          <span className="wm-t3 text-text-primary">Interactions</span>
        </div>
        <div className="flex items-center gap-sp10">
          <span className="h-2 w-2 rounded-pill" style={{ backgroundColor: UNIQUE }} />
          <span className="wm-t3 text-text-primary">Unique users</span>
        </div>
      </div>
    </div>
  );
}
