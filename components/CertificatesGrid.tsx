"use client";
import React, { useState } from "react";
import Modal from "@/components/Modal";

type Cert = {
  src: string;
  title: string;
  description?: string;
};

const CERTS: Cert[] = [
  { src: "/certs/pmp.jpg",       title: "PMP® — PMI", description: "Project Management Professional" },
  { src: "/certs/pmi-rmp.jpg",   title: "PMI-RMP® — PMI", description: "Risk Management Professional" },
  { src: "/certs/upda-grade-a.jpg", title: "UPDA/MMUP — Grade A (Civil)", description: "Qatar Municipality Grade A" },
  { src: "/certs/qatalum.jpg",   title: "Qatalum Certificate", description: "Contractor/Project certification" },
  { src: "/certs/equivalency.jpg", title: "Equivalency Certificate", description: "Academic equivalency" },
];

export default function CertificatesGrid() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Cert | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {CERTS.map((c) => (
          <button
            key={c.src}
            className="rounded-xl overflow-hidden border hover:shadow-soft focus:outline-none focus:ring"
            onClick={() => {
              setActive(c);
              setOpen(true);
            }}
          >
            <img
              src={c.src}
              alt={c.title}
              className="h-36 w-full object-cover"
              loading="lazy"
            />
            <div className="px-3 py-2 text-sm font-medium text-left">{c.title}</div>
          </button>
        ))}
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title={active?.title}>
        {active && (
          <div className="space-y-3">
            <img
              src={active.src}
              alt={active.title}
              className="w-full h-auto object-contain rounded-lg border max-h-[70vh]"
            />
            {active.description && (
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {active.description}
              </p>
            )}
          </div>
        )}
      </Modal>
    </>
  );
}
