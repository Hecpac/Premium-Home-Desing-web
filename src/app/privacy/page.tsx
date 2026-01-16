import type { Metadata } from 'next';
import { Container } from '@/components/ui';
import { SITE_CONFIG, COMPANY_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy Policy for ${SITE_CONFIG.name}. Learn how we collect, use, and protect your information.`,
};

export default function PrivacyPage() {
  return (
    <section className="py-20 lg:py-32">
      <Container size="narrow">
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground">
          Privacy Policy
        </h1>
        <p className="mt-4 text-muted">Last updated: January 2026</p>

        <div className="prose prose-invert mt-12 max-w-none">
          <h2 className="text-xl font-semibold text-foreground">Information We Collect</h2>
          <p className="mt-4 text-muted">
            We collect information you provide directly to us, such as when you fill out our contact form, 
            request a consultation, or communicate with us. This may include your name, email address, 
            phone number, and details about your project.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-foreground">How We Use Your Information</h2>
          <p className="mt-4 text-muted">
            We use the information we collect to respond to your inquiries, provide our services, 
            send you updates about your project, and improve our website and services.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-foreground">Information Sharing</h2>
          <p className="mt-4 text-muted">
            We do not sell, trade, or otherwise transfer your personal information to third parties 
            without your consent, except as required by law or to trusted partners who assist us 
            in operating our website and conducting our business.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-foreground">Cookies</h2>
          <p className="mt-4 text-muted">
            Our website may use cookies to enhance your experience. You can choose to disable cookies 
            through your browser settings, though this may affect certain functionality.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-foreground">Contact Us</h2>
          <p className="mt-4 text-muted">
            If you have questions about this Privacy Policy, please contact us at{' '}
            <a href={`mailto:${COMPANY_INFO.email}`} className="text-primary hover:underline">
              {COMPANY_INFO.email}
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
