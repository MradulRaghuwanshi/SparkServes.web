import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      features: [
        "Up to 2 terminals",
        "Basic reporting",
        "Email support",
        "Cloud backup",
        "Mobile app access"
      ]
    },
    {
      name: "Professional",
      price: "$59",
      period: "/month",
      popular: true,
      features: [
        "Up to 5 terminals",
        "Advanced analytics",
        "Priority support",
        "Inventory management",
        "Staff management",
        "Custom reports"
      ]
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      features: [
        "Unlimited terminals",
        "Enterprise analytics",
        "24/7 phone support",
        "Multi-location management",
        "API access",
        "Custom integrations",
        "Dedicated account manager"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground">
            Choose the plan that fits your business needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-background p-8 rounded-lg shadow-sm border ${plan.popular ? 'border-primary ring-2 ring-primary/20' : 'border-border'} relative`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                plan.popular 
                  ? 'bg-primary text-primary-foreground hover:bg-primary-hover' 
                  : 'border border-border text-foreground hover:bg-accent'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;