import { Clock, AlertTriangle, EyeOff } from "lucide-react";

const problems = [
  {
    icon: Clock,
    text: "Hours lost to manual re-typing and clerical errors.",
  },
  {
    icon: AlertTriangle,
    text: "Lost parts, misplaced tools, and inventory mismatches.",
  },
  {
    icon: EyeOff,
    text: "Management flying blind without real-time operational metrics.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-20 border-t border-zinc-800/60 max-w-5xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-100">
          Most operational leaks don’t happen on machines. They happen on paper.
        </h2>
        <p className="mt-4 text-zinc-400">
          In warehouses, workshops, and distribution hubs, critical operational data gets trapped in physical delivery notes, paper checklists, and fragmented spreadsheets.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {problems.map((p, i) => {
          const Icon = p.icon;
          return (
            <div
              key={i}
              className="p-6 rounded-xl border border-zinc-800/80 bg-zinc-900/40 hover:border-zinc-700 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <p className="text-zinc-200 font-medium leading-snug">{p.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}