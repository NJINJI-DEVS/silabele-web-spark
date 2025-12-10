import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Clients } from "@/components/Clients";
import { Stats } from "@/components/Stats";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Fleet } from "@/components/Fleet";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Clients />
        <Stats />
        
        {/* About Preview */}
        <About showFull={false} />
        
        {/* Services Preview */}
        <Services showAll={false} />
        
        {/* Why Choose Us Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                  Why Choose Us
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                  Your Trusted Partner in Construction & Logistics
                </h2>
                <p className="text-muted-foreground mb-8">
                  With over 15 years of experience, SILABELE TRADING ENTERPRISE has established itself as a leader in civil engineering, plant hire, and logistics services across South Africa.
                </p>
                <ul className="space-y-4">
                  {[
                    "Fully compliant with BBBEE Level 1 certification",
                    "ISO 9001:2015 quality management certified",
                    "24/7 emergency response capabilities",
                    "Comprehensive fleet maintenance program",
                    "Experienced and trained workforce",
                    "Competitive and transparent pricing",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Get a Free Quote
                </h3>
                <p className="text-muted-foreground mb-6">
                  Contact us today for a no-obligation quote tailored to your project requirements.
                </p>
                <div className="space-y-4">
                  <Button variant="default" size="xl" className="w-full" asChild>
                    <Link to="/contact">
                      Request a Quote
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="xl" className="w-full" asChild>
                    <a href="tel:+27123456789">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Us Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Fleet Preview */}
        <Fleet showCTA={false} />
        
        {/* Testimonials */}
        <Testimonials />
        
        {/* CTA Section */}
        <section className="section-padding bg-accent">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-accent-foreground/90 text-lg max-w-2xl mx-auto mb-8">
              Get in touch with our team to discuss your requirements and receive a tailored quote.
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

export default Index;
