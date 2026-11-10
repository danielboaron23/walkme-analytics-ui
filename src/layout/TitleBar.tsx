import { Icon } from "@/components/walkme/Icon";
import { TextButton } from "@/components/walkme/ui/TextButton";

/**
 * O-Layout-TitleBar — page title + right-side actions. Supports the
 * Systems-Overview variant (outlined Export) and the dashboard variant
 * (back chevron + environment dropdown + text Export / Insights Classic).
 */
export function TitleBar({
  title,
  icon,
  environment,
  exportVariant = "outline",
  showInsightsClassic = false,
  onBack,
}: {
  title: string;
  icon?: React.ReactNode;
  environment?: string;
  exportVariant?: "outline" | "link";
  showInsightsClassic?: boolean;
  onBack?: () => void;
}) {
  return (
    <div className="flex h-26 items-center justify-between px-sp80">
      <div className="flex items-center gap-sp30">
        {onBack ? (
          <button
            type="button"
            onClick={onBack}
            className="flex h-6 w-6 items-center justify-center text-icon hover:text-text-primary"
          >
            <Icon name="chevron-left" size={20} />
          </button>
        ) : (
          icon
        )}
        <h1 className="wm-h1 text-text-primary">{title}</h1>
        {environment && (
          <>
            <span className="mx-sp10 text-divider-on-gray">|</span>
            <button
              type="button"
              className="flex items-center gap-sp20 text-text-secondary hover:text-text-primary"
            >
              <span className="wm-t2-semibold">{environment}</span>
              <Icon name="chevron-down" size={14} className="text-icon" />
            </button>
          </>
        )}
      </div>

      <div className="flex items-center gap-sp60">
        <TextButton icon="export" variant={exportVariant}>Export</TextButton>
        {showInsightsClassic && (
          <TextButton icon="insights">Go to Insights Classic</TextButton>
        )}
      </div>
    </div>
  );
}
