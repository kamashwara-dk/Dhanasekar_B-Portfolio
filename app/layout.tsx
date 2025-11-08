import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";

export const metadata = {
  title: "Dhanasekar B — Portfolio",
  description: "Portfolio of Dhanasekar Boovaraghamoorthy",
};

// ⬇️ Avoid SSR for the canvas to prevent hydration issues
const AnimatedBackground = dynamic(
  () => import("@/components/AnimatedBackground"),
  { ssr: false }
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative min-h-screen overflow-x-hidden bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        {/* Background animation (behind everything) */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <AnimatedBackground />
        </div>

        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
