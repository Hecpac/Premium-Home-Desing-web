'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        id: '01',
        title: 'Villa Highland Park',
        location: 'Highland Park, TX',
        image: 'https://images.unsplash.com/photo-1600596542815-e32870110274?auto=format&fit=crop&q=80&w=1600', // Modern white villa
        slug: 'villa-highland-park'
    },
    {
        id: '02',
        title: 'Preston Hollow Estate',
        location: 'Preston Hollow, TX',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1600', // Clean architectural lines
        slug: 'preston-hollow-estate'
    },
    {
        id: '03',
        title: 'Modern Farmhouse',
        location: 'University Park, TX',
        image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1600', // Modern farmhouse
        slug: 'modern-farmhouse'
    }
];

export function ProjectGallery() {
    return (
        <section className="w-full border-t border-surface-highlight bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header - Subtle & Technical */}
                <div className="flex items-end justify-between py-12 border-b border-surface-highlight">
                    <div>
                        <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">
                            Selected Works
                        </span>
                        <h2 className="mt-2 text-3xl font-bold tracking-tight text-text-primary">
                            Recent Projects
                        </h2>
                    </div>
                    <Link
                        href="/projects"
                        className="hidden text-sm font-medium text-text-primary hover:text-primary transition-colors md:block"
                    >
                        View All Projects
                    </Link>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-surface-highlight border-b border-surface-highlight">
                    {projects.map((project) => (
                        <Link
                            key={project.id}
                            href={`/projects/${project.slug}`}
                            className="group block relative"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden w-full bg-surface-highlight/20">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-all duration-700 md:grayscale group-hover:grayscale-0 group-hover:scale-105"
                                />

                                {/* Overlay for smooth transition */}
                                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            <div className="p-6 md:p-8 bg-white relative z-10 border-t md:border-t-0 border-surface-highlight md:absolute md:bottom-0 md:left-0 md:right-0 md:translate-y-full md:group-hover:translate-y-0 md:transition-transform md:duration-500 md:border-t md:border-surface-highlight">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <span className="font-mono text-xs text-text-secondary block mb-2">
                                            {project.id}
                                        </span>
                                        <h3 className="font-sans text-lg font-semibold text-text-primary group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="font-sans text-sm text-text-secondary mt-1">
                                            {project.location}
                                        </p>
                                    </div>
                                    <ArrowUpRight className="w-5 h-5 text-primary opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />
                                </div>
                            </div>

                            {/* Mobile-only visible details if we want them always visible on mobile, 
                                but the design asks for clean look. I'll stick to the transform approach 
                                for desktop but ensuring content is visible on mobile.
                                Actually, let's keep it simple and elegant: 
                                Title below image is standard Xrysi Tomi.
                            */}
                            <div className="block md:hidden p-6">
                                <span className="font-mono text-xs text-text-secondary block mb-1">
                                    {project.id}
                                </span>
                                <h3 className="text-lg font-semibold text-text-primary">
                                    {project.title}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
