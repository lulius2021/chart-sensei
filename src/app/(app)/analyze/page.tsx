"use client";

import { Upload, Zap } from "lucide-react";
import { useState } from "react";

const timeframes = ["1M", "5M", "15M", "1H", "4H", "1D", "1W"];

export default function AnalyzePage() {
  const [activeTf, setActiveTf] = useState("4H");
  const [image, setImage] = useState<string | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setImage(ev.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Toolbar */}
      <div className="flex items-center gap-3 px-5 py-2.5 border-b border-surface-4 bg-surface-1">
        <div className="flex items-center gap-1.5 bg-surface-3 border border-surface-4 rounded-md px-3 py-1.5 text-xs font-semibold text-white">
          <span className="w-1.5 h-1.5 rounded-full bg-brand" />
          BTC / USDT
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
          Upload Screenshot
          <input type="file" accept="image/*" className="hidden" onChange={handleUpload} />
        </label>
        <button className="ml-auto flex items-center gap-1.5 bg-brand text-surface-0 px-4 py-1.5 rounded-md text-xs font-bold hover:bg-brand-light transition">
          <Zap className="w-3.5 h-3.5" /> Analyze
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Chart Area */}
        <div className="flex-1 flex items-center justify-center p-8">
          {image ? (
            <img src={image} alt="Chart" className="max-w-full max-h-full rounded-lg border border-surface-4" />
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
        <div className="w-[340px] border-l border-surface-4 bg-surface-1 flex flex-col">
          <div className="flex items-center gap-2 px-5 py-3.5 border-b border-surface-4">
            <span className="w-2 h-2 rounded-full bg-brand shadow-[0_0_6px_theme(colors.brand.DEFAULT)]" />
            <span className="text-xs font-semibold text-white">AI Analysis</span>
            <span className="ml-auto text-[10px] text-text-faint">Waiting for chart...</span>
          </div>
          <div className="flex-1 flex items-center justify-center p-6 text-center">
            <div>
              <div className="text-3xl mb-3">🤖</div>
              <p className="text-sm text-text-muted">Upload a chart and click <span className="text-brand font-semibold">Analyze</span> to get AI-powered insights</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
