import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Brain, Lightbulb, Target, Users, Zap } from 'lucide-react';

const softSkills = [
    {
        title: 'Aprendizaje Continuo',
        icon: <BookOpen className="h-6 w-6" />,
        color: 'bg-blue-500/10 text-blue-600',
        description:
            'No espero a que me enseñen. He implementado CI/CD, montado servidores NAS y convertido una impresora 3D en láser por pura curiosidad técnica. Cada tecnología nueva es una oportunidad de expandir lo que puedo construir.',
    },
    {
        title: 'Resolución de Problemas',
        icon: <Target className="h-6 w-6" />,
        color: 'bg-green-500/10 text-green-600',
        description:
            'Transformo desafíos técnicos en soluciones funcionales. Desde optimizar arquitecturas hasta mejorar el rendimiento, disfruto enfrentarme a retos complejos y encontrar el camino más eficiente hacia resultados medibles.',
    },
    {
        title: 'Pensamiento Estratégico',
        icon: <Brain className="h-6 w-6" />,
        color: 'bg-purple-500/10 text-purple-600',
        description:
            'Combino precisión técnica con visión de largo plazo. Planifico arquitecturas limpias, escalables y comprensibles, porque el código que escribo hoy debe tener sentido mañana y funcionar durante años.',
    },
    {
        title: 'Introspección',
        icon: <Zap className="h-6 w-6" />,
        color: 'bg-yellow-500/10 text-yellow-600',
        description:
            'Reconozco mis impulsos y gestiono mi respuesta emocional. Aplico comunicación empática y reflexiva en entornos laborales, porque la autoconciencia es el primer paso hacia el crecimiento profesional sostenible.',
    },
    {
        title: 'Resiliencia',
        icon: <Users className="h-6 w-6" />,
        color: 'bg-red-500/10 text-red-600',
        description:
            'Ante conflictos o momentos de presión, elijo la estrategia sobre la reacción. Mantengo la calma, busco soluciones constructivas y lidero con equilibrio emocional, incluso cuando la situación es desafiante.',
    },
    {
        title: 'Creatividad Práctica',
        icon: <Lightbulb className="h-6 w-6" />,
        color: 'bg-orange-500/10 text-orange-600',
        description:
            'Unifico lo técnico con lo visual. Desde fotografía hasta diseño de interfaces y apps de realidad aumentada, traduzco ideas creativas en experiencias funcionales que resuelven problemas reales.',
    },
];

export default function SoftSkillsSection() {
    return (
        <section id="mentalidad" className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
                <div className="mb-16 flex flex-col items-center justify-center space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Mentalidad y Enfoque</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-lg">
                        Más allá del código, mi manera de pensar y crear. Estas son las habilidades que definen cómo trabajo, aprendo y enfrento cada
                        desafío profesional.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {softSkills.map((skill, index) => (
                        <Card
                            key={index}
                            className="group border border-border bg-card shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            <CardHeader className="pb-4">
                                <CardTitle className="flex items-start gap-4">
                                    <div
                                        className={`flex-shrink-0 rounded-lg p-3 transition-transform duration-300 group-hover:scale-110 ${skill.color}`}
                                    >
                                        {skill.icon}
                                    </div>
                                    <span className="text-xl leading-tight font-semibold">{skill.title}</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm leading-relaxed text-muted-foreground">{skill.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="mx-auto max-w-3xl rounded-lg border border-border bg-card p-8 shadow-sm">
                        <h3 className="mb-4 text-xl font-bold">El resultado</h3>
                        <p className="leading-relaxed text-muted-foreground">
                            No solo entrego código funcional. Construyo software pensando en las personas que lo usarán, en el equipo que lo mantendrá
                            y en el impacto que generará. Combino autonomía técnica con madurez profesional para crear soluciones que realmente
                            importan.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
