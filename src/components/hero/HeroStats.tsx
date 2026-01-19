const stats = [
  { label: "Years of Excellence", value: "15+" },
  { label: "Projects Delivered", value: "200+" },
  { label: "Portfolio Value", value: "$500M" },
  { label: "Client Satisfaction", value: "98%" },
];

export function HeroStats() {
  return (
    <section aria-label="Hero stats" className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="min-w-0 rounded-2xl border border-surface-highlight bg-white/90 px-4 py-4 text-center backdrop-blur-sm"
            >
              <div className="text-2xl font-bold text-text-primary md:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-widest text-text-secondary">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
