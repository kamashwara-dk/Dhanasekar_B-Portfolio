"use client";

import Link from "next/link";
import { useState } from "react";
import { Moon, Sun, Menu } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header
      className="
        fixed inset-x-0 top-0 z-[9999]
        bg-white/80 dark:bg-slate-900/80
        backdrop-blur-md border-b border-slate-300 dark:border-slate-700
      "
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        
        {/* LEFT: LOGO */}
        <Link href="/" className="text-xl font-bold text-slate-900 dark:text-white">
          Dhanasekar Boovaraghamoorthy
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-slate-900 dark:text-white">
          <Link href="/about">About</Link>
          <Link href="/highlights">Highlights</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/certs">Certs</Link>
          <Link href="/contact">Contact</Link>

          {/* View CV */}
          <Link
            href="/cv"
            className="
              px-4 py-2 rounded-xl border border-slate-500 
              hover:bg-slate-200 dark:hover:bg-slate-700 transition
            "
          >
            View CV
          </Link>

          {/* DARK MODE TOGGLE */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-xl border border-slate-500"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden text-slate-900 dark:text-white p-2"
          onClick={() => setOpen(true)}
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* ✅ FULLSCREEN MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 z-[99999] flex md:hidden">

          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
          />

          {/* MENU PANEL */}
          <div
            className="
              relative w-full h-full
              bg-white dark:bg-slate-900
              text-slate-900 dark:text-slate-100
              p-6 overflow-y-auto
            "
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Menu</h2>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full border border-slate-400 dark:border-slate-600 px-4 py-1 text-lg"
              >
                ✕
              </button>
            </div>

            <nav className="flex flex-col gap-6 text-lg">
              <Link href="/about" onClick={() => setOpen(false)}>About</Link>
              <Link href="/highlights" onClick={() => setOpen(false)}>Highlights</Link>
              <Link href="/experience" onClick={() => setOpen(false)}>Experience</Link>
              <Link href="/projects" onClick={() => setOpen(false)}>Projects</Link>
              <Link href="/certs" onClick={() => setOpen(false)}>Certs</Link>
              <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>

              {/* CV Button */}
              <Link
                href="/cv"
                className="mt-4 w-full text-center rounded-xl border border-slate-600 py-3"
                onClick={() => setOpen(false)}
              >
                View CV
              </Link>

              {/* DARK MODE BUTTON */}
              <button
                className="mt-4 flex items-center justify-center gap-2 p-3 rounded-xl border border-slate-600"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
