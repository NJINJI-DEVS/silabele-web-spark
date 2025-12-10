interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
}

export const PageHeader = ({ title, subtitle, badge }: PageHeaderProps) => {
  return (
    <section className="bg-primary pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="container-custom text-center">
        {badge && (
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            {badge}
          </span>
        )}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mt-2 mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};
