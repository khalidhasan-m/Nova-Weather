export default function Pill({ className = "", style, children }) {
  return (
    <span className={`pill ${className}`} style={style}>
      {children}
    </span>
  );
}
