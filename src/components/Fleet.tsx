import { Link } from "react-router-dom";
import { Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const fleetItems = [
  {
    category: "Bulk Transport Vehicles",
    items: ["10m³ Tipper Trucks", "34-Ton Side Tippers", "40-Ton Side Tippers"],
    color: "bg-accent",
  },
  {
    category: "Construction & Earthmoving Equipment",
    items: ["TLBs", "Excavators", "Rollers", "Compactors", "Graders"],
    color: "bg-primary",
  },
  {
    category: "Passenger Transport Vehicles",
    items: ["22-Seater Mine-Spec Buses", "Executive Vehicles"],
    color: "bg-accent",
  },
  {
    category: "Support Fleet",
    items: ["Water Bowsers", "Diesel Bowsers", "Low-bed Trailers"],
    color: "bg-primary",
  },
];

const features = [
  "Mine-compliant & safety certified",
  "Fully maintained fleet",
  "Safety audited",
  "Operator supported",
  "Short turnaround times",
  "Competitive rates",
];

interface FleetProps {
  showCTA?: boolean;
}

export const Fleet = ({ showCTA = true }: FleetProps) => {
  return (
    <section className="section-padding bg-primary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">Our Fleet</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mt-2 mb-4">
            Fleet Strength You Can Rely On
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            STE owns and operates a diverse range of equipment tailored to the construction, mining, and municipal
            sectors. All assets are rigorously maintained, mine-compliant, and operator-supported.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Fleet Categories */}
          <div className="space-y-6">
            {fleetItems.map((fleet) => (
              <div
                key={fleet.category}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20"
              >
                <h3 className="text-xl font-bold text-primary-foreground mb-4 flex items-center">
                  <span className={`w-3 h-3 ${fleet.color} rounded-full mr-3`} />
                  {fleet.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {fleet.items.map((item) => (
                    <span
                      key={item}
                      className="bg-primary-foreground/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Features & CTA */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-primary-foreground mb-6">Why Choose Our Fleet?</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-center text-primary-foreground">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                  {feature}
                </li>
              ))}
            </ul>

            {showCTA && (
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="accent" size="xl" asChild>
                  <Link to="/contact">Request Equipment</Link>
                </Button>
                <Button variant="hero" size="xl" className="group">
                  <Download className="mr-2 h-5 w-5" />
                  Download Fleet Brochure
                </Button>
              </div>
            )}
          </div>
        </div>

        {!showCTA && (
          <div className="text-center mt-12">
            <Button variant="accent" size="xl" asChild>
              <Link to="/fleet" className="group">
                View Full Fleet
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
