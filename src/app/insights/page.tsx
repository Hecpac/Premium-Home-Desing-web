import type { Metadata } from 'next';
import { Container } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Expert insights on luxury home design, construction trends, and Dallas real estate.',
};

export default function InsightsPage() {
  return (
    <section className="py-20 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Insights
          </h1>
          <p className="mt-4 text-lg text-muted">
            Expert perspectives on luxury home design, construction, and Dallas living.
          </p>
        </div>

        {/* Articles Grid - will come from CMS */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <article
              key={i}
              className="group rounded-xl border border-border bg-surface-card overflow-hidden transition-all hover:border-primary/50"
            >
              <div className="aspect-[16/9] bg-surface-elevated">
                <div className="flex h-full items-center justify-center text-muted text-sm">
                  Featured Image
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-medium uppercase tracking-wider text-primary">
                  Category
                </span>
                <h2 className="mt-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  Article Title {i}
                </h2>
                <p className="mt-2 text-sm text-muted line-clamp-2">
                  Article excerpt coming from Sanity CMS...
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-muted">
                  <span>5 min read</span>
                  <span>Jan 15, 2026</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
