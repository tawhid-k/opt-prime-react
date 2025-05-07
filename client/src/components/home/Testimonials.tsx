import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote: "OptimizePrimeAI transformed our landing page performance in just two weeks. Our conversion rate increased by 42% and our cost per acquisition dropped significantly. The AI-driven insights were eye-opening.",
    name: "Michael Johnson",
    title: "CMO, TechVision Inc.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120"
  },
  {
    quote: "As a small business, every marketing dollar counts. OptimizePrimeAI helped us maximize our ROI by transforming our landing page. We saw a 28% increase in lead quality and a 35% boost in conversions.",
    name: "Sarah Williams",
    title: "Founder, Bright Solutions",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120"
  },
  {
    quote: "The ongoing optimization package has been a game-changer for our e-commerce business. In just 3 months, our product landing pages have seen a 52% increase in conversions. The continuous A/B testing approach really works.",
    name: "David Chen",
    title: "CEO, StyleHub",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120"
  }
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToTestimonial = (index: number) => {
    if (containerRef.current && containerRef.current.children[index]) {
      const testimonial = containerRef.current.children[index] as HTMLElement;
      containerRef.current.scrollTo({
        left: testimonial.offsetLeft - containerRef.current.offsetLeft,
        behavior: "smooth"
      });
      setCurrentIndex(index);
    }
  };

  const nextTestimonial = () => {
    if (currentIndex < testimonials.length - 1) {
      scrollToTestimonial(currentIndex + 1);
    }
  };

  const prevTestimonial = () => {
    if (currentIndex > 0) {
      scrollToTestimonial(currentIndex - 1);
    }
  };

  // Handle scroll events to update current index
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollLeft, offsetWidth } = containerRef.current;
        const newIndex = Math.round(scrollLeft / offsetWidth);
        if (newIndex !== currentIndex) {
          setCurrentIndex(newIndex);
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [currentIndex]);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our <span className="gradient-text">Clients</span> Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how OptimizePrimeAI has transformed businesses and delivered exceptional results
          </p>
        </div>
        
        <div className="relative">
          <div 
            ref={containerRef}
            className="testimonial-carousel flex overflow-x-auto pb-8 -mx-4 px-4 gap-6 hide-scrollbar"
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="testimonial-card flex-shrink-0 w-full md:w-1/2 lg:w-1/3 bg-white rounded-xl shadow-lg p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="text-accent">
                    {Array(5).fill(0).map((_, i) => (
                      <Star key={i} className="inline-block w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 italic mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <img 
                    className="w-12 h-12 rounded-full mr-4" 
                    src={testimonial.image}
                    alt={`${testimonial.name} testimonial`} 
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              disabled={currentIndex === 0}
              className={`w-12 h-12 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-50 focus:outline-none transition ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            <button 
              onClick={nextTestimonial}
              disabled={currentIndex === testimonials.length - 1}
              className={`w-12 h-12 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-50 focus:outline-none transition ${currentIndex === testimonials.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
