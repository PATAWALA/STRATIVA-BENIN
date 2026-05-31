import Image from 'next/image'
import Link from 'next/link'
import { dirigeant } from '@/data/dirigeant'

export default function SectionDirigeant() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Titre de section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-indigo">
            Notre vision, notre engagement
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image : en premier sur mobile, à droite sur desktop */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden border border-champagne/30 shadow-lg">
              <Image
                src={dirigeant.image}
                alt={dirigeant.nom}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 192px, 256px"
                priority
              />
            </div>
          </div>

          {/* Texte + CTA : en second sur mobile, à gauche sur desktop */}
          <div className="order-2 lg:order-1">
            <p className="text-base text-anthracite/60 leading-relaxed mb-6">
              Depuis 2014, Strativa Bénin met l’excellence du conseil en stratégie au service des PME et dirigeants ouest‑africains.
            </p>
            <blockquote className="text-lg sm:text-xl font-serif font-light text-indigo italic mb-4 border-l-2 border-gold pl-4">
              « {dirigeant.citation} »
            </blockquote>
            <p className="text-sm font-semibold text-indigo">{dirigeant.nom}</p>
            <p className="text-sm text-gold">{dirigeant.poste}</p>

            {/* CTA sobre */}
            <div className="mt-8">
              <Link
                href="/a-propos"
                className="inline-flex items-center gap-2 bg-indigo px-6 py-3 text-sm font-medium text-white hover:bg-indigo/90 transition-colors"
              >
                Découvrir notre équipe
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}