export const metadata = { title: "CV | Dhanasekar B" };

export default function CVPage() {
  return (
    <main className="container py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6">Curriculum Vitae</h1>

      {/* Try <object> first; fall back to a link */}
      <div className="card p-4">
        <object
          data="/cv.pdf"
          type="application/pdf"
          width="100%"
          height="900"
          className="rounded-lg"
        >
          <p className="card-desc">
            Your browser can’t display PDFs.{" "}
            <a className="underline" href="/cv.pdf" download>
              Download the CV
            </a>
            .
          </p>
        </object>
      </div>

      <div className="mt-4">
        <a className="btn" href="/cv.pdf" download>
          Download CV (PDF)
        </a>
      </div>
    </main>
  );
}
