import "./globals.css"
import Navbar from "@/components/Navbar"
import Particles from "@/components/Particles"

export const metadata = {
  title: "Dhanasekar B — Portfolio",
  description: "Portfolio of Dhanasekar Boovaraghamoorthy",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gradient dark:bg-slate-950">
        <Particles />   {/* full-screen animated background */}
        <Navbar />
        {children}
        <footer className="border-t py-10 mt-16">
          <div className="container text-sm text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} Dhanasekar Boovaraghamoorthy. Built with Next.js + Tailwind.
          </div>
        </footer>
      </body>
    </html>
  )
}
