import { Headphones, Mic2, PhoneCall, Shield, Zap, Bot } from "lucide-react";

const features = [
  {
    icon: PhoneCall,
    title: "Instant phone integration",
    desc: "Connect numbers in minutes. Route or forward calls with flexible IVRs.",
  },
  { icon: Mic2, title: "Lifelike voices", desc: "Neural voices tuned for clarity, warmth, and brand tone." },
  { icon: Zap, title: "Real-time actions", desc: "Look up CRM data, schedule meetings, and trigger workflows." },
  { icon: Shield, title: "Security by default", desc: "Encryption in transit and at rest, plus granular access." },
  { icon: Headphones, title: "Hand-off to humans", desc: "Seamless transfer with context when agents are needed." },
  { icon: Bot, title: "Continuous learning", desc: "Retrain on transcripts and outcomes to improve accuracy." },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(400px_200px_at_20%_20%,rgba(139,92,246,0.12),transparent),radial-gradient(400px_200px_at_80%_60%,rgba(14,165,233,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Built for voice-first experiences</h2>
          <p className="mt-3 text-slate-300">Everything you need to launch and scale AI phone agents with confidence.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.05] transition">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-violet-500/30 to-amber-300/30 border border-white/10 grid place-items-center">
                <Icon className="h-5 w-5 text-violet-200" />
              </div>
              <h3 className="mt-4 text-white font-medium">{title}</h3>
              <p className="mt-2 text-sm text-slate-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
