import * as React from "react";

export default function Section({
  title,
  subtitle,
  children,
  id,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="py-12 md:py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <header className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            {title}
          </h1>
          {subtitle ? (
            <p className="text-slate-600 dark:text-slate-300 mt-2">{subtitle}</p>
          ) : null}
        </header>
        {children}
      </div>
    </section>
  );
}
