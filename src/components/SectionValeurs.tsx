import { valeurs } from '@/data/valeurs'

export default function SectionValeurs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-indigo md:text-5xl">Nos valeurs</h2>
          <p className="mt-4 text-base text-anthracite/50 max-w-2xl mx-auto leading-relaxed">
            Elles guident chacune de nos interventions.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {valeurs.map((v, i) => (
            <div
              key={i}
              className="rounded-2xl border border-champagne/60 bg-cream/50 p-8 text-center hover:shadow-lg hover:border-gold/20 transition-all duration-300"
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gold/10 text-gold font-bold text-sm mb-4">
                {i + 1}
              </span>
              <h3 className="font-serif font-bold text-indigo mb-2">{v.titre}</h3>
              <p className="text-sm text-anthracite/60">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}