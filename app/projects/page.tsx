type Proj = { name: string; context: string; bullet: string[]; tag?: string };

const PROJECTS: Proj[] = [
  {
    name: "TAZIZ Methanol Project — Ruwais (UAE)",
    context: "Civil/Structural PM for temporary facilities, warehouses, and site offices within industrial zone standards.",
    bullet: [
      "Site logistics, enabling works, permits & authority approvals.",
      "Schedule & cost control with weekly look-aheads and risk actions.",
      "Interface control with other EPC packages and stakeholders."
    ],
    tag: "EPIC / Industrial"
  },
  {
    name: "LPG Blending Facility & Pipeline (Pkg-1) — Ras Laffan (Qatar)",
    context: "Precast and cast-in-situ foundations under QatarEnergy standards with brownfield interfaces.",
    bullet: [
      "Method statements, lifting plans, and live-asset controls.",
      "Quality surveillance and material traceability for foundations."
    ],
    tag: "QatarEnergy / Brownfield"
  },
  {
    name: "Qatalum Chemical Warehouse (EPIC)",
    context: "Hazardous & non-hazardous warehouse with MIC/QCDD/MOI/MME approvals.",
    bullet: [
      "Compliance matrix, authority approvals and commissioning.",
      "Handover dossiers and operational readiness."
    ],
    tag: "Qatalum / Industrial"
  }
];

export default function Page() {
  return (
    <main className="container py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6">Projects</h1>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {PROJECTS.map((p) => (
          <article key={p.name} className="card p-5">
            <div className="flex items-start justify-between gap-3">
              <h2 className="font-semibold">{p.name}</h2>
              {p.tag && <span className="text-xs px-2 py-1 border rounded-full">{p.tag}</span>}
            </div>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{p.context}</p>
            <ul className="mt-3 list-disc ml-5 text-sm space-y-1">
              {p.bullet.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </main>
  );
}
