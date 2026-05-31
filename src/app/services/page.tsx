'use client'

import { useState } from 'react'
import { services } from '@/data/services'
import { faqs } from '@/data/faq'
import Link from 'next/link'

export default function ServicesPage() {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <main className="pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* En-tête */}
        <div className="mb-20 text-center">
          {/* Drapeau Bénin discret */}
          <div className="flex items-center justify-center gap-1 mb-4">
            <span className="h-1 w-6 bg-benin-green rounded-sm" />
            <span className="h-1 w-6 bg-benin-yellow rounded-sm" />
            <span className="h-1 w-6 bg-benin-red rounded-sm" />
          </div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold mb-4">
            Ce que nous faisons
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-indigo">
            Nos expertises en détail
          </h1>
        </div>

        {/* Liste des services avec accordéon */}
        <div className="space-y-12">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-28 border-b border-champagne/60 pb-10 last:border-b-0"
            >
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-indigo mb-2">
                {service.titre}
              </h2>
              <p className="text-lg text-anthracite/60 font-light leading-relaxed mb-3">
                {service.accroche}
              </p>
              <p className="text-base text-anthracite/50 leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Bouton pour déplier les détails */}
              <button
                onClick={() => toggle(service.id)}
                className="group inline-flex items-center gap-2 text-sm font-medium text-indigo hover:text-gold transition-colors"
              >
                {openId === service.id ? 'Masquer les détails' : 'Voir notre approche'}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 transition-transform duration-300 ${
                    openId === service.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Détails (animés) */}
              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  openId === service.id
                    ? 'grid-rows-[1fr] opacity-100 mt-4'
                    : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <ul className="space-y-3 mb-6 pl-1">
                    {service.details.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-anthracite/70">
                        {/* Puce colorée Bénin */}
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-gradient-to-br from-benin-green via-benin-yellow to-benin-red flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center bg-indigo px-6 py-3 text-sm font-medium text-white hover:bg-indigo/90 transition-colors"
                  >
                    Se faire accompagner
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold mb-4">
              FAQ
            </p>
            <h2 className="text-3xl font-serif font-bold text-indigo">
              Questions fréquentes
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group border border-champagne/60 rounded-xl bg-white p-5 transition-all duration-300 hover:border-gold/20"
              >
                <summary className="flex items-center justify-between cursor-pointer text-sm font-medium text-indigo list-none">
                  {faq.question}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gold transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-3 text-sm text-anthracite/70 leading-relaxed">{faq.reponse}</p>
              </details>
            ))}
          </div>
        </div>

        {/* CTA global */}
        <div className="mt-24 bg-indigo py-12 px-6 sm:px-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
            Prêt à structurer votre croissance ?
          </h2>
          <p className="text-cream/70 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Rejoignez les +150 dirigeants et PME que nous accompagnons avec rigueur et confidentialité.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-indigo px-8 py-4 text-sm font-medium hover:bg-gold hover:text-white transition-colors"
          >
            Se faire accompagner
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  )
}