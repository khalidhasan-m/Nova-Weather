import { useEffect } from "react";
import { useState } from "react";
import { CloudSun, Droplets, MapPin, Wind } from "lucide-react";
import LocationModal from "../components/LocationModal";

const Home = () => {
  const [click, setClick] = useState(false);

  // Reset to Nova brand sky while on home.
  useEffect(() => {
    document.body.style.background =
      "linear-gradient(135deg, #eff6ff 0%, #dbeafe 50%, #bfdbfe 100%)";
    return () => {
      document.body.style.background = "";
    };
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto text-center">
      <section className="relative overflow-hidden rounded-3xl bg-white/90 shadow-2xl ring-1 ring-white/60 px-8 py-12 sm:px-12">
        <span
          className="absolute -top-24 -right-20 w-72 h-72 rounded-full blur-3xl pointer-events-none"
          style={{ background: "#fde68a", opacity: 0.55 }}
          aria-hidden="true"
        />
        <span
          className="absolute -bottom-28 -left-16 w-80 h-80 rounded-full blur-3xl pointer-events-none"
          style={{ background: "#bae6fd", opacity: 0.6 }}
          aria-hidden="true"
        />

        <div className="relative">
          <span className="pill bg-sky-soft text-sky-deep">
            <CloudSun size={15} strokeWidth={2.5} />
            Live weather for any city
          </span>
          <h1 className="font-display text-5xl sm:text-6xl font-extrabold text-slate-900 mt-5">
            Nova <span className="text-blue-500">Weather</span>
          </h1>
          <p className="py-4 text-[15.5px] text-slate max-w-md mx-auto leading-relaxed">
            Check your weather today in Nova Weather — the whole page changes
            colour with the sky: golden for sun, blue for rain, grey for clouds.
          </p>

          <div className="flex justify-center pt-1">
            <button
              type="button"
              onClick={() => setClick(true)}
              className="inline-flex items-center gap-2 text-lg font-bold hover:scale-[1.04] active:scale-95 transition-all bg-blue-500 hover:bg-blue-600 px-8 cursor-pointer py-2.5 rounded-full text-white shadow-lg shadow-blue-500/30"
            >
              <MapPin size={19} strokeWidth={2.5} />
              Check Weather
            </button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-8 text-slate">
            <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold">
              <CloudSun size={16} className="text-amber-500" /> Sunny gold
            </span>
            <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold">
              <Droplets size={16} className="text-blue-500" /> Rainy blue
            </span>
            <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold">
              <Wind size={16} className="text-slate-500" /> Cloudy grey
            </span>
          </div>
        </div>
      </section>
      {click && <LocationModal onClose={() => setClick(false)} />}
    </div>
  );
};

export default Home;
