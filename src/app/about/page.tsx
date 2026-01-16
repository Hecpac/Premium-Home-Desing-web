import type { Metadata } from 'next';
import Link from 'next/link';
import { Container, Button } from '@/components/ui';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Premium Home Design - Dallas premier luxury home builder with 25+ years of experience.',
};

export default function AboutPage() {
  return (
    <>
      <section className="py-20 lg:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Building Excellence Since 2001
              </h1>
              <p className="mt-6 text-lg text-muted">
                For over two decades, Premium Home Design has been Dallas&apos; trusted partner for luxury custom homes
                and high-end renovations. We combine architectural excellence with meticulous craftsmanship to create
                spaces that reflect our clients&apos; unique vision and lifestyle.
              </p>
              <p className="mt-4 text-lg text-muted">
                Our commitment to quality, transparency, and client satisfaction has earned us a reputation as one of
                the most respected builders in the Dallas-Fort Worth metroplex.
              </p>
            </div>
            <div className="aspect-square rounded-xl border border-surface-highlight bg-white">
              <div className="flex h-full items-center justify-center text-text-secondary">
                Team/Office Image - Coming from CMS
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="border-t border-surface-highlight bg-surface py-20 lg:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Our Values
            </h2>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Excellence', description: 'Uncompromising quality in every detail' },
              { title: 'Integrity', description: 'Transparent communication and honest pricing' },
              { title: 'Innovation', description: 'Embracing new technologies and methods' },
              { title: 'Partnership', description: 'Collaborative approach with every client' },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2 text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-20">
        <Container size="narrow" className="text-center">
          <h2 className="text-2xl font-semibold text-foreground">Ready to Start Your Project?</h2>
          <p className="mt-2 text-muted">Let&apos;s discuss how we can bring your vision to life.</p>
          <div className="mt-6">
            <Button size="lg" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
