'use client';

import React, { useState } from 'react';
import {
  Calendar,
  ArrowRight,
  Mail,
  Copy,
  Check,
  X,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Lock,
  CheckCircle2,
} from 'lucide-react';

export default function FinalCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false); // Estado para abrir el modal de Privacidad
  const [copiedEmail, setCopiedEmail] = useState(false);

  const contactEmail = 'garciasejo@gmail.com';
  const calComUrl = 'https://cal.com/sejo-garcia-odudom';

  const handleCopyEmail = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(contactEmail).then(() => {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2200);
      });
    }
  };

  return (
    <>
      {/* Sección de Cierre (Call to Action) */}
      <section
        id="final-cta"
        className="py-24 relative z-10 bg-gradient-to-b from-slate-950 via-[#070B12] to-[#04070C] border-t border-slate-800 text-center"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
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
            ⚡ Auditoría de 20 minutos • Integrado con Cal.com • Cero compromiso de contratación
          </p>

        </div>
      </section>

      {/* Pie de Página (Footer) con enlace de Política de Privacidad y ZDR */}
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
            {/* ENLACE OFICIAL DE POLÍTICA DE PRIVACIDAD Y ZDR */}
            <button
              type="button"
              onClick={() => setIsPrivacyOpen(true)}
              className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Política de Privacidad &amp; ZDR</span>
            </button>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 pt-6 border-t border-slate-900/60 text-center text-[11px] text-slate-600">
          © {new Date().getFullYear()} José Miguel García. Todos los derechos reservados. Cumplimiento B2B Estricto.
        </div>
      </footer>

      {/* Modal de Cal.com para Auditoría */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-4xl w-full h-[90vh] max-h-[780px] p-4 sm:p-6 shadow-2xl relative flex flex-col">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase font-bold">
                <Sparkles className="w-4 h-4" />
                <span>Auditoría de 20 Minutos · Cal.com en Vivo</span>
              </div>
              
              <div className="flex items-center gap-2">
                <a
                  href={calComUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] font-mono text-slate-400 hover:text-emerald-400 flex items-center gap-1 bg-slate-800 px-2 py-1 rounded-lg transition-colors"
                  title="Abrir en pestaña nueva"
                >
                  <span>Abrir enlace</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="text-slate-400 hover:text-white p-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 transition-colors cursor-pointer"
                  aria-label="Cerrar modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 w-full mt-3 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
              <iframe
                src={`${calComUrl}?embed=true`}
                title="Agenda tu Auditoría con José Miguel García"
                className="w-full h-full border-0"
                allow="camera; microphone; autoplay; clipboard-write"
              />
            </div>

            <div className="pt-3 text-center">
              <span className="text-[11px] text-slate-500 font-mono">
                ¿Problemas con el calendario? Escríbeme directo a <strong className="text-slate-300">{contactEmail}</strong>
              </span>
            </div>

          </div>
        </div>
      )}

      {/* MODAL DE POLÍTICA DE PRIVACIDAD Y PROTOCOLO ZDR (EN ESPAÑOL) */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-2xl w-full max-h-[85vh] p-6 sm:p-8 shadow-2xl relative flex flex-col">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>Protocolo de Protección de Datos &amp; ZDR</span>
              </div>
              
              <button
                type="button"
                onClick={() => setIsPrivacyOpen(false)}
                className="text-slate-400 hover:text-white p-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 transition-colors cursor-pointer"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto mt-4 space-y-4 text-xs sm:text-sm text-slate-300 pr-2 font-sans">
              
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                <h4 className="font-bold text-white mb-1 flex items-center gap-2 font-mono text-xs text-emerald-400">
                  <Lock className="w-3.5 h-3.5" /> 1. Compromiso de Cero Retención de Datos (ZDR)
                </h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  En las soluciones de extracción documental asistidas por IA (Claude / OpenAI API) implementadas para nuestros clientes, se aplica estrictamente el protocolo <strong>Zero Data Retention (ZDR)</strong>. Los documentos comerciales, guías de despacho, facturas, montos y datos sensibles de clientes jamás se almacenan ni se utilizan para reentrenar modelos públicos de inteligencia artificial.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-1">2. Datos Recopilados en el Sitio Web</h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Al utilizar los botones de agendamiento o contacto en este sitio web (integrado con Cal.com), solo recopilamos datos básicos de contacto corporativo (Nombre, Correo Electrónico y el cuello de botella operativo descrito) con el único fin de coordinar la sesión de auditoría técnica solicitada.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-1">3. Confidencialidad Comercial</h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Cualquier información operacional, planos, catálogos de SKUs o reportes compartidos durante las auditorías de 20 minutos o en las fases de prototipo son tratados bajo estricto secreto comercial y no son divulgados a terceros bajo ninguna circunstancia.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-1">4. Seguridad de la Infraestructura</h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Las aplicaciones y bases de datos desarrolladas operan bajo altos estándares de cifrado en tránsito (HTTPS / TLS 1.3) y en reposo, garantizando el aislamiento absoluto de información entre distintos clientes corporativos.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800 flex items-center gap-2 text-slate-400 text-[11px] font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Cumplimiento B2B Estricto · Estándar de Seguridad Industrial</span>
              </div>

            </div>

            <div className="pt-4 mt-4 border-t border-slate-800 flex justify-end">
              <button
                type="button"
                onClick={() => setIsPrivacyOpen(false)}
                className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono text-xs font-bold transition-all cursor-pointer"
              >
                Entendido
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}