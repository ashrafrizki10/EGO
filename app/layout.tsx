import type { Metadata } from 'next';
import '../styles/globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Providers } from '@/components/Providers';

export const metadata: Metadata = {
  title: 'EGO FLOW - Blue Lock Database',
  description: 'Professional Blue Lock encyclopedia for character stats, comparisons, rankings, and personality assignment.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'EGO FLOW - Blue Lock Database',
    description: 'Professional Blue Lock character database with comparisons, rankings, and personality tests.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" className="dark" suppressHydrationWarning>
      <body>
        <Providers>
          <div className="min-h-screen bg-slate-950 text-slate-100 transition-colors duration-300">
            <Navbar />
            <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
