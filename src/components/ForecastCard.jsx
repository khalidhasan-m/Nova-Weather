import ForecastDay from "./ForecastDay";
import Card from "./ui/Card";
import Pill from "./ui/Pill";
import { SkeletonLine } from "./ui/Skeleton";

// 7-day forecast strip — composes reusable <ForecastDay/> tiles.
export default function ForecastCard({ daily, loading = false }) {
  // —— Loading state: same shell + skeleton tiles ——
  if (loading || !daily?.length) {
    if (!loading) return null;
    return (
      <Card className="p-6 sm:p-7 mt-5">
        <div className="relative animate-pulse">
          <SkeletonLine className="h-6 w-44 !rounded-full" />
          <div className="grid grid-cols-7 gap-2.5 mt-5 max-[900px]:grid-cols-4 max-[560px]:grid-cols-2">
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className="h-[168px] rounded-2xl bg-slate-200/60" />
            ))}
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6 sm:p-7 mt-5 animate-rise [animation-delay:220ms]">
      <div className="relative">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <Pill className="bg-sky-soft text-sky-deep">7-day forecast</Pill>
          <span className="text-[12.5px] font-semibold text-slate">
            High / low for the coming week
          </span>
        </div>

        <div className="grid grid-cols-7 gap-2.5 mt-5 max-[900px]:grid-cols-4 max-[560px]:grid-cols-2">
          {daily.map((day, i) => (
            <ForecastDay key={day.date || i} day={day} highlight={i === 0} />
          ))}
        </div>
      </div>
    </Card>
  );
}

