import { HeroBento } from '@/components/landing/HeroBento';
import { AgenticInput } from '@/components/agentic/AgenticInput';
import { ProjectGallery } from '@/components/landing/ProjectGallery';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-text-primary flex flex-col items-center justify-center p-0 overflow-hidden">
      {/* Background sutil para profundidad */}
      <div className="absolute inset-0 bg-white -z-10" />

      <div className="w-full max-w-7xl mx-auto space-y-24">
        {/* Sección Hero */}
        <HeroBento />

        {/* Sección Agéntica - AI Input */}
        <section className="w-full flex flex-col items-center py-12">
          {/* Section Header */}
          <div className="text-center mb-8">
            <span className="font-mono text-sm uppercase tracking-widest text-muted">
              ¿Tienes una visión?
            </span>
          </div>

          {/* Agentic Input Container */}
          <div className="w-full max-w-2xl">
            <AgenticInput />
          </div>
        </section>

        {/* Separator */}
        <div className="w-full px-4 md:px-8">
          <hr className="border-t border-surface-highlight my-32" />
        </div>

        {/* Sección Galería de Proyectos */}
        <ProjectGallery />
      </div >
    </main >
  );
}
