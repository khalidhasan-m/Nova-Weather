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
      {/* Soft "sky bubble" behind the icon — the Lottie clouds are very pale
          (#e6effc) and disappear on the light tile backgrounds without it. */}
      <div className="relative my-1 flex items-center justify-center w-[66px] h-[66px]">
        <span
          className="absolute inset-0 rounded-full ring-1 ring-sky-200/70"
          style={{
            background: "linear-gradient(180deg, #ffffff 0%, #f0f7ff 45%, #cfe6fc 100%)",
            boxShadow: "0 1px 3px rgba(2, 52, 102, 0.12)",
          }}
          aria-hidden="true"
        />
        <WeatherLottie
          kind="weather"
          name={day.icon}
          className="relative w-[56px] h-[56px]"
          style={{
            // The Lottie cloud fill is very pale (#e6effc) — at 56px it melts
            // into light backgrounds. Darkening + a drop-shadow gives the art
            // real definition inside the sky bubble.
            filter: "brightness(0.74) saturate(1.25) drop-shadow(0 2px 2px rgba(3, 74, 138, 0.28))",
          }}
        />
      </div>
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
