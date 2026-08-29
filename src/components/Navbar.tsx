import { Terminal } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/80 bg-zinc-950/70 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-2 text-zinc-100 font-semibold tracking-tight hover:text-emerald-400 transition-colors">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <Terminal className="w-4 h-4" />
          </div>
          <span className="text-sm font-mono tracking-wider">OPS // AI</span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
          <a href="#case-study" className="hover:text-zinc-100 transition-colors">
            Case Study
          </a>
          <a href="#services" className="hover:text-zinc-100 transition-colors">
            Services
          </a>
          <a href="#why-me" className="hover:text-zinc-100 transition-colors">
            About
          </a>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="text-xs sm:text-sm font-medium px-4 py-2 rounded-lg bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-colors font-mono"
          >
            Audit Workflow
          </a>
        </div>
      </div>
    </header>
  );
}