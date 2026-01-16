import { Container } from '@/components/ui';
import type { InvestorKpi } from '@/content/investor-relations';

export type KpiGridProps = {
  heading: string;
  kpis: InvestorKpi[];
};

export function KpiGrid({ heading, kpis }: KpiGridProps) {
  return (
    <section className="bg-background" aria-labelledby="investor-kpis">
      <Container className="py-16 sm:py-20">
        <div className="max-w-[70ch]">
          <h2
            id="investor-kpis"
            className="text-2xl font-bold tracking-tight text-text-primary"
          >
            {heading}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary">
            A few high-level indicators (placeholders) that describe the scale and cadence of our
            work.
          </p>
        </div>

        <dl className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {kpis.map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-2xl border border-surface-highlight bg-white p-6 shadow-soft"
            >
              <div className="flex flex-col-reverse gap-2">
                <dt className="text-sm text-text-secondary">{kpi.label}</dt>
                <dd className="text-4xl font-black tracking-tighter text-text-primary">
                  {kpi.value}
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </Container>
      <div className="px-4 sm:px-6 lg:px-8">
        <hr className="mx-auto max-w-7xl border-t border-surface-highlight" />
      </div>
    </section>
  );
}
