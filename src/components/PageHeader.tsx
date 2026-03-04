interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
}

export const PageHeader = ({ title, subtitle, badge }: PageHeaderProps) => {
  return (
    <section className="relative py-24 md:py-32 bg-primary overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5" />
      <div className="container-custom relative z-10 text-center py-[50px]">
        {badge &&
        <span className="inline-block text-accent font-semibold uppercase tracking-wider text-sm mb-4">
            {badge}
          </span>
        }
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground mb-4">
          {title}
        </h1>
        {subtitle &&
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            {subtitle}
          </p>
        }
      </div>
    </section>);

};