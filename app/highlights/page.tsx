export default function Page() {
  return (
    <main className="container py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6">Highlights & Credentials</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <section className="card p-5">
          <h2 className="font-semibold text-lg">Core Strengths</h2>
          <ul className="mt-2 list-disc ml-5 text-sm space-y-1">
            <li>Project Technical Management (QA/QC, ITPs, dossiers)</li>
            <li>Engineering & Construction Coordination (civil/structural/MEP)</li>
            <li>Team Leadership and mentoring</li>
            <li>PEP, proposals, scope definition, risk registers & KPIs</li>
            <li>Interface management (brownfield / live plant SIMOPS)</li>
            <li>Vendor packages, TBE reviews & approvals</li>
            <li>Change orders, commercial assessment, claims prevention</li>
            <li>Document control, final dossiers, handover/commissioning</li>
          </ul>
        </section>

        <section className="card p-5">
          <h2 className="font-semibold text-lg">Credentials</h2>
          <ul className="mt-2 list-disc ml-5 text-sm space-y-1">
            <li>PMP® — Project Management Professional (PMI)</li>
            <li>PMI-RMP® — Risk Management Professional (PMI)</li>
            <li>UPDA / MMUP Grade-A (Civil, Qatar)</li>
            <li>TBOSIET & H2S (safety)</li>
            <li>Degree Equivalency & regional approvals</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
