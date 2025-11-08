"use client"
import { useState } from "react"
import Modal from "@/components/Modal"

type Cert = { src: string; title: string }

const CERTS: Cert[] = [
  { src: "/certs/equivalency.jpg", title: "Equivalency Certificate" },
  { src: "/certs/qatalum.jpg",    title: "Qatalum Certificate"    },
  // add more like: { src: "/certs/pmp.jpg", title: "PMP®" }
]

export default function CertificatesGrid() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<Cert | null>(null)

  const show = (c: Cert) => { setActive(c); setOpen(true) }

  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {CERTS.map((c) => (
          <button
            key={c.src}
            onClick={() => show(c)}
            className="group relative overflow-hidden rounded-xl border dark:border-slate-700 hover:-translate-y-1 transition-transform"
            title="Click to view"
          >
            <img src={c.src} alt={c.title} className="w-full h-52 object-cover" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
            <div className="absolute bottom-0 left-0 right-0 p-3 text-sm font-medium bg-black/50 text-white">
              {c.title}
            </div>
          </button>
        ))}
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title={active?.title}>
        {active && (
          <img
            src={active.src}
            alt={active.title}
            className="w-full h-auto rounded-lg"
          />
        )}
      </Modal>
    </>
  )
}
