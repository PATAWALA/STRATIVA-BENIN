export interface Insight {
  id: string
  categorie: string
  titre: string
  resume: string
  date: string
  temps_lecture: number
  lien: string // pour pointer vers /insights/[id] quand la page existera
}

export const insights: Insight[] = [
  {
    id: '1',
    categorie: 'Stratégie',
    titre: 'Les 3 freins invisibles qui bloquent la rentabilité des PME au Bénin',
    resume: 'Découvrez les obstacles cachés qui plombent votre marge et comment les lever durablement.',
    date: '2026-05-15',
    temps_lecture: 6,
    lien: '/ressources/1',
  },
  {
    id: '2',
    categorie: 'Performance',
    titre: 'Comment une PME béninoise a gagné 34% de marge en 6 mois',
    resume: 'Retour d’expérience concret sur un accompagnement Strativa.',
    date: '2026-04-28',
    temps_lecture: 4,
    lien: '/ressources/2',
  },
]