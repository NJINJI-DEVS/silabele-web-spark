import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Testimonials } from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building, Pickaxe, Building2, Factory, MapPin, Calendar, CheckCircle, Users } from "lucide-react";

// Project images
import concreteWork from "@/assets/concrete-work.jpg";
import roadConstruction from "@/assets/road-construction.jpg";
import roadPaving from "@/assets/road-paving.jpg";
import roadEquipment from "@/assets/road-equipment.jpg";
import roadProgress from "@/assets/road-progress.jpg";
import foundationWork from "@/assets/foundation-work.jpg";

const clients = [
  { 
    name: "Glencore", 
    sector: "Mining",
    initials: "G",
    color: "from-emerald-500 to-emerald-700",
  },
  { 
    name: "Pikitup", 
    sector: "Municipal",
    initials: "PK",
    color: "from-green-500 to-green-700",
  },
  { 
    name: "Moretele Local Municipality", 
    sector: "Government",
    initials: "MLM",
    color: "from-blue-500 to-blue-700",
  },
  { 
    name: "Royal Bafokeng Holdings", 
    sector: "Mining",
    initials: "RBH",
    color: "from-purple-500 to-purple-700",
  },
  { 
    name: "Impala Platinum", 
    sector: "Mining",
    initials: "IP",
    color: "from-slate-500 to-slate-700",
  },
  { 
    name: "Anglo American Platinum", 
    sector: "Mining",
    initials: "AAP",
    color: "from-red-500 to-red-700",
  },
];

const projects = [
  {
    title: "Mining Site Infrastructure Development",
    client: "Glencore",
    location: "North West Province",
    duration: "18 months",
    description: "Bulk earthworks and road construction for mining operations, including site preparation, haul road construction, and heavy materials transport. Delivered on schedule with zero safety incidents.",
    services: ["Civil Engineering", "Plant Hire", "Logistics"],
    highlights: ["500,000m³ earthworks", "15km haul roads", "Zero LTIs"],
  },
  {
    title: "Municipal Waste Management Logistics",
    client: "Pikitup",
    location: "Johannesburg, Gauteng",
    duration: "Ongoing",
    description: "Comprehensive waste transportation and logistics support for municipal waste management operations across Johannesburg metropolitan area.",
    services: ["Road Freight", "Logistics"],
    highlights: ["Daily operations", "Fleet of 20+ vehicles", "99% uptime"],
  },
  {
    title: "Community Infrastructure Development",
    client: "Moretele Local Municipality",
    location: "Moretele, North West",
    duration: "24 months",
    description: "Public infrastructure development including road construction, stormwater drainage, and building works for community facilities and schools.",
    services: ["Civil Engineering", "Building Construction"],
    highlights: ["12km roads", "3 community centers", "Local job creation"],
  },
  {
    title: "Platinum Mine Staff Transport",
    client: "Impala Platinum",
    location: "Rustenburg, North West",
    duration: "Ongoing contract",
    description: "Mine-compliant staff transport services with 22-seater buses for daily crew movement across multiple mine sites.",
    services: ["Passenger Transport"],
    highlights: ["500+ daily passengers", "Multiple shifts", "100% compliance"],
  },
  {
    title: "Tailings Dam Construction",
    client: "Anglo American Platinum",
    location: "Limpopo Province",
    duration: "12 months",
    description: "Earthworks and construction support for tailings dam expansion project, including material transport and site preparation.",
    services: ["Civil Engineering", "Plant Hire", "Road Freight"],
    highlights: ["Critical infrastructure", "Environmental compliance", "On-time delivery"],
  },
  {
    title: "Royal Bafokeng Infrastructure",
    client: "Royal Bafokeng Holdings",
    location: "Phokeng, North West",
    duration: "36 months",
    description: "Long-term infrastructure development partnership supporting community development projects and mining operations support.",
    services: ["Civil Engineering", "Plant Hire", "Logistics"],
    highlights: ["Community impact", "Skills transfer", "Long-term partnership"],
  },
];

const sectors = [
  { icon: Pickaxe, name: "Mining", count: "4+ Partners", description: "Earthworks, transport, and plant hire for mining operations" },
  { icon: Building, name: "Municipal", count: "3+ Projects", description: "Waste management and infrastructure development" },
  { icon: Building2, name: "Government", count: "2+ Contracts", description: "Public works and community development" },
  { icon: Factory, name: "Industrial", count: "5+ Clients", description: "Construction and logistics support" },
];

const stats = [
  { value: "200+", label: "Projects Completed" },
  { value: "15+", label: "Years Experience" },
  { value: "6+", label: "Major Partners" },
  { value: "100%", label: "Client Retention" },
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

        {/* Stats */}
        <section className="py-12 bg-primary">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
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

        {/* Sectors */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                Industries We Serve
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                Sector Expertise
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {sectors.map((sector) => (
                <div
                  key={sector.name}
                  className="bg-card p-6 rounded-xl shadow-md border border-border text-center card-hover"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-4">
                    <sector.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-bold text-foreground">{sector.name}</h3>
                  <p className="text-accent font-semibold text-sm mb-2">{sector.count}</p>
                  <p className="text-muted-foreground text-sm">{sector.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                Our Partners
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Our Valued Clients</h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Companies that trust us to deliver excellence on every project.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {clients.map((client) => (
                <div
                  key={client.name}
                  className="group flex flex-col items-center gap-3 p-6 bg-card rounded-xl border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${client.color} flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-110 transition-transform`}
                  >
                    {client.initials}
                  </div>
                  <span className="text-foreground font-heading font-semibold text-sm text-center">
                    {client.name}
                  </span>
                  <span className="text-muted-foreground text-xs">{client.sector}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Gallery */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                Our Work
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Project Gallery</h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                See our teams in action across various construction and civil engineering projects.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              <div className="group relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={foundationWork} 
                  alt="Foundation construction work" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-primary-foreground font-bold">Foundation Work</h3>
                    <p className="text-primary-foreground/80 text-sm">Structural concrete foundations</p>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={concreteWork} 
                  alt="Concrete pouring on site" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-primary-foreground font-bold">Concrete Works</h3>
                    <p className="text-primary-foreground/80 text-sm">Professional concrete placement</p>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={roadConstruction} 
                  alt="Road construction with roller and grader" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-primary-foreground font-bold">Road Construction</h3>
                    <p className="text-primary-foreground/80 text-sm">Earthworks and grading</p>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={roadPaving} 
                  alt="Road paving equipment" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-primary-foreground font-bold">Road Surfacing</h3>
                    <p className="text-primary-foreground/80 text-sm">Chip & spray operations</p>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={roadEquipment} 
                  alt="Road construction equipment in action" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-primary-foreground font-bold">Infrastructure Projects</h3>
                    <p className="text-primary-foreground/80 text-sm">Civil engineering excellence</p>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={roadProgress} 
                  alt="Road construction progress" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-primary-foreground font-bold">Road Development</h3>
                    <p className="text-primary-foreground/80 text-sm">Quality road infrastructure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                Case Studies
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Featured Projects</h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Delivering excellence across multiple sectors with measurable results.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="bg-card rounded-xl shadow-md border border-border overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="bg-primary/10 p-4">
                    <span className="text-sm text-accent font-semibold">{project.client}</span>
                    <h3 className="text-lg font-bold text-foreground mt-1">{project.title}</h3>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {project.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {project.duration}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {project.services.map((service) => (
                          <span
                            key={service}
                            className="bg-accent/10 text-accent px-2 py-1 rounded text-xs font-medium"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                      <div className="border-t border-border pt-3">
                        {project.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="inline-flex items-center gap-1 text-xs text-foreground mr-3"
                          >
                            <CheckCircle className="h-3 w-3 text-accent" />
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* CTA */}
        <section className="section-padding bg-accent">
          <div className="container-custom text-center">
            <Users className="h-12 w-12 text-accent-foreground mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-accent-foreground/90 text-lg max-w-2xl mx-auto mb-8">
              Join our growing list of satisfied clients. Let's discuss how we can support your next project.
            </p>
            <Button variant="default" size="xl" asChild>
              <Link to="/contact" className="group">
                Contact Us Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
