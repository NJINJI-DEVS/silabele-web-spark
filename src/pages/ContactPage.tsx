import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Contact } from "@/components/Contact";
import { Clock, Phone, Mail, CheckCircle } from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our team",
    value: "0861-555-058",
    action: "tel:0861555058",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us a detailed inquiry",
    value: "info@silabele.com",
    action: "mailto:info@silabele.com",
  },
];

const officeHours = [
  { day: "Monday – Friday", hours: "08:00 – 16:30" },
  { day: "Weekends", hours: "Closed" },
  { day: "Public Holidays", hours: "Closed" },
];

const faqs = [
  {
    question: "What areas do you service?",
    answer: "We operate throughout South Africa, with a strong presence in North West, Gauteng, and Limpopo provinces. We can mobilize equipment nationally for larger projects.",
  },
  {
    question: "Do you provide operators with equipment?",
    answer: "Yes, we can provide skilled and certified operators with all our plant hire equipment. Operators are trained, experienced, and fully compliant with mine safety requirements.",
  },
  {
    question: "What is your response time for emergency requests?",
    answer: "We offer 24/7 emergency support and can typically mobilize equipment within 24-48 hours depending on availability and location.",
  },
  {
    question: "Do you offer long-term hire contracts?",
    answer: "Yes, we offer flexible hire terms from short-term daily/weekly rates to long-term monthly contracts with preferential pricing.",
  },
  {
    question: "Are your vehicles mine-compliant?",
    answer: "All our fleet vehicles meet strict mining industry safety and compliance standards, including regular audits and certifications.",
  },
  {
    question: "How do I request a quote?",
    answer: "You can request a quote by filling out the contact form, calling us directly, or sending an email with your project requirements. We typically respond within 24 hours.",
  },
];

const expectations = [
  "Quick response within 24 hours",
  "Detailed proposal with transparent pricing",
  "Site visit for accurate assessment",
  "Flexible terms to suit your project",
  "Dedicated project manager assigned",
  "Regular progress updates",
];

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHeader
          badge="Contact Us"
          title="Get In Touch"
          subtitle="Need a partner you can rely on? Talk to us about your project requirements."
        />

        {/* Quick Contact Methods */}
        <section className="py-12 bg-secondary">
          <div className="container-custom">
            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {contactMethods.map((method) => (
                <a
                  key={method.title}
                  href={method.action}
                  className="bg-card p-6 rounded-xl border border-border shadow-md text-center hover:shadow-lg hover:border-accent/50 transition-all group"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-4 group-hover:bg-accent/20 transition-colors">
                    <method.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-bold text-foreground">{method.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{method.description}</p>
                  <p className="text-accent font-semibold text-sm">{method.value}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <Contact />

        {/* Office Hours & What to Expect */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Office Hours */}
              <div className="bg-card p-8 rounded-xl border border-border shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="h-8 w-8 text-accent" />
                  <h2 className="text-2xl font-bold text-foreground">Office Hours</h2>
                </div>
                <div className="space-y-4">
                  {officeHours.map((item) => (
                    <div
                      key={item.day}
                      className="flex justify-between items-center py-3 border-b border-border last:border-0"
                    >
                      <span className="font-medium text-foreground">{item.day}</span>
                      <span className="text-muted-foreground">{item.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                  <p className="text-sm text-foreground">
                    <strong>Emergency Support:</strong> For urgent equipment needs or emergencies, call our 24/7 hotline.
                  </p>
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-card p-8 rounded-xl border border-border shadow-md">
                <h2 className="text-2xl font-bold text-foreground mb-6">What to Expect</h2>
                <p className="text-muted-foreground mb-6">
                  When you reach out to us, here's what you can expect from our team:
                </p>
                <ul className="space-y-4">
                  {expectations.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                Common Questions
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="font-bold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-primary">
          <div className="container-custom text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Ready to Discuss Your Project?
            </h2>
            <p className="text-primary-foreground/90 mb-6">
              Call us during office hours or send us an email anytime.
            </p>
            <a
              href="tel:0861555058"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent/90 transition-colors"
            >
              <Phone className="h-6 w-6" />
              0861-555-058
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
