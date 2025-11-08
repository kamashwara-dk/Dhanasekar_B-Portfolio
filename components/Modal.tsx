"use client";

import React, { useEffect } from "react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;             // <-- add title to props
  children?: React.ReactNode;
  showClose?: boolean;        // optional, controls whether to show the close button
};

export default function Modal({
  open,
  onClose,
  title,
  children,
  showClose = true,
}: ModalProps) {
  // close on ESC
  useEffect(() => {
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      {/* panel */}
      <div className="relative mx-auto my-10 w-[min(95vw,1000px)] max-w-4xl rounded-2xl bg-white shadow-xl overflow-hidden dark:bg-slate-900">
        {(title || showClose) && (
          <div className="flex items-center justify-between px-4 py-3 border-b border-black/10 dark:border-white/10">
            <div className="text-lg font-semibold">{title}</div>
            {showClose && (
              <button
                type="button"
                aria-label="Close"
                onClick={onClose}
                className="rounded-md px-3 py-1.5 border hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
              >
                ✕
              </button>
            )}
          </div>
        )}

        <div className="p-4 overflow-auto max-h-[80vh]">
          {children}
        </div>
      </div>
    </div>
  );
}
