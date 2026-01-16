import type { Metadata } from 'next';
import { Container } from '@/components/ui';
import {
  ConciergeCTA,
  FounderQuote,
  InvestorHero,
  KpiGrid,
  PressLinks,
  WhyUs,
} from '@/components/investor-relations';
import { INVESTOR_RELATIONS_CONTENT } from '@/content/investor-relations';

export const metadata: Metadata = {
  title: 'Investor Relations',
  description:
    'Overview and investor information for Premium Home Design (placeholders for content and links).',
};

export default function InvestorRelationsPage() {
  const content = INVESTOR_RELATIONS_CONTENT;

  return (
    <div className="bg-background text-text-primary">
      <InvestorHero title={content.hero.title} intro={content.hero.intro} />

      <FounderQuote
        quote={content.founderQuote.quote}
        name={content.founderQuote.name}
        title={content.founderQuote.title}
      />

      <section className="bg-background" aria-labelledby="investor-overview">
        <Container className="py-16 sm:py-20">
          <div className="max-w-[70ch]">
            <h2
              id="investor-overview"
              className="text-2xl font-bold tracking-tight text-text-primary"
            >
              {content.overview.heading}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-text-secondary sm:text-xl text-pretty">
              {content.overview.body}
            </p>
          </div>
        </Container>
        <div className="px-4 sm:px-6 lg:px-8">
          <hr className="mx-auto max-w-7xl border-t border-surface-highlight" />
        </div>
      </section>

      <KpiGrid heading="Key metrics" kpis={content.kpis} />

      <PressLinks heading={content.press.heading} links={content.press.links} />

      <ConciergeCTA
        heading={content.conciergeCta.heading}
        body={content.conciergeCta.body}
        button={content.conciergeCta.button}
      />

      <WhyUs heading={content.whyUs.heading} items={content.whyUs.items} />
    </div>
  );
}
