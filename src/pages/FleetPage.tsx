import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Fleet } from "@/components/Fleet";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Wrench, Clock, CheckCircle, Phone, Award, Users } from "lucide-react";

const fleetFeatures = [
  {
    icon: Shield,
    title: "Mine Compliant",
    description: "All vehicles meet strict mining industry safety and compliance standards.",
  },
  {
    icon: Wrench,
    title: "Well Maintained",
    description: "Regular servicing and maintenance ensures maximum uptime and reliability.",
  },
  {
    icon: Clock,
    title: "Available 24/7",
    description: "Round-the-clock availability for emergency and critical project needs.",
  },
  {
    icon: Users,
    title: "Skilled Operators",
    description: "Experienced and certified operators available with equipment hire.",
  },
];

const fleetStats = [
  { value: "100+", label: "Total Vehicles" },
  { value: "98%", label: "Uptime Rate" },
  { value: "24/7", label: "Availability" },
  { value: "15+", label: "Equipment Types" },
];

const equipmentCategories = [
  {
    category: "Earthmoving Equipment",
    items: [
      { name: "Excavators", specs: "Various sizes from 8-ton to 45-ton" },
      { name: "Front-end Loaders", specs: "Wheel loaders for material handling" },
      { name: "TLBs", specs: "Tractor-Loader-Backhoes for versatile operations" },
      { name: "Graders", specs: "Motor graders for road construction" },
    ],
  },
  {
    category: "Tipper Trucks",
    items: [
      { name: "Side Tippers", specs: "34-ton capacity for bulk materials" },
      { name: "End Tippers", specs: "For precise material placement" },
      { name: "Link Trucks", specs: "For high-volume transport operations" },
    ],
  },
  {
    category: "Support Equipment",
    items: [
      { name: "Water Bowsers", specs: "Dust suppression and water delivery" },
      { name: "Compactors", specs: "Soil and asphalt compaction" },
      { name: "Low-bed Trailers", specs: "Equipment transportation" },
    ],
  },
  {
    category: "Passenger Vehicles",
    items: [
      { name: "22-Seater Buses", specs: "Mine-compliant crew transport" },
      { name: "Minibuses", specs: "Smaller group transportation" },
    ],
  },
];

const maintenanceProcess = [
  "Daily pre-trip inspections by trained operators",
  "Weekly safety and mechanical checks",
  "Monthly comprehensive servicing",
  "Quarterly major component inspections",
  "Annual compliance certifications",
  "Real-time GPS tracking and monitoring",
];

const FleetPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHeader
          badge="Our Fleet"
          title="Fleet Strength You Can Rely On"
          subtitle="Mine-compliant, fully maintained equipment ready for your project requirements."
        />
        <Fleet showCTA={false} />

        {/* Fleet Stats */}
        <section className="py-16 bg-primary">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {fleetStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-primary-foreground/80 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fleet Features */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                Why Choose Our Fleet
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                Fleet Excellence Standards
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {fleetFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-card p-6 rounded-xl border border-border shadow-md text-center hover:shadow-lg transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-4">
                    <feature.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipment Categories */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                Equipment Inventory
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                Complete Equipment List
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {equipmentCategories.map((category) => (
                <div
                  key={category.category}
                  className="bg-card p-8 rounded-xl border border-border shadow-md"
                >
                  <h3 className="text-xl font-bold text-foreground mb-6 pb-4 border-b border-border">
                    {category.category}
                  </h3>
                  <div className="space-y-4">
                    {category.items.map((item) => (
                      <div key={item.name} className="flex justify-between items-start">
                        <div>
                          <span className="font-semibold text-foreground">{item.name}</span>
                          <p className="text-muted-foreground text-sm">{item.specs}</p>
                        </div>
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Maintenance Program */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                  Maintenance Program
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                  Keeping Our Fleet in Peak Condition
                </h2>
                <p className="text-muted-foreground mb-8">
                  Our comprehensive maintenance program ensures maximum uptime and reliability for all equipment. Every vehicle undergoes regular inspections and servicing.
                </p>
                <ul className="space-y-4">
                  {maintenanceProcess.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card p-8 rounded-2xl border border-border shadow-lg">
                <Award className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Industry Certified
                </h3>
                <p className="text-muted-foreground mb-6">
                  All our equipment meets or exceeds industry standards and certifications required for mining and construction operations.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-foreground">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Mine Health & Safety compliant
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Regular third-party audits
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Operator certification verified
                  </li>
                </ul>
                <Button variant="accent" size="lg" className="w-full" asChild>
                  <Link to="/contact">
                    Request Equipment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-accent">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
              Need Equipment for Your Project?
            </h2>
            <p className="text-accent-foreground/90 text-lg max-w-2xl mx-auto mb-8">
              Contact us for fleet availability and competitive hire rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="xl" asChild>
                <Link to="/contact" className="group">
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="bg-transparent border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10" asChild>
                <a href="tel:+27123456789">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us Now
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FleetPage;
