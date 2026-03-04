import Link from "next/link";
import { ArrowRight, BarChart3, BookOpen, Brain, Globe, PenLine, Target } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-surface-0">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 lg:px-16 py-5 border-b border-surface-4">
        <div className="text-xl font-extrabold text-white">
          Chart<span className="text-brand">-Sensei</span>
        </div>
        <div className="flex items-center gap-8">
          <a href="#features" className="text-sm text-text-muted hover:text-white transition">Features</a>
          <a href="#strategies" className="text-sm text-text-muted hover:text-white transition">Strategies</a>
          <a href="#pricing" className="text-sm text-text-muted hover:text-white transition">Pricing</a>
          <Link href="/login" className="text-sm text-white border border-surface-4 px-4 py-2 rounded-lg hover:border-text-dim transition">
            Log in
          </Link>
          <Link href="/login" className="text-sm font-semibold bg-brand text-surface-0 px-4 py-2 rounded-lg hover:bg-brand-light transition">
            Start Free
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative text-center pt-28 pb-20 px-8">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse,rgba(52,211,153,0.06)_0%,transparent_70%)] pointer-events-none" />
        <div className="inline-block bg-brand-muted border border-brand/20 text-brand px-4 py-1.5 rounded-full text-xs font-medium mb-6">
          AI-Powered Trading Education
        </div>
        <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
          Learn to Read Charts<br />
          Like a <span className="bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent">Pro Trader</span>
        </h1>
        <p className="text-lg text-text-muted max-w-xl mx-auto mb-10 leading-relaxed">
          Upload any chart. Get instant AI analysis with entry points, exit strategies,
          and pattern explanations. Your personal trading coach, 24/7.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/login" className="bg-brand text-surface-0 px-7 py-3.5 rounded-xl text-base font-bold hover:bg-brand-light transition flex items-center gap-2">
            Start Learning Free <ArrowRight className="w-4 h-4" />
          </Link>
          <a href="#features" className="border border-surface-4 text-white px-7 py-3.5 rounded-xl text-base font-medium hover:border-text-dim transition">
            See How It Works
          </a>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-8 lg:px-16 py-20">
        <h2 className="text-center text-3xl lg:text-4xl font-bold text-white mb-3">Everything You Need to Learn Trading</h2>
        <p className="text-center text-text-muted mb-14">No fluff. Real chart analysis. Real strategies. Real learning.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {[
            { icon: BarChart3, title: "AI Chart Analysis", desc: "Upload any chart screenshot or use live charts. AI identifies patterns, support/resistance, and optimal trade setups instantly." },
            { icon: Target, title: "Entry & Exit Points", desc: "Get precise entry zones, stop-loss levels, and take-profit targets with clear explanations of why." },
            { icon: BookOpen, title: "19 Strategies", desc: "From basic support/resistance to advanced Smart Money Concepts. Each strategy explained with real chart examples." },
            { icon: Brain, title: "Quiz Mode", desc: "Test your pattern recognition. See a chart, identify the setup, place your trade. Get scored and improve." },
            { icon: Globe, title: "All Markets", desc: "Crypto, stocks, forex — works with any chart. The patterns are universal, and so is Chart-Sensei." },
            { icon: PenLine, title: "Trading Journal", desc: "Log your trades, track your progress, review past analyses. Build discipline and consistency." },
          ].map((f, i) => (
            <div key={i} className="bg-surface-2 border border-surface-4 rounded-2xl p-7 hover:border-brand/20 transition">
              <f.icon className="w-7 h-7 text-brand mb-4" />
              <h3 className="text-base font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-8 lg:px-16 py-20">
        <h2 className="text-center text-3xl lg:text-4xl font-bold text-white mb-14">Simple Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Free */}
          <div className="bg-surface-2 border border-surface-4 rounded-2xl p-8">
            <div className="text-lg font-semibold text-white mb-2">Free</div>
            <div className="text-4xl font-extrabold text-white mb-1">$0</div>
            <div className="text-sm text-text-muted mb-6">Get started with the basics</div>
            <ul className="space-y-2 mb-8">
              {["3 chart analyses per day", "4 basic strategies", "Live charts", "Community access"].map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-text-secondary">
                  <span className="text-brand font-bold">✓</span> {f}
                </li>
              ))}
            </ul>
            <Link href="/login" className="block text-center w-full py-3 rounded-xl text-sm font-semibold bg-surface-3 text-white border border-surface-4 hover:border-text-dim transition">
              Get Started
            </Link>
          </div>
          {/* Pro */}
          <div className="bg-surface-2 border border-brand rounded-2xl p-8 relative">
            <div className="absolute -top-3 right-5 bg-brand text-surface-0 text-xs font-bold px-3 py-1 rounded">POPULAR</div>
            <div className="text-lg font-semibold text-white mb-2">Pro</div>
            <div className="text-4xl font-extrabold text-white mb-1">$19<span className="text-base font-normal text-text-muted">/month</span></div>
            <div className="text-sm text-text-muted mb-6">Unlock your full potential</div>
            <ul className="space-y-2 mb-8">
              {["Unlimited chart analyses", "All 19 strategies", "Quiz mode", "Trading journal", "All markets (Crypto, Stocks, Forex)", "Priority AI responses"].map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-text-secondary">
                  <span className="text-brand font-bold">✓</span> {f}
                </li>
              ))}
            </ul>
            <Link href="/login" className="block text-center w-full py-3 rounded-xl text-sm font-bold bg-brand text-surface-0 hover:bg-brand-light transition">
              Start Pro Trial
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-surface-4 py-10 text-center text-text-faint text-sm">
        &copy; 2026 Chart-Sensei. Learn smarter, trade better.
      </footer>
    </div>
  );
}
