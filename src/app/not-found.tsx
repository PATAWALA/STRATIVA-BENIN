import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-cream px-6">
      <div className="max-w-lg mx-auto text-center">
        {/* Ligne tricolore Bénin */}
        <div className="flex items-center justify-center gap-1 mb-10">
          <span className="h-1 w-8 bg-benin-green rounded-full" />
          <span className="h-1 w-8 bg-benin-yellow rounded-full" />
          <span className="h-1 w-8 bg-benin-red rounded-full" />
        </div>

        {/* Code 404 discret */}
        <p className="text-8xl sm:text-9xl font-serif font-bold text-indigo/10 mb-4">
          404
        </p>

        {/* Message */}
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-indigo mb-4">
          Page introuvable
        </h1>
        <p className="text-base text-anthracite/50 max-w-md mx-auto mb-10 leading-relaxed">
          La page que vous cherchez n’existe pas ou a été déplacée.
          <br />
          Rejoignez-nous sur une de nos sections clés pour continuer.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-indigo px-6 py-3 text-sm font-medium text-white hover:bg-indigo/90 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Accueil
          </Link>
          <Link
            href="/ressources"
            className="inline-flex items-center gap-2 border border-champagne px-6 py-3 text-sm font-medium text-indigo hover:bg-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Ressources
          </Link>
        </div>
      </div>
    </main>
  )
}