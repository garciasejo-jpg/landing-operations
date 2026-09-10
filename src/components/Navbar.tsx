'use client';

import React, { useState } from 'react';
import { Terminal, Menu, X, ArrowRight, Calendar } from 'lucide-react';

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: 'Fricción Operativa', href: '#problem' },
  { label: 'Caso Chilemat Quillota', href: '#case-study' },
  { label: 'Sobre Mí', href: '#about' },
  { label: 'Servicios', href: '#services' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Función de desplazamiento suave universal para los enlaces del menú
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    closeMobileMenu();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[#090D14]/85 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Identidad de Marca */}
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 group focus:outline-none cursor-pointer"
          aria-label="José Miguel García - Inicio"
        >
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 p-[1px] shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/35 transition-all">
            <div className="h-full w-full bg-[#090D14] rounded-[11px] flex items-center justify-center">
              <Terminal className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold tracking-tight text-white font-mono text-sm sm:text-base">
                JOSÉ MIGUEL GARCÍA
              </span>
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Ingeniero Industrial &amp; Máster en IA
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono tracking-wide">
              OPERACIONES &amp; AUTOMATIZACIÓN CON IA
            </p>
          </div>
        </a>

        {/* Navegación Desktop */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-medium text-slate-300">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="hover:text-emerald-400 transition-colors py-1 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Unificado y Botón Móvil */}
        <div className="flex items-center gap-3">
          <a
            href="#final-cta"
            onClick={(e) => handleScrollTo(e, '#final-cta')}
            className="relative group overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-emerald-400/50 cursor-pointer"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 group-hover:opacity-100 transition-opacity"></span>
            <span className="relative block px-3.5 sm:px-4 py-2 rounded-[7px] bg-slate-950 font-mono text-xs font-semibold text-emerald-300 group-hover:bg-opacity-80 transition-all flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Agendar Auditoría (20 Min)</span>
            </span>
          </a>

          {/* Menú Hamburguesa */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 border border-slate-800 transition-colors focus:outline-none"
            aria-label="Abrir menú de navegación"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 text-slate-200" /> : <Menu className="w-5 h-5 text-slate-200" />}
          </button>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-[#090D14]/95 backdrop-blur-lg px-4 py-4 space-y-2">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-slate-900/80 border border-slate-800 text-[11px] font-mono text-emerald-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>Ingeniero Industrial · Máster en IA Generativa</span>
          </div>

          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="block px-3 py-2 text-sm text-slate-300 hover:text-emerald-400 hover:bg-slate-900/60 rounded-lg transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}

          <div className="pt-2 border-t border-slate-800">
            <a
              href="#final-cta"
              onClick={(e) => handleScrollTo(e, '#final-cta')}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-500 text-slate-950 font-mono text-xs font-bold transition-all shadow-md shadow-emerald-500/20 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Auditoría Gratuita (20 Min)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}