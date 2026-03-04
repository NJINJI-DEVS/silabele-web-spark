import { Link } from "react-router-dom";
import { Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const fleetItems = [
{
  category: "Bulk Transport Vehicles",
  items: ["10m³ Tipper Trucks", "34-Ton Side Tippers", "40-Ton Side Tippers"],
  color: "bg-accent"
},
{
  category: "Plant & Machinery",
  items: ["TLBs (Tractor Loader Backhoes)", "Excavators (Various Sizes)", "Front-End Loaders", "Graders", "Rollers (Bomag & Others)"],
  color: "bg-primary"
},
{
  category: "Concrete Equipment",
  items: ["Concrete Mixer Trucks", "Concrete Pumps", "Batching Plants"],
  color: "bg-accent"
},
{
  category: "Specialized Vehicles",
  items: ["Water Bowsers", "Low-Bed Trucks", "Flatbed Trucks", "Cherry Pickers"],
  color: "bg-primary"
},
];

interface FleetProps {
  showCTA?: boolean;
}

export const Fleet = ({ showCTA = true }: FleetProps) => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Our Equipment
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Fleet & Plant Hire
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A fleet of 50+ well-maintained vehicles and machinery ready for any project.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fleetItems.map((fleet) => (
            <div
              key={fleet.category}
              className="bg-card rounded-xl shadow-md border border-border overflow-hidden card-hover"
            >
              <div className={`${fleet.color} px-6 py-4`}>
                <h3 className="font-bold text-primary-foreground text-lg">
                  {fleet.category}
                </h3>
              </div>
              <ul className="p-6 space-y-3">
                {fleet.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {showCTA && (
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
