import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import glencoreLogo from "@/assets/clients/glencore.png";
import pikitupLogo from "@/assets/clients/pikitup.jpeg";
import moreteleLogo from "@/assets/clients/moretele.jpg";
import royalBafokengLogo from "@/assets/clients/royal-bafokeng.jpg";
import impalaPlatinumLogo from "@/assets/clients/impala-platinum.jpg";
import angloPlatinumLogo from "@/assets/clients/anglo-platinum.jpeg";

const clients = [
  {
    name: "Glencore",
    logo: glencoreLogo,
  },
  {
    name: "Pikitup",
    logo: pikitupLogo,
  },
  {
    name: "Moretele Local Municipality",
    logo: moreteleLogo,
  },
  {
    name: "Royal Bafokeng Holdings",
    logo: royalBafokengLogo,
  },
  {
    name: "Impala Platinum",
    logo: impalaPlatinumLogo,
  },
  {
    name: "Anglo American Platinum",
    logo: angloPlatinumLogo,
  },
];

export const Clients = () => {
  return (
    <section className="py-16 bg-background border-y border-border overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-10">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Trusted By Industry Leaders
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2">
            Our Valued Partners
          </h2>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group flex items-center justify-center p-6 bg-card rounded-xl border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 h-24 w-48"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="max-h-16 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2">
              {clients.map((client) => (
                <CarouselItem key={client.name} className="pl-2 basis-1/2">
                  <div className="flex items-center justify-center p-4 bg-card rounded-xl border border-border h-20">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="max-h-12 max-w-full object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
