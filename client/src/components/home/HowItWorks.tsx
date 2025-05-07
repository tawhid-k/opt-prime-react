import analyticsDashboard from "../../assets/analytics-dashboard.svg";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Deep Analysis",
      description: "Our AI algorithms collect and analyze your current landing page performance, visitor behavior, and industry benchmarks to identify key areas for improvement."
    },
    {
      number: 2,
      title: "Strategic Planning",
      description: "Based on the analysis, we develop a customized optimization strategy focusing on design, content, and technical enhancements prioritized by impact."
    },
    {
      number: 3,
      title: "Implementation",
      description: "Our team implements the recommended changes efficiently, ensuring a seamless transition without disrupting your ongoing marketing efforts."
    },
    {
      number: 4,
      title: "Continuous Optimization",
      description: "We monitor results in real-time, making data-driven adjustments to continuously improve performance and maximize your ROI."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Our <span className="gradient-text">AI Process</span> Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A data-driven approach that delivers consistent results across all types of landing pages
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="space-y-10">
              {steps.map((step) => (
                <div key={step.number} className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <img className="rounded-xl shadow-xl mx-auto" 
                src={analyticsDashboard} 
                alt="AI analytics dashboard for landing page optimization" />
          </div>
        </div>
      </div>
    </section>
  );
}
