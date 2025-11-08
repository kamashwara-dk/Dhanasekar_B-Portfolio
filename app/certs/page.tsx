import CertificatesGallery from "@/components/CertificatesGallery"

export const metadata = {
  title: "Licenses & Certifications",
}

export default function CertsPage() {
  return (
    <main className="container mx-auto max-w-7xl px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6">Licenses, Certifications & Equivalency</h1>
      <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-3xl">
        Formal credentials that validate my technical competence and project leadership on EPC/EPIC, FEED
        and brownfield programs across the GCC and India. Click any certificate to view full size.
      </p>
      <CertificatesGallery />
    </main>
  )
}
