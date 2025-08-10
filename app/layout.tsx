import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <style>{`
html {
  font-family: 'Inter', 'system-ui', 'sans-serif';
  --font-sans: ${inter.variable};
  --font-zen: 'Inter', 'system-ui', 'sans-serif';
  --font-decorative: 'Noto Nastaliq Urdu', serif;
}
        `}</style>
      </head>
      <body className={inter.variable}>{children}</body>
    </html>
  )
}
