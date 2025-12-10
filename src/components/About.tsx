import { CheckCircle, Award, Users, Clock } from "lucide-react";

const values = [
  { icon: CheckCircle, label: "Integrity" },
  { icon: Users, label: "Teamwork" },
  { icon: Award, label: "Service Excellence" },
  { icon: Clock, label: "Prompt Service" },
];

const stats = [
  { number: "15+", label: "Years Experience" },
  { number: "100%", label: "Black-Owned" },
  { number: "CIDB", label: "7CE PE Graded" },
  { number: "24/7", label: "Support Available" },
];

export const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            A Legacy Built on Trust
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A Future Driven by Purpose
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              Founded in 2009, <strong>Silabele Trading Enterprise (STE)</strong> is a{" "}
              <span className="text-accent font-semibold">100% Black-owned, family-led company</span>{" "}
              delivering infrastructure and logistics solutions across South Africa.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              What began in Chaneng Village as a small fleet operation has grown into a
              trusted multi-sector partner in plant hire, civil engineering, freight
              transport, and technical consulting.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              At STE, we do more than move earth and material—we move projects forward.
              With hands-on leadership, a well-maintained fleet, and industry-recognized
              credentials, we've earned the trust of major mining houses, municipalities,
              and contractors who depend on our reliability, responsiveness, and deep
              local knowledge.
            </p>

            {/* Our Promise */}
            <div className="bg-primary/5 border-l-4 border-accent p-6 rounded-r-lg mt-8">
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                Our Promise
              </h3>
              <p className="text-foreground font-medium">
                Prompt service. Quality execution. Partnership you can depend on.
              </p>
            </div>

            {/* Core Values */}
            <div className="mt-8">
              <h3 className="font-heading font-bold text-lg text-foreground mb-4">
                Core Values
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value) => (
                  <div key={value.label} className="flex items-center gap-3">
                    <value.icon className="h-5 w-5 text-accent" />
                    <span className="text-foreground font-medium">{value.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card p-8 rounded-xl shadow-md text-center card-hover border border-border"
              >
                <div className="stat-number">{stat.number}</div>
                <div className="text-muted-foreground font-medium mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
