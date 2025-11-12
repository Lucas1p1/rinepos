export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-slate-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Grow Your Business With RinePOS
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
              Cloud-based and offline POS system designed for restaurants, retail stores, and hotels. Manage every
              aspect of your business with ease.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
                Discover More
              </button>
              <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-semibold rounded-lg transition">
                Watch Demo
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-blue-100 dark:bg-blue-900/30 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">💻</div>
                <p className="text-slate-600 dark:text-slate-300">POS System Dashboard</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
