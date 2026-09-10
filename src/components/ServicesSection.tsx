import React from 'react';
import {
  Layers,
  Activity,
  Cpu,
  Check,
  ChevronRight,
  Workflow,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

const SERVICES = [
  {
    number: '01.',
    icon: Activity,
    badgeColor: 'text-emerald-400',
    borderColor: 'hover:border-emerald-500/50',
    bgIcon: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
    priceTag: 'DESDE $1,200 USD · 1 SEMANA',
    title: 'Diagnóstico Operativo & Arquitectura',
    description:
      'Auditoría presencial o remota de tus flujos actuales en papel, Excel o software legado. Mapeamos la fuga de horas hombre y te entregamos la arquitectura técnica lista antes de codificar.',
    deliverables: [
      'Mapeo de cuellos de botella en bodega y patio',
      'Especificación de esquema DB, flujos y APIs',
      'Modelo proyectado de retorno de inversión (ROI)',
    ],
    ctaText: 'Solicitar Diagnóstico',
    ctaStyle: 'hover:bg-emerald-500 hover:text-slate-950',
  },
  {
    number: '02.',
    icon: Cpu,
    badgeColor: 'text-cyan-400',
    borderColor: 'hover:border-cyan-500/50',
    bgIcon: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
    priceTag: 'PROYECTO CERRADO · 2-3 SEMANAS',
    title: 'Pipelines de Extracción de Documentos con IA',
    description:
      'Guías de despacho, facturas de compras, recepciones de carga y certificados técnicos procesados con LLMs y depositados en tu base de datos o ERP con validación estricta de SKUs.',
    deliverables: [
      'Integración Claude 3.5 / OpenAI Vision API',
      'Zero Data Retention (máxima confidencialidad comercial)',
      'Conexión vía Webhook a ERP / PostgreSQL / Excel Cloud',
    ],
    ctaText: 'Cotizar Extractor IA',
    ctaStyle: 'hover:bg-cyan-500 hover:text-slate-950',
  },
  {
    number: '03.',
    icon: Layers,
    badgeColor: 'text-purple-400',
    borderColor: 'hover:border-purple-500/50',
    bgIcon: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
    priceTag: 'SISTEMA A MEDIDA · 3-4 SEMANAS',
    title: 'Aplicaciones Web Operativas & Trazabilidad QR',
    description:
      'Plataformas web progresivas (Next.js + Supabase) ultra-rápidas diseñadas para operarios con guantes o tablets en terreno: control de herramientas, checkouts y paneles gerenciales.',
    deliverables: [
      'Interfaces táctiles optimizadas para piso de planta',
      'Roles diferenciados (Operario, Supervisor y Gerencia)',
      'Soporte offline y lectura QR instantánea sin dongles caros',
    ],
    ctaText: 'Desarrollar App a Medida',
    ctaStyle: 'hover:bg-purple-500 hover:text-slate-950',
  },
];

const ROADMAP_STEPS = [
  {
    step: '01',
    badgeClass: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    title: 'Auditoría & Análisis de Cuello de Botella',
    description:
      'Revisamos tus guías de despacho, fotos de tu bodega y flujos en Excel. Identificamos en qué estación se pierden más horas y definimos la métrica de éxito.',
    deliverable: 'Diagrama de diagnóstico operativo + cálculo de ROI estimado.',
  },
  {
    step: '02',
    badgeClass: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    title: 'Prototipo Funcional en 2 Semanas',
    description:
      'Construimos el módulo central (extractor de guías con IA o scanner QR) para que tus supervisores lo prueben con documentos reales en su entorno habitual.',
    deliverable: 'PWA / Plataforma navegable probada con datos reales de tu negocio.',
  },
  {
    step: '03',
    badgeClass: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    title: 'Despliegue en Producción & Capacitación',
    description:
      'Paso a producción, conexión con tus bases de datos y capacitación práctica al equipo de planta (máximo 1 hora). Garantía de soporte y ajuste continuo.',
    deliverable: 'Sistema en vivo + manuales de uso + código fuente transferido.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 relative z-10 bg-slate-950/80 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de Servicios */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Oferta de Servicios</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Cómo Podemos Trabajar Juntos
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Soluciones modulares de ingeniería de software para erradicar cuellos de botella operativos sin fricciones de adopción ni migraciones traumáticas.
          </p>
        </div>

        {/* Grilla de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`bg-slate-900/60 border border-slate-800 rounded-3xl p-8 ${service.borderColor} transition-all duration-300 relative group flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-extrabold text-slate-700 group-hover:text-white transition-colors">
                      {service.number}
                    </span>
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${service.bgIcon}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <div className={`text-[11px] font-mono font-bold mb-1.5 ${service.badgeColor}`}>
                    {service.priceTag}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-slate-800 font-mono text-xs text-slate-400">
                    {service.deliverables.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#final-cta"
                  className={`mt-8 w-full py-2.5 rounded-xl bg-slate-800/80 text-slate-300 font-mono text-xs font-semibold transition-all flex items-center justify-center gap-2 ${service.ctaStyle}`}
                >
                  <span>{service.ctaText}</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Sección: Qué pasa después de la auditoría */}
        <div id="process" className="mt-28 pt-16 border-t border-slate-800/80">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider mb-3">
              <Workflow className="w-3.5 h-3.5" />
              <span>Hoja de Ruta Clara</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Qué Pasa Después de la Auditoría de 20 Minutos
            </h3>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              Cero ambigüedad: un proceso en 3 etapas con entregables tangibles y sin sorpresas de presupuesto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ROADMAP_STEPS.map((step, sIdx) => (
              <div
                key={sIdx}
                className="bg-slate-900/70 border border-slate-800 rounded-2xl p-7 flex flex-col justify-between hover:border-slate-700 transition-colors"
              >
                <div>
                  <div
                    className={`w-10 h-10 rounded-lg font-mono font-bold flex items-center justify-center mb-4 border ${step.badgeClass}`}
                  >
                    {step.step}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed mb-5">
                    {step.description}
                  </p>
                </div>

                <div className="text-[11px] font-mono text-slate-300 bg-slate-950 p-3 rounded-xl border border-slate-800 leading-normal">
                  <span className="text-emerald-400 font-bold block mb-1">📦 Entregable concreto:</span>
                  {step.deliverable}
                </div>
              </div>
            ))}
          </div>

          {/* Micro-banner de compatibilidad */}
          <div className="mt-10 bg-slate-900/50 border border-slate-800 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Sparkles className="w-4 h-4" />
              </div>
              <p className="text-xs text-slate-300 font-mono">
                ¿Trabajas con sistemas existentes? Nuestras soluciones conviven con <strong>SAP, Softland, Defontana o planillas Excel</strong> sin reemplazos forzados.
              </p>
            </div>
            <a
              href="#final-cta"
              className="text-xs font-mono text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1 flex-shrink-0"
            >
              <span>Consultar Viabilidad Técnica</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}