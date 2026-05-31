export interface Temoignage {
  nom: string
  poste: string
  entreprise: string
  texte: string
}

export const temoignages: Temoignage[] = [
  {
    nom: 'Awa S.',
    poste: 'Directrice Générale',
    entreprise: 'AgroPlus Bénin',
    texte: 'Strativa a transformé notre approche commerciale. En 6 mois, notre rentabilité a bondi de 18% grâce à la restructuration de nos gammes.'
  },
  {
    nom: 'Cédric K.',
    poste: 'PDG',
    entreprise: 'LogiTrans Africa',
    texte: 'L’accompagnement sur notre gouvernance a été décisif pour rassurer nos investisseurs. Un niveau d’excellence rare en Afrique de l’Ouest.'
  },
  {
    nom: 'Mariam T.',
    poste: 'Fondatrice',
    entreprise: 'CreaLab',
    texte: 'Je recommande Strativa pour leur capacité à allier vision stratégique et pragmatisme terrain. Un vrai partenaire de croissance.'
  }
]