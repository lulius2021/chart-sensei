import Link from "next/link";
import {
  Zap, BookOpen, Brain, FileText, LineChart, Target,
  ArrowRight, CheckCircle2, TrendingUp,
} from "lucide-react";

/* ─── Logo Component ─── */
function SenseiLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="32" height="32" rx="6" fill="#0f1221" />
      <ellipse cx="11" cy="10" rx="2.5" ry="1.5" fill="#34d399" />
      <ellipse cx="21" cy="10" rx="2.5" ry="1.5" fill="#34d399" />
      <ellipse cx="11" cy="10" rx="4" ry="3" fill="#34d399" opacity="0.15" />
      <ellipse cx="21" cy="10" rx="4" ry="3" fill="#34d399" opacity="0.15" />
      <rect x="7" y="17" width="3" height="8" rx="0.5" fill="#34d399" opacity="0.8" />
      <rect x="12" y="19" width="3" height="6" rx="0.5" fill="#fb7185" opacity="0.8" />
      <rect x="17" y="15" width="3" height="10" rx="0.5" fill="#34d399" opacity="0.8" />
      <rect x="22" y="18" width="3" height="7" rx="0.5" fill="#34d399" opacity="0.8" />
    </svg>
  );
}

/* ─── Data ─── */
const features = [
  {
    icon: Zap,
    title: "AI Chart Analysis",
    desc: "Upload any chart screenshot — get instant pattern recognition, precise entry/exit points, and risk management in seconds.",
  },
  {
    icon: BookOpen,
    title: "19 Trading Strategies",
    desc: "From Support & Resistance to Elliott Wave. Master every strategy with rules, examples, and common mistakes to avoid.",
  },
  {
    icon: Brain,
    title: "Interactive Quizzes",
    desc: "Test your pattern recognition. Track progress. Identify knowledge gaps before they cost you money.",
  },
  {
    icon: FileText,
    title: "Trading Journal",
    desc: "Log every trade. Track win rates. Analyze which strategies and pairs perform best for your style.",
  },
  {
    icon: LineChart,
    title: "Live Charts",
    desc: "Professional TradingView charts built in. Crypto, stocks, forex — analyze any market without switching apps.",
  },
  {
    icon: Target,
    title: "Entry & Exit Points",
    desc: "Every analysis includes entry zones, stop-loss levels, and multiple take-profit targets with risk/reward ratios.",
  },
];

const freeFeatures = ["3 chart analyses per day", "4 basic strategies", "Live TradingView charts", "Community access"];
const proFeatures = ["Unlimited chart analyses", "All 19 strategies", "Interactive quizzes", "Trading journal", "Priority AI processing", "Advanced pattern detection"];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-surface-0 text-text-primary selection:bg-brand/20 selection:text-white">
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-brand/[0.03] rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-4/50 to-transparent" />
        </div>

        {/* Logo + Brand */}
        <div className="relative mb-12 flex flex-col items-center">
          <div className="mb-6">
            <SenseiLogo className="w-16 h-16" />
          </div>
          <div className="inline-flex items-center gap-2 bg-brand/[0.06] border border-brand/[0.12] rounded-full px-5 py-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand shadow-[0_0_8px_#34d399]" />
            <span className="text-xs font-medium text-brand/80 tracking-wide">AI-Powered Trading Education</span>
          </div>
        </div>

        {/* Headline */}
        <div className="relative text-center max-w-4xl">
          <h1 className="text-5xl sm:text-6xl md:text-[5.5rem] font-extrabold text-white leading-[1.05] tracking-tight">
            Master the
            <br />
            <span className="text-brand">Art of Trading</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed font-light">
            Upload any chart. Get instant AI analysis with precise entry and exit points.
            Learn <em className="text-text-secondary not-italic">why</em> — not just what.
          </p>
        </div>

        {/* CTA */}
        <div className="relative mt-10 flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/login"
            className="group flex items-center gap-2.5 bg-brand text-surface-0 px-8 py-3.5 rounded-xl text-sm font-bold hover:bg-brand-light transition-all duration-200 shadow-[0_0_30px_rgba(52,211,153,0.15)]"
          >
            Start Learning Free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <a
            href="#features"
            className="text-sm text-text-dim hover:text-text-muted transition px-4 py-3"
          >
            See what&apos;s inside
          </a>
        </div>

        <p className="relative mt-4 text-xs text-text-faint">
          No credit card · 3 free analyses per day
        </p>

        {/* ─── Product Preview ─── */}
        <div className="relative mt-20 w-full max-w-6xl">
          {/* Fade out bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-surface-0 to-transparent z-10 pointer-events-none" />

          <div className="rounded-2xl border border-white/[0.06] overflow-hidden bg-surface-1 shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
            {/* Browser bar */}
            <div className="flex items-center gap-2 px-4 py-2.5 bg-surface-0/80 border-b border-white/[0.04]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/[0.06]" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/[0.06]" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/[0.06]" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-white/[0.04] rounded-md px-4 py-1 text-[11px] text-text-faint flex items-center gap-1.5">
                  <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 16 16"><path d="M8 1a7 7 0 11-5.83 10.89l-.03-.05A7 7 0 018 1zm0 1.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11z"/><path d="M8 4v4l3 1.5-.67 1.34L7 9V4h1z"/></svg>
                  chart-sensei.com
                </div>
              </div>
            </div>

            {/* App mock */}
            <div className="flex h-[480px]">
              {/* Sidebar */}
              <div className="w-52 bg-surface-0/60 border-r border-white/[0.04] p-4 hidden lg:flex flex-col">
                <div className="flex items-center gap-2.5 mb-8">
                  <SenseiLogo className="w-7 h-7" />
                  <span className="text-sm font-bold text-white">Chart-Sensei</span>
                </div>
                <nav className="space-y-0.5 flex-1">
                  {[
                    { label: "Dashboard", active: false },
                    { label: "Analyze", active: true },
                    { label: "Learn", active: false },
                    { label: "Quiz", active: false },
                    { label: "Journal", active: false },
                    { label: "Charts", active: false },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className={`px-3 py-2 rounded-lg text-[13px] ${
                        item.active
                          ? "bg-brand/[0.08] text-brand font-medium"
                          : "text-text-dim"
                      }`}
                    >
                      {item.label}
                    </div>
                  ))}
                </nav>
                <div className="mt-auto pt-4 border-t border-white/[0.04]">
                  <div className="flex items-center gap-2.5 px-2">
                    <div className="w-7 h-7 rounded-full bg-brand/10 flex items-center justify-center text-[11px] font-bold text-brand">T</div>
                    <div>
                      <div className="text-xs text-white font-medium">Trader</div>
                      <div className="text-[10px] text-text-faint">Free Plan</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main content */}
              <div className="flex-1 flex flex-col">
                {/* Toolbar */}
                <div className="flex items-center gap-2 px-4 py-2 border-b border-white/[0.04] bg-surface-0/40">
                  <span className="text-[11px] font-semibold text-white bg-white/[0.04] px-2.5 py-1 rounded flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                    BTC/USDT
                  </span>
                  {["15M", "1H", "4H", "1D"].map((tf) => (
                    <span
                      key={tf}
                      className={`px-2 py-1 text-[10px] font-medium rounded ${
                        tf === "4H" ? "bg-brand/[0.08] text-brand" : "text-text-faint"
                      }`}
                    >
                      {tf}
                    </span>
                  ))}
                  <span className="ml-auto bg-brand text-surface-0 px-3 py-1 rounded text-[10px] font-bold flex items-center gap-1">
                    <Zap className="w-3 h-3" /> Analyze
                  </span>
                </div>

                <div className="flex flex-1">
                  {/* Chart area */}
                  <div className="flex-1 p-5">
                    <div className="w-full h-full bg-surface-0/40 border border-white/[0.04] rounded-xl flex items-center justify-center">
                      {/* Mini candlestick chart */}
                      <div className="flex items-end gap-3 h-32">
                        {[
                          { h: 45, body: 25, y: 10, green: true },
                          { h: 55, body: 20, y: 5, green: false },
                          { h: 40, body: 22, y: 8, green: true },
                          { h: 60, body: 30, y: 0, green: true },
                          { h: 35, body: 18, y: 15, green: false },
                          { h: 50, body: 28, y: 3, green: true },
                          { h: 65, body: 35, y: 0, green: true },
                          { h: 45, body: 20, y: 8, green: false },
                          { h: 55, body: 30, y: 2, green: true },
                          { h: 70, body: 40, y: 0, green: true },
                        ].map((c, i) => (
                          <div key={i} className="flex flex-col items-center" style={{ height: `${c.h + c.y}px`, paddingTop: `${c.y}px` }}>
                            <div
                              className={`w-1 rounded-full ${c.green ? "bg-brand/30" : "bg-loss/30"}`}
                              style={{ height: `${(c.h - c.body) / 2}px` }}
                            />
                            <div
                              className={`w-3 rounded-sm ${c.green ? "bg-brand/60" : "bg-loss/60"}`}
                              style={{ height: `${c.body}px` }}
                            />
                            <div
                              className={`w-1 rounded-full ${c.green ? "bg-brand/30" : "bg-loss/30"}`}
                              style={{ height: `${(c.h - c.body) / 2}px` }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* AI Panel */}
                  <div className="w-64 border-l border-white/[0.04] bg-surface-0/30 p-4 hidden xl:block">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-2 h-2 rounded-full bg-brand shadow-[0_0_6px_#34d399]" />
                      <span className="text-[11px] font-semibold text-white">AI Analysis</span>
                      <span className="ml-auto text-[9px] text-brand font-medium">Complete</span>
                    </div>
                    <div className="space-y-1.5">
                      {[
                        { l: "Pattern", v: "Ascending Triangle", c: "text-white" },
                        { l: "Direction", v: "↑ Bullish", c: "text-profit" },
                        { l: "Entry", v: "$67,400 – $67,800", c: "text-profit" },
                        { l: "Stop Loss", v: "$65,200", c: "text-loss" },
                        { l: "TP1", v: "$71,500", c: "text-profit" },
                        { l: "R:R", v: "1:2.4", c: "text-warn" },
                        { l: "Confidence", v: "HIGH", c: "text-brand" },
                      ].map((row) => (
                        <div key={row.l} className="bg-white/[0.02] border border-white/[0.04] rounded-lg px-3 py-2 flex items-center justify-between">
                          <span className="text-[10px] text-text-faint">{row.l}</span>
                          <span className={`text-[11px] font-semibold ${row.c}`}>{row.v}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1">
                      {["Volume ✓", "Breakout", "Higher Lows"].map((s) => (
                        <span key={s} className="text-[9px] font-semibold bg-brand/[0.06] text-brand/70 px-2 py-0.5 rounded">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SOCIAL PROOF BAR ═══ */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-16 text-text-faint">
          {["Crypto", "Stocks", "Forex", "Commodities", "Indices"].map((m) => (
            <span key={m} className="text-[11px] font-semibold tracking-[0.15em] uppercase opacity-30 hidden sm:block">{m}</span>
          ))}
        </div>
      </section>

      {/* ═══ FEATURES — Bento Grid ═══ */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs font-medium text-brand/60 tracking-[0.2em] uppercase mb-4">Features</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              Everything you need to
              <br />
              <span className="text-text-muted">master the charts</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="group bg-white/[0.02] border border-white/[0.05] rounded-2xl p-7 hover:border-brand/[0.15] transition-all duration-300"
              >
                <f.icon className="w-5 h-5 text-brand/60 mb-5" />
                <h3 className="text-base font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-text-dim leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs font-medium text-brand/60 tracking-[0.2em] uppercase mb-4">How it works</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              From chart to clarity
              <br />
              <span className="text-text-muted">in four steps</span>
            </h2>
          </div>

          <div className="space-y-0">
            {[
              { n: "01", title: "Upload Your Chart", desc: "Screenshot from TradingView, Binance, or any platform. Drop it in." },
              { n: "02", title: "AI Detects Patterns", desc: "Our AI identifies formations, support/resistance levels, and key zones instantly." },
              { n: "03", title: "Get Your Trade Setup", desc: "Precise entry zone, stop-loss, take-profit targets, and risk/reward ratio." },
              { n: "04", title: "Learn the Why", desc: "Every analysis explains the reasoning. You don't just follow signals — you understand them." },
            ].map((step, i) => (
              <div key={step.n} className="flex gap-8 items-start py-8 border-b border-white/[0.04] last:border-0">
                <span className="text-3xl font-extrabold text-brand/[0.12] shrink-0 w-12">{step.n}</span>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{step.title}</h3>
                  <p className="text-sm text-text-dim leading-relaxed">{step.desc}</p>
                </div>
                {i < 3 && <ArrowRight className="w-4 h-4 text-white/[0.06] mt-1.5 shrink-0 hidden md:block" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STRATEGY SHOWCASE ═══ */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-medium text-brand/60 tracking-[0.2em] uppercase mb-4">Strategy Library</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
              19 proven strategies,
              <br />
              <span className="text-text-muted">explained in depth</span>
            </h2>
            <p className="text-text-dim mb-8 leading-relaxed">
              Each strategy includes detailed rules, entry/exit criteria, common mistakes, and real explanations.
              From beginner-friendly to advanced institutional methods.
            </p>
            <div className="space-y-3">
              {["Support & Resistance", "Fibonacci Retracement", "RSI Divergence", "Smart Money Concepts", "Elliott Wave Theory"].map((s) => (
                <div key={s} className="flex items-center gap-3">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand/50 shrink-0" />
                  <span className="text-sm text-text-muted">{s}</span>
                </div>
              ))}
              <p className="text-xs text-text-faint pt-1">+ 14 more in Pro</p>
            </div>
          </div>

          {/* Strategy card mock */}
          <div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-white/[0.04]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-brand/[0.06] flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-brand/60" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Fibonacci Retracement</h3>
                  <p className="text-[11px] text-text-faint">Advanced · Swing Trading</p>
                </div>
                <span className="ml-auto text-[9px] font-bold bg-brand/[0.08] text-brand/60 px-2.5 py-1 rounded-full tracking-wide">PRO</span>
              </div>
              <p className="text-sm text-text-dim leading-relaxed">
                Use Fibonacci levels to identify potential reversal zones and set precise entry points based on natural retracement levels.
              </p>
            </div>
            <div className="p-6 space-y-2.5">
              <p className="text-[10px] font-semibold text-text-faint uppercase tracking-wider mb-3">Key Levels</p>
              {[
                { level: "23.6%", desc: "Shallow — strong trend continuation" },
                { level: "38.2%", desc: "Common bounce zone" },
                { level: "61.8%", desc: "Golden ratio — strongest level" },
              ].map((l) => (
                <div key={l.level} className="flex items-center gap-3 bg-white/[0.02] border border-white/[0.04] rounded-lg px-3 py-2.5">
                  <span className="text-sm font-bold text-brand/70 w-12">{l.level}</span>
                  <span className="text-[11px] text-text-dim">{l.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ JOURNAL SHOWCASE ═══ */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Journal card mock */}
          <div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl overflow-hidden order-2 lg:order-1">
            <div className="px-6 py-4 border-b border-white/[0.04] flex items-center justify-between">
              <span className="text-sm font-semibold text-white">Trading Journal</span>
              <span className="text-[10px] bg-brand text-surface-0 px-3 py-1 rounded font-bold">+ New</span>
            </div>
            <div className="grid grid-cols-4 gap-2.5 p-4">
              {[
                { label: "Total", value: "47", c: "text-white" },
                { label: "Wins", value: "31", c: "text-profit" },
                { label: "Losses", value: "16", c: "text-loss" },
                { label: "Win Rate", value: "66%", c: "text-brand" },
              ].map((s) => (
                <div key={s.label} className="bg-white/[0.02] border border-white/[0.04] rounded-lg p-3 text-center">
                  <div className={`text-lg font-bold ${s.c}`}>{s.value}</div>
                  <div className="text-[9px] text-text-faint">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="px-4 pb-4 space-y-1.5">
              {[
                { pair: "BTC/USDT", dir: "LONG", result: "WIN", pnl: "+$420", rc: "text-profit", dc: "bg-brand/[0.08] text-brand" },
                { pair: "ETH/USDT", dir: "SHORT", result: "WIN", pnl: "+$185", rc: "text-profit", dc: "bg-loss/[0.08] text-loss" },
                { pair: "SOL/USDT", dir: "LONG", result: "LOSS", pnl: "-$90", rc: "text-loss", dc: "bg-brand/[0.08] text-brand" },
              ].map((t) => (
                <div key={t.pair + t.pnl} className="bg-white/[0.02] border border-white/[0.04] rounded-lg px-4 py-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded ${t.dc}`}>{t.dir}</span>
                    <span className="text-xs font-semibold text-white">{t.pair}</span>
                  </div>
                  <span className={`text-[11px] font-semibold ${t.rc}`}>{t.result} {t.pnl}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-xs font-medium text-brand/60 tracking-[0.2em] uppercase mb-4">Journal</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
              Track every trade,
              <br />
              <span className="text-text-muted">learn from every one</span>
            </h2>
            <p className="text-text-dim mb-8 leading-relaxed">
              The best traders keep detailed journals. Log entries, exits, strategies, and notes.
              Watch your win rate evolve and discover which setups work best for you.
            </p>
            <div className="space-y-3">
              {["Automatic win rate tracking", "Filter by strategy or pair", "P&L calculation", "Notes & lessons learned"].map((s) => (
                <div key={s} className="flex items-center gap-3">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand/50 shrink-0" />
                  <span className="text-sm text-text-muted">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PRICING ═══ */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs font-medium text-brand/60 tracking-[0.2em] uppercase mb-4">Pricing</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              Start free.
              <br />
              <span className="text-text-muted">Upgrade when ready.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {/* Free */}
            <div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-8">
              <p className="text-sm font-semibold text-white mb-1">Free</p>
              <p className="text-xs text-text-faint mb-6">Start with the basics</p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-extrabold text-white">$0</span>
                <span className="text-text-faint text-sm">/mo</span>
              </div>
              <Link
                href="/login"
                className="block w-full text-center bg-white/[0.04] border border-white/[0.06] text-white py-3 rounded-xl text-sm font-medium hover:bg-white/[0.06] transition mb-8"
              >
                Get Started
              </Link>
              <ul className="space-y-3">
                {freeFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-text-dim">
                    <CheckCircle2 className="w-3.5 h-3.5 text-text-faint/50 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pro */}
            <div className="bg-white/[0.02] border border-brand/[0.2] rounded-2xl p-8 relative shadow-[0_0_40px_rgba(52,211,153,0.04)]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-surface-0 text-[10px] font-bold px-4 py-1 rounded-full tracking-wide">
                POPULAR
              </div>
              <p className="text-sm font-semibold text-white mb-1">Pro</p>
              <p className="text-xs text-text-faint mb-6">Everything, unlimited</p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-extrabold text-white">$19</span>
                <span className="text-text-faint text-sm">/mo</span>
              </div>
              <Link
                href="/login"
                className="block w-full text-center bg-brand text-surface-0 py-3 rounded-xl text-sm font-bold hover:bg-brand-light transition shadow-[0_0_20px_rgba(52,211,153,0.1)] mb-8"
              >
                Start Pro
              </Link>
              <ul className="space-y-3">
                {proFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-text-dim">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand/50 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <SenseiLogo className="w-12 h-12 mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready to master the charts?
          </h2>
          <p className="text-text-dim mb-8">
            Join traders learning to read markets with AI-powered analysis.
          </p>
          <Link
            href="/login"
            className="group inline-flex items-center gap-2 bg-brand text-surface-0 px-8 py-3.5 rounded-xl text-sm font-bold hover:bg-brand-light transition shadow-[0_0_30px_rgba(52,211,153,0.15)]"
          >
            Start Free <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>

      {/* ═══ FOOTER — Legal only ═══ */}
      <footer className="border-t border-white/[0.04] py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <SenseiLogo className="w-5 h-5" />
            <span className="text-xs text-text-faint">© 2026 Chart-Sensei. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-text-faint hover:text-text-dim transition">Terms of Service</a>
            <a href="#" className="text-xs text-text-faint hover:text-text-dim transition">Privacy Policy</a>
            <a href="#" className="text-xs text-text-faint hover:text-text-dim transition">Imprint</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
