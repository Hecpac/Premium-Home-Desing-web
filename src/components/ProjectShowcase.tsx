'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// Tipado para los proyectos
interface Project {
    id: string;
    title: string;
    category: string;
    location: string;
    year: string;
    dimensions: string;
    imageUrl: string;
    link: string;
}

// Datos basados en tu sitio actual, listos para producción
const PROJECTS: Project[] = [
    {
        id: '01',
        title: 'Skyline Corporate Hub',
        category: 'Commercial',
        location: 'New York, USA',
        year: '2024',
        dimensions: '45,000 sq ft',
        imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
        link: '/projects/skyline-corporate-hub',
    },
    {
        id: '02',
        title: 'LuxeHaven Villa',
        category: 'Residential',
        location: 'Beverly Hills, CA',
        year: '2023',
        dimensions: '12,500 sq ft',
        imageUrl: 'https://images.unsplash.com/photo-1600596542815-e32c28308f1c?q=80&w=1975&auto=format&fit=crop',
        link: '/projects/luxehaven-villa',
    },
    {
        id: '03',
        title: 'Celestial Towers',
        category: 'Mixed Use',
        location: 'Dubai, UAE',
        year: '2025',
        dimensions: '120,000 sq ft',
        imageUrl: 'https://images.unsplash.com/photo-1577907572620-1d8995a56d95?q=80&w=2070&auto=format&fit=crop',
        link: '/projects/celestial-towers',
    },
];

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <Link href={project.link} className="group block w-full">
            {/* 
        LAYOUT LIGHT LUXURY: 
        Bordes sutiles en gris cálido.
      */}
            <div className="flex flex-col md:flex-row w-full min-h-[550px] border-b border-[#E5E5E0] overflow-hidden">

                {/* LADO IZQUIERDO: Información */}
                {/* Fondo: Warm Alabaster (#FAFAF9) -> Hover: ligeramente más oscuro (#F5F5F0) */}
                <div className="w-full md:w-1/2 bg-[#FAFAF9] p-8 md:p-16 flex flex-col justify-between relative transition-colors duration-500 group-hover:bg-[#F0F0EB]">

                    {/* Header de la tarjeta */}
                    <div className="flex justify-between items-start">
                        <span className="text-[#666660] text-xs md:text-sm font-mono tracking-widest uppercase">
                            {project.category}
                        </span>
                        {/* Flecha Dark Charcoal */}
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-[#1C1C1C] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                            <ArrowUpRight size={24} strokeWidth={1.5} />
                        </motion.div>
                    </div>

                    {/* Contenido Central */}
                    <div className="mt-12 md:mt-0">
                        {/* Título en Charcoal Oscuro (#1C1C1C) */}
                        <h3 className="text-3xl md:text-5xl font-light text-[#1C1C1C] mb-8 leading-tight tracking-tight">
                            {project.title}
                        </h3>

                        {/* Detalles en Gris Intermedio (#666660) */}
                        <div className="grid grid-cols-2 gap-y-6 gap-x-8 text-sm text-[#4A4A45] font-light">
                            <div className="flex flex-col gap-1">
                                <span className="text-[#999990] text-[10px] tracking-wider uppercase font-mono">LOCATION</span>
                                {project.location}
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-[#999990] text-[10px] tracking-wider uppercase font-mono">YEAR</span>
                                {project.year}
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-[#999990] text-[10px] tracking-wider uppercase font-mono">AREA</span>
                                {project.dimensions}
                            </div>
                            <div className="flex flex-col justify-end">
                                {/* Enlace "View Project" */}
                                <span className="hidden group-hover:block text-[#1C1C1C] text-xs tracking-widest uppercase border-b border-[#1C1C1C]/30 pb-1 w-max">
                                    View Project
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* LADO DERECHO: Imagen */}
                <div className="w-full md:w-1/2 relative overflow-hidden h-[400px] md:h-auto bg-[#F0F0EB]">
                    <div className="absolute inset-0 bg-[#FAFAF9]/10 z-10 transition-opacity duration-500 group-hover:opacity-0" />

                    <motion.div
                        className="w-full h-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <Image
                            src={project.imageUrl}
                            alt={project.title}
                            fill
                            className="object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-500"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority={project.id === '01'}
                        />
                    </motion.div>
                </div>

            </div>
        </Link>
    );
};

export default function ProjectShowcase() {
    return (
        // Sección principal con fondo Warm Alabaster (#FAFAF9)
        <section className="w-full bg-[#FAFAF9] py-24 md:py-32 border-t border-[#E5E5E0]">
            <div className="container mx-auto px-4 md:px-6">

                {/* Cabecera Light Luxury */}
                <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-[#E5E5E0] pb-8 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-7xl font-light text-[#1C1C1C] tracking-tighter mb-4">
                            What we’ve been up to
                        </h2>
                        <p className="text-[#666660] text-lg font-light leading-relaxed">
                            Crafting timeless spaces through organic intelligence and refined aesthetics.
                        </p>
                    </div>
                    <div className="mb-2">
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 text-[#1C1C1C]/70 hover:text-[#1C1C1C] transition-colors text-sm uppercase tracking-widest border border-[#E5E5E0] px-6 py-3 rounded-full hover:bg-[#F0F0EB]"
                        >
                            View All Projects <ArrowUpRight size={16} />
                        </Link>
                    </div>
                </div>

                {/* Lista de Proyectos */}
                <div className="flex flex-col border-t border-[#E5E5E0]">
                    {PROJECTS.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
