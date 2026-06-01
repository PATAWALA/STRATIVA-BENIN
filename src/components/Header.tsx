'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-champagne/20 h-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center justify-between">
        
        {/* Logo + Nom */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-10 w-14 overflow-hidden border border-champagne/40 shadow-sm">
            <Image
              src="/images/logo.jpg"
              alt="Strativa Bénin"
              fill
              className="object-contain"
              sizes="56px"
              priority
            />
          </div>
          <span className="text-xl font-serif font-bold text-indigo tracking-tight group-hover:text-gold transition-colors duration-300">
            STRATIVA
          </span>
        </Link>

        {/* Desktop Navigation */}
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
          
          {/* Bouton CTA */}
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 bg-indigo pl-5 pr-4 py-2.5 text-sm font-medium text-white overflow-hidden transition-all duration-300 hover:bg-indigo/90"
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

      {/* Menu mobile fullscreen avec animation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 z-50 bg-white/95 backdrop-blur-sm flex flex-col"
          >
            {/* Bouton fermeture */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.1 }}
              className="flex justify-end p-6"
            >
              <button
                onClick={() => setMobileOpen(false)}
                className="w-12 h-12 flex items-center justify-center bg-cream text-indigo hover:bg-champagne transition-colors"
                aria-label="Fermer le menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>

            {/* Liens centrés avec stagger */}
            <nav className="flex-1 flex flex-col items-center justify-center gap-8">
              {[
                { href: '/', label: 'Accueil' },
                { href: '/services', label: 'Services' },
                { href: '/ressources', label: 'Ressources' },
                { href: '/a-propos', label: 'À propos' },
              ].map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.15 + i * 0.1, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-3xl font-serif font-bold text-indigo hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bouton CTA en bas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="p-6"
            >
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-indigo py-4 text-sm font-medium text-white hover:bg-indigo/90 transition-colors"
              >
                <span className="w-1.5 h-1.5 bg-gold rotate-45" />
                Se faire accompagner
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}