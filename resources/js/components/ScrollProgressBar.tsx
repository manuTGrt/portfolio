'use client';

import { useEffect, useState } from 'react';

export default function ScrollProgressBar() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // Calcular el progreso del scroll
            const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const currentProgress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(currentProgress);
        };

        // Añadir event listener
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Llamar una vez para inicializar
        handleScroll();

        // Limpiar event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="pointer-events-none fixed top-1/2 right-4 z-50 flex h-32 w-1 -translate-y-1/2 transform items-center">
                <div className="h-full w-full overflow-hidden rounded-full bg-border bg-gray-200 dark:bg-gray-700">
                    <div
                        className="w-full rounded-full bg-blue-600 transition-all duration-200 ease-out"
                        style={{ height: `${scrollProgress}%` }}
                    ></div>
                </div>
            </div>
        </>
    );
}
