export default function Page() {
  const roles = [
    {
      company: "Al Sahraa Group (Abu Dhabi, UAE)",
      role: "Senior Project Manager",
      period: "Sep 2025 – Present",
      bullets: [
        "Leading civil/structural delivery for industrial developments in Ruwais/Abu Dhabi.",
        "Owner interface, schedule control, cost tracking; monthly KPIs and dashboards.",
        "Contract management and subcontractor performance oversight."
      ],
    },
    {
      company: "CEC – Consolidated Engineering & Consultancy (Qatar)",
      role: "Project Manager (Seconded to QatarEnergy / Qatalum)",
      period: "May 2019 – Aug 2025",
      bullets: [
        "Managed multiple capital projects (brownfield and greenfield).",
        "Produced PEPs, scope splits, vendor packages & TBEs; coordinated FEED.",
        "Change control, progress S-curves, commissioning and dossiers to QEnergy/Qatalum standards."
      ],
    },
    {
      company: "New Centre Trading & Engineering Services (Doha, Qatar)",
      role: "Project Manager",
      period: "Dec 2017 – Apr 2019",
      bullets: [
        "Fast-track fit-out programs (incl. QNL cafeteria) with full MEP coordination.",
        "Managed variations, testing/commissioning and client handover."
      ],
    },
    {
      company: "Oman United Engineering Services (Muscat, Oman)",
      role: "Project Manager",
      period: "Aug 2011 – Nov 2017",
      bullets: [
        "Turnkey EPIC incl. MEP for ROP cooling plant, OmanTel HO, SQUH, MSD, OETC.",
        "Design reviews/approvals, O&M manuals, time/cost/quality control."
      ],
    },
  ];

  return (
    <main className="container py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6">Experience</h1>

      <div className="space-y-6">
        {roles.map((r) => (
          <div key={r.company} className="card p-5">
            <div className="flex flex-wrap items-baseline gap-2">
              <h2 className="text-xl font-semibold">{r.role}</h2>
              <span className="text-slate-600 dark:text-slate-400">— {r.company}</span>
              <span className="ml-auto text-sm text-slate-600 dark:text-slate-400">{r.period}</span>
            </div>
            <ul className="mt-3 list-disc ml-5 text-sm space-y-1">
              {r.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
