const THEMES = {
  clear: {
    // ☀️ Sunny — warm golden sunshine
    sky: "linear-gradient(160deg, #fff8e1 0%, #ffe6a8 55%, #ffd486 100%)",
    page: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 40%, #fde68a 70%, #fdba74 100%)",
    accent: "#f59e0b",
    strong: "#d97706",
    cloud: "#ffffff",
    ink: "#7c4a03",
    inkSoft: "rgba(124, 74, 3, 0.7)",
    chip: "rgba(255, 255, 255, 0.72)",
  },
  clear_night: {
    // 🌙 Clear night — deep indigo night sky
    sky: "linear-gradient(160deg, #1b2551 0%, #2b3a75 55%, #3e4f95 100%)",
    page: "linear-gradient(135deg, #020617 0%, #1e1b4b 55%, #312e81 100%)",
    accent: "#c7d2fe",
    strong: "#a5b4fc",
    cloud: "#c7d2fe",
    ink: "#f8fafc",
    inkSoft: "rgba(248, 250, 252, 0.72)",
    chip: "rgba(255, 255, 255, 0.16)",
  },
  partly_cloudy: {
    // ⛅ Partly cloudy — soft blue with a kiss of sun
    sky: "linear-gradient(160deg, #eaf4ff 0%, #cfe4ff 55%, #b6d5fb 100%)",
    page: "linear-gradient(135deg, #f0f9ff 0%, #bae6fd 45%, #fef9c7 100%)",
    accent: "#f59e0b",
    strong: "#0284c7",
    cloud: "#ffffff",
    ink: "#1d5fd1",
    inkSoft: "rgba(29, 95, 209, 0.7)",
    chip: "rgba(255, 255, 255, 0.75)",
  },
  cloudy: {
    // ☁️ Cloudy — calm slate grey
    sky: "linear-gradient(160deg, #f4f7fb 0%, #dde5f0 55%, #ccd7e6 100%)",
    page: "linear-gradient(135deg, #f8fafc 0%, #cbd5e1 55%, #94a3b8 100%)",
    accent: "#5b6b85",
    strong: "#475569",
    cloud: "#ffffff",
    ink: "#3d4f73",
    inkSoft: "rgba(61, 79, 115, 0.7)",
    chip: "rgba(255, 255, 255, 0.8)",
  },
  fog: {
    // 🌫️ Fog — misty silver grey
    sky: "linear-gradient(160deg, #f5f8fb 0%, #e0e7ef 55%, #cbd5e1 100%)",
    page: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #b6c2d2 100%)",
    accent: "#94a3b8",
    strong: "#64748b",
    cloud: "#ffffff",
    ink: "#475569",
    inkSoft: "rgba(71, 85, 105, 0.7)",
    chip: "rgba(255, 255, 255, 0.8)",
  },
  rain: {
    // 🌧️ Rain — fresh rainy blue
    sky: "linear-gradient(160deg, #eef6ff 0%, #c7e0fb 55%, #a3caf7 100%)",
    page: "linear-gradient(135deg, #eff6ff 0%, #bfdbfe 50%, #60a5fa 100%)",
    accent: "#3b82f6",
    strong: "#2563eb",
    cloud: "#ffffff",
    ink: "#1d4ed8",
    inkSoft: "rgba(29, 78, 216, 0.7)",
    chip: "rgba(255, 255, 255, 0.75)",
  },
  snow: {
    // ❄️ Snow — icy frost blue
    sky: "linear-gradient(160deg, #f4fbff 0%, #dcf0fd 55%, #bfe4fb 100%)",
    page: "linear-gradient(135deg, #ffffff 0%, #e0f2fe 50%, #7dd3fc 100%)",
    accent: "#38bdf8",
    strong: "#0284c7",
    cloud: "#ffffff",
    ink: "#0369a1",
    inkSoft: "rgba(3, 105, 161, 0.7)",
    chip: "rgba(255, 255, 255, 0.8)",
  },
  storm: {
    // ⛈️ Storm — electric violet grey
    sky: "linear-gradient(160deg, #eef0ff 0%, #d2d7f8 55%, #b4bcf2 100%)",
    page: "linear-gradient(135deg, #1e1b4b 0%, #4c4f9e 55%, #818cf8 100%)",
    accent: "#6366f1",
    strong: "#e0e7ff",
    cloud: "#ffffff",
    ink: "#f5f3ff",
    inkSoft: "rgba(245, 243, 255, 0.75)",
    chip: "rgba(255, 255, 255, 0.22)",
  },
  unknown: {
    // ✨ Default Nova brand — sky blue
    sky: "linear-gradient(160deg, #eaf4ff 0%, #cfe4ff 55%, #b6d5fb 100%)",
    page: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 50%, #bfdbfe 100%)",
    accent: "#0ea5e9",
    strong: "#0369a1",
    cloud: "#ffffff",
    ink: "#0c4a6e",
    inkSoft: "rgba(12, 74, 110, 0.7)",
    chip: "rgba(255, 255, 255, 0.8)",
  },
};

// Returns the theme for an icon name, or the neutral one for unknown names.
export function getWeatherTheme(icon) {
  return THEMES[icon] || THEMES.unknown;
}

export const DEFAULT_THEME = THEMES.unknown;

