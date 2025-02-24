import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'SVIPLAB - Development company',
  description: 'SVIPLAB is an IT company with extensive expertise in development, testing, and design. Trust your project to our app development company.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
