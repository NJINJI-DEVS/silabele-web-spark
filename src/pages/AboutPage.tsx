import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { About } from "@/components/About";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Users, Handshake, Clock, Cog } from "lucide-react";

// Team images
import teamPhoto from "@/assets/team-photo.jpg";
import teamPhoto2 from "@/assets/team-photo-2.jpg";

const timeline = [
  {
    year: "2009",
    title: "Company Founded",
    description: "SILABELE TRADING ENTERPRISE established in Chaneng Village with a small fleet operation.",
  },
  {
    year: "2012",
    title: "Fleet Expansion",
    description: "Expanded fleet to include earthmoving equipment and tipper trucks for mining sector.",
  },
  {
    year: "2015",
    title: "Major Contracts",
    description: "Secured contracts with major mining houses including Impala Platinum and Anglo American.",
  },
  {
    year: "2018",
    title: "CIDB Grading",
    description: "Achieved CIDB 7CE PE grading, enabling participation in larger government projects.",
  },
  {
    year: "2021",
    title: "Service Diversification",
    description: "Expanded into technical consulting and passenger transport services.",
  },
  {
    year: "2024",
    title: "Continued Growth",
    description: "Operating 100+ fleet vehicles with 50+ dedicated team members across South Africa.",
  },
];

const certifications = [
  { icon: Shield, title: "BBBEE Level 1", description: "Broad-Based Black Economic Empowerment" },
  { icon: Award, title: "CIDB 7CE PE", description: "Construction Industry Development Board" },
  { icon: Cog, title: "ISO 9001:2015", description: "Quality Management Certified" },
  { icon: Users, title: "100% Black-Owned", description: "Family-led Enterprise" },
];

const leadership = [
  {
    name: "Founder & CEO",
    description: "With over 15 years of industry experience, our leadership team brings hands-on expertise to every project.",
  },
  {
    name: "Operations Director",
    description: "Ensuring operational excellence and fleet maintenance across all service divisions.",
  },
  {
    name: "Technical Advisor",
    description: "Providing expert guidance on project optimization and equipment selection.",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHeader
          badge="About Us"
          title="A Legacy Built on Trust"
          subtitle="A Future Driven by Purpose"
        />
        <About showFull={true} />

        {/* Company Timeline */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                15+ Years of Excellence
              </h2>
            </div>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border hidden md:block" />
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div
                    key={item.year}
                    className={`flex flex-col md:flex-row items-center gap-4 md:gap-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className="bg-card p-6 rounded-xl border border-border shadow-md">
                        <span className="text-accent font-bold text-lg">{item.year}</span>
                        <h3 className="font-bold text-foreground mt-1">{item.title}</h3>
                        <p className="text-muted-foreground mt-2">{item.description}</p>
                      </div>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-accent flex-shrink-0 z-10 hidden md:block" />
                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <Stats />

        {/* Certifications */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                Credentials
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                Certifications & Compliance
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                We maintain the highest standards of compliance and certification in the industry.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="bg-card p-6 rounded-xl border border-border shadow-md text-center hover:shadow-lg transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-4">
                    <cert.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-bold text-foreground">{cert.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                Our Team
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                The People Behind Our Success
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                A dedicated workforce committed to excellence, safety, and delivering quality results on every project.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="group relative overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src={teamPhoto} 
                  alt="STE team members at project site" 
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent flex items-end p-8">
                  <div>
                    <h3 className="text-primary-foreground font-bold text-xl">Our Dedicated Team</h3>
                    <p className="text-primary-foreground/80">50+ skilled professionals across all divisions</p>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src={teamPhoto2} 
                  alt="STE construction team" 
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent flex items-end p-8">
                  <div>
                    <h3 className="text-primary-foreground font-bold text-xl">Safety First Culture</h3>
                    <p className="text-primary-foreground/80">Certified operators with mine-compliant training</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Leadership Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {leadership.map((leader, index) => (
                <div
                  key={index}
                  className="bg-card p-8 rounded-xl border border-border shadow-md text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary/70 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-foreground text-lg">{leader.name}</h3>
                  <p className="text-muted-foreground mt-2">{leader.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* CTA Section */}
        <section className="section-padding bg-primary">
          <div className="container-custom text-center">
            <Handshake className="h-16 w-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-8">
              Join industry leaders who trust SILABELE TRADING ENTERPRISE for their infrastructure and logistics needs.
            </p>
            <Button variant="accent" size="xl" asChild>
              <Link to="/contact" className="group">
                Get In Touch
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

export default AboutPage;
