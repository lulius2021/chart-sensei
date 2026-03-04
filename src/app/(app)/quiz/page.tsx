export default function QuizPage() {
  return (
    <div className="p-8 lg:p-10 max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1">Quiz Mode</h1>
        <p className="text-text-muted text-sm">Test your pattern recognition on real charts</p>
      </div>
      <div className="bg-surface-2 border border-surface-4 rounded-2xl p-12 text-center">
        <div className="text-5xl mb-4">🧠</div>
        <h2 className="text-lg font-semibold text-white mb-2">Coming Soon</h2>
        <p className="text-sm text-text-muted max-w-sm mx-auto">
          Complete at least 2 strategies in the Learn section to unlock Quiz Mode.
          You&apos;ll identify patterns, place entries, and get scored.
        </p>
      </div>
    </div>
  );
}
