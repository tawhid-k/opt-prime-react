import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does it take to see results?",
    answer: "Most clients see initial improvements within 2-4 weeks after implementation. However, the Full Optimization and Ongoing Optimization packages deliver more comprehensive and sustained results over time. The Quick Wins package can identify immediate opportunities that can be implemented quickly for fast impact."
  },
  {
    question: "How is AI used in your optimization process?",
    answer: "Our AI algorithms analyze visitor behavior patterns, heatmaps, and user sessions to identify optimization opportunities that human analysis might miss. The AI also helps prioritize changes based on potential impact, analyzes A/B test results to determine winning variations, and continuously learns from data to improve future recommendations."
  },
  {
    question: "Do you work with specific industries or any type of business?",
    answer: "We work with businesses across various industries, including SaaS, e-commerce, professional services, healthcare, education, and more. Our optimization methodology adapts to the specific needs and goals of each industry, while our AI systems have been trained on data from diverse market sectors to ensure relevance for your specific business context."
  },
  {
    question: "What if I don't have existing analytics data?",
    answer: "No problem. We can set up the necessary analytics and tracking tools as part of our service. For businesses without existing data, we start with industry benchmarks and best practices while simultaneously collecting new data. As data accumulates, our AI system becomes more personalized to your specific users and business needs."
  },
  {
    question: "How do you measure success?",
    answer: "We establish clear KPIs at the beginning of our engagement based on your business goals. These typically include conversion rate, bounce rate, time on page, engagement metrics, and ultimately ROI. We provide regular reports showing progress on these metrics, along with insights on what's working and what can be further improved."
  }
];

export default function FaqSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked <span className="gradient-text">Questions</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to the most common questions about our services
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-xl shadow-md p-6 card-hover border-none"
              >
                <AccordionTrigger className="text-xl font-semibold text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="mt-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
