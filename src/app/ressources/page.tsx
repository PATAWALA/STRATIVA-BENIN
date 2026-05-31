import { articles } from '@/data/articles'
import ArticleCard from '@/components/ArticleCard'

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
      </div>
    </main>
  )
}