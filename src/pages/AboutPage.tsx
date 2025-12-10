import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { About } from "@/components/About";

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
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
