import '@/app/globals.css';
import React from 'react';
import CookieConsent from '@/components/CookieConsent';
import JsonLd from '@/components/JsonLd';
import { generateSoftwareAppLD } from '@/lib/jsonld';

export const metadata = {
  title: {
    default: 'APA × YouTube Citation Generator & Guide',
    template: '%s | APA × YouTube Citation',
  },
  description:
    'Generate APA7 in‑text citations and reference entries for YouTube videos. Learn how to cite videos, Shorts and livestreams correctly with our comprehensive guide.',
  openGraph: {
    title: 'APA × YouTube Citation Generator & Guide',
    description:
      'Generate APA7 citations for YouTube videos and explore in‑depth articles on citing videos, shorts and livestreams.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    siteName: 'APA × YouTube Citation Generator',
    images: [],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'APA × YouTube Citation Generator & Guide',
    description:
      'Generate APA7 citations for YouTube videos and learn to cite different scenarios correctly.',
  },
};

const appLd = generateSoftwareAppLD({
  name: 'APA × YouTube Citation Generator',
  description:
    'Generate APA7 in‑text citations and reference list entries for YouTube videos of all types.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'APA × YouTube Citation Generator',
            url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
            logo:
              (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000') +
              '/favicon.ico',
          }}
        />
        <JsonLd data={appLd} />
        <main className="flex-grow container mx-auto px-4 py-6">{children}</main>
        <CookieConsent />
      </body>
    </html>
  );
}