/** M-Dashboard-CardItem-Legend — row of colored dots + labels. */
export function ChartLegend({
  items,
}: {
  items: { color: string; label: string }[];
}) {
  return (
    <div className="flex h-10 flex-wrap items-center gap-sp60">
      {items.map((it, i) => (
        <div key={i} className="flex items-center gap-sp20">
          <span
            className="h-2 w-2 shrink-0 rounded-pill"
            style={{ backgroundColor: it.color }}
          />
          <span className="wm-t3 text-text-secondary">{it.label}</span>
        </div>
      ))}
    </div>
  );
}
