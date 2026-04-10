import { Zap, Cloud, BarChart2, Shield, Smartphone, Link2 } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Process transactions instantly with our optimized system",
    },
    {
      icon: Cloud,
      title: "Cloud & Offline",
      description: "Works online and offline with automatic synchronization",
    },
    {
      icon: BarChart2,
      title: "Real-time Analytics",
      description: "Get insights into your business performance instantly",
    },
    {
      icon: Shield,
      title: "Secure",
      description: "Bank-level security for your data and transactions",
    },
    {
      icon: Smartphone,
      title: "Mobile Ready",
      description: "Manage your business from anywhere, anytime",
    },
    {
      icon: Link2,
      title: "Integrations",
      description: "Connect with your favorite business tools",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background dark:bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-foreground dark:text-foreground mb-12">
          Why Choose RinePOS?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group relative p-7 bg-card dark:bg-card rounded-2xl border border-border dark:border-border transition-all duration-300 hover:shadow-lg hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-12 h-12 mb-5 bg-gradient-to-br from-blue-500/10 to-blue-600/10 dark:from-blue-500/20 dark:to-blue-600/20 rounded-xl group-hover:from-blue-500/20 group-hover:to-blue-600/20 transition-all duration-300">
                  <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-foreground dark:text-foreground mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground dark:text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
