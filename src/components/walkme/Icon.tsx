// Real WalkMe icons (downloaded from the Figma design system).
// Inlined as raw SVG with their colors swapped to `currentColor`, so each
// icon inherits the current text color (text-icon / text-brand / text-white …).
import menu from "@/assets/icons/menu.svg?raw";
import grid from "@/assets/icons/grid.svg?raw";
import chevronDown from "@/assets/icons/chevron-down.svg?raw";
import chevronLeft from "@/assets/icons/chevron-left.svg?raw";
import search from "@/assets/icons/search.svg?raw";
import bell from "@/assets/icons/bell.svg?raw";
import help from "@/assets/icons/help.svg?raw";
import insights from "@/assets/icons/insights.svg?raw";
import exportIcon from "@/assets/icons/export.svg?raw";
import calendar from "@/assets/icons/calendar.svg?raw";
import filter from "@/assets/icons/filter.svg?raw";
import info from "@/assets/icons/info.svg?raw";
import list from "@/assets/icons/list.svg?raw";
import globe from "@/assets/icons/globe.svg?raw";
import tableExport from "@/assets/icons/table-export.svg?raw";
import columns from "@/assets/icons/columns.svg?raw";
import duplicate from "@/assets/icons/duplicate.svg?raw";
import target from "@/assets/icons/target.svg?raw";
import sbFavorites from "@/assets/icons/sb-favorites.svg?raw";
import sbAnalytics from "@/assets/icons/sb-analytics.svg?raw";
import sbContent from "@/assets/icons/sb-content.svg?raw";
import sbTools from "@/assets/icons/sb-tools.svg?raw";
import sbAdmin from "@/assets/icons/sb-admin.svg?raw";
import kpiUsers from "@/assets/icons/kpi-users.svg?raw";
import kpiPlay from "@/assets/icons/kpi-play.svg?raw";
import kpiGoal from "@/assets/icons/kpi-goal.svg?raw";
import close from "@/assets/icons/close.svg?raw";
import panelLayout from "@/assets/icons/panel-layout.svg?raw";
import wideLayout from "@/assets/icons/wide-layout.svg?raw";
import check from "@/assets/icons/check.svg?raw";
import swt from "@/assets/icons/swt.svg?raw";

export const ICONS = {
  menu, grid, "chevron-down": chevronDown, "chevron-left": chevronLeft,
  search, bell, help, insights, export: exportIcon, calendar, filter, info,
  list, globe, "table-export": tableExport, columns, duplicate, target,
  "sb-favorites": sbFavorites, "sb-analytics": sbAnalytics, "sb-content": sbContent,
  "sb-tools": sbTools, "sb-admin": sbAdmin,
  "kpi-users": kpiUsers, "kpi-play": kpiPlay, "kpi-goal": kpiGoal,
  close, "panel-layout": panelLayout, "wide-layout": wideLayout, check, swt,
} as const;

export type IconName = keyof typeof ICONS;

export function Icon({
  name,
  size = 16,
  className,
  rotate,
}: {
  name: IconName;
  size?: number;
  className?: string;
  rotate?: number;
}) {
  return (
    <span
      aria-hidden
      className={className}
      style={{
        display: "inline-flex",
        width: size,
        height: size,
        flexShrink: 0,
        lineHeight: 0,
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
      }}
      dangerouslySetInnerHTML={{ __html: ICONS[name] }}
    />
  );
}
