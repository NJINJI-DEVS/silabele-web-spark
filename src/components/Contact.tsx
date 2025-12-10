import { useState } from "react";
import { MapPin, Phone, Mail, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "155 Ramogotsi Section, Chaneng Village, Rustenburg, North West, 0310",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "0861 555 058",
    href: "tel:0861555058",
  },
  {
    icon: Mail,
    label: "Email",
    value: "bsilabele@silabele.com",
    href: "mailto:bsilabele@silabele.com",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon - Fri: 7:00 AM - 5:00 PM",
  },
];

const serviceOptions = [
  "Civil Engineering & Construction",
  "Plant Hire",
  "Road Freight & Logistics",
  "Passenger Transport",
  "Technical Consulting",
  "General Inquiry",
];

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Need a Partner You Can Rely On?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Talk to us. We're ready to discuss your project requirements and provide
            a tailored solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-xl shadow-lg p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Request a Quote
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    placeholder="Your phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                  Service Required
                </label>
                <select
                  id="service"
                  className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Your Message *
                </label>
                <Textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Tell us about your project requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <Button
                type="submit"
                variant="accent"
                size="xl"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card rounded-xl shadow-lg p-8 border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-medium">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-foreground hover:text-accent transition-colors font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-card rounded-xl shadow-lg overflow-hidden border border-border h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.2401254!2d27.0!3d-25.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQyJzAwLjAiUyAyN8KwMDAnMDAuMCJF!5e0!3m2!1sen!2sza!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SILABELE Trading Enterprise Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
