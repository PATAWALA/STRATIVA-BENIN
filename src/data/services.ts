export interface Service {
  id: string
  titre: string
  accroche: string
  description: string
  image: string
  details: string[]
}

export const services: Service[] = [
  {
    id: 'strategie',
    titre: 'Stratégie',
    accroche: 'De la vision à la feuille de route : alignez votre entreprise sur un cap clair.',
    description:
      'Nous réalisons un diagnostic complet de votre positionnement concurrentiel, de vos chaînes de valeur et de vos relais de croissance. Nous identifions les leviers prioritaires et construisons avec vous un plan stratégique sur 3 à 5 ans, chiffré et décliné en actions concrètes. Chaque décision est ensuite suivie d’indicateurs pour mesurer l’impact réel.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    details: [
      'Diagnostic stratégique 360° : forces, faiblesses, opportunités, menaces.',
      'Étude de marché et analyse concurrentielle approfondie.',
      'Définition des priorités et plans d’actions chiffrés.',
      'Accompagnement dans la mise en œuvre et la mesure des résultats.',
    ],
  },
  {
    id: 'talents-leadership',
    titre: 'Talents & Leadership',
    accroche: 'Des dirigeants outillés, des équipes alignées, une relève assurée.',
    description:
      'Nous renforçons le leadership à tous les étages : coaching individuel du dirigeant, structuration des comités de direction, programmes de montée en compétences. Nous préparons également les plans de succession et de transmission pour garantir la pérennité de votre organisation. Nos interventions sont conçues pour libérer le potentiel humain et créer une culture de performance durable.',
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    details: [
      'Coaching individuel de dirigeants et de comités de direction.',
      'Conception de plans de succession et de transmission.',
      'Mise en place de la gouvernance (conseils, comités).',
      'Programmes de montée en compétences et leadership.',
    ],
  },
  {
    id: 'performance-execution',
    titre: 'Performance & Exécution',
    accroche: 'Faites de votre excellence opérationnelle votre avantage concurrentiel.',
    description:
      'Nous vous aidons à passer de la stratégie à l’exécution sans friction. Cela commence par la définition d’indicateurs clairs (KPI), l’optimisation de vos processus internes, la digitalisation de vos opérations et l’automatisation des tâches à faible valeur ajoutée. Nous assurons un suivi post-accompagnement pour garantir l’atteinte des objectifs de rentabilité et de productivité.',
    image:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    details: [
      'Mise en place de tableaux de bord et KPI stratégiques.',
      'Optimisation des processus internes et réduction des coûts.',
      'Transformation digitale et automatisation.',
      'Suivi post-accompagnement pour garantir l’atteinte des objectifs.',
    ],
  },
]