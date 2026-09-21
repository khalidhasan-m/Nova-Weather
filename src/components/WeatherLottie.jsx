import { Lottie } from "lottie-react";

// Simple wrapper: v3 <Lottie> takes a `src` path/URL/object directly.
// No fetch + no effect needed, so no setState-in-effect issues either.
export default function WeatherLottie({ kind, name, className = "", style }) {
  if (!name) return <div className={className} style={style} aria-hidden="true" />;
  return (
    <Lottie
      key={`${kind}/${name}`}
      src={`/animations/${kind}/${name}.json`}
      className={className}
      style={style}
      autoplay
      loop
    />
  );
}
