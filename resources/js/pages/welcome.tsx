// resources/js/Pages/Welcome.jsx

import AnimatedSection from '@/components/_animated-section';
import HeroSection from '@/components/_hero-section';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/projects-section';
import SkillsSection from '@/components/SkillsSection';
import PortfolioLayout from '@/layouts/portfolio-layout';

export default function Welcome() {
    return (
        <PortfolioLayout>
            <main className="scroll-smooth">
                <HeroSection />

                <AnimatedSection>
                    <ProjectsSection />
                </AnimatedSection>

                <AnimatedSection delay={100} direction="right">
                    <ExperienceSection />
                </AnimatedSection>

                <AnimatedSection delay={200} direction="up">
                    <SkillsSection />
                </AnimatedSection>
            </main>
        </PortfolioLayout>
    );
}
