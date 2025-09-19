import { CreditCard, BarChart3, Cloud, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <CreditCard className="h-12 w-12 text-primary" />,
      title: "Payment Processing",
      description: "Accept all major payment methods including cards, mobile payments, and cash."
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-primary" />,
      title: "Analytics & Reports",
      description: "Get detailed insights into your business with comprehensive reporting tools."
    },
    {
      icon: <Cloud className="h-12 w-12 text-primary" />,
      title: "Cloud-Based",
      description: "Access your POS system anywhere, anytime with our secure cloud infrastructure."
    },
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Secure & Reliable",
      description: "Bank-level security with 99.9% uptime guarantee for your peace of mind."
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need to Run Your Business
          </h2>
          <p className="text-xl text-muted-foreground">
            Powerful features designed to help your business grow
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-background p-6 rounded-lg shadow-sm border border-border">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;