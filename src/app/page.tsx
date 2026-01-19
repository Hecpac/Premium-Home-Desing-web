import { Hero } from "@/components/home/Hero";
import { HowWeWork } from "@/components/home/HowWeWork";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Capabilities } from "@/components/home/Capabilities";
import { Process } from "@/components/home/Process";
import { Contact } from "@/components/home/Contact";
import { Footer } from "@/components/layout";
import { HeroStats } from "@/components/home/HeroStats";

export default function Home() {
    return (
        <main className="relative w-full min-h-screen bg-[var(--color-canvas)] text-[var(--color-ink)] selection:bg-[var(--color-accent)] selection:text-white">
            {/* 1. LAYER: THE STATEMENT (Light Mode) */}
            {/* El Hero maneja su propia salida con useScroll para el efecto blur */}
            <Hero />

            {/* ✅ NUEVO: “leyenda / stats” debajo del hero (tipo Architect) */}
            <div className="relative z-10 -mt-8 md:-mt-12">
                <HeroStats />
            </div>

            {/* 2. LAYER: THE PROCESS (Light Mode Context) */}
            <HowWeWork />

            {/* 3. LAYER: THE EVIDENCE (Dark Mode Context) */}
            <div className="relative z-10 w-full bg-[#21201b] text-[#fffbf5]">
                <FeaturedProjects />
            </div>

            {/* 4. LAYER: THE LEDGER (Light Mode Context) */}
            <div className="relative z-10 w-full bg-[var(--color-canvas)]">
                <Capabilities />
            </div>

            {/* 5. LAYER: THE PROTOCOL (Dark Mode Context) */}
            <div className="relative z-10 w-full bg-[#21201b] text-[#fffbf5]">
                <Process />
            </div>

            {/* 6. LAYER: THE RELEASE (Light Mode Context) */}
            <div className="relative z-10 w-full bg-[var(--color-canvas)]">
                <Contact />
            </div>

            {/* ✅ Footer (para no dejar import muerto y cerrar la narrativa) */}
            <Footer />
        </main>
    );
}
