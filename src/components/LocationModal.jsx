import { Building2, Loader2, LocateFixed } from "lucide-react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { getGeolocation } from "../services/get-geolocation";
import { GhostButton, PrimaryButton } from "./ui/AppButton";
import Modal from "./ui/Modal";

const LocationModal = ({ onClose }) => {
  const navigate = useNavigate();
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [searching, setSearching] = useState(false);
  const [locating, setLocating] = useState(false);
  const inputRef = useRef(null);
  const goToPage = (location) => {
    navigate("/weather", { state: { location } });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const value = city.trim();
    if (!value) {
      setError("Please enter a city name");
      return;
    }
    setSearching(true);
    setError("");
    try {
      const location = await getGeolocation(value);
      if (!location) {
        setError("Geocoding request failed!");
        return;
      }
      goToPage(location);
    } catch (err) {
      setError(err?.message || "Something went wrong. Please try again.");
    } finally {
      setSearching(false);
    }
  };

  const handleGeoLocations = () => {
    if (!navigator.geolocation) {
      setError("Geo locations not found!");
      return;
    }
    setLocating(true);
    setError("");
    navigator.geolocation.getCurrentPosition(
      (positions) => {
        const { latitude, longitude } = positions.coords;
        goToPage({ name: "Your Location", lat: latitude, lon: longitude });
      },
      (err) => {
        setLocating(false);
        setError(err.message);
      },
      {
        timeout: 10000,
      },
    );
  };

  // Reusable Modal shell owns the portal, backdrop, Escape, scroll-lock.
  // This keeps only the location-specific form here.
  return (
    <Modal onClose={onClose} label="Choose your location" initialFocusRef={inputRef}>
      <h2 className="font-display text-xl font-extrabold text-slate-900 pr-10">
        Where are you today?
      </h2>

      <form onSubmit={handleSubmit} className="pt-6 space-y-4">
        <label className="flex items-center gap-2 w-full rounded-2xl border-2 border-slate-200 focus-within:border-blue-400 bg-slate-50 px-4 transition-colors">
          <Building2 size={18} className="text-slate-400 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full bg-transparent py-3 text-[15px] text-slate-900 placeholder:text-slate-400 outline-none"
          />
        </label>

        <PrimaryButton type="submit" disabled={searching || locating} className="w-full">
          {searching ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Finding…
            </>
          ) : (
            "Get Weather"
          )}
        </PrimaryButton>
      </form>

      <div className="flex items-center gap-3 py-4">
        <span className="h-px flex-1 bg-slate-200" aria-hidden="true" />
        <span className="text-[13px] font-semibold text-slate">Or</span>
        <span className="h-px flex-1 bg-slate-200" aria-hidden="true" />
      </div>

      <GhostButton
        type="button"
        onClick={handleGeoLocations}
        disabled={searching || locating}
        className="w-full"
      >
        {locating ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Locating…
          </>
        ) : (
          <>
            <LocateFixed size={18} strokeWidth={2.5} />
            Use My Location
          </>
        )}
      </GhostButton>

      <div className="min-h-[44px] pt-3 text-center" aria-live="polite">
        {error && (
          <p className="inline-block text-[13.5px] font-semibold text-red-600 bg-red-50 border border-red-100 rounded-full px-4 py-1.5">
            {error}
          </p>
        )}
      </div>
    </Modal>
  );
};

export default LocationModal;
