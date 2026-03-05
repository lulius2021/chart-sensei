"use client";

import { Upload, Zap, TrendingUp, TrendingDown, AlertTriangle, ChevronRight } from "lucide-react";
import { useState } from "react";

interface Analysis {
  pattern: string;
  direction: "bullish" | "bearish" | "neutral";
  strategy: string;
  timeframe: string;
  entry: { low: number; high: number; description: string };
  stopLoss: { price: number; description: string };
  takeProfits: { level: number; price: number; description: string }[];
  riskReward: string;
  confidence: "high" | "medium" | "low";
  signals: string[];
  explanation: string;
  steps: string[];
  mistakes: string;
}

const timeframes = ["1M", "5M", "15M", "1H", "4H", "1D", "1W"];

export default function AnalyzePage() {
  const [activeTf, setActiveTf] = useState("4H");
  const [image, setImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [analysis, setAnalysis] = useState<Analysis | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState<"analysis" | "strategy" | "learn">("analysis");

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setAnalysis(null);
      setError("");
      const reader = new FileReader();
      reader.onload = (ev) => setImage(ev.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = async () => {
    if (!imageFile) return;
    setLoading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("image", imageFile);
      const res = await fetch("/api/analyze", { method: "POST", body: formData });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Analysis failed");
      setAnalysis(data.analysis);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Analysis failed");
    } finally {
      setLoading(false);
    }
  };

  function getDirectionColor() {
    if (analysis?.direction === "bullish") return "text-profit";
    if (analysis?.direction === "bearish") return "text-loss";
    return "text-warn";
  }
  function getConfidenceColor() {
    if (analysis?.confidence === "high") return "bg-brand-muted text-brand";
    if (analysis?.confidence === "medium") return "bg-amber-500/10 text-amber-400";
    return "bg-rose-500/10 text-rose-400";
  }
  const directionColor = getDirectionColor();
  const confidenceColor = getConfidenceColor();

  return (
    <div className="flex flex-col h-full">
      {/* Toolbar */}
      <div className="flex items-center gap-3 px-5 py-2.5 border-b border-surface-4 bg-surface-1 shrink-0">
        <div className="flex items-center gap-1.5 bg-surface-3 border border-surface-4 rounded-md px-3 py-1.5 text-xs font-semibold text-white">
          <span className="w-1.5 h-1.5 rounded-full bg-brand" />
          Chart Analysis
        </div>
        <div className="flex gap-0.5">
          {timeframes.map((tf) => (
            <button
              key={tf}
              onClick={() => setActiveTf(tf)}
              className={`px-2.5 py-1 text-[11px] font-medium rounded transition ${
                tf === activeTf
                  ? "bg-brand-muted text-brand border border-brand/30"
                  : "bg-surface-3 border border-surface-4 text-text-dim hover:text-text-muted"
              }`}
            >
              {tf}
            </button>
          ))}
        </div>
        <div className="w-px h-5 bg-surface-4 mx-1" />
        <label className="flex items-center gap-1.5 bg-surface-3 border border-surface-4 rounded-md px-3 py-1.5 text-xs text-text-muted cursor-pointer hover:border-brand/30 hover:text-brand transition">
          <Upload className="w-3.5 h-3.5" />
          Upload
          <input type="file" accept="image/*" className="hidden" onChange={handleUpload} />
        </label>
        <button
          onClick={handleAnalyze}
          disabled={!imageFile || loading}
          className="ml-auto flex items-center gap-1.5 bg-brand text-surface-0 px-4 py-1.5 rounded-md text-xs font-bold hover:bg-brand-light transition disabled:opacity-40"
        >
          <Zap className="w-3.5 h-3.5" />
          {loading ? "Analyzing..." : "Analyze"}
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Chart Area */}
        <div className="flex-1 flex items-center justify-center p-8 overflow-auto">
          {image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={image} alt="Chart" className="max-w-full max-h-full rounded-lg border border-surface-4 object-contain" />
          ) : (
            <div className="text-center">
              <div className="text-5xl mb-4">📊</div>
              <h2 className="text-lg font-semibold text-white mb-2">Upload a Chart to Analyze</h2>
              <p className="text-sm text-text-muted mb-6 max-w-md">
                Upload a screenshot from TradingView, Binance, or any charting platform.
                The AI will identify patterns, entry/exit points, and explain the strategy.
              </p>
              <label className="inline-flex items-center gap-2 bg-brand text-surface-0 px-6 py-3 rounded-xl text-sm font-bold cursor-pointer hover:bg-brand-light transition">
                <Upload className="w-4 h-4" />
                Upload Chart Screenshot
                <input type="file" accept="image/*" className="hidden" onChange={handleUpload} />
              </label>
              <p className="text-xs text-text-faint mt-3">Supports PNG, JPG, WebP</p>
            </div>
          )}
        </div>

        {/* AI Panel */}
        <div className="w-[360px] border-l border-surface-4 bg-surface-1 flex flex-col shrink-0">
          <div className="flex items-center gap-2 px-5 py-3.5 border-b border-surface-4 shrink-0">
            <span className={`w-2 h-2 rounded-full ${loading ? "bg-warn animate-pulse" : analysis ? "bg-brand" : "bg-text-faint"} shadow-[0_0_6px_currentColor]`} />
            <span className="text-xs font-semibold text-white">AI Analysis</span>
            <span className="ml-auto text-[10px] text-text-faint">
              {loading ? "Analyzing..." : analysis ? "Complete" : "Waiting for chart..."}
            </span>
          </div>

          {/* Tabs */}
          {analysis && (
            <div className="flex border-b border-surface-4 shrink-0">
              {(["analysis", "strategy", "learn"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-2.5 text-[11px] font-semibold uppercase tracking-wider border-b-2 transition ${
                    activeTab === tab ? "text-brand border-brand" : "text-text-faint border-transparent hover:text-text-muted"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          )}

          <div className="flex-1 overflow-y-auto p-5">
            {error && (
              <div className="bg-loss/10 border border-loss/20 text-loss text-xs rounded-lg px-3 py-2 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-3.5 h-3.5 shrink-0" /> {error}
              </div>
            )}

            {loading && (
              <div className="text-center py-12">
                <div className="inline-block w-8 h-8 border-2 border-brand border-t-transparent rounded-full animate-spin mb-4" />
                <p className="text-sm text-text-muted">Analyzing chart patterns...</p>
                <p className="text-xs text-text-faint mt-1">This takes 5-10 seconds</p>
              </div>
            )}

            {!analysis && !loading && !error && (
              <div className="text-center py-12">
                <div className="text-3xl mb-3">🤖</div>
                <p className="text-sm text-text-muted">
                  Upload a chart and click <span className="text-brand font-semibold">Analyze</span> to get AI-powered insights
                </p>
              </div>
            )}

            {analysis && activeTab === "analysis" && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-[10px] uppercase tracking-wider text-text-faint font-semibold">Trade Setup</h3>
                  <InfoCard label="Pattern" value={analysis.pattern} />
                  <InfoCard label="Direction" value={
                    <span className={`flex items-center gap-1 ${directionColor}`}>
                      {analysis.direction === "bullish" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                      {analysis.direction.charAt(0).toUpperCase() + analysis.direction.slice(1)}
                    </span>
                  } />
                  <InfoCard label="Strategy" value={analysis.strategy} />
                  <InfoCard label="Timeframe" value={analysis.timeframe} />
                </div>

                <div className="space-y-2">
                  <h3 className="text-[10px] uppercase tracking-wider text-text-faint font-semibold">Entry & Exit</h3>
                  <InfoCard label="Entry Zone" value={<span className="text-profit">{"$"}{analysis.entry.low.toLocaleString()} – {"$"}{analysis.entry.high.toLocaleString()}</span>} />
                  <InfoCard label="Stop Loss" value={<span className="text-loss">{"$"}{analysis.stopLoss.price.toLocaleString()}</span>} />
                  {analysis.takeProfits.map((tp) => (
                    <InfoCard key={tp.level} label={`Take Profit ${tp.level}`} value={<span className="text-profit">{"$"}{tp.price.toLocaleString()}</span>} />
                  ))}
                </div>

                <div className="space-y-2">
                  <h3 className="text-[10px] uppercase tracking-wider text-text-faint font-semibold">Risk</h3>
                  <InfoCard label="Risk / Reward" value={<span className="text-warn">{analysis.riskReward}</span>} />
                  <InfoCard label="Confidence" value={
                    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded ${confidenceColor}`}>
                      {analysis.confidence.toUpperCase()}
                    </span>
                  } />
                  <div className="bg-surface-2 border border-surface-4 rounded-lg p-3">
                    <div className="text-[10px] text-text-dim mb-2">Signals</div>
                    <div className="flex flex-wrap gap-1">
                      {analysis.signals.map((s, i) => (
                        <span key={i} className="text-[10px] font-semibold bg-brand-muted text-brand px-2 py-0.5 rounded">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {analysis && activeTab === "strategy" && (
              <div className="space-y-4">
                <h3 className="text-[10px] uppercase tracking-wider text-text-faint font-semibold">How to Execute</h3>
                <ol className="space-y-2">
                  {analysis.steps.map((step, i) => (
                    <li key={i} className="flex gap-3 text-xs text-text-secondary leading-relaxed">
                      <span className="w-5 h-5 rounded-full bg-brand-muted text-brand text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step.replace(/^Step \d+:\s*/, "")}
                    </li>
                  ))}
                </ol>

                <div className="bg-amber-500/5 border border-amber-500/15 rounded-lg p-3 mt-4">
                  <div className="text-xs font-semibold text-warn mb-1">⚠️ Common Mistake</div>
                  <p className="text-xs text-text-secondary leading-relaxed">{analysis.mistakes}</p>
                </div>
              </div>
            )}

            {analysis && activeTab === "learn" && (
              <div>
                <h3 className="text-[10px] uppercase tracking-wider text-text-faint font-semibold mb-3">Why This Trade?</h3>
                <div className="bg-surface-2 border border-surface-4 rounded-lg p-4">
                  <p className="text-xs text-text-secondary leading-[1.8] whitespace-pre-line">
                    {analysis.explanation}
                  </p>
                </div>
                <a
                  href="/learn"
                  className="flex items-center gap-2 text-xs text-brand font-medium mt-4 hover:underline"
                >
                  Learn more about this strategy <ChevronRight className="w-3 h-3" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="bg-surface-2 border border-surface-4 rounded-lg px-3 py-2.5 flex items-center justify-between">
      <span className="text-[11px] text-text-dim">{label}</span>
      <span className="text-[13px] font-semibold text-white">{value}</span>
    </div>
  );
}
