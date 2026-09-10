'use client';

import React, { useState } from 'react';
import { AlertTriangle, Clock, Box, TrendingDown, Activity, ArrowRight } from 'lucide-react';

export default function ProblemSection() {
  // Estado interactivo de la calculadora de pérdidas operativas
  const [workers, setWorkers] = useState<number>(6);
  const [hoursPerDay, setHoursPerDay] = useState<number>(1.5);
  const [hourlyRate, setHourlyRate] = useState<number>(25);

  // Cálculo de horas y costo monetario proyectado (22 días hábiles al mes)
  const monthlyHoursLost = Math.round(workers * hoursPerDay * 22);
  const monthlyCostWaste = Math.round(monthlyHoursLost * hourlyRate);
  const annualCostWaste = monthlyCostWaste * 12;

  return (
    <section id="problem" className="py-20 relative z-10 bg-slate-950/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado del Bloque de Dolor */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-rose-400 uppercase tracking-wider mb-3">
            <AlertTriangle className="w-4 h-4" />
            <span>Fricción Operativa Real</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
            La mayoría de las fugas operativas no ocurren en las máquinas.{' '}
            <span className="text-rose-400">Ocurren en el papel.</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            En bodegas, faenas y talleres mecánicos, los datos más críticos del negocio se quedan atrapados en guías de despacho arrugadas, listas impresas y planillas Excel desconectadas.
          </p>
        </div>

        {/* Matriz de Problemas Operativos */}
        {}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Tarjeta 1: Re-digitación */}
          <div className="relative bg-slate-900/80 border border-slate-800 rounded-2xl p-7 hover:border-rose-500/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-5 text-rose-400 group-hover:scale-110 transition-transform">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2.5">
              Horas Perdidas en Re-tipeo y Errores Clericales
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              El personal de despacho pasa de 2 a 3 horas al día transcribiendo manualmente guías físicas de proveedores y clientes. Un simple error en un dígito de SKU descalabra el inventario por semanas.
            </p>
            <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center text-xs font-mono text-rose-400/90 gap-1.5">
              <span>⚠️ Alta tasa de duplicación y reclamos</span>
            </div>
          </div>

          {/* Tarjeta 2: Custodia y Herramientas */}
          <div className="relative bg-slate-900/80 border border-slate-800 rounded-2xl p-7 hover:border-amber-500/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-5 text-amber-400 group-hover:scale-110 transition-transform">
              <Box className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2.5">
              Herramientas Extraviadas y Pérdida de Custodia
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Equipos y herramientas costosas rotan de estación o salen a terreno con planillas de papel. Cuando se detecta el faltante el viernes, nadie sabe en qué estación o en manos de quién quedó.
            </p>
            <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center text-xs font-mono text-amber-400/90 gap-1.5">
              <span>⚠️ Cero registro instantáneo de responsable</span>
            </div>
          </div>

          {/* Tarjeta 3: Decisiones a Ciegas */}
          <div className="relative bg-slate-900/80 border border-slate-800 rounded-2xl p-7 hover:border-cyan-500/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-5 text-cyan-400 group-hover:scale-110 transition-transform">
              <TrendingDown className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2.5">
              Gerencia Tomando Decisiones a Ciegas
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Los líderes operativos reciben reportes consolidados con días de retraso. Los cuellos de botella en recepción o despachos retenidos se detectan cuando el cliente ya está insatisfecho.
            </p>
            <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center text-xs font-mono text-cyan-400/90 gap-1.5">
              <span>⚠️ Cero telemetría en tiempo real del piso</span>
            </div>
          </div>

        </div>

        {/* Calculadora Interactiva de Desperdicio */}
        {}
        <div id="calculator" className="mt-14 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-9 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            
            <div className="max-w-xl w-full">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-md mb-3">
                <Activity className="w-3.5 h-3.5" />
                <span>Calculadora de Desperdicio Operativo</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white">
                ¿Cuánto le Cuesta el Papeleo Manual a tu Operación?
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-2">
                Ajusta las variables de tu equipo para proyectar el costo de digitación y pérdida de horas hombre en tu negocio:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1">
                    Personal Digitador/Bodega: <span className="text-emerald-400 font-bold">{workers} pers.</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    value={workers}
                    onChange={(e) => setWorkers(Number(e.target.value))}
                    className="w-full accent-emerald-400 bg-slate-800 rounded-lg cursor-pointer"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1">
                    Horas Tipeo/Día: <span className="text-emerald-400 font-bold">{hoursPerDay} hrs</span>
                  </label>
                  <input
                    type="range"
                    min="0.5"
                    max="5"
                    step="0.5"
                    value={hoursPerDay}
                    onChange={(e) => setHoursPerDay(Number(e.target.value))}
                    className="w-full accent-emerald-400 bg-slate-800 rounded-lg cursor-pointer"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1">
                    Costo Hora Estimado: <span className="text-emerald-400 font-bold">${hourlyRate} USD/h</span>
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="60"
                    step="5"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    className="w-full accent-emerald-400 bg-slate-800 rounded-lg cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Métricas Calculadas en Tiempo Real */}
            {}
            <div className="w-full lg:w-auto min-w-[280px] bg-slate-950/90 border border-slate-800 p-6 rounded-2xl text-center lg:text-left">
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                Capacidad Operativa Perdida
              </div>
              <div className="text-3xl font-extrabold text-white mt-1">
                {monthlyHoursLost} <span className="text-sm font-normal text-slate-400">horas / mes</span>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-800">
                <div className="text-[11px] font-mono text-rose-400 uppercase tracking-wider">
                  Fuga Laboral Anual Estimada
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-rose-400 mt-0.5">
                  ${annualCostWaste.toLocaleString()}{' '}
                  <span className="text-xs font-mono text-slate-500">USD/año</span>
                </div>
              </div>

              <a
                href="#final-cta"
                className="mt-5 w-full py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono text-xs font-bold transition-all shadow-md shadow-emerald-500/20 flex items-center justify-center gap-1.5"
              >
                <span>Recuperar Estas Horas</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}