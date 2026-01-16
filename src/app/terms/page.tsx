import type { Metadata } from 'next';
import { Container } from '@/components/ui';
import { SITE_CONFIG, COMPANY_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `Terms of Service for ${SITE_CONFIG.name}. Read our terms and conditions.`,
};

export default function TermsPage() {
  return (
    <section className="py-20 lg:py-32">
      <Container size="narrow">
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground">
          Terms of Service
        </h1>
        <p className="mt-4 text-muted">Last updated: January 2026</p>

        <div className="prose prose-invert mt-12 max-w-none">
          <h2 className="text-xl font-semibold text-foreground">Agreement to Terms</h2>
          <p className="mt-4 text-muted">
            By accessing or using our website, you agree to be bound by these Terms of Service. 
            If you do not agree to these terms, please do not use our website.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-foreground">Use of Website</h2>
          <p className="mt-4 text-muted">
            You may use our website for lawful purposes only. You agree not to use our website 
            in any way that could damage, disable, or impair our services.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-foreground">Intellectual Property</h2>
          <p className="mt-4 text-muted">
            All content on this website, including text, images, logos, and designs, is the property 
            of {SITE_CONFIG.name} and is protected by copyright and other intellectual property laws.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-foreground">Limitation of Liability</h2>
          <p className="mt-4 text-muted">
            {SITE_CONFIG.name} shall not be liable for any indirect, incidental, special, or 
            consequential damages arising from your use of this website or our services.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-foreground">Contact Us</h2>
          <p className="mt-4 text-muted">
            If you have questions about these Terms, please contact us at{' '}
            <a href={`mailto:${COMPANY_INFO.email}`} className="text-primary hover:underline">
              {COMPANY_INFO.email}
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
