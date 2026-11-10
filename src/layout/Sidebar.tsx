import { Icon, type IconName } from "@/components/walkme/Icon";
import { cn } from "@/lib/utils";

const NAV: { icon: IconName; label: string; active?: boolean }[] = [
  { icon: "sb-favorites", label: "Favorites" },
  { icon: "sb-analytics", label: "Analytics", active: true },
  { icon: "sb-content", label: "Content" },
  { icon: "sb-tools", label: "Tools" },
  { icon: "sb-admin", label: "Admin" },
];

/**
 * O-Sidebar-LeftNavigation — 64px rail (bg grey tint-5) with 36px icon boxes;
 * active item = brand-blue box + white icon. Labels are Poppins SemiBold 10.
 */
export function Sidebar() {
  return (
    <nav className="flex h-full w-16 shrink-0 flex-col items-center gap-sp10 border-r border-divider-on-gray bg-bg-tint px-sp5 pt-sp20">
      {NAV.map(({ icon, label, active }) => (
        <button
          key={label}
          type="button"
          className="flex w-full flex-col items-center gap-sp10 px-sp5 py-sp40 outline-none"
        >
          <span
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-cr30",
              active ? "bg-brand text-text-inverted" : "text-text-primary"
            )}
          >
            <Icon name={icon} size={20} />
          </span>
          <span className="wm-h5 text-center text-text-primary">{label}</span>
        </button>
      ))}
    </nav>
  );
}
