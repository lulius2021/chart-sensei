import { Lock } from "lucide-react";
import Link from "next/link";

const strategies = [
  { category: "Fundamentals (Free)", items: [
    { id: 1, name: "Support & Resistance", difficulty: "Beginner", time: "15 min", free: true },
    { id: 2, name: "Trend Following", difficulty: "Beginner", time: "12 min", free: true },
    { id: 3, name: "Breakout Trading", difficulty: "Beginner", time: "18 min", free: true },
    { id: 4, name: "Moving Average Crossover", difficulty: "Beginner", time: "14 min", free: true },
  ]},
  { category: "Intermediate (Pro)", items: [
    { id: 5, name: "Fibonacci Retracements", difficulty: "Intermediate", time: "20 min", free: false },
    { id: 6, name: "RSI Divergence", difficulty: "Intermediate", time: "16 min", free: false },
    { id: 7, name: "MACD Strategy", difficulty: "Intermediate", time: "18 min", free: false },
    { id: 8, name: "Bollinger Band Squeeze", difficulty: "Intermediate", time: "15 min", free: false },
    { id: 9, name: "Head & Shoulders", difficulty: "Intermediate", time: "22 min", free: false },
    { id: 10, name: "Double Top / Bottom", difficulty: "Intermediate", time: "16 min", free: false },
    { id: 11, name: "Flag & Pennant", difficulty: "Intermediate", time: "14 min", free: false },
    { id: 12, name: "Cup & Handle", difficulty: "Intermediate", time: "16 min", free: false },
  ]},
  { category: "Advanced (Pro)", items: [
    { id: 13, name: "VWAP Trading", difficulty: "Advanced", time: "20 min", free: false },
    { id: 14, name: "Ichimoku Cloud", difficulty: "Advanced", time: "25 min", free: false },
    { id: 15, name: "Smart Money / Order Blocks", difficulty: "Advanced", time: "28 min", free: false },
    { id: 16, name: "Elliott Wave Basics", difficulty: "Advanced", time: "30 min", free: false },
    { id: 17, name: "Gap Trading", difficulty: "Advanced", time: "18 min", free: false },
    { id: 18, name: "Scalping Setups", difficulty: "Advanced", time: "22 min", free: false },
    { id: 19, name: "Swing Trade Setups", difficulty: "Advanced", time: "24 min", free: false },
  ]},
];

const diffColor: Record<string, string> = {
  Beginner: "bg-brand/10 text-brand",
  Intermediate: "bg-amber-500/10 text-amber-400",
  Advanced: "bg-rose-500/10 text-rose-400",
};

export default function LearnPage() {
  return (
    <div className="p-8 lg:p-10 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1">Learn Strategies</h1>
        <p className="text-neutral-500 text-sm">Master 19 trading strategies from beginner to advanced</p>
      </div>

      {strategies.map((section) => (
        <div key={section.category} className="mb-8">
          <h2 className="text-xs uppercase tracking-wider text-neutral-700 font-semibold mb-3">{section.category}</h2>
          <div className="space-y-2">
            {section.items.map((s) => (
              <Link
                key={s.id}
                href={s.free ? `/learn/${s.id}` : "/pricing"}
                className="flex items-center gap-4 bg-white/[0.02] border border-white/[0.06] rounded-xl px-5 py-4 hover:border-brand/20 transition group"
              >
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold ${
                  s.free ? "bg-white/[0.04] text-neutral-600 group-hover:bg-brand/10 group-hover:text-brand" : "bg-white/[0.04] text-neutral-700"
                }`}>
                  {s.id}
                </div>
                <div className="flex-1">
                  <div className={`text-sm font-medium ${s.free ? "text-white" : "text-neutral-600"}`}>{s.name}</div>
                  <div className="text-[11px] text-neutral-700 mt-0.5">{s.time}</div>
                </div>
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${diffColor[s.difficulty]}`}>
                  {s.difficulty}
                </span>
                {!s.free && <Lock className="w-3.5 h-3.5 text-neutral-700" />}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
