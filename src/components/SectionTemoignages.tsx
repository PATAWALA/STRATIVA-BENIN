'use client'

import { temoignages } from '@/data/temoignages'
import Link from 'next/link'
import { motion } from 'framer-motion'

const MotionLink = motion(Link)

export default function SectionTemoignages() {
  return (
    <section className="py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        {/* En-tête animé */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          {/* Ligne tricolore Bénin */}
          <div className="flex items-center justify-center gap-1 mb-6">
            <span className="h-1 w-8 bg-benin-green rounded-full" />
            <span className="h-1 w-8 bg-benin-yellow rounded-full" />
            <span className="h-1 w-8 bg-benin-red rounded-full" />
          </div>
          <h2 className="text-4xl font-serif font-bold text-indigo md:text-5xl">
            Ils nous font confiance
          </h2>
        </motion.div>

        {/* Cartes témoignages animées */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {temoignages.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: 'easeOut' }}
              className="border border-champagne/60 p-8 shadow-lg bg-gradient-to-b from-white via-white to-indigo"
            >
              <p className="text-anthracite italic mb-6 leading-relaxed">
                « {t.texte} »
              </p>
              <div>
                <p className="font-semibold text-white">{t.nom}</p>
                <p className="text-sm text-cream/80">
                  {t.poste}, {t.entreprise}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA après les témoignages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-anthracite/60 mb-6 font-light">
            Comme eux, donnez un nouvel élan à votre entreprise.
          </p>
          <MotionLink
            href="/contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-indigo px-8 py-4 text-sm font-medium text-white hover:bg-indigo/90 transition-colors"
          >
            Se faire accompagner
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </MotionLink>
        </motion.div>
      </div>
    </section>
  )
}