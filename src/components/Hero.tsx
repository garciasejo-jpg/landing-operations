import { ArrowRight, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 max-w-5xl mx-auto px-6 text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-8">
        Operations & AI Automation Engineer
      </div>
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-100 max-w-4xl mx-auto leading-tight md:leading-tight">
        Stop Losing Hours to Paperwork and Manual Data Entry.
      </h1>
      <p className="mt-6 text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
        I design and deploy tailor-made web applications, AI document extractors, and QR-based tracking systems that turn messy operational workflows into real-time, automated dashboards.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="https://cal.com/workflow-audit"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-emerald-500 text-zinc-950 font-medium hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20"
        >
          Schedule a Free 20-Min Workflow Audit
          <ArrowRight className="w-4 h-4" />
        </a>
        <a
          href="#case-study"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-zinc-800 bg-zinc-900/50 text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors"
        >
          View Case Study
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}