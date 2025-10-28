import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export default function HeroSection() {
    const titleReveal = useScrollReveal({ threshold: 0.1 });
    const subtitleReveal = useScrollReveal({ threshold: 0.1 });
    const descriptionReveal = useScrollReveal({ threshold: 0.1 });
    const buttonsReveal = useScrollReveal({ threshold: 0.1 });
    const imageReveal = useScrollReveal({ threshold: 0.1 });

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="flex min-h-screen items-center justify-center bg-white dark:bg-gray-900">
            <div className="container mx-auto max-w-7xl px-4 md:px-6">
                <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                    {/* Contenido izquierdo */}
                    <div className="flex flex-col justify-center space-y-6">
                        <div className="space-y-4">
                            <h1
                                ref={titleReveal.ref}
                                className={`bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent transition-all duration-700 ease-out sm:text-5xl xl:text-6xl/none dark:from-white dark:to-gray-300 ${
                                    titleReveal.isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                }`}
                            >
                                Manuel Tejada Guzmán
                            </h1>
                            <h2
                                ref={subtitleReveal.ref}
                                className={`text-xl font-medium text-gray-600 transition-all delay-100 duration-700 ease-out sm:text-2xl dark:text-gray-300 ${
                                    subtitleReveal.isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                }`}
                            >
                                Desarrollador de Software Full-Stack
                            </h2>
                            <p
                                ref={descriptionReveal.ref}
                                className={`max-w-[600px] leading-relaxed text-gray-600 transition-all delay-200 duration-700 ease-out md:text-lg dark:text-gray-300 ${
                                    descriptionReveal.isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                }`}
                            >
                                Desarrollador con más de 3 años de experiencia profesional construyendo aplicaciones web completas. Especializado en
                                Laravel, PHP, JavaScript y tecnologías modernas del ecosistema web. Apasionado por crear soluciones eficientes y
                                escalables.
                            </p>
                        </div>
                        <div
                            ref={buttonsReveal.ref}
                            className={`flex flex-col gap-3 transition-all delay-300 duration-700 ease-out min-[400px]:flex-row ${
                                buttonsReveal.isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}
                        >
                            <button
                                onClick={() => scrollToSection('proyectos')}
                                className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-base text-sm font-medium whitespace-nowrap text-white shadow-sm transition-colors hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-blue-500 dark:hover:bg-blue-600"
                            >
                                Ver Proyectos
                            </button>
                            <a
                                href="/cv.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-sm font-medium whitespace-nowrap text-gray-900 shadow-sm transition-colors hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                            >
                                Descargar CV
                            </a>
                        </div>
                    </div>

                    {/* Foto profesional */}
                    <div
                        ref={imageReveal.ref}
                        className={`flex justify-center transition-all duration-1000 ease-out lg:justify-end ${
                            imageReveal.isInView ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                        }`}
                    >
                        <div className="relative">
                            <div className="h-80 w-80 overflow-hidden rounded-2xl border-2 border-gray-200 bg-gray-100 shadow-2xl lg:h-96 lg:w-96">
                                <img
                                    src="/IMG_0317_retrato.JPG?height=400&width=400"
                                    alt="Manuel Tejada Guzmán - Desarrollador Full-Stack"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            {/* Elemento decorativo */}
                            <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-blue-500/10 blur-xl"></div>
                            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-blue-500/5 blur-xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
