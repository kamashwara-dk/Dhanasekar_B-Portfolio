"use client";
import Image from "next/image";
import { useState } from "react";
import Modal from "./Modal";

type Cert = {
  file: string;
  title: string;
  caption: string;
};

const CERTS: Cert[] = [
  {
    file: "/certs/pmp.jpg",
    title: "PMP® — Project Management Professional",
    caption:
      "Project Management Institute. Demonstrates standardized project leadership across scope, time, cost, quality, risk, and stakeholders."
  },
  {
    file: "/certs/pmi-rmp.jpg",
    title: "PMI-RMP® — Risk Management Professional",
    caption:
      "Validated expertise in identifying, analyzing, and responding to project risk with practical, repeatable frameworks."
  },
  {
    file: "/certs/upda-grade-a.jpg",
    title: "UPDA / MMUP Grade-A (Civil, Qatar)",
    caption:
      "Highest engineering grade in Qatar for civil discipline — authorization for leading and stamping major civil works."
  },
  {
    file: "/certs/qatalum.jpg",
    title: "Qatalum Certification",
    caption:
      "Compliance & authorization for project execution and leadership within Qatalum facilities and standards."
  },
  {
    file: "/certs/equivalency.jpg",
    title: "Degree Equivalency",
    caption:
      "Educational degree equivalency for regional recognition — supporting formal approvals and visa processes."
  }
];

export default function CertificatesGallery() {
  const [index, setIndex] = useState<number | null>(null);

  const open = (i: number) => setIndex(i);
  const close = () => setIndex(null);
  const prev = () => setIndex((i) => (i === null ? i : (i + CERTS.length - 1) % CERTS.length));
  const next = () => setIndex((i) => (i === null ? i : (i + 1) % CERTS.length));

  return (
    <>
      <div className="grid xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {CERTS.map((c, i) => (
          <button
            key={c.file}
            className="card overflow-hidden text-left hover:shadow-lg transition"
            onClick={() => open(i)}
            aria-label={`Open ${c.title}`}
          >
            <Image
              src={c.file}
              alt={c.title}
              width={800}
              height={600}
              className="aspect-[4/3] w-full object-cover"
              priority={i < 2}
            />
            <div className="p-3">
              <div className="font-medium text-sm">{c.title}</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                {c.caption}
              </div>
            </div>
          </button>
        ))}
      </div>

      <Modal open={index !== null} onClose={close}>
        {index !== null && (
          <div className="p-3 sm:p-5">
            <div className="flex justify-between items-center gap-3 mb-3">
              <h3 className="font-semibold text-lg">{CERTS[index].title}</h3>
              <div className="flex gap-2">
                <button className="btn" onClick={prev} aria-label="Previous">◀</button>
                <button className="btn" onClick={next} aria-label="Next">▶</button>
                <button className="btn" onClick={close} aria-label="Close">✕</button>
              </div>
            </div>

            <div className="w-full">
              <Image
                src={CERTS[index].file}
                alt={CERTS[index].title}
                width={1600}
                height={1200}
                className="w-full modal-img rounded-lg"
              />
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 mt-3">
              {CERTS[index].caption}
            </p>
          </div>
        )}
      </Modal>
    </>
  );
}
