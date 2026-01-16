import { Container } from '@/components/ui';
import type { WhyUsItem } from '@/content/investor-relations';

export type WhyUsProps = {
  heading: string;
  items: WhyUsItem[];
};

export function WhyUs({ heading, items }: WhyUsProps) {
  return (
    <section className="bg-background" aria-labelledby="investor-why-us">
      <Container className="py-16 sm:py-20">
        <div className="max-w-[70ch]">
          <h2
            id="investor-why-us"
            className="text-2xl font-bold tracking-tight text-text-primary"
          >
            {heading}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary">
            Principles that guide our strategy and execution.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {items.map((item, idx) => (
            <div
              key={item.title}
              className="rounded-2xl border border-surface-highlight bg-white p-6 shadow-soft"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-text-secondary">
                {String(idx + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-3 text-lg font-semibold tracking-tight text-text-primary">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary text-pretty">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
