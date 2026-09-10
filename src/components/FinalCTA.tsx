'use client';

import React, { useState } from 'react';
import {
  Calendar,
  ArrowRight,
  Mail,
  Copy,
  Check,
  X,
  Terminal,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export default function FinalCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Datos del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bottleneck: 'Guías de despacho / Facturas físicas a Base de Datos (OCR)',
  });

  const contactEmail = 'garciasejo@gmail.com';

  const handleCopyEmail = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(contactEmail).then(() => {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2200);
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);

    // Simulación de respuesta exitosa
    setTimeout(() => {
      setFormSubmitted(false);
      setIsModalOpen(false);
      setFormData({
        name: '',
        email: '',
        bottleneck: 'Guías de despacho / Facturas físicas a Base de Datos (OCR)',
      });
    }, 2800);
  };

  return (
    <>
      {}
      <section
        id="final-cta"
        className="py-24 relative z-10 bg-gradient-to-b from-slate-950 via-[#070B12] to-[#04070C] border-t border-slate-800 text-center"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Badge de disponibilidad */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Cupos Limitados por Mes</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            ¿Listo para modernizar las operaciones de tu negocio?
          </h2>

          <p className="mt-5 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Conversemos sobre tu cuello de botella actual y tracemos un prototipo funcional.{' '}
            <span className="text-emerald-400 font-semibold">
              Sin discursos comerciales vacíos, solo ingeniería práctica.
            </span>
          </p>

          {}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-9 py-4 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-slate-950 font-extrabold text-base tracking-wide shadow-xl shadow-emerald-500/20 transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <Calendar className="w-5 h-5 text-slate-950" />
              <span>Agendar Auditoría Gratuita (20 Min)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-mono text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">¡Correo Copiado al Portapapeles!</span>
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4 text-slate-400" />
                  <span>{contactEmail}</span>
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                </>
              )}
            </button>

          </div>

          <p className="mt-6 text-xs text-slate-500 font-mono">
            ⚡ Auditoría de 20 minutos • Diagrama de flujo incluido • Cero compromiso de contratación
          </p>

        </div>
      </section>

      {}
      <footer className="py-12 bg-[#04070C] border-t border-slate-900 text-xs font-mono text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="text-slate-300 font-bold tracking-wide">JOSÉ MIGUEL GARCÍA</span>
            </div>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span>Ingeniero Industrial · Máster en Marketing Digital e IA Generativa</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="#problem" className="hover:text-slate-300 transition-colors">
              Fricción Operativa
            </a>
            <a href="#case-study" className="hover:text-slate-300 transition-colors">
              Caso Chilemat Quillota
            </a>
            <a href="#services" className="hover:text-slate-300 transition-colors">
              Servicios
            </a>
            <a href="#process" className="hover:text-slate-300 transition-colors">
              Proceso
            </a>
            <a href="#about" className="hover:text-slate-300 transition-colors">
              Sobre Mí
            </a>
            <a href="#faq" className="hover:text-slate-300 transition-colors">
              FAQ
            </a>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 pt-6 border-t border-slate-900/60 text-center text-[11px] text-slate-600">
          © {new Date().getFullYear()} José Miguel García. Todos los derechos reservados.
        </div>
      </footer>

      {}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            
            <button
              type="button"
              onClick={() => {
                setIsModalOpen(false);
                setFormSubmitted(false);
              }}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 transition-colors"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {formSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  ¡Solicitud Enviada con Éxito!
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed max-w-sm mx-auto">
                  Revisaré tus antecedentes operativos y te escribiré en menos de 24 horas hábiles para coordinar el horario de la sesión por Google Meet.
                </p>
                <div className="pt-2">
                  <span className="text-[11px] font-mono text-slate-500">
                    Cerrando ventana automáticamente...
                  </span>
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase font-bold mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Auditoría de 20 Minutos Sin Costo</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
                  Revisemos tu Flujo de Terreno
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                  Analizaremos tus guías físicas, planillas o activos en faena para definir un plan de automatización con IA y QR aplicable en semanas.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div>
                    <label className="block text-[11px] font-mono text-slate-300 uppercase mb-1 font-semibold">
                      Nombre y Cargo
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="ej. Carlos Morales - Jefe de Bodega"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-400 transition-colors font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-300 uppercase mb-1 font-semibold">
                      Correo Electrónico de Empresa
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="carlos@distribuidora.cl"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-400 transition-colors font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-300 uppercase mb-1 font-semibold">
                      Principal Cuello de Botella a Resolver
                    </label>
                    <select
                      value={formData.bottleneck}
                      onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-emerald-400 transition-colors font-sans"
                    >
                      <option value="Guías de despacho / Facturas físicas a Base de Datos (OCR)">
                        Guías de despacho / Facturas físicas a Base de Datos (OCR)
                      </option>
                      <option value="Trazabilidad QR de herramientas / maquinaria en faena">
                        Trazabilidad QR de herramientas / maquinaria en faena
                      </option>
                      <option value="Diferencias frecuentes de inventario en bodega o patio">
                        Diferencias frecuentes de inventario en bodega o patio
                      </option>
                      <option value="Desarrollo de aplicación web operativa a medida">
                        Desarrollo de aplicación web operativa a medida
                      </option>
                      <option value="Otro cuello de botella operativo">
                        Otro cuello de botella operativo
                      </option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-lg shadow-emerald-500/20 mt-3 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Solicitar Horarios de Auditoría</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="text-center pt-2">
                    <span className="text-[11px] text-slate-500 font-mono">
                      O escribe directamente a <strong className="text-slate-300">{contactEmail}</strong>
                    </span>
                  </div>
                </form>
              </>
            )}

          </div>
        </div>
      )}
    </>
  );
}