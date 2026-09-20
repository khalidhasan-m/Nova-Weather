export default function Card({ className = "", style, children, as: Tag = "section" }) {
  return (
    <Tag
      className={`relative overflow-hidden rounded-2xl bg-white/95 shadow-2xl ring-1 ring-white/60 ${className}`}
      style={style}
    >
      {children}
    </Tag>
  );
}
