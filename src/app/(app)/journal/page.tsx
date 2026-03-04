export default function JournalPage() {
  return (
    <div className="p-8 lg:p-10 max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1">Trading Journal</h1>
        <p className="text-text-muted text-sm">Log your trades and track your progress</p>
      </div>
      <div className="bg-surface-2 border border-surface-4 rounded-2xl p-12 text-center">
        <div className="text-5xl mb-4">📓</div>
        <h2 className="text-lg font-semibold text-white mb-2">No Entries Yet</h2>
        <p className="text-sm text-text-muted max-w-sm mx-auto mb-6">
          After analyzing charts, you can log your trades here to build a record and track your improvement over time.
        </p>
        <button className="bg-brand text-surface-0 px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-brand-light transition">
          Log First Trade
        </button>
      </div>
    </div>
  );
}
