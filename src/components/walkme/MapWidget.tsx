import { Icon } from "@/components/walkme/Icon";
import { Panel } from "@/components/walkme/Panel";
import { ButtonGroupToggle } from "@/components/walkme/ButtonGroupToggle";
import mapBase from "@/assets/screen2/map-base.svg";
import mapBrazil from "@/assets/screen2/map-brazil.svg";

// Native map artwork ratio is 600:292.
const MAP_W = 680;
const MAP_H = Math.round((MAP_W * 292) / 600);

export function MapWidget({ className }: { className?: string }) {
  return (
    <Panel
      title="From where users access Salesforce Lightening"
      className={className}
      footer={false}
      headerRight={
        <ButtonGroupToggle
          active="right"
          left={<Icon name="list" size={16} />}
          right={<Icon name="globe" size={16} />}
        />
      }
    >
      <div className="flex flex-1 items-center justify-center pb-sp40">
        <div className="relative" style={{ width: MAP_W, height: MAP_H }}>
          <img src={mapBase} alt="World map" className="absolute inset-0 h-full w-full" />
          <img src={mapBrazil} alt="" className="absolute inset-0 h-full w-full" />
        </div>
      </div>
    </Panel>
  );
}
