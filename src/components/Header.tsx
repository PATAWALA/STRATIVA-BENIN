'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 border-b border-champagne/20 h-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center justify-between">
        
        {/* Logo + Nom */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-champagne/40 shadow-sm">
            <Image
              src="/images/logo.jpg"
              alt="Strativa Bénin"
              fill
              className="object-cover"
              sizes="40px"
              priority
            />
          </div>
          <span className="text-xl font-serif font-bold text-indigo tracking-tight group-hover:text-gold transition-colors duration-300">
            STRATIVA
          </span>
        </Link>

        {/* Desktop Navigation – sans soulignement */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-anthracite/70 hover:text-indigo transition-colors">
            Accueil
          </Link>
          <Link href="/services" className="text-sm font-medium text-anthracite/70 hover:text-indigo transition-colors">
            Services
          </Link>
          <Link href="/ressources" className="text-sm font-medium text-anthracite/70 hover:text-indigo transition-colors">
            Ressources
          </Link>
          <Link href="/a-propos" className="text-sm font-medium text-anthracite/70 hover:text-indigo transition-colors">
            À propos
          </Link>
          
          {/* Bouton CTA avec pulsation et liseré Bénin */}
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 bg-indigo pl-5 pr-4 py-2.5 text-sm font-medium text-white overflow-hidden transition-all duration-300 hover:bg-indigo/90 animate-pulse-slow"
          >
            <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-benin-green via-benin-yellow to-benin-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative w-1.5 h-1.5 bg-gold rotate-45 group-hover:scale-125 transition-transform duration-300" />
            <span>Se faire accompagner</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </nav>

        {/* Bouton hamburger mobile */}
        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden relative w-8 h-8 flex items-center justify-center text-indigo"
          aria-label="Menu"
        >
          <div className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-6 bg-current" />
            <span className="block h-0.5 w-6 bg-current" />
            <span className="block h-0.5 w-6 bg-current" />
          </div>
        </button>
      </div>

      {/* Menu mobile fullscreen opaque (fond blanc pur) */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white flex flex-col">
          {/* Bouton fermeture */}
          <div className="flex justify-end p-6">
            <button
              onClick={() => setMobileOpen(false)}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-cream text-indigo hover:bg-champagne transition-colors"
              aria-label="Fermer le menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Liens centrés */}
          <nav className="flex-1 flex flex-col items-center justify-center gap-8">
            <Link href="/" onClick={() => setMobileOpen(false)} className="text-3xl font-serif font-bold text-indigo hover:text-gold transition-colors">
              Accueil
            </Link>
            <Link href="/services" onClick={() => setMobileOpen(false)} className="text-3xl font-serif font-bold text-indigo hover:text-gold transition-colors">
              Services
            </Link>
            <Link href="/ressources" onClick={() => setMobileOpen(false)} className="text-3xl font-serif font-bold text-indigo hover:text-gold transition-colors">
              Ressources
            </Link>
            <Link href="/a-propos" onClick={() => setMobileOpen(false)} className="text-3xl font-serif font-bold text-indigo hover:text-gold transition-colors">
              À propos
            </Link>
          </nav>

          {/* Bouton CTA en bas */}
          <div className="p-6">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-indigo py-4 text-sm font-medium text-white hover:bg-indigo/90 transition-colors"
            >
              <span className="w-1.5 h-1.5 bg-gold rotate-45" />
              Se faire accompagner
            </Link>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </header>
  )
}