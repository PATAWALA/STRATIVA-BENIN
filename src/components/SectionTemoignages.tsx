import { temoignages } from '@/data/temoignages'

export default function SectionTemoignages() {
  return (
    <section className="py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-indigo md:text-5xl">Ils nous font confiance</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {temoignages.map((t, i) => (
            <div key={i} className="rounded-2xl border border-champagne bg-white p-8 shadow-sm">
              <p className="text-anthracite italic mb-6">« {t.texte} »</p>
              <div>
                <p className="font-semibold text-indigo">{t.nom}</p>
                <p className="text-sm text-anthracite/70">{t.poste}, {t.entreprise}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}