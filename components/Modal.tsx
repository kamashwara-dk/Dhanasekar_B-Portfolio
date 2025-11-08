"use client";
import { useEffect } from "react";

export default function Modal({
  open,
  onClose,
  children
}: { open: boolean; onClose: () => void; children: React.ReactNode }) {
  useEffect(() => {
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-3 sm:p-6"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="card w-full max-w-5xl max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
