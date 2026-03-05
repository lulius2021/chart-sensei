import Link from "next/link";
import {
  BarChart3, Brain, BookOpen, FileText, TrendingUp,
  Zap, Shield, ArrowRight, CheckCircle2, Star,
  ChevronRight, Sparkles, Target, LineChart
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "AI Chart Analysis",
    desc: "Upload any chart screenshot and get instant pattern recognition, entry/exit points, and risk management — powered by advanced AI.",
    color: "text-brand",
    bg: "bg-brand/10",
  },
  {
    icon: BookOpen,
    title: "19 Trading Strategies",
    desc: "From Support & Resistance to Elliott Wave — master every strategy with detailed guides, rules, and real examples.",
    color: "text-accent-blue",
    bg: "bg-accent-blue/10",
  },
  {
    icon: Brain,
    title: "Interactive Quizzes",
    desc: "Test your pattern recognition skills with AI-generated quizzes. Track your progress and identify knowledge gaps.",
    color: "text-accent-purple",
    bg: "bg-accent-purple/10",
  },
  {
    icon: FileText,
    title: "Trading Journal",
    desc: "Log every trade with entry, exit, strategy, and notes. Track your win rate and learn from your history.",
    color: "text-accent-amber",
    bg: "bg-accent-amber/10",
  },
  {
    icon: LineChart,
    title: "Live Charts",
    desc: "Professional TradingView charts built right in. Analyze any market — crypto, stocks, forex — without leaving the app.",
    color: "text-accent-teal",
    bg: "bg-accent-teal/10",
  },
  {
    icon: Target,
    title: "Entry & Exit Points",
    desc: "Get precise entry zones, stop-loss levels, and multiple take-profit targets with risk/reward ratios for every analysis.",
    color: "text-accent-rose",
    bg: "bg-accent-rose/10",
  },
];

const steps = [
  { step: "01", title: "Upload Your Chart", desc: "Take a screenshot from TradingView, Binance, or any platform." },
  { step: "02", title: "AI Analyzes Patterns", desc: "Our AI identifies patterns, support/resistance, and key levels." },
  { step: "03", title: "Get Trade Setup", desc: "Receive entry, stop-loss, take-profits, and a full explanation." },
  { step: "04", title: "Learn & Improve", desc: "Understand WHY — every analysis teaches you the strategy behind it." },
];

const testimonials = [
  { name: "Alex K.", role: "Crypto Trader", text: "Chart-Sensei helped me understand chart patterns I was missing for months. The AI explanations are incredible.", stars: 5 },
  { name: "Sarah M.", role: "Swing Trader", text: "The trading journal alone is worth it. Tracking my win rate helped me cut losing strategies fast.", stars: 5 },
  { name: "David R.", role: "Forex Beginner", text: "I went from not understanding candlesticks to confidently identifying double bottoms. Game changer.", stars: 5 },
];

const freeFeatures = ["3 chart analyses per day", "4 basic strategies", "Live TradingView charts", "Community access"];
const proFeatures = ["Unlimited chart analyses", "All 19 strategies", "Interactive quizzes", "Trading journal", "Priority AI processing", "Advanced pattern detection"];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-surface-0 text-text-primary overflow-x-hidden">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 border-b border-surface-4/50 bg-surface-0/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-extrabold text-white tracking-tight">
            Chart<span className="text-brand">-Sensei</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-text-muted hover:text-white transition">Features</a>
            <a href="#how-it-works" className="text-sm text-text-muted hover:text-white transition">How It Works</a>
            <a href="#pricing" className="text-sm text-text-muted hover:text-white transition">Pricing</a>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm text-text-muted hover:text-white transition px-4 py-2">
              Log in
            </Link>
            <Link href="/login" className="text-sm font-semibold bg-brand text-surface-0 px-5 py-2 rounded-lg hover:bg-brand-light transition">
              Get Started Free
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6">
        {/* Glow Effects */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-40 left-1/4 w-[300px] h-[300px] bg-accent-purple/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 rounded-full px-4 py-1.5 mb-8">
            <Sparkles className="w-3.5 h-3.5 text-brand" />
            <span className="text-xs font-medium text-brand">AI-Powered Trading Education</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
            Learn to trade with
            <br />
            <span className="text-brand">AI-powered</span> analysis
          </h1>

          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            Upload any chart screenshot and get instant pattern recognition, precise entry/exit points,
            and educational explanations that actually teach you <em>why</em>.
          </p>

          <div className="flex items-center justify-center gap-4 mb-6">
            <Link href="/login" className="group flex items-center gap-2 bg-brand text-surface-0 px-8 py-3.5 rounded-xl text-base font-bold hover:bg-brand-light transition shadow-glow">
              Start Free <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="#features" className="flex items-center gap-2 bg-surface-2 border border-surface-4 text-white px-8 py-3.5 rounded-xl text-base font-medium hover:border-surface-5 transition">
              See Features
            </a>
          </div>

          <p className="text-sm text-text-dim">No credit card required · 3 free analyses per day</p>
        </div>

        {/* App Screenshot - Hero */}
        <div className="max-w-6xl mx-auto mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-surface-0 via-transparent to-transparent z-10 pointer-events-none" />
          <div className="relative rounded-2xl border border-surface-4 overflow-hidden shadow-2xl shadow-black/50 bg-surface-1">
            {/* Browser Chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-surface-2 border-b border-surface-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-loss/60" />
                <div className="w-3 h-3 rounded-full bg-warn/60" />
                <div className="w-3 h-3 rounded-full bg-brand/60" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-surface-3 border border-surface-4 rounded-md px-4 py-1 text-xs text-text-dim flex items-center gap-2">
                  <Shield className="w-3 h-3" />
                  chart-sensei.com/analyze
                </div>
              </div>
            </div>
            {/* App Content Mock */}
            <div className="flex h-[520px]">
              {/* Sidebar */}
              <div className="w-56 bg-surface-1 border-r border-surface-4 p-4 hidden lg:block">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-brand/20 flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-brand" />
                  </div>
                  <span className="text-sm font-bold text-white">Chart-Sensei</span>
                </div>
                {[
                  { icon: BarChart3, label: "Dashboard", active: false },
                  { icon: Zap, label: "Analyze", active: true },
                  { icon: BookOpen, label: "Learn", active: false },
                  { icon: Brain, label: "Quiz", active: false },
                  { icon: FileText, label: "Journal", active: false },
                  { icon: LineChart, label: "Live Charts", active: false },
                ].map((item) => (
                  <div key={item.label} className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm mb-1 ${
                    item.active ? "bg-brand/10 text-brand font-semibold" : "text-text-dim hover:text-text-muted"
                  }`}>
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </div>
                ))}
              </div>

              {/* Main Area */}
              <div className="flex-1 flex flex-col">
                {/* Toolbar */}
                <div className="flex items-center gap-3 px-5 py-2.5 border-b border-surface-4 bg-surface-1/80">
                  <div className="flex items-center gap-1.5 bg-surface-3 border border-surface-4 rounded-md px-3 py-1.5 text-xs font-semibold text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                    BTC/USDT
                  </div>
                  {["1M", "5M", "15M", "1H", "4H", "1D"].map((tf) => (
                    <span key={tf} className={`px-2.5 py-1 text-[11px] font-medium rounded ${
                      tf === "4H" ? "bg-brand/10 text-brand border border-brand/30" : "bg-surface-3 border border-surface-4 text-text-dim"
                    }`}>
                      {tf}
                    </span>
                  ))}
                  <span className="ml-auto bg-brand text-surface-0 px-4 py-1.5 rounded-md text-xs font-bold flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" /> Analyze
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1">
                  {/* Chart placeholder */}
                  <div className="flex-1 p-6 flex items-center justify-center">
                    <div className="w-full h-full bg-surface-2 border border-surface-4 rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-3">📊</div>
                        <p className="text-sm text-text-muted">AI-Powered Chart Analysis</p>
                        <p className="text-xs text-text-dim mt-1">Upload → Analyze → Learn</p>
                      </div>
                    </div>
                  </div>

                  {/* AI Panel */}
                  <div className="w-72 border-l border-surface-4 bg-surface-1 p-4 hidden xl:block">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-2 h-2 rounded-full bg-brand shadow-[0_0_6px_#34d399]" />
                      <span className="text-xs font-semibold text-white">AI Analysis</span>
                      <span className="ml-auto text-[10px] text-brand">Complete</span>
                    </div>
                    {[
                      { label: "Pattern", value: "Ascending Triangle" },
                      { label: "Direction", value: "Bullish", color: "text-profit" },
                      { label: "Entry", value: "$67,400 – $67,800", color: "text-profit" },
                      { label: "Stop Loss", value: "$65,200", color: "text-loss" },
                      { label: "TP1", value: "$71,500", color: "text-profit" },
                      { label: "Risk/Reward", value: "1:2.4", color: "text-warn" },
                      { label: "Confidence", value: "HIGH", color: "text-brand" },
                    ].map((item) => (
                      <div key={item.label} className="bg-surface-2 border border-surface-4 rounded-lg px-3 py-2 flex items-center justify-between mb-1.5">
                        <span className="text-[11px] text-text-dim">{item.label}</span>
                        <span className={`text-[12px] font-semibold ${item.color || "text-white"}`}>{item.value}</span>
                      </div>
                    ))}
                    <div className="mt-3 bg-surface-2 border border-surface-4 rounded-lg p-3">
                      <div className="text-[10px] text-text-dim mb-2">Signals</div>
                      <div className="flex flex-wrap gap-1">
                        {["Volume Confirmed", "Clean Breakout", "Higher Lows"].map((s) => (
                          <span key={s} className="text-[10px] font-semibold bg-brand/10 text-brand px-2 py-0.5 rounded">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos / Social Proof */}
      <section className="py-12 px-6 border-y border-surface-4/50">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm text-text-dim mb-6">Trusted by traders analyzing charts across all markets</p>
          <div className="flex items-center justify-center gap-12 text-text-dim">
            {["Crypto", "Stocks", "Forex", "Commodities", "Indices"].map((m) => (
              <span key={m} className="text-sm font-semibold tracking-wide uppercase opacity-40">{m}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-brand uppercase tracking-widest">Features</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-3 mb-4">Everything you need to learn trading</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              AI analysis, education, journaling, and live charts — all in one platform designed to make you a better trader.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="group bg-surface-2 border border-surface-4 rounded-2xl p-6 hover:border-brand/30 transition-all duration-300">
                <div className={`w-10 h-10 rounded-xl ${f.bg} flex items-center justify-center mb-4`}>
                  <f.icon className={`w-5 h-5 ${f.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-brand transition">{f.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 bg-surface-1/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-brand uppercase tracking-widest">How it works</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-3 mb-4">Four steps to better trading</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.step} className="relative">
                <div className="bg-surface-2 border border-surface-4 rounded-2xl p-6 h-full">
                  <div className="text-3xl font-extrabold text-brand/20 mb-3">{s.step}</div>
                  <h3 className="text-base font-semibold text-white mb-2">{s.title}</h3>
                  <p className="text-sm text-text-muted">{s.desc}</p>
                </div>
                {i < 3 && (
                  <ChevronRight className="hidden lg:block absolute top-1/2 -right-4 w-5 h-5 text-surface-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Screenshots Section - Strategy Library */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-semibold text-brand uppercase tracking-widest">Strategy Library</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 mb-4">Master 19 proven strategies</h2>
              <p className="text-text-secondary mb-8 leading-relaxed">
                Each strategy comes with detailed explanations, entry/exit rules, common mistakes, and real-world examples.
                From beginner-friendly to advanced — there is a path for everyone.
              </p>
              <div className="space-y-3">
                {["Support & Resistance", "Fibonacci Retracement", "RSI Divergence", "Smart Money Concepts", "Elliott Wave Theory"].map((s) => (
                  <div key={s} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
                    <span className="text-sm text-text-secondary">{s}</span>
                  </div>
                ))}
                <p className="text-xs text-text-dim pt-2">+ 14 more strategies in Pro</p>
              </div>
            </div>

            {/* Strategy Card Mock */}
            <div className="bg-surface-2 border border-surface-4 rounded-2xl overflow-hidden shadow-card">
              <div className="p-6 border-b border-surface-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent-purple/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-accent-purple" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">Fibonacci Retracement</h3>
                    <p className="text-xs text-text-dim">Advanced · Swing Trading</p>
                  </div>
                  <span className="ml-auto text-[10px] font-semibold bg-brand/10 text-brand px-2.5 py-1 rounded-full">PRO</span>
                </div>
                <p className="text-sm text-text-muted leading-relaxed">
                  Use Fibonacci levels to identify potential reversal zones and set precise entry points based on natural retracement levels.
                </p>
              </div>
              <div className="p-6 space-y-3">
                <h4 className="text-xs font-semibold text-text-dim uppercase tracking-wider">Key Levels</h4>
                {[
                  { level: "23.6%", desc: "Shallow retracement — strong trend" },
                  { level: "38.2%", desc: "Common bounce zone" },
                  { level: "61.8%", desc: "Golden ratio — strongest level" },
                ].map((l) => (
                  <div key={l.level} className="flex items-center gap-3 bg-surface-3 border border-surface-4 rounded-lg px-3 py-2.5">
                    <span className="text-sm font-bold text-brand">{l.level}</span>
                    <span className="text-xs text-text-muted">{l.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journal Section */}
      <section className="py-24 px-6 bg-surface-1/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Journal Mock */}
            <div className="bg-surface-2 border border-surface-4 rounded-2xl overflow-hidden shadow-card order-2 lg:order-1">
              <div className="px-6 py-4 border-b border-surface-4 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-white">Trading Journal</h3>
                <span className="text-xs bg-brand text-surface-0 px-3 py-1 rounded-md font-semibold">+ New Entry</span>
              </div>
              <div className="grid grid-cols-4 gap-3 p-4">
                {[
                  { label: "Total", value: "47", color: "text-white" },
                  { label: "Wins", value: "31", color: "text-profit" },
                  { label: "Losses", value: "16", color: "text-loss" },
                  { label: "Win Rate", value: "66%", color: "text-brand" },
                ].map((s) => (
                  <div key={s.label} className="bg-surface-3 border border-surface-4 rounded-lg p-3 text-center">
                    <div className={`text-lg font-bold ${s.color}`}>{s.value}</div>
                    <div className="text-[10px] text-text-dim">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="px-4 pb-4 space-y-2">
                {[
                  { pair: "BTC/USDT", dir: "LONG", result: "WIN", pnl: "+$420", color: "text-profit", bg: "bg-brand/10 text-brand" },
                  { pair: "ETH/USDT", dir: "SHORT", result: "WIN", pnl: "+$185", color: "text-profit", bg: "bg-loss/10 text-loss" },
                  { pair: "SOL/USDT", dir: "LONG", result: "LOSS", pnl: "-$90", color: "text-loss", bg: "bg-brand/10 text-brand" },
                ].map((t) => (
                  <div key={t.pair + t.pnl} className="bg-surface-3 border border-surface-4 rounded-lg px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${t.bg}`}>{t.dir}</span>
                      <span className="text-sm font-semibold text-white">{t.pair}</span>
                    </div>
                    <span className={`text-xs font-semibold ${t.color}`}>{t.result} {t.pnl}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-xs font-semibold text-brand uppercase tracking-widest">Trading Journal</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 mb-4">Track every trade, learn from every mistake</h2>
              <p className="text-text-secondary mb-8 leading-relaxed">
                The best traders keep detailed journals. Log your entries, exits, strategies, and notes.
                Track your win rate over time and identify which strategies work best for you.
              </p>
              <div className="space-y-3">
                {["Automatic win rate calculation", "Filter by strategy, pair, or date", "P&L tracking", "Notes and lessons learned"].map((s) => (
                  <div key={s} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
                    <span className="text-sm text-text-secondary">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-brand uppercase tracking-widest">Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-3 mb-4">Loved by traders worldwide</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-surface-2 border border-surface-4 rounded-2xl p-6">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-warn fill-warn" />
                  ))}
                </div>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-text-dim">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-surface-1/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-brand uppercase tracking-widest">Pricing</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-3 mb-4">Start free, upgrade when ready</h2>
            <p className="text-text-secondary">No credit card required. Cancel anytime.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Free */}
            <div className="bg-surface-2 border border-surface-4 rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-white mb-1">Free</h3>
              <p className="text-sm text-text-dim mb-6">Get started with the basics</p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-extrabold text-white">$0</span>
                <span className="text-text-dim text-sm">/month</span>
              </div>
              <Link href="/login" className="block w-full text-center bg-surface-3 border border-surface-4 text-white py-3 rounded-xl text-sm font-semibold hover:border-surface-5 transition mb-8">
                Get Started
              </Link>
              <ul className="space-y-3">
                {freeFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-text-dim shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pro */}
            <div className="bg-surface-2 border-2 border-brand/40 rounded-2xl p-8 relative shadow-glow">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-surface-0 text-xs font-bold px-4 py-1 rounded-full">
                MOST POPULAR
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">Pro</h3>
              <p className="text-sm text-text-dim mb-6">Everything, unlimited</p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-extrabold text-white">$19</span>
                <span className="text-text-dim text-sm">/month</span>
              </div>
              <Link href="/login" className="block w-full text-center bg-brand text-surface-0 py-3 rounded-xl text-sm font-bold hover:bg-brand-light transition shadow-glow-sm mb-8">
                Start Pro Trial
              </Link>
              <ul className="space-y-3">
                {proFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-brand shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-brand/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Ready to level up your trading?</h2>
          <p className="text-text-secondary mb-8 text-lg">
            Join thousands of traders using AI to understand charts better. Start for free today.
          </p>
          <Link href="/login" className="group inline-flex items-center gap-2 bg-brand text-surface-0 px-10 py-4 rounded-xl text-lg font-bold hover:bg-brand-light transition shadow-glow">
            Get Started Free <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-surface-4 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-text-dim">
            <span className="font-bold text-white">Chart<span className="text-brand">-Sensei</span></span>
            {" "}· AI-Powered Trading Education
          </div>
          <div className="flex items-center gap-6 text-sm text-text-dim">
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
          <div className="text-xs text-text-faint">
            © 2026 Chart-Sensei. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
