export function SkeletonLine({ className = "" }) {
  return (
    <div
      className={`animate-pulse rounded-full bg-slate-200/80 ${className}`}
      aria-hidden="true"
    />
  );
}

// Matches the Weather page grid so content doesn't jump when data arrives.
export function WeatherSkeleton() {
  return (
    <div className="grid md:grid-cols-2 gap-5 items-start" aria-label="Loading weather">
      <div className="space-y-4">
        <div className="rounded-2xl bg-white/70 ring-1 ring-white/60 shadow-2xl p-8 animate-pulse">
          <SkeletonLine className="h-6 w-32" />
          <SkeletonLine className="h-8 w-48 mt-4" />
          <SkeletonLine className="h-24 w-40 mt-6" />
          <div className="grid grid-cols-3 gap-3 mt-6 max-[560px]:grid-cols-1">
            <SkeletonLine className="h-[64px] !rounded-[18px]" />
            <SkeletonLine className="h-[64px] !rounded-[18px]" />
            <SkeletonLine className="h-[64px] !rounded-[18px]" />
          </div>
        </div>
        <div className="rounded-2xl bg-white/70 ring-1 ring-white/60 shadow-2xl p-7 animate-pulse">
          <SkeletonLine className="h-5 w-40" />
          <SkeletonLine className="h-6 w-3/4 mt-3" />
        </div>
      </div>
      <div className="rounded-2xl bg-white/70 ring-1 ring-white/60 shadow-2xl px-7 py-8 animate-pulse">
        <SkeletonLine className="h-6 w-28" />
        <div className="mx-auto my-4 h-[220px] w-[220px] rounded-3xl bg-slate-200/80" />
        <SkeletonLine className="h-8 w-44 mx-auto" />
        <SkeletonLine className="h-5 w-56 mx-auto mt-2" />
      </div>
    </div>
  );
}
