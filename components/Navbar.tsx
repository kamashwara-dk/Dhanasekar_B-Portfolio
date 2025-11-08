"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

/* ===== Inline SVG icons (no external packages) ===== */
function IconMenu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" {...props}>
      <path
        d="M4 6h16M4 12h16M4 18h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function IconClose(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" {...props}>
      <path
        d="M6 6l12 12M18 6l-12 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function IconSun(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" {...props}>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function IconMoon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" {...props}>
      <path
        d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
/* ==================================================== */

const links = [
  { href: "/about", label: "About" },
  { href: "/highlights", label: "Highlights" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/certs", label: "Certs" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch for theme toggle
  useEffect(() => setMounted(true), []);

  // Close the mobile menu on route change (optional if you listen to router events)
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  const isDark = (mounted ? resolvedTheme : theme) === "dark";

  return (
    <>
      {/* Sticky top bar */}
      <header className="sticky top-0 z-50 border-b border-slate-200/50 dark:border-slate-800 bg-white dark:bg-slate-900">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex h-16 items-center gap-3">
            {/* Brand */}
            <Link
              href="/"
              className="text-lg font-extrabold tracking-tight"
              onClick={() => setOpen(false)}
            >
              Dhanasekar Boovaraghamoorthy
            </Link>

            {/* Desktop nav */}
            <nav className="ml-auto hidden md:flex items-center gap-6 text-sm">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="hover:opacity-80 transition-opacity"
                >
                  {l.label}
                </Link>
              ))}

              {/* CV Button */}
              <Link
                href="/cv"
                className="rounded-xl border px-3 py-1.5 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                View CV
              </Link>

              {/* Theme toggle */}
              <button
                type="button"
                aria-label="Toggle color theme"
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className="inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                {mounted && (isDark ? <IconSun /> : <IconMoon />)}
                <span className="hidden lg:inline">{isDark ? "Light" : "Dark"}</span>
              </button>
            </nav>

            {/* Mobile controls */}
            <div className="ml-auto md:hidden flex items-center gap-2">
              {/* CV short button */}
              <Link
                href="/cv"
                className="rounded-xl border px-3 py-1.5 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800"
                onClick={() => setOpen(false)}
              >
                View CV
              </Link>

              {/* Theme toggle (mobile) */}
              <button
                type="button"
                aria-label="Toggle color theme"
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className="rounded-xl border p-2 hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                {mounted && (isDark ? <IconSun /> : <IconMoon />)}
              </button>

              {/* Hamburger */}
              <button
                type="button"
                aria-label="Open menu"
                onClick={() => setOpen(true)}
                className="rounded-xl border p-2 hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                <IconMenu />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu: solid background + overlay */}
      {open && (
        <div className="md:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/50"
            onClick={() => setOpen(false)}
          />

          {/* Panel */}
          <div className="fixed inset-x-0 top-0 z-50 rounded-b-2xl border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <div className="container mx-auto max-w-7xl px-4">
              <div className="flex h-16 items-center justify-between">
                <div className="text-lg font-semibold">Menu</div>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="rounded-xl border p-2 hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  <IconClose />
                </button>
              </div>
            </div>

            {/* Nav items */}
            <nav className="px-4 pb-4">
              <div className="container mx-auto max-w-7xl">
                <ul className="flex flex-col gap-2">
                  {links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="block rounded-xl px-4 py-3 text-base font-medium hover:bg-slate-100 dark:hover:bg-slate-800"
                        onClick={() => setOpen(false)}
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                  <li className="mt-2 flex items-center gap-2">
                    <Link
                      href="/cv"
                      className="w-full rounded-xl border px-4 py-3 text-center font-medium hover:bg-slate-100 dark:hover:bg-slate-800"
                      onClick={() => setOpen(false)}
                    >
                      View CV
                    </Link>
                    <button
                      type="button"
                      aria-label="Toggle color theme"
                      onClick={() => setTheme(isDark ? "light" : "dark")}
                      className="rounded-xl border p-3 hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                      {mounted && (isDark ? <IconSun /> : <IconMoon />)}
                    </button>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
