import React from 'react';
import { Calendar, ArrowRight, Zap, ShieldCheck, QrCode, Building2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative z-10 pt-12 pb-16 md:pt-20 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-4xl mx-auto">
        
        {/* Pre-headline Badge with target niche */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 shadow-inner mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]"></span>
          <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-emerald-400 font-semibold">
            AUTOMATIZACIÓN PARA DISTRIBUIDORAS, ALMACENES & TALLERES INDUSTRIALES
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-4">
          Deja de Perder Horas en Papeleo y{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
            Digitación Manual.
          </span>
        </h1>

        {/* Subtitle / Context Bridge */}
        <p className="text-xs sm:text-sm font-mono text-emerald-400/90 mb-6 tracking-wide">
          [ Elimina el ingreso manual de datos, los errores de inventario y los cuellos de botella en tu piso de planta ]
        </p>

        {/* Sub-headline */}
        <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
          Diseño e implemento <span className="text-white font-medium">aplicaciones web a medida</span>,{' '}
          <span className="text-white font-medium">extractores de documentos con IA (Claude API)</span> y{' '}
          <span className="text-white font-medium">sistemas de trazabilidad QR</span> que transforman guías de despacho físicas en inventarios sincronizados en tiempo real.
        </p>

        {/* CTA Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <a
            href="#final-cta"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-sm sm:text-base tracking-wide transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 group"
          >
            <Calendar className="w-5 h-5 text-slate-950" />
            <span>Agendar Auditoría Gratuita (20 Min)</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#case-study"
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 font-mono text-xs sm:text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span>Ver Caso Chilemat Quillota</span>
            <span className="text-emerald-400">↓</span>
          </a>
        </div>

        {/* Target Audience Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-[11px] font-mono text-slate-400">
          <span className="text-slate-500">Enfocado en:</span>
          <span className="bg-slate-900 px-2.5 py-1 rounded border border-slate-800 text-slate-300">
            🏢 Cadenas Ferreteras & Proveedores
          </span>
          <span className="bg-slate-900 px-2.5 py-1 rounded border border-slate-800 text-slate-300">
            📦 Centros de Distribución (PyME & Mid-Market)
          </span>
          <span className="bg-slate-900 px-2.5 py-1 rounded border border-slate-800 text-slate-300">
            🔧 Talleres de Mantenimiento y Activos
          </span>
        </div>

        {/* Hero KPI Micro-Banner */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left">
          <div className="bg-slate-900/40 p-3.5 rounded-xl border border-slate-800">
            <p className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-400" /> VELOCIDAD OCR
            </p>
            <p className="text-lg sm:text-xl font-bold text-white mt-1">&lt; 5 Segundos</p>
            <p className="text-[11px] text-slate-500">De guía física a PostgreSQL</p>
          </div>

          <div className="bg-slate-900/40 p-3.5 rounded-xl border border-slate-800">
            <p className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> PRECISIÓN SKU
            </p>
            <p className="text-lg sm:text-xl font-bold text-emerald-400 mt-1">99.8% Match</p>
            <p className="text-[11px] text-slate-500">Validación Claude Vision</p>
          </div>

          <div className="bg-slate-900/40 p-3.5 rounded-xl border border-slate-800">
            <p className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
              <QrCode className="w-3.5 h-3.5 text-cyan-400" /> TRAZABILIDAD
            </p>
            <p className="text-lg sm:text-xl font-bold text-white mt-1">100% en Planta</p>
            <p className="text-[11px] text-slate-500">Códigos QR dinámicos</p>
          </div>

          <div className="bg-slate-900/40 p-3.5 rounded-xl border border-slate-800">
            <p className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-purple-400" /> VALIDADO EN
            </p>
            <p className="text-sm font-mono font-bold text-slate-200 mt-1.5">Chilemat Quillota</p>
            <p className="text-[11px] text-slate-500">Distribución ferretera y patio</p>
          </div>
        </div>

      </div>
    </section>
  );
}