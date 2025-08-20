// NUEVO ARCHIVO: resources/js/Layouts/PortfolioLayout.tsx

import ScrollProgressBar from '@/components/ScrollProgressBar';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { Head } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function PortfolioLayout({ children }: PropsWithChildren) {
    return (
        <>
            <Head>
                <title>Manuel Tejada Guzmán | Desarrollador Full-Stack</title>
                <meta
                    name="description"
                    content="Portfolio profesional de Manuel Tejada Guzmán, Desarrollador Full-Stack con experiencia en Laravel, PHP, JavaScript y React."
                />
            </Head>

            <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                <SmoothScrollProvider>
                    <ScrollProgressBar />
                    <div className="min-h-screen bg-background font-sans antialiased">
                        <main>{children}</main>
                    </div>
                    <Toaster />
                </SmoothScrollProvider>
            </ThemeProvider>
        </>
    );
}
