import { articles } from '@/data/articles'
import ArticleCard from '@/components/ArticleCard'

export default function InsightsPage() {
  return (
    <main className="pt-28 pb-24">
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold mb-4">
            Ressources
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-indigo">
            Insights & Actualités
          </h1>
          <p className="mt-4 text-base text-anthracite/50 max-w-2xl mx-auto leading-relaxed">
            Analyses, retours d'expérience et points de vue pour dirigeants éclairés.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </main>
  )
}