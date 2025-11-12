export function PricingFAQ() {
  const faqs = [
    {
      question: "Can I upgrade or downgrade my plan?",
      answer:
        "Yes, you can change your plan anytime. We'll prorate any charges for the remainder of your billing cycle.",
    },
    {
      question: "Is there a long-term contract?",
      answer: "No, all our plans are month-to-month with no long-term commitments. Cancel anytime.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, bank transfers, and digital payment methods.",
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, we offer a 14-day free trial for all plans. No credit card required to start.",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted dark:bg-muted">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-foreground dark:text-foreground mb-16">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="p-6 bg-card dark:bg-card rounded-xl border border-border dark:border-border"
            >
              <h3 className="text-xl font-bold text-foreground dark:text-foreground mb-3">{faq.question}</h3>
              <p className="text-muted-foreground dark:text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
