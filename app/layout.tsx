import type { Metadata } from 'next';
import { Manrope, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { SiteFooter } from '../components/site-footer';
import { SiteHeader } from '../components/site-header';
import { site } from '../lib/content';

const display = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });
const body = Manrope({ subsets: ['latin'], variable: '--font-body' });

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s · ${site.name}`
  },
  description: site.description,
  keywords: ['tour and travels', 'cab booking', 'airport transfer', 'outstation cab', 'travel company'],
  metadataBase: new URL('https://avdrivetravels.example')
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}