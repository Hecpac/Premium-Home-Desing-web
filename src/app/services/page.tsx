import type { Metadata } from 'next';
import Link from 'next/link';
import { Container, Button } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Custom home construction, luxury renovations, and architectural services in Dallas.',
};

const services = [
  {
    title: 'Custom Home Construction',
    description: 'From architectural design to final walkthrough, we build your dream home from the ground up.',
    features: ['Complete design-build services', 'Premium materials sourcing', 'Project management', 'Quality assurance'],
  },
  {
    title: 'Luxury Renovations',
    description: 'Transform your existing home with high-end renovations that enhance both form and function.',
    features: ['Kitchen & bath remodels', 'Whole-home renovations', 'Historic restorations', 'Modern updates'],
  },
  {
    title: 'Additions & Expansions',
    description: 'Seamlessly expand your living space with additions that complement your home architecture.',
    features: ['Second story additions', 'Room additions', 'Garage conversions', 'Outdoor living spaces'],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="py-20 lg:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-4 text-lg text-muted">
              Comprehensive luxury construction services tailored to your vision and lifestyle.
            </p>
          </div>

          {/* Services Grid */}
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-surface-highlight bg-white p-8"
              >
                <h2 className="text-xl font-semibold text-foreground">{service.title}</h2>
                <p className="mt-2 text-muted">{service.description}</p>
                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="border-t border-surface-highlight bg-surface py-20 lg:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Our Process
            </h2>
            <p className="mt-4 text-muted">
              A proven approach to delivering exceptional results on every project.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-4xl">
            {['Discovery & Consultation', 'Design & Planning', 'Construction', 'Final Walkthrough'].map((step, i) => (
              <div key={step} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-semibold">
                    {i + 1}
                  </div>
                  {i < 3 && <div className="h-full w-px bg-border" />}
                </div>
                <div className="pb-12">
                  <h3 className="text-lg font-semibold text-foreground">{step}</h3>
                  <p className="mt-2 text-muted">
                    Process description coming from CMS...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-20">
        <Container size="narrow" className="text-center">
          <h2 className="text-2xl font-semibold text-foreground">Ready to Get Started?</h2>
          <p className="mt-2 text-muted">Let&apos;s discuss your project and bring your vision to life.</p>
          <div className="mt-6">
            <Button size="lg" asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
