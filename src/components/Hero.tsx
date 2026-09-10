'use client';

import React, { useState, useEffect } from 'react';
import {
  Calendar,
  ArrowRight,
  Zap,
  ShieldCheck,
  QrCode,
  Building2,
  FileCheck,
  Cpu,
  Database,
  CheckCircle2,
  ScanLine,
} from 'lucide-react';

export default function Hero() {
  // Simulación de estados para el mockup interactivo del hero
  const [activeStep, setActiveStep] = useState<number>(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev >= 3 ? 1 : prev + 1));
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  // Función para garantizar desplazamiento suave sin que el navegador bloquee el ancla
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Actualizamos la URL limpiamente
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  return (
    <section className="relative z-10 pt-10 pb-16 md:pt-16 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Badge Superior de Nicho Específico */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 shadow-inner">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse"></span>
          <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-emerald-400 font-semibold">
            AUTOMATIZACIÓN PARA DISTRIBUIDORAS, ALMACENES &amp; TALLERES INDUSTRIALES
          </span>
        </div>
      </div>

      {/* Grid Principal: Copy Persuasivo + Mockup Visual de Planta */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Columna Izquierda: Mensaje Central y Acciones */}
        <div className="lg:col-span-7 text-left space-y-6">
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
            Deja de Perder Horas en Papeleo y{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Digitación Manual.
            </span>
          </h1>

          <p className="text-xs sm:text-sm font-mono text-emerald-400 font-semibold tracking-wide">
            [ Elimina el ingreso manual de datos, los errores de inventario y los cuellos de botella en tu piso de planta ]
          </p>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Diseño e implemento <strong className="text-white font-semibold">aplicaciones web a medida</strong>,{' '}
            <strong className="text-white font-semibold">extractores de documentos con IA (Claude API)</strong> y{' '}
            <strong className="text-white font-semibold">sistemas de trazabilidad QR</strong> que transforman guías de despacho físicas en inventarios sincronizados en tiempo real.
          </p>

          {/* Grupo de Acciones (CTA Unificado) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
            <a
              href="#final-cta"
              onClick={(e) => handleScrollTo(e, 'final-cta')}
              className="px-7 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-sm sm:text-base tracking-wide transition-all duration-200 shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <Calendar className="w-5 h-5 text-slate-950" />
              <span>Agendar Auditoría Gratuita (20 Min)</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            {/* Botón Ver Caso de Estudio con Scroll Suave Garantizado */}
            <a
              href="#case-study"
              onClick={(e) => handleScrollTo(e, 'case-study')}
              className="px-6 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 font-mono text-xs sm:text-sm font-medium transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:border-emerald-500/40"
            >
              <span>Ver Caso Chilemat Quillota</span>
              <span className="text-emerald-400 font-bold">↓</span>
            </a>
          </div>

          {/* Badges de Clientes Objetivo */}
          <div className="pt-2 flex flex-wrap items-center gap-2 text-[11px] font-mono text-slate-400">
            <span className="text-slate-500">Diseñado para:</span>
            <span className="bg-slate-900/90 px-2.5 py-1 rounded-md border border-slate-800 text-slate-300">
              🏢 Cadenas Ferreteras &amp; Proveedores
            </span>
            <span className="bg-slate-900/90 px-2.5 py-1 rounded-md border border-slate-800 text-slate-300">
              📦 Centros de Distribución (PyME &amp; Mid-Market)
            </span>
            <span className="bg-slate-900/90 px-2.5 py-1 rounded-md border border-slate-800 text-slate-300">
              🔧 Talleres de Mantenimiento y Activos
            </span>
          </div>

        </div>

        {/* Columna Derecha: Mockup Visual de Consola de Planta */}
        <div className="lg:col-span-5 w-full">
          <div className="bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-700/80 rounded-3xl p-5 sm:p-6 shadow-2xl relative overflow-hidden backdrop-blur-xl">
            
            {/* Cabecera del Panel Visual */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-slate-300 font-bold">PIPELINE OPERATIVO V3</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px]">
                TIEMPO REAL
              </span>
            </div>

            {/* Simulación Gráfica de 3 Fases del Flujo */}
            <div className="mt-5 space-y-3.5">
              
              {/* Paso 1: Escaneo de Guía Física */}
              <div className={`p-3.5 rounded-xl border transition-all ${
                activeStep === 1 
                  ? 'bg-slate-800/80 border-emerald-500/50 shadow-md shadow-emerald-500/10' 
                  : 'bg-slate-950/60 border-slate-800/80 opacity-60'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                      <ScanLine className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white font-mono">1. Captura de Guía Física</p>
                      <p className="text-[10px] text-slate-400 font-mono">Foto de despacho o PDF de proveedor</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-400">
                    {activeStep === 1 ? 'PROCESANDO...' : 'LISTO'}
                  </span>
                </div>
              </div>

              {/* Paso 2: Extracción con IA (Claude API) */}
              <div className={`p-3.5 rounded-xl border transition-all ${
                activeStep === 2 
                  ? 'bg-slate-800/80 border-cyan-500/50 shadow-md shadow-cyan-500/10' 
                  : 'bg-slate-950/60 border-slate-800/80 opacity-60'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white font-mono">2. Extracción Claude Vision</p>
                      <p className="text-[10px] text-slate-400 font-mono">Validación SKU 99.8% + Cero retención</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-cyan-400">
                    &lt; 1.8s
                  </span>
                </div>
              </div>

              {/* Paso 3: Stock y Trazabilidad QR */}
              <div className={`p-3.5 rounded-xl border transition-all ${
                activeStep === 3 
                  ? 'bg-slate-800/80 border-purple-500/50 shadow-md shadow-purple-500/10' 
                  : 'bg-slate-950/60 border-slate-800/80 opacity-60'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center">
                      <Database className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white font-mono">3. Sincronización Inmediata</p>
                      <p className="text-[10px] text-slate-400 font-mono">Stock en PostgreSQL + QR en patio</p>
                    </div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                </div>
              </div>

            </div>

            {/* Micro-Tarjeta de Resultado Visual en Vivo */}
            <div className="mt-5 p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-400 space-y-1.5">
              <div className="flex justify-between items-center text-slate-300">
                <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <FileCheck className="w-3.5 h-3.5" /> GUÍA #849XX SUCURSAL QUILLOTA
                </span>
                <span className="text-[9px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-400">Chilemat</span>
              </div>
              <p className="text-[10px] text-slate-400">
                • 15x Taladro Percutor 20V &rarr; <span className="text-emerald-400">Stock Actualizado</span>
              </p>
              <p className="text-[10px] text-slate-400">
                • 40x Disco de Corte Metal &rarr; <span className="text-emerald-400">Validado sin errores</span>
              </p>
            </div>

            {/* Pie del Mockup */}
            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span>Tecnología: Next.js + Anthropic Claude</span>
              <span className="text-emerald-400 font-semibold">● 100% Auditado</span>
            </div>

          </div>
        </div>

      </div>

      {/* Hero KPI Micro-Banner (Inferior) */}
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

    </section>
  );
}