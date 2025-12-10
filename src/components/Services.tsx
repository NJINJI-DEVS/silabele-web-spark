import {
  Building2,
  Truck,
  HardHat,
  Bus,
  Settings,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Building2,
    title: "Civil Engineering & General Building",
    description:
      "From bulk earthworks to public infrastructure development, our construction team delivers safely and efficiently—CIDB 7CE PE and 5GB PE graded, NHBRC registered.",
    features: [
      "Bulk earthworks",
      "Road construction & maintenance",
      "Building works",
      "Site preparation",
    ],
  },
  {
    icon: HardHat,
    title: "Plant Hire",
    description:
      "Own fleet. Fully maintained. Site-ready. Our yellow metal and support fleet includes TLBs, tippers, superlinks, rollers, water bowsers, and more.",
    features: [
      "TLBs & Excavators",
      "10m³ Tipper Trucks",
      "34-Ton Superlinks",
      "Skilled Operators",
    ],
  },
  {
    icon: Truck,
    title: "Road Freight & Logistics",
    description:
      "We handle heavy haulage with precision. Our trucks and diesel bowsers support mining, municipal, and commercial logistics across regions.",
    features: [
      "Heavy-duty haulage",
      "Materials transport",
      "Mine-to-plant logistics",
      "Waste transportation",
    ],
  },
  {
    icon: Bus,
    title: "Passenger Transport (Mine-Spec)",
    description:
      "Our 22-seater mine-compliant vehicles support staff transport and long-distance travel for site crews, corporate groups, and event logistics.",
    features: [
      "22-seater mine buses",
      "Executive transport",
      "Airport transfers",
      "Professional drivers",
    ],
  },
  {
    icon: Settings,
    title: "Technical Consulting",
    description:
      "Clients benefit from expert advisory built into our service offering—on-site planning, fleet optimization, and project problem-solving.",
    features: [
      "On-site assessment",
      "Fleet optimization",
      "Cost-saving strategies",
      "Safety alignment",
    ],
  },
];

export const Services = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Comprehensive Infrastructure Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We serve public and private sector clients with a full suite of services
            that meet technical, regulatory, and logistical demands across multiple
            industries.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="service-card group"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                <service.icon className="h-7 w-7 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center text-sm text-foreground"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <a
                href="#contact"
                className="inline-flex items-center text-accent font-semibold hover:underline group/link"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="accent" size="xl" asChild>
            <a href="#contact" className="group">
              Get a Custom Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
