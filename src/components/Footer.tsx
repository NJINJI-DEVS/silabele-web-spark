import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import logo from "@/assets/silabele-logo.png";

const footerLinks = {
  services: [
    { name: "Bulk Transport Logistics", href: "/services" },
    { name: "Construction Services", href: "/services" },
    { name: "Plant & Equipment Hire", href: "/services" },
    { name: "Executive Shuttles", href: "/services" },
    { name: "Technical Support Consulting", href: "/services" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Fleet", href: "/fleet" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-navy-dark text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img src={logo} alt="SILABELE Trading Enterprise" className="h-16 w-auto mb-6 brightness-0 invert" />
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              100% Black-owned, family-led infrastructure and logistics company delivering reliable solutions across
              South Africa since 2009.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contact Us</h4>
            <div className="space-y-4">
              <a
                href="tel:0861555058"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Phone className="h-5 w-5 text-accent" />
                0861-555-058
              </a>
              <a
                href="mailto:info@silabele.com"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Mail className="h-5 w-5 text-accent" />
                info@silabele.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {new Date().getFullYear()} SILABELE Trading Enterprise. All rights reserved.</p>
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
              <p>100% Black-Owned | CIDB 7CE | 5GB</p>
              <span className="hidden md:inline">|</span>
              <p>
                Designed by{" "}
                <a
                  href="https://www.njinjicom.africa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  NJINJICOM
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
