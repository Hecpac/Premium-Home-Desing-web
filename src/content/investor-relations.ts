export type InvestorKpi = {
  value: string;
  label: string;
};

export type PressLink = {
  outlet: string;
  headline: string;
  href: string;
};

export type WhyUsItem = {
  title: string;
  description: string;
};

export type InvestorRelationsContent = {
  hero: {
    title: string;
    intro: string;
  };
  founderQuote: {
    quote: string;
    name: string;
    title: string;
  };
  overview: {
    heading: string;
    body: string;
  };
  kpis: InvestorKpi[];
  press: {
    heading: string;
    links: PressLink[];
  };
  conciergeCta: {
    heading: string;
    body: string;
    button: {
      label: string;
      href: string;
    };
  };
  whyUs: {
    heading: string;
    items: WhyUsItem[];
  };
};

export const INVESTOR_RELATIONS_CONTENT = {
  hero: {
    title: 'Investor Relations',
    intro:
      'We partner with long-term investors who believe premium design, disciplined delivery, and enduring value can coexist. Below is a snapshot of how we think, what we’re building, and where we’re headed.',
  },
  founderQuote: {
    quote:
      'The most valuable homes aren’t the loudest—they’re the ones that quietly outperform for decades. Our job is to make every decision feel inevitable: fewer compromises, tighter execution, better outcomes.',
    name: 'Alex Rivera',
    title: 'Founder & CEO',
  },
  overview: {
    heading: 'Overview',
    body:
      'Premium Home Design is a design-led residential builder focused on repeatable, high-quality delivery. We invest in systems, partners, and craftsmanship so each project scales operationally while remaining bespoke in experience.',
  },
  kpis: [
    { value: '15+', label: 'Years of delivery' },
    { value: '200+', label: 'Projects completed' },
    { value: '8–16 wks', label: 'Typical pre-construction window' },
    { value: '4.9/5', label: 'Client satisfaction' },
  ],
  press: {
    heading: 'In the Press',
    links: [
      {
        outlet: 'Design Journal',
        headline: 'How modern residential teams scale quality without losing craft',
        href: 'https://example.com/press/design-journal',
      },
      {
        outlet: 'DFW Business Review',
        headline: 'Premium homebuilding trends: material choices, timelines, and risk',
        href: 'https://example.com/press/dfw-business-review',
      },
      {
        outlet: 'Architecture Weekly',
        headline: 'Editorial: the return of restrained luxury in residential design',
        href: 'https://example.com/press/architecture-weekly',
      },
      {
        outlet: 'Build Smarter',
        headline: 'A systems-first approach to procurement and on-site execution',
        href: 'https://example.com/press/build-smarter',
      },
      {
        outlet: 'Modern Living',
        headline: 'What clients value most in premium renovations',
        href: 'https://example.com/press/modern-living',
      },
      {
        outlet: 'Real Estate Insights',
        headline: 'Long-term value drivers in high-end residential projects',
        href: 'https://example.com/press/real-estate-insights',
      },
    ],
  },
  conciergeCta: {
    heading: 'Concierge for investors',
    body:
      'If you’re evaluating our model, we can share a concise overview of our pipeline, delivery approach, and growth strategy. Reach out and we’ll respond within one business day.',
    button: {
      label: 'Request a conversation',
      href: '/contact',
    },
  },
  whyUs: {
    heading: 'Why us',
    items: [
      {
        title: 'Design-led, operations-backed',
        description:
          'Great outcomes are a system: clear standards, predictable decision-making, and a team that executes without drama.',
      },
      {
        title: 'Quality that compounds',
        description:
          'We refine details, vendors, and workflows across projects so every home benefits from hard-won lessons.',
      },
      {
        title: 'Risk managed early',
        description:
          'We surface constraints in pre-construction, align scope, and protect schedules through disciplined documentation.',
      },
      {
        title: 'A premium client experience',
        description:
          'White-glove communication, transparent milestones, and a finish level that holds up to close inspection.',
      },
    ],
  },
} satisfies InvestorRelationsContent;
