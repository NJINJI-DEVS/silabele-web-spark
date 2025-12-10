const clients = [
  "Glencore",
  "Pikitup",
  "Moretele Local Municipality",
  "Royal Bafokeng Holdings",
  "Impala Platinum",
  "Anglo American Platinum",
];

export const Clients = () => {
  return (
    <section className="py-12 bg-background border-y border-border">
      <div className="container-custom">
        <div className="text-center mb-8">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Trusted By Industry Leaders
          </span>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {clients.map((client) => (
            <div
              key={client}
              className="px-6 py-3 bg-secondary/50 rounded-lg border border-border text-foreground font-heading font-semibold text-sm md:text-base hover:bg-secondary transition-colors"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
