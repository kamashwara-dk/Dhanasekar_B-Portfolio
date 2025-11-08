"use client"
import Link from "next/link"
import ThemeToggle from "@/components/ThemeToggle"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b bg-white/70 dark:bg-slate-900/70 backdrop-blur">
      <div className="container flex items-center gap-4 py-3">
        <Link href="/" className="font-extrabold text-lg tracking-tight">
          Dhanasekar Boovaraghamoorthy
        </Link>

        <nav className="ml-auto hidden md:flex items-center gap-6">
          <Link className="text-sm hover:opacity-80 transition" href="/about">About</Link>
          <Link className="text-sm hover:opacity-80 transition" href="/highlights">Highlights</Link>
          <Link className="text-sm hover:opacity-80 transition" href="/experience">Experience</Link>
          <Link className="text-sm hover:opacity-80 transition" href="/projects">Projects</Link>
          <Link className="text-sm hover:opacity-80 transition" href="/certs">Certs</Link>
          <Link className="text-sm hover:opacity-80 transition" href="/contact">Contact</Link>
        </nav>

        {/* CV button (opens in new tab) */}
        <a className="btn border-slate-300 dark:border-slate-600 ml-2" href="/cv.pdf" target="_blank" rel="noreferrer">
          View CV
        </a>

        <div className="ml-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
