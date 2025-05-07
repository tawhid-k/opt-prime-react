import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScroll } from "@/hooks/use-scroll";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#benefits", label: "Benefits" },
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrolled = useScroll(50);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (mobileMenuOpen && !target.closest("#mobile-menu") && !target.closest("#mobile-menu-button")) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/95 shadow-sm" : "bg-transparent"}`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-3xl font-bold gradient-text">
              OptimizePrime<span className="text-accent">AI</span>
            </div>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="nav-link font-medium text-gray-700 hover:text-primary transition"
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
          <div className="hidden md:block">
            <Button 
              className="bg-accent hover:bg-accent/90" 
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
          <div className="md:hidden">
            <button 
              id="mobile-menu-button" 
              className="text-gray-500 hover:text-gray-600 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div 
          id="mobile-menu" 
          className={`md:hidden mt-4 pb-2 ${mobileMenuOpen ? 'block' : 'hidden'}`}
        >
          <ul className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  className="block py-2 font-medium text-gray-700 hover:text-primary transition"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(link.href);
                    if (element) {
                      const yOffset = -80;
                      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                    closeMobileMenu();
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button 
                className="bg-accent hover:bg-accent/90 w-full" 
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
                    closeMobileMenu();
                  }}
                >
                  Get Started
                </a>
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
