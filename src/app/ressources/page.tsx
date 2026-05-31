import { articles } from '@/data/articles'
import ArticleCard from '@/components/ArticleCard'
import Link from 'next/link'

export default function RessourcesPage() {
  return (
    <main className="pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* En-tête avec drapeau Bénin */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-1 mb-6">
            <span className="h-1 w-8 bg-benin-green rounded-full" />
            <span className="h-1 w-8 bg-benin-yellow rounded-full" />
            <span className="h-1 w-8 bg-benin-red rounded-full" />
          </div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold mb-4">
            Ressources
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-indigo">
            Expertise & Analyses
          </h1>
          <p className="mt-4 text-base text-anthracite/50 max-w-2xl mx-auto leading-relaxed">
            Des contenus stratégiques pour vous aider à prendre les bonnes décisions.
          </p>
        </div>

        {/* Grille d'articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 bg-cream border border-champagne/60 py-10 px-6 sm:px-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-indigo mb-4">
            Ces analyses vous parlent ?
          </h2>
          <p className="text-anthracite/60 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Nos experts vous accompagnent pour transformer ces insights en actions concrètes pour votre entreprise.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-indigo px-8 py-4 text-sm font-medium text-white hover:bg-indigo/90 transition-colors"
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