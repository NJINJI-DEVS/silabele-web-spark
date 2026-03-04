import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Fleet } from "@/components/Fleet";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Wrench, Clock, CheckCircle, Phone, Award, Users } from "lucide-react";

// Fleet images
import fleetTrucks from "@/assets/fleet-trucks.jpg";
import fleetTippers from "@/assets/fleet-tippers.jpg";
import miningOperations from "@/assets/mining-operations.jpg";
import miningSite from "@/assets/mining-site.jpg";

const fleetFeatures = [
{
  icon: Shield,
  title: "Mine Compliant",
  description: "All vehicles meet strict mining industry safety and compliance standards."
},
{
  icon: Wrench,
  title: "Fully Maintained",
  description: "Regular servicing and maintenance ensures maximum uptime and reliability."
},
{
  icon: Clock,
  title: "Safety Audited",
  description: "Regular safety audits and compliance certifications across all equipment."
},
{
  icon: Users,
  title: "Operator Supported",
  description: "Experienced and certified operators available with equipment hire."
}];


const fleetStats = [
{ value: "50+", label: "Total Vehicles" },
{ value: "24/7", label: "Availability" },
{ value: "15+", label: "Equipment Types" },
{ value: "4", label: "Service Categories" }];


const equipmentCategories = [
{
  category: "Bulk Transport Vehicles",
  items: [
  { name: "Side Tippers", specs: "10m³ and 34-ton capacity for bulk materials" },
  { name: "Superlinks", specs: "For high-volume transport operations" },
  { name: "End Tippers", specs: "For precise material placement" }]

},
{
  category: "Construction & Earthmoving Equipment",
  items: [
  { name: "TLBs", specs: "Tractor-Loader-Backhoes for versatile operations" },
  { name: "Excavators", specs: "Various sizes from 8-ton to 45-ton" },
  { name: "Rollers", specs: "Soil and asphalt compaction" },
  { name: "Compactors", specs: "Ground preparation and finishing" },
  { name: "Graders", specs: "Motor graders for road construction" }]

},
{
  category: "Passenger Transport Vehicles",
  items: [
  { name: "22-Seater Buses", specs: "Mine-compliant crew transport" },
  { name: "Executive Vehicles", specs: "Corporate and VIP transportation" }]

}];


const maintenanceProcess = [
"Daily inspections",
"Weekly safety checks",
"Scheduled servicing",
"Compliance certifications"];


const FleetPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-[100px]">
        <PageHeader
          badge="Our Fleet"
          title="Fleet Strength You Can Rely On"
          subtitle="Mine-compliant, fully maintained equipment ready for your project requirements." />
        
        <Fleet showCTA={false} />

        {/* Fleet Stats */}
        <section className="bg-primary py-[20px]">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {fleetStats.map((stat) =>
              <div key={stat.label} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-primary-foreground/80 font-medium">
                    {stat.label}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Fleet Gallery */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                Our Equipment
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                Fleet Gallery
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src={fleetTrucks}
                  alt="STE truck fleet - Daewoo and Mercedes trucks"
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-primary-foreground font-bold text-lg">Truck Fleet</h3>
                    <p className="text-primary-foreground/80 text-sm">Modern trucks for all transport needs</p>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src={fleetTippers}
                  alt="STE side tipper trailers"
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-primary-foreground font-bold text-lg">Side Tippers</h3>
                    <p className="text-primary-foreground/80 text-sm">34-ton capacity for bulk materials</p>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src={miningOperations}
                  alt="STE equipment at mining operations"
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-primary-foreground font-bold text-lg">Mining Operations</h3>
                    <p className="text-primary-foreground/80 text-sm">Heavy-duty equipment for mining sites</p>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src={miningSite}
                  alt="STE fleet at mining stockpile"
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-primary-foreground font-bold text-lg">Site Operations</h3>
                    <p className="text-primary-foreground/80 text-sm">Fleet at work on active sites</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fleet Features */}
        <section className="section-padding bg-secondary">
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
              {fleetFeatures.map((feature) =>
              <div
                key={feature.title}
                className="bg-card p-6 rounded-xl border border-border shadow-md text-center hover:shadow-lg transition-shadow">
                
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-4">
                    <feature.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              )}
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
              {equipmentCategories.map((category) =>
              <div
                key={category.category}
                className="bg-card p-8 rounded-xl border border-border shadow-md">
                
                  <h3 className="text-xl font-bold text-foreground mb-6 pb-4 border-b border-border">
                    {category.category}
                  </h3>
                  <div className="space-y-4">
                    {category.items.map((item) =>
                  <div key={item.name} className="flex justify-between items-start">
                        <div>
                          <span className="font-semibold text-foreground">{item.name}</span>
                          <p className="text-muted-foreground text-sm">{item.specs}</p>
                        </div>
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      </div>
                  )}
                  </div>
                </div>
              )}
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
                  {maintenanceProcess.map((item, index) =>
                  <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  )}
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
                <a href="tel:0861555058">
                  <Phone className="mr-2 h-5 w-5" />
                  0861-555-058
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>);

};

export default FleetPage;