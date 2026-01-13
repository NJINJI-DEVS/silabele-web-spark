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

const certifications = [
  { icon: Shield, title: "100% Black-Owned", description: "Family-led Enterprise" },
  { icon: Award, title: "CIDB 7CE", description: "Civil Engineering Grading" },
  { icon: Cog, title: "CIDB 5GB", description: "General Building Grading" },
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
            <div className="grid sm:grid-cols-3 gap-6">
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
