import { Icon, type IconName } from "@/components/walkme/Icon";
import { cn } from "@/lib/utils";

/** A-Button-Text — brand text button with an optional leading icon. */
export function TextButton({
  children,
  icon,
  variant = "link",
  onClick,
  className,
}: {
  children: React.ReactNode;
  icon?: IconName;
  variant?: "link" | "outline";
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex items-center gap-sp20 text-brand",
        variant === "outline"
          ? "rounded-cr20 border border-divider-on-gray bg-bg-surface px-sp30 py-1.5 hover:bg-brand-ghost"
          : "hover:text-brand-hover",
        className
      )}
    >
      {icon && <Icon name={icon} size={16} />}
      <span className="wm-t2-semibold">{children}</span>
    </button>
  );
}
