import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import SmartPopup from '@/components/SmartPopup'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Strativa Bénin – Conseil en Stratégie & Performance',
  description: 'Cabinet de conseil en structuration stratégique pour PME et grandes entreprises au Bénin.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-cream antialiased">
        <Header />
        {children}
        <Footer />
        <SmartPopup />
      </body>
    </html>
  )
}