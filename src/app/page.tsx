import Link from "next/link";
import { ArrowRight, BarChart3, BookOpen, Brain, Globe, PenLine, Target, TrendingUp, Zap } from "lucide-react";

const features = [
  { icon: BarChart3, title: "AI Chart Analysis", desc: "Upload any chart screenshot or use live charts. AI identifies patterns, support/resistance, and optimal trade setups instantly.", color: "text-accent-blue", bg: "bg-accent-blue/10" },
  { icon: Target, title: "Entry & Exit Points", desc: "Get precise entry zones, stop-loss levels, and take-profit targets with clear explanations of why.", color: "text-brand", bg: "bg-brand-muted" },
  { icon: BookOpen, title: "19 Trading Strategies", desc: "From basic support/resistance to advanced Smart Money Concepts. Each strategy explained with real chart examples.", color: "text-accent-purple", bg: "bg-accent-purple/10" },
  { icon: Brain, title: "Quiz Mode", desc: "Test your pattern recognition skills. See a chart, identify the setup, place your trade. Get scored and improve over time.", color: "text-accent-amber", bg: "bg-accent-amber/10" },
  { icon: Globe, title: "All Markets", desc: "Crypto, stocks, forex — works with any chart. The patterns are universal, and so is Chart-Sensei.", color: "text-accent-teal", bg: "bg-accent-teal/10" },
  { icon: PenLine, title: "Trading Journal", desc: "Log your trades, track your progress, review past analyses. Build the discipline that separates pros from amateurs.", color: "text-accent-rose", bg: "bg-accent-rose/10" },
];

const stats = [
  { value: "19", label: "Trading Strategies" },
  { value: "24/7", label: "AI Analysis" },
  { value: "<10s", label: "Per Analysis" },
  { value: "All", label: "Markets Supported" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-surface-0">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-surface-1/80 backdrop-blur-xl border-b border-surface-4/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 py-4">
          <div className="text-xl font-extrabold text-white">
            Chart<span className="text-brand">-Sensei</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-text-muted hover:text-white transition">Features</a>
            <a href="#how-it-works" className="text-sm text-text-muted hover:text-white transition">How It Works</a>
            <a href="#pricing" className="text-sm text-text-muted hover:text-white transition">Pricing</a>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm text-text-secondary hover:text-white transition px-4 py-2">
              Log in
            </Link>
            <Link href="/login" className="text-sm font-semibold bg-brand text-surface-0 px-5 py-2.5 rounded-lg hover:bg-brand-light transition shadow-glow-sm">
              Start Free
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[100px]" />
          <div className="absolute top-40 right-1/4 w-[400px] h-[400px] bg-accent-blue/5 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(52,211,153,0.03)_0%,transparent_60%)]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20 lg:pt-32 lg:pb-28">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-surface-2 border border-surface-4 text-text-secondary px-4 py-2 rounded-full text-xs font-medium mb-8">
              <Zap className="w-3.5 h-3.5 text-brand" />
              AI-Powered Trading Education Platform
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              Learn to Read Charts
              <br />
              <span className="bg-gradient-to-r from-brand via-accent-teal to-accent-blue bg-clip-text text-transparent">
                Like a Pro Trader
              </span>
            </h1>
            
            <p className="text-base lg:text-lg text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
              Upload any chart. Get instant AI analysis with entry points, exit strategies,
              and pattern explanations. Master 19 trading strategies across crypto, stocks, and forex.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/login" className="group bg-brand text-surface-0 px-8 py-4 rounded-xl text-base font-bold hover:bg-brand-light transition shadow-glow flex items-center gap-2">
                Start Learning Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <a href="#how-it-works" className="flex items-center gap-2 text-text-secondary hover:text-white px-8 py-4 rounded-xl text-base font-medium border border-surface-4 hover:border-surface-5 transition">
                See How It Works
              </a>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((s, i) => (
              <div key={i} className="text-center px-4 py-3">
                <div className="text-2xl font-bold text-white">{s.value}</div>
                <div className="text-xs text-text-dim mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="border-y border-surface-4/50 bg-surface-1/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 flex items-center justify-center gap-12 flex-wrap">
          <span className="text-xs text-text-dim uppercase tracking-wider">Works with any chart from</span>
          <span className="text-text-dim font-semibold text-sm">TradingView</span>
          <span className="text-text-dim font-semibold text-sm">Binance</span>
          <span className="text-text-dim font-semibold text-sm">MetaTrader</span>
          <span className="text-text-dim font-semibold text-sm">Yahoo Finance</span>
          <span className="text-text-dim font-semibold text-sm">Coinbase</span>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-brand text-xs font-semibold uppercase tracking-wider mb-4">
              <span className="w-8 h-px bg-brand/50" />Features<span className="w-8 h-px bg-brand/50" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Everything You Need to Master Trading</h2>
            <p className="text-text-muted max-w-xl mx-auto">No fluff. Real chart analysis. Real strategies. Real improvement.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div
                key={i}
                className={`group bg-surface-2 border border-surface-4 rounded-2xl p-7 hover:border-surface-5 transition-all duration-300 hover:shadow-card ${i === 0 ? "glow-border" : ""}`}
              >
                <div className={`w-12 h-12 rounded-xl ${f.bg} flex items-center justify-center mb-5`}>
                  <f.icon className={`w-6 h-6 ${f.color}`} />
                </div>
                <h3 className="text-base font-semibold text-white mb-2 group-hover:text-brand transition">{f.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-surface-1/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-brand text-xs font-semibold uppercase tracking-wider mb-4">
              <span className="w-8 h-px bg-brand/50" />How It Works<span className="w-8 h-px bg-brand/50" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">From Beginner to Pro in 4 Steps</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Learn a Strategy", desc: "Start with the fundamentals. Each of 19 strategies comes with detailed explanations, rules, and real examples.", icon: BookOpen },
              { step: "02", title: "Test Your Knowledge", desc: "Take quizzes to test your pattern recognition. Get instant feedback and explanations on every answer.", icon: Brain },
              { step: "03", title: "Analyze Real Charts", desc: "Upload any chart screenshot. AI identifies the pattern, gives you entry/exit points, and explains why.", icon: BarChart3 },
              { step: "04", title: "Track & Improve", desc: "Log trades in your journal. Track win rate, review mistakes, and watch your skills improve over time.", icon: TrendingUp },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-surface-2 border border-surface-4 flex items-center justify-center mx-auto mb-4">
                  <s.icon className="w-6 h-6 text-brand" />
                </div>
                <div className="text-xs text-brand font-bold mb-2">STEP {s.step}</div>
                <h3 className="text-sm font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-xs text-text-muted leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-brand text-xs font-semibold uppercase tracking-wider mb-4">
              <span className="w-8 h-px bg-brand/50" />Pricing<span className="w-8 h-px bg-brand/50" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-text-muted">Start free. Upgrade when you are ready.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Free */}
            <div className="bg-surface-2 border border-surface-4 rounded-2xl p-8">
              <div className="text-sm font-semibold text-text-secondary mb-1">Free</div>
              <div className="text-4xl font-extrabold text-white mb-1">$0</div>
              <div className="text-sm text-text-dim mb-6">Get started with the basics</div>
              <ul className="space-y-3 mb-8">
                {["3 chart analyses per day", "4 basic strategies", "Live charts (TradingView)", "Community access"].map((f, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-text-secondary">
                    <span className="w-5 h-5 rounded-full bg-brand-muted flex items-center justify-center">
                      <svg className="w-3 h-3 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/login" className="block text-center w-full py-3 rounded-xl text-sm font-semibold bg-surface-3 text-white border border-surface-4 hover:border-surface-5 transition">
                Get Started
              </Link>
            </div>

            {/* Pro */}
            <div className="bg-surface-2 border border-brand/40 rounded-2xl p-8 relative glow-border shadow-glow">
              <div className="absolute -top-3 right-6 bg-brand text-surface-0 text-[11px] font-bold px-3 py-1 rounded-md">
                POPULAR
              </div>
              <div className="text-sm font-semibold text-brand mb-1">Pro</div>
              <div className="text-4xl font-extrabold text-white mb-1">
                $19<span className="text-base font-normal text-text-dim">/month</span>
              </div>
              <div className="text-sm text-text-dim mb-6">Unlock your full potential</div>
              <ul className="space-y-3 mb-8">
                {["Unlimited chart analyses", "All 19 strategies", "Quiz mode with real charts", "Trading journal", "All markets (Crypto, Stocks, Forex)", "Priority AI responses"].map((f, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-text-secondary">
                    <span className="w-5 h-5 rounded-full bg-brand-muted flex items-center justify-center">
                      <svg className="w-3 h-3 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/login" className="block text-center w-full py-3 rounded-xl text-sm font-bold bg-brand text-surface-0 hover:bg-brand-light transition shadow-glow-sm">
                Start Pro Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface-1/30">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Level Up Your Trading?</h2>
          <p className="text-text-muted mb-10 max-w-xl mx-auto">Join thousands of traders who use AI to learn faster, trade smarter, and build real skills.</p>
          <Link href="/login" className="inline-flex items-center gap-2 bg-brand text-surface-0 px-8 py-4 rounded-xl text-base font-bold hover:bg-brand-light transition shadow-glow">
            Get Started — It&apos;s Free <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-surface-4/50 bg-surface-1/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-lg font-extrabold text-white">
              Chart<span className="text-brand">-Sensei</span>
            </div>
            <div className="flex items-center gap-8">
              <a href="#features" className="text-sm text-text-dim hover:text-text-secondary transition">Features</a>
              <a href="#pricing" className="text-sm text-text-dim hover:text-text-secondary transition">Pricing</a>
              <a href="#" className="text-sm text-text-dim hover:text-text-secondary transition">Terms</a>
              <a href="#" className="text-sm text-text-dim hover:text-text-secondary transition">Privacy</a>
            </div>
            <div className="text-xs text-text-faint">&copy; 2026 Chart-Sensei</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
