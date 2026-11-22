import Link from "next/link";

const features = [
  {
    title: "Edge-Ready Rendering",
    description:
      "Serve dynamic pages with near-zero latency using React Server Components and streaming.",
    badge: "Performance",
  },
  {
    title: "Type-Safe Routing",
    description:
      "File-system based App Router with nested layouts, loading states, and built-in error boundaries.",
    badge: "Architecture",
  },
  {
    title: "Zero-Config Styling",
    description:
      "Responsive dark-mode grid layouts powered out of the box with Tailwind CSS utility classes.",
    badge: "Design",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500/30">
      {/* Subtle Background Glow */}
      <div className="pointer-events-none fixed inset-0 flex justify-center overflow-hidden">
        <div className="h-[28rem] w-[56rem] -translate-y-1/2 rounded-full bg-gradient-to-tr from-indigo-600/25 via-sky-500/15 to-emerald-400/20 blur-3xl" />
      </div>

      {/* Navigation */}
      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-block h-3 w-3 rounded-full bg-indigo-500 shadow-[0_0_12px_#6366f1]" />
          <span>NovaStack</span>
        </div>
        <nav className="hidden gap-8 text-sm text-slate-400 sm:flex">
          <a href="#features" className="transition hover:text-white">
            Features
          </a>
          <a href="#metrics" className="transition hover:text-white">
            Metrics
          </a>
          <a href="#cta" className="transition hover:text-white">
            Deploy
          </a>
        </nav>
        <Link
          href="#cta"
          className="rounded-full border border-slate-800 bg-slate-900/80 px-4 py-1.5 text-sm font-medium text-slate-200 transition hover:border-slate-700 hover:bg-slate-800"
        >
          Get Started
        </Link>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 mx-auto max-w-6xl px-6 pt-16 pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-medium text-indigo-300">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
            Next.js App Router Test Environment
          </div>

          <h1 className="bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl">
            Build faster interfaces without the boilerplate.
          </h1>

          <p className="mt-6 text-base leading-relaxed text-slate-400 sm:text-lg">
            A clean, responsive starter homepage designed to verify your Next.js
            routing, Tailwind CSS compilation, and server rendering pipeline.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#features"
              className="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:bg-indigo-500"
            >
              Explore Components
            </a>
            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-800 bg-slate-900/60 px-6 py-3 text-sm font-semibold text-slate-300 transition hover:border-slate-700 hover:text-white"
            >
              Read Next.js Docs →
            </a>
          </div>
        </div>

        {/* Stats Strip */}
        <section
          id="metrics"
          className="mt-20 grid grid-cols-2 gap-4 rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 backdrop-blur sm:grid-cols-4"
        >
          {[
            { label: "Server Render", value: "< 15ms" },
            { label: "Lighthouse Score", value: "100 / 100" },
            { label: "Bundle Overhead", value: "0 KB" },
            { label: "Build Status", value: "Healthy" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </section>

        {/* Feature Cards */}
        <section id="features" className="mt-20 grid gap-6 md:grid-cols-3">
          {features.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-slate-800/80 bg-slate-900/50 p-6 transition hover:-translate-y-1 hover:border-indigo-500/40 hover:bg-slate-900"
            >
              <span className="inline-block rounded-md bg-slate-800 px-2.5 py-1 text-xs font-medium text-indigo-300">
                {item.badge}
              </span>
              <h2 className="mt-4 text-lg font-semibold text-white group-hover:text-indigo-300 transition">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </section>

        {/* Bottom Banner */}
        <section
          id="cta"
          className="mt-20 rounded-3xl border border-indigo-500/20 bg-gradient-to-r from-indigo-950/60 via-slate-900 to-slate-900 p-8 text-center sm:p-12"
        >
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Everything is wired up and rendering properly.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400 sm:text-base">
            Edit <code className="rounded bg-slate-800 px-1.5 py-0.5 text-indigo-300">app/page.tsx</code> and save to test Fast Refresh in real time.
          </p>
        </section>
      </main>
    </div>
  );
}
