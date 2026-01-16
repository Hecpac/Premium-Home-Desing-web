import { Container } from '@/components/ui';

export type InvestorHeroProps = {
  title: string;
  intro: string;
};

export function InvestorHero({ title, intro }: InvestorHeroProps) {
  return (
    <header className="bg-background">
      <Container className="py-16 sm:py-20">
        <div className="max-w-[70ch]">
          <p className="font-mono text-xs uppercase tracking-widest text-text-secondary">
            For partners & long-term supporters
          </p>
          <h1 className="mt-4 text-5xl font-black leading-[1.05] tracking-tighter text-text-primary sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary sm:text-xl text-pretty">
            {intro}
          </p>
        </div>
      </Container>
      <div className="px-4 sm:px-6 lg:px-8">
        <hr className="mx-auto max-w-7xl border-t border-surface-highlight" />
      </div>
    </header>
  );
}
