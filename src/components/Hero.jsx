import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[82vh] overflow-hidden">
      {/* Gradient auras */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.35),_transparent_60%)] blur-2xl" />
        <div className="absolute top-1/3 -left-24 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.25),_transparent_60%)] blur-2xl" />
        <div className="absolute bottom-10 -right-24 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(251,191,36,0.18),_transparent_60%)] blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="py-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
            <Sparkles className="h-3.5 w-3.5 text-violet-300" /> Introducing
          </span>
          <h1 className="mt-4 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            AI Voiced Agents for Modern Support
          </h1>
          <p className="mt-4 text-slate-300 text-lg leading-relaxed">
            Deploy autonomous, natural-sounding AI agents that answer calls, triage requests, and book appointments—24/7. Built for reliability, tuned for brand voice.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#pricing" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-amber-400 px-5 py-3 text-slate-900 font-semibold shadow-[0_10px_40px_-10px_rgba(139,92,246,0.6)]">
              Start free <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#features" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white">
              See features
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-slate-400">
            <span>GDPR-ready</span>
            <span className="h-1 w-1 rounded-full bg-slate-500" />
            <span>99.9% uptime</span>
            <span className="h-1 w-1 rounded-full bg-slate-500" />
            <span>Enterprise SSO</span>
          </div>
        </div>

        {/* Spline scene */}
        <div className="relative h-[520px] lg:h-[640px]">
          <div className="absolute inset-0 rounded-3xl overflow-hidden bg-slate-900/30 border border-white/10">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
