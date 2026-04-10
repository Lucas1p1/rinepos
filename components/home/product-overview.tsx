<<<<<<< HEAD
import { UtensilsCrossed, ShoppingBag, Building2 } from "lucide-react"

export function ProductOverview() {
  const products = [
    {
      icon: UtensilsCrossed,
=======
export function ProductOverview() {
  const products = [
    {
      icon: "🍽️",
>>>>>>> d2463edfe2465a8a7a0462b9bb22f90ffdff1367
      title: "Restaurant",
      description: "Point of Sale, Kitchen Display, Digital Menus, Table Reservation",
    },
    {
<<<<<<< HEAD
      icon: ShoppingBag,
=======
      icon: "🛍️",
>>>>>>> d2463edfe2465a8a7a0462b9bb22f90ffdff1367
      title: "Retail",
      description: "Inventory Management, Sales Analytics, Multi-store Support",
    },
    {
<<<<<<< HEAD
      icon: Building2,
=======
      icon: "🏨",
>>>>>>> d2463edfe2465a8a7a0462b9bb22f90ffdff1367
      title: "Hotel",
      description: "Guest Management, Room Service, Billing & Analytics",
    },
  ]

  return (
<<<<<<< HEAD
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">All-in-One Business Software</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
=======
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">All-in-One Business Software</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
>>>>>>> d2463edfe2465a8a7a0462b9bb22f90ffdff1367
            Designed specifically for different industries with powerful features tailored to your needs
          </p>
        </div>

<<<<<<< HEAD
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {products.map((product) => {
            const Icon = product.icon
            return (
              <div
                key={product.title}
                className="p-8 border border-slate-200 dark:border-slate-700 rounded-2xl hover:shadow-xl dark:hover:shadow-blue-900/20 transition-all hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/10 mb-5">
                  <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{product.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6 text-sm leading-relaxed">{product.description}</p>
                <a
                  href={`/${product.title.toLowerCase()}-pos`}
                  className="text-blue-600 dark:text-blue-400 font-semibold inline-flex items-center gap-1 text-sm hover:gap-2 transition-all"
                >
                  Learn More →
                </a>
              </div>
            )
          })}
=======
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.title}
              className="p-8 border border-slate-200 dark:border-slate-700 rounded-2xl hover:shadow-xl dark:hover:shadow-blue-900/20 transition-all hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{product.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{product.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">{product.description}</p>
              <a
                href={`/${product.title.toLowerCase()}-pos`}
                className="text-blue-600 dark:text-blue-400 font-semibold hover:gap-2 inline-flex items-center transition"
              >
                Learn More →
              </a>
            </div>
          ))}
>>>>>>> d2463edfe2465a8a7a0462b9bb22f90ffdff1367
        </div>
      </div>
    </section>
  )
<<<<<<< HEAD
}
=======
}
>>>>>>> d2463edfe2465a8a7a0462b9bb22f90ffdff1367
