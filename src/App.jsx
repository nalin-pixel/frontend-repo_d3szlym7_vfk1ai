import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* Subtle star field */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(2,6,23,0),rgba(2,6,23,1)),radial-gradient(800px_400px_at_10%_20%,rgba(59,130,246,0.06),transparent),radial-gradient(800px_400px_at_90%_60%,rgba(139,92,246,0.08),transparent)]" />

      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App
