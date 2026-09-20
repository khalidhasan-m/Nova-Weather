import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { ArrowLeft, MapPin } from "lucide-react";
import Loader from "../components/Loader";
import LocationModal from "../components/LocationModal";
import ForecastCard from "../components/ForecastCard";
import RecommandationCard from "../components/RecommandationCard";
import WeatherCard from "../components/WeatherCard";
import WeatherType from "../components/WeatherType";
import { WeatherSkeleton } from "../components/ui/Skeleton";
import ErrorPage from "./ErrorPage";
import { getWeather } from "../services/get-weather";
import { getWeatherTheme } from "../utils/getTheme";
import { getRecommandations } from "../utils/getRecommandation";

const Weather = () => {
  const value = useLocation();
  const navigate = useNavigate();
  const place = value.state?.location;
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!place) {
      return;
    }
    const fetchWeather = async () => {
      setLoading(true);
      setFetchError("");
      try {
        const result = await getWeather(place);
        setWeather(result);
      } catch (error) {
        console.log(error);
        setFetchError(error?.message || "We couldn't fetch the weather right now.");
      } finally {
        setLoading(false);
        setOpen(false);
      }
    };

    fetchWeather();
  }, [place]);

  const theme = getWeatherTheme(weather?.icon);
  const isDark = weather?.icon === "clear_night" || weather?.icon === "storm";

  // 🌈 Paint the whole page + browser background with the weather colour.
  useEffect(() => {
    const pageBg = weather ? theme.page : "linear-gradient(135deg, #eff6ff 0%, #dbeafe 50%, #bfdbfe 100%)";
    document.body.style.background = pageBg;
    return () => {
      document.body.style.background = "";
    };
  }, [weather, theme.page]);

  // 🧭 No location chosen (e.g. opened /weather directly) → branded error page.
  if (!place) {
    return (
      <ErrorPage
        variant="location"
        onRetry={() => navigate("/")}
      />
    );
  }

  return (
    <div
      className="w-full min-h-[calc(100vh-4rem)] rounded-3xl px-4 py-6 sm:px-8 sm:py-8 transition-all duration-700"
      style={{ background: weather ? theme.page : "transparent" }}
    >
      <div className="max-w-6xl mx-auto">
        <header className="pb-5">
          {!loading && (
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div>
                <Link
                  className={`inline-flex items-center gap-1.5 text-[14px] font-bold rounded-full px-4 py-2 border-2 backdrop-blur transition-all hover:scale-[1.03] no-underline ${
                    isDark
                      ? "bg-white/10 text-white border-white/25 hover:border-white/50"
                      : "bg-white/80 text-slate-700 border-white hover:border-blue-200"
                  }`}
                  to={"/"}
                >
                  <ArrowLeft size={16} strokeWidth={2.5} />
                  Back To Home
                </Link>
              </div>
              <div>
                <h1 className={`font-display text-xl font-extrabold ${isDark ? "text-white" : "text-slate-900"}`}>
                  Nova <span style={{ color: isDark ? theme.accent : "#3b82f6" }}>Weather</span>
                </h1>
              </div>
              <div>
                <button
                  onClick={() => setOpen(true)}
                  className="inline-flex items-center gap-1.5 text-[14px] font-bold hover:scale-[1.03] active:scale-95 transition-all bg-blue-500 hover:bg-blue-600 px-5 cursor-pointer py-2 rounded-full text-white shadow-lg shadow-blue-500/30"
                  type="button"
                >
                  <MapPin size={16} strokeWidth={2.5} />
                  Change location
                </button>
              </div>
            </div>
          )}
        </header>
        {loading ? (
          <WeatherSkeleton />
        ) : fetchError ? (
          <ErrorPage
            variant="weather"
            customMessage={fetchError}
            onRetry={() => navigate(0)}
          />
        ) : (
          <>
            <div className="grid md:grid-cols-2 gap-5 items-start">
              <div className="space-y-4">
                {/* Weather Card  */}
                <WeatherCard place={place} weather={weather} loading={loading} />

                {/* Weather Recommandation  */}
                <RecommandationCard
                  recommendation={getRecommandations(weather)}
                  loading={loading}
                />
              </div>

              {/* Weather Type  */}
              <WeatherType place={place} weather={weather} loading={loading} />
            </div>

            {/* Next 7 days forecast */}
            {(loading || weather?.daily?.length > 0) && (
              <ForecastCard daily={weather?.daily} loading={loading} />
            )}
          </>
        )}

        {open && <LocationModal onClose={() => setOpen(false)} />}
      </div>
    </div>
  );
};

export default Weather;
