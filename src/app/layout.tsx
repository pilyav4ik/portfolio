import type { Metadata } from 'next'
import './globals.css'
import LenisScrollProvider from './common/lenis-scroll'


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
        <LenisScrollProvider>
        {children}
        </LenisScrollProvider>
      </body>
    </html>
  )
}
