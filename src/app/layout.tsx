import { Metadata } from 'next'
import './globals.scss'

export const metadata: Metadata = {
  title: {
    default: 'MacOS Dock Animation',
    template: '%s | MacOS Dock Animation',
  },
  description:
    'A recreation of the macOS dock with NextJS, TypeScript and SCSS 🍏',
  openGraph: {
    title: 'MacOS Dock Animation',
    description:
      'A recreation of the macOS dock with NextJS, TypeScript and SCSS 🍏',
    url: 'https://mac-dock.vercel.app/',
    siteName: 'Imanol Ortega',
    images: [
      {
        url: 'https://mac-dock.vercel.app/images/og.png',
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
      <body>{children}</body>
    </html>
  )
}
