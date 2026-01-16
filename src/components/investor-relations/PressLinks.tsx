import { Container } from '@/components/ui';
import type { PressLink } from '@/content/investor-relations';

export type PressLinksProps = {
  heading: string;
  links: PressLink[];
};

export function PressLinks({ heading, links }: PressLinksProps) {
  return (
    <section className="bg-background" aria-labelledby="investor-press">
      <Container className="py-16 sm:py-20">
        <div className="max-w-[70ch]">
          <h2
            id="investor-press"
            className="text-2xl font-bold tracking-tight text-text-primary"
          >
            {heading}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary">
            Selected mentions and commentary (placeholder links).
          </p>
        </div>

        <ul className="mt-10 divide-y divide-surface-highlight border-t border-surface-highlight">
          {links.map((item) => (
            <li key={item.href} className="py-5">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-start justify-between gap-6 rounded-lg px-2 py-1 text-left transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-primary"
              >
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-text-primary group-hover:text-primary">
                    {item.outlet}
                  </span>
                  <span className="mt-1 block text-sm text-text-secondary text-pretty">
                    {item.headline}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="shrink-0 font-mono text-xs uppercase tracking-widest text-text-secondary"
                >
                  Read ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
      <div className="px-4 sm:px-6 lg:px-8">
        <hr className="mx-auto max-w-7xl border-t border-surface-highlight" />
      </div>
    </section>
  );
}
