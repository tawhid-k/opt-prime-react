import {
  BarChart3,
  Gauge,
  Brain,
  Users,
  TrendingUp,
  SearchCheck
} from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      icon: <BarChart3 className="text-primary" />,
      title: "AI-Powered Insights",
      description: "Our advanced AI analyzes visitor behavior patterns to identify optimization opportunities that human analysis might miss."
    },
    {
      icon: <Gauge className="text-primary" />,
      title: "Rapid Optimization",
      description: "Implement changes and see results faster with our streamlined process, saving weeks compared to traditional methods."
    },
    {
      icon: <Brain className="text-primary" />,
      title: "Machine Learning",
      description: "Our systems continuously learn and adapt based on your visitors' behaviors, improving results over time."
    },
    {
      icon: <Users className="text-primary" />,
      title: "User-Centric Design",
      description: "We focus on creating experiences that resonate with your visitors, leading to higher engagement and conversions."
    },
    {
      icon: <TrendingUp className="text-primary" />,
      title: "Conversion Focused",
      description: "Every recommendation and change we suggest is designed to improve your bottom-line metrics that matter."
    },
    {
      icon: <SearchCheck className="text-primary" />,
      title: "ROI Driven",
      description: "Our approach ensures you get maximum return on your investment with measurable and sustainable results."
    }
  ];

  return (
    <section id="benefits" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose <span className="gradient-text">OptimizePrimeAI</span>?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered approach delivers better results through data-driven insights and continuous optimization
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-md card-hover">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
