import './globals.scss'
import { Analytics } from '@vercel/analytics/react'
import { description, title, url } from '@/utils/config'
import { Metadata } from 'next'
import Script from 'next/script'
import GoogleAnalytics from '@/components/google-analytics'

export const metadata: Metadata = {
  title: {
    default: `${title} | By Imanol Ortega`,
    template: '%s | MacOS Dock Animation',
  },
  description: description,
  openGraph: {
    title: `${title} | By Imanol Ortega`,
    description: description,
    url: url,
    siteName: `${title} | By Imanol Ortega`,
    type: 'website',
    locale: 'es-ES',
    images: [
      {
        url: `${url}images/og.png`,
        width: 1200,
        height: 600,
      },
    ],
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
  icons: {
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}
        />
      </head>
      <GoogleAnalytics />
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
