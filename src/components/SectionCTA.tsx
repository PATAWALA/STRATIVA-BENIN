import Link from 'next/link'

export default function SectionCTA() {
  return (
    <section className="py-24 bg-indigo">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-serif font-bold text-white md:text-5xl">
          Prêt à propulser votre entreprise ?
        </h2>
        <p className="mt-4 text-lg text-cream/80 max-w-2xl mx-auto">
          Prenez 30 minutes avec un directeur associé pour un diagnostic gratuit de votre potentiel de croissance.
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-indigo px-8 py-4 text-sm font-semibold hover:bg-gold hover:text-white transition-colors"
          >
            Prendre rendez-vous
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}