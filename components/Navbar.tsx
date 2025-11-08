"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    if (!mounted) return;
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-40 border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-4">
        <Link href="/" className="font-extrabold text-lg tracking-tight">
          Dhanasekar Boovaraghamoorthy
        </Link>

        <nav className="ml-auto hidden md:flex items-center gap-6 text-sm">
          <Link href="/about">About</Link>
          <Link href="/highlights">Highlights</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/certs">Certs</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <button
          type="button"
          onClick={toggleTheme}
          className="ml-3 inline-flex items-center rounded-xl border px-3 py-1.5 text-sm"
        >
          {/* Show a stable label on the server to avoid mismatch */}
          <span className="md:inline">
            {mounted ? (resolvedTheme === "dark" ? "Light" : "Dark") : "Theme"}
          </span>
        </button>
      </div>
    </header>
  );
}
