import { insights } from '@/data/insights'
import Link from 'next/link'

export default function SectionInsights() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* En-tête */}
        <div className="mb-16 text-center">
          {/* Ligne décorative tricolore du Bénin (reste en petits traits arrondis ou pas, au choix) */}
          <div className="flex items-center justify-center gap-1 mb-6">
            <span className="h-1 w-8 bg-benin-green rounded-full" />
            <span className="h-1 w-8 bg-benin-yellow rounded-full" />
            <span className="h-1 w-8 bg-benin-red rounded-full" />
          </div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold mb-4">
            Ressources
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-indigo">
            Expertise & Analyses
          </h2>
          <p className="mt-4 text-base text-anthracite/50 max-w-2xl mx-auto leading-relaxed">
            Des contenus stratégiques pour vous aider à prendre les bonnes décisions.
          </p>
        </div>

        {/* Cartes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {insights.map((item) => (
            <Link
              key={item.id}
              href={item.lien}
              className="group relative bg-white border border-champagne/60 p-8 shadow-sm hover:shadow-xl hover:border-gold/20 transition-all duration-500 flex flex-col"
            >
              {/* Catégorie + temps de lecture */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-gold bg-gold/[0.06] px-3 py-1.5">
                  {item.categorie}
                </span>
                <span className="text-[11px] text-anthracite/40">
                  {item.temps_lecture} min de lecture
                </span>
              </div>

              {/* Titre */}
              <h3 className="text-2xl font-serif font-bold text-indigo mb-3 leading-snug group-hover:text-gold transition-colors duration-300">
                {item.titre}
              </h3>

              {/* Barre tricolore Bénin sous le titre (reste en petit trait) */}
              <div className="w-16 h-[3px] bg-gradient-to-r from-benin-green via-benin-yellow to-benin-red mb-4 opacity-70 group-hover:opacity-100 transition-opacity" />

              {/* Résumé */}
              <p className="text-sm text-anthracite/60 leading-relaxed mb-6 flex-1">
                {item.resume}
              </p>

              {/* Date + bouton "Lire" */}
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs text-anthracite/40">
                  {new Date(item.date).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo group-hover:text-gold transition-colors">
                  Lire
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}