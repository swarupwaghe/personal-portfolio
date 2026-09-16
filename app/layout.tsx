import type { Metadata } from 'next';
import { Chakra_Petch, JetBrains_Mono, Doto } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { InteractiveTechBackground } from '@/components/ui/InteractiveTechBackground';

const chakraPetch = Chakra_Petch({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-chakra',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-mono-custom',
});

const doto = Doto({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-doto',
});

export const metadata: Metadata = {
  title: 'Swarup Waghe | Software Engineering Student',
  description: 'Personal portfolio of Swarup Waghe, a Software Engineering student aspiring to become a Prompt Engineer and Data Analyst.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${chakraPetch.variable} ${jetbrainsMono.variable} ${doto.variable}`}>
      <body className={chakraPetch.className}>
        {/* Subtle CRT Overlay Scanlines Effect */}
        <div className="crt-overlay" aria-hidden="true" />
        <InteractiveTechBackground />
        <div className="relative z-10">{children}</div>
        {/* Interactive Cat Mascot Cursor */}
        <Script src="/oneko.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
