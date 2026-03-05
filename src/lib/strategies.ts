export interface Strategy {
  id: number;
  name: string;
  slug: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  time: string;
  free: boolean;
  summary: string;
  description: string;
  keyPrinciples: { icon: string; title: string; text: string }[];
  rules: string[];
  mistakes: { title: string; text: string }[];
  bestFor: string;
}

export const strategies: Strategy[] = [
  {
    id: 1, name: "Support & Resistance", slug: "support-resistance",
    difficulty: "Beginner", time: "15 min", free: true,
    summary: "The foundation of all chart reading. Learn to identify price levels where buyers and sellers consistently step in.",
    description: "Support and resistance are horizontal price levels where the market has historically reversed. Support is a floor where buying pressure exceeds selling. Resistance is a ceiling where selling pressure exceeds buying. These levels form because traders remember prices where they made or lost money, creating self-fulfilling prophecies.\n\nThe more times a level is tested, the stronger it becomes — but also the more likely it is to eventually break. When support breaks, it often becomes resistance (and vice versa). This \"polarity flip\" is one of the most reliable concepts in technical analysis.\n\nIdentifying these levels correctly gives you the foundation for every other strategy you'll learn.",
    keyPrinciples: [
      { icon: "📊", title: "More Touches = Stronger Level", text: "A support/resistance that has been tested 3+ times is more significant than one tested once." },
      { icon: "🔄", title: "Polarity Principle", text: "When support breaks, it becomes resistance. When resistance breaks, it becomes support." },
      { icon: "📏", title: "Zones, Not Lines", text: "Think of S/R as zones (price ranges), not exact lines. Markets are messy — a $50 zone is more realistic than a $50.00 line." },
      { icon: "📈", title: "Volume Validates", text: "A bounce off support with high volume is more reliable than one with low volume." },
    ],
    rules: [
      "Identify at least 2-3 clear bounces at the same price level",
      "Mark the zone (not just a single line) where reversals occurred",
      "Buy near support with stop loss below the zone",
      "Sell/short near resistance with stop loss above the zone",
      "Look for confirmation candles (hammer, engulfing) at the level",
      "Never buy in the middle — wait for price to reach a key level",
    ],
    mistakes: [
      { title: "Drawing too many levels", text: "A chart full of lines is useless. Focus on the 2-3 most obvious, most-tested levels." },
      { title: "Ignoring the trend", text: "In an uptrend, support levels are more reliable. In a downtrend, resistance levels are. Don't fight the trend." },
    ],
    bestFor: "All markets, all timeframes. This is the first thing you should look for on any chart. Works best on 1H+ timeframes for swing trading.",
  },
  {
    id: 2, name: "Trend Following", slug: "trend-following",
    difficulty: "Beginner", time: "12 min", free: true,
    summary: "\"The trend is your friend\" — learn to identify and ride trends instead of fighting them.",
    description: "Trend following is the simplest and most effective trading approach. An uptrend is a series of higher highs and higher lows. A downtrend is lower highs and lower lows. Your job is to identify the trend direction and trade with it, not against it.\n\nMost beginner traders lose money because they try to predict reversals. Trend followers don't predict — they react. They enter when a trend is confirmed and exit when it shows signs of ending.\n\nYou can identify trends using price action (higher highs/lows), moving averages, or trendlines. The key is to buy pullbacks in uptrends and sell rallies in downtrends.",
    keyPrinciples: [
      { icon: "📈", title: "Higher Highs & Higher Lows", text: "The simplest trend definition. If each swing high is higher than the last, and each swing low is higher than the last, you're in an uptrend." },
      { icon: "🎯", title: "Buy the Dip", text: "In an uptrend, don't chase new highs. Wait for a pullback to support or a moving average, then enter." },
      { icon: "⏱️", title: "Trends Persist", text: "Trends continue far longer than most people expect. Don't try to pick the top or bottom." },
      { icon: "🚫", title: "Don't Fight It", text: "Never short an uptrend or go long in a downtrend just because it 'looks too high/low'." },
    ],
    rules: [
      "Identify the trend direction on a higher timeframe (daily/weekly)",
      "Wait for a pullback to a key level (moving average, trendline, support)",
      "Enter when the pullback shows signs of ending (bullish candle pattern)",
      "Set stop loss below the most recent swing low (for longs)",
      "Trail your stop loss as the trend progresses",
      "Exit only when the trend structure breaks (lower low in an uptrend)",
    ],
    mistakes: [
      { title: "Counter-trend trading", text: "The #1 beginner mistake. Don't short because 'it went up too much'. Trends can extend far beyond what seems reasonable." },
      { title: "Entering too late", text: "If the trend has already moved 20% without a pullback, wait for a retracement. Don't chase." },
    ],
    bestFor: "Best for swing trading (4H-1D charts). Works in all markets — crypto trends tend to be stronger and longer than stock/forex trends.",
  },
  {
    id: 3, name: "Breakout Trading", slug: "breakout-trading",
    difficulty: "Beginner", time: "18 min", free: true,
    summary: "Catch big moves when price breaks out of consolidation with volume confirmation.",
    description: "A breakout occurs when price moves beyond a defined support or resistance level with increased volume. Markets spend most of their time in consolidation (moving sideways). When they finally break out, the resulting move is often powerful.\n\nThe key to breakout trading is distinguishing real breakouts from fakeouts. Real breakouts are confirmed by volume — when lots of traders agree on the new direction, the move sticks. Without volume, price often snaps back into the range.\n\nThe best breakout setups come after long consolidation periods. The longer the compression, the more explosive the breakout. Think of it like a spring being compressed.",
    keyPrinciples: [
      { icon: "📊", title: "Volume Confirms", text: "A real breakout has 1.5-2x+ average volume. Without volume, it's likely a fakeout." },
      { icon: "⏱️", title: "Wait for the Close", text: "Don't enter on the first wick above resistance. Wait for the candle to CLOSE above the level." },
      { icon: "🔄", title: "Retest = Safe Entry", text: "Often price retests the broken level before continuing. This retest is the safest entry point." },
      { icon: "📐", title: "Measure the Range", text: "The height of the consolidation range equals the expected breakout distance." },
    ],
    rules: [
      "Identify a clear consolidation range with at least 2-3 touches on each side",
      "Wait for a candle to CLOSE above resistance (long) or below support (short)",
      "Confirm volume is significantly above average",
      "Enter on the breakout close or on the retest of the broken level",
      "Stop loss below the range (for longs) or above (for shorts)",
      "Target: project the range height from the breakout point",
    ],
    mistakes: [
      { title: "Ignoring volume", text: "A breakout without volume is a fakeout waiting to happen. Always check volume before entering." },
      { title: "Chasing the move", text: "If you missed the breakout and price is already 5% above, don't chase. Wait for the retest or move on." },
    ],
    bestFor: "Works best after extended consolidation periods. All markets, but especially effective in crypto (tends to have more decisive breakouts). 1H-4H timeframes ideal.",
  },
  {
    id: 4, name: "Moving Average Crossover", slug: "ma-crossover",
    difficulty: "Beginner", time: "14 min", free: true,
    summary: "Use two moving averages to identify trend changes and generate clear buy/sell signals.",
    description: "The moving average crossover is one of the most classic trading signals. It uses two moving averages — a fast one (like the 9 or 20 EMA) and a slow one (like the 50 or 200 EMA). When the fast crosses above the slow, it's a buy signal. When it crosses below, it's a sell signal.\n\nThe Golden Cross (50 EMA crossing above 200 EMA) and Death Cross (50 crossing below 200) are the most famous versions. While they're lagging indicators — they confirm trends rather than predict them — they're highly effective for catching major trend shifts.\n\nThe EMA (Exponential Moving Average) is preferred over the SMA (Simple) because it reacts faster to recent price changes.",
    keyPrinciples: [
      { icon: "📈", title: "Golden Cross", text: "Fast MA crosses ABOVE slow MA = bullish signal. Especially strong on daily charts." },
      { icon: "📉", title: "Death Cross", text: "Fast MA crosses BELOW slow MA = bearish signal. Time to reduce longs or go short." },
      { icon: "🎯", title: "MA as Dynamic Support", text: "In an uptrend, the 20 EMA often acts as dynamic support. Price bounces off it repeatedly." },
      { icon: "⚡", title: "EMA > SMA", text: "Use EMA for shorter timeframes (faster reaction). SMA works fine for daily/weekly charts." },
    ],
    rules: [
      "Choose your pair: 9/21 EMA (fast, more signals) or 50/200 EMA (slow, stronger signals)",
      "Buy when fast EMA crosses above slow EMA",
      "Sell when fast EMA crosses below slow EMA",
      "Use price position relative to MAs as trend filter (above = bullish bias)",
      "Set stop loss below the slow EMA",
      "Best combined with volume and support/resistance for confirmation",
    ],
    mistakes: [
      { title: "Using in sideways markets", text: "MA crossovers generate tons of false signals in ranging/choppy markets. Only use when there's a clear trend." },
      { title: "Too many MAs", text: "Don't put 5 moving averages on your chart. Pick one pair and stick with it. More lines = more confusion." },
    ],
    bestFor: "Best for trending markets. The 9/21 EMA works well for day trading; 50/200 EMA for swing trading. Excellent for crypto and forex.",
  },
  {
    id: 5, name: "Fibonacci Retracements", slug: "fibonacci-retracement",
    difficulty: "Intermediate", time: "20 min", free: false,
    summary: "Use Fibonacci levels to predict where pullbacks end and trends resume.",
    description: "Fibonacci retracement levels are horizontal lines that indicate where support/resistance is likely to occur during a pullback. The key levels are 23.6%, 38.2%, 50%, 61.8%, and 78.6%. These ratios come from the Fibonacci sequence and appear throughout nature and markets.\n\nThe 61.8% level (the \"golden ratio\") is the most important. When price pulls back to the 61.8% retracement of a move, it has a high probability of reversing. The 38.2% level works well in strong trends (price barely pulls back). The 78.6% is the last line of defense before the trend is likely broken.\n\nFib levels work because enough traders use them, creating self-fulfilling support/resistance. They're most powerful when they align with other technical levels (horizontal S/R, moving averages).",
    keyPrinciples: [
      { icon: "📐", title: "Draw Swing to Swing", text: "Draw from the swing low to swing high (uptrend) or swing high to low (downtrend). The tool does the rest." },
      { icon: "🎯", title: "61.8% is Key", text: "The golden ratio. Pullbacks to 61.8% that hold are some of the highest-probability setups." },
      { icon: "🔗", title: "Confluence is Power", text: "A Fib level that aligns with horizontal support and a moving average is extremely strong." },
      { icon: "📊", title: "Extensions for Targets", text: "Use Fib extensions (1.272, 1.618) to project take-profit levels beyond the original swing." },
    ],
    rules: [
      "Identify a clear swing high and swing low on your timeframe",
      "Apply the Fibonacci retracement tool from swing low to high (uptrend)",
      "Watch for price reaction at 38.2%, 50%, and 61.8% levels",
      "Enter long when price bounces off a Fib level with confirmation (bullish candle)",
      "Stop loss below the 78.6% level or below the swing low",
      "Use Fib extensions (1.618) for take profit targets",
    ],
    mistakes: [
      { title: "Using wrong swing points", text: "The entire setup depends on picking the right swing high and low. Use obvious, significant swings, not minor wiggles." },
      { title: "Trading Fibs in isolation", text: "Fib levels alone aren't enough. Always combine with other confirmation (candlestick patterns, volume, S/R)." },
    ],
    bestFor: "Excellent for timing entries in trending markets. Works on all timeframes but most reliable on 4H+. Great for crypto pullback entries.",
  },
  {
    id: 6, name: "RSI Divergence", slug: "rsi-divergence",
    difficulty: "Intermediate", time: "16 min", free: false,
    summary: "Spot trend reversals early by finding disagreements between price and momentum.",
    description: "RSI (Relative Strength Index) divergence occurs when price makes a new high/low but the RSI doesn't confirm it. This disconnect signals that momentum is weakening and a reversal may be coming.\n\nBullish divergence: price makes a lower low, but RSI makes a higher low. This means selling pressure is decreasing despite lower prices — buyers are stepping in. Bearish divergence: price makes a higher high, but RSI makes a lower high. Buying pressure is fading.\n\nDivergence is one of the most powerful reversal signals because it shows you what's happening under the surface. Price can lie (pushed by a few large orders), but momentum tells the truth.",
    keyPrinciples: [
      { icon: "📉", title: "Bullish Divergence", text: "Price: lower low. RSI: higher low. = Momentum building, reversal likely. Look to buy." },
      { icon: "📈", title: "Bearish Divergence", text: "Price: higher high. RSI: lower high. = Momentum fading, reversal likely. Look to sell." },
      { icon: "⚠️", title: "Hidden Divergence", text: "Price: higher low + RSI: lower low = trend continuation (bullish). Opposite for bearish." },
      { icon: "⏱️", title: "Higher TF = Stronger", text: "Divergence on a daily chart is far more significant than on a 5-minute chart." },
    ],
    rules: [
      "Set RSI to 14 periods (standard setting)",
      "Look for divergence only at extremes (RSI below 30 or above 70)",
      "Wait for the RSI to cross back above 30 (bullish) or below 70 (bearish) to confirm",
      "Enter on confirmation candle, not on the divergence itself",
      "Stop loss below the recent swing low (bullish) or above swing high (bearish)",
      "Combine with support/resistance for highest probability setups",
    ],
    mistakes: [
      { title: "Acting too early", text: "Divergence can persist for a long time before price reverses. Always wait for confirmation (candle close, RSI crossing back)." },
      { title: "Divergence in strong trends", text: "In a strong uptrend, bearish divergence can appear multiple times before a real reversal. Don't fight strong trends." },
    ],
    bestFor: "Best for catching reversals at key levels. Works on all markets. Most reliable on 4H-Daily timeframes. Combine with S/R for A+ setups.",
  },
  {
    id: 7, name: "MACD Strategy", slug: "macd-strategy",
    difficulty: "Intermediate", time: "18 min", free: false,
    summary: "Use MACD crossovers and histogram to identify momentum shifts and trend strength.",
    description: "The MACD (Moving Average Convergence Divergence) shows the relationship between two EMAs (usually 12 and 26). The MACD line is the difference between them. The signal line is a 9-period EMA of the MACD line. When MACD crosses above the signal line, momentum is bullish. When it crosses below, momentum is bearish.\n\nThe histogram shows the distance between MACD and signal lines — growing bars mean momentum is increasing, shrinking bars mean it's fading. Zero-line crossovers (MACD crossing above/below zero) confirm trend changes.\n\nMACD is slower than RSI but more reliable for trend confirmation. It works best in trending markets and gives false signals in sideways markets.",
    keyPrinciples: [
      { icon: "📈", title: "Signal Line Cross", text: "MACD crossing above signal = bullish. Below = bearish. The most basic MACD signal." },
      { icon: "📊", title: "Zero Line Cross", text: "MACD crossing above zero = trend shift to bullish. Below zero = bearish shift." },
      { icon: "📉", title: "Histogram = Momentum", text: "Growing histogram bars = increasing momentum. Shrinking = momentum fading." },
      { icon: "🔍", title: "MACD Divergence", text: "Like RSI, MACD divergence from price signals potential reversals." },
    ],
    rules: [
      "Standard settings: 12, 26, 9 (default on most platforms)",
      "Buy when MACD crosses above signal line, preferably below zero",
      "Sell when MACD crosses below signal line, preferably above zero",
      "Use histogram shrinking as early warning of momentum change",
      "Confirm with price action (don't trade MACD signals blindly)",
      "Best combined with a trend filter (e.g., price above 200 EMA for longs only)",
    ],
    mistakes: [
      { title: "Sideways markets", text: "MACD generates constant whipsaws in ranging markets. Only trade MACD crossovers when there's a clear trend." },
      { title: "Lagging by nature", text: "MACD is a lagging indicator. It confirms moves rather than predicting them. Don't expect it to catch the exact bottom/top." },
    ],
    bestFor: "Best for confirming trend direction and timing entries in trending markets. 4H-Daily timeframes. All markets.",
  },
  {
    id: 8, name: "Bollinger Band Squeeze", slug: "bollinger-squeeze",
    difficulty: "Intermediate", time: "15 min", free: false,
    summary: "Identify low-volatility periods that precede explosive moves.",
    description: "Bollinger Bands consist of a 20-period moving average with bands at 2 standard deviations above and below. When bands tighten (squeeze), volatility is low and a big move is coming. When bands expand, the move is happening.\n\nThe squeeze is powerful because markets alternate between low and high volatility. A long squeeze (bands very tight for many candles) often leads to an explosive breakout. Your job is to wait for the squeeze and then trade the breakout direction.\n\nYou don't need to predict which direction the breakout will go — wait for price to break above the upper band (bullish) or below the lower band (bearish), then follow it.",
    keyPrinciples: [
      { icon: "📏", title: "Tight Bands = Incoming Move", text: "When bands are narrowest, a big move is imminent. Prepare but don't enter yet." },
      { icon: "💥", title: "Trade the Expansion", text: "Enter when price closes outside the bands with conviction. That's your direction signal." },
      { icon: "🎯", title: "Mean Reversion", text: "In ranging markets, price tends to return to the middle band (20 MA). Use for mean reversion trades." },
      { icon: "📊", title: "Band Width Indicator", text: "Use Bollinger Band Width to objectively measure squeeze intensity. Lower = tighter." },
    ],
    rules: [
      "Apply Bollinger Bands (20, 2) to your chart",
      "Wait for bands to squeeze tight (visually narrow or use BB Width)",
      "Don't enter during the squeeze — wait for the breakout",
      "Enter long when price closes above upper band with volume",
      "Enter short when price closes below lower band with volume",
      "Stop loss at the middle band (20 MA) or the opposite band",
    ],
    mistakes: [
      { title: "Entering during the squeeze", text: "The squeeze tells you something is coming, not which direction. Wait for the breakout." },
      { title: "Fading band touches", text: "In a trend, price can ride the upper (or lower) band for extended periods. Don't automatically short because price touched the upper band." },
    ],
    bestFor: "Excellent for catching the start of big moves. Works on all timeframes but 4H-Daily gives the best signals. Great for crypto volatility.",
  },
  {
    id: 9, name: "Head & Shoulders", slug: "head-shoulders",
    difficulty: "Intermediate", time: "22 min", free: false,
    summary: "The most reliable reversal pattern — identify trend tops and bottoms before they happen.",
    description: "The Head & Shoulders pattern is one of the most well-known and reliable reversal patterns. It consists of three peaks: a left shoulder, a higher head, and a right shoulder (which is lower than the head). The neckline connects the lows between the shoulders.\n\nWhen price breaks below the neckline after forming the right shoulder, it signals the end of the uptrend. The inverse H&S (three valleys) signals the end of a downtrend.\n\nThe pattern works because it shows the psychology of a dying trend: bulls push to a new high (head) but can't maintain it. The right shoulder failing to reach the head's level shows buyers losing conviction. The neckline break confirms sellers have taken control.",
    keyPrinciples: [
      { icon: "📐", title: "Symmetry Matters", text: "The more symmetrical the shoulders, the more reliable the pattern. But perfect symmetry isn't required." },
      { icon: "📉", title: "Neckline Break = Entry", text: "The trade triggers when price closes below the neckline (or above for inverse H&S)." },
      { icon: "📏", title: "Measure for Target", text: "The distance from head to neckline = expected move below the neckline." },
      { icon: "📊", title: "Volume Pattern", text: "Volume typically decreases from left shoulder → head → right shoulder. Breakout volume should increase." },
    ],
    rules: [
      "Identify three peaks where the middle (head) is the highest",
      "Draw the neckline connecting the lows between the peaks",
      "Wait for price to close below the neckline (short signal)",
      "Enter on neckline break or retest of neckline from below",
      "Stop loss above the right shoulder",
      "Target: neckline-to-head distance, projected down from neckline break",
    ],
    mistakes: [
      { title: "Seeing H&S everywhere", text: "Not every three-bump formation is an H&S. The pattern must form at the end of an uptrend (or downtrend for inverse)." },
      { title: "Entering before neckline break", text: "The pattern isn't confirmed until the neckline breaks. Many potential H&S patterns fail." },
    ],
    bestFor: "Best for identifying major trend reversals. Most reliable on daily/weekly charts. Works in all markets.",
  },
  {
    id: 10, name: "Double Top / Bottom", slug: "double-top-bottom",
    difficulty: "Intermediate", time: "16 min", free: false,
    summary: "Spot when price fails to break a level twice — a classic reversal signal.",
    description: "A double top forms when price hits a resistance level twice and fails both times, creating an 'M' shape. A double bottom forms when price tests support twice and bounces, creating a 'W' shape.\n\nThe pattern is confirmed when price breaks the neckline (the valley between the two tops, or the peak between the two bottoms). The double test and fail shows that the level is too strong for the current trend to overcome.\n\nDouble tops/bottoms are more common than Head & Shoulders and easier to spot. They work because the second failure at the same level destroys trader confidence in the trend direction.",
    keyPrinciples: [
      { icon: "📊", title: "Two Tests, Same Level", text: "Both peaks (tops) or valleys (bottoms) should be at roughly the same price level (within 1-2%)." },
      { icon: "⏱️", title: "Time Between Peaks", text: "The more time between the two tests, the more significant the pattern. Days to weeks is ideal." },
      { icon: "📉", title: "Neckline Break", text: "Pattern isn't complete until the neckline breaks. Many double tops/bottoms fail." },
      { icon: "📏", title: "Measure the Move", text: "Expected move = distance from peaks to neckline, projected from the break." },
    ],
    rules: [
      "Identify two peaks/valleys at approximately the same price level",
      "Draw the neckline at the valley between tops (or peak between bottoms)",
      "Wait for price to break below neckline (double top) or above (double bottom)",
      "Enter on the break or the retest of the neckline",
      "Stop loss above the two peaks (short) or below the two valleys (long)",
      "Target: distance from peaks to neckline, projected from break point",
    ],
    mistakes: [
      { title: "Not waiting for confirmation", text: "Many apparent double tops/bottoms end up being continuation patterns. Always wait for the neckline break." },
      { title: "Ignoring the trend context", text: "A double bottom after a long downtrend is more significant than one in a sideways market." },
    ],
    bestFor: "Great for catching reversals at key levels. All markets, 1H-Daily timeframes. One of the easiest patterns to spot and trade.",
  },
  {
    id: 11, name: "Flag & Pennant", slug: "flag-pennant",
    difficulty: "Intermediate", time: "14 min", free: false,
    summary: "Continuation patterns that signal the trend is taking a brief pause before resuming.",
    description: "Flags and pennants are short-term continuation patterns that form during a pause in a strong trend. A flag looks like a small rectangle sloping against the trend. A pennant looks like a small triangle. Both appear after a sharp move (the \"flagpole\").\n\nThey represent a brief consolidation where traders take profits before the trend resumes. The key is that these form in STRONG trends — the initial move (flagpole) should be decisive and on high volume.\n\nThe breakout from the flag/pennant typically continues in the same direction as the flagpole, with a target equal to the flagpole's length.",
    keyPrinciples: [
      { icon: "🚀", title: "Strong Flagpole Required", text: "The initial move must be sharp and decisive. Weak trends don't produce reliable flags." },
      { icon: "📉", title: "Low Volume Consolidation", text: "Volume should decrease during the flag/pennant and increase on the breakout." },
      { icon: "📏", title: "Flagpole = Target", text: "Measure the flagpole length and project it from the breakout point for your target." },
      { icon: "⏱️", title: "Brief Pause Only", text: "Flags/pennants should form over days to 2-3 weeks max. Longer consolidation = different pattern." },
    ],
    rules: [
      "Identify a sharp, decisive move (flagpole) on high volume",
      "Look for a brief consolidation (flag or pennant) on declining volume",
      "Wait for price to break out of the flag in the direction of the flagpole",
      "Enter on breakout with volume confirmation",
      "Stop loss below the flag (for bull flags) or above (bear flags)",
      "Target: flagpole length projected from breakout point",
    ],
    mistakes: [
      { title: "Weak flagpole", text: "If the initial move was gradual, it's not a flag. Flags require a strong, impulsive move first." },
      { title: "Flag too deep", text: "If the 'flag' retraces more than 50% of the flagpole, it's probably not a flag — it's a potential reversal." },
    ],
    bestFor: "Excellent for adding to positions in strong trends. Best on 1H-4H charts. Very common in crypto during strong rally/dump phases.",
  },
  {
    id: 12, name: "Cup & Handle", slug: "cup-handle",
    difficulty: "Intermediate", time: "16 min", free: false,
    summary: "A bullish continuation pattern that resembles a teacup — one of the most reliable setups.",
    description: "The cup and handle pattern forms when price creates a rounded bottom (the cup) followed by a small downward drift (the handle). The cup should have a U-shape, not a V-shape — a gradual, rounded bottom shows genuine accumulation.\n\nThe handle is a brief pullback that typically retraces 1/3 to 1/2 of the cup's height. It represents a final shakeout of weak holders before the breakout.\n\nWilliam O'Neil popularized this pattern for stock trading, but it works in all markets. The breakout above the cup's rim (the prior high) triggers the entry, with a target equal to the cup's depth.",
    keyPrinciples: [
      { icon: "☕", title: "U-Shape, Not V-Shape", text: "The cup should be rounded, showing gradual accumulation. Sharp V-bottoms are less reliable." },
      { icon: "📉", title: "Handle Drift", text: "The handle should drift down slightly and shouldn't retrace more than 50% of the cup." },
      { icon: "📊", title: "Volume Pattern", text: "Volume decreases in the right side of the cup and the handle, then spikes on breakout." },
      { icon: "📏", title: "Depth = Target", text: "The cup's depth from rim to bottom = expected move above the rim." },
    ],
    rules: [
      "Identify a rounded bottom forming over weeks to months",
      "The right side of the cup should approach the left side's level (prior high)",
      "Look for a handle forming — a brief pullback with declining volume",
      "Enter on breakout above the cup's rim with strong volume",
      "Stop loss below the handle's low",
      "Target: cup depth projected above the rim",
    ],
    mistakes: [
      { title: "V-shaped cups", text: "Sharp V-bottoms don't show real accumulation. The best cups take time to form (weeks to months)." },
      { title: "Handle too deep", text: "If the handle retraces more than 50% of the cup, the pattern is weakened significantly." },
    ],
    bestFor: "Best on daily/weekly charts for swing and position trades. Originally a stock pattern but works well in crypto too. Very reliable when properly formed.",
  },
  {
    id: 13, name: "VWAP Trading", slug: "vwap-trading",
    difficulty: "Advanced", time: "20 min", free: false,
    summary: "Use the Volume Weighted Average Price as an institutional-level support/resistance tool.",
    description: "VWAP (Volume Weighted Average Price) shows the average price weighted by volume throughout the trading day. Institutions use VWAP to gauge whether they got a good fill — buying below VWAP or selling above it is considered favorable.\n\nBecause big money uses VWAP, it becomes a self-fulfilling support/resistance level. Price above VWAP = bullish bias (buyers in control). Below VWAP = bearish bias. VWAP pullbacks in trending days offer excellent entry opportunities.\n\nVWAP resets each day (or session), making it primarily a day-trading tool. However, anchored VWAP (drawn from specific events) works for swing trading too.",
    keyPrinciples: [
      { icon: "💰", title: "Institutional Benchmark", text: "Big traders use VWAP to evaluate execution quality. This makes it a natural support/resistance level." },
      { icon: "📈", title: "Price vs VWAP = Bias", text: "Consistently above VWAP = bullish day. Below = bearish. Trade in the direction of the VWAP relationship." },
      { icon: "🎯", title: "VWAP Pullback Entry", text: "In a trending day, pullbacks to VWAP are high-probability entries in the trend direction." },
      { icon: "📊", title: "VWAP + Standard Deviations", text: "1st and 2nd standard deviation bands act as intraday targets and reversal zones." },
    ],
    rules: [
      "Add VWAP to your intraday chart (resets each session)",
      "Determine bias: price above VWAP = look for longs, below = shorts",
      "Wait for a pullback to VWAP in the direction of the trend",
      "Enter on bounce from VWAP with confirmation candle",
      "Stop loss on the opposite side of VWAP",
      "Target: VWAP standard deviation bands or previous session highs/lows",
    ],
    mistakes: [
      { title: "Using on higher timeframes", text: "Standard VWAP resets daily — it's designed for intraday trading. Use anchored VWAP for longer timeframes." },
      { title: "VWAP in choppy markets", text: "When price chops around VWAP repeatedly, there's no clear trend. Step aside." },
    ],
    bestFor: "Primarily a day trading tool. Best on 1M-15M charts. Excellent for stocks and futures. Works in crypto but less reliable due to 24/7 markets.",
  },
  {
    id: 14, name: "Ichimoku Cloud", slug: "ichimoku-cloud",
    difficulty: "Advanced", time: "25 min", free: false,
    summary: "A complete trading system that shows support, resistance, trend direction, and momentum in one glance.",
    description: "The Ichimoku Cloud (Ichimoku Kinko Hyo) is a comprehensive indicator developed by Goichi Hosoda. It consists of five lines and a shaded 'cloud' that together tell you everything about a chart: trend direction, momentum, support/resistance, and trade signals.\n\nThe five components are: Tenkan-sen (fast line, 9-period), Kijun-sen (slow line, 26-period), Senkou Span A and B (form the cloud, projected 26 periods forward), and Chikou Span (current close plotted 26 periods back).\n\nPrice above the cloud = bullish. Below = bearish. Inside = no trade. The cloud itself acts as support/resistance. Thicker cloud = stronger barrier. The Tenkan/Kijun cross gives entry signals.",
    keyPrinciples: [
      { icon: "☁️", title: "Cloud = Trend Filter", text: "Price above cloud = only longs. Below cloud = only shorts. Inside cloud = wait." },
      { icon: "📊", title: "Cloud Thickness", text: "A thick cloud is harder to break through (strong S/R). A thin cloud breaks easily." },
      { icon: "🔄", title: "TK Cross", text: "Tenkan crossing above Kijun above the cloud = strong buy. Below the cloud = strong sell." },
      { icon: "📈", title: "Chikou Span Confirmation", text: "Chikou Span (lagging line) above price from 26 periods ago = bullish confirmation." },
    ],
    rules: [
      "Apply Ichimoku with default settings (9, 26, 52)",
      "Determine trend: price above cloud = bullish, below = bearish",
      "Enter long when Tenkan crosses above Kijun AND price is above cloud",
      "Enter short when Tenkan crosses below Kijun AND price is below cloud",
      "Stop loss on the opposite side of the Kijun-sen line",
      "Take profit at the next cloud boundary or key S/R level",
    ],
    mistakes: [
      { title: "Trading inside the cloud", text: "When price is inside the cloud, the trend is unclear. Wait for a clear break above or below." },
      { title: "Ignoring the full picture", text: "All 5 components must agree for the highest probability trades. Don't cherry-pick one signal." },
    ],
    bestFor: "Works as a complete system — no need for other indicators. Best on 4H-Daily charts. Excellent for crypto and forex. Originally designed for Japanese stocks.",
  },
  {
    id: 15, name: "Smart Money / Order Blocks", slug: "smart-money",
    difficulty: "Advanced", time: "28 min", free: false,
    summary: "Trade like institutions — identify where smart money enters and exits positions.",
    description: "Smart Money Concepts (SMC) is a framework for understanding how institutional traders move markets. It focuses on order blocks (zones where institutions placed large orders), liquidity pools (areas where stop losses cluster), and market structure shifts.\n\nOrder blocks are the last opposing candle before a strong move. For a bullish order block, it's the last bearish candle before a big rally — that's where institutions were buying. Price often returns to these zones to fill remaining orders.\n\nLiquidity is the fuel that moves markets. Institutions need liquidity to fill large orders, so they engineer moves to trigger stop losses (liquidity grabs) before reversing in their intended direction. Understanding this helps you avoid being the liquidity and instead trade with smart money.",
    keyPrinciples: [
      { icon: "🏦", title: "Order Blocks", text: "The last opposing candle before a strong move. Price tends to return to test these zones." },
      { icon: "💧", title: "Liquidity Pools", text: "Clusters of stop losses above highs and below lows. Smart money hunts these before reversing." },
      { icon: "🔄", title: "Break of Structure (BOS)", text: "When price breaks a swing high (bullish BOS) or low (bearish BOS), confirming trend change." },
      { icon: "⚡", title: "Fair Value Gaps (FVG)", text: "Three-candle patterns where the middle candle gaps, creating an imbalance. Price tends to fill these." },
    ],
    rules: [
      "Identify the higher-timeframe trend using market structure (HH/HL or LH/LL)",
      "Mark order blocks — the last opposing candle before a strong impulse move",
      "Wait for price to retrace to the order block zone",
      "Look for a reaction (rejection candle, break of short-term structure) at the OB",
      "Enter with stop loss below/above the order block",
      "Target: the next opposing order block or liquidity pool",
    ],
    mistakes: [
      { title: "Every candle is not an OB", text: "Order blocks must precede STRONG moves. A bearish candle before a 0.5% move is not an order block." },
      { title: "Overcomplicating it", text: "SMC can become overly complex. Stick to the basics: market structure, order blocks, and liquidity." },
    ],
    bestFor: "Works on all markets and timeframes. Particularly effective in forex and crypto. Best learned after mastering basic S/R and trend following.",
  },
  {
    id: 16, name: "Elliott Wave Basics", slug: "elliott-wave",
    difficulty: "Advanced", time: "30 min", free: false,
    summary: "Understand market cycles through wave patterns — 5 impulse waves and 3 corrective waves.",
    description: "Elliott Wave Theory proposes that markets move in predictable wave patterns driven by crowd psychology. A complete cycle has 8 waves: 5 in the direction of the trend (impulse) and 3 against it (correction).\n\nThe impulse phase has waves 1, 2, 3, 4, 5. Wave 3 is usually the longest and most powerful (never the shortest). Wave 2 corrects wave 1 (never beyond its start). Wave 4 corrects wave 3 (doesn't overlap wave 1's territory).\n\nThe corrective phase (A, B, C) retraces part of the impulse. Understanding where you are in the wave count helps you anticipate what comes next. Wave 3 is where you want to be — it's the meat of the move.",
    keyPrinciples: [
      { icon: "🌊", title: "5-3 Pattern", text: "5 waves with the trend (impulse), 3 waves against (correction). This fractal repeats at all scales." },
      { icon: "⚡", title: "Wave 3 is King", text: "Wave 3 is the strongest and longest. It's the best wave to trade. It's never the shortest of 1, 3, 5." },
      { icon: "📐", title: "Fibonacci Relationships", text: "Waves relate to each other by Fibonacci ratios. Wave 3 often = 1.618x Wave 1." },
      { icon: "🔄", title: "Fractal Nature", text: "Each wave contains smaller waves of the same pattern. A wave 3 contains its own 5 sub-waves." },
    ],
    rules: [
      "Identify the current wave count on a higher timeframe",
      "Look for wave 2 completion (38.2%-61.8% retracement of wave 1) to enter wave 3",
      "Use Fibonacci extensions to project wave 3 targets (1.618x wave 1 is common)",
      "Watch for wave 4 pullback (doesn't overlap wave 1) to add positions for wave 5",
      "Exit during wave 5 or the A-B-C correction",
      "Always have a stop loss in case your count is wrong",
    ],
    mistakes: [
      { title: "Subjective counting", text: "The biggest criticism of Elliott Wave — different traders can count the same chart differently. Stay flexible." },
      { title: "Using in isolation", text: "Don't trade solely on wave counts. Combine with support/resistance, volume, and other confirmation." },
    ],
    bestFor: "Best for understanding the bigger picture of market cycles. Use on daily/weekly charts. Works in all markets but requires practice to count correctly.",
  },
  {
    id: 17, name: "Gap Trading", slug: "gap-trading",
    difficulty: "Advanced", time: "18 min", free: false,
    summary: "Trade price gaps caused by overnight news, earnings, or market openings.",
    description: "A gap occurs when price opens significantly above or below the previous close, creating an empty space on the chart. Gaps are common in stocks (overnight closes) and can occur in crypto around major news events.\n\nThere are four types: breakaway gaps (start of a new trend), runaway/continuation gaps (middle of a trend), exhaustion gaps (end of a trend), and common gaps (random, usually fill quickly).\n\nThe key principle is \"gaps tend to fill\" — price often returns to close the gap. But breakaway and continuation gaps may take a long time to fill. Understanding gap types helps you decide whether to trade the gap fill or the continuation.",
    keyPrinciples: [
      { icon: "📊", title: "Gap Types Matter", text: "Breakaway gaps don't fill quickly. Common gaps do. Identify the type before trading." },
      { icon: "🔄", title: "Gaps Tend to Fill", text: "Most gaps eventually get filled. Common gaps fill within days; breakaway gaps may take weeks/months." },
      { icon: "📈", title: "Gap and Go", text: "Strong breakaway gaps with volume shouldn't be faded. Trade in the gap direction." },
      { icon: "📉", title: "Gap Fill Strategy", text: "For common/exhaustion gaps, trade the fill (price returning to close the gap)." },
    ],
    rules: [
      "Identify the gap type (breakaway, continuation, exhaustion, or common)",
      "For gap fills: wait for the opening excitement to settle (first 15-30 minutes)",
      "Enter a gap fill trade when price shows signs of reversing toward the gap",
      "For gap-and-go: enter in the direction of the gap if it holds with volume after 30 min",
      "Stop loss beyond the gap's extreme (high for short, low for long)",
      "Target: the gap fill level (previous close) or previous day's range",
    ],
    mistakes: [
      { title: "Fading every gap", text: "Breakaway gaps shouldn't be faded. If the gap is on huge volume at a key level, trade WITH it, not against it." },
      { title: "Not waiting for confirmation", text: "The first 15-30 minutes after a gap are chaotic. Wait for price to settle before committing." },
    ],
    bestFor: "Primarily a stock market strategy (due to market close/open). Best on daily + intraday charts. Can be adapted for crypto around major events.",
  },
  {
    id: 18, name: "Scalping Setups", slug: "scalping-setups",
    difficulty: "Advanced", time: "22 min", free: false,
    summary: "Quick in-and-out trades on short timeframes — high frequency, small targets.",
    description: "Scalping involves making many trades per day, each targeting small profits (0.1%-0.5%). The idea is that small, consistent wins compound into significant returns. Scalpers trade on 1M-5M charts and hold positions for seconds to minutes.\n\nSuccessful scalping requires tight spreads, fast execution, and strict discipline. You need a reliable edge, perfect risk management, and the ability to make quick decisions without emotion.\n\nCommon scalping strategies include level-to-level trading (buying support, selling resistance on low timeframes), EMA bounce scalps (price bouncing off 9/20 EMA), and order flow reading. The win rate should be 60%+ with a minimum 1:1 risk-reward.",
    keyPrinciples: [
      { icon: "⚡", title: "Speed Over Size", text: "Small targets, quick exits. Take your profit and move on. Greed kills scalpers." },
      { icon: "📊", title: "High Win Rate Needed", text: "With small targets, you need 55-65%+ win rate to be profitable after fees." },
      { icon: "💰", title: "Costs Matter", text: "Spreads and fees eat into tiny profits. Only scalp liquid markets with tight spreads." },
      { icon: "🧠", title: "Discipline is Everything", text: "One bad loss can wipe out 10 winning scalps. Cut losses instantly." },
    ],
    rules: [
      "Trade only highly liquid markets with tight spreads",
      "Use 1M-5M charts with 9 and 20 EMA",
      "Identify key intraday levels (VWAP, round numbers, session highs/lows)",
      "Enter on bounces from key levels with immediate confirmation",
      "Set tight stop loss (should not exceed your target size)",
      "Take profit quickly — don't let winners turn into losers",
    ],
    mistakes: [
      { title: "Holding losers", text: "The #1 scalping killer. If the trade doesn't work immediately, cut it. No hoping, no averaging down." },
      { title: "Overtrading", text: "More trades ≠ more profit. Quality setups only. Sometimes the best trade is no trade." },
    ],
    bestFor: "Requires dedicated screen time and fast execution. Best for forex and crypto. Need tight spreads and low commissions. Not recommended for beginners.",
  },
  {
    id: 19, name: "Swing Trade Setups", slug: "swing-trade-setups",
    difficulty: "Advanced", time: "24 min", free: false,
    summary: "Hold positions for days to weeks — capturing major price swings with optimal timing.",
    description: "Swing trading aims to capture medium-term price moves over days to weeks. It's the sweet spot between day trading (too stressful) and long-term investing (too slow). Swing traders identify setups on daily charts and time entries on 4H charts.\n\nThe best swing trade setups combine multiple confirmations: a pullback to a key level (S/R, Fibonacci, moving average) in the direction of the higher-timeframe trend, with a catalyst (volume spike, pattern completion, indicator signal).\n\nSwing trading requires patience — you wait for the setup, enter, set your stop loss and targets, and let the trade play out. You check once or twice a day, not every minute. This makes it ideal for people with jobs who can't watch charts all day.",
    keyPrinciples: [
      { icon: "📅", title: "Daily Charts for Setups", text: "Find setups on the daily chart, time entries on 4H. Don't use anything below 1H for swing trading." },
      { icon: "🎯", title: "Confluence is Key", text: "The best swings have 3+ reasons to enter: trend, level, pattern, indicator. More confluence = higher probability." },
      { icon: "⏱️", title: "Patience Pays", text: "Wait for the setup to come to you. Forcing trades in swing trading leads to mediocre entries." },
      { icon: "📊", title: "Trend Alignment", text: "Trade in the direction of the weekly trend. Swing trades against the major trend have lower probability." },
    ],
    rules: [
      "Determine the weekly trend direction — only trade with it",
      "Find pullbacks to key levels on the daily chart",
      "Look for confluence: S/R + Fibonacci + moving average + pattern",
      "Time entry on the 4H chart using candlestick patterns",
      "Set stop loss below the swing low (long) or above swing high (short)",
      "Target 2:1 risk-reward minimum, let winners run with trailing stops",
    ],
    mistakes: [
      { title: "Micromanaging on low TFs", text: "Once you're in a swing trade, stop watching the 5-minute chart. It will shake you out of good trades." },
      { title: "No pre-defined plan", text: "Every swing trade needs entry, stop loss, and target BEFORE you enter. No making it up as you go." },
    ],
    bestFor: "Ideal for people who can't watch charts all day. Best on 4H-Daily charts. Works in all markets. The most sustainable trading style for most people.",
  },
];

export function getStrategy(id: number): Strategy | undefined {
  return strategies.find((s) => s.id === id);
}

export function getStrategyBySlug(slug: string): Strategy | undefined {
  return strategies.find((s) => s.slug === slug);
}
