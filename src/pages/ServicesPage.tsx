import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { SEOHead } from "@/components/SEOHead";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Services } from "@/components/Services";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Phone, FileText, Cog, Truck, Users, ClipboardCheck } from "lucide-react";

// Service images
import roadEquipment from "@/assets/road-equipment-new.jpg";
import drainageChannel from "@/assets/drainage-channel.jpg";
import concreteSlab from "@/assets/concrete-slab-work.jpg";
import industrialBuilding from "@/assets/industrial-building-new.jpg";
import concretePouring from "@/assets/concrete-pouring-new.jpg";
import completedBuilding from "@/assets/completed-building-aerial.jpg";

const processSteps = [
  {
    icon: Phone,
    step: "01",
    title: "Initial Consultation",
    description: "Contact us to discuss your project requirements, timeline, and specifications.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Site Assessment",
    description: "Our technical team conducts an on-site evaluation to understand project scope.",
  },
  {
    icon: ClipboardCheck,
    step: "03",
    title: "Proposal & Quote",
    description: "Receive a detailed proposal with transparent pricing and project timeline.",
  },
  {
    icon: Cog,
    step: "04",
    title: "Project Execution",
    description: "Our experienced team delivers your project with quality and efficiency.",
  },
];

const serviceDetails = [
  {
    title: "Bulk Transport Logistics",
    features: [
      "Mining-focused bulk transportation",
      "Side tippers (34-ton, 40-ton)",
      "Reliable scheduled haulage",
      "Compliant operations",
      "Materials transport",
      "Mine-to-plant logistics",
    ],
  },
  {
    title: "Construction Services",
    features: [
      "Civil Engineering",
      "General Building",
      "Roadworks (asphalt-focused)",
      "Site preparation",
      "Stormwater drainage systems",
      "Infrastructure development",
    ],
  },
  {
    title: "Plant & Equipment Hire",
    features: ["TLBs", "Excavators", "Rollers", "Compactors", "Water bowsers", "Graders"],
  },
  {
    title: "Executive Shuttles",
    features: [
      "22-seater mine-compliant buses",
      "Executive transport",
      "Crew transportation",
      "Corporate shuttles",
      "Staff transportation",
      "Daily shift transport",
    ],
  },
  {
    title: "Technical Support Consulting",
    features: ["Project advisory", "Infrastructure support", "Logistics support", "On-site planning"],
  },
];

const industries = [
  { icon: Cog, name: "Mining", description: "Plant hire and earthworks for mining operations" },
  { icon: Truck, name: "Logistics", description: "Freight and material transportation" },
  { icon: Users, name: "Municipal", description: "Infrastructure and community projects" },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Services | Civil Engineering, Plant Hire, Transport | SILABELE"
        description="Comprehensive construction services including civil engineering, plant hire, bulk transport logistics, executive shuttles, and technical consulting. CIDB graded, mine-compliant."
        keywords="civil engineering services, plant hire South Africa, bulk transport logistics, construction services Rustenburg, earthmoving equipment hire, road construction"
        canonicalPath="/services"
      />
      <Header />
      <main>
        <PageHeader
          badge="Our Services"
          title="Comprehensive Construction Solutions"
          subtitle="We serve public and private sector clients with a full suite of services that meet technical, regulatory, and logistical demands."
        />
        <Services showAll={true} showHeader={false} />

        {/* Services Gallery */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">Our Work in Action</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Service Gallery</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src={roadEquipment}
                  alt="Road construction equipment"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-primary-foreground font-bold">Road Construction</h3>
                    <p className="text-primary-foreground/80 text-sm">Chip spreading and surfacing</p>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src={drainageChannel}
                  alt="Stormwater drainage channel construction"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-primary-foreground font-bold">Stormwater Systems</h3>
                    <p className="text-primary-foreground/80 text-sm">Drainage infrastructure</p>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src={concretePouring}
                  alt="Concrete pouring from mixer truck"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-primary-foreground font-bold">Concrete Works</h3>
                    <p className="text-primary-foreground/80 text-sm">Foundation construction</p>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src={industrialBuilding}
                  alt="Completed industrial building"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-primary-foreground font-bold">Industrial Projects</h3>
                    <p className="text-primary-foreground/80 text-sm">Commercial building construction</p>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src={concreteSlab}
                  alt="Workers finishing concrete slab"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-primary-foreground font-bold">Concrete Finishing</h3>
                    <p className="text-primary-foreground/80 text-sm">Quality surface finishes</p>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src={completedBuilding}
                  alt="Completed building project aerial view"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-primary-foreground font-bold">Completed Buildings</h3>
                    <p className="text-primary-foreground/80 text-sm">Quality construction delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">What We Offer</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Detailed Service Breakdown</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {serviceDetails.map((service) => (
                <div
                  key={service.title}
                  className="bg-card p-8 rounded-xl border border-border shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">How We Work</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Our Project Process</h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                From initial consultation to project completion, we follow a structured approach to ensure success.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step) => (
                <div
                  key={step.step}
                  className="bg-card p-6 rounded-xl border border-border shadow-md text-center relative hover:shadow-lg transition-shadow"
                >
                  <span className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center text-sm">
                    {step.step}
                  </span>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-accent font-semibold uppercase tracking-wider text-sm">Industries</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">Sectors We Serve</h2>
                <p className="text-muted-foreground mb-8">
                  Our expertise spans multiple industries, delivering specialized solutions tailored to each sector's
                  unique requirements.
                </p>
                <div className="space-y-6">
                  {industries.map((industry) => (
                    <div key={industry.name} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <industry.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground">{industry.name}</h3>
                        <p className="text-muted-foreground text-sm">{industry.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-card p-8 rounded-2xl border border-border shadow-lg">
                <h3 className="text-2xl font-bold text-foreground mb-4">Need a Custom Solution?</h3>
                <p className="text-muted-foreground mb-6">
                  We understand that every project is unique. Contact us to discuss your specific requirements and
                  receive a tailored proposal.
                </p>
                <div className="space-y-4">
                  <Button variant="default" size="xl" className="w-full" asChild>
                    <Link to="/contact">
                      Request a Quote
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="xl" className="w-full" asChild>
                    <a href="tel:0861555058">
                      <Phone className="mr-2 h-5 w-5" />
                      0861-555-058
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-accent">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">Ready to Get Started?</h2>
            <p className="text-accent-foreground/90 text-lg max-w-2xl mx-auto mb-8">
              Let's discuss how our services can support your next project.
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

export default ServicesPage;
