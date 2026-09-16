import type { Metadata } from 'next';
import { Space_Mono } from 'next/font/google';
import './globals.css';

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
});

export const metadata: Metadata = {
  title: "Swarup Waghe | Developer Portfolio",
  description: "Personal developer portfolio of Swarup Waghe — a software engineering student experienced across the stack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceMono.variable}>
      <body className={spaceMono.className}>
        {/* CRT Scanline Overlay & Amber Dotted Grid Texture */}
        <div className="crt-overlay" aria-hidden="true" />
        <div className="amber-grid-bg" aria-hidden="true" />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
