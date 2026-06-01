import Hero from '@/components/Hero'
import SectionServices from '@/components/SectionServices'
import SectionInsights from '@/components/SectionInsights'
import SectionTemoignages from '@/components/SectionTemoignages'
import SectionDirigeant from '@/components/SectionDirigeant'
import SectionCTA from '@/components/SectionCTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionInsights />
      <SectionServices />
      <SectionDirigeant />
      <SectionTemoignages />
      <SectionCTA />
    </main>
  )
}