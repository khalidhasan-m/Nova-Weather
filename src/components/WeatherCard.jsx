import { Droplet, MapPin, Thermometer, Wind } from "lucide-react";
import { getWeatherTheme } from "../utils/getTheme";
import Card from "./ui/Card";
import Pill from "./ui/Pill";
import StatItem from "./ui/StatItem";

const STATS = [
  { icon: Thermometer, label: "Feels like", key: "feelsLike", suffix: "°C" },
  { icon: Droplet, label: "Humidity", key: "humidity", suffix: "%" },
  { icon: Wind, label: "Wind speed", key: "windSpeed", suffix: " km/h" },
];

export default function WeatherCard({ place, weather, loading = false }) {
  const theme = getWeatherTheme(weather?.icon);

  // —— Loading state: same card shell + skeleton rows (no layout shift) ——
  if (loading || !weather) {
    return (
      <Card className="p-8 max-[480px]:p-6">
        <div className="relative animate-pulse">
          <span className="pill bg-sky-soft text-sky-deep">Today's weather</span>
          <div className="h-7 w-44 rounded-full bg-slate-200/80 mt-4" />
          <div className="h-24 w-48 rounded-2xl bg-slate-200/80 mt-6 mb-7" />
          <div className="grid grid-cols-3 gap-3 max-[560px]:grid-cols-1">
            <div className="h-[64px] rounded-[18px] bg-slate-200/80" />
            <div className="h-[64px] rounded-[18px] bg-slate-200/80" />
            <div className="h-[64px] rounded-[18px] bg-slate-200/80" />
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-8 max-[480px]:p-6 animate-rise">
      {/* A hint of the weather colour in the corner of the white card. */}
      <span
        className="absolute -top-24 -right-20 w-64 h-64 rounded-full blur-3xl pointer-events-none"
        style={{ background: theme.accent, opacity: 0.16 }}
        aria-hidden="true"
      />

      <div className="relative">
        <Pill className="bg-sky-soft text-sky-deep">Today's weather</Pill>

        <h2 className="flex items-center gap-2 font-display text-[28px] max-[480px]:text-[24px] font-bold mt-4 mb-0 m-0 text-slate-900">
          <MapPin size={21} strokeWidth={2.5} className="text-sky flex-shrink-0" />
          {place?.name ?? "—"}
        </h2>

        <div className="flex items-end gap-5 mt-6 mb-7 max-[380px]:flex-col max-[380px]:items-start max-[380px]:gap-2">
          <span
            className="font-display text-[100px] max-[480px]:text-[78px] font-extrabold leading-[0.82]"
            style={{ color: theme.strong }}
          >
            {weather.temperature}
            <span className="text-[52px] max-[480px]:text-[40px] align-top">°</span>
          </span>
          <div className="pb-2">
            {/* Short headline, e.g. "Rain" */}
            <span className="block font-display text-[21px] font-bold text-slate-900">
              {weather.conditionLabel}
            </span>
            {/* Exact meaning of the weather code, e.g. "Heavy rain" */}
            <span className="block text-[14px] text-slate">{weather.description}</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 max-[560px]:grid-cols-1">
          {STATS.map(({ icon, label, key, suffix }) => (
            <StatItem key={label} icon={icon} label={label} value={`${weather[key]}${suffix}`} />
          ))}
        </div>
      </div>
    </Card>
  );
}