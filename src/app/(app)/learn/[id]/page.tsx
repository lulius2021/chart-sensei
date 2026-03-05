import { getStrategy, strategies } from "@/lib/strategies";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Brain, BarChart3 } from "lucide-react";

const diffColor: Record<string, string> = {
  Beginner: "bg-brand-muted text-brand",
  Intermediate: "bg-amber-500/10 text-amber-400",
  Advanced: "bg-rose-500/10 text-rose-400",
};

export function generateStaticParams() {
  return strategies.map((s) => ({ id: String(s.id) }));
}

export default async function StrategyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const strategy = getStrategy(parseInt(id));
  if (!strategy) notFound();

  const next = strategies.find((s) => s.id === strategy.id + 1);
  const prev = strategies.find((s) => s.id === strategy.id - 1);

  return (
    <div className="max-w-3xl mx-auto px-8 py-10">
      {/* Back */}
      <Link href="/learn" className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-brand transition mb-6">
        <ArrowLeft className="w-3.5 h-3.5" /> All Strategies
      </Link>

      {/* Header */}
      <span className={`inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded mb-3 ${diffColor[strategy.difficulty]}`}>
        {strategy.difficulty}
      </span>
      <h1 className="text-3xl font-bold text-white mb-2">{strategy.name}</h1>
      <p className="text-sm text-text-muted mb-8">
        📖 {strategy.time} read · 🧠 Quiz available after
      </p>

      {/* Summary */}
      <p className="text-base text-text-secondary leading-relaxed mb-8">{strategy.summary}</p>

      {/* Description */}
      <h2 className="text-xl font-semibold text-white mb-4 mt-10">What is {strategy.name}?</h2>
      {strategy.description.split("\n\n").map((p, i) => (
        <p key={i} className="text-sm text-text-secondary leading-[1.8] mb-4">{p}</p>
      ))}

      {/* Key Principles */}
      <h2 className="text-xl font-semibold text-white mb-4 mt-10">Key Principles</h2>
      <div className="space-y-3">
        {strategy.keyPrinciples.map((kp, i) => (
          <div key={i} className="flex items-start gap-3 bg-surface-2 border border-surface-4 rounded-xl px-5 py-4">
            <span className="text-xl shrink-0">{kp.icon}</span>
            <div>
              <div className="text-sm font-semibold text-white mb-1">{kp.title}</div>
              <p className="text-xs text-text-muted leading-relaxed">{kp.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Trading Rules */}
      <h2 className="text-xl font-semibold text-white mb-4 mt-10">Trading Rules</h2>
      <div className="bg-brand/5 border border-brand/15 rounded-xl p-6">
        <ol className="space-y-3">
          {strategy.rules.map((rule, i) => (
            <li key={i} className="flex gap-3 text-sm text-text-secondary leading-relaxed">
              <span className="w-6 h-6 rounded-full bg-brand-muted text-brand text-xs font-bold flex items-center justify-center shrink-0">
                {i + 1}
              </span>
              {rule}
            </li>
          ))}
        </ol>
      </div>

      {/* Common Mistakes */}
      <h2 className="text-xl font-semibold text-white mb-4 mt-10">Common Mistakes</h2>
      {strategy.mistakes.map((m, i) => (
        <div key={i} className="bg-amber-500/5 border border-amber-500/15 rounded-xl p-5 mb-3">
          <div className="text-sm font-semibold text-warn mb-1">⚠️ {m.title}</div>
          <p className="text-xs text-text-secondary leading-relaxed">{m.text}</p>
        </div>
      ))}

      {/* When to Use */}
      <h2 className="text-xl font-semibold text-white mb-4 mt-10">When to Use This Strategy</h2>
      <p className="text-sm text-text-secondary leading-[1.8] mb-8">{strategy.bestFor}</p>

      {/* CTAs */}
      <div className="bg-surface-2 border border-surface-4 rounded-xl p-5 flex items-center gap-4 mb-6">
        <Brain className="w-8 h-8 text-brand shrink-0" />
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-white">Test Your Knowledge</h3>
          <p className="text-xs text-text-muted">Take the quiz to test what you learned</p>
        </div>
        <Link href="/quiz" className="bg-brand text-surface-0 px-4 py-2 rounded-lg text-xs font-bold hover:bg-brand-light transition shrink-0">
          Start Quiz →
        </Link>
      </div>

      <div className="bg-surface-2 border border-surface-4 rounded-xl p-5 flex items-center gap-4 mb-10">
        <BarChart3 className="w-8 h-8 text-brand shrink-0" />
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-white">Try on a Real Chart</h3>
          <p className="text-xs text-text-muted">Upload a chart and look for this pattern</p>
        </div>
        <Link href="/analyze" className="bg-brand text-surface-0 px-4 py-2 rounded-lg text-xs font-bold hover:bg-brand-light transition shrink-0">
          Analyze Chart →
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-surface-4">
        {prev ? (
          <Link href={`/learn/${prev.id}`} className="flex items-center gap-2 text-sm text-text-muted hover:text-brand transition">
            <ArrowLeft className="w-4 h-4" /> {prev.name}
          </Link>
        ) : <div />}
        {next ? (
          <Link href={`/learn/${next.id}`} className="flex items-center gap-2 text-sm text-text-muted hover:text-brand transition">
            {next.name} <ArrowRight className="w-4 h-4" />
          </Link>
        ) : <div />}
      </div>
    </div>
  );
}
