const Hero = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
          Modern POS System for
          <span className="text-primary block">Your Business</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Streamline your operations with our cloud-based point of sale system. 
          Perfect for restaurants, retail stores, and service businesses.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary-hover transition-colors">
            Start Free Trial
          </button>
          <button className="border border-border text-foreground px-8 py-3 rounded-lg hover:bg-accent transition-colors">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;