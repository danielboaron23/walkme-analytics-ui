import walkPart from "@/assets/logos/walkme-walk.svg";
import mePart from "@/assets/logos/walkme-me.svg";

/**
 * A-WalkMeLogo (Product / Dark) — exact Figma asset, 91×30, two SVG groups
 * ("walk" wordmark + "me" pill). Sized/positioned explicitly because the
 * source SVGs use width/height 100% + preserveAspectRatio="none".
 */
export function WalkMeLogo({ className }: { className?: string }) {
  return (
    <div
      className={className}
      style={{ width: 91, height: 30, position: "relative", overflow: "hidden" }}
    >
      <img
        src={walkPart}
        alt="walk"
        style={{ position: "absolute", left: 0, top: 1.1, width: 47, height: 18.8, display: "block" }}
      />
      <img
        src={mePart}
        alt="me"
        style={{ position: "absolute", left: 47.7, top: 0, width: 43.3, height: 30, display: "block" }}
      />
    </div>
  );
}
