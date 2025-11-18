export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(300px_160px_at_30%_60%,rgba(251,191,36,0.1),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Simple, usage-based pricing</h2>
          <p className="mt-3 text-slate-300">Pay for minutes you use. Scale from prototype to production without surprises.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-white font-medium">Starter</h3>
            <p className="mt-2 text-sm text-slate-400">For testing and small projects</p>
            <div className="mt-6 text-white text-3xl font-semibold">$0</div>
            <ul className="mt-6 space-y-2 text-sm text-slate-300">
              <li>1 number</li>
              <li>500 minutes/mo</li>
              <li>Email support</li>
            </ul>
            <button className="mt-6 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white">Get started</button>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-6 ring-1 ring-violet-500/30">
            <h3 className="text-white font-medium">Growth</h3>
            <p className="mt-2 text-sm text-slate-400">For teams scaling voice workflows</p>
            <div className="mt-6 text-white text-3xl font-semibold">$99</div>
            <ul className="mt-6 space-y-2 text-sm text-slate-300">
              <li>5 numbers</li>
              <li>5k minutes/mo</li>
              <li>Priority support</li>
            </ul>
            <button className="mt-6 w-full rounded-xl bg-white text-slate-900 font-semibold px-4 py-2">Start free trial</button>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-white font-medium">Enterprise</h3>
            <p className="mt-2 text-sm text-slate-400">For global operations and SLAs</p>
            <div className="mt-6 text-white text-3xl font-semibold">Custom</div>
            <ul className="mt-6 space-y-2 text-sm text-slate-300">
              <li>Unlimited numbers</li>
              <li>Custom minutes</li>
              <li>Dedicated CSM</li>
            </ul>
            <button className="mt-6 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white">Contact sales</button>
          </div>
        </div>
      </div>
    </section>
  );
}
