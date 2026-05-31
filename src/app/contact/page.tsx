import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <main className="pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold mb-4">
            Contact
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-indigo">
            Parlons de votre projet
          </h1>
          <p className="mt-4 text-base text-anthracite/50 max-w-2xl mx-auto leading-relaxed">
            Un premier échange confidentiel avec l'un de nos directeurs associés.
          </p>
        </div>
        <ContactForm />
      </div>
    </main>
  )
}