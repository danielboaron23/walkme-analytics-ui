import { useEffect, useRef, useState } from "react";
import { TextButton } from "@/components/walkme/ui/TextButton";
import { cn } from "@/lib/utils";

import backChevron from "@/assets/icons/filter-popup/back-chevron.svg";
import dropdownChevron from "@/assets/icons/filter-popup/dropdown-chevron.svg";
import tagClose from "@/assets/icons/filter-popup/tag-close.svg";
import tagDropdownChevron from "@/assets/icons/filter-popup/tag-dropdown-chevron.svg";
import dividerDevice from "@/assets/icons/filter-popup/divider-device.svg";
import dividerSearch from "@/assets/icons/filter-popup/divider-search.svg";
import searchIcon from "@/assets/icons/filter-popup/search.svg";
import itemUser from "@/assets/icons/filter-popup/item-user.svg";
import itemChevronRight from "@/assets/icons/filter-popup/item-chevron-right.svg";
import itemSite from "@/assets/icons/filter-popup/item-site.svg";
import itemLocation from "@/assets/icons/filter-popup/item-location.svg";
import itemDevice from "@/assets/icons/filter-popup/item-device.svg";
import itemSegment from "@/assets/icons/filter-popup/item-segment.svg";
import itemUserAction from "@/assets/icons/filter-popup/item-user-action.svg";
import itemContent from "@/assets/icons/filter-popup/item-content.svg";
import itemContentEngagement from "@/assets/icons/filter-popup/item-content-engagement.svg";
import itemEvents from "@/assets/icons/filter-popup/item-events.svg";
import itemWorkflow from "@/assets/icons/filter-popup/item-workflow.svg";
import infoHeader from "@/assets/icons/filter-popup/info-header.svg";
import infoRow from "@/assets/icons/filter-popup/info-row.svg";

/** Figma icon exports are mask images: the shape comes from the SVG, the color from the element. */
function MaskIcon({
  src,
  box,
  glyph = box,
  className,
}: {
  src: string;
  box: number;
  glyph?: number;
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={cn("inline-block shrink-0", className)}
      style={{
        width: box,
        height: box,
        maskImage: `url("${src}")`,
        WebkitMaskImage: `url("${src}")`,
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
        maskSize: `${glyph}px ${glyph}px`,
        WebkitMaskSize: `${glyph}px ${glyph}px`,
      }}
    />
  );
}

const SHADOW = "shadow-[0px_16px_24px_0px_#2f426c1c]";

/* ------------------------------------------------------------------ */
/* Step 1 — filter type list                                           */
/* ------------------------------------------------------------------ */

function ListHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-11 w-full flex-col justify-start rounded-t-cr40 bg-bg-surface pt-sp30">
      <div className="flex h-6 items-center px-sp40">
        <span className="wm-t2-semibold text-text-primary">{children}</span>
      </div>
    </div>
  );
}

function ListItem({
  label,
  icon,
  glyph = 16,
  selected = false,
  withDivider = false,
}: {
  label: string;
  icon: string;
  glyph?: number;
  selected?: boolean;
  withDivider?: boolean;
}) {
  return (
    <div className={cn("flex w-full flex-col", withDivider && "h-[52px]")}>
      <div
        className={cn(
          "flex min-h-10 w-full items-start gap-sp20 px-sp40 py-sp20",
          selected ? "bg-bg-input" : "hover:bg-bg-input"
        )}
      >
        <span className="flex items-start pt-sp5">
          <MaskIcon src={icon} box={20} glyph={glyph} className="bg-text-primary" />
        </span>
        <span className="wm-t2 flex-1 py-sp5 text-text-primary">{label}</span>
        <span className="flex items-start pt-sp5">
          <MaskIcon src={itemChevronRight} box={20} className="bg-text-primary" />
        </span>
      </div>
      {withDivider && <img alt="" src={dividerDevice} className="block h-3 w-full" />}
    </div>
  );
}

function SubItem({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex min-h-10 w-full items-center gap-sp20 px-sp40 py-sp20 text-left hover:bg-bg-input"
    >
      <span className="wm-t2 py-sp5 text-text-primary">{label}</span>
      <MaskIcon src={infoRow} box={13} className="bg-text-primary" />
    </button>
  );
}

