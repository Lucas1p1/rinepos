export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Restaurant Owner",
      text: "RinePOS has transformed how we manage our restaurant. Orders are faster, staff is happier, and customers see better service.",
      avatar: "👩‍💼",
    },
    {
      name: "Michael Chen",
      role: "Retail Manager",
      text: "The inventory management features alone have saved us thousands. Plus the analytics help us make smarter decisions.",
      avatar: "👨‍💼",
    },
    {
      name: "Emma Rodriguez",
      role: "Hotel Manager",
      text: "Managing multiple properties is now seamless. The integration between POS and reservations is incredible.",
      avatar: "👩‍💼",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-16">
          Trusted by Thousands of Businesses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="p-8 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
