'use client';

import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.05,
        },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

export function HeroBento() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-background px-4 py-20 sm:px-6 lg:px-8">
            {/* Background grid - Subtle gray lines on white */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

            <div className="relative mx-auto max-w-7xl border border-surface-highlight bg-surface-highlight">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="grid gap-px bg-surface-highlight md:grid-cols-3 md:grid-rows-2"
                >
                    {/* Main Card - High Key Architecture */}
                    <motion.div
                        variants={cardVariants}
                        className="relative col-span-full row-span-2 overflow-hidden bg-background md:col-span-2"
                    >
                        {/* Subtle dark overlay for readability */}
                        <div className="absolute inset-0 bg-gradient-to-br from-black/45 via-black/20 to-transparent" />

                        <div className="relative flex min-h-[400px] flex-col justify-end p-8 md:min-h-[500px] lg:p-12">
                            {/* Label */}
                            <span className="mb-6 inline-flex w-fit items-center gap-2 border border-surface-highlight bg-white px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-text-secondary">
                                <span className="h-1.5 w-1.5 bg-primary" />
                                Residential Architecture
                            </span>

                            {/* H1 Title - Massive Black Typography */}
                            <h1 className="max-w-2xl text-5xl font-black leading-tight tracking-tighter text-text-primary md:text-7xl">
                                Designing <br />
                                the <span className="text-text-primary">Impossible.</span>
                            </h1>

                            {/* Subtitle */}
                            <p className="mt-6 max-w-lg text-lg leading-relaxed text-text-secondary md:text-xl font-light">
                                Espacios que definen el lujo moderno.
                                <br />
                                Sin ornamentos. Solo arquitectura pura.
                            </p>
                        </div>
                    </motion.div>

                    {/* Action Card - Ferrari Red CTA */}
                    <motion.div
                        variants={cardVariants}
                        className="group relative flex flex-col justify-between overflow-hidden bg-white p-8 transition-all duration-300 md:col-span-1"
                    >
                        <div>
                            <p className="text-xs font-medium uppercase tracking-widest text-text-secondary">
                                Start Project
                            </p>
                            <h2 className="mt-3 text-3xl font-bold tracking-tight text-text-primary">
                                Build <span className="text-primary">Legacy</span>
                            </h2>
                        </div>

                        <Link
                            href="/contact"
                            className="mt-8 inline-flex w-full items-center justify-center gap-3 bg-primary px-6 py-5 text-sm font-bold text-white transition-all duration-300 hover:bg-primary-dark"
                        >
                            Iniciar ahora
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </motion.div>

                    {/* Stats Card - Swiss Typographic Style */}
                    <motion.div
                        variants={cardVariants}
                        className="relative flex flex-col justify-between overflow-hidden bg-surface p-8 md:col-span-1"
                    >
                        <div>
                            {/* Big Number */}
                            <span className="block text-8xl font-black tracking-tighter text-text-primary leading-none">
                                15
                            </span>
                            <span className="mt-2 block text-sm font-medium uppercase tracking-widest text-text-secondary">
                                Years of Excellence
                            </span>
                        </div>

                        <div className="mt-8 space-y-4">
                            <div className="flex items-baseline justify-between border-b border-surface-highlight pb-2">
                                <span className="text-2xl font-bold text-text-primary">200+</span>
                                <span className="text-xs text-text-secondary uppercase">Projects</span>
                            </div>
                            <div className="flex items-baseline justify-between border-b border-surface-highlight pb-2">
                                <span className="text-2xl font-bold text-text-primary">$500M</span>
                                <span className="text-xs text-text-secondary uppercase">Value</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default HeroBento;
