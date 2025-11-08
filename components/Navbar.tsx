// app/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

/* --- tiny inline icons (no external library) --- */
const IconMenu = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
);
const IconX = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);
const IconSun = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);
const IconMoon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

/* --- Navbar --- */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = mounted ? resolvedTheme === "dark" : false;

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3">
        <Link
          href="/"
          className="font-extrabold text-lg tracking-tight hover:opacity-90"
        >
          Dhanasekar Boovaraghamoorthy
        </Link>

        {/* desktop links */}
        <nav className="ml-auto hidden items-center gap-6 md:flex">
          <Link className="hover:opacity-80" href="/about">About</Link>
          <Link className="hover:opacity-80" href="/highlights">Highlights</Link>
          <Link className="hover:opacity-80" href="/experience">Experience</Link>
          <Link className="hover:opacity-80" href="/projects">Projects</Link>
          <Link className="hover:opacity-80" href="/certs">Certs</Link>
          <Link className="hover:opacity-80" href="/contact">Contact</Link>
        </nav>

        {/* actions (desktop) */}
        <div className="ml-3 hidden items-center gap-3 md:flex">
          <Link
            href="/cv"
            className="rounded-xl border px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            View CV
          </Link>

          {mounted && (
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle theme"
            >
              {isDark ? <IconMoon /> : <IconSun />}
              <span className="hidden sm:inline">
                {isDark ? "Dark" : "Light"}
              </span>
            </button>
          )}
        </div>

        {/* hamburger on mobile */}
        <button
          onClick={() => setOpen(true)}
          className="ml-auto inline-flex items-center rounded-xl border p-2 md:hidden"
          aria-label="Open menu"
        >
          <IconMenu />
        </button>
      </div>

      {/* Slide-in mobile drawer */}
      <div className={`fixed inset-0 z-50 md:hidden ${open ? "" : "pointer-events-none"}`}>
        {/* backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
        />
        {/* panel */}
        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-[85%] border-l bg-white dark:bg-slate-900 shadow-xl transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between border-b px-4 py-3">
            <span className="font-semibold">Menu</span>
            <button
              onClick={() => setOpen(false)}
              className="rounded-lg border p-2"
              aria-label="Close menu"
            >
              <IconX />
            </button>
          </div>

          <nav className="flex flex-col gap-1 p-4 text-base">
            <Link onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800" href="/about">About</Link>
            <Link onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800" href="/highlights">Highlights</Link>
            <Link onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800" href="/experience">Experience</Link>
            <Link onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800" href="/projects">Projects</Link>
            <Link onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800" href="/certs">Certs</Link>
            <Link onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800" href="/contact">Contact</Link>

            <div className="mt-3 flex items-center gap-2">
              <Link
                href="/cv"
                onClick={() => setOpen(false)}
                className="w-full rounded-lg border px-3 py-2 text-center"
              >
                View CV
              </Link>

              {mounted && (
                <button
                  onClick={() => setTheme(isDark ? "light" : "dark")}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border px-3 py-2"
                >
                  {isDark ? <IconMoon /> : <IconSun />}
                  <span>{isDark ? "Dark" : "Light"}</span>
                </button>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
