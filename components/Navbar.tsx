// app/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

/* Inline icons */
const IconMenu = (props: any) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
);
const IconX = (props: any) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M6 6l12 12M6 18L18 6" />
  </svg>
);
const IconSun = (props: any) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2" />
  </svg>
);
const IconMoon = (props: any) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  const isDark = mounted ? resolvedTheme === "dark" : false;

  return (
    <>
      {/* ✅ Solid navbar background (NO BLUR, NO TRANSPARENCY) */}
      <header className="sticky top-0 z-50 border-b bg-white dark:bg-slate-900">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3">

          <Link href="/" className="font-extrabold text-lg hover:opacity-80">
            Dhanasekar Boovaraghamoorthy
          </Link>

          {/* Desktop Menu */}
          <nav className="ml-auto hidden items-center gap-6 md:flex">
            <Link href="/about" className="hover:opacity-80">About</Link>
            <Link href="/highlights" className="hover:opacity-80">Highlights</Link>
            <Link href="/experience" className="hover:opacity-80">Experience</Link>
            <Link href="/projects" className="hover:opacity-80">Projects</Link>
            <Link href="/certs" className="hover:opacity-80">Certs</Link>
            <Link href="/contact" className="hover:opacity-80">Contact</Link>
          </nav>

          {/* Desktop actions */}
          <div className="ml-3 hidden items-center gap-3 md:flex">
            <Link href="/cv" className="rounded-xl border px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800">
              View CV
            </Link>

            {mounted && (
              <button
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className="inline-flex items-center gap-2 rounded-xl border px-3 py-2"
              >
                {isDark ? <IconMoon /> : <IconSun />}
                <span>{isDark ? "Dark" : "Light"}</span>
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="ml-auto inline-flex rounded-lg border p-2 md:hidden"
            onClick={() => setOpen(true)}
          >
            <IconMenu />
          </button>
        </div>
      </header>

      {/* ✅ Mobile Slide Menu */}
      <div className={`fixed inset-0 z-50 md:hidden ${open ? "" : "pointer-events-none"}`}>

        {/* ✅ Solid dark backdrop (you can change opacity if needed) */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/50 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
        />

        {/* ✅ Slide-in Panel — Solid background (NO blur, NO transparency) */}
        <div
          className={`absolute right-0 top-0 h-full w-72 max-w-[85%] bg-white dark:bg-slate-900 border-l shadow-xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <span className="text-lg font-semibold">Menu</span>

            <button
              onClick={() => setOpen(false)}
              className="rounded-lg border p-2"
            >
              <IconX />
            </button>
          </div>

          <nav className="flex flex-col gap-1 p-4">
            <Link href="/about" onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">About</Link>
            <Link href="/highlights" onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">Highlights</Link>
            <Link href="/experience" onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">Experience</Link>
            <Link href="/projects" onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">Projects</Link>
            <Link href="/certs" onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">Certs</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">Contact</Link>

            <div className="mt-4 flex flex-col gap-3">
              <Link
                href="/cv"
                onClick={() => setOpen(false)}
                className="rounded-lg border px-3 py-2 text-center"
              >
                View CV
              </Link>

              {mounted && (
                <button
                  onClick={() => setTheme(isDark ? "light" : "dark")}
                  className="rounded-lg border px-3 py-2 flex items-center justify-center gap-2"
                >
                  {isDark ? <IconMoon /> : <IconSun />}
                  {isDark ? "Dark" : "Light"}
                </button>
              )}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
