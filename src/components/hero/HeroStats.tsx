import { Container } from '@/components/ui';

const STATS = [
  { value: '15+', label: 'Years of excellence' },
  { value: '200+', label: 'Custom projects delivered' },
  { value: '$500M', label: 'Total build value' },
  { value: '98%', label: 'On-time delivery' },
];

export function HeroStats() {
  return (
    <section aria-labelledby="hero-stats" className="bg-background">
      <Container>
        <div className="border-y border-surface-highlight py-6 md:py-8">
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-text-secondary font-mono">
            <span className="h-1 w-1 bg-primary" aria-hidden="true" />
            Proof in numbers
          </div>
          <h2 id="hero-stats" className="sr-only">
            Hero stats
          </h2>
          <dl className="mt-6 grid gap-px border border-surface-highlight bg-surface-highlight md:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="bg-white p-6">
                <dt className="text-xs uppercase tracking-widest text-text-secondary font-mono">
                  {stat.label}
                </dt>
                <dd className="mt-3 text-4xl font-black tracking-tighter text-text-primary sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
