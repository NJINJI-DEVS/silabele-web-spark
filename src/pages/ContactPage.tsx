import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Contact } from "@/components/Contact";

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
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
