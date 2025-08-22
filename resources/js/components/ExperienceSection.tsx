import { SlidingNumber } from '@/components/animate-ui/text/sliding-number';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
    {
        id: 1,
        company: 'Abatic S.T.',
        position: 'Desarrollador Full-Stack',
        location: 'Paterna del Campo, Huelva, España',
        startDate: 'Febrero 2023',
        endDate: 'Mayo 2025',
        responsibilities: [
            'Desarrollo y mantenimiento de aplicaciones web empresariales utilizando Laravel 9, 11 y 12, PHP, Livewire, Bootstrap 5, JavaScript, CSS3, MySQL y PostgreSQL',
            'Desarrollo y mantenimiento de aplicaciones web empresariales utilizando Delphi 11 y TMS Web Core',
            'Desarrollo de aplicaciones móviles con Flutter y Dart para iOS y Android',
            'Implementación de microservicios y arquitecturas basadas en contenedores con Docker',
            'Implementación de APIs RESTful escalables',
            'Liderazgo técnico en proyectos y mentorización de desarrolladores junior',
        ],
    },
    {
        id: 2,
        company: 'Onutech S.L.',
        position: 'Mantenimiento de Servidores y Redes',
        location: 'Huelva, España',
        startDate: 'Junio 2022',
        endDate: 'Febrero 2023',
        responsibilities: [
            'Administración y mantenimiento de servidores Linux y Windows para clientes empresariales',
            'Configuración y gestión de redes locales y VPNs para garantizar la seguridad y conectividad',
            'Implementación de soluciones de respaldo y recuperación ante desastres',
            'Soporte técnico a usuarios finales y resolución de incidencias relacionadas con hardware y software',
        ],
    },
    {
        id: 3,
        company: 'FiberBlaster',
        position: 'Becario de Gestión y mantenimiento de redes',
        location: 'Paterna del Campo, Huelva, España',
        startDate: 'Marzo 2017',
        endDate: 'Junio 2017',
        responsibilities: [
            'Asistencia en la instalación y configuración de redes de fibra óptica',
            'Soporte técnico a clientes en la resolución de problemas de conectividad',
            'Colaboración en proyectos de expansión de red y mejora de infraestructura',
            'Documentación de procesos y procedimientos técnicos',
        ],
    },
    {
        id: 4,
        company: 'PCBox',
        position: 'Becario de mantenimiento y reparación de equipos informáticos',
        location: 'Huelva, España',
        startDate: 'Marzo 2015',
        endDate: 'Junio 2015',
        responsibilities: [
            'Diagnóstico y reparación de hardware y software de equipos informáticos',
            'Instalación y configuración de sistemas operativos y aplicaciones',
            'Atención al cliente y asesoramiento técnico sobre productos y servicios',
            'Asistencia al equipo técnico en la atención al cliente y resolución de incidencias',
            'Mantenimiento preventivo y correctivo de equipos informáticos',
            'Colaboración en la gestión de inventario de equipos y piezas de repuesto',
        ],
    },
    {
        id: 5,
        company: 'Freelance',
        position: 'Tecnico Informático y Desarrollador Web',
        location: 'Remoto',
        startDate: 'Enero 2011',
        endDate: 'Presente',
        responsibilities: [
            'Desarrollo de aplicaciones web y móviles personalizadas para clientes utilizando tecnologías como Laravel, React, PHP, JavaScript, HTML5, CSS3, Bootstrap, Tailwind CSS y Flutter',
            'Reparación y mantenimiento de equipos informáticos (móviles, PCs, tablets, etc), incluyendo diagnóstico de hardware y software, instalación de sistemas operativos y aplicaciones, y optimización del rendimiento',
        ],
    },
];

