import AppLayout from "@/Layouts/AppLayout"
import HeroSection from "@/Components/HeroSection"
import ProjectsSection from "@/Components/ProjectsSection"
import AnimatedSection from "@/Components/AnimatedSection"

export default function Portfolio() {
  return (
    <AppLayout>
      <main className="scroll-smooth">
        <HeroSection />

        <AnimatedSection>
          <ProjectsSection />
        </AnimatedSection>

        {/* Aquí puedes añadir más secciones */}
      </main>
    </AppLayout>
  )
}
