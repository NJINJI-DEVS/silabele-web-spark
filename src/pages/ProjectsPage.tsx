import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building, Pickaxe, Building2, Factory } from "lucide-react";

const clients = [
  { name: "Glencore", sector: "Mining" },
  { name: "Pikitup", sector: "Municipal" },
  { name: "Moretele Local Municipality", sector: "Government" },
  { name: "Royal Bafokeng Holdings", sector: "Mining" },
  { name: "Impala Platinum", sector: "Mining" },
  { name: "Anglo American Platinum", sector: "Mining" },
];

const projects = [
  {
    title: "Mining Site Infrastructure",
    client: "Glencore",
    description: "Bulk earthworks and road construction for mining operations, including site preparation and heavy materials transport.",
    services: ["Civil Engineering", "Plant Hire", "Logistics"],
  },
  {
    title: "Municipal Waste Management",
    client: "Pikitup",
    description: "Comprehensive waste transportation and logistics support for municipal waste management operations.",
    services: ["Road Freight", "Logistics"],
  },
  {
    title: "Community Infrastructure Development",
    client: "Moretele Local Municipality",
    description: "Public infrastructure development including road construction and building works for community facilities.",
    services: ["Civil Engineering", "Building Construction"],
  },
  {
    title: "Staff Transport Solutions",
    client: "Impala Platinum",
    description: "Mine-compliant staff transport services with 22-seater buses for daily crew movement.",
    services: ["Passenger Transport"],
  },
];

const sectors = [
  { icon: Pickaxe, name: "Mining", count: "4+ Partners" },
  { icon: Building, name: "Municipal", count: "3+ Projects" },
  { icon: Building2, name: "Government", count: "2+ Contracts" },
  { icon: Factory, name: "Industrial", count: "5+ Clients" },
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHeader
          badge="Projects & Clients"
          title="Trusted by Industry Leaders"
          subtitle="We've partnered with some of South Africa's most recognized names in mining, engineering, and local government."
        />

        {/* Sectors */}
        <section className="py-12 bg-secondary">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {sectors.map((sector) => (
                <div
                  key={sector.name}
                  className="bg-card p-6 rounded-xl shadow-sm border border-border text-center card-hover"
                >
                  <sector.icon className="h-10 w-10 text-accent mx-auto mb-3" />
                  <h3 className="font-bold text-foreground">{sector.name}</h3>
                  <p className="text-muted-foreground text-sm">{sector.count}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Our Clients</h2>
              <p className="text-muted-foreground mt-2">Companies that trust us to deliver</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {clients.map((client) => (
                <div
                  key={client.name}
                  className="bg-secondary p-6 rounded-lg border border-border text-center hover:shadow-md transition-shadow"
                >
                  <p className="font-heading font-bold text-foreground">{client.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">{client.sector}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Featured Projects</h2>
              <p className="text-muted-foreground mt-2">
                Delivering excellence across multiple sectors
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="bg-card p-8 rounded-xl shadow-md border border-border card-hover"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm text-accent font-semibold">{project.client}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service) => (
                      <span
                        key={service}
                        className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button variant="accent" size="xl" asChild>
                <Link to="/contact" className="group">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
