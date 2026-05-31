import { services } from '@/data/services'
import Image from 'next/image'
import Link from 'next/link'

export default function SectionServices() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold mb-4">
            Nos expertises
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-indigo">
            Trois piliers pour votre croissance
          </h2>
          <p className="mt-4 text-base text-anthracite/50 max-w-2xl mx-auto leading-relaxed">
            De la stratégie à l'exécution, nous déployons des solutions concrètes pour chaque étape de votre développement.
          </p>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => {
            const isImageLeft = index % 2 === 0
            return (
              <div
                key={service.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
              >
                {/* Image */}
                <div className={`${isImageLeft ? 'lg:order-1' : 'lg:order-2'} flex justify-center`}>
                  <div className="w-full max-w-xs sm:max-w-sm rounded-2xl overflow-hidden border border-champagne/30 shadow-xl shadow-indigo/[0.03] aspect-[3/2] relative">
                    <Image
                      src={service.image}
                      alt={service.titre}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>
                </div>

                {/* Texte */}
                <div className={`${isImageLeft ? 'lg:order-2' : 'lg:order-1'} flex flex-col justify-center`}>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-indigo mb-4">
                    {service.titre}
                  </h3>
                  <p className="text-base lg:text-lg text-anthracite/60 font-light leading-relaxed mb-3">
                    {service.accroche}
                  </p>
                  <p className="text-sm text-anthracite/50 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link
                    href={`/services#${service.id}`}
                    className="self-start inline-flex items-center gap-2 bg-gold px-6 py-3 text-sm font-medium text-white hover:bg-benin-green transition-colors"
                  >
                    En savoir plus
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}