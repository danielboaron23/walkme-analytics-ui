import { Icon, type IconName } from "@/components/walkme/Icon";

type ColorBox = { bg: string; fg: string };

/** A-Icon-ColorBox — 36px rounded box with a 20px icon in the content color. */
function ColorBoxIcon({ icon, color }: { icon: IconName; color: ColorBox }) {
  return (
    <span
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-cr30"
      style={{ backgroundColor: color.bg, color: color.fg }}
    >
      <Icon name={icon} size={20} />
    </span>
  );
}

/**
 * O-Dashboard-Analyzed-SWT — KPI card: title, big number (H1), subtitle
 * with a semibold lead fragment, and a colored icon box on the right.
 */
export function SwtKpiCard({
  title,
  value,
  lead,
  rest,
  icon,
  color,
}: {
  title: string;
  value: string;
  lead: string;
  rest: string;
  icon: IconName;
  color: ColorBox;
}) {
  return (
    <section className="flex flex-col rounded-cr40 bg-bg-surface">
      <header className="px-sp60 py-sp40">
        <span className="wm-t1-bold text-text-primary">{title}</span>
      </header>
      <div className="flex items-center gap-sp60 px-sp60">
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="wm-h1 text-text-primary">{value}</span>
          <span className="py-0.5 wm-t2 text-text-primary">
            <span className="wm-t2-semibold">{lead}</span>
            {rest}
          </span>
        </div>
        <ColorBoxIcon icon={icon} color={color} />
      </div>
      <div className="px-sp60 py-sp30">
        <div className="h-px w-[348px] max-w-full bg-divider-el" />
      </div>
    </section>
  );
}
