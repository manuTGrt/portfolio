import AnimatedSection from '@/components/AnimatedSection';
import ExperienceSection from '@/components/ExperienceSection';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import AppLayout from '@/layouts/AppLayout';

export default function Portfolio() {
    return (
        <AppLayout>
            <main className="scroll-smooth">
                <HeroSection />

                <AnimatedSection delay={100}>
                    <ProjectsSection />
                </AnimatedSection>

                <AnimatedSection delay={100}>
                    {' '}
                    {/* Delay ajustado */}
                    <ExperienceSection />
                </AnimatedSection>

                <AnimatedSection delay={100}>
                    {' '}
                    {/* Delay ajustado */}
                    <SkillsSection />
                </AnimatedSection>

                {/* <AnimatedSection delay={400}>
                    {' '} */}
                {/* Nueva sección de Hobbies */}
                {/* <HobbiesSection />
                </AnimatedSection> */}
            </main>
        </AppLayout>
    );
}
