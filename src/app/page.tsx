import Hero from '@/components/Hero'
import SectionServices from '@/components/SectionServices'
import SectionValeurs from '@/components/SectionValeurs'
import SectionInsights from '@/components/SectionInsights'
import SectionChiffres from '@/components/SectionChiffres'
import SectionTemoignages from '@/components/SectionTemoignages'
import SectionCTA from '@/components/SectionCTA'
import ContactForm from '@/components/ContactForm'

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionInsights />
      <SectionServices />
      <SectionValeurs />
      <SectionChiffres />
      <SectionTemoignages />
      <SectionCTA />
    </main>
  )
}