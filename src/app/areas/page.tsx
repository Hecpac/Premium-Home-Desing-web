import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui';
import { AREAS_SERVED } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Areas Served',
  description: 'Premium Home Design serves Dallas, Highland Park, University Park, Preston Hollow, and surrounding luxury communities.',
};

export default function AreasPage() {
  return (
    <section className="py-20 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Areas We Serve
          </h1>
          <p className="mt-4 text-lg text-muted">
            Building luxury custom homes across Dallas and the surrounding premier communities.
          </p>
        </div>

        {/* Areas Grid */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AREAS_SERVED.map((area) => (
            <Link
              key={area}
              href={`/areas/${area.toLowerCase().replace(/\s+/g, '-')}`}
              className="group rounded-xl border border-border bg-surface-card p-6 transition-all hover:border-primary/50 hover:bg-surface-elevated"
            >
              <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {area}
              </h2>
              <p className="mt-2 text-sm text-muted">
                Custom homes & renovations in {area}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
