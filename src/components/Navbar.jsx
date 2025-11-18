import { Menu, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative z-20">
      <div className="fixed top-0 inset-x-0 backdrop-blur-xl bg-slate-900/60 border-b border-white/10">
        <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400 shadow-[0_0_40px_rgba(139,92,246,0.5)] grid place-items-center">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-white font-semibold tracking-tight text-lg">AURAVOX</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-slate-300 hover:text-white transition">Features</a>
            <a href="#pricing" className="text-slate-300 hover:text-white transition">Pricing</a>
            <a href="#docs" className="text-slate-300 hover:text-white transition">Docs</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 rounded-lg text-slate-300 hover:text-white transition">Sign in</button>
            <button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white border border-white/10 transition">Get Access</button>
          </div>

          <button className="md:hidden text-slate-200" onClick={() => setOpen(v => !v)} aria-label="Toggle Menu">
            <Menu className="h-6 w-6" />
          </button>
        </nav>
        {open && (
          <div className="md:hidden px-6 pb-4 space-y-2">
            <a href="#features" className="block text-slate-300 hover:text-white">Features</a>
            <a href="#pricing" className="block text-slate-300 hover:text-white">Pricing</a>
            <a href="#docs" className="block text-slate-300 hover:text-white">Docs</a>
            <div className="pt-2 flex gap-2">
              <button className="flex-1 px-4 py-2 rounded-lg text-slate-300 hover:text-white transition border border-white/10">Sign in</button>
              <button className="flex-1 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white border border-white/10 transition">Get Access</button>
            </div>
          </div>
        )}
      </div>
      {/* Placeholder to offset the fixed nav height */}
      <div className="h-20" />
    </header>
  );
}
