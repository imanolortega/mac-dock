import './globals.scss'

export const metadata = {
  title: 'MacOS Dock',
  description:
    'A recreation of the macOS dock with NextJS, TypeScript and SCSS 🍏',
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
