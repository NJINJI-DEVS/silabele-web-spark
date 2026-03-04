import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/asphalt-paving.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Construction site with heavy machinery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center md:text-left py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6 animate-fade-in-up">
            Experts in Prompt and{" "}
            <span className="text-accent">Quality Service</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl animate-fade-in-up animation-delay-100">
            Reliable transport logistics and construction solutions for mining, 
            government, and private sector projects across South Africa.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up animation-delay-400">
            <Button variant="accent" size="xl" asChild>
              <Link to="/services" className="group">
                View Our Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">Request a Quote</Link>
            </Button>
            <Button variant="hero" size="xl" asChild>
              <Link to="/fleet">See Our Fleet</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <ChevronDown className="h-8 w-8 text-primary-foreground/60" />
      </div>
    </section>
  );
};
