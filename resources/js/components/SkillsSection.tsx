import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, Database, Globe, Palette, Server, Settings, Smartphone, Wrench } from 'lucide-react';

const skillsData = [
    {
        category: 'Backend',
        icon: <Server className="h-6 w-6" />,
        color: 'bg-blue-500/10 text-blue-600 border-blue-200',
        skills: [
            { name: 'PHP', level: 'Avanzado', years: '3+ años' },
            { name: 'Laravel', level: 'Avanzado', years: '2+ años' },
            { name: 'REST APIs', level: 'Avanzado', years: '2+ años' },
            { name: 'Delphi', level: 'Intermedio', years: '1+ año' },
            { name: 'Node.js', level: 'Básico', years: '< 1 año' },
        ],
    },
    {
        category: 'Frontend',
        icon: <Globe className="h-6 w-6" />,
        color: 'bg-green-500/10 text-green-600 border-green-200',
        skills: [
            { name: 'JavaScript', level: 'Avanzado', years: '3+ años' },
            { name: 'HTML5', level: 'Avanzado', years: '3+ años' },
            { name: 'CSS3', level: 'Avanzado', years: '3+ años' },
            { name: 'React', level: 'Intermedio', years: '1+ año' },
            { name: 'Inertia.js', level: 'Intermedio', years: '1+ año' },
            { name: 'Bootstrap', level: 'Avanzado', years: '2+ años' },
            { name: 'Tailwind CSS', level: 'Intermedio', years: '1+ año' },
        ],
    },
    {
        category: 'Bases de Datos',
        icon: <Database className="h-6 w-6" />,
        color: 'bg-purple-500/10 text-purple-600 border-purple-200',
        skills: [
            { name: 'MySQL', level: 'Avanzado', years: '3+ años' },
            { name: 'PostgreSQL', level: 'Básico', years: '< 1 año' },
            { name: 'Redis', level: 'Básico', years: '< 1 año' },
            { name: 'Eloquent ORM', level: 'Avanzado', years: '2+ años' },
        ],
    },
    {
        category: 'Herramientas & Otros',
        icon: <Wrench className="h-6 w-6" />,
        color: 'bg-orange-500/10 text-orange-600 border-orange-200',
        skills: [
            { name: 'Git', level: 'Avanzado', years: '3+ años' },
            { name: 'Docker', level: 'Básico', years: '1+ año' },
            { name: 'Flutter', level: 'Básico', years: '1+ año' },
            { name: 'Composer', level: 'Avanzado', years: '2+ años' },
            { name: 'NPM', level: 'Intermedio', years: '1+ año' },
            { name: 'Postman', level: 'Intermedio', years: '2+ años' },
        ],
    },
];

const getLevelColor = (level: string) => {
    switch (level) {
        case 'Avanzado':
            return 'bg-green-100 text-green-800 border-green-300';
        case 'Intermedio':
            return 'bg-yellow-100 text-yellow-800 border-yellow-300';
        case 'Básico':
            return 'bg-gray-100 text-gray-800 border-gray-300';
        default:
            return 'bg-gray-100 text-gray-800 border-gray-300';
    }
};

const getSkillIcon = (skillName: string): JSX.Element => {
    const iconMap: { [key: string]: JSX.Element } = {
        PHP: <Code2 className="h-4 w-4" />,
        Laravel: <Server className="h-4 w-4" />,
        JavaScript: <Code2 className="h-4 w-4" />,
        React: <Code2 className="h-4 w-4" />,
        HTML5: <Globe className="h-4 w-4" />,
        CSS3: <Palette className="h-4 w-4" />,
        MySQL: <Database className="h-4 w-4" />,
        Git: <Settings className="h-4 w-4" />,
        Flutter: <Smartphone className="h-4 w-4" />,
        Docker: <Settings className="h-4 w-4" />,
    };
    return iconMap[skillName] || <Code2 className="h-4 w-4" />;
};

export default function SkillsSection() {
    return (
        <section id="habilidades" className="flex min-h-screen items-center justify-center bg-white py-20 dark:bg-gray-900">
            <div className="container px-4 md:px-6">
                <div className="mb-16 flex flex-col items-center justify-center space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Habilidades Técnicas</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-lg">
                        Mi stack tecnológico y herramientas de desarrollo, organizadas por área de especialización. Cada habilidad refleja mi
                        experiencia práctica en proyectos reales.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
                    {skillsData.map((category, index) => (
                        <Card key={index} className="group border border-border bg-card shadow-md transition-all duration-300 hover:shadow-lg">
                            <CardHeader className="pb-4">
                                <CardTitle className="flex items-center gap-3">
                                    <div className={`rounded-lg p-2 ${category.color}`}>{category.icon}</div>
                                    <span className="text-xl font-semibold">{category.category}</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className="flex items-center justify-between rounded-lg bg-background/50 p-3 transition-colors duration-200 hover:bg-background"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="text-muted-foreground">{getSkillIcon(skill.name)}</div>
                                            <div>
                                                <div className="text-sm font-medium">{skill.name}</div>
                                                <div className="text-xs text-muted-foreground">{skill.years}</div>
                                            </div>
                                        </div>
                                        <Badge variant="outline" className={`text-xs ${getLevelColor(skill.level)}`}>
                                            {skill.level}
                                        </Badge>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Sección adicional de especialización */}
                <div className="mt-16 text-center">
                    <h3 className="mb-8 text-2xl font-bold">Especialización Principal</h3>
                    <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-3">
                        <div className="rounded-lg border border-border bg-card p-6">
                            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10">
                                <Server className="h-6 w-6 text-blue-600" />
                            </div>
                            <h4 className="mb-2 font-semibold">Desarrollo Full-Stack</h4>
                            <p className="text-sm text-muted-foreground">
                                Aplicaciones web completas con Laravel y tecnologías modernas del frontend
                            </p>
                        </div>
                        <div className="rounded-lg border border-border bg-card p-6">
                            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10">
                                <Code2 className="h-6 w-6 text-green-600" />
                            </div>
                            <h4 className="mb-2 font-semibold">APIs RESTful</h4>
                            <p className="text-sm text-muted-foreground">Diseño e implementación de APIs escalables y bien documentadas</p>
                        </div>
                        <div className="rounded-lg border border-border bg-card p-6">
                            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10">
                                <Database className="h-6 w-6 text-purple-600" />
                            </div>
                            <h4 className="mb-2 font-semibold">Gestión de Datos</h4>
                            <p className="text-sm text-muted-foreground">Optimización de bases de datos y arquitectura de información</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
