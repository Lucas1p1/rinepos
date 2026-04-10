export function HeroSection() {
  return (
    <section className="pt-12 pb-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-slate-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-5 leading-tight">
              Grow Your Business With RinePOS
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Cloud-based and offline POS system designed for restaurants, retail stores, and hotels. Manage every
              aspect of your business with ease.
            </p>
            <div className="flex gap-4">
              <button className="px-7 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition text-sm">
                Discover More
              </button>
              <button className="px-7 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-semibold rounded-lg transition text-sm">
                Watch Demo
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-blue-100 dark:bg-blue-900/30 rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                  </svg>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-sm font-medium">POS System Dashboard</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}