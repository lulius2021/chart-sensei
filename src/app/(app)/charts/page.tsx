export default function ChartsPage() {
  return (
    <div className="p-8 lg:p-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1">Live Charts</h1>
        <p className="text-neutral-500 text-sm">Real-time charts powered by TradingView</p>
      </div>
      <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden" style={{ height: "calc(100vh - 180px)" }}>
        <iframe
          src="https://s.tradingview.com/widgetembed/?hideideas=1&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en#%7B%22symbol%22%3A%22BINANCE%3ABTCUSDT%22%2C%22frameElementId%22%3A%22tradingview_chart%22%2C%22interval%22%3A%22240%22%2C%22hide_side_toolbar%22%3A%220%22%2C%22allow_symbol_change%22%3A%221%22%2C%22save_image%22%3A%220%22%2C%22studies%22%3A%5B%5D%2C%22theme%22%3A%22dark%22%2C%22style%22%3A%221%22%2C%22timezone%22%3A%22Etc%2FUTC%22%2C%22withdateranges%22%3A%221%22%7D"
          className="w-full h-full border-0"
          allowFullScreen
        />
      </div>
    </div>
  );
}
