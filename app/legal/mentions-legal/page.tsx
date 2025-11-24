import Container from '../../../components/Container'
import Title from '../../../components/Title'
import { getLegalPageSchema } from '@/lib/structured-data'
import { generateLegalMetadata } from '@/lib/metadata'
import { PageStructuredData } from '@/components/SEO/StructuredData'

// Metadata for legal page
export const metadata = generateLegalMetadata({
  title: 'Mentions légales - StreamFizz | Informations légales',
  description: 'Mentions légales de StreamFizz : informations sur l\'éditeur, hébergeur, directeur de publication. Conformité LCEN et protection des données.',
  path: '/legal/mentions-legal',
})

export default function MentionsLegalPage() {
  // Generate structured data
  const legalSchema = getLegalPageSchema(
    'Mentions légales - StreamFizz',
    'Informations légales de StreamFizz : éditeur, hébergeur, directeur de publication, conformité LCEN.',
    'mentions-legal'
  )

  return (
    <>
      <PageStructuredData 
        schema={legalSchema}
        id="legal-structured-data"
      />
      
      <Container>
      <div className="text-justify leading-relaxed ">
        <Title level={1} text="Mentions légales" />

        <p>
          Conformément aux dispositions des articles 6-III et 19 de la Loi n°2004-575 du 21 juin
          2004 pour la Confiance dans l'économie numérique, dite L.C.E.N., il est porté à la
          connaissance des utilisateurs et visiteurs du site <strong>Streamfizz</strong> les
          présentes mentions légales.
        </p>

        <p>
          Le site <strong>Streamfizz</strong> est accessible à l'adresse suivante :{' '}
          <a href="http://www.streamfizz.com">www.streamfizz.com</a> (ci-après "le Site"). L'accès
          et l'utilisation du Site sont soumis aux présentes "Mentions légales" détaillées ci-après
          ainsi qu'aux lois et/ou règlements applicables.
        </p>

        <p>
          La connexion, l'utilisation et l'accès à ce Site impliquent l'acceptation intégrale et
          sans réserve de l'internaute de toutes les dispositions des présentes Mentions Légales.
        </p>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 pb-4">
            Article 1. Informations légales
          </h2>
          <p>
            En vertu de l'Article 6 de la Loi n°2004-575 du 21 juin 2004 pour la confiance dans
            l'économie numérique, il est précisé dans cet article l'identité des différents
            intervenants dans le cadre de sa réalisation et de son suivi.
          </p>
          <p>
            Streamfizz est une marque déposée de la <strong>SAS STREAMFIZZ</strong> au capital de 30
            000 euros.
          </p>

          <h3 className="text-xl font-semibold leading-8 text-gray-900">
            Le site société est édité par :
          </h3>
          <p>
            <strong>Streamfizz</strong>
            <br />
            ayant son siège social à l'adresse suivante : 56 AVENUE HENRI GINOUX , 92120 MONTROUGE
            France, et immatriculée au numéro suivant : 93847606600015.
          </p>
          <p>Téléphone : +33 (0)4 89 83 65 00</p>
          <p>Adresse e-mail : contact@streamfizz.fr</p>
          <p>ci-après "l'Éditeur"</p>
        </section>

        <section className="mt-12">
          <h3 className="text-xl font-semibold leading-8 text-gray-900">
            Le Directeur de publication est :
          </h3>
          <p>Vivien Bouchard</p>
          <p>Adresse e-mail de contact : contact@streamfizz.fr</p>
          <p>ci-après "le Directeur de publication"</p>
        </section>

        <section className="mt-12">
          <h3 className="text-xl font-semibold leading-8 text-gray-900">
            Le site Société est hébergé par :
          </h3>
          <p>
            <strong>OVH SA</strong>
          </p>
          <p>2 rue Kellermann – 59100 Roubaix – France</p>
          <p>Téléphone : 08 99 70 17 61</p>
          <p>ci-après "l'Hébergeur"</p>
        </section>

        <p>
          Sont considérés comme utilisateurs tous les internautes qui naviguent, lisent, visionnent
          et utilisent le site <strong>Streamfizz</strong>.
        </p>
        <p>ci-après les "Utilisateurs"</p>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 pb-4">Crédits</h2>
          <p>Étude, conception graphique et réalisation technique du site</p>
          <p>
            <strong>STREAMFIZZ</strong>
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 pb-4">
            Article 2. Accessibilités
          </h2>
          <p>
            Les Utilisateurs du Site <strong>Streamfizz</strong> reconnaissent disposer de la
            compétence et des moyens nécessaires pour accéder et utiliser ce Site.
          </p>
          <p>
            Le Site est par principe accessible aux utilisateurs 24/24h et 7/7j, sauf interruption,
            programmée ou non, pour des besoins de maintenance ou en cas de force majeure.
          </p>
          <p>
            En cas d'impossibilité d'accès au Site, celui-ci s'engage à faire son maximum afin d'en
            rétablir l'accès. Le Site ne saurait être tenu pour responsable de tout dommage, quelle
            qu'en soit la nature, résultant de son indisponibilité.
          </p>
          <p>
            La société Streamfizz met tout en œuvre pour offrir aux Utilisateurs des informations
            et/ou outils disponibles et vérifiés, mais ne saurait être tenue pour responsable des
            erreurs, d'une absence de disponibilité des informations et/ou de la présence de virus
            sur son site.
          </p>
          <p>
            Ces informations peuvent être corrigées, modifiées ou mises à jour à tout moment sans
            préavis.
          </p>
          <p>
            Les liens hypertextes mis en place dans le cadre du présent Site en direction d'autres
            ressources présentes sur le réseau internet ne sauraient engager la responsabilité de la
            société Streamfizz.
          </p>
          <p>
            Ce site utilise Matomo, plateforme d'analyse de site internet. Cette plateforme utilise
            des cookies, fichiers texte placés sur votre ordinateur, permettant l'analyse de
            l'utilisation du site par ses utilisateurs. Matomo utilisera cette information dans le
            but d'évaluer votre utilisation du site, de compiler des rapports sur l'activité du site
            à destination de son éditeur et de fournir d'autres services relatifs à l'activité du
            site et à l'utilisation d'internet.
          </p>
          <p>
            Vous pouvez désactiver l'utilisation des cookies en sélectionnant les paramètres
            appropriés de votre navigateur. Cependant, une telle désactivation pourrait empêcher
            l'utilisation de certaines fonctionnalités de ce site. En utilisant ce site internet,
            vous consentez expressément au traitement de vos données nominatives par Matomo dans les
            conditions et pour les finalités décrites ci-dessus.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 pb-4">
            Article 3. Collecte de données et loi informatiques et libertés
          </h2>
          <p>
            Ce site est conforme aux dispositions de la Loi 78-17 du 6 janvier 1978 relative à
            l'informatique, aux fichiers et aux libertés. En vertu de celle-ci l'Utilisateur
            bénéficie notamment d'un droit d'opposition (art. 32 et 38), d'accès (art. 38-39) et de
            rectification (art. 40) des données le concernant.
          </p>
          <p>
            Pour faire usage de celui-ci, l'Utilisateur doit s'adresser à l'Éditeur en le contactant
            à l'adresse suivante : contact@streamfizz.fr, ou par courrier adressé au siège social de
            l'Éditeur en précisant ses nom(s), prénom(s), adresse et adresse(s) e-mail.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 pb-4">
            Article 4. Cookies et témoins de connexion
          </h2>
          <p>
            Les cookies sont des fichiers texte placés sur le disque dur de votre ordinateur par un
            serveur de page Web.
          </p>
          <p>
            Quand vous visitez notre site Web, pour chercher, lire ou télécharger de l'information,
            nous recueillons et conservons certains "renseignements visiteur" vous concernant, tels
            que le nom du domaine et de l'ordinateur hôte à partir desquels vous allez sur internet,
            l'adresse du protocole internet (IP) de l'ordinateur que vous utilisez, la date et
            l'heure de votre navigation sur notre site, et les URL à partir desquelles vous êtes
            passé sur notre site.
          </p>
          <p>
            Nous utilisons cette information pour analyser et mesurer la fréquentation de notre site
            et pour nous aider à le rendre plus utile.
          </p>
          <p>
            Votre navigateur est sans doute configuré pour accepter les cookies. Vous pouvez
            cependant modifier ce paramètre pour qu'il les refuse et nous vous suggérons de le faire
            si vous refusez l'utilisation des cookies.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 pb-4">
            Article 5. Loi applicable, juridiction et propriété intellectuelle
          </h2>
          <p>
            Le Site constitue une œuvre de l'esprit protégée par les dispositions du Code de la
            Propriété Intellectuelle et des Réglementations Internationales applicables.
          </p>
          <p>
            Le Client ne peut en aucune manière réutiliser, céder ou exploiter pour son propre
            compte tout ou partie des éléments ou travaux du Site.
          </p>
          <p>
            L'utilisation du site <a href="https://www.streamfizz.com/">www.streamfizz.com</a>{' '}
            implique l'acceptation pleine et entière des conditions générales d'utilisation ci-après
            décrites.
          </p>
          <p>
            <strong>Streamfizz</strong> est propriétaire des droits de propriété intellectuelle et
            détient les droits d'usage sur tous les éléments accessibles sur le site web, notamment
            les textes, images, graphismes, logos, vidéos, icônes et sons.
          </p>
          <p>
            Toute reproduction, représentation, modification, publication, adaptation de tout ou
            partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est
            interdite, sauf autorisation écrite préalable de la part de Streamfizz.
          </p>
          <p>
            Toute exploitation non autorisée du site ou d'un quelconque des éléments qu'il contient
            sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux
            dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
          </p>
          <p>
            Les présentes Mentions légales sont soumises au Droit français, qui détermine, au cas
            par cas, la loi applicable.
          </p>
          <p>
            En l'absence de toute disposition impérative contraire ou en présence d'un choix dans la
            détermination de la loi applicable, la loi française sera applicable.
          </p>
          <p>
            En cas de litige relatif à l'interprétation ou à l'exécution des présentes Mentions
            Légales, les tribunaux de Lyon sont seuls compétents, sauf disposition légale impérative
            contraire.
          </p>
          <p>
            L'ensemble de ce site relève de la législation française et internationale sur les
            droits d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont
            réservés.
          </p>
          <p>
            La reproduction de tout ou partie de ce site sur quelque support que ce soit est
            formellement interdite sauf autorisation expresse et préalable du Directeur de la
            publication.
          </p>
          <p>
            Les marques des sociétés <strong>Webcastor</strong>, <strong>Streamfizz</strong>, et ses
            partenaires, ainsi que les logos figurant sur le site sont des marques (semi-figuratives
            ou non) déposées.
          </p>
          <p>
            Toute reproduction totale ou partielle de ces marques ainsi que toute représentation
            totale ou partielle de ces marques et/ou logos, effectuées à partir des éléments du site
            sans l'autorisation expresse de la société Streamfizz sont prohibées au sens de
            l'article L 713-2 du Code de la propriété intellectuelle.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 pb-4">
            Article 6. Contact
          </h2>
          <p>
            Pour tout signalement de contenus ou d'activités illicites, l'Utilisateur peut contacter
            l'Éditeur à l'adresse suivante : contact@streamfizz.fr, ou par courrier recommandé avec
            accusé de réception adressé à l'Éditeur aux coordonnées précisées dans les présentes
            mentions légales.
          </p>
        </section>
      </div>
    </Container>
    </>
  )
}
