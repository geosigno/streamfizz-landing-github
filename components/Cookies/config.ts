import type { CookieConsentConfig } from 'vanilla-cookieconsent'
import { assignCrispSegment } from '../../lib/crisp'

function applyConsentSettings(categories: any) {
  // Handle Matomo tracking
  if (categories.includes('analytique')) {
    loadMatomo()
  } else {
    // Disable Matomo if previously loaded
    if (window._paq) {
      window._paq.push(['optUserOut'])
    }
  }

  if (categories.includes('communication')) {
    loadCrisp()
  } else {
    if (window.$crisp) {
      window.$crisp.push(['do', 'session:reset'])
      window.$crisp.push(['do', 'chat:hide'])
    }
  }
}

export function loadMatomo() {
  if (typeof window !== 'undefined') {
    window._paq = window._paq || []
    window._paq.push(['trackPageView'])
    window._paq.push(['enableLinkTracking'])

    const u = 'https://streamfizz.matomo.cloud/'
    window._paq.push(['setTrackerUrl', u + 'matomo.php'])
    window._paq.push(['setSiteId', '9'])

    const d = document
    const g = d.createElement('script')
    const s = d.getElementsByTagName('script')[0]
    g.async = true
    g.src = 'https://cdn.matomo.cloud/streamfizz.matomo.cloud/matomo.js'
    if (s && s.parentNode) {
      s.parentNode.insertBefore(g, s)
    } else {
      d.head.appendChild(g)
    }
  }
}

function loadCrisp() {
  if (typeof window !== 'undefined') {
    window.$crisp = []
    window.CRISP_WEBSITE_ID = '0cd4bc27-be92-4383-af53-52d60bbf8817'

    const d = document
    const s = d.createElement('script')
    s.src = 'https://client.crisp.chat/l.js'
    s.async = true

    s.onload = () => {
      setTimeout(() => {
        assignCrispSegment('streamfizz')
        assignCrispSegment('lead')
        assignCrispSegment('chat')
      }, 1000)
    }

    d.getElementsByTagName('head')[0].appendChild(s)
  }
}

const pluginConfig: CookieConsentConfig = {
  guiOptions: {
    consentModal: {
      layout: 'box',
      position: 'bottom left',
      equalWeightButtons: true,
      flipButtons: false,
    },
    preferencesModal: {
      layout: 'box',
      position: 'left',
      equalWeightButtons: true,
      flipButtons: false,
    },
  },

  onFirstConsent: ({ cookie }) => {
    console.log('Premier consentement donné:', cookie)
  },
  onConsent: ({ cookie }) => {
    console.log('Consentement mis à jour:', cookie)
    applyConsentSettings(cookie.categories)
  },
  onChange: ({ changedCategories }) => {
    console.log('Catégories modifiées:', changedCategories)
    applyConsentSettings(changedCategories)
  },

  categories: {
    necessary: {
      readOnly: true,
      enabled: true,
    },
    analytics: {
      enabled: true,
      autoClear: {
        cookies: [
          {
            name: /^(crisp)/,
          },
        ],
      },
    },
    communication: {},
  },

  mode: 'opt-in',

  language: {
    default: 'fr',

    translations: {
      fr: {
        consentModal: {
          title: 'Nous utilisons des cookies',
          description:
            "Nous utilisons des cookies et d'autres technologies de suivi pour améliorer votre expérience de navigation sur notre site, pour vous montrer un contenu personnalisé, pour analyser le trafic de notre site et pour comprendre d'où viennent nos visiteurs.",
          acceptAllBtn: 'Tout accepter',
          acceptNecessaryBtn: 'Tout refuser',
          showPreferencesBtn: 'Gérer les préférences',
          footer: "<a href='/legal/politique-de-confidentialite'>Politique de confidentialité</a>",
        },
        preferencesModal: {
          title: 'Préférences de cookies',
          acceptAllBtn: 'Tout accepter',
          acceptNecessaryBtn: 'Tout refuser',
          savePreferencesBtn: 'Sauvegarder les préférences',
          closeIconLabel: 'Fermer',
          sections: [
            {
              title: 'Utilisation des cookies',
              description:
                'Nous utilisons des cookies pour assurer les fonctionnalités de base du site et pour améliorer votre expérience en ligne.',
            },
            {
              title: 'Cookies strictement nécessaires',
              description:
                'Ces cookies sont essentiels au bon fonctionnement du site et ne peuvent pas être désactivés.',
              linkedCategory: 'necessary',
            },
            {
              title: 'Cookies analytiques',
              description:
                'Ces cookies recueillent des informations sur la façon dont vous utilisez notre site, les pages que vous avez visitées et les liens sur lesquels vous avez cliqué. Toutes les données sont anonymisées et ne peuvent pas être utilisées pour vous identifier.',
              linkedCategory: 'analytics',
            },
            {
              title: 'Cookies de communication',
              description:
                "Ces cookies permettent la fonctionnalité de chat et d'autres services de communication sur notre site.",
              linkedCategory: 'communication',
            },
          ],
        },
      },
    },
  },
}

export default pluginConfig