export default function ExperienceSection() {
    return (
        <section id="experiencia" className="flex min-h-screen items-center justify-center bg-white pt-20 dark:bg-gray-900">
            <div className="container mx-auto max-w-7xl px-4 md:px-6">
                <div className="mb-16 flex flex-col items-center justify-center space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-white">
                        Experiencia Profesional
                    </h2>
                    <p className="max-w-[900px] text-gray-600 md:text-lg dark:text-gray-300">
                        Mi trayectoria profesional en el desarrollo de software, desde mis inicios como freelance hasta mi rol actual como
                        desarrollador senior, construyendo soluciones robustas y escalables.
                    </p>
                </div>

                <div className="relative mx-auto max-w-5xl">
                    {/* Línea vertical del timeline - Usando estilo inline para garantizar visibilidad */}
                    <div
                        className="absolute top-0 bottom-0 left-8 md:left-1/2 md:-translate-x-px md:transform"
                        style={{
                            width: '3px',
                            backgroundColor: '#3b82f6',
                            opacity: 0.4,
                        }}
                    ></div>

                    <div className="space-y-12">
                        {experiences.map((experience, index) => (
                            <div
                                key={experience.id}
                                className={`relative flex items-start ${
                                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                } flex-col md:items-center`}
                            >
                                {/* Punto del timeline - Usando estilo inline para garantizar visibilidad */}
                                <div
                                    className="absolute left-6 z-10 rounded-full shadow-lg md:left-1/2 md:-translate-x-2 md:transform"
                                    style={{
                                        width: '16px',
                                        height: '16px',
                                        backgroundColor: '#3b82f6',
                                        border: '4px solid #ffffff',
                                        boxShadow: '0 0 0 1px rgba(59, 130, 246, 0.3)',
                                    }}
                                ></div>

                                {/* Contenido */}
                                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                    <div className="rounded-lg border border-border bg-card p-5 shadow-sm transition-shadow duration-300 hover:shadow-md">
                                        <div className="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{experience.position}</h3>
                                            <div className="mt-1 flex items-center text-sm text-gray-500 sm:mt-0 dark:text-gray-400">
                                                <Calendar className="mr-1 h-4 min-w-4" />
                                                <span>
                                                    {experience.startDate} - {experience.endDate}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="mb-4 flex items-center">
                                            <h4 className="mr-3 text-lg font-medium text-blue-600 dark:text-blue-400">{experience.company}</h4>
                                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                                <MapPin className="mr-1 h-4 w-4" />
                                                <span>{experience.location}</span>
                                            </div>
                                        </div>

                                        <ul className="space-y-2">
                                            {experience.responsibilities.map((responsibility, idx) => (
                                                <li key={idx} className="flex items-start">
                                                    <div
                                                        className="mt-2 mr-3 flex-shrink-0 rounded-full"
                                                        style={{
                                                            width: '8px',
                                                            height: '8px',
                                                            backgroundColor: '#3b82f6',
                                                        }}
                                                    ></div>
                                                    <span className="leading-relaxed text-gray-600 dark:text-gray-300">{responsibility}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Espaciador para el diseño alternado en desktop */}
                                <div className="hidden md:block md:w-1/2"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Estadísticas adicionales */}
                <div className="mt-16 grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
                    <div className="space-y-2">
                        <div className="flex items-center justify-center text-3xl font-bold text-blue-600 dark:text-blue-400">
                            <SlidingNumber
                                number={3}
                                inView={true}
                                inViewOnce={false}
                                className="text-3xl font-bold text-blue-600 dark:text-blue-400"
                            />
                            +
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Años de Experiencia en Desarrollo Web</div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-center text-3xl font-bold text-blue-600 dark:text-blue-400">
                            <SlidingNumber
                                number={25}
                                inView={true}
                                inViewOnce={false}
                                className="text-3xl font-bold text-blue-600 dark:text-blue-400"
                            />
                            +
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Proyectos Completados</div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-center text-3xl font-bold text-blue-600 dark:text-blue-400">
                            <SlidingNumber
                                number={4}
                                inView={true}
                                inViewOnce={false}
                                className="text-3xl font-bold text-blue-600 dark:text-blue-400"
                            />
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Empresas</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
