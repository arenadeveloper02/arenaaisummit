import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://arenaaisummit.example.com'),
  title: 'ARENA AI Summit 2026 | Where Intelligence Meets Innovation',
  description:
    'Join global AI leaders, researchers, founders, and enterprise innovators at ARENA AI Summit 2026 in Bengaluru on September 17–18, 2026.',
  keywords: [
    'AI conference',
    'artificial intelligence summit',
    'ARENA AI Summit',
    'Bengaluru tech conference',
    'machine learning event 2026',
    'AI summit India',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://arenaaisummit.example.com',
    title: 'ARENA AI Summit 2026 | Where Intelligence Meets Innovation',
    description:
      'Two days of keynotes, technical sessions, workshops, and networking with global AI leaders — September 17–18, 2026 in Bengaluru, India.',
    siteName: 'ARENA AI Summit 2026',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARENA AI Summit 2026 | Where Intelligence Meets Innovation',
    description:
      'Join global AI leaders at ARENA AI Summit 2026 in Bengaluru on September 17–18, 2026.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <a href="#main" className="skip-link">Skip to content</a>
        {children}
      </body>
    </html>
  )
}
