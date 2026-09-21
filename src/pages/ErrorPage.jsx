import { CloudOff, CloudRainWind, Home, MapPin, RotateCcw, SearchX } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router";
import { Lottie } from "lottie-react";

// Lottie files bundled at build time so the error page works even when
// fetch/network is down (a network-error page can't rely on fetch!).
// These live under src/ (not public/) — Vite forbids importing public assets.
import cloudyAnim from "../animations/weather/cloudy.json";
import fogAnim from "../animations/weather/fog.json";
import partlyCloudyAnim from "../animations/weather/partly_cloudy.json";
import stormAnim from "../animations/weather/storm.json";

const PRESETS = {
  notFound: {
    code: "404",
    title: "Lost in the clouds?",
    message: "The page you're looking for drifted away with the wind. Let's bring you back to clear skies.",
    animationData: cloudyAnim,
    icon: SearchX,
  },
  location: {
    code: "No location",
    title: "Where should we look?",
    message: "We need a location to check the sky. Pick a city and we'll fetch the forecast for you.",
    animationData: fogAnim,
    icon: MapPin,
  },
  weather: {
    code: "Weather failed",
    title: "The sky went quiet",
    message: "We couldn't fetch the weather right now. Check your connection and try again in a moment.",
    animationData: stormAnim,
    icon: CloudRainWind,
  },
  city: {
    code: "City not found",
    title: "That city is off the map",
    message: "We couldn't find that place. Double-check the spelling or try a nearby big city.",
    animationData: partlyCloudyAnim,
    icon: CloudOff,
  },
};

export default function ErrorPage({ variant = "notFound", customMessage, onRetry }) {
  const location = useLocation();
  const navigate = useNavigate();
  // Allow passing variant/message through router state: navigate("/error", { state: { variant, message } })
  const stateVariant = location.state?.variant;
  const stateMessage = location.state?.message;
  const preset = PRESETS[stateVariant || variant] || PRESETS.notFound;
  const message = stateMessage || customMessage || preset.message;
  const Icon = preset.icon;

  return (
    <div className="w-full max-w-2xl mx-auto animate-rise">
      <section className="relative overflow-hidden rounded-3xl bg-white/95 shadow-2xl ring-1 ring-white/60 p-8 sm:p-12 text-center">
        {/* soft brand glows */}
        <span
          className="absolute -top-24 -left-20 w-72 h-72 rounded-full blur-3xl pointer-events-none"
          style={{ background: "#bae6fd", opacity: 0.5 }}
          aria-hidden="true"
        />
        <span
          className="absolute -bottom-28 -right-16 w-80 h-80 rounded-full blur-3xl pointer-events-none"
          style={{ background: "#fef9c7", opacity: 0.6 }}
          aria-hidden="true"
        />

        <div className="relative">
          {/* brand */}
          <Link to="/" className="inline-flex items-center gap-2 no-underline">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-blue-500 text-white font-extrabold text-lg shadow-lg">
              N
            </span>
            <span className="font-display text-xl font-extrabold text-slate-900">
              Nova <span className="text-blue-500">Weather</span>
            </span>
          </Link>

          <div className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] mx-auto my-2">
            <Lottie
              key={stateVariant || variant}
              src={preset.animationData}
              autoplay
              loop
              style={{ width: "100%", height: "100%" }}
            />
          </div>

          <span className="pill bg-sky-soft text-sky-deep mx-auto">
            <Icon size={15} strokeWidth={2.5} />
            {preset.code}
          </span>

          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 mb-2">
            {preset.title}
          </h1>
          <p className="text-[15.5px] leading-relaxed text-slate max-w-md mx-auto">{message}</p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-7">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[15px] font-bold bg-blue-500 hover:bg-blue-600 text-white px-6 py-2.5 rounded-full shadow-lg shadow-blue-500/30 hover:scale-[1.03] active:scale-95 transition-all no-underline"
            >
              <Home size={17} strokeWidth={2.5} />
              Back to Home
            </Link>
            {onRetry ? (
              <button
                type="button"
                onClick={onRetry}
                className="inline-flex items-center gap-2 text-[15px] font-bold bg-white text-blue-600 border-2 border-blue-100 hover:border-blue-300 px-6 py-2.5 rounded-full cursor-pointer hover:scale-[1.03] active:scale-95 transition-all"
              >
                <RotateCcw size={17} strokeWidth={2.5} />
                Try Again
              </button>
            ) : (
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 text-[15px] font-bold bg-white text-blue-600 border-2 border-blue-100 hover:border-blue-300 px-6 py-2.5 rounded-full cursor-pointer hover:scale-[1.03] active:scale-95 transition-all"
              >
                <RotateCcw size={17} strokeWidth={2.5} />
                Go Back
              </button>
            )}
          </div>

          <p className="text-[12.5px] text-slate mt-6">
            Nova Weather • Live forecasts, smart suggestions
          </p>
        </div>
      </section>
    </div>
  );
}
