import Link from 'next/link'
import Image from 'next/image'
import type { Article } from '@/data/articles'

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/ressources/${article.id}`}
      className="group relative bg-white rounded-2xl border border-champagne/60 overflow-hidden shadow-sm hover:shadow-xl hover:border-gold/20 transition-all duration-500 flex flex-col"
    >
      {/* Image miniature */}
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <Image
          src={article.image}
          alt={article.titre}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Overlay subtil au survol */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Contenu texte */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-gold bg-gold/[0.06] px-3 py-1 rounded-full">
            {article.categorie}
          </span>
          <span className="text-[10px] text-anthracite/40">
            {article.temps_lecture} min
          </span>
        </div>

        <h3 className="text-xl font-serif font-bold text-indigo mb-3 leading-snug group-hover:text-gold transition-colors duration-300">
          {article.titre}
        </h3>

        {/* Barre tricolore Bénin discrète */}
        <div className="w-12 h-[3px] bg-gradient-to-r from-benin-green via-benin-yellow to-benin-red mb-3 rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />

        <p className="text-sm text-anthracite/60 leading-relaxed mb-4 flex-1 line-clamp-3">
          {article.resume}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-xs text-anthracite/40">
            {new Date(article.date).toLocaleDateString('fr-FR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-indigo group-hover:text-gold transition-colors">
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
      </div>
    </Link>
  )
}