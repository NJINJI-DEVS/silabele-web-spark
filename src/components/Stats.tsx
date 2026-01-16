import { TrendingUp, Users, Truck, Award } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "15+",
    label: "Years Experience",
    description: "Industry expertise",
  },
  {
    icon: Users,
    value: "50+",
    label: "Team Members",
    description: "Skilled professionals",
  },
  {
    icon: Truck,
    value: "50+",
    label: "Fleet Vehicles",
    description: "Modern equipment",
  },
  {
    icon: Award,
    value: "100+",
    label: "Projects Completed",
    description: "Successful deliveries",
  },
];

export const Stats = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/20 mb-4 group-hover:bg-accent/30 transition-colors">
                <stat.icon className="h-7 w-7 text-accent" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-primary-foreground font-semibold">
                {stat.label}
              </div>
              <div className="text-primary-foreground/70 text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
