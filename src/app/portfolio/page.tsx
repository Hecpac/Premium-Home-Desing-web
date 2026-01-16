import type { Metadata } from 'next';
import { Container } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Explore our collection of luxury custom homes and renovations in Dallas and surrounding areas.',
};

export default function PortfolioPage() {
  return (
    <section className="py-20 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Our Portfolio
          </h1>
          <p className="mt-4 text-lg text-muted">
            Discover our collection of luxury custom homes and high-end renovations across Dallas.
          </p>
        </div>

        {/* Filters - will be dynamic */}
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {['All', 'Custom Homes', 'Renovations', 'Modern', 'Traditional'].map((filter) => (
            <button
              key={filter}
              className="rounded-full border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-primary hover:text-foreground"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid - will come from CMS */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="group aspect-[4/3] overflow-hidden rounded-xl border border-border bg-surface-card transition-all hover:border-primary/50"
            >
              <div className="flex h-full items-center justify-center text-muted">
                Project {i} - Coming from Sanity CMS
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
