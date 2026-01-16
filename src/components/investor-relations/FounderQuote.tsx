import { Container } from '@/components/ui';

export type FounderQuoteProps = {
  quote: string;
  name: string;
  title: string;
};

export function FounderQuote({ quote, name, title }: FounderQuoteProps) {
  return (
    <section className="bg-background" aria-labelledby="investor-founder-quote">
      <Container className="py-16 sm:py-20">
        <h2 id="investor-founder-quote" className="sr-only">
          Founder quote
        </h2>

        <figure className="max-w-4xl">
          <blockquote className="text-balance font-[var(--font-playfair)] text-3xl leading-tight text-text-primary sm:text-4xl">
            <p>“{quote}”</p>
          </blockquote>
          <figcaption className="mt-8 flex flex-col gap-1">
            <span className="text-sm font-semibold text-text-primary">{name}</span>
            <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">
              {title}
            </span>
          </figcaption>
        </figure>
      </Container>
      <div className="px-4 sm:px-6 lg:px-8">
        <hr className="mx-auto max-w-7xl border-t border-surface-highlight" />
      </div>
    </section>
  );
}
