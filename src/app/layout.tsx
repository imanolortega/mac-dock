import { Metadata } from 'next'
import './globals.scss'
import { description, title, url } from '@/utils/config'
import Script from 'next/script'

export const metadata: Metadata = {
  title: {
    default: title,
    template: '%s | MacOS Dock Animation',
  },
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: url,
    siteName: 'Imanol Ortega',
    images: [
      {
        url: `${url}images/og.png`,
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'es-ES',
    type: 'website',
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
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="g-analytics">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
          page_path: window.location.pathname,
        });;
      `}
      </Script>
      <body>{children}</body>
    </html>
  )
}
