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
        <section className="relative w-full bg-background border-t border-surface-highlight">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
                {/* Header */}
                <div className="flex items-end justify-between mb-24 pb-8 border-b border-surface-highlight">
                    <div>
                        <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">
                            Selected Works
                        </span>
                        <h2 className="mt-2 text-4xl font-black tracking-tighter text-text-primary uppercase">
                            Recent <span className="text-primary">Projects</span>
                        </h2>
                    </div>
                    <Link
                        href="/projects"
                        className="hidden text-sm font-medium text-text-primary hover:text-primary transition-colors md:block uppercase tracking-widest"
                    >
                        View All Projects
                    </Link>
                </div>

                {/* Sticky Stacking List */}
                <div className="flex flex-col gap-0">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="sticky top-24 min-h-[60vh] bg-background border-t border-surface-highlight py-12 transition-all duration-500"
                            style={{
                                top: `${6 + (index * 2)}rem`,
                                zIndex: index
                            }}
                        >
                            <Link href={`/projects/${project.slug}`} className="group block h-full">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
                                    {/* Info Side */}
                                    <div className="flex flex-col justify-between h-full order-2 md:order-1">
                                        <div>
                                            <span className="font-mono text-xs text-text-secondary block mb-4">
                                                {project.id}
                                            </span>
                                            <h3 className="font-serif text-5xl md:text-7xl text-text-primary group-hover:text-primary transition-colors duration-300">
                                                {project.title}
                                            </h3>
                                            <div className="mt-8 flex items-center gap-4">
                                                <div className="h-px w-12 bg-surface-highlight group-hover:bg-primary transition-colors duration-300" />
                                                <p className="font-mono text-sm text-text-secondary uppercase tracking-widest">
                                                    {project.location}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 text-text-primary group-hover:text-primary transition-colors">
                                            <span className="text-sm font-bold uppercase tracking-wider">Explore Project</span>
                                            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </div>
                                    </div>

                                    {/* Image Side - Reveal Effect */}
                                    <div className="relative aspect-[4/3] md:aspect-auto md:h-full overflow-hidden order-1 md:order-2 bg-surface-highlight">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
