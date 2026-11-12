import { Icon } from "@/components/walkme/Icon";
import { cn } from "@/lib/utils";

/**
 * O-Dashboard panel used on the Overview tab: white rounded card with
 * a Proxima-Bold 16 title (A-Text-T1-3) + info icon, optional right slot,
 * a content body, and a faint footer divider (A-Dashboard-Footer).
 */
export function Panel({
  title,
  info = true,
  headerRight,
  className,
  bodyClassName,
  footer = true,
  children,
}: {
  title: string;
  info?: boolean;
  headerRight?: React.ReactNode;
  className?: string;
  bodyClassName?: string;
  footer?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      className={cn(
        "flex flex-col overflow-hidden rounded-cr40 bg-bg-surface",
        className
      )}
    >
      <header className="flex shrink-0 items-center gap-sp30 px-sp60 py-sp40">
        <div className="flex flex-1 items-center gap-sp20">
          <span className="wm-t1-bold text-text-primary">{title}</span>
          {info && <Icon name="info" size={16} className="text-icon" />}
        </div>
        {headerRight}
      </header>
      <div className={cn("flex min-h-0 flex-1 flex-col px-sp60", bodyClassName)}>
        {children}
      </div>
      {footer && (
        <div className="flex shrink-0 items-center px-sp60 py-sp30">
          <div className="h-px w-full bg-divider-el" />
        </div>
      )}
    </section>
  );
}
