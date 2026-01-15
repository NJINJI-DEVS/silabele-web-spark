import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import glencoreLogo from "@/assets/clients/glencore.png";
import pikitupLogo from "@/assets/clients/pikitup.jpeg";
import royalBafokengLogo from "@/assets/clients/royal-bafokeng.jpg";
import impalaPlatinumLogo from "@/assets/clients/impala-platinum.jpg";
import groupFiveLogo from "@/assets/clients/group-five.png";

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
    name: "Royal Bafokeng Holdings",
    logo: royalBafokengLogo,
  },
  {
    name: "Impala Platinum",
    logo: impalaPlatinumLogo,
  },
  {
    name: "Group Five",
    logo: groupFiveLogo,
  },
  {
    name: "WBHO",
    logo: null,
  },
  {
    name: "GEP",
    logo: null,
  },
  {
    name: "Dept. of Health & Social Development",
    logo: null,
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
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-h-16 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              ) : (
                <span className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors text-center leading-tight">
                  {client.name}
                </span>
              )}
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
                    {client.logo ? (
                      <img
                        src={client.logo}
                        alt={`${client.name} logo`}
                        className="max-h-12 max-w-full object-contain"
                      />
                    ) : (
                      <span className="text-xs font-semibold text-muted-foreground text-center leading-tight">
                        {client.name}
                      </span>
                    )}
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
