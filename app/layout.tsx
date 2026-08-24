import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

const siteUrl = 'https://affiliant-eta.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'EarbudLab — Best Wireless Earbuds Under $100 & Affiliate Earnings Calculator',
  description:
    'Expert reviews of the top wireless earbuds under $100 and under $50, sound-engineering guides, and an interactive passive income & affiliate commission calculator.',
  generator: 'v0.app',
  verification: {
    google: 'tLH7S_qq4wQse9jaZPWIh4XH4gsGnaHwnz5Pbr96ZwU',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'EarbudLab',
    title: 'EarbudLab — Best Wireless Earbuds Under $100',
    description:
      'Sound-engineering guides and buyer advice for wireless earbuds under $100 and under $50. Independent affiliate resource with Amazon links.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EarbudLab — Best Wireless Earbuds Under $100',
    description:
      'Sound-engineering guides and buyer advice for wireless earbuds under $100 and under $50.',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'EarbudLab',
  alternateName: 'Earbud Lab',
  url: siteUrl,
  logo: `${siteUrl}/icon.svg`,
  description:
    'EarbudLab is an independent sound-engineering and affiliate resource focused on wireless earbuds under $100 and under $50, with original testing notes, buyer guides, and Amazon Associates links.',
  foundingDate: '2024',
  areaServed: 'Worldwide',
  knowsAbout: [
    'wireless earbuds',
    'true wireless stereo',
    'active noise cancellation',
    'Bluetooth audio codecs',
    'earbud battery degradation',
    'gaming latency',
    'IP waterproof ratings',
    'Amazon Associates affiliate marketing',
  ],
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'EarbudLab',
  url: siteUrl,
  description:
    'Expert wireless earbud guides under $100 and under $50, product matching, and sound-engineering explainers from EarbudLab.',
  inLanguage: 'en-US',
  publisher: {
    '@type': 'Organization',
    name: 'EarbudLab',
    url: siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/icon.svg`,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd, websiteJsonLd]),
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BWB05KLNEE"
          strategy="afterInteractive"
        />
        <Script id="ga4-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BWB05KLNEE');
          `}
        </Script>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
