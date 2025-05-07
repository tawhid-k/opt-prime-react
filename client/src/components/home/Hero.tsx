import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              <span className="block">Transform Your Landing Pages With</span>
              <span className="gradient-text">AI-Powered Optimization</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Boost conversions, engagement, and results with advanced AI analysis and optimization strategies tailored for your business.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white"
                asChild
              >
                <a 
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector("#services");
                    if (element) {
                      const yOffset = -80;
                      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                  }}
                >
                  Explore Services
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
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
                  Get Free Consultation
                </a>
              </Button>
            </div>
            <div className="mt-8 flex items-center space-x-2 text-gray-600">
              <div className="flex -space-x-2">
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120" alt="User avatar" />
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120" alt="User avatar" />
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120" alt="User avatar" />
              </div>
              <p><span className="font-medium">100+</span> business owners trust OptimizePrimeAI</p>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-64 h-64 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              <div className="absolute -bottom-8 -left-4 w-64 h-64 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              <img className="relative rounded-2xl shadow-xl mx-auto" 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&h=500" 
                  alt="Business professionals using AI tools for optimization" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
