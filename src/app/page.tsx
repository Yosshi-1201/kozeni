import newsData from '@/data/news.json';
import productData from '@/data/products.json';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      <header className="bg-slate-950 border-b border-cyan-800 p-6 sticky top-0 z-50 backdrop-blur-md bg-slate-950/80">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            KOZENI GADGET
          </h1>
          <span className="text-xs text-cyan-700 border border-cyan-900 px-2 py-1 rounded">
            Auto-Generated
          </span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Left Column: News Feed */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold mb-6 text-slate-300 flex items-center">
            <span className="w-2 h-8 bg-cyan-500 mr-3 rounded-full shadow-[0_0_10px_#06b6d4]"></span>
            Latest Headlines
          </h2>

          <div className="flex flex-col gap-4">
            {newsData.length === 0 ? (
              <p className="text-slate-500">No news available. Run the fetch script.</p>
            ) : (
              newsData.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-5 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-cyan-500 hover:bg-slate-800 transition-all group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-900/50">
                      {item.source}
                    </span>
                    <span className="text-xs text-slate-500">
                      {new Date(item.date).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                </a>
              ))
            )}
          </div>
        </div>

        {/* Right Column: Trending Products */}
        <div className="md:col-span-1">
          <h2 className="text-xl font-semibold mb-6 text-slate-300 flex items-center">
            <span className="w-2 h-8 bg-pink-500 mr-3 rounded-full shadow-[0_0_10px_#ec4899]"></span>
            Trending Gear
          </h2>

          <div className="grid gap-4">
            {productData.map((product) => (
              <a
                key={product.id}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,0.2)] transition-all group"
              >
                <div className="relative aspect-video w-full bg-slate-700">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  {product.discount && (
                    <span className="absolute top-2 right-2 bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded shadow-lg">
                      {product.discount}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-xs text-slate-400">{product.source}</span>
                    <span className="text-lg font-bold text-pink-400">¥{product.price}</span>
                  </div>
                  <h3 className="text-sm text-slate-200 line-clamp-2 leading-relaxed">
                    {product.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>

      <footer className="mt-12 border-t border-slate-800 bg-slate-950 py-8 text-center text-slate-600 text-sm">
        <p>&copy; 2026 Project Kozeni. Powered by Next.js & Automated Scripts.</p>
      </footer>
    </div>
  );
}
