export interface Membre {
  nom: string
  poste: string
  bio: string
  image: string // chemin local dans /public/images/equipe/
}

export const equipe: Membre[] = [
  {
    nom: 'Koffi Akouété',
    poste: 'Associé Fondateur',
    bio: '20 ans d’expérience en stratégie d’entreprise. Ancien consultant senior chez McKinsey, il a piloté des missions de restructuration dans 15 pays d’Afrique de l’Ouest.',
    image: '/images/pdg1.jpg',
  },
  {
    nom: 'Afiavi Mensah',
    poste: 'Directrice Conseil',
    bio: 'Experte en pilotage de la performance et en transformation digitale. Certifiée HEC Paris, elle a accompagné plus de 50 PME dans leur croissance.',
    image: '/images/pdg2.jpg',
  },
  {
    nom: 'Bio Tchané',
    poste: 'Senior Advisor',
    bio: 'Ancien Directeur Général de banque en zone UEMOA. Il apporte son expertise en gouvernance, levée de fonds et relations institutionnelles.',
    image: '/images/pdg3.jpg',
  },
]