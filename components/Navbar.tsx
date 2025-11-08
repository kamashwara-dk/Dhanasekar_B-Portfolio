"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Prevent body scroll when the mobile menu is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <>
      {/* Top bar */}
      <header
        className="
          sticky top-0 z-50
          border-b
          bg-white/80 dark:bg-slate-950/70
          backdrop-blur supports-[backdrop-filter]:bg-white/60
          dark:supports-[backdrop-filter]:bg-slate-950/70
        "
      >
        <div className="container mx-auto max-w-7xl px-4 py-3 flex items-center gap-4">
          <Link
            href="/"
            className="font-extrabold tracking-tight text-lg text-slate-900 dark:text-slate-100"
          >
            Dhanasekar Boovaraghamoorthy
          </Link>

          {/* Desktop nav */}
          <nav className="ml-auto hidden md:flex items-center gap-6 text-sm">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/highlights">Highlights</NavLink>
            <NavLink href="/experience">Experience</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/certs">Certs</NavLink>
            <NavLink href="/contact">Contact</NavLink>

            <Link
              href="/cv"
              className="rounded-xl border px-3 py-1.5 text-sm font-medium
                         text-slate-900 dark:text-slate-100
                         border-slate-300/70 dark:border-slate-700
                         hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              View CV
            </Link>
          </nav>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(true)}
            className="ml-auto md:hidden rounded-xl border border-slate-300/70 dark:border-slate-700 px-3 py-1.5 text-sm
                       text-slate-900 dark:text-slate-100"
            aria-label="Open menu"
          >
            Menu
          </button>
        </div>
      </header>

      {/* Mobile menu (overlay + panel) */}
      {open && (
        <div className="fixed inset-0 z-50">
          {/* Opaque/semi-opaque backdrop so content doesn’t show through */}
          <div
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-down panel */}
          <div className="absolute inset-x-0 top-0 rounded-b-2xl border-b
                          bg-white dark:bg-slate-900
                          text-slate-900 dark:text-slate-100 shadow-xl">
            <div className="container mx-auto max-w-7xl px-4 py-4">
              <div className="flex items-center justify-between">
                <div className="text-lg font-semibold">Menu</div>
                <button
                  className="rounded-lg border px-3 py-1.5 text-sm
                             border-slate-300/70 dark:border-slate-700
                             hover:bg-slate-100 dark:hover:bg-slate-800"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  Close
                </button>
              </div>

              <div className="mt-4 grid gap-2 text-base">
                <MobileLink onClick={() => setOpen(false)} href="/about">About</MobileLink>
                <MobileLink onClick={() => setOpen(false)} href="/highlights">Highlights</MobileLink>
                <MobileLink onClick={() => setOpen(false)} href="/experience">Experience</MobileLink>
                <MobileLink onClick={() => setOpen(false)} href="/projects">Projects</MobileLink>
                <MobileLink onClick={() => setOpen(false)} href="/certs">Certs</MobileLink>
                <MobileLink onClick={() => setOpen(false)} href="/contact">Contact</MobileLink>

                <Link
                  href="/cv"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center justify-center rounded-xl border px-4 py-2
                             border-slate-300/70 dark:border-slate-700
                             text-slate-900 dark:text-slate-100
                             hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  View CV
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
    >
      {children}
    </Link>
  );
}

function MobileLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="rounded-lg px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800"
    >
      {children}
    </Link>
  );
}
