import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Benefits from "@/components/home/Benefits";
import HowItWorks from "@/components/home/HowItWorks";
import ServicePackages from "@/components/home/ServicePackages";
import Testimonials from "@/components/home/Testimonials";
import CaseStudy from "@/components/home/CaseStudy";
import CtaSection from "@/components/home/CtaSection";
import ContactSection from "@/components/home/ContactSection";
import FaqSection from "@/components/home/FaqSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Benefits />
        <HowItWorks />
        <ServicePackages />
        <Testimonials />
        <CaseStudy />
        <CtaSection />
        <ContactSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
