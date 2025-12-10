import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Fleet", href: "#fleet" },
  { name: "Contact", href: "#contact" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:0861555058" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="h-4 w-4" />
              <span>0861 555 058</span>
            </a>
            <a href="mailto:bsilabele@silabele.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="h-4 w-4" />
              <span>bsilabele@silabele.com</span>
            </a>
          </div>
          <div className="text-sm opacity-90">
            100% Black-Owned | CIDB 7CE PE Graded
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`container-custom py-4 ${scrolled ? "" : "text-primary-foreground"}`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <img
              src={logo}
              alt="SILABELE Trading Enterprise"
              className="h-12 md:h-16 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`nav-link font-medium ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
              >
                {item.name}
              </a>
            ))}
            <Button variant="accent" size="lg" asChild>
              <a href="#contact">Request a Quote</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`h-6 w-6 ${scrolled ? "text-foreground" : "text-primary-foreground"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${scrolled ? "text-foreground" : "text-primary-foreground"}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background shadow-lg border-t border-border animate-fade-in-down">
            <div className="container-custom py-4 flex flex-col gap-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground font-medium py-2 hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button variant="accent" className="mt-2" asChild>
                <a href="#contact" onClick={() => setIsOpen(false)}>
                  Request a Quote
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
