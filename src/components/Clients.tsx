import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const clients = [
  {
    name: "Glencore",
    initials: "G",
    color: "from-emerald-500 to-emerald-700",
  },
  {
    name: "Pikitup",
    initials: "PK",
    color: "from-green-500 to-green-700",
  },
  {
    name: "Moretele Local Municipality",
    initials: "MLM",
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "Royal Bafokeng Holdings",
    initials: "RBH",
    color: "from-purple-500 to-purple-700",
  },
  {
    name: "Impala Platinum",
    initials: "IP",
    color: "from-slate-500 to-slate-700",
  },
  {
    name: "Anglo American Platinum",
    initials: "AAP",
    color: "from-red-500 to-red-700",
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
        <div className="hidden md:flex flex-wrap justify-center items-center gap-6 lg:gap-8">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group flex flex-col items-center gap-3 p-6 bg-card rounded-xl border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300"
            >
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${client.color} flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-110 transition-transform`}
              >
                {client.initials}
              </div>
              <span className="text-foreground font-heading font-semibold text-sm text-center max-w-[120px]">
                {client.name}
              </span>
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
                  <div className="flex flex-col items-center gap-3 p-4 bg-card rounded-xl border border-border">
                    <div
                      className={`w-14 h-14 rounded-full bg-gradient-to-br ${client.color} flex items-center justify-center text-white font-bold text-sm shadow-md`}
                    >
                      {client.initials}
                    </div>
                    <span className="text-foreground font-heading font-semibold text-xs text-center">
                      {client.name}
                    </span>
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
