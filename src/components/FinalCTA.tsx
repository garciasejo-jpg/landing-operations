import { Mail, Calendar } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="contact" className="py-24 border-t border-zinc-800/60 max-w-5xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-zinc-100">
        Ready to modernize your operations?
      </h2>
      <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
        Let&apos;s discuss your current bottleneck and outline a working prototype. No fluff, just practical automation.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="https://cal.com/workflow-audit"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-emerald-500 text-zinc-950 font-medium hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20"
        >
          <Calendar className="w-4 h-4" />
          Book a Discovery Call
        </a>
        <a
          href="mailto:garciasejo@gmail.com?subject=Workflow%20Audit%20Inquiry"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-zinc-800 bg-zinc-900/50 text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors"
        >
          <Mail className="w-4 h-4" />
          Or send an email directly
        </a>
      </div>
    </section>
  );
}