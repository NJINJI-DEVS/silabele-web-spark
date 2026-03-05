import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Testimonials } from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselDots } from "@/components/ui/carousel";
import { ArrowRight, Building, Pickaxe, Building2, Factory, Users } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import Autoplay from "embla-carousel-autoplay";

// Project images - batch 1
import completedBuilding from "@/assets/completed-building-aerial.jpg";
import excavatorEarthworks from "@/assets/excavator-earthworks.jpg";
import concreteSlab from "@/assets/concrete-slab-work.jpg";
import drainageChannel from "@/assets/drainage-channel.jpg";
import concretePouring from "@/assets/concrete-pouring-new.jpg";
import industrialBuilding from "@/assets/industrial-building-new.jpg";
import roadEquipment from "@/assets/road-equipment-new.jpg";
import kitchenInterior from "@/assets/kitchen-interior.jpg";
import silabeleMining from "@/assets/silabele-mining-ops.jpg";
import teamPhoto from "@/assets/team-photo-new.jpg";

// Project images - batch 2
import rollerGrader from "@/assets/roller-grader-road.jpg";
import steExcavator from "@/assets/ste-excavator-kerbing.jpg";
import completedRoad from "@/assets/completed-rural-road.jpg";
import asphaltChip from "@/assets/asphalt-chip-spreader.jpg";
import aerialPump from "@/assets/aerial-concrete-pump.jpg";
import industrialRebar from "@/assets/industrial-rebar.jpg";
import asphaltPaving from "@/assets/asphalt-paving-crew.jpg";
import concreteFoundation from "@/assets/concrete-foundation-pour.jpg";
import stormwaterChannels from "@/assets/stormwater-channels.jpg";

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
{ name: "Dept. of Health & Social Development", sector: "Government", logo: socialDevelopment }];

const sectors = [
{ icon: Pickaxe, name: "Mining", description: "Earthworks, transport, and plant hire for mining operations" },
{ icon: Building, name: "Municipal", description: "Waste management and infrastructure development" },
{ icon: Building2, name: "Government", description: "Public works and community development" },
{ icon: Factory, name: "Private Sector", description: "Construction and logistics support" }];

const stats = [
{ value: "100+", label: "Projects Completed" },
{ value: "15+", label: "Years Experience" }];

const galleryImages = [
  { src: completedBuilding, alt: "Completed building aerial view", title: "Completed Buildings", desc: "Turnkey construction projects" },
  { src: asphaltPaving, alt: "Asphalt paving crew", title: "Asphalt Paving", desc: "Road surfacing operations" },
  { src: drainageChannel, alt: "Drainage channel construction", title: "Drainage & Infrastructure", desc: "Stormwater channel construction" },
  { src: concreteSlab, alt: "Concrete slab finishing", title: "Concrete Works", desc: "Industrial slab finishing" },
  { src: aerialPump, alt: "Aerial concrete pump on foundation", title: "Concrete Pumping", desc: "Aerial concrete placement" },
  { src: industrialBuilding, alt: "Industrial building", title: "Industrial Buildings", desc: "Commercial construction" },
  { src: excavatorEarthworks, alt: "CAT excavator earthworks", title: "Earthmoving", desc: "Heavy equipment operations" },
  { src: steExcavator, alt: "STE excavator kerbing", title: "Kerbing Works", desc: "Community road infrastructure" },
  { src: rollerGrader, alt: "Roller and grader on road", title: "Road Compaction", desc: "Roller and grader operations" },
  { src: concretePouring, alt: "Concrete mixer truck pouring", title: "Concrete Delivery", desc: "On-site concrete pouring" },
  { src: concreteFoundation, alt: "Foundation concrete pour", title: "Foundation Work", desc: "Structural concrete foundations" },
  { src: industrialRebar, alt: "Industrial rebar installation", title: "Steel Reinforcement", desc: "Industrial rebar preparation" },
  { src: roadEquipment, alt: "Road construction equipment", title: "Road Equipment", desc: "Chip spreading and surfacing" },
  { src: stormwaterChannels, alt: "Stormwater channel finishing", title: "Stormwater Channels", desc: "Drainage system construction" },
  { src: completedRoad, alt: "Completed rural road", title: "Completed Roads", desc: "Quality road delivery" },
  { src: asphaltChip, alt: "Chip spreader at dusk", title: "Chip Spreading", desc: "Road surface preparation" },
  { src: kitchenInterior, alt: "Interior finishing work", title: "Interior Finishes", desc: "Quality interior works" },
  { src: silabeleMining, alt: "Silabele loader at mining site", title: "Mining Operations", desc: "Silabele fleet at mining site" },
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Projects & Clients | Mining, Government, Private Sector | SILABELE"
        description="View SILABELE's completed projects and trusted clients including Glencore, Impala Platinum, Royal Bafokeng, WBHO, and government departments across South Africa."
        keywords="construction projects South Africa, mining clients, Glencore contractor, Impala Platinum, road construction projects, civil engineering portfolio"
        canonicalPath="/projects" />
      
      <Header />
      <main>
        <PageHeader badge="Projects & Clients" title="Trusted by Industry Leaders" subtitle="We've partnered with some of South Africa's most recognized names in mining, engineering, and local government." />

        {/* Stats */}
        <section className="py-12 bg-primary">
          <div className="container-custom">
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat) =>
              <div key={stat.label} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-1">{stat.value}</div>
                  <div className="text-primary-foreground/80 font-medium">{stat.label}</div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Sectors */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">Industries We Serve</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Sector Expertise</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {sectors.map((sector) =>
              <div key={sector.name} className="bg-card p-6 rounded-xl shadow-md border border-border text-center card-hover">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-4">
                    <sector.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-bold text-foreground">{sector.name}</h3>
                  <p className="text-muted-foreground text-sm">{sector.description}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">Our Partners</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Our Valued Clients</h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">Companies that trust us to deliver excellence on every project.</p>
            </div>
            <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 2500, stopOnInteraction: false })]} className="w-full">
              <CarouselContent className="-ml-4">
                {clients.map((client) =>
                <CarouselItem key={client.name} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <div className="group flex flex-col items-center gap-3 p-6 bg-card rounded-xl border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 h-full">
                      <div className="w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform overflow-hidden">
                        <img src={client.logo} alt={`${client.name} logo`} className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300" />
                      </div>
                      <span className="text-foreground font-heading font-semibold text-sm text-center">{client.name}</span>
                      <span className="text-muted-foreground text-xs">{client.sector}</span>
                    </div>
                  </CarouselItem>
                )}
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
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">Our Work</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Project Gallery</h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">See our teams in action across various construction and civil engineering projects.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {galleryImages.map((img) => (
                <div key={img.title} className="group relative overflow-hidden rounded-xl shadow-lg">
                  <img src={img.src} alt={img.alt} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <h3 className="text-primary-foreground font-bold">{img.title}</h3>
                      <p className="text-primary-foreground/80 text-sm">{img.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="group relative overflow-hidden rounded-xl shadow-lg md:col-span-2 lg:col-span-3">
                <img src={teamPhoto} alt="STE construction team" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-primary-foreground font-bold">Our Team</h3>
                    <p className="text-primary-foreground/80 text-sm">Dedicated professionals delivering excellence</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">Ready to Start Your Project?</h2>
            <p className="text-accent-foreground/90 text-lg max-w-2xl mx-auto mb-8">Join our growing list of satisfied clients. Let's discuss how we can support your next project.</p>
            <Button variant="default" size="xl" asChild>
              <Link to="/contact" className="group">Contact Us Today<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" /></Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>);
};

export default ProjectsPage;
