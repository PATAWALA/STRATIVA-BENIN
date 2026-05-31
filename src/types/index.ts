export interface LeadInsert {
  nom: string
  prenom: string
  email: string
  nom_entreprise?: string
  taille_entreprise?: '2-10' | '11-50' | '50+'
  type_besoin?: string
  source: 'contact' | 'popup'
}