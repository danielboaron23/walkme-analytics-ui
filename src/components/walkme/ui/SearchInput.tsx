import { Icon } from "@/components/walkme/Icon";

/** M-Input-Search — pill search field (read-only presentational). */
export function SearchInput({
  placeholder = "Search...",
  width = 239,
}: {
  placeholder?: string;
  width?: number;
}) {
  return (
    <div
      className="flex h-7 items-center gap-sp10 rounded-pill bg-bg-input px-sp20"
      style={{ width }}
    >
      <Icon name="search" size={16} className="text-text-secondary" />
      <span className="wm-t2 text-text-secondary">{placeholder}</span>
    </div>
  );
}
