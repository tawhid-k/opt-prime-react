const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#benefits", label: "Benefits" },
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" }
];

const serviceLinks = [
  { href: "#services", label: "Quick Wins Audit" },
  { href: "#services", label: "Full Optimization" },
  { href: "#services", label: "Ongoing Optimization" },
  { href: "#", label: "Custom Solutions" },
  { href: "#", label: "Enterprise Services" }
];

const contactInfo = [
  { icon: "envelope", text: "info@optimizeprimeai.com" },
  { icon: "phone-alt", text: "(555) 123-4567" },
  { icon: "map-marker-alt", text: "123 Innovation Street,\nSan Francisco, CA 94103" }
];

const socialLinks = [
  { href: "#", name: "linkedin-in" },
  { href: "#", name: "twitter" },
  { href: "#", name: "facebook-f" },
  { href: "#", name: "instagram" }
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-2xl font-bold mb-6">
              OptimizePrime<span className="text-accent-400">AI</span>
            </div>
            <p className="text-gray-400 mb-6">
              AI-powered landing page optimization services that drive measurable results for businesses of all sizes.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.href} 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-accent hover:text-white transition"
                >
                  <i className={`fab fa-${social.name}`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      if (element) {
                        const yOffset = -80;
                        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                        window.scrollTo({ top: y, behavior: "smooth" });
                      }
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition"
                    onClick={(e) => {
                      if (link.href === '#') return;
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      if (element) {
                        const yOffset = -80;
                        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                        window.scrollTo({ top: y, behavior: "smooth" });
                      }
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  <i className={`fas fa-${item.icon} mt-1.5 mr-3 text-gray-400`}></i>
                  <span className="text-gray-400 whitespace-pre-line">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} OptimizePrimeAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
