import { BarChart3, Brain, Flame, TrendingUp } from "lucide-react";

const stats = [
  { label: "Charts Analyzed", value: "0", sub: "Start analyzing!", icon: BarChart3 },
  { label: "Strategies Learned", value: "0 / 19", sub: "Begin your journey", icon: TrendingUp },
  { label: "Quiz Score", value: "—", sub: "Take your first quiz", icon: Brain },
  { label: "Current Streak", value: "0 days", sub: "Analyze daily to build a streak", icon: Flame },
];

export default function DashboardPage() {
  return (
    <div className="p-8 lg:p-10 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1">Welcome to Chart-Sensei 👋</h1>
        <p className="text-text-muted text-sm">Here&apos;s your trading education progress</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {stats.map((s) => (
          <div key={s.label} className="bg-surface-2 border border-surface-4 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <s.icon className="w-4 h-4 text-text-dim" />
              <span className="text-xs text-text-dim uppercase tracking-wide">{s.label}</span>
            </div>
            <div className="text-2xl font-bold text-white">{s.value}</div>
            <div className="text-xs text-text-faint mt-1">{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <h2 className="text-base font-semibold text-white mb-4">Get Started</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <a href="/analyze" className="bg-surface-2 border border-surface-4 rounded-xl p-6 hover:border-brand/30 transition group">
          <div className="text-2xl mb-3">📊</div>
          <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-brand transition">Analyze Your First Chart</h3>
          <p className="text-xs text-text-muted">Upload a screenshot or use live charts to get AI analysis</p>
        </a>
        <a href="/learn" className="bg-surface-2 border border-surface-4 rounded-xl p-6 hover:border-brand/30 transition group">
          <div className="text-2xl mb-3">📚</div>
          <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-brand transition">Learn a Strategy</h3>
          <p className="text-xs text-text-muted">Start with Support & Resistance — the foundation of all trading</p>
        </a>
        <a href="/quiz" className="bg-surface-2 border border-surface-4 rounded-xl p-6 hover:border-brand/30 transition group">
          <div className="text-2xl mb-3">🧠</div>
          <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-brand transition">Test Your Knowledge</h3>
          <p className="text-xs text-text-muted">Take a quiz to see how well you can read chart patterns</p>
        </a>
      </div>
    </div>
  );
}
