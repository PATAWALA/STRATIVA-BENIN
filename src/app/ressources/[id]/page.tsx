import { articles } from '@/data/articles'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

export default async function ArticleDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const article = articles.find((a) => a.id === id)

  if (!article) {
    notFound()
  }

  const autresArticles = articles.filter((a) => a.id !== id).slice(0, 2)

  return (
    <main className="pt-28 pb-24">
      <article className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* En-tête article */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-gold bg-gold/[0.06] px-3 py-1.5 rounded-full">
              {article.categorie}
            </span>
            <span className="text-[11px] text-anthracite/40">
              {article.temps_lecture} min de lecture
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-indigo leading-tight mb-4">
            {article.titre}
          </h1>
          <div className="w-20 h-[3px] bg-gradient-to-r from-benin-green via-benin-yellow to-benin-red mb-6 rounded-full" />
          <p className="text-lg text-anthracite/60 font-light leading-relaxed mb-4">{article.resume}</p>
          <p className="text-sm text-anthracite/40">
            {new Date(article.date).toLocaleDateString('fr-FR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>

        {/* Image de couverture */}
        <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-10 border border-champagne/30 shadow-sm">
          <Image
            src={article.image}
            alt={article.titre}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 80vw"
            priority
          />
        </div>

        {/* Contenu de l'article */}
        <div
          className="prose prose-lg max-w-none prose-headings:text-indigo prose-headings:font-serif prose-p:text-anthracite/70 prose-p:leading-relaxed prose-a:text-gold prose-strong:text-indigo"
          dangerouslySetInnerHTML={{ __html: article.contenu }}
        />

        {/* Retour */}
        <div className="mt-16 pt-8 border-t border-champagne/60">
          <Link href="/ressources" className="inline-flex items-center gap-2 text-sm font-medium text-indigo hover:text-gold transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour aux ressources
          </Link>
        </div>
      </article>

      {/* Articles similaires */}
      {autresArticles.length > 0 && (
        <section className="max-w-4xl mx-auto px-6 lg:px-8 mt-20">
          <h2 className="text-2xl font-serif font-bold text-indigo mb-8">Articles similaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {autresArticles.map((item) => (
              <Link
                key={item.id}
                href={`/ressources/${item.id}`}
                className="group relative bg-white rounded-2xl border border-champagne/60 overflow-hidden shadow-sm hover:shadow-xl hover:border-gold/20 transition-all duration-500 flex flex-col"
              >
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.titre}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-medium uppercase tracking-[0.1em] text-gold bg-gold/[0.06] px-2 py-0.5 rounded-full">
                      {item.categorie}
                    </span>
                    <span className="text-[10px] text-anthracite/40">{item.temps_lecture} min</span>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-indigo group-hover:text-gold transition-colors mb-2">
                    {item.titre}
                  </h3>
                  <p className="text-xs text-anthracite/50 line-clamp-2 mb-3">{item.resume}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-indigo group-hover:text-gold transition-colors mt-auto">
                    Lire
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA discret – invitation à l’accompagnement */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 mt-20">
        <div className="bg-cream rounded-2xl border border-champagne/60 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-indigo mb-2">
              Prêt à structurer votre croissance ?
            </h3>
            <p className="text-sm text-anthracite/60 max-w-md">
              Rejoignez les +150 dirigeants et PME que nous accompagnons chaque mois avec rigueur et confidentialité.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-indigo px-6 py-3 text-sm font-medium text-white hover:bg-indigo/90 transition-colors flex-shrink-0"
          >
            Se faire accompagner
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}