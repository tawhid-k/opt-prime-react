import { CheckCircle } from "lucide-react";
import growthChart from "../../assets/growth-chart.svg";

export default function CaseStudy() {
  const results = [
    { value: "67%", label: "Increase in Demo Signups" },
    { value: "41%", label: "Decrease in Bounce Rate" },
    { value: "3.2x", label: "ROI on Investment" }
  ];

  const strategies = [
    "Identified pain points in the user journey through AI-powered heatmap and session recording analysis",
    "Redesigned the form flow to reduce friction and streamline the signup process",
    "Optimized messaging to focus on key benefits and value propositions",
    "Implemented strategic social proof and trust indicators"
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success <span className="gradient-text">Stories</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from businesses that partnered with OptimizePrimeAI
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img className="rounded-xl shadow-xl mx-auto" 
                src={growthChart} 
                alt="SaaS company conversion rate growth chart" />
          </div>
          
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
              <span>Case Study</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">How SaaS Company Increased Demo Signups by 67%</h3>
            <p className="text-gray-600 mb-6">
              A growing B2B SaaS company was struggling with low conversion rates on their product demo landing page despite high traffic. Their challenge was turning visitors into qualified leads.
            </p>
            
            <div className="space-y-4 mb-8">
              {strategies.map((strategy, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-600">{strategy}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4 mb-6">
              {results.map((result, index) => (
                <div key={index} className="bg-primary/10 px-4 py-3 rounded-lg">
                  <div className="text-primary font-bold text-xl">{result.value}</div>
                  <div className="text-primary/80 text-sm">{result.label}</div>
                </div>
              ))}
            </div>
            
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
              <span>Read the full case study</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
