import { Icon } from "@/components/walkme/Icon";
import { WalkMeLogo } from "@/components/walkme/WalkMeLogo";
import { Avatar } from "@/components/walkme/ui/Avatar";

function HeaderDropdown({ label, withGrid }: { label: string; withGrid?: boolean }) {
  return (
    <button
      type="button"
      className="flex items-center gap-sp20 rounded-cr20 px-sp20 py-1 text-text-secondary hover:bg-bg-app"
    >
      {withGrid && <Icon name="grid" size={18} className="text-icon" />}
      <span className="wm-t2 text-text-primary">{label}</span>
      <Icon name="chevron-down" size={14} className="text-icon" />
    </button>
  );
}

/** M-Layout-Header — 56px white top bar. */
export function Header({ showSearch = false }: { showSearch?: boolean }) {
  return (
    <header className="flex h-14 shrink-0 items-center justify-between border-b border-divider-on-gray bg-bg-surface pl-sp40 pr-sp60">
      <div className="flex items-center gap-sp40">
        <button type="button" className="text-icon hover:text-text-primary">
          <Icon name="menu" size={20} />
        </button>
        <WalkMeLogo />
      </div>

      <div className="flex items-center gap-sp30">
        <HeaderDropdown label="All" withGrid />
        <HeaderDropdown label="All" />
        {showSearch && (
          <button type="button" className="text-icon hover:text-text-primary">
            <Icon name="search" size={20} />
          </button>
        )}
        <button type="button" className="text-icon hover:text-text-primary">
          <Icon name="bell" size={20} />
        </button>
        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center rounded-pill bg-brand-ghost-hover text-brand"
        >
          <Icon name="help" size={20} />
        </button>
        <Avatar initials="DT" size={32} />
      </div>
    </header>
  );
}
