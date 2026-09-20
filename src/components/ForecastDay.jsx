import WeatherLottie from "./WeatherLottie";

// Single day tile — reusable unit of the 7-day strip.
export default function ForecastDay({ day, highlight = false }) {
  return (
    <div
      title={day.fullDay}
      className={`flex flex-col items-center text-center rounded-2xl border px-2 py-4 transition-all hover:-translate-y-1 hover:shadow-lg ${
        highlight
          ? "bg-[#eaf4ff] border-sky-light"
          : "bg-[#f7fafe] border-line hover:bg-sky-soft"
      }`}
    >
      <span
        className={`text-[12.5px] font-extrabold uppercase tracking-wide ${
          highlight ? "text-sky-deep" : "text-slate"
        }`}
      >
        {day.day}
      </span>
      <WeatherLottie
        kind="weather"
        name={day.icon}
        className="w-[56px] h-[56px] my-1"
      />
      <span className="text-[15px] font-extrabold text-slate-900 leading-none">
        {day.high}°
      </span>
      <span className="text-[12.5px] font-semibold text-slate mt-1">
        {day.low}°
      </span>
      <span
        className={`mt-2 text-[11px] font-bold rounded-full px-2 py-0.5 ${
          day.precipChance >= 40
            ? "bg-blue-100 text-blue-700"
            : "bg-slate-100 text-slate-500"
        }`}
      >
        {day.precipChance}% 💧
      </span>
    </div>
  );
}
