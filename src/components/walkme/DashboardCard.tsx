import { Icon } from "@/components/walkme/Icon";
import { cn } from "@/lib/utils";

/**
 * O-Dashboard-Diagramma shell: white rounded card with
 * M-Dashboard-Header (title + info icon + optional right slot),
 * a content body, and an optional 24px footer.
 */
export function DashboardCard({
  title,
  info = true,
  headerRight,
  footer,
  className,
  bodyClassName,
  children,
}: {
  title: React.ReactNode;
  info?: boolean;
  headerRight?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  bodyClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className={cn(
        "flex flex-col rounded-cr40 bg-bg-surface px-sp60 py-sp40",
        className
      )}
    >
      <header className="flex h-[60px] shrink-0 items-center justify-between">
        <div className="flex items-center gap-sp20">
          <h3 className="wm-t1-bold text-text-primary">{title}</h3>
          {info && <Icon name="info" size={16} className="text-icon" />}
        </div>
        {headerRight}
      </header>
      <div className={cn("flex min-h-0 flex-1 flex-col", bodyClassName)}>
        {children}
      </div>
      {footer !== undefined && (
        <footer className="flex h-6 shrink-0 items-center">{footer}</footer>
      )}
    </section>
  );
}
