export default function StatItem({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3 bg-[#f7fafe] border border-line rounded-[18px] px-4 py-[14px] transition-colors hover:bg-sky-soft hover:border-sky-light">
      {Icon && (
        <span className="inline-flex items-center justify-center w-[34px] h-[34px] rounded-[11px] bg-sky-soft text-sky-deep flex-shrink-0">
          <Icon size={17} strokeWidth={2.25} />
        </span>
      )}
      <div className="min-w-0">
        <span className="block text-[11.5px] font-semibold text-slate">{label}</span>
        <span className="block text-[16px] font-bold leading-tight text-slate-900">{value}</span>
      </div>
    </div>
  );
}
