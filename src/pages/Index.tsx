import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Clients } from "@/components/Clients";
import { Fleet } from "@/components/Fleet";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Clients />
        <About />
        <Services />
        <Fleet />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
