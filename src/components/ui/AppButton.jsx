export function PrimaryButton({ className = "", children, ...props }) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center gap-2 text-[15px] font-bold bg-blue-500 hover:bg-blue-600 disabled:opacity-60 disabled:cursor-not-allowed px-5 py-2.5 rounded-full text-white shadow-lg shadow-blue-500/30 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function GhostButton({ className = "", children, ...props }) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center gap-2 text-[15px] font-bold bg-white text-blue-600 border-2 border-blue-100 hover:border-blue-300 disabled:opacity-60 disabled:cursor-not-allowed px-5 py-2.5 rounded-full hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
