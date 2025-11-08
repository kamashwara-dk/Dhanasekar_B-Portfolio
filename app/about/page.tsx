export default function Page() {
  return (
    <main className="container py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4">About Me</h1>
      <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl">
        I’m <strong>Dhanasekar Boovaraghamoorthy</strong>, a Civil Engineer and Project Manager
        (PMP®, PMI-RMP®, MMUP Grade-A) with <strong>29+ years</strong> of experience leading
        EPC/EPIC, FEED, industrial, high-rise, fit-out, and brownfield programs across the GCC and India.
        I have delivered in live refinery and utility environments with complex interface management,
        stakeholder expectations, QA/QC rigor, and tight time/cost constraints.
      </p>

      <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Professional Summary</h2>
      <ul className="grid md:grid-cols-2 gap-4">
        <li className="card p-4">
          <h3 className="font-semibold mb-1">Industry & Clients</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            QatarEnergy, Qatalum, QatarGas, OETC (Oman), Royal Oman Police, ITC Hotels, Hexaware, Sri City SEZ.
          </p>
        </li>
        <li className="card p-4">
          <h3 className="font-semibold mb-1">Project Controls</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            PEPs, KPIs, schedule baselines, earned value, vendor packages/TBE, change orders, interface control.
          </p>
        </li>
        <li className="card p-4">
          <h3 className="font-semibold mb-1">Quality & Safety</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            QA/QC plans, ITPs, dossiers, pre-commissioning/commissioning, shutdown planning, HSE culture.
          </p>
        </li>
        <li className="card p-4">
          <h3 className="font-semibold mb-1">Leadership</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Cross-functional teams (civil, structural, architectural, MEP), risk mitigation, stakeholder comms.
          </p>
        </li>
      </ul>

      <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">What I Deliver</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card p-5">
          <h3 className="font-semibold">EPC / EPIC Project Leadership</h3>
          <ul className="mt-2 list-disc ml-5 text-sm space-y-1">
            <li>Full lifecycle delivery from engineering to handover (multi-discipline).</li>
            <li>Fit-for-purpose constructability and phasing in live plants.</li>
            <li>Transparent reporting to owners with early warning controls.</li>
          </ul>
        </div>
        <div className="card p-5">
          <h3 className="font-semibold">FEED & Brownfield Coordination</h3>
          <ul className="mt-2 list-disc ml-5 text-sm space-y-1">
            <li>Scope definition, interface management, vendor package strategy.</li>
            <li>Constructability reviews, method statements, work packs.</li>
            <li>Shutdown windows, SIMOPS, and hot/cold work coordination.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
