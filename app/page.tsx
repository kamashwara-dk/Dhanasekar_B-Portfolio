"use client"

import { Button } from "@/components/ui/button"
import CertGallery from "@/components/CertificatesGallery"
import CertificatesGrid from "@/components/CertificatesGrid"

export default function HomePage() {
  return (
    <main className="container py-16">
      {/* Hero */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm dark:border-slate-700">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> Available for work
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
            Hello, I&apos;m <span className="underline decoration-dashed underline-offset-4">Dhanasekar Boovaraghamoorthy</span>
          </h1>

          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-xl">
            Project/Construction leader with 29+ years across Oil & Gas, Refineries, Power, High-rise, Fit-out, and Industrial projects.
            Approved Project Manager on QatarEnergy/Qatalum programs with deep experience in EPC/EPIC, FEED, QA/QC and multidisciplinary coordination.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button onClick={() => location.assign('/contact')}>Contact me</Button>
            <Button className="border-slate-300 dark:border-slate-600" onClick={() => location.assign('/projects')}>View projects</Button>
            <Button className="border-slate-300 dark:border-slate-600" onClick={() => location.assign('/cv')}>View CV</Button>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a className="badge" href="https://www.linkedin.com/in/dhanasekar-boovaraghamoorthy" target="_blank">LinkedIn</a>
            <a className="badge" href="mailto:dhanab76@gmail.com">Email</a>
          </div>
        </div>

        {/* Right column: Photo + Quote */}
<div className="flex flex-col items-center justify-center text-center reveal">

  {/* Profile Photo */}
  <img
    src="/profile.jpg"
    alt="Dhanasekar"
    className="w-64 h-64 rounded-full border-4 border-white shadow-soft dark:border-slate-700 animate-fade-in object-cover"
  />

  {/* Quote below image */}
  <p className="mt-6 max-w-md text-center text-lg italic text-slate-300 dark:text-slate-200 leading-relaxed">
    “Engineering excellence is not an act, but a commitment to precision,
    clarity, and leadership.”
  </p>

</div>

      </div>    
    </main>
  )
}
