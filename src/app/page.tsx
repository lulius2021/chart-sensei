"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  Zap, BookOpen, Brain, FileText, LineChart, Target,
  ArrowRight, CheckCircle2,
} from "lucide-react";

/* ─── Logo ─── */
function SenseiLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="32" height="32" rx="6" fill="#111" />
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
  { icon: Zap, title: "AI Chart Analysis", desc: "Upload any chart — get instant pattern recognition, entry/exit points, and risk management." },
  { icon: BookOpen, title: "19 Strategies", desc: "From Support & Resistance to Elliott Wave. Detailed rules, examples, and mistakes to avoid." },
  { icon: Brain, title: "Quizzes", desc: "Test your pattern recognition. Track progress. Find gaps before they cost you." },
  { icon: FileText, title: "Trading Journal", desc: "Log trades. Track win rates. Analyze which strategies work best for you." },
  { icon: LineChart, title: "Live Charts", desc: "Professional TradingView charts. Crypto, stocks, forex — all in one place." },
  { icon: Target, title: "Entry & Exit", desc: "Every analysis: entry zones, stop-loss, take-profits, and risk/reward ratios." },
];

const freeFeatures = ["3 analyses per day", "4 basic strategies", "Live charts", "Community"];
const proFeatures = ["Unlimited analyses", "All 19 strategies", "Quizzes & journal", "Priority AI", "Advanced patterns", "Full access"];

/* ─── Scroll Animation Hook ─── */
function useScrollAnimations() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".fade-up, .fade-scale, .stagger").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}

/* ─── Parallax Hook ─── */
function useParallax() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const parallaxElements = ref.current.querySelectorAll(".sensei-parallax");
      parallaxElements.forEach((el) => {
        const rect = (el.parentElement as HTMLElement).getBoundingClientRect();
        const speed = parseFloat((el as HTMLElement).dataset.speed || "0.3");
        const yOffset = rect.top * speed;
        (el as HTMLElement).style.transform = `translateY(${yOffset}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return ref;
}

export default function LandingPage() {
  useScrollAnimations();
  const parallaxRef = useParallax();

  return (
    <div ref={parallaxRef} className="min-h-screen bg-black text-white selection:bg-brand/20">

      {/* ═══════════════════════════════════════════
          HERO — Fullscreen sensei background
      ═══════════════════════════════════════════ */}
      <section className="sensei-section min-h-screen flex flex-col items-center justify-center px-6">
        {/* Sensei: Sitting with green sword */}
        <div
          className="sensei-parallax opacity-40"
          data-speed="0.2"
          style={{ backgroundImage: "url(/sensei-hero.png)" }}
        />

        <div className="relative text-center max-w-4xl z-10">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <SenseiLogo className="w-14 h-14" />
          </div>

          <div className="fade-up inline-flex items-center gap-2 bg-brand/[0.08] border border-brand/[0.15] rounded-full px-5 py-2 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-brand shadow-[0_0_8px_#34d399]" />
            <span className="text-xs font-medium text-brand/80 tracking-wide">AI-Powered Trading Education</span>
          </div>

          <h1 className="fade-up text-5xl sm:text-6xl md:text-[5.5rem] font-black text-white leading-[1.05] tracking-tight mb-6">
            Master the
            <br />
            <span className="text-brand">Art of Trading</span>
          </h1>

          <p className="fade-up text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Upload any chart. Get instant AI analysis with precise entry and exit points.
            Learn <em className="text-neutral-300 not-italic">why</em> — not just what.
          </p>

          <div className="fade-up flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <Link
              href="/login"
              className="group flex items-center gap-2.5 bg-brand text-black px-8 py-3.5 rounded-xl text-sm font-bold hover:bg-brand-light transition-all shadow-[0_0_40px_rgba(52,211,153,0.2)]"
            >
              Start Learning Free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <a href="#features" className="text-sm text-neutral-500 hover:text-neutral-300 transition px-4 py-3">
              See what&apos;s inside
            </a>
          </div>
          <p className="fade-up text-xs text-neutral-600">No credit card · 3 free analyses per day</p>
        </div>
      </section>

      {/* ═══ FEATURES ═══ */}
      <section id="features" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 fade-up">
            <p className="text-xs font-medium text-brand/50 tracking-[0.2em] uppercase mb-4">Features</p>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
              Everything you need
              <br />
              <span className="text-neutral-500">to master the charts</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 stagger">
            {features.map((f) => (
              <div
                key={f.title}
                className="group bg-white/[0.03] border border-white/[0.06] rounded-2xl p-7 hover:border-brand/20 transition-all duration-300"
              >
                <f.icon className="w-5 h-5 text-brand/50 mb-5" />
                <h3 className="text-base font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SENSEI DUEL — Fullscreen parallax divider ═══ */}
      <section className="sensei-section h-[70vh] flex items-center justify-center">
        <div
          className="sensei-parallax opacity-50"
          data-speed="0.35"
          style={{ backgroundImage: "url(/sensei-duel.png)" }}
        />
        <div className="relative z-10 text-center fade-up">
          <p className="text-xs font-medium text-brand/50 tracking-[0.2em] uppercase mb-4">How it works</p>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            From chart to clarity
          </h2>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="stagger space-y-0">
            {[
              { n: "01", title: "Upload Your Chart", desc: "Screenshot from TradingView, Binance, or any platform." },
              { n: "02", title: "AI Detects Patterns", desc: "Identifies formations, support/resistance, and key zones instantly." },
              { n: "03", title: "Get Your Trade Setup", desc: "Entry zone, stop-loss, take-profits, and risk/reward ratio." },
              { n: "04", title: "Learn the Why", desc: "Every analysis explains the reasoning. You understand — not just follow." },
            ].map((step) => (
              <div key={step.n} className="flex gap-8 items-start py-8 border-b border-white/[0.06] last:border-0">
                <span className="text-3xl font-black text-brand/[0.15] shrink-0 w-12">{step.n}</span>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{step.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SENSEI ACTION — Fullscreen parallax ═══ */}
      <section className="sensei-section h-[80vh] flex items-center justify-center">
        <div
          className="sensei-parallax opacity-45"
          data-speed="0.4"
          style={{ backgroundImage: "url(/sensei-action.png)" }}
        />
        <div className="relative z-10 max-w-3xl text-center px-6 fade-up">
          <p className="text-xs font-medium text-brand/50 tracking-[0.2em] uppercase mb-4">Strategy Library</p>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            19 proven strategies,
            <br />
            <span className="text-neutral-500">explained in depth</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {["Support & Resistance", "Fibonacci", "RSI Divergence", "Smart Money", "Elliott Wave", "+14 more"].map((s) => (
              <span key={s} className="text-xs font-medium bg-white/[0.06] border border-white/[0.08] text-neutral-300 px-4 py-2 rounded-full">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ APP PREVIEW ═══ */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-up">
            <p className="text-xs font-medium text-brand/50 tracking-[0.2em] uppercase mb-4">The Platform</p>
            <h2 className="text-3xl md:text-5xl font-black text-white">
              Built for serious traders
            </h2>
          </div>

          {/* App Mock */}
          <div className="fade-scale rounded-2xl border border-white/[0.08] overflow-hidden bg-neutral-950 shadow-[0_30px_100px_rgba(0,0,0,0.8)]">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-black border-b border-white/[0.05]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-white/[0.05] rounded-md px-4 py-1 text-[11px] text-neutral-600">chart-sensei.com</div>
              </div>
            </div>
            <div className="flex h-[420px]">
              <div className="w-48 bg-black border-r border-white/[0.05] p-4 hidden lg:flex flex-col">
                <div className="flex items-center gap-2 mb-6">
                  <SenseiLogo className="w-6 h-6" />
                  <span className="text-xs font-bold text-white">Chart-Sensei</span>
                </div>
                {["Dashboard", "Analyze", "Learn", "Quiz", "Journal", "Charts"].map((item, i) => (
                  <div key={item} className={`px-3 py-2 rounded-lg text-[12px] mb-0.5 ${i === 1 ? "bg-brand/[0.1] text-brand font-medium" : "text-neutral-600"}`}>
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex-1 flex flex-col">
                <div className="flex items-center gap-2 px-4 py-2 border-b border-white/[0.05]">
                  <span className="text-[11px] font-semibold text-white bg-white/[0.05] px-2.5 py-1 rounded flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand" />BTC/USDT
                  </span>
                  {["1H", "4H", "1D"].map((tf) => (
                    <span key={tf} className={`px-2 py-1 text-[10px] rounded ${tf === "4H" ? "bg-brand/[0.1] text-brand" : "text-neutral-600"}`}>{tf}</span>
                  ))}
                  <span className="ml-auto bg-brand text-black px-3 py-1 rounded text-[10px] font-bold flex items-center gap-1">
                    <Zap className="w-3 h-3" /> Analyze
                  </span>
                </div>
                <div className="flex flex-1">
                  <div className="flex-1 p-4 flex items-center justify-center">
                    <div className="flex items-end gap-2 h-28">
                      {[40,30,45,55,35,50,65,42,58,70].map((h, i) => (
                        <div key={i} className={`w-2.5 rounded-sm ${i % 3 === 1 ? "bg-loss/40" : "bg-brand/40"}`} style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>
                  <div className="w-56 border-l border-white/[0.05] p-3 hidden xl:block">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2 h-2 rounded-full bg-brand shadow-[0_0_6px_#34d399]" />
                      <span className="text-[10px] font-semibold text-white">AI Analysis</span>
                    </div>
                    {[
                      { l: "Pattern", v: "Ascending Triangle" },
                      { l: "Direction", v: "↑ Bullish", c: "text-profit" },
                      { l: "Entry", v: "$67,400", c: "text-profit" },
                      { l: "Stop Loss", v: "$65,200", c: "text-loss" },
                      { l: "R:R", v: "1:2.4", c: "text-warn" },
                    ].map((r) => (
                      <div key={r.l} className="bg-white/[0.03] border border-white/[0.05] rounded px-2.5 py-1.5 flex items-center justify-between mb-1">
                        <span className="text-[9px] text-neutral-600">{r.l}</span>
                        <span className={`text-[10px] font-semibold ${r.c || "text-white"}`}>{r.v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SENSEI CLASH — Pricing divider ═══ */}
      <section className="sensei-section h-[60vh] flex items-center justify-center">
        <div
          className="sensei-parallax opacity-40"
          data-speed="0.3"
          style={{ backgroundImage: "url(/sensei-clash.png)" }}
        />
        <div className="relative z-10 text-center fade-up">
          <p className="text-xs font-medium text-brand/50 tracking-[0.2em] uppercase mb-4">Pricing</p>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            Start free.
            <br />
            <span className="text-neutral-500">Upgrade when ready.</span>
          </h2>
        </div>
      </section>

      {/* ═══ PRICING ═══ */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 stagger">
          {/* Free */}
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8">
            <p className="text-sm font-semibold text-white mb-1">Free</p>
            <p className="text-xs text-neutral-600 mb-6">Start with the basics</p>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-black text-white">$0</span>
              <span className="text-neutral-600 text-sm">/mo</span>
            </div>
            <Link href="/login" className="block w-full text-center bg-white/[0.05] border border-white/[0.08] text-white py-3 rounded-xl text-sm font-medium hover:bg-white/[0.08] transition mb-8">
              Get Started
            </Link>
            <ul className="space-y-3">
              {freeFeatures.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-neutral-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-neutral-700 shrink-0" />{f}
                </li>
              ))}
            </ul>
          </div>
          {/* Pro */}
          <div className="bg-white/[0.02] border border-brand/[0.25] rounded-2xl p-8 relative shadow-[0_0_50px_rgba(52,211,153,0.05)]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-black text-[10px] font-bold px-4 py-1 rounded-full tracking-wide">POPULAR</div>
            <p className="text-sm font-semibold text-white mb-1">Pro</p>
            <p className="text-xs text-neutral-600 mb-6">Everything, unlimited</p>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-black text-white">$19</span>
              <span className="text-neutral-600 text-sm">/mo</span>
            </div>
            <Link href="/login" className="block w-full text-center bg-brand text-black py-3 rounded-xl text-sm font-bold hover:bg-brand-light transition shadow-[0_0_25px_rgba(52,211,153,0.12)] mb-8">
              Start Pro
            </Link>
            <ul className="space-y-3">
              {proFeatures.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-neutral-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand/50 shrink-0" />{f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-2xl mx-auto fade-up">
          <SenseiLogo className="w-12 h-12 mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready to master the charts?
          </h2>
          <p className="text-neutral-500 mb-8">
            Join traders learning to read markets with AI.
          </p>
          <Link href="/login" className="group inline-flex items-center gap-2 bg-brand text-black px-8 py-3.5 rounded-xl text-sm font-bold hover:bg-brand-light transition shadow-[0_0_40px_rgba(52,211,153,0.2)]">
            Start Free <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="border-t border-white/[0.05] py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <SenseiLogo className="w-5 h-5" />
            <span className="text-xs text-neutral-600">© 2026 Chart-Sensei. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-neutral-600 hover:text-neutral-400 transition">Terms</a>
            <a href="#" className="text-xs text-neutral-600 hover:text-neutral-400 transition">Privacy</a>
            <a href="#" className="text-xs text-neutral-600 hover:text-neutral-400 transition">Imprint</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