function FilterTypeList({ onPickWalkMeContent }: { onPickWalkMeContent: () => void }) {
  return (
    <div className="flex w-full flex-col">
      {/* A-DropdownList-Header (12px spacer) */}
      <div className="h-3 w-full rounded-t-cr40 bg-bg-surface" />

      {/* Search */}
      <div className="relative h-[60px] w-full px-sp40">
        <div className="flex items-center rounded-cr20 border border-divider bg-bg-surface px-sp20">
          <div className="flex h-8 flex-1 items-center gap-sp20">
            <MaskIcon src={searchIcon} box={20} className="bg-text-secondary" />
            <span className="wm-t2 text-text-secondary">Search...</span>
          </div>
        </div>
        <img alt="" src={dividerSearch} className="absolute bottom-0 left-0 block h-3 w-full" />
      </div>

      <div className="flex w-full">
        {/* Left block */}
        <div className="filter-popup-scroll flex h-[376px] w-[205px] shrink-0 flex-col overflow-y-auto overflow-x-clip border-r border-divider">
          <ListHeader>General</ListHeader>
          <ListItem label="User" icon={itemUser} />
          <ListItem label="Site" icon={itemSite} />
          <ListItem label="Location" icon={itemLocation} />
          <ListItem label="Device" icon={itemDevice} withDivider />
          <ListHeader>WalkMe</ListHeader>
          <ListItem label="Segment" icon={itemSegment} glyph={17} />
          <ListItem label="User Action" icon={itemUserAction} glyph={20} selected />
          <ListItem label="Content" icon={itemContent} />
          <ListItem label="Content Engagement" icon={itemContentEngagement} />
          <ListItem label="Events" icon={itemEvents} />
          <ListItem label="Workflow" icon={itemWorkflow} glyph={17} />
        </div>

        {/* Right block */}
        <div className="flex h-[376px] min-w-0 flex-1 flex-col">
          <div className="flex min-h-11 w-full flex-col justify-start rounded-t-cr40 bg-bg-surface pt-sp30">
            <div className="flex h-6 items-center gap-sp20 px-sp40">
              <span className="wm-t2-semibold whitespace-pre text-text-primary">Single System Filter </span>
              <MaskIcon src={infoHeader} box={13} className="bg-text-primary" />
            </div>
          </div>
          <SubItem label="WalkMe Content" onClick={onPickWalkMeContent} />
          <SubItem label="Events" onClick={onPickWalkMeContent} />
        </div>
      </div>

      {/* A-DropdownList-Footer (12px spacer) */}
      <div className="h-3 w-full rounded-b-cr40 bg-bg-surface" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Step 2 — WalkMe Content filter form                                 */
/* ------------------------------------------------------------------ */

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <span className="wm-t3 text-text-primary">{children}</span>;
}

function SelectField({ value }: { value: string }) {
  return (
    <div className="flex h-10 w-full items-center gap-sp20 rounded-cr20 bg-bg-input px-sp30">
      <span className="wm-t2 flex-1 whitespace-nowrap text-text-primary">{value}</span>
      <MaskIcon src={dropdownChevron} box={20} className="bg-text-primary" />
    </div>
  );
}

function TagField({ value, closePad }: { value: string; closePad: "pr-sp10" | "pr-[6px]" }) {
  return (
    <div className="flex h-10 w-full items-center gap-sp20 rounded-cr20 bg-bg-input pl-[6px] pr-sp30">
      <div className="flex flex-1 items-center gap-[6px]">
        <div className={cn("flex h-7 items-center gap-sp10 rounded-cr10 bg-tag-bg pl-sp20", closePad)}>
          <span className="wm-t2 whitespace-nowrap text-center text-text-primary">{value}</span>
          <MaskIcon src={tagClose} box={16} className="bg-text-primary" />
        </div>
      </div>
      <MaskIcon src={tagDropdownChevron} box={20} className="bg-text-primary" />
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex w-full flex-col justify-center gap-sp10">
      <FieldLabel>{label}</FieldLabel>
      {children}
    </div>
  );
}

function WalkMeContentForm({ onBack, onSelect }: { onBack: () => void; onSelect: () => void }) {
  return (
    <div className="flex w-full flex-col">
      {/* Header */}
      <div className="flex min-h-11 w-full flex-col rounded-t-cr40 bg-bg-surface pt-sp30">
        <div className="flex h-6 w-full items-center gap-sp20 px-sp40">
          <button
            type="button"
            aria-label="Back"
            onClick={onBack}
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-pill hover:bg-brand-ghost"
          >
            <MaskIcon src={backChevron} box={16} className="bg-icon" />
          </button>
          <span className="wm-t2-semibold flex-1 text-text-primary">WalkMe Content</span>
        </div>
      </div>

      {/* Fields */}
      <div className="flex w-full flex-col px-sp40 py-sp30">
        <div className="flex w-full flex-col gap-sp40">
          <SelectField value="Users Interacted With" />
          <Field label="Content Type">
            <SelectField value="Smart Walk-Thru" />
          </Field>
          <Field label="Name">
            <TagField value="Time Off Approval" closePad="pr-sp10" />
          </Field>
          <Field label="Step">
            <TagField value="Step 1" closePad="pr-[6px]" />
          </Field>
        </div>
      </div>

      {/* Footer */}
      <div className="flex h-12 w-full items-center justify-center rounded-b-cr40 bg-bg-surface">
        <TextButton onClick={onSelect}>Select</TextButton>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Popup                                                               */
/* ------------------------------------------------------------------ */

/**
 * Add Filter pop-up (Figma "FILTER FLOW"): a filter-type list that leads to the
 * "WalkMe Content" filter form. Closes on Escape, outside click, or Select.
 * Selections are presentational — no filter state is applied yet.
 */
export function AddFilterPopup({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState<"types" | "form">("types");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    function onDown(e: MouseEvent) {
      // The trigger lives in the same wrapper as the popup and toggles it itself.
      const scope = ref.current?.parentElement;
      if (scope && !scope.contains(e.target as Node)) onClose();
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, [onClose]);

  return (
    <div
      ref={ref}
      role="dialog"
      aria-label="Add filter"
      className={cn("absolute left-0 top-full z-50 mt-sp20 w-[430px] rounded-cr40 bg-bg-surface", SHADOW)}
    >
      {step === "types" ? (
        <FilterTypeList onPickWalkMeContent={() => setStep("form")} />
      ) : (
        <WalkMeContentForm onBack={() => setStep("types")} onSelect={onClose} />
      )}
    </div>
  );
}
