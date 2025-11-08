"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/highlights", label: "Highlights" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/certs", label: "Certs" },
  { href: "/contact", label: "Contact" },
];

function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme");
    const prefersDark =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldDark = saved ? saved === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", shouldDark);
    setDark(shouldDark);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => {
        const next = !dark;
        setDark(next);
        document.documentElement.classList.toggle("dark", next);
        localStorage.setItem("theme", next ? "dark" : "light");
      }}
      className="btn border-slate-300 dark:border-slate-600 w-full md:w-auto"
      aria-label="Toggle theme"
    >
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // lock body scroll when menu is open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // close menu on route change
  useEffect(() => setOpen(false), [pathname]);

  const NavLinks = ({ className = "" }: { className?: string }) => (
    <nav className={`flex flex-col md:flex-row md:items-center gap-4 ${className}`}>
      {links.map(({ href, label }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={`nav-link ${
              active
                ? "text-brand-500 dark:text-brand-500 font-semibold"
                : "text-slate-900 dark:text-slate-100"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <header className="sticky top-0 z-50 border-b bg-white/70 dark:bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-slate-900/50">
      <div className="container flex items-center justify-between py-3">
        {/* Brand */}
        <Link href="/" className="font-extrabold text-lg tracking-tight truncate max-w-[60%] md:max-w-none">
          Dhanasekar Boovaraghamoorthy
        </Link>

        {/* Desktop right side */}
        <div className="hidden md:flex items-center gap-4">
          <NavLinks />
          <Link href="/cv" className="btn border-slate-300 dark:border-slate-600">
            View CV
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile buttons */}
        <div className="md:hidden flex items-center gap-2">
          <Link href="/cv" className="btn border-slate-300 dark:border-slate-600">
            View CV
          </Link>
          <button
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="btn border-slate-300 dark:border-slate-600"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div
          className="fixed inset-0 z-[60] md:hidden"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <button
            aria-label="Close menu backdrop"
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />
          {/* Panel */}
          <div className="absolute right-0 top-0 h-full w-[88%] max-w-xs bg-white dark:bg-slate-900 shadow-xl p-4 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="font-semibold">Menu</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="btn border-slate-300 dark:border-slate-600"
              >
                ✕
              </button>
            </div>
            <NavLinks />
            <div className="mt-auto pt-3 border-t dark:border-slate-700 flex items-center gap-3">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
