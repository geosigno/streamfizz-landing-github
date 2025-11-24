import { type } from "os"

export const faqItems = [
  {
    question: 'À quoi correspond la bande passante VOD ?',
    answer:
      "La bande passante VOD correspond aux données utilisées lorsque vos spectateurs regardent vos vidéos. Grâce à notre technologie d'encodage multi-débit (4 qualités disponibles), Streamfizz garantit une lecture fluide et optimisée sur tous les appareils — même avec une connexion variable. En moyenne, 100 Go de bande passante permettent environ 93 heures de lecture, soit jusqu'à 186 vidéos de 30 minutes. De quoi offrir une belle visibilité à votre contenu !",
  },
  {
    question: 'Comment savoir combien de personnes vont regarder mon direct ?',
    answer:
      "Il est souvent difficile d'anticiper avec précision l'audience d'un live. C'est pourquoi Streamfizz propose des offres \"Pay As You Go\" : vous ne payez que ce que vous consommez, en fonction du nombre réel de spectateurs et de la durée de diffusion. Pour les abonnements, nous nous basons sur la moyenne mensuelle ou annuelle de spectateurs, selon votre formule d'engagement, afin de vous proposer un tarif adapté à votre usage réel.",
  },
  {
    question: "A quoi correspond la limite de charactère de la traduction automatique ?",
    answer:
      "La limite de caractères varie selon votre abonnement. Par exemple, l'abonnement Standard permet de traiter jusqu'à 500 000 caractères, ce qui correspond en moyenne à environ 10 heures de vidéo. Cette équivalence dépend de la densité de mots dans la transcription : un contenu dense avec un débit de parole rapide utilisera plus de caractères qu'une vidéo avec des pauses ou un débit lent. Le nombre d'heures réellement traitables peut donc varier selon le type de contenu.",
  },
  {
    question: "Puis-je changer d'offre plus tard ?",
    answer:
      'Oui, vous pouvez passer à une offre supérieure ou inférieure à tout moment. Le changement sera effectif dès le prochain cycle de facturation.',
  },
  {
    question: 'Proposez-vous des offres personnalisées ?',
    answer:
      'Absolument. Si vous avez des besoins spécifiques en matière de stockage, bande passante, durée de live ou nombre de spectateurs, notre équipe peut vous proposer une offre sur mesure.',
  },
  {
    question: 'Y a-t-il un engagement minimum ?',
    answer:
      'Aucun engagement pour les abonnements mensuels. Vous pouvez résilier à tout moment en nous contactant. Les abonnements annuels sont valables pour 12 mois, avec un tarif avantageux.',
  },
]

// Define the pricing data for bibliotheque
export const bibliothequeData = [
  {
    title: 'VOD Essential',
    price: '50€',
    period: 'HT/mois',
    annualPrice: '600€ HT',
    monthlyPrice: '60€ HT/mois',
    features: [
      { text: '100 Go de stockage (fichiers sources)' },
      { text: '+100 vidéos hébergées (estimation)' },
      { text: '250 Go de bande passante mensuelle' },
      { text: '230 heures de lecture vidéo en moyenne' },
      { text: '1 utilisateur' },
      { text: '30 minutes de transcription automatique mensuelle' },
      { text: '25 000 caractères de traduction automatique mensuelle' },
      { text: '1 WebTV inclus' },
    ],
    isHighlighted: false,
  },
  {
    title: 'VOD Standard',
    price: '150€',
    period: 'HT/mois',
    annualPrice: '1 800€ HT',
    monthlyPrice: '180€ HT/mois',
    features: [
      { text: '250 Go de stockage' },
      { text: '+300 vidéos hébergées (estimation)' },
      { text: '500 Go de bande passante mensuelle' },
      { text: '460 heures de lecture vidéo en moyenne' },
      { text: 'Utilisateurs illimités' },
      { text: '10 h de transcription automatique' },
      { text: '500 000 caractères de traduction automatique mensuelle' },
      { text: 'WebTV illimitées' },
    ],
    isHighlighted: true,
  },
  {
    title: 'VOD Advanced',
    price: '250€',
    period: 'HT/mois',
    annualPrice: '3 000€ HT',
    monthlyPrice: '300€ HT/mois',
    features: [
      { text: '500 Go de stockage' },
      { text: '+600 vidéos hébergées (estimation)' },
      { text: '1 To de bande passante mensuelle' },
      { text: '920 heures de lecture vidéo en moyenne' },
      { text: 'Utilisateurs illimités' },
      { text: '20 h de transcription automatique' },
      { text: '1 000 000 caractères de traduction automatique mensuelle' },
      { text: 'WebTV illimitées' },
    ],
    isHighlighted: false,
  },
]

// Define the pricing data for diffusion
export const diffusionData = [
  {
    title: 'Live Starter',
    price: '250€',
    period: 'HT/mois',
    annualPrice: '3 000€ HT',
    monthlyPrice: '300€ HT/mois',
    features: [
      { text: '2 heures de live (24 heures annualisées)' },
      { text: '200 spectateurs' },
      { text: '100 Go de stockage' },
      { text: '+100 vidéos hébergées (estimation)' },
      { text: '250 Go de bande passante VOD mensuelle' },
      { text: '230 heures de lecture vidéo VOD en moyenne' },
      { text: 'Utilisateurs illimités' },
      { text: '2 h de transcription automatique mensuelle' },
      { text: '100 000 caractères de traduction automatique mensuelle' },
      { text: '1 WebTV inclus' },
    ],
    isHighlighted: false,
  },
  /* {
      title: "Live Advanced",
      price: "350€",
      period: "HT/mois",
      annualPrice: "4 200€ HT",
      monthlyPrice: "420€ HT/mois",
      features: [
        { text: "2 heures de live" },
        { text: "500 spectateurs" },
        { text: "250 Go de stockage" },
        { text: "+300 vidéos hébergées (estimation)" },
        { text: "500 Go de bande passante VOD mensuelle" },
        { text: "460 heures de lecture vidéo VOD en moyenne" },
        { text: "Utilisateurs illimités" },
        { text: "10 h de transcription automatique mensuelle" },
        { text: "WebTV illimitées" },
      ],
      isHighlighted: true,
    },
    {
      title: "Live Pro",
      price: "800€",
      period: "HT/mois",
      annualPrice: "9 600€ HT",
      monthlyPrice: "960€ HT/mois",
      features: [
        { text: "5 heures de live" },
        { text: "500 spectateurs" },
        { text: "500 Go de stockage" },
        { text: "+600 vidéos hébergées (estimation)" },
        { text: "1 To de bande passante VOD mensuelle" },
        { text: "920 heures de lecture vidéo VOD en moyenne" },
        { text: "Utilisateurs illimités" },
        { text: "20 h de transcription automatique mensuelle" },
        { text: "WebTV illimitées" },
      ],
    }, */
]
