import { valeurs } from '@/data/valeurs'

export default function SectionValeurs() {
  return (
    <section className="py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-indigo md:text-5xl">Notre ADN</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valeurs.map((v, i) => (
            <div key={i} className="text-center">
              <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                <span className="text-gold text-xl font-bold">{i + 1}</span>
              </div>
              <h3 className="text-lg font-serif font-bold text-indigo mb-2">{v.titre}</h3>
              <p className="text-sm text-anthracite">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}