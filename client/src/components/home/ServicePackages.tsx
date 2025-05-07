import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServicePackages() {
  const packages = [
    {
      title: "Quick Wins Audit",
      price: "$999",
      description: "An in-depth analysis of your existing landing page to identify immediate, high-impact optimization opportunities.",
      features: [
        "AI-powered heatmap analysis",
        "User session recordings review",
        "Performance diagnostics",
        "UX/UI improvement suggestions",
        "Actionable recommendations report"
      ],
      popular: false
    },
    {
      title: "Full Optimization",
      price: "$2,499",
      description: "Comprehensive optimization service including analysis, strategy, implementation, and monitoring.",
      features: [
        "Everything in Quick Wins package",
        "A/B testing recommendations",
        "Copy and content optimization",
        "Implementation of changes",
        "30-day performance monitoring"
      ],
      popular: true
    },
    {
      title: "Ongoing Optimization",
      price: "$1,499/mo",
      description: "Continuous optimization with our AI engine for sustained improvements and maximum ROI.",
      features: [
        "Initial Full Optimization package",
        "Continuous A/B testing",
        "Monthly performance reports",
        "Monthly strategy calls",
        "Unlimited optimizations"
      ],
      popular: false
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Service <span className="gradient-text">Packages</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect optimization package for your business needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl card-hover ${pkg.popular ? 'relative transform scale-105' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-accent text-white px-4 py-1 rounded-bl-lg font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{pkg.title}</h3>
                <div className="text-accent text-3xl font-bold mb-6">{pkg.price}</div>
                <p className="text-gray-600 mb-6">
                  {pkg.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={pkg.popular ? "w-full bg-accent hover:bg-accent/90" : "w-full bg-white border-2 border-primary text-primary hover:bg-primary/5"} 
                  asChild
                >
                  <a 
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector("#contact");
                      if (element) {
                        const yOffset = -80;
                        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                        window.scrollTo({ top: y, behavior: "smooth" });
                      }
                    }}
                  >
                    Get Started
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Not sure which package is right for you?</p>
          <a 
            href="#contact" 
            className="inline-flex items-center text-accent font-medium"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector("#contact");
              if (element) {
                const yOffset = -80;
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
          >
            <span>Schedule a free consultation</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
