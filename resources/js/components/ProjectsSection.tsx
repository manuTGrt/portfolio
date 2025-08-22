import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'Sistema de Gestión Empresarial',
        description: 'Aplicación web completa para gestión de inventarios, ventas y clientes con dashboard administrativo y reportes en tiempo real.',
        image: '/placeholder.svg?height=300&width=400',
        technologies: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
        githubUrl: 'https://github.com/manuel/proyecto1',
        demoUrl: 'https://demo-proyecto1.com',
    },
    {
        id: 2,
        title: 'E-commerce Moderno',
        description: 'Tienda online responsive con carrito de compras, pasarela de pagos integrada y panel de administración completo.',
        image: '/placeholder.svg?height=300&width=400',
        technologies: ['Laravel', 'React', 'Inertia.js', 'Tailwind CSS', 'Stripe'],
        githubUrl: 'https://github.com/manuel/proyecto2',
        demoUrl: 'https://demo-ecommerce.com',
    },
    {
        id: 3,
        title: 'App de Gestión de Tareas',
        description: 'Aplicación móvil multiplataforma para gestión de proyectos y tareas con sincronización en tiempo real.',
        image: '/placeholder.svg?height=300&width=400',
        technologies: ['Flutter', 'Dart', 'Firebase', 'REST API'],
        githubUrl: 'https://github.com/manuel/proyecto3',
        demoUrl: 'https://play.google.com/store/apps/details?id=com.manuel.tasks',
    },
    {
        id: 4,
        title: 'Dashboard Analítico',
        description: 'Panel de control con visualización de datos, gráficos interactivos y reportes automatizados para análisis empresarial.',
        image: '/placeholder.svg?height=300&width=400',
        technologies: ['Laravel', 'Vue.js', 'Chart.js', 'MySQL', 'Redis'],
        githubUrl: 'https://github.com/manuel/proyecto4',
        demoUrl: 'https://demo-dashboard.com',
    },
    {
        id: 5,
        title: 'Sistema de Reservas',
        description: 'Plataforma de reservas online con calendario interactivo, notificaciones automáticas y gestión de disponibilidad.',
        image: '/placeholder.svg?height=300&width=400',
        technologies: ['Laravel', 'JavaScript', 'FullCalendar', 'Bootstrap', 'MySQL'],
        githubUrl: 'https://github.com/manuel/proyecto5',
        demoUrl: 'https://demo-reservas.com',
    },
    {
        id: 6,
        title: 'API REST Escalable',
        description: 'API robusta con autenticación JWT, documentación automática y arquitectura modular para aplicaciones empresariales.',
        image: '/placeholder.svg?height=300&width=400',
        technologies: ['Laravel', 'PHP', 'JWT', 'Swagger', 'Docker'],
        githubUrl: 'https://github.com/manuel/proyecto6',
        demoUrl: 'https://api-docs.demo.com',
    },
];

export default function ProjectsSection() {
    return (
        <section id="proyectos" className="flex min-h-screen items-center justify-center bg-white dark:bg-gray-900">
            <div className="container px-4 md:px-6">
                <div className="mb-16 flex flex-col items-center justify-center space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Proyectos Destacados</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-lg">
                        Una selección de mis trabajos más representativos, desde aplicaciones web completas hasta APIs escalables. Cada proyecto
                        refleja mi experiencia en diferentes tecnologías y enfoques de desarrollo.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <Card
                            key={project.id}
                            className="group overflow-hidden border-gray-200 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image || '/placeholder.svg'}
                                    alt={`Captura de pantalla del proyecto ${project.title}`}
                                    className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex h-9 items-center justify-center rounded-md bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground ring-offset-background transition-colors hover:bg-secondary/80 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                                    >
                                        <Github className="mr-2 h-4 w-4" />
                                        Código
                                    </a>
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-3 text-sm font-medium whitespace-nowrap text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                                    >
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        Demo
                                    </a>
                                </div>
                            </div>

                            <CardHeader className="pb-3">
                                <CardTitle className="line-clamp-1 text-xl font-semibold">{project.title}</CardTitle>
                                <CardDescription className="line-clamp-2 text-sm text-muted-foreground">{project.description}</CardDescription>
                            </CardHeader>

                            <CardContent className="pb-4">
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <Badge key={tech} variant="secondary" className="text-xs">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>

                            <CardFooter className="flex gap-2 pt-0">
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex h-9 flex-1 items-center justify-center rounded-md border border-input bg-background px-3 text-sm font-medium whitespace-nowrap ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                                >
                                    <Github className="mr-2 h-4 w-4" />
                                    GitHub
                                </a>
                                <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex h-9 flex-1 items-center justify-center rounded-md bg-primary px-3 text-sm font-medium whitespace-nowrap text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                                >
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    Demo
                                </a>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 flex justify-center">
                    <a
                        href="https://github.com/manuTGrt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium whitespace-nowrap ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                    >
                        <Github className="mr-2 h-4 w-4" />
                        Ver todos los proyectos en GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}
