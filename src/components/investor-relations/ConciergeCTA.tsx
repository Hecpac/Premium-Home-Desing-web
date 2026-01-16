import Link from 'next/link';
import { Button, Container } from '@/components/ui';

export type ConciergeCTAProps = {
  heading: string;
  body: string;
  button: {
    label: string;
    href: string;
  };
};

export function ConciergeCTA({ heading, body, button }: ConciergeCTAProps) {
  return (
    <section className="bg-surface" aria-labelledby="investor-concierge">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-8 md:grid-cols-12 md:items-center">
          <div className="md:col-span-8">
            <h2
              id="investor-concierge"
              className="text-2xl font-bold tracking-tight text-text-primary"
            >
              {heading}
            </h2>
            <p className="mt-4 max-w-[70ch] text-sm leading-relaxed text-text-secondary text-pretty">
              {body}
            </p>
          </div>
          <div className="md:col-span-4 md:flex md:justify-end">
            <Button asChild size="lg">
              <Link href={button.href}>{button.label}</Link>
            </Button>
          </div>
        </div>
      </Container>
      <div className="px-4 sm:px-6 lg:px-8">
        <hr className="mx-auto max-w-7xl border-t border-surface-highlight" />
      </div>
    </section>
  );
}
