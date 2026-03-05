"use client";

import { useState } from "react";
import { Plus, TrendingUp, TrendingDown, X } from "lucide-react";

interface JournalEntry {
  id: string;
  date: string;
  pair: string;
  direction: "long" | "short";
  strategy: string;
  entry: string;
  stopLoss: string;
  takeProfit: string;
  result: "win" | "loss" | "open" | "";
  pnl: string;
  notes: string;
}

export default function JournalPage() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<Omit<JournalEntry, "id">>({
    date: new Date().toISOString().split("T")[0],
    pair: "",
    direction: "long",
    strategy: "",
    entry: "",
    stopLoss: "",
    takeProfit: "",
    result: "",
    pnl: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const entry: JournalEntry = { ...form, id: Date.now().toString() };
    setEntries([entry, ...entries]);
    setShowForm(false);
    setForm({
      date: new Date().toISOString().split("T")[0],
      pair: "", direction: "long", strategy: "", entry: "",
      stopLoss: "", takeProfit: "", result: "", pnl: "", notes: "",
    });
  };

  const stats = {
    total: entries.length,
    wins: entries.filter((e) => e.result === "win").length,
    losses: entries.filter((e) => e.result === "loss").length,
    winRate: entries.filter((e) => e.result === "win" || e.result === "loss").length > 0
      ? Math.round((entries.filter((e) => e.result === "win").length / entries.filter((e) => e.result === "win" || e.result === "loss").length) * 100)
      : 0,
  };

  return (
    <div className="p-8 lg:p-10 max-w-4xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Trading Journal</h1>
          <p className="text-text-muted text-sm">Log your trades and track your progress</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-1.5 bg-brand text-surface-0 px-4 py-2 rounded-lg text-sm font-bold hover:bg-brand-light transition"
        >
          <Plus className="w-4 h-4" /> New Entry
        </button>
      </div>

      {/* Stats */}
      {entries.length > 0 && (
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-surface-2 border border-surface-4 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-white">{stats.total}</div>
            <div className="text-xs text-text-dim">Total Trades</div>
          </div>
          <div className="bg-surface-2 border border-surface-4 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-profit">{stats.wins}</div>
            <div className="text-xs text-text-dim">Wins</div>
          </div>
          <div className="bg-surface-2 border border-surface-4 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-loss">{stats.losses}</div>
            <div className="text-xs text-text-dim">Losses</div>
          </div>
          <div className="bg-surface-2 border border-surface-4 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-brand">{stats.winRate}%</div>
            <div className="text-xs text-text-dim">Win Rate</div>
          </div>
        </div>
      )}

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-surface-2 border border-surface-4 rounded-2xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-semibold text-white">Log Trade</h2>
              <button onClick={() => setShowForm(false)} className="text-text-dim hover:text-white transition">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-text-muted mb-1">Date</label>
                  <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full bg-surface-3 border border-surface-4 rounded-lg px-3 py-2 text-sm text-white focus:border-brand focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs text-text-muted mb-1">Pair</label>
                  <input type="text" placeholder="BTC/USDT" value={form.pair} onChange={(e) => setForm({ ...form, pair: e.target.value })} required
                    className="w-full bg-surface-3 border border-surface-4 rounded-lg px-3 py-2 text-sm text-white placeholder-text-dim focus:border-brand focus:outline-none" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-text-muted mb-1">Direction</label>
                  <select value={form.direction} onChange={(e) => setForm({ ...form, direction: e.target.value as "long" | "short" })}
                    className="w-full bg-surface-3 border border-surface-4 rounded-lg px-3 py-2 text-sm text-white focus:border-brand focus:outline-none">
                    <option value="long">Long</option>
                    <option value="short">Short</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-text-muted mb-1">Strategy</label>
                  <input type="text" placeholder="Breakout, S/R bounce..." value={form.strategy} onChange={(e) => setForm({ ...form, strategy: e.target.value })}
                    className="w-full bg-surface-3 border border-surface-4 rounded-lg px-3 py-2 text-sm text-white placeholder-text-dim focus:border-brand focus:outline-none" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs text-text-muted mb-1">Entry Price</label>
                  <input type="text" placeholder="68200" value={form.entry} onChange={(e) => setForm({ ...form, entry: e.target.value })}
                    className="w-full bg-surface-3 border border-surface-4 rounded-lg px-3 py-2 text-sm text-white placeholder-text-dim focus:border-brand focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs text-text-muted mb-1">Stop Loss</label>
                  <input type="text" placeholder="65800" value={form.stopLoss} onChange={(e) => setForm({ ...form, stopLoss: e.target.value })}
                    className="w-full bg-surface-3 border border-surface-4 rounded-lg px-3 py-2 text-sm text-white placeholder-text-dim focus:border-brand focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs text-text-muted mb-1">Take Profit</label>
                  <input type="text" placeholder="74000" value={form.takeProfit} onChange={(e) => setForm({ ...form, takeProfit: e.target.value })}
                    className="w-full bg-surface-3 border border-surface-4 rounded-lg px-3 py-2 text-sm text-white placeholder-text-dim focus:border-brand focus:outline-none" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-text-muted mb-1">Result</label>
                  <select value={form.result} onChange={(e) => setForm({ ...form, result: e.target.value as JournalEntry["result"] })}
                    className="w-full bg-surface-3 border border-surface-4 rounded-lg px-3 py-2 text-sm text-white focus:border-brand focus:outline-none">
                    <option value="">Still Open</option>
                    <option value="win">Win</option>
                    <option value="loss">Loss</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-text-muted mb-1">P&L</label>
                  <input type="text" placeholder="+$240" value={form.pnl} onChange={(e) => setForm({ ...form, pnl: e.target.value })}
                    className="w-full bg-surface-3 border border-surface-4 rounded-lg px-3 py-2 text-sm text-white placeholder-text-dim focus:border-brand focus:outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-xs text-text-muted mb-1">Notes</label>
                <textarea rows={3} placeholder="What did you learn from this trade?" value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  className="w-full bg-surface-3 border border-surface-4 rounded-lg px-3 py-2 text-sm text-white placeholder-text-dim focus:border-brand focus:outline-none resize-none" />
              </div>
              <button type="submit" className="w-full bg-brand text-surface-0 py-3 rounded-xl text-sm font-bold hover:bg-brand-light transition">
                Save Entry
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Entries List */}
      {entries.length === 0 && !showForm && (
        <div className="bg-surface-2 border border-surface-4 rounded-2xl p-12 text-center">
          <div className="text-5xl mb-4">📓</div>
          <h2 className="text-lg font-semibold text-white mb-2">No Entries Yet</h2>
          <p className="text-sm text-text-muted max-w-sm mx-auto mb-6">
            Start logging your trades to track your progress, identify patterns in your trading, and improve over time.
          </p>
          <button onClick={() => setShowForm(true)} className="bg-brand text-surface-0 px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-brand-light transition">
            Log First Trade
          </button>
        </div>
      )}

      {entries.length > 0 && (
        <div className="space-y-3">
          {entries.map((entry) => (
            <div key={entry.id} className="bg-surface-2 border border-surface-4 rounded-xl px-5 py-4">
              <div className="flex items-center gap-3 mb-2">
                <span className={`flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded ${
                  entry.direction === "long" ? "bg-brand-muted text-brand" : "bg-loss/10 text-loss"
                }`}>
                  {entry.direction === "long" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                  {entry.direction.toUpperCase()}
                </span>
                <span className="text-sm font-semibold text-white">{entry.pair}</span>
                <span className="text-xs text-text-dim">{entry.date}</span>
                {entry.strategy && <span className="text-xs text-text-dim bg-surface-3 px-2 py-0.5 rounded">{entry.strategy}</span>}
                <span className="ml-auto">
                  {entry.result === "win" && <span className="text-xs font-semibold text-profit">WIN {entry.pnl}</span>}
                  {entry.result === "loss" && <span className="text-xs font-semibold text-loss">LOSS {entry.pnl}</span>}
                  {(!entry.result || entry.result === "open") && <span className="text-xs text-text-dim">OPEN</span>}
                </span>
              </div>
              <div className="flex gap-6 text-xs text-text-dim">
                <span>Entry: {entry.entry}</span>
                <span>SL: {entry.stopLoss}</span>
                <span>TP: {entry.takeProfit}</span>
              </div>
              {entry.notes && <p className="text-xs text-text-muted mt-2 italic">{entry.notes}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
