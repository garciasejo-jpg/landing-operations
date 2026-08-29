import { Zap, TrendingDown, LayoutDashboard, CheckCircle2, Search, Cpu, BarChart3, ArrowRight } from "lucide-react";

export default function CaseStudy() {
  return (
    <section id="case-study" className="py-20 border-t border-zinc-800/60 max-w-5xl mx-auto px-6">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
        Featured Case Study
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 max-w-3xl">
        From Paper Delivery Notes to Real-Time Cloud Inventory in Seconds.
      </h2>

      {/* Generic Operational Workflow Diagram */}
      <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 md:p-8">
        <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          How the Operational Pipeline Works
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Step 1: Input Friction */}
          <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/60 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-300 mb-4">
                <Search className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="font-semibold text-zinc-100 text-base mb-2">1. Capture Floor Data</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                We identify physical bottlenecks (paper notes, manual tallies, QR tags) and set up instant mobile/tablet capture methods on the shop floor.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-zinc-800 text-[11px] font-mono text-zinc-500">
              Input: Physical &amp; Paper Data
            </div>
          </div>

          {/* Step 2: Automated Processing */}
          <div className="p-5 rounded-xl border border-emerald-500/30 bg-emerald-950/10 flex flex-col justify-between relative">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-zinc-100 text-base mb-2">2. AI &amp; Logic Processing</h3>
              <p className="text-zinc-300 text-xs leading-relaxed">
                Raw data and document scans are instantly parsed, validated, and normalized using custom LLMs and automated backend pipelines.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-emerald-500/20 text-[11px] font-mono text-emerald-400">
              Process: Zero Manual Entry
            </div>
          </div>

          {/* Step 3: Centralized Operations */}
          <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/60 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-300 mb-4">
                <BarChart3 className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="font-semibold text-zinc-100 text-base mb-2">3. Real-Time Operations</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Everything syncs into a tailored cloud database with live dashboards, instant status updates, and actionable operational KPIs.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-zinc-800 text-[11px] font-mono text-zinc-500">
              Output: Real-Time Visibility
            </div>
          </div>
        </div>
      </div>

      {/* Case Details & Metrics */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="p-6 rounded-xl border border-zinc-800/80 bg-zinc-900/40">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-2">The Challenge</h3>
            <p className="text-zinc-300 leading-relaxed text-sm md:text-base">
              An industrial hardware supplier and warehouse operation was managing hundreds of physical dispatch guides (guías de despacho) weekly. Paper documents were prone to misplacement, manual logging took hours, and tracing physical assets across workshop stations was sluggish.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-zinc-800/80 bg-zinc-900/40">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-4">The Solution Architecture</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-zinc-300 text-sm leading-relaxed">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-zinc-100">AI-Powered OCR Extraction:</strong> Real-time document parsing using Anthropic Claude API to instantly convert physical paper scans into clean, structured database records.</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-300 text-sm leading-relaxed">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-zinc-100">QR-Driven Asset Management:</strong> Unique dynamic QR codes for instant physical-to-digital status updates on workshop equipment.</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-300 text-sm leading-relaxed">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-zinc-100">Full-Stack Infrastructure:</strong> Built on Next.js, Tailwind CSS, and Supabase (PostgreSQL) for sub-second synchronization and multi-user access.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="flex flex-col gap-4">
          <div className="p-5 rounded-xl border border-emerald-500/20 bg-emerald-950/10 flex items-start gap-4">
            <Zap className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
            <div>
              <div className="text-2xl font-bold text-zinc-100">&lt; 5 seconds</div>
              <div className="text-xs text-zinc-400 mt-0.5">Near-Zero Entry Time from scan to database</div>
            </div>
          </div>
          <div className="p-5 rounded-xl border border-emerald-500/20 bg-emerald-950/10 flex items-start gap-4">
            <TrendingDown className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
            <div>
              <div className="text-2xl font-bold text-zinc-100">0 Typo Errors</div>
              <div className="text-xs text-zinc-400 mt-0.5">Elimination of manual SKU mismatches</div>
            </div>
          </div>
          <div className="p-5 rounded-xl border border-emerald-500/20 bg-emerald-950/10 flex items-start gap-4">
            <LayoutDashboard className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
            <div>
              <div className="text-2xl font-bold text-zinc-100">Live Metrics</div>
              <div className="text-xs text-zinc-400 mt-0.5">Instant shop-floor transparency</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}