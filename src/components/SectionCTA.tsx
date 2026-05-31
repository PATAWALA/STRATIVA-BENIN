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
            className="inline-flex items-center rounded-full bg-gold px-8 py-4 text-sm font-semibold text-indigo hover:bg-gold/90 transition-colors"
          >
            Prendre rendez-vous
          </Link>
        </div>
      </div>
    </section>
  )
}