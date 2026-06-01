import { temoignages } from '@/data/temoignages'

export default function SectionTemoignages() {
  return (
    <section className="py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          {/* Ligne tricolore Bénin */}
          <div className="flex items-center justify-center gap-1 mb-6">
            <span className="h-1 w-8 bg-benin-green rounded-full" />
            <span className="h-1 w-8 bg-benin-yellow rounded-full" />
            <span className="h-1 w-8 bg-benin-red rounded-full" />
          </div>
          <h2 className="text-4xl font-serif font-bold text-indigo md:text-5xl">
            Ils nous font confiance
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {temoignages.map((t, i) => (
            <div
              key={i}
              className="border border-champagne/60 p-8 shadow-lg bg-gradient-to-b from-white via-white to-indigo"
            >
              <p className="text-anthracite italic mb-6 leading-relaxed">
                « {t.texte} »
              </p>
              <div>
                <p className="font-semibold text-white">{t.nom}</p>
                <p className="text-sm text-cream/80">
                  {t.poste}, {t.entreprise}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}