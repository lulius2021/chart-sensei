"use client";

import Link from "next/link";
import { useEffect, useRef, useCallback } from "react";
import { Zap, BookOpen, Brain, FileText, LineChart, Target, ArrowRight, CheckCircle2 } from "lucide-react";

/* ─── Logo ─── */
function Logo({ className = "w-10 h-10" }: { className?: string }) {
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

/* ─── Floating Particles ─── */
function Particles({ count = 20 }: { count?: number }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[3]">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${3 + Math.random() * 5}px`,
            height: `${3 + Math.random() * 5}px`,
            animationDuration: `${8 + Math.random() * 12}s`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ─── Data ─── */
const features = [
  { icon: Zap, title: "AI Chart Analysis", desc: "Upload any chart — instant pattern recognition, entry/exit points, risk management." },
  { icon: BookOpen, title: "19 Strategies", desc: "Support & Resistance to Elliott Wave. Rules, examples, mistakes." },
  { icon: Brain, title: "Quizzes", desc: "Test pattern recognition. Track progress. Find gaps." },
  { icon: FileText, title: "Trading Journal", desc: "Log trades. Track win rates. Find what works." },
  { icon: LineChart, title: "Live Charts", desc: "TradingView charts. Crypto, stocks, forex. All here." },
  { icon: Target, title: "Entry & Exit", desc: "Entry zones, stop-loss, take-profits, R:R ratios." },
];

const freeF = ["3 analyses/day", "4 strategies", "Live charts", "Community"];
const proF = ["Unlimited analyses", "All 19 strategies", "Quizzes & journal", "Priority AI", "Advanced patterns", "Full access"];

/* ─── Hooks ─── */
function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("vis"); });
    }, { threshold: 0.05, rootMargin: "0px 0px -30px 0px" });
    document.querySelectorAll(".reveal,.reveal-scale,.reveal-left,.reveal-right").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function useParallax() {
  const ref = useRef<HTMLDivElement>(null);
  const handleScroll = useCallback(() => {
    if (!ref.current) return;
    ref.current.querySelectorAll(".sensei-parallax").forEach((el) => {
      const rect = (el.parentElement as HTMLElement).getBoundingClientRect();
      const speed = parseFloat((el as HTMLElement).dataset.speed || "0.3");
      (el as HTMLElement).style.transform = `translateY(${rect.top * speed}px) scale(1.1)`;
    });
    // Sensei characters: slight parallax too
    ref.current.querySelectorAll(".sensei-char").forEach((el) => {
      const rect = (el.parentElement as HTMLElement).getBoundingClientRect();
      const speed = parseFloat((el as HTMLElement).dataset.speed || "0.15");
      (el as HTMLElement).style.transform += ` translateY(${rect.top * speed}px)`;
    });
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
  return ref;
}

export default function LandingPage() {
  useReveal();
  const pRef = useParallax();

  return (
    <div ref={pRef} className="min-h-screen bg-black text-white selection:bg-brand/20">

      {/* ═══ HERO ═══ */}
      <section className="sensei-section min-h-screen flex flex-col items-center justify-center px-6">
        {/* BG: Light pillar */}
        <div className="sensei-parallax opacity-60" data-speed="0.15" style={{ backgroundImage: "url(/bg-pillar1.png)" }} />
        {/* Sensei: Green — LARGE, pushed to bottom half, behind text */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sensei-green.png" alt="" data-speed="0.08"
          className="sensei-char glow-pulse bottom-[-15%] left-1/2 w-[100vw] max-w-[1200px] z-[1]"
          style={{ transform: "translateX(-50%)", maskImage: "linear-gradient(to top, black 30%, transparent 70%), linear-gradient(to bottom, transparent 0%, black 30%)", WebkitMaskImage: "linear-gradient(to top, black 30%, transparent 70%)" }}
          draggable={false} />
        <Particles count={25} />

        <div className="relative z-20 text-center max-w-4xl">
          <div className="mb-6 flex justify-center"><Logo className="w-14 h-14" /></div>

          <div className="reveal inline-flex items-center gap-2 bg-brand/[0.08] border border-brand/[0.15] rounded-full px-5 py-2 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-brand shadow-[0_0_8px_#34d399] animate-pulse" />
            <span className="text-xs font-medium text-brand/80 tracking-wide">AI-Powered Trading Education</span>
          </div>

          <h1 className="reveal text-5xl sm:text-7xl md:text-[6rem] font-black text-white leading-[1] tracking-tight mb-6">
            Master the
            <br />
            <span className="text-gradient">Art of Trading</span>
          </h1>

          <p className="reveal text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Upload any chart. Get instant AI analysis with precise entry and exit points.
            Learn <em className="text-white not-italic font-medium">why</em> — not just what.
          </p>

          <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <Link href="/login"
              className="group flex items-center gap-2.5 bg-brand text-black px-10 py-4 rounded-xl text-base font-bold hover:bg-brand-light transition-all shadow-[0_0_60px_rgba(52,211,153,0.25)] hover:shadow-[0_0_80px_rgba(52,211,153,0.4)]">
              Start Learning Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="#features" className="text-sm text-neutral-500 hover:text-neutral-300 transition px-6 py-4">
              See what&apos;s inside ↓
            </a>
          </div>
          <p className="reveal text-xs text-neutral-700">No credit card · 3 free analyses per day</p>
        </div>
      </section>

      {/* ═══ Glow divider ═══ */}
      <div className="glow-line w-full" />

      {/* ═══ FEATURES ═══ */}
      <section id="features" className="py-32 px-6 relative">
        <Particles count={10} />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <p className="reveal text-xs font-medium text-brand/50 tracking-[0.25em] uppercase mb-4">Features</p>
            <h2 className="reveal text-4xl md:text-6xl font-black text-white leading-tight">
              Everything you need
              <br />
              <span className="text-neutral-600">to master the charts</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <div key={f.title} className="reveal group bg-white/[0.02] border border-white/[0.06] rounded-2xl p-7 hover:border-brand/30 hover:bg-brand/[0.03] transition-all duration-500 hover:shadow-[0_0_30px_rgba(52,211,153,0.05)]" data-delay={i}>
                <div className="w-10 h-10 rounded-xl bg-brand/[0.08] flex items-center justify-center mb-5 group-hover:bg-brand/[0.15] transition">
                  <f.icon className="w-5 h-5 text-brand/70" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2 group-hover:text-brand transition">{f.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TORII GATE — Big parallax divider ═══ */}
      <section className="sensei-section h-[80vh] flex items-center justify-center">
        <div className="sensei-parallax opacity-70" data-speed="0.25" style={{ backgroundImage: "url(/bg-torii.png)" }} />
        <Particles count={15} />
        <div className="relative z-10 text-center">
          <p className="reveal text-xs font-medium text-brand/50 tracking-[0.25em] uppercase mb-4">The Path</p>
          <h2 className="reveal text-4xl md:text-6xl font-black text-white">
            From chart to <span className="text-gradient">clarity</span>
          </h2>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          {[
            { n: "01", title: "Upload Your Chart", desc: "Screenshot from TradingView, Binance, or any platform." },
            { n: "02", title: "AI Detects Patterns", desc: "Formations, support/resistance, key zones — instantly." },
            { n: "03", title: "Get Your Trade Setup", desc: "Entry, stop-loss, take-profits, risk/reward." },
            { n: "04", title: "Learn the Why", desc: "Every analysis explains the reasoning. You understand — not just follow." },
          ].map((step, i) => (
            <div key={step.n} className="reveal flex gap-8 items-start py-8 border-b border-white/[0.06] last:border-0" data-delay={i}>
              <span className="text-4xl font-black text-brand/20 shrink-0 w-16">{step.n}</span>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{step.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ SENSEI RED — Big action section ═══ */}
      <section className="sensei-section h-[90vh] flex items-center justify-center">
        <div className="sensei-parallax opacity-55" data-speed="0.3" style={{ backgroundImage: "url(/bg-pillar2.png)" }} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sensei-red.png" alt="" data-speed="0.1"
          className="sensei-char glow-pulse bottom-[-10%] left-[-5%] w-[90vw] max-w-[1000px] z-[1]"
          style={{ maskImage: "linear-gradient(to top, black 20%, transparent 65%)", WebkitMaskImage: "linear-gradient(to top, black 20%, transparent 65%)" }}
          draggable={false} />
        <Particles count={15} />

        <div className="relative z-20 text-center max-w-3xl px-6">
          <p className="reveal text-xs font-medium text-brand/50 tracking-[0.25em] uppercase mb-4">Strategy Library</p>
          <h2 className="reveal text-4xl md:text-6xl font-black text-white mb-8">
            19 proven strategies
          </h2>
          <div className="reveal flex flex-wrap justify-center gap-3">
            {["Support & Resistance", "Fibonacci", "RSI Divergence", "MACD", "Smart Money", "Elliott Wave", "Bollinger Bands", "+12 more"].map((s) => (
              <span key={s} className="text-xs font-medium bg-white/[0.06] border border-white/[0.1] text-neutral-300 px-4 py-2.5 rounded-full hover:border-brand/30 hover:text-brand transition cursor-default">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-line w-full" />

      {/* ═══ APP PREVIEW ═══ */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="reveal text-xs font-medium text-brand/50 tracking-[0.25em] uppercase mb-4">The Platform</p>
            <h2 className="reveal text-4xl md:text-6xl font-black text-white">
              Built for <span className="text-gradient">serious</span> traders
            </h2>
          </div>

          <div className="reveal-scale rounded-2xl border border-white/[0.08] overflow-hidden bg-neutral-950 shadow-[0_30px_100px_rgba(0,0,0,0.8)]">
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
                <div className="flex items-center gap-2 mb-6"><Logo className="w-6 h-6" /><span className="text-xs font-bold text-white">Chart-Sensei</span></div>
                {["Dashboard", "Analyze", "Learn", "Quiz", "Journal", "Charts"].map((item, i) => (
                  <div key={item} className={`px-3 py-2 rounded-lg text-[12px] mb-0.5 ${i === 1 ? "bg-brand/[0.1] text-brand font-medium" : "text-neutral-600"}`}>{item}</div>
                ))}
              </div>
              <div className="flex-1 flex flex-col">
                <div className="flex items-center gap-2 px-4 py-2 border-b border-white/[0.05]">
                  <span className="text-[11px] font-semibold text-white bg-white/[0.05] px-2.5 py-1 rounded flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />BTC/USDT
                  </span>
                  {["1H", "4H", "1D"].map((tf) => (
                    <span key={tf} className={`px-2 py-1 text-[10px] rounded ${tf === "4H" ? "bg-brand/[0.1] text-brand" : "text-neutral-600"}`}>{tf}</span>
                  ))}
                  <span className="ml-auto bg-brand text-black px-3 py-1 rounded text-[10px] font-bold flex items-center gap-1"><Zap className="w-3 h-3" /> Analyze</span>
                </div>
                <div className="flex flex-1">
                  <div className="flex-1 p-4 flex items-center justify-center">
                    <div className="flex items-end gap-2 h-28">
                      {[40,30,45,55,35,50,65,42,58,70,48,60].map((h, i) => (
                        <div key={i} className={`w-2.5 rounded-sm transition-all duration-500 ${i % 3 === 1 ? "bg-loss/40" : "bg-brand/40"}`} style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>
                  <div className="w-56 border-l border-white/[0.05] p-3 hidden xl:block">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2 h-2 rounded-full bg-brand shadow-[0_0_6px_#34d399] animate-pulse" />
                      <span className="text-[10px] font-semibold text-white">AI Analysis</span>
                    </div>
                    {[
                      { l: "Pattern", v: "Ascending Triangle" },
                      { l: "Direction", v: "↑ Bullish", c: "text-profit" },
                      { l: "Entry", v: "$67,400", c: "text-profit" },
                      { l: "Stop Loss", v: "$65,200", c: "text-loss" },
                      { l: "TP1", v: "$71,500", c: "text-profit" },
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

      {/* ═══ PRICING — with sensei hero bg ═══ */}
      <section className="sensei-section py-32 px-6">
        <div className="sensei-parallax opacity-25" data-speed="0.2" style={{ backgroundImage: "url(/bg-pillar1.png)" }} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/sensei-hero.png" alt="" data-speed="0.08"
          className="sensei-char bottom-0 right-[-10%] w-[60vw] max-w-[700px] opacity-40"
          style={{ maskImage: "radial-gradient(ellipse at center bottom, black 20%, transparent 65%)", WebkitMaskImage: "radial-gradient(ellipse at center bottom, black 20%, transparent 65%)" }}
          draggable={false} />
        <Particles count={10} />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="reveal text-xs font-medium text-brand/50 tracking-[0.25em] uppercase mb-4">Pricing</p>
            <h2 className="reveal text-4xl md:text-6xl font-black text-white">
              Start free. <span className="text-neutral-600">Upgrade when ready.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            <div className="reveal bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 hover:border-white/[0.12] transition-all duration-500">
              <p className="text-sm font-semibold text-white mb-1">Free</p>
              <p className="text-xs text-neutral-600 mb-6">The basics</p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-black text-white">$0</span>
                <span className="text-neutral-600 text-sm">/mo</span>
              </div>
              <Link href="/login" className="block w-full text-center bg-white/[0.05] border border-white/[0.08] text-white py-3.5 rounded-xl text-sm font-medium hover:bg-white/[0.1] transition mb-8">
                Get Started
              </Link>
              <ul className="space-y-3">
                {freeF.map((f) => (<li key={f} className="flex items-center gap-3 text-sm text-neutral-500"><CheckCircle2 className="w-3.5 h-3.5 text-neutral-700 shrink-0" />{f}</li>))}
              </ul>
            </div>
            <div className="reveal bg-white/[0.02] border border-brand/[0.3] rounded-2xl p-8 relative shadow-[0_0_60px_rgba(52,211,153,0.06)] hover:shadow-[0_0_80px_rgba(52,211,153,0.1)] transition-all duration-500" data-delay="1">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-black text-[10px] font-bold px-4 py-1 rounded-full">POPULAR</div>
              <p className="text-sm font-semibold text-white mb-1">Pro</p>
              <p className="text-xs text-neutral-600 mb-6">Everything, unlimited</p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-black text-white">$19</span>
                <span className="text-neutral-600 text-sm">/mo</span>
              </div>
              <Link href="/login" className="block w-full text-center bg-brand text-black py-3.5 rounded-xl text-sm font-bold hover:bg-brand-light transition shadow-[0_0_30px_rgba(52,211,153,0.15)] mb-8">
                Start Pro
              </Link>
              <ul className="space-y-3">
                {proF.map((f) => (<li key={f} className="flex items-center gap-3 text-sm text-neutral-500"><CheckCircle2 className="w-3.5 h-3.5 text-brand/50 shrink-0" />{f}</li>))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="glow-line w-full" />

      {/* ═══ CTA ═══ */}
      <section className="py-32 px-6 text-center relative">
        <Particles count={8} />
        <div className="max-w-2xl mx-auto relative z-10">
          <div className="reveal"><Logo className="w-14 h-14 mx-auto mb-8 float" /></div>
          <h2 className="reveal text-4xl md:text-5xl font-black text-white mb-4">Ready to <span className="text-gradient">master</span> the charts?</h2>
          <p className="reveal text-neutral-500 mb-8 text-lg">Join traders learning to read markets with AI.</p>
          <div className="reveal">
            <Link href="/login" className="group inline-flex items-center gap-2 bg-brand text-black px-10 py-4 rounded-xl text-base font-bold hover:bg-brand-light transition shadow-[0_0_60px_rgba(52,211,153,0.25)] hover:shadow-[0_0_80px_rgba(52,211,153,0.4)]">
              Start Free <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="border-t border-white/[0.05] py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5"><Logo className="w-5 h-5" /><span className="text-xs text-neutral-600">© 2026 Chart-Sensei</span></div>
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
