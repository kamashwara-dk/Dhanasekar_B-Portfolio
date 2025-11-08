'use client';

export default function Page() {
  return (
    <main className="container py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6">Contact</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <form
          className="card p-6"
          onSubmit={(e) => { e.preventDefault(); alert('Hook to Formspree or an API route'); }}
        >
          <input className="w-full rounded-md border dark:border-slate-700 px-3 py-2 mb-3 bg-white dark:bg-slate-900" placeholder="Your name" />
          <input className="w-full rounded-md border dark:border-slate-700 px-3 py-2 mb-3 bg-white dark:bg-slate-900" placeholder="Email address" />
          <textarea className="w-full rounded-md border dark:border-slate-700 px-3 py-2 mb-3 min-h-[120px] bg-white dark:bg-slate-900" placeholder="Your message" />
          <button className="btn">Send message</button>
        </form>
        <div className="card p-6 space-y-2 text-sm">
          <div>Location: Al Ruways Industrial City, Abu Dhabi, UAE</div>
          <div>Email: <a className="underline" href="mailto:dhanab76@gmail.com">dhanab76@gmail.com</a></div>
          <div>Phone: +971 501490569</div>
        </div>
      </div>
    </main>
  );
}
