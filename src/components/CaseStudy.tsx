'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  Cpu,
  QrCode,
  Layers,
  Zap,
  TrendingDown,
  Clock,
  Quote,
  FileText,
  RotateCcw,
  Play,
  Check,
  Database,
  ScanLine,
  Box,
  CheckCircle2,
  Terminal,
  ArrowRight,
  ShieldCheck,
  Lock,
} from 'lucide-react';

export default function CaseStudy() {
  const [activeTab, setActiveTab] = useState<'ocr' | 'qr' | 'architecture'>('ocr');
  const [ocrStatus, setOcrStatus] = useState<'idle' | 'processing' | 'done'>('idle');
  const [ocrProgress, setOcrProgress] = useState<number>(0);

  const runOcrSimulation = () => {
    setOcrStatus('processing');
    setOcrProgress(0);

    const interval = setInterval(() => {
      setOcrProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setOcrStatus('done');
          return 100;
        }
        return prev + 20;
      });
    }, 220);
  };

  const resetOcr = () => {
    setOcrStatus('idle');
    setOcrProgress(0);
  };

  return (
    <section id="case-study" className="py-24 relative z-10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado del Caso de Estudio */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Caso de Estudio en Producción Real</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700/80 text-slate-400 font-mono text-[11px]">
              <Lock className="w-3 h-3 text-emerald-400" />
              <span>Datos Sensibles Anonimizados (Protocolo ZDR)</span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight max-w-4xl leading-tight">
            Chilemat Quillota: De Guías de Despacho en Papel a Inventario Cloud en &lt; 5 Segundos.
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base font-mono">
            [ Despliegue en Patio de Carga y Bodega Central · Extracción OCR con IA + Trazabilidad QR ]
          </p>
        </div>

        {}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Columna Izquierda: Desafío Real, Solución Desplegada y Testimonio */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* El Desafío Concreto */}
            <div className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-white flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
                  <span>El Desafío Operativo en Terreno</span>
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  Retail Ferretero &amp; Faena
                </span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                En la sucursal de <strong>Chilemat Quillota</strong>, con camiones descargando materiales de construcción y herramientas a diario, el personal de patio dependía de guías impresas. La transcripción manual tardaba entre 24 y 48 horas en reflejarse en el stock central, originando quiebres imprevistos y diferencias entre el inventario físico y contable.
              </p>
            </div>

            {}
            <div className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white flex items-center gap-2.5 mb-4">
                <span className="w-3 h-3 rounded-full bg-cyan-400 inline-block"></span>
                <span>La Solución Implementada en Sucursal</span>
              </h3>

              <div className="space-y-4">
                
                {/* Solución 1 */}
                <div className="flex gap-3.5">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mt-0.5">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Extracción Asistida por Claude Vision API</h4>
                    <p className="text-xs text-slate-400 mt-0.5 leading-normal">
                      El operario captura la guía con la cámara de su teléfono o tablet. El modelo multimodal extrae RUT, folio, cantidades y realiza conciliación semántica con el catálogo de SKUs de la sucursal.
                    </p>
                  </div>
                </div>

                {/* Solución 2 */}
                <div className="flex gap-3.5">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mt-0.5">
                    <QrCode className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Custodia QR por Estación y Maquinaria</h4>
                    <p className="text-xs text-slate-400 mt-0.5 leading-normal">
                      Identificación con QR en transpaletas, maquinaria pesada y pallets de alta rotación para registrar cambios de operador y transferencias en patio en un solo toque.
                    </p>
                  </div>
                </div>

                {/* Solución 3 */}
                <div className="flex gap-3.5">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mt-0.5">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Capa Edge Middleware (Next.js + Supabase)</h4>
                    <p className="text-xs text-slate-400 mt-0.5 leading-normal">
                      Base de datos PostgreSQL sincronizada en la nube con permisos por rol (operario de patio, supervisor de bodega y administración), conviviendo en paralelo con su software contable existente.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {}
            <div className="bg-gradient-to-r from-emerald-950/30 to-slate-900 p-5 rounded-2xl border border-emerald-500/20 flex gap-4 items-start">
              <Quote className="w-8 h-8 text-emerald-400 flex-shrink-0 opacity-60" />
              <div>
                <p className="text-xs text-slate-300 italic leading-relaxed">
                  &ldquo;El personal de bodega adoptó la herramienta en dos turnos. Pasar de transcribir guías arrugadas a escanear con la cámara y ver el inventario cuadrado al instante eliminó las fricciones en la recepción.&rdquo;
                </p>
                <p className="text-[11px] font-mono text-emerald-400 mt-2 font-bold">
                  — R. Fuentes · Jefatura de Patio &amp; Bodega, Chilemat Quillota
                </p>
              </div>
            </div>

            {}
            <div className="space-y-2">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-gradient-to-b from-slate-900 to-slate-950 p-4 rounded-xl border border-emerald-500/30">
                  <div className="text-emerald-400 font-mono text-xs font-semibold flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5" />
                    <span>VELOCIDAD</span>
                  </div>
                  <div className="text-xl font-extrabold text-white mt-1">&lt; 5s</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">De guía física a stock activo</div>
                </div>

                <div className="bg-gradient-to-b from-slate-900 to-slate-950 p-4 rounded-xl border border-cyan-500/30">
                  <div className="text-cyan-400 font-mono text-xs font-semibold flex items-center gap-1">
                    <TrendingDown className="w-3.5 h-3.5" />
                    <span>EXACTITUD</span>
                  </div>
                  <div className="text-xl font-extrabold text-white mt-1">99.8%</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Discrepancias SKU erradicadas</div>
                </div>

                <div className="bg-gradient-to-b from-slate-900 to-slate-950 p-4 rounded-xl border border-purple-500/30">
                  <div className="text-purple-400 font-mono text-xs font-semibold flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>ADOPCIÓN</span>
                  </div>
                  <div className="text-xl font-extrabold text-white mt-1">10 Min</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Capacitación requerida en patio</div>
                </div>
              </div>

              {/* Nota metodológica de respaldo */}
              <div className="px-3 py-1.5 rounded-lg bg-slate-950/60 border border-slate-800 text-[10px] font-mono text-slate-400 flex items-center justify-between">
                <span>* Métricas validadas sobre muestra de +1.400 guías procesadas en ciclo de 6 meses.</span>
                <span className="text-emerald-400 font-semibold hidden sm:inline">Auditoría en Piso OK</span>
              </div>
            </div>

          </div>

          {}
          <div className="lg:col-span-6 bg-slate-900/90 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
            
            {/* Barra Superior Estilo Terminal Industrial */}
            <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                <span className="font-mono text-xs text-slate-400 ml-2">chilemat-quillota-sync.app</span>
              </div>

              {/* Selector de Modos de Demostración */}
              <div className="flex bg-slate-900 p-0.5 rounded-lg border border-slate-800 text-[11px] font-mono">
                <button
                  type="button"
                  onClick={() => setActiveTab('ocr')}
                  className={`px-2.5 py-1 rounded-md transition-all ${
                    activeTab === 'ocr'
                      ? 'bg-emerald-500 text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Simulador OCR
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('qr')}
                  className={`px-2.5 py-1 rounded-md transition-all ${
                    activeTab === 'qr'
                      ? 'bg-emerald-500 text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Control QR
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('architecture')}
                  className={`px-2.5 py-1 rounded-md transition-all ${
                    activeTab === 'architecture'
                      ? 'bg-emerald-500 text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Arquitectura
                </button>
              </div>
            </div>

            {}
            {activeTab === 'ocr' && (
              <div className="p-5 sm:p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-mono text-slate-300 font-semibold">
                      Guia_Despacho_Chilemat_#849XX_anon.pdf
                    </span>
                  </div>
                  {ocrStatus !== 'idle' && (
                    <button
                      type="button"
                      onClick={resetOcr}
                      className="text-[11px] font-mono text-slate-400 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Reiniciar</span>
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                  
                  {/* Vista Previa de la Guía Anonimizada */}
                  <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 relative overflow-hidden flex flex-col justify-between">
                    <div className="border border-dashed border-slate-700 rounded-lg p-3 bg-slate-900/50">
                      <div className="flex justify-between items-start text-[10px] font-mono text-slate-400 border-b border-slate-800 pb-2">
                        <div>
                          <span className="font-bold text-slate-200">CHILEMAT QUILLOTA</span>
                          <p className="text-[9px] text-emerald-400/90 font-mono">RUT: 76.43X.XXX-X [ZDR Protegido]</p>
                        </div>
                        <span className="px-1.5 py-0.5 bg-rose-500/20 text-rose-300 rounded font-bold">GUÍA #849XX</span>
                      </div>
                      <div className="mt-2 space-y-1 text-[10px] font-mono text-slate-400">
                        <p>Destino: Patio de Carga / Sucursal Quillota</p>
                        <p>Transporte: Camión Patente: [Reservado por ZDR]</p>
                        <div className="mt-2 text-[9px] bg-slate-950 p-1.5 rounded border border-slate-800 leading-relaxed">
                          • 15x Taladro Inalámbrico 20V (SKU-DEW-20V)<br />
                          • 40x Disco Corte Metal 4.5&quot; (SKU-DSC-45)<br />
                          • 08x Sierra Circular 1800W (SKU-MAK-SC)
                        </div>
                      </div>
                    </div>

                    {ocrStatus === 'processing' && (
                      <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_12px_#34d399] animate-bounce"></div>
                    )}

                    <div className="mt-3">
                      {ocrStatus === 'idle' && (
                        <button
                          type="button"
                          onClick={runOcrSimulation}
                          className="w-full py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-lg font-mono text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer"
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>Ejecutar Extracción Claude 3.5</span>
                        </button>
                      )}

                      {ocrStatus === 'processing' && (
                        <div className="space-y-1.5">
                          <div className="flex justify-between text-[10px] font-mono text-emerald-400">
                            <span>Validando SKUs contra catálogo...</span>
                            <span>{ocrProgress}%</span>
                          </div>
                          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-emerald-400 transition-all duration-300"
                              style={{ width: `${ocrProgress}%` }}
                            ></div>
                          </div>
                        </div>
                      )}

                      {ocrStatus === 'done' && (
                        <div className="flex items-center justify-center gap-1.5 py-1.5 text-xs font-mono text-emerald-400 bg-emerald-500/10 rounded-lg border border-emerald-500/30">
                          <Check className="w-3.5 h-3.5" />
                          <span>Procesado con Éxito (1.6s)</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {}
                  <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 flex flex-col justify-between font-mono text-xs">
                    <div>
                      <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-800 pb-2 mb-2">
                        <span className="text-cyan-400 font-semibold flex items-center gap-1">
                          <Database className="w-3 h-3" />
                          <span>Payload Validado</span>
                        </span>
                        <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                          <Lock className="w-2.5 h-2.5" /> ZDR Activo
                        </span>
                      </div>

                      {ocrStatus !== 'done' ? (
                        <div className="h-36 flex flex-col items-center justify-center text-center p-4 text-slate-500">
                          <Cpu className="w-8 h-8 stroke-[1.2] mb-2 text-slate-600 animate-pulse" />
                          <p className="text-[11px]">Pulsa el botón para probar la extracción inteligente con enmascaramiento de datos sensibles.</p>
                        </div>
                      ) : (
                        <div className="space-y-2 text-[10px] overflow-y-auto max-h-40 pr-1">
                          <div className="bg-slate-900 p-2 rounded border border-slate-800">
                            <span className="text-purple-400 font-bold">Cliente:</span> &quot;Chilemat Quillota&quot;<br />
                            <span className="text-purple-400 font-bold">Tipo_Doc:</span> &quot;GUIA_DESPACHO_ELECTRONICA&quot;<br />
                            <span className="text-purple-400 font-bold">Folio:</span> &quot;849XX (Enmascarado)&quot;<br />
                            <span className="text-purple-400 font-bold">RUT:</span> &quot;76.43X.XXX-X (ZDR Compliant)&quot;
                          </div>
                          <div className="bg-slate-900 p-2 rounded border border-slate-800 space-y-1">
                            <span className="text-emerald-400 font-bold">Ítems Conciliados (3/3):</span>
                            <div className="text-[9px] text-slate-300">
                              1. [SKU-DEW-20V] Qty: 15 (Stock Actualizado)<br />
                              2. [SKU-DSC-45] Qty: 40 (Stock Actualizado)<br />
                              3. [SKU-MAK-SC] Qty: 08 (Stock Actualizado)
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {ocrStatus === 'done' && (
                      <div className="mt-2 text-[10px] text-slate-400 flex items-center justify-between pt-2 border-t border-slate-800">
                        <span className="text-emerald-400 font-semibold">● Sincronizado con Supabase</span>
                        <span className="text-slate-500">Latencia: 142ms</span>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            )}

            {}
            {activeTab === 'qr' && (
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                      <ScanLine className="w-4 h-4" />
                      <span>Control de Activos en Patio</span>
                    </span>
                    <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded">
                      Chilemat Sucursal Quillota
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center flex flex-col items-center justify-center">
                      <div className="p-3 bg-white rounded-xl shadow-inner mb-3">
                        <QrCode className="w-24 h-24 text-slate-950" />
                      </div>
                      <span className="font-mono text-xs text-slate-300 font-bold">ACTIVO: CHM-EQ-4412</span>
                      <span className="text-[10px] font-mono text-slate-500">Transpaleta Eléctrica 2.0T</span>
                    </div>

                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs flex flex-col justify-between">
                      <div>
                        <div className="text-[11px] text-slate-400 mb-2 font-bold uppercase tracking-wider">Historial de Custodia</div>
                        <div className="space-y-2 text-[10px]">
                          <div className="flex items-center gap-2 text-emerald-400 bg-emerald-500/5 p-1.5 rounded border border-emerald-500/20">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>14:10 - Asignado a Patio de Carga</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-400 p-1.5">
                            <Clock className="w-3.5 h-3.5 text-slate-500" />
                            <span>09:30 - Check preventivo de turno OK</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-400 p-1.5">
                            <Box className="w-3.5 h-3.5 text-slate-500" />
                            <span>Ayer - Responsable: Turno Tarde</span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-slate-800 text-[10px] text-cyan-400 flex justify-between items-center">
                        <span>Estado: Operativo</span>
                        <span className="text-slate-500">Escaneo desde Teléfono / Tablet</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-[11px] text-slate-400 text-center font-mono">
                  Lectura instantánea sin lectores láser externos: opera directo con la cámara de cualquier teléfono.
                </p>
              </div>
            )}

            {}
            {activeTab === 'architecture' && (
              <div className="p-6 flex-1 flex flex-col justify-between font-mono">
                <div>
                  <div className="text-xs text-slate-300 font-semibold mb-4 flex items-center gap-1.5">
                    <Terminal className="w-4 h-4 text-emerald-400" />
                    <span>Arquitectura Técnica Desplegada (Edge Middleware)</span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center text-[10px] text-emerald-400 font-bold">1</span>
                        <div>
                          <div className="text-white font-bold text-[11px]">Captura en Patio</div>
                          <div className="text-[10px] text-slate-400">Foto con smartphone o PDF emitido por proveedor</div>
                        </div>
                      </div>
                      <span className="text-[10px] bg-slate-900 px-2 py-1 rounded text-slate-400">JPG / PDF</span>
                    </div>

                    <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center text-[10px] text-emerald-400 font-bold">2</span>
                        <div>
                          <div className="text-white font-bold text-[11px]">Procesamiento IA (Zero Data Retention)</div>
                          <div className="text-[10px] text-slate-400">Claude Vision extrae y concilia SKUs contra catálogo real</div>
                        </div>
                      </div>
                      <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded border border-emerald-500/20">Anthropic API</span>
                    </div>

                    <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center text-[10px] text-emerald-400 font-bold">3</span>
                        <div>
                          <div className="text-white font-bold text-[11px]">Capa Central &amp; Webhooks</div>
                          <div className="text-[10px] text-slate-400">PostgreSQL (Supabase) + Inyección a ERP vía API o CSV</div>
                        </div>
                      </div>
                      <span className="text-[10px] bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded border border-cyan-500/20">Middleware</span>
                    </div>

                    <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center text-[10px] text-emerald-400 font-bold">4</span>
                        <div>
                          <div className="text-white font-bold text-[11px]">Dashboard en Vivo para Jefatura</div>
                          <div className="text-[10px] text-slate-400">Visibilidad de recepciones en tiempo real y alertas de stock</div>
                        </div>
                      </div>
                      <span className="text-[10px] bg-purple-500/10 text-purple-400 px-2 py-1 rounded border border-purple-500/20">Next.js UI</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 text-[10px] text-slate-400 flex flex-col sm:flex-row justify-between gap-1">
                  <span>Compatibilidad: SAP, Softland, Defontana, Oracle</span>
                  <span className="text-emerald-400 font-semibold">● No requiere reemplazar tu ERP actual</span>
                </div>
              </div>
            )}

          </div>

        </div>

        {}
        <div className="mt-12 p-4 rounded-2xl bg-slate-900/50 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 flex-shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <p className="text-xs text-slate-300 font-mono">
              ¿Quieres evaluar cómo se adaptaría este pipeline a las guías y bodegas de tu empresa?
            </p>
          </div>
          <a
            href="#final-cta"
            className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono text-xs font-bold transition-all flex items-center gap-1.5 flex-shrink-0 shadow-md shadow-emerald-500/20"
          >
            <span>Agendar Auditoría Gratuita (20 Min)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}