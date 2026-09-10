import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { InteractiveTechBackground } from '@/components/ui/InteractiveTechBackground';

const inter = Inter({ subsets: ['latin'] });

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
    <html lang="en">
      <body className={inter.className}>
        <InteractiveTechBackground />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}

