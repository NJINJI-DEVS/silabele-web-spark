import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Services } from "@/components/Services";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHeader
          badge="Our Services"
          title="Comprehensive Infrastructure Solutions"
          subtitle="We serve public and private sector clients with a full suite of services that meet technical, regulatory, and logistical demands."
        />
        <Services showAll={true} showHeader={false} />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
