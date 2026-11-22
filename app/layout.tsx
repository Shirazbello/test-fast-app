import type { Metadata } from "next";
import Sidebar from "@/app/components/Sidebar";
import "./globals.css";

export const metadata: Metadata = {
  title: "NovaStack | Next.js Test App",
  description: "Testing layouts, pages, and route handlers in Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500/30">
        <div className="flex min-h-screen flex-col md:flex-row">
          {/* Left Navigation Rail */}
          <Sidebar />

          {/* Main Content Area */}
          <div className="flex flex-1 flex-col">
            <main className="flex-1">{children}</main>

            <footer className="border-t border-slate-900 py-6 text-center text-xs text-slate-500">
              Built with Next.js App Router &amp; Tailwind CSS
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
