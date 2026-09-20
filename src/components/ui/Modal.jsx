import { X } from "lucide-react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

// Generic reusable modal shell — portaled to <body> so `fixed inset-0`
// truly covers the viewport (a transformed ancestor would trap `fixed`).
// Handles: backdrop click, Escape key, scroll lock, close button.
export default function Modal({
  onClose,
  label = "Dialog",
  branded = true,
  initialFocusRef,
  children,
  cardClassName = "",
}) {
  useEffect(() => {
    initialFocusRef?.current?.focus?.();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, initialFocusRef]);

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose?.();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={label}
        className={`relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-white/60 p-6 sm:p-8 animate-rise ${cardClassName}`}
        onMouseDown={(e) => e.stopPropagation()}
      >
        {branded && (
          <>
            <span
              className="absolute -top-16 -right-14 w-52 h-52 rounded-full blur-3xl pointer-events-none"
              style={{ background: "#fde68a", opacity: 0.5 }}
              aria-hidden="true"
            />
            <span
              className="absolute -bottom-20 -left-12 w-56 h-56 rounded-full blur-3xl pointer-events-none"
              style={{ background: "#bae6fd", opacity: 0.55 }}
              aria-hidden="true"
            />
          </>
        )}
        {onClose && (
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 z-10 inline-flex items-center justify-center w-9 h-9 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 cursor-pointer transition-colors"
          >
            <X size={19} strokeWidth={2.5} />
          </button>
        )}
        <div className="relative">{children}</div>
      </div>
    </div>,
    document.body,
  );
}
