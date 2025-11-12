export function PricingPlans() {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses",
      features: ["Single location", "Basic POS system", "Inventory management", "Sales reports", "Customer support"],
      cta: "Start Free Trial",
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "For growing businesses",
      features: [
        "Up to 5 locations",
        "Advanced POS system",
        "Inventory management",
        "Customer analytics",
        "Staff management",
        "Priority support",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations",
      features: [
        "Unlimited locations",
        "Full feature access",
        "Custom integrations",
        "Dedicated account manager",
        "Training & onboarding",
        "24/7 support",
      ],
      cta: "Contact Sales",
    },
  ]

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background dark:bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground dark:text-foreground mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-muted-foreground dark:text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your business needs. Always flexible to scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`group rounded-2xl p-8 border transition-all duration-300 ${
                plan.highlighted
                  ? "border-blue-600 bg-gradient-to-br from-blue-50 to-blue-50/50 dark:from-blue-950/50 dark:to-blue-950/30 shadow-xl scale-105 hover:shadow-2xl hover:scale-110"
                  : "border-border dark:border-border bg-card dark:bg-card hover:shadow-lg hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:scale-105"
              }`}
            >
              {plan.highlighted && (
                <div className="mb-4 inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-full font-semibold">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-foreground dark:text-foreground mb-2">{plan.name}</h3>
              <p className="text-muted-foreground dark:text-muted-foreground mb-6">{plan.description}</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-foreground dark:text-foreground">{plan.price}</span>
                <span className="text-muted-foreground dark:text-muted-foreground">{plan.period}</span>
              </div>
              <button
                className={`w-full py-3 rounded-lg font-semibold transition duration-300 mb-8 ${
                  plan.highlighted
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg"
                    : "border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                }`}
              >
                {plan.cta}
              </button>
              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-foreground dark:text-foreground">
                    <span className="text-green-500 font-bold">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
