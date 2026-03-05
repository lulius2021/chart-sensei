export default function AlertsPage() {
  return (
    <div className="p-8 lg:p-10 max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1">Alerts</h1>
        <p className="text-text-muted text-sm">Get notified about patterns and price levels</p>
      </div>
      <div className="bg-surface-2 border border-surface-4 rounded-2xl p-12 text-center">
        <div className="text-5xl mb-4">🔔</div>
        <h2 className="text-lg font-semibold text-white mb-2">Coming Soon</h2>
        <p className="text-sm text-text-muted max-w-sm mx-auto">
          Set up alerts for specific chart patterns, price levels, or when AI detects a high-confidence setup.
        </p>
      </div>
    </div>
  );
}
