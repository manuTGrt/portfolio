import AnimatedSection from '@/components/AnimatedSection';
import ExperienceSection from '@/components/ExperienceSection';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import SoftSkillsSection from '@/components/SoftSkillsSection';
import AppLayout from '@/layouts/AppLayout';

export default function Portfolio() {
    return (
        <AppLayout>
            <main className="scroll-smooth">
                <AnimatedSection delay={100}>
                    <HeroSection />
                </AnimatedSection>

                <AnimatedSection delay={100}>
                    <ExperienceSection />
                </AnimatedSection>

                <AnimatedSection delay={100}>
                    <SkillsSection />
                </AnimatedSection>

                <AnimatedSection delay={100}>
                    <ProjectsSection />
                </AnimatedSection>

                <AnimatedSection delay={100}>
                    <SoftSkillsSection />
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
