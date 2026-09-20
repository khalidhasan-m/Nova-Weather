import WeatherLottie from "./WeatherLottie";

// Polished loading state: branded card shell + animation + skeleton text.
// Used while the forecast is being fetched (no layout shift).
const Loader = ({ message = "Getting your weather..." }) => {
  return (
    <div className="flex justify-center w-full">
      <div className="relative overflow-hidden w-full max-w-md rounded-2xl bg-white/90 shadow-2xl ring-1 ring-white/60 px-8 py-10 text-center">
        <span
          className="absolute -top-16 -right-14 w-52 h-52 rounded-full blur-3xl pointer-events-none"
          style={{ background: "#bae6fd", opacity: 0.55 }}
          aria-hidden="true"
        />
        <div className="relative" role="status" aria-live="polite">
          <WeatherLottie kind="weather" name="cloudy" className="w-[130px] h-[130px] mx-auto" />
          <p className="text-[16px] font-bold text-slate-900 mt-3 mb-0">{message}</p>
          <div className="mx-auto mt-4 max-w-[220px] space-y-2 animate-pulse" aria-hidden="true">
            <div className="h-2.5 rounded-full bg-slate-200/80" />
            <div className="h-2.5 rounded-full bg-slate-200/80 w-3/4 mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;