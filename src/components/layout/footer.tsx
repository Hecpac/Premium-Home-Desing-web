import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';

const FOOTER_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Services', href: '/services' },
  { label: 'Process', href: '/process' },
  { label: 'Investor Relations', href: '/investor-relations' },
  { label: 'Journal', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t-2 border-primary">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">

          {/* Column 1: Giant Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="block">
              <h2 className="text-4xl font-black leading-none tracking-tighter text-text-primary lg:text-5xl break-words">
                Premium<br />Home<br />Design
              </h2>
            </Link>
            <p className="mt-6 text-sm text-text-secondary max-w-xs">
              Elevating residential architecture in Dallas-Fort Worth through uncompromising design and execution.
            </p>
          </div>

          {/* Column 2: Sitemap */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-primary">
              Menu
            </h3>
            <ul className="mt-6 space-y-4">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact - Mono */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-primary">
              Contact
            </h3>
            <div className="mt-6 font-mono text-sm text-text-secondary space-y-4">
              <p>
                <span className="block text-text-primary mb-1">Office</span>
                Dallas, TX 75201
              </p>
              <p>
                <span className="block text-text-primary mb-1">Email</span>
                info@premiumhome.design
              </p>
              <p>
                <span className="block text-text-primary mb-1">Phone</span>
                +1 (214) 555-0123
              </p>
            </div>
          </div>

          {/* Column 4: Agentic Badge */}
          <div className="flex flex-col justify-start lg:items-end">
            <div className="inline-flex items-center gap-2 rounded-full border border-surface-highlight bg-white px-3 py-1">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="font-mono text-xs font-medium text-text-secondary">
                Agentic Ready v3.0
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-surface-highlight pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="font-mono text-xs text-text-secondary">
              &copy; {currentYear} Premium Home Design. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-xs text-text-secondary hover:text-text-primary">
                Privacy
              </Link>
              <Link href="/terms" className="text-xs text-text-secondary hover:text-text-primary">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
