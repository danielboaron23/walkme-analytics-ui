import zoomLogo from "@/assets/logos/zoom.svg";
import serviceNowLogo from "@/assets/logos/servicenow.svg";
import googleDriveLogo from "@/assets/logos/googledrive.svg";
import { cn } from "@/lib/utils";

/**
 * A-Avatar — 24px lavender circle holding either a 2-letter monogram
 * (Proxima Nova 10 / #485686) or a 12px brand logo with a white ring.
 */
const BRAND: Record<string, string> = {
  Zoom: zoomLogo,
  "Service Now": serviceNowLogo,
  "Google Drive": googleDriveLogo,
};

const MONOGRAM: Record<string, string> = {
  SmartHighlight: "SM",
  Gsuite: "GS",
  "Salesforce Lightning": "SF",
};

export function SystemLogo({
  name,
  size = 24,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const brand = BRAND[name];
  return (
    <span
      className={cn(
        "relative flex shrink-0 items-center justify-center rounded-pill bg-info-lavender-tint",
        className
      )}
      style={{ width: size, height: size }}
    >
      {brand ? (
        <>
          <span className="absolute inset-0 rounded-pill ring-1 ring-inset ring-white" />
          <img
            src={brand}
            alt={name}
            style={{ width: size / 2, height: size / 2 }}
            className="relative block"
          />
        </>
      ) : (
        <span
          className="leading-none text-info-lavender"
          style={{ fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 400 }}
        >
          {MONOGRAM[name] ?? name.slice(0, 2).toUpperCase()}
        </span>
      )}
    </span>
  );
}
