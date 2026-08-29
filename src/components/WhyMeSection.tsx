import { Wrench } from "lucide-react";

export default function WhyMeSection() {
  return (
    <section id="why-me" className="py-20 border-t border-zinc-800/60 max-w-5xl mx-auto px-6">
      <div className="p-8 md:p-12 rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900/60 to-zinc-900/20">
        <div className="w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
          <Wrench className="w-6 h-6" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-100">
          Industrial Operations Insight meets Modern Full-Stack Engineering.
        </h2>
        <p className="mt-4 text-zinc-300 leading-relaxed max-w-3xl text-base md:text-lg">
          I’m not just a software developer who builds what’s written on a ticket. With an industrial engineering background and a deep understanding of logistics, workshop dynamics, and modern generative AI, I design software that actually fits the physical reality of the floor.
        </p>
      </div>
    </section>
  );
}