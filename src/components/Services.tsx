import { Link } from "react-router-dom";
import { Building2, Truck, HardHat, Bus, Settings, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Truck,
    title: "Bulk Transport Logistics",
    description:
      "Mining-focused bulk transportation with reliable, compliant, and scheduled haulage services using our modern fleet of side tippers and trucks.",
    features: [
      "Mining bulk transportation",
      "Side tippers (34-ton, 40-ton)",
      "Tippers (10m³)",
      "Reliable scheduled haulage",
      "Compliant operations",
    ],
  },
  {
    icon: Building2,
    title: "Construction Services",
    description:
      "Civil engineering and general building services including roadworks, infrastructure development, and site preparation—CIDB 7CE and 5GB graded.",
    features: ["Civil Engineering", "General Building", "Roadworks & asphalt", "Site preparation"],
  },
  {
    icon: HardHat,
    title: "Plant & Equipment Hire",
    description:
      "Own fleet. Fully maintained. Site-ready. Our equipment includes TLBs, excavators, rollers, compactors, water bowsers, and more.",
    features: ["TLBs", "Excavators", "Rollers", "Compactors"],
  },
  {
    icon: Bus,
    title: "Executive Shuttles",
    description:
      "Our 22-seater mine-compliant vehicles and executive transport support staff transport and long-distance travel for site crews and corporate groups.",
    features: ["22-seater mine buses", "Executive transport", "Staff transportation", "Professional drivers"],
  },
  {
    icon: Settings,
    title: "Technical Support Consulting",
    description:
      "Expert project advisory and infrastructure and logistics support built into our service offering—on-site planning and project problem-solving.",
    features: ["Project advisory", "Infrastructure support", "Logistics support", "On-site planning"],
  },
];

interface ServicesProps {
  showAll?: boolean;
  showHeader?: boolean;
}

export const Services = ({ showAll = true, showHeader = true }: ServicesProps) => {
  const displayedServices = showAll ? services : services.slice(0, 3);

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        {showHeader && (
          <div className="text-center mb-16">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">Our Services</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
              Comprehensive Infrastructure Solutions
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We serve public and private sector clients with a full suite of services that meet technical, regulatory,
              and logistical demands across multiple industries.
            </p>
          </div>
        )}

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service) => (
            <article key={service.title} className="service-card group">
              {/* Icon */}
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                <service.icon className="h-7 w-7 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-foreground">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <Link
                to="/contact"
                className="inline-flex items-center text-accent font-semibold hover:underline group/link"
              >
                Get a Quote
                <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          {!showAll ? (
            <Button variant="accent" size="xl" asChild>
              <Link to="/services" className="group">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          ) : (
            <Button variant="accent" size="xl" asChild>
              <Link to="/contact" className="group">
                Get a Custom Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};
