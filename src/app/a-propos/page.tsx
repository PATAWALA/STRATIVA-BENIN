import Link from 'next/link'
import Image from 'next/image'
import { equipe } from '@/data/equipe'
import { chiffres } from '@/data/chiffres'
import { valeurs } from '@/data/valeurs'

export default function AProposPage() {
  return (
    <main className="pt-28 pb-24">
      {/* Bannière titre */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24 text-center">
        <div className="flex items-center justify-center gap-1 mb-6">
          <span className="h-1 w-8 bg-benin-green rounded-full" />
          <span className="h-1 w-8 bg-benin-yellow rounded-full" />
          <span className="h-1 w-8 bg-benin-red rounded-full" />
        </div>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold mb-4">Notre cabinet</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-indigo mb-6">Strativa Bénin</h1>
        <p className="text-lg text-anthracite/50 font-light max-w-3xl mx-auto leading-relaxed">
          Nous sommes un cabinet de conseil en stratégie et performance dédié aux dirigeants et organisations qui veulent structurer leur croissance et transformer leurs ambitions en résultats mesurables.
        </p>
      </section>

      {/* Mission / Vision / Méthode */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto bg-indigo/10 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-xl font-serif font-bold text-indigo mb-2">Notre mission</h2>
            <p className="text-sm text-anthracite/60 leading-relaxed">
              Fournir aux dirigeants africains des stratégies sur-mesure, exécutables et mesurables, pour libérer leur potentiel de croissance.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto bg-gold/10 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h2 className="text-xl font-serif font-bold text-indigo mb-2">Notre vision</h2>
            <p className="text-sm text-anthracite/60 leading-relaxed">
              Devenir le partenaire stratégique de référence pour les PME et organisations d’Afrique de l’Ouest qui visent l’excellence.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto bg-benin-green/10 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-benin-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-xl font-serif font-bold text-indigo mb-2">Notre méthode</h2>
            <p className="text-sm text-anthracite/60 leading-relaxed">
              Diagnostic rigoureux, plan d’action chiffré, accompagnement dans l’exécution et mesure continue des résultats.
            </p>
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="bg-indigo/5 py-20 mb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {chiffres.map((c, i) => (
              <div key={i}>
                <p className="text-4xl md:text-5xl font-serif font-bold text-indigo">{c.valeur}</p>
                <p className="text-sm text-anthracite/50 mt-1">{c.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-indigo text-center mb-12">Nos valeurs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {valeurs.map((v, i) => (
            <div key={i} className="border border-champagne/60 bg-white p-6 text-center">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-gold/10 text-gold font-bold text-sm mb-3">
                {i + 1}
              </span>
              <h3 className="font-serif font-bold text-indigo mb-2">{v.titre}</h3>
              <p className="text-xs text-anthracite/50">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Équipe */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-indigo text-center mb-12">Notre équipe dirigeante</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {equipe.map((membre, i) => (
            <div key={i} className="text-center p-8 bg-white border border-champagne/60 shadow-sm">
              <div className="w-20 h-20 mx-auto mb-4 overflow-hidden rounded-lg">
                <Image
                  src={membre.image}
                  alt={membre.nom}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                  sizes="80px"
                />
              </div>
              <h3 className="text-lg font-serif font-bold text-indigo">{membre.nom}</h3>
              <p className="text-sm text-gold font-medium mt-1">{membre.poste}</p>
              <p className="text-sm text-anthracite/50 mt-2">{membre.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="bg-indigo p-10 sm:p-16 shadow-xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white mb-4">
            Prêt à structurer votre croissance ?
          </h2>
          <p className="text-cream/70 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Prenez rendez-vous avec un directeur associé pour un diagnostic confidentiel de 30 minutes.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-indigo px-8 py-4 text-sm font-semibold hover:bg-gold hover:text-white transition-all duration-300"
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