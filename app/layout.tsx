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
  title: 'WalletWala - AI-Powered Expense Tracker for Pakistan',
  description: 'The first AI expense tracker that speaks your language. Chat with your money in Urdu, English, or Hinglish. Track expenses, analyze spending patterns, and get smart insights for better financial management.',
  keywords: 'expense tracker, AI financial assistant, Pakistan, Urdu, Hinglish, money management, budget tracking, receipt scanner, financial insights, wallet app',
  authors: [{ name: 'WalletWala Team' }],
  creator: 'WalletWala',
  publisher: 'WalletWala',
  generator: 'Next.js',
  applicationName: 'WalletWala',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://walletwala.techrealm.pk'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'WalletWala - AI-Powered Expense Tracker for Pakistan',
    description: 'The first AI expense tracker that speaks your language. Chat with your money in Urdu, English, or Hinglish.',
    url: 'https://walletwala.techrealm.pk',
    siteName: 'WalletWala',
    images: [
      {
        url: '/icon.png',
        width: 512,
        height: 512,
        alt: 'WalletWala App Icon',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WalletWala - AI-Powered Expense Tracker for Pakistan',
    description: 'The first AI expense tracker that speaks your language. Chat with your money in Urdu, English, or Hinglish.',
    images: ['/icon.png'],
    creator: '@walletwala',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#16a34a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="WalletWala" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "WalletWala",
              "description": "The first AI expense tracker that speaks your language. Chat with your money in Urdu, English, or Hinglish.",
              "url": "https://walletwala.techrealm.pk",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web, iOS, Android",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "PKR"
              },
              "author": {
                "@type": "Organization",
                "name": "WalletWala",
                "url": "https://walletwala.techrealm.pk"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1250"
              },
              "featureList": [
                "AI-Powered Chat",
                "Expense Tracking",
                "Receipt Scanner",
                "Budget Alerts",
                "Multi-language Support",
                "Cloud Sync"
              ]
            })
          }}
        />
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
