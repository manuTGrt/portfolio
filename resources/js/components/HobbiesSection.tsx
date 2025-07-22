// Puedes reemplazar estos emojis con SVGs o un set de iconos si lo prefieres
interface Hobby {
    id: number;
    name: string;
    description: string;
    icon: string;
}

const hobbiesData: Hobby[] = [
    { id: 1, name: 'Programación Creativa', description: 'Explorar nuevas tecnologías y construir proyectos innovadores.', icon: '💻' },
    { id: 2, name: 'Lectura de Ciencia Ficción', description: 'Sumergirme en narrativas futuristas y mundos complejos.', icon: '📚' },
    { id: 3, name: 'Ciclismo de Montaña', description: 'Buscar aventuras en senderos desafiantes y rutas escénicas.', icon: '🚵' },
    { id: 4, name: 'Diseño Minimalista', description: 'Apreciar la simplicidad y claridad en la estética visual.', icon: '🎨' },
];

export default function HobbiesSection() {
    return (
        <section id="hobbies" className="bg-gray-50 py-16 md:py-24 dark:bg-gray-800/50">
            <div className="container mx-auto max-w-5xl px-6 lg:px-8">
                <header className="mb-12 text-center md:mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">Más Allá del Código</h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Un vistazo a mis pasiones e intereses fuera del trabajo.</p>
                </header>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
                    {hobbiesData.map((hobby) => (
                        <div
                            key={hobby.id}
                            className="flex flex-col items-start rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-blue-500 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-400"
                        >
                            {hobby.icon && <div className="mb-4 text-4xl text-blue-600 dark:text-blue-400">{hobby.icon}</div>}
                            <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{hobby.name}</h3>
                            <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">{hobby.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
