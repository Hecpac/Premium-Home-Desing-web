import { BackToTop } from "@/components/ui";
import HeroSection from "@/components/HeroSection";
import { HeroStats } from "@/components/hero/HeroStats";
import { InsightBrief } from "@/components/features/InsightBrief";
import { TechnicalProcessTimeline } from "@/components/features/TechnicalProcessTimeline";
import { ServicesGrid } from "@/components/features/ServicesGrid";
import { HeroPin } from "@/components/motion/HeroPin";
import { CapabilitiesReveal } from "@/components/motion/CapabilitiesReveal";
import { ProcessPin } from "@/components/motion/ProcessPin";
import { InsightsReveal } from "@/components/motion/InsightsReveal";
import { ExecutionProtocol } from "@/components/home/ExecutionProtocol";
import ProjectShowcase from "@/components/ProjectShowcase";

export default function Home() {
    return (
        <div className="min-h-screen overflow-x-hidden">
            <main id="main-content" className="relative pt-14">
                {/* 1. HERO (keep) */}
                <HeroPin>
                    <HeroSection />
                </HeroPin>

                <div className="mt-6 md:mt-10">
                    <HeroStats />
                </div>

                {/* 2. CINEMATIC SCROLL GALLERY */}
                <ProjectShowcase />

                {/* 3. EXECUTION PROTOCOL */}
                <section className="relative z-10">
                    <ExecutionProtocol />
                </section>

                {/* 4. CAPABILITIES */}
                <section id="capabilities" className="relative z-10 scroll-mt-20 py-32">
                    <CapabilitiesReveal>
                        <ServicesGrid />
                    </CapabilitiesReveal>
                </section>

                {/* 5. PROCESS */}
                <section id="process" className="relative z-10 scroll-mt-20">
                    <ProcessPin>
                        <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-24 md:pt-32">
                            <div className="mb-16 max-w-2xl">
                                <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4 text-foreground">
                                    Execution Protocol
                                </h2>
                                <p className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
                                    {"//"} From Feasibility to Handover
                                </p>
                            </div>
                        </div>

                        <TechnicalProcessTimeline />
                    </ProcessPin>
                </section>

                {/* 6. JOURNAL */}
                <section id="journal" className="border-t border-border scroll-mt-20">
                    <InsightsReveal>
                        <InsightBrief />
                    </InsightsReveal>
                </section>

            </main>

            <BackToTop threshold={400} />
        </div>
    );
}
