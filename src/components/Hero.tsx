'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const images = [
  {
    src: '/images/hero1.jpg',
    alt: 'Équipe de dirigeants en réunion stratégique'
  },
  {
    src: '/images/hero2.jpg',
    alt: 'Dirigeant confiant'
  },
  {
    src: '/images/hero3.jpg',
    alt: 'Collaborateurs en stratégie'
  }
]

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative bg-white pt-28 pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Gauche – animations sur les textes et boutons */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-[2.5rem] sm:text-[3.25rem] lg:text-[4rem] font-serif font-bold text-indigo leading-[1.1] tracking-tight"
            >
              De l’ambition à la performance.
              <br />
              <span className="text-gold">De la vision au résultat.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="mt-6 text-base text-anthracite/50 max-w-md leading-relaxed"
            >
              Nous aidons les dirigeants et organisations à transformer leur potentiel 
              en croissance réelle, avec rigueur et confidentialité.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="mt-8 flex flex-col sm:flex-row gap-3 items-start"
            >
              {/* Bouton principal */}
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-3 bg-indigo pl-7 pr-6 py-4 text-sm font-medium text-white hover:bg-indigo/90 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-benin-green via-benin-yellow to-benin-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative w-1.5 h-1.5 bg-gold rotate-45 group-hover:scale-125 transition-transform duration-300" />
                <span>Se faire accompagner</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>

              {/* Bouton secondaire */}
              <Link
                href="/services"
                className="inline-flex items-center justify-center border border-champagne px-6 py-4 text-sm font-medium text-indigo hover:bg-cream transition-colors"
              >
                Voir nos programmes
              </Link>
            </motion.div>
          </div>

          {/* Droite – animation sur l’image et le badge */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg rounded-2xl overflow-hidden border border-champagne/30 shadow-xl">
              <div className="relative aspect-[4/3]">
                {images.map((img, index) => (
                  <Image
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    width={600}
                    height={450}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                      index === currentImage ? 'opacity-100' : 'opacity-0'
                    }`}
                    sizes="(max-width: 768px) 100vw, 45vw"
                    priority={index === 0}
                    unoptimized
                  />
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
                className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl border border-champagne/60 shadow-lg px-4 py-3 flex items-center gap-3"
              >
                <div>
                  <p className="text-sm font-bold text-indigo">+150 dirigeants</p>
                  <p className="text-[10px] text-anthracite/50">nous font confiance</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}