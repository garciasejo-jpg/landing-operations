'use client';

import React, { useState } from 'react';
import {
  Award,
  Terminal,
  Copy,
  Check,
  HelpCircle,
  ChevronDown,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Clock,
  Briefcase,
  Layers,
  Sparkles,
} from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: '¿Mis documentos y datos sensibles de clientes se usan para entrenar la IA?',
    answer:
      'No. Se implementan exclusivamente APIs empresariales de Anthropic (Claude) y OpenAI bajo acuerdos estrictos de Zero Data Retention (ZDR). Tus guías de despacho, facturas, RUTs y condiciones comerciales jamás se almacenan ni se utilizan para reentrenar modelos públicos.',
  },
  {
    question: '¿Es necesario reemplazar nuestro ERP actual (SAP, Softland, Defontana, Oracle)?',
    answer:
      'Para nada. Nuestras soluciones no buscan reemplazar tu ERP central, sino actuar como una capa operativa ligera de captura ("edge middleware") en patio o bodega. Capturamos, validamos con QR/IA e inyectamos los datos limpios mediante API, webhooks o planillas sincronizadas.',
  },
  {
    question: '¿Cómo es la curva de adopción para operarios de bodega y taller?',
    answer:
      'Diseñamos con criterio de piso industrial: botones de alto contraste, tipografías legibles a distancia, cero formularios innecesarios y compatibilidad con tablets rugerizadas o teléfonos de gama media. El personal suele dominar el escaneo y validación en menos de 10 minutos.',
  },
  {
    question: '¿Cuánto tiempo toma implementar un prototipo funcional en terreno?',
    answer:
      'Un piloto funcional conectado a base de datos suele estar operando entre 2 y 3 semanas tras la auditoría inicial. Esto permite validar métricas tangibles de ahorro de horas en el piso antes de expandir el sistema a otras estaciones.',
  },
  {
    question: '¿Cuál es el modelo de trabajo y rango de inversión?',
    answer:
      'Los diagnósticos y blueprints parten desde $1,200 USD. Los módulos cerrados de extracción con IA o PWAs de trazabilidad QR llave en mano se cotizan por hito cerrado (generalmente entre $2,800 y $6,500 USD según la escala del flujo operativo). Facturación disponible en CLP según tipo de cambio observado más IVA.',
  },
];

export default function WhyMeSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const contactEmail = 'garciasejo@gmail.com';

  const handleCopyEmail = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(contactEmail).then(() => {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2200);
      });
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="about" className="py-24 relative z-10 bg-slate-950/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Tarjeta Principal de Presentación y Credenciales */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Avatar / Tarjeta de Identidad */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative mb-5">
                <div className="w-44 h-44 rounded-2xl bg-gradient-to-tr from-emerald-500 via-cyan-500 to-slate-700 p-1 shadow-2xl">
                  <div className="w-full h-full bg-slate-950 rounded-[14px] flex flex-col items-center justify-center p-4 text-slate-300">
                    <Terminal className="w-12 h-12 text-emerald-400 mb-2" />
                    <span className="font-mono font-bold text-sm text-white tracking-wide">
                      JOSÉ MIGUEL
                    </span>
                    <span className="font-mono text-xs text-emerald-400 tracking-wider">
                      GARCÍA
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono mt-1">
                      CHILE · REMOTO
                    </span>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-slate-950 text-[10px] font-mono font-extrabold px-2.5 py-0.5 rounded-full shadow-md flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  <span>VERIFICADO</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight">
                José Miguel García
              </h3>
              <p className="text-xs font-mono text-emerald-400 mt-1 font-semibold">
                Ingeniero Industrial
              </p>
              <p className="text-xs text-slate-300 font-medium mt-0.5 max-w-[260px]">
                Máster en Marketing Digital e Inteligencia Artificial Generativa
              </p>
              <p className="text-[11px] text-slate-500 font-mono mt-1">
                Operations &amp; AI Automation Architect
              </p>

              {/* Botones de Contacto Verificados (Sin enlaces rotos de placeholder) */}
              <div className="flex items-center gap-3 mt-5">
                <a
                  href="https://www.linkedin.com/in/josé-garcía-lacruz"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white transition-all border border-slate-700/80 flex items-center gap-2 text-xs font-mono shadow-sm"
                  title="Perfil de LinkedIn de José Miguel García"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current text-sky-400" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3.5 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white transition-all border border-slate-700/80 flex items-center gap-2 text-xs font-mono shadow-sm cursor-pointer"
                  title="Copiar correo electrónico"
                  aria-label="Copiar correo"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">¡Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-400" />
                      <span>Copiar Email</span>
                    </>
                  )}
                </button>
              </div>

              {copiedEmail && (
                <span className="text-[11px] font-mono text-emerald-400 mt-2">
                  garciasejo@gmail.com
                </span>
              )}
            </div>

            {/* Narrativa de Ventaja Competitiva y Respaldo Concreto */}
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                <span>Ventaja Competitiva Comprobada</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
                Criterio de Planta Industrial + Maestría en IA Generativa.
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Con <strong className="text-white font-semibold">más de 10 años de trayectoria</strong> optimizando procesos operativos, logística interna y gestión de inventarios en el sector industrial, no desarrollo código aislado de la realidad de bodega. Mi formación dual como <strong className="text-emerald-400 font-semibold">Ingeniero Industrial</strong> y graduado de <strong className="text-white font-semibold">Máster en Marketing Digital e IA Generativa</strong> me permite diagnosticar exactamente dónde fuga dinero tu operación y construir herramientas de software de adopción inmediata para operarios en piso de planta.
              </p>

              {/* Badges de Credenciales Concretas */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold mb-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>+10 AÑOS</span>
                  </div>
                  <p className="text-xs text-white font-semibold">Experiencia en Operaciones</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Optimización de procesos y logística</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold mb-1">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>SECTOR B2B</span>
                  </div>
                  <p className="text-xs text-white font-semibold">Retail Industrial &amp; Faena</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Ferreterías, patios y distribución</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="flex items-center gap-2 text-purple-400 text-xs font-mono font-bold mb-1">
                    <Layers className="w-3.5 h-3.5" />
                    <span>FORMACIÓN</span>
                  </div>
                  <p className="text-xs text-white font-semibold">Ingeniería + Máster IA</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Criterio de negocio y algoritmos LLM</p>
                </div>
              </div>

              {/* Comparativa: Programador Genérico vs Ingeniero de Operaciones */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-950/70 p-4 sm:p-5 rounded-2xl border border-slate-800 text-xs text-slate-300 space-y-2">
                  <div className="font-mono text-rose-400 font-bold flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                    <XCircle className="w-4 h-4" />
                    <span>Programador Genérico</span>
                  </div>
                  <p className="text-slate-400 leading-normal">
                    • Desconoce la dinámica de turnos, patios de carga y recepción física.
                  </p>
                  <p className="text-slate-400 leading-normal">
                    • Diseña interfaces complejas que los operarios evitan usar.
                  </p>
                  <p className="text-slate-400 leading-normal">
                    • Propone migraciones traumáticas de 18 meses que paralizan el negocio.
                  </p>
                </div>

                <div className="bg-slate-950/70 p-4 sm:p-5 rounded-2xl border border-emerald-500/30 text-xs text-slate-300 space-y-2">
                  <div className="font-mono text-emerald-400 font-bold flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Ingeniero Industrial + Ops IA</span>
                  </div>
                  <p className="text-slate-300 leading-normal">
                    • Empatía de planta: interfaces de un tap para guantes y tablets.
                  </p>
                  <p className="text-slate-300 leading-normal">
                    • Extracción documental con IA validada contra catálogos reales de SKUs.
                  </p>
                  <p className="text-slate-300 leading-normal">
                    • Retorno de inversión medible en semanas, conviviendo con tu ERP actual.
                  </p>
                </div>
              </div>

              {/* Garantía de Viabilidad Técnica */}
              <div className="pt-2">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-emerald-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <div>
                      <span className="font-mono font-bold text-white uppercase text-[11px] block">
                        Garantía de Honestidad Operativa:
                      </span>
                      <p className="text-slate-400 text-[11px]">
                        Si en la auditoría inicial de 20 minutos determinamos que tu proceso no se beneficiará de IA o software a medida con un ROI positivo, te lo diré con total franqueza. Cero venta forzada.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Sección de Preguntas Frecuentes (FAQ) */}
        <div id="faq" className="mt-24 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Resolución de Dudas</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Preguntas Frecuentes de Operaciones &amp; Seguridad
            </h3>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              Todo lo que necesitas saber sobre confidencialidad de datos, ERPs y adopción en planta.
            </p>
          </div>

          <div className="space-y-3.5">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden transition-colors hover:border-slate-700"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-white hover:text-emerald-400 transition-colors focus:outline-none cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-emerald-400' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-slate-800/60 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}