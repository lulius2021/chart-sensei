"use client";

import { useState } from "react";
import { ArrowRight, RotateCcw, Trophy } from "lucide-react";

interface Question {
  id: number;
  image: string;
  question: string;
  options: { label: string; description: string }[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    image: "📊",
    question: "Price has tested the $65,000 level three times and bounced each time. What is this level called?",
    options: [
      { label: "Resistance", description: "A ceiling price can't break above" },
      { label: "Support", description: "A floor price keeps bouncing off" },
      { label: "Pivot Point", description: "A calculated average price level" },
      { label: "Fair Value Gap", description: "An imbalance in price action" },
    ],
    correct: 1,
    explanation: "Correct! When price bounces off a level multiple times from below, it's support — a floor where buyers consistently step in. The more times it's tested, the stronger the support.",
  },
  {
    id: 2,
    image: "📈",
    question: "Price is making higher highs and higher lows on the daily chart. The 50 EMA is below price and sloping upward. What should you do?",
    options: [
      { label: "Short the top", description: "It's gone up too much, time to sell" },
      { label: "Wait for a pullback to buy", description: "Buy the dip in the uptrend" },
      { label: "Stay out — too risky", description: "Wait for a clearer setup" },
      { label: "Buy immediately at market", description: "Jump in before it goes higher" },
    ],
    correct: 1,
    explanation: "Correct! In a confirmed uptrend, the best approach is to wait for a pullback to a key level (like the 50 EMA or support) and buy the dip. Never chase, never fight the trend.",
  },
  {
    id: 3,
    image: "📉",
    question: "BTC has been trading between $60,000 and $65,000 for 3 weeks. A candle just closed above $65,000 with 2.5x average volume. What pattern is this?",
    options: [
      { label: "Double Top", description: "A reversal pattern at resistance" },
      { label: "Breakout", description: "Price breaking out of consolidation" },
      { label: "Fakeout", description: "A false break that will reverse" },
      { label: "Exhaustion Gap", description: "End of trend signal" },
    ],
    correct: 1,
    explanation: "Correct! A candle closing above resistance with significantly higher volume (2.5x average) is a textbook breakout. The high volume confirms genuine buying pressure, not a fakeout.",
  },
  {
    id: 4,
    image: "📐",
    question: "The 9 EMA just crossed above the 21 EMA on the 4H chart, and price is above both. What signal is this?",
    options: [
      { label: "Bearish crossover — sell", description: "Fast MA below slow = bearish" },
      { label: "Bullish crossover — buy", description: "Fast MA above slow = bullish" },
      { label: "No signal — need more data", description: "Crossovers are unreliable alone" },
      { label: "Divergence — wait", description: "MAs diverging means uncertainty" },
    ],
    correct: 1,
    explanation: "Correct! When the fast EMA (9) crosses above the slow EMA (21) and price is above both, it's a bullish crossover signal. This confirms upward momentum. Even stronger if it happens above the 200 EMA.",
  },
  {
    id: 5,
    image: "🔍",
    question: "Price made a new high at $70,000, but the RSI made a lower high compared to the previous peak. What does this indicate?",
    options: [
      { label: "Bullish continuation", description: "New highs mean more upside" },
      { label: "Bearish divergence", description: "Momentum fading despite new highs" },
      { label: "Bullish divergence", description: "Hidden strength building" },
      { label: "Nothing significant", description: "RSI doesn't matter here" },
    ],
    correct: 1,
    explanation: "Correct! This is bearish divergence — price makes a higher high, but RSI makes a lower high. It signals that buying momentum is weakening even though price went higher. This often precedes a reversal.",
  },
  {
    id: 6,
    image: "📊",
    question: "You see a pattern with a left shoulder, a higher head, and a right shoulder that's lower than the head. The neckline just broke. What do you do?",
    options: [
      { label: "Buy — it's a bullish pattern", description: "Three peaks mean strength" },
      { label: "Short — it's a H&S top", description: "Classic reversal, enter short" },
      { label: "Wait for more confirmation", description: "One break isn't enough" },
      { label: "Buy the neckline retest", description: "Broken support becomes support again" },
    ],
    correct: 1,
    explanation: "Correct! A Head & Shoulders with a broken neckline is one of the most reliable bearish reversal patterns. Enter short on the neckline break or the retest, with a target equal to the head-to-neckline distance.",
  },
  {
    id: 7,
    image: "📏",
    question: "After a strong rally, the Bollinger Bands are extremely tight (squeezed). What should you prepare for?",
    options: [
      { label: "A big move is coming", description: "Low volatility precedes high volatility" },
      { label: "The trend is ending", description: "Tight bands mean exhaustion" },
      { label: "Time to short", description: "Overbought after a rally" },
      { label: "Nothing — stay out", description: "Squeezes don't predict direction" },
    ],
    correct: 0,
    explanation: "Correct! A Bollinger Band squeeze signals that volatility is compressing and a big move is imminent. You don't know the direction yet — wait for the breakout, then trade with it.",
  },
  {
    id: 8,
    image: "🎯",
    question: "You entered a trade with a $200 stop loss and a $500 take profit target. What's your risk-reward ratio?",
    options: [
      { label: "1:2.5", description: "Risk $200 to make $500" },
      { label: "2.5:1", description: "Risk $500 to make $200" },
      { label: "1:1", description: "Equal risk and reward" },
      { label: "Can't calculate without entry price", description: "Need more information" },
    ],
    correct: 0,
    explanation: "Correct! Risk-Reward = Stop Loss : Take Profit = $200 : $500 = 1:2.5. This is a solid ratio — you can be wrong 60% of the time and still be profitable.",
  },
  {
    id: 9,
    image: "💡",
    question: "Price pulled back to the 61.8% Fibonacci retracement level and formed a bullish engulfing candle. This area also aligns with the 50 EMA and previous support. How strong is this setup?",
    options: [
      { label: "Weak — too many factors", description: "Overcomplicating the analysis" },
      { label: "Very strong — triple confluence", description: "Multiple factors aligning = high probability" },
      { label: "Medium — need volume confirmation", description: "Can't trust without volume" },
      { label: "Irrelevant — Fibonacci doesn't work", description: "Fib levels are arbitrary" },
    ],
    correct: 1,
    explanation: "Correct! This is a triple confluence setup: Fibonacci level + moving average + horizontal support, all confirmed by a bullish candle pattern. Multiple factors aligning at the same zone creates a high-probability trade.",
  },
  {
    id: 10,
    image: "⚠️",
    question: "You're in a swing trade that's up 3%. You check the 5-minute chart and see a bearish candle. What should you do?",
    options: [
      { label: "Close immediately", description: "Protect profits before they disappear" },
      { label: "Add to position", description: "Small dip = buying opportunity" },
      { label: "Ignore the 5M chart", description: "Judge swing trades on higher TFs" },
      { label: "Move stop loss to breakeven", description: "Lock in no-loss position" },
    ],
    correct: 2,
    explanation: "Correct! If you entered a swing trade on the daily or 4H chart, judge it on that timeframe. A bearish candle on the 5-minute chart is noise. Micromanaging swing trades on low timeframes will shake you out of good positions.",
  },
];

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = questions[current];

  const handleSelect = (idx: number) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    if (idx === q.correct) setScore(score + 1);
  };

  const handleNext = () => {
    if (current + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrent(current + 1);
      setSelected(null);
      setAnswered(false);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="p-8 lg:p-10 max-w-2xl mx-auto">
        <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-10 text-center">
          <Trophy className={`w-16 h-16 mx-auto mb-4 ${pct >= 70 ? "text-brand" : pct >= 50 ? "text-warn" : "text-loss"}`} />
          <h1 className="text-3xl font-bold text-white mb-2">Quiz Complete!</h1>
          <div className="text-5xl font-extrabold my-6">
            <span className={pct >= 70 ? "text-brand" : pct >= 50 ? "text-warn" : "text-loss"}>{pct}%</span>
          </div>
          <p className="text-neutral-500 mb-2">{score} of {questions.length} correct</p>
          <p className="text-sm text-neutral-300 mb-8">
            {pct >= 90 ? "Excellent! You really know your stuff." :
             pct >= 70 ? "Great job! Keep learning and you'll master this." :
             pct >= 50 ? "Good start. Review the strategies you missed." :
             "Keep studying! Review the Learn section and try again."}
          </p>
          <div className="flex gap-3 justify-center">
            <button onClick={handleRestart} className="flex items-center gap-2 bg-brand text-black px-6 py-3 rounded-xl text-sm font-bold hover:bg-brand-light transition">
              <RotateCcw className="w-4 h-4" /> Try Again
            </button>
            <a href="/learn" className="flex items-center gap-2 border border-white/[0.06] text-white px-6 py-3 rounded-xl text-sm font-medium hover:border-text-dim transition">
              Review Strategies
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 lg:p-10 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-lg font-bold text-white">Quiz Mode</h1>
        <span className="text-sm text-neutral-500">
          <span className="text-brand font-semibold">{score}</span> / {questions.length} correct
        </span>
      </div>

      {/* Progress */}
      <div className="flex gap-1 mb-8">
        {questions.map((_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full ${
              i < current ? "bg-brand" : i === current ? "bg-warn" : "bg-surface-4"
            }`}
          />
        ))}
      </div>

      {/* Question */}
      <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 mb-6">
        <div className="text-4xl mb-4 text-center">{q.image}</div>
        <p className="text-base font-semibold text-white text-center leading-relaxed">{q.question}</p>
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 gap-3 mb-6">
        {q.options.map((opt, i) => {
          let style = "bg-white/[0.02] border-white/[0.06] hover:border-text-dim";
          if (answered && i === q.correct) style = "bg-brand/10 border-brand";
          else if (answered && i === selected && i !== q.correct) style = "bg-loss/10 border-loss";
          else if (selected === i && !answered) style = "bg-brand/5 border-brand/50";

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={answered}
              className={`border-2 rounded-xl p-4 text-left transition ${style}`}
            >
              <div className="text-sm font-semibold text-white mb-0.5">{opt.label}</div>
              <div className="text-xs text-neutral-500">{opt.description}</div>
            </button>
          );
        })}
      </div>

      {/* Feedback */}
      {answered && (
        <div className={`rounded-xl p-5 mb-6 ${selected === q.correct ? "bg-brand/5 border border-brand/20" : "bg-loss/5 border border-loss/20"}`}>
          <div className={`text-sm font-semibold mb-2 ${selected === q.correct ? "text-brand" : "text-loss"}`}>
            {selected === q.correct ? "✓ Correct!" : "✗ Incorrect"}
          </div>
          <p className="text-xs text-neutral-300 leading-relaxed">{q.explanation}</p>
        </div>
      )}

      {answered && (
        <button
          onClick={handleNext}
          className="w-full flex items-center justify-center gap-2 bg-brand text-black py-3 rounded-xl text-sm font-bold hover:bg-brand-light transition"
        >
          {current + 1 >= questions.length ? "See Results" : "Next Question"} <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
