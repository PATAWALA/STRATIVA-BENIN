export interface Article {
  id: string
  titre: string
  resume: string
  contenu: string
  date: string
  temps_lecture: number
  categorie: string
  image: string
}

export const articles: Article[] = [
  {
    id: '1',
    titre: 'Les 3 freins invisibles qui bloquent la rentabilité des PME au Bénin',
    resume: 'Découvrez les obstacles cachés qui plombent votre marge et comment les lever durablement.',
    contenu: `
      <p>La plupart des dirigeants de PME que nous rencontrons sont focalisés sur le chiffre d’affaires. Pourtant, c’est souvent dans les coulisses que la rentabilité s’érode. Voici les trois freins majeurs que nous identifions lors de nos diagnostics.</p>
      <h2>1. L’absence de segmentation client</h2>
      <p>Beaucoup d’entreprises traitent tous leurs clients de la même manière, sans identifier les segments les plus rentables. Résultat : des efforts dilués et une marge sous-optimale.</p>
      <h2>2. Des processus non documentés</h2>
      <p>Quand les procédures ne sont pas écrites, chaque collaborateur improvise. Cela entraîne des erreurs, des doublons et une perte de productivité.</p>
      <h2>3. Un pilotage par l’instinct</h2>
      <p>Décider sans indicateurs fiables, c’est naviguer sans boussole. La mise en place de tableaux de bord simples transforme la prise de décision.</p>
      <p>Strativa a accompagné plus de 150 PME dans la résolution de ces freins. Un diagnostic stratégique 360° permet de les identifier et de construire un plan d’action sur mesure.</p>
    `,
    date: '2026-05-15',
    temps_lecture: 6,
    categorie: 'Stratégie',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    titre: 'Pourquoi votre entreprise a besoin d’un comité consultatif externe',
    resume: 'Un regard neuf et indépendant peut décupler votre performance stratégique.',
    contenu: `
      <p>Les dirigeants sont souvent seuls face à leurs décisions. Un comité consultatif externe apporte une expertise complémentaire et un regard objectif.</p>
      <h2>Les bénéfices immédiats</h2>
      <p>Un comité aide à challenger la stratégie, identifier les angles morts et ouvrir le réseau du dirigeant. Il renforce aussi la crédibilité auprès des partenaires financiers.</p>
      <h2>Comment le mettre en place ?</h2>
      <p>Il s’agit de recruter 3 à 5 experts indépendants, aux profils complémentaires, qui se réunissent trimestriellement. Strativa vous accompagne dans la sélection et l’animation de ce comité.</p>
    `,
    date: '2026-04-28',
    temps_lecture: 4,
    categorie: 'Gouvernance',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '3',
    titre: 'Digitalisation : par où commencer sans exploser son budget ?',
    resume: 'Feuille de route pragmatique pour PME ambitieuses en Afrique de l’Ouest.',
    contenu: `
      <p>La transformation digitale fait peur : coûts, complexité, résistance au changement. Pourtant, il est possible de démarrer avec des actions simples et un budget maîtrisé.</p>
      <h2>Étape 1 : Numériser les processus clés</h2>
      <p>Commencez par digitaliser un processus qui vous fait perdre du temps (devis, facturation, gestion des stocks). Des solutions SaaS abordables existent.</p>
      <h2>Étape 2 : Former vos équipes</h2>
      <p>La technologie n’est rien sans les compétences. Un plan de formation progressif est essentiel.</p>
      <p>Strativa vous aide à concevoir votre feuille de route digitale et à sélectionner les outils adaptés à votre secteur.</p>
    `,
    date: '2026-03-12',
    temps_lecture: 5,
    categorie: 'Digital',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
]