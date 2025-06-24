import './globals.css';
import type { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { UrgentBanner } from '@/components/UrgentBanner';
import { FloatingButton } from '@/components/FloatingButton';
import { Footer } from '@/components/Footer';
import { LanguageProvider } from '@/lib/language-context';

export const metadata: Metadata = {
  title: 'CleaMov Canada - Ménage Commercial et Résidentiel Ottawa-Gatineau',
  description: 'Service de ménage commercial et résidentiel professionnel à Ottawa-Gatineau. Ménage commercial pour entreprises, ménage résidentiel écologique. Devis gratuit 343-550-4644.',
  keywords: 'ménage commercial, ménage résidentiel, ménage commercial Ottawa, ménage résidentiel Gatineau, service ménage commercial, nettoyage commercial, entretien ménager, ménage bureaux',
  openGraph: {
    title: 'CleaMov Canada - Ménage Commercial et Résidentiel Ottawa-Gatineau',
    description: 'Service de ménage commercial et résidentiel professionnel à Ottawa-Gatineau. Solutions personnalisées pour entreprises et particuliers.',
    type: 'website',
    locale: 'fr_CA',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="CleaMov Canada" />
        <link rel="canonical" href="https://cleamov.ca" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Open+Sans:wght@300;400;500;600&display=swap" as="style" />
        <link rel="preload" href="/LOGO l CLEAMOV 1 copy.png" as="image" />
        
        {/* Preload hero background image */}
        <link rel="preload" href="https://images.pexels.com/photos/7018391/pexels-photo-7018391.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" as="image" />
        
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//images.pexels.com" />
        <link rel="dns-prefetch" href="//res.cloudinary.com" />
        
        {/* Preconnect to critical domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
      </head>
      <body>
        <LanguageProvider>
          <UrgentBanner />
          <Navigation />
          <main className="pt-28">
            {children}
          </main>
          <Footer />
          <FloatingButton />
        </LanguageProvider>
      </body>
    </html>
  );
}