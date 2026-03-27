import type { Metadata, Viewport } from 'next'
import { Bebas_Neue, JetBrains_Mono, DM_Sans } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'

// Display font — headings and large type
const bebasNeue = Bebas_Neue({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-headline',
  display: 'swap',
})

// Technical monospace — labels, code, chapter markers
const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-technical',
  display: 'swap',
})

// Body — prose, descriptions, UI copy
const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: 'Balaji Jegadeesh Vijayaraghavan — Applied AI Product Engineer',
  description:
    'Applied AI Product Engineer and Full-Stack Engineer. Production systems, healthcare platforms, LLM workflows, and scalable backend APIs.',
  keywords: [
    'Applied AI',
    'Full-Stack Engineer',
    'Healthcare Technology',
    'LLM',
    'React',
    'Django',
    'TypeScript',
    'Next.js',
    'HIPAA',
  ],
  authors: [{ name: 'Balaji Jegadeesh Vijayaraghavan' }],
  openGraph: {
    title: 'Balaji Jegadeesh Vijayaraghavan — Applied AI Product Engineer',
    description:
      'Production systems, healthcare platforms, LLM workflows, scalable backend APIs.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`dark ${bebasNeue.variable} ${jetbrainsMono.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Material Symbols — used for capability icons and research card */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="font-body bg-background text-white antialiased overflow-x-hidden">
        {/* Grainy noise overlay — fixed, pointer-events-none, above everything */}
        <div className="grainy-overlay fixed inset-0 z-[100] pointer-events-none" />

        {/* Ambient glow blobs — fixed, behind all content */}
        <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full opacity-20" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 blur-[150px] rounded-full opacity-10" />
        </div>

        <Nav />
        {children}
      </body>
    </html>
  )
}
