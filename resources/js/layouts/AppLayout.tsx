import FloatingMenu from '@/components/FloatingMenu';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import { Head } from '@inertiajs/react';
import { ThemeProvider } from 'next-themes';
import type { ReactNode } from 'react';

interface AppLayoutProps {
    children: ReactNode;
    title?: string;
}

export default function AppLayout({ children, title = 'Manuel Tejada Guzmán | Desarrollador Full-Stack' }: AppLayoutProps) {
    return (
        <>
            <Head title={title} />
            <div className="min-h-screen bg-white font-sans antialiased dark:bg-gray-900">
                <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange={false}>
                    <SmoothScrollProvider>
                        <FloatingMenu />
                        <ScrollProgressBar />
                        {children}
                    </SmoothScrollProvider>
                </ThemeProvider>
            </div>
        </>
    );
}
