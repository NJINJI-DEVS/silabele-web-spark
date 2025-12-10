import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Fleet } from "@/components/Fleet";

const FleetPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHeader
          badge="Our Fleet"
          title="Fleet Strength You Can Rely On"
          subtitle="Mine-compliant, fully maintained equipment ready for your project requirements."
        />
        <Fleet showCTA={true} />
      </main>
      <Footer />
    </div>
  );
};

export default FleetPage;
