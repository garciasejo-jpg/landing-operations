const services = [
  {
    step: "01",
    title: "Operational Diagnostics & Architecture",
    description:
      "An in-depth audit of your current paper/manual workflows to identify friction points and map out the exact automated software architecture you need.",
  },
  {
    step: "02",
    title: "Custom AI Document & Data Pipelines",
    description:
      "Invoices, dispatch guides, receipts, and technical specs automatically parsed and synced into your databases/ERPs using cutting-edge LLMs.",
  },
  {
    step: "03",
    title: "End-to-End Operational Web Apps",
    description:
      "Full-stack bespoke platforms (Next.js + Supabase) tailored to your exact warehouse, inventory, or workflow logic, accessible from mobile, tablet, or desktop.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 border-t border-zinc-800/60 max-w-5xl mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-3xl font-bold text-zinc-100">How We Can Work Together</h2>
        <p className="mt-3 text-zinc-400 text-sm">
          Targeted solutions built directly for physical and technical operations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.step}
            className="p-6 rounded-xl border border-zinc-800/80 bg-zinc-900/40 flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-mono text-emerald-400 font-bold px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
                {s.step}
              </span>
              <h3 className="text-lg font-semibold text-zinc-100 mt-4 mb-2">
                {s.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {s.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}