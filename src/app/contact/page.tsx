import type { Metadata } from 'next';
import { Container } from '@/components/ui';
import { COMPANY_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Premium Home Design to start your luxury home project in Dallas.',
};

export default function ContactPage() {
  return (
    <section className="py-20 lg:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Contact Info */}
          <div>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Let&apos;s Build Something Extraordinary
            </h1>
            <p className="mt-4 text-lg text-muted">
              Ready to start your luxury home project? Get in touch with our team to schedule a consultation.
            </p>

            <div className="mt-12 space-y-8">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">Phone</h2>
                <a href={`tel:${COMPANY_INFO.phone}`} className="mt-2 block text-lg text-muted hover:text-foreground">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">Email</h2>
                <a href={`mailto:${COMPANY_INFO.email}`} className="mt-2 block text-lg text-muted hover:text-foreground">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">Office</h2>
                <p className="mt-2 text-lg text-muted">
                  {COMPANY_INFO.address.street}<br />
                  {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}
                </p>
              </div>
            </div>
          </div>

          {/* Concierge Form Placeholder */}
          <div className="rounded-xl border border-border bg-surface-card p-8">
            <h2 className="text-xl font-semibold text-foreground">Start Your Project</h2>
            <p className="mt-2 text-sm text-muted">
              Fill out the form below and we&apos;ll get back to you within 24 hours.
            </p>

            {/* Multi-step form will be implemented here */}
            <div className="mt-8 space-y-6">
              <div className="flex h-64 items-center justify-center rounded-lg border border-dashed border-border">
                <p className="text-muted">Multi-step Concierge Form Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
