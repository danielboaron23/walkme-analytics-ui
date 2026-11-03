/** Shimmer bar used across the SWT loading skeleton. */
function Bar({ w, h = 8, className = "" }: { w: number | string; h?: number; className?: string }) {
  return (
    <span
      className={`block animate-pulse rounded-pill bg-info-lavender-tint ${className}`}
      style={{ width: w, height: h }}
    />
  );
}

function CardSkeleton() {
  return (
    <div className="flex h-[140px] flex-col justify-center gap-sp30 rounded-cr40 bg-bg-surface px-sp60">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-sp30">
          <Bar w={130} h={14} />
          <Bar w={96} h={12} />
        </div>
        <span className="block h-8 w-8 animate-pulse rounded-cr30 bg-info-lavender-tint" />
      </div>
      <Bar w={200} h={8} />
    </div>
  );
}

/** SWT Tab - Loading: 3 skeleton cards + a skeleton table. */
export function SwtLoading() {
  return (
    <div className="flex flex-col gap-sp60">
      {/* KPI cards */}
      <div className="grid grid-cols-3 gap-sp60">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>

      {/* Table */}
      <div className="flex flex-col rounded-cr40 bg-bg-surface px-sp60 py-sp40">
        <div className="flex h-[60px] items-center justify-between">
          <div className="flex items-center gap-sp30">
            <Bar w={150} h={16} />
            <Bar w={36} h={16} />
          </div>
          <div className="flex items-center gap-sp30">
            <Bar w={270} h={28} className="!rounded-cr20" />
            <span className="block h-7 w-7 animate-pulse rounded-pill bg-info-lavender-tint" />
            <span className="block h-7 w-7 animate-pulse rounded-pill bg-info-lavender-tint" />
            <span className="block h-7 w-7 animate-pulse rounded-pill bg-info-lavender-tint" />
          </div>
        </div>
        <div className="flex flex-col">
          {Array.from({ length: 13 }).map((_, i) => (
            <div key={i} className="grid grid-cols-7 gap-sp40 py-sp30">
              {Array.from({ length: 7 }).map((__, j) => (
                <Bar key={j} w="80%" h={10} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
