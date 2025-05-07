import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section className="py-16 md:py-24 gradient-bg text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Landing Page Performance?</h2>
          <p className="text-xl opacity-90 mb-8">
            Join the hundreds of businesses that have boosted their conversions with OptimizePrimeAI's AI-powered optimization strategies.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
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
                Get Started Today
              </a>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
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
          </div>
        </div>
      </div>
    </section>
  );
}
