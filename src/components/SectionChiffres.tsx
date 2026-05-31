import { chiffres } from '@/data/chiffres'

export default function SectionChiffres() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {chiffres.map((c, i) => (
            <div key={i}>
              <p className="text-4xl md:text-5xl font-serif font-bold text-gold">{c.valeur}</p>
              <p className="mt-2 text-sm text-anthracite">{c.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}