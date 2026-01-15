import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Testimonials } from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselDots } from "@/components/ui/carousel";
import { ArrowRight, Building, Pickaxe, Building2, Factory, Users } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

// Project images
import concreteWork from "@/assets/concrete-work.jpg";
import roadConstruction from "@/assets/road-construction.jpg";
import roadPaving from "@/assets/road-paving.jpg";
import roadEquipment from "@/assets/road-equipment.jpg";
import roadProgress from "@/assets/road-development.jpg";
import foundationWork from "@/assets/foundation-work.jpg";
import aerialConstruction from "@/assets/aerial-construction.jpg";
import completedBuilding from "@/assets/completed-building.jpg";
import industrialBuilding from "@/assets/industrial-building.jpg";
import catExcavator from "@/assets/cat-excavator.jpg";
import steBrandedTrucks from "@/assets/ste-branded-trucks.jpg";
import kitchenFinishes from "@/assets/kitchen-finishes.jpg";

// Client logos
import glencore from "@/assets/clients/glencore.png";
import impalaPlatinum from "@/assets/clients/impala-platinum.jpg";
import pikitup from "@/assets/clients/pikitup.jpeg";
import royalBafokeng from "@/assets/clients/royal-bafokeng.jpg";
import groupFive from "@/assets/clients/group-five.png";
import wbho from "@/assets/clients/wbho.png";
import gep from "@/assets/clients/gep.png";
import socialDevelopment from "@/assets/clients/social-development.jpg";

const clients = [
  { name: "Glencore", sector: "Mining", logo: glencore },
  { name: "Pikitup", sector: "Municipal", logo: pikitup },
  { name: "Royal Bafokeng Holdings", sector: "Mining", logo: royalBafokeng },
  { name: "Impala Platinum", sector: "Mining", logo: impalaPlatinum },
  { name: "Group Five", sector: "Construction", logo: groupFive },
  { name: "WBHO", sector: "Construction", logo: wbho },
  { name: "GEP", sector: "Government", logo: gep },
  { name: "Dept. of Health & Social Development", sector: "Government", logo: socialDevelopment },
];

const sectors = [
  { icon: Pickaxe, name: "Mining", description: "Earthworks, transport, and plant hire for mining operations" },
  { icon: Building, name: "Municipal", description: "Waste management and infrastructure development" },
  { icon: Building2, name: "Government", description: "Public works and community development" },
  { icon: Factory, name: "Private Sector", description: "Construction and logistics support" },
];

const stats = [
  { value: "200+", label: "Projects Completed" },
  { value: "15+", label: "Years Experience" },
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
            <div className="grid grid-cols-2 gap-8">
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
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2500,
                  stopOnInteraction: false,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {clients.map((client) => (
                  <CarouselItem key={client.name} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <div className="group flex flex-col items-center gap-3 p-6 bg-card rounded-xl border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 h-full">
                      <div className="w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform overflow-hidden">
                        <img 
                          src={client.logo} 
                          alt={`${client.name} logo`}
                          className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                      <span className="text-foreground font-heading font-semibold text-sm text-center">
                        {client.name}
                      </span>
                      <span className="text-muted-foreground text-xs">{client.sector}</span>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-4" />
              <CarouselNext className="hidden md:flex -right-4" />
              <CarouselDots />
            </Carousel>
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
              <div className="group relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={aerialConstruction} 
                  alt="Aerial view of construction site" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-primary-foreground font-bold">Site Operations</h3>
                    <p className="text-primary-foreground/80 text-sm">Large-scale concrete works</p>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={completedBuilding} 
                  alt="Completed building project" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-primary-foreground font-bold">Completed Buildings</h3>
                    <p className="text-primary-foreground/80 text-sm">Turnkey construction projects</p>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={industrialBuilding} 
                  alt="Industrial building construction" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-primary-foreground font-bold">Industrial Buildings</h3>
                    <p className="text-primary-foreground/80 text-sm">Commercial construction</p>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={catExcavator} 
                  alt="CAT excavator at work" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-primary-foreground font-bold">Earthmoving</h3>
                    <p className="text-primary-foreground/80 text-sm">Heavy equipment operations</p>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={steBrandedTrucks} 
                  alt="STE branded tipper trucks" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-primary-foreground font-bold">Materials Transport</h3>
                    <p className="text-primary-foreground/80 text-sm">STE-branded fleet</p>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={kitchenFinishes} 
                  alt="Interior finishing work" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-primary-foreground font-bold">Interior Finishes</h3>
                    <p className="text-primary-foreground/80 text-sm">Quality interior works</p>
                  </div>
                </div>
              </div>
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
