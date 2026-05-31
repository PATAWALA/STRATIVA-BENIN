'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // Liens toujours en anthracite, sauf l'actif en or
  const linkClass = (href: string) =>
    `text-sm font-medium transition-colors duration-300 ${
      pathname === href
        ? 'text-gold'
        : 'text-anthracite/70 hover:text-indigo'
    }`

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isHomePage && !isScrolled
          ? 'bg-transparent'
          : 'bg-white/90 backdrop-blur-lg border-b border-champagne/20 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className={linkClass('/')}>Accueil</Link>
          <Link href="/services" className={linkClass('/services')}>Services</Link>
          <Link href="/ressources" className={linkClass('/ressources')}>Ressources</Link>
          <Link href="/a-propos" className={linkClass('/a-propos')}>À propos</Link>
          
          {/* CTA Button */}
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

        {/* Hamburger (mobile) */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative w-8 h-8 flex items-center justify-center text-indigo z-50"
          aria-label="Menu"
        >
          <div className="flex flex-col gap-1.5">
            <span className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-6 bg-current transition-opacity duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu Fullscreen */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-xl transition-all duration-500 ease-in-out ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: 0 }}
      >
        <div className="flex flex-col items-center justify-center h-full px-6">
          <nav className="space-y-8 text-center">
            <Link href="/" onClick={() => setMobileOpen(false)} className="block text-3xl font-serif font-bold text-indigo hover:text-gold transition-colors">Accueil</Link>
            <Link href="/services" onClick={() => setMobileOpen(false)} className="block text-3xl font-serif font-bold text-indigo hover:text-gold transition-colors">Services</Link>
            <Link href="/ressources" onClick={() => setMobileOpen(false)} className="block text-3xl font-serif font-bold text-indigo hover:text-gold transition-colors">Ressources</Link>
            <Link href="/a-propos" onClick={() => setMobileOpen(false)} className="block text-3xl font-serif font-bold text-indigo hover:text-gold transition-colors">À propos</Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center gap-2 bg-indigo px-8 py-4 text-lg font-medium text-white hover:bg-indigo/90 transition-colors mt-8"
            >
              <span className="w-1.5 h-1.5 bg-gold rotate-45" />
              Se faire accompagner
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}