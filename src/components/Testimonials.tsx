import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    company: "Glencore",
    content: "SILABELE TRADING ENTERPRISE delivered exceptional earthmoving services for our mining operations. Their fleet is well-maintained and their team is highly professional. They completed the project ahead of schedule.",
    rating: 5,
  },
  {
    company: "Pikitup",
    content: "We've been working with SILABELE for our waste management logistics needs. Their tipper trucks and drivers are reliable, and their commitment to safety standards is commendable.",
    rating: 5,
  },
  {
    company: "Royal Bafokeng Holdings",
    content: "The civil engineering expertise and plant hire services provided by SILABELE have been instrumental in our infrastructure development projects. Highly recommended for large-scale operations.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Client Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what industry leaders have to say about working with SILABELE TRADING ENTERPRISE.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-lg border border-border relative group hover:shadow-xl transition-shadow duration-300"
            >
              <Quote className="absolute top-4 right-4 h-10 w-10 text-accent/20 group-hover:text-accent/30 transition-colors" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-border pt-4">
                <p className="font-heading font-semibold text-foreground">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
