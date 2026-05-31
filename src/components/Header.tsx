'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-lg border-b border-champagne/20 h-20">
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

        {/* Navigation desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-anthracite/70 hover:text-indigo transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gold after:transition-all hover:after:w-full"
          >
            Accueil
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium text-anthracite/70 hover:text-indigo transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gold after:transition-all hover:after:w-full"
          >
            Services
          </Link>
          <Link
            href="/ressources"
            className="text-sm font-medium text-anthracite/70 hover:text-indigo transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gold after:transition-all hover:after:w-full"
          >
            Ressources
          </Link>
          <Link
            href="/a-propos"
            className="text-sm font-medium text-anthracite/70 hover:text-indigo transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gold after:transition-all hover:after:w-full"
          >
            À propos
          </Link>
          
          {/* Bouton CTA avec animation de pulsation */}
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 bg-indigo pl-5 pr-4 py-2.5 text-sm font-medium text-white overflow-hidden transition-all duration-300 hover:bg-indigo/90 animate-pulse-slow"
          >
            {/* Liseré drapeau Bénin au survol */}
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
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative w-8 h-8 flex items-center justify-center text-indigo"
          aria-label="Menu"
        >
          <div className="flex flex-col gap-1.5">
            <span className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-6 bg-current transition-opacity duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Menu mobile */}
      <div className={`md:hidden fixed inset-x-0 top-20 bg-white/95 backdrop-blur-lg border-b border-champagne/20 shadow-lg transition-all duration-500 ease-in-out ${mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
        <div className="px-6 py-8 space-y-6 text-center">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="block text-lg font-medium text-indigo hover:text-gold transition-colors"
          >
            Accueil
          </Link>
          <Link
            href="/services"
            onClick={() => setMobileOpen(false)}
            className="block text-lg font-medium text-indigo hover:text-gold transition-colors"
          >
            Services
          </Link>
          <Link
            href="/ressources"
            onClick={() => setMobileOpen(false)}
            className="block text-lg font-medium text-indigo hover:text-gold transition-colors"
          >
            Ressources
          </Link>
          <Link
            href="/a-propos"
            onClick={() => setMobileOpen(false)}
            className="block text-lg font-medium text-indigo hover:text-gold transition-colors"
          >
            À propos
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center justify-center gap-2 bg-indigo px-6 py-3 text-sm font-medium text-white hover:bg-indigo/90 transition-colors"
          >
            <span className="w-1.5 h-1.5 bg-gold rotate-45" />
            Se faire accompagner
          </Link>
        </div>
      </div>

      {/* Animation de pulsation pour le bouton */}
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