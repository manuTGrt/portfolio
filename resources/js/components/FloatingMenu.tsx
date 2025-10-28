'use client';

import { Button } from '@/components/ui/button';
import { Brain, Briefcase, Code, Menu, Moon, Sun, User, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';

export default function FloatingMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { setTheme, theme } = useTheme();
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const toggleTheme = () => {
        if (mounted) {
            setTheme(theme === 'dark' ? 'light' : 'dark');
        }
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    const menuItems = [
        {
            label: 'Experiencia',
            icon: <User className="h-4 w-4" />,
            action: () => scrollToSection('experiencia'),
        },
        {
            label: 'Habilidades',
            icon: <Code className="h-4 w-4" />,
            action: () => scrollToSection('habilidades'),
        },
        {
            label: 'Proyectos',
            icon: <Briefcase className="h-4 w-4" />,
            action: () => scrollToSection('proyectos'),
        },
        {
            label: 'Mentalidad',
            icon: <Brain className="h-4 w-4" />,
            action: () => scrollToSection('mentalidad'),
        },
    ];

    return (
        <div ref={menuRef} className="fixed top-6 right-6 z-50">
            {/* Botón principal */}
            <Button
                onClick={() => setIsOpen(!isOpen)}
                size="icon"
                className="h-12 w-12 rounded-full bg-primary shadow-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-xl"
            >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>

            {/* Menú desplegable */}
            {isOpen && (
                <div className="absolute top-16 right-0 min-w-[180px] rounded-lg border border-gray-200 bg-background/95 p-2 shadow-xl backdrop-blur-md duration-200 animate-in slide-in-from-top-2 dark:border-gray-700">
                    {/* Enlaces de navegación */}
                    {menuItems.map((item, index) => (
                        <button
                            key={index}
                            onClick={item.action}
                            className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-muted"
                        >
                            {item.icon}
                            {item.label}
                        </button>
                    ))}

                    {/* Separador */}
                    <div className="my-2 h-px bg-border" />

                    {/* Toggle de tema */}
                    <button
                        onClick={toggleTheme}
                        className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-muted"
                    >
                        {mounted && theme === 'dark' ? (
                            <>
                                <Sun className="h-4 w-4" />
                                Modo Claro
                            </>
                        ) : (
                            <>
                                <Moon className="h-4 w-4" />
                                Modo Oscuro
                            </>
                        )}
                    </button>
                </div>
            )}
        </div>
    );
}
