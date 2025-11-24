import Container from '../../../components/Container'
import Title from '../../../components/Title'
import { getLegalPageSchema } from '@/lib/structured-data'
import { generateLegalMetadata } from '@/lib/metadata'
import { PageStructuredData } from '@/components/SEO/StructuredData'

// Metadata for privacy policy page
export const metadata = generateLegalMetadata({
  title: 'Politique de confidentialité - StreamFizz | Protection des données',
  description: 'Politique de confidentialité de StreamFizz. Découvrez comment nous protégeons vos données personnelles conformément au RGPD.',
  path: '/legal/politique-de-confidentialite',
})

export default function PolitiqueConfidentialitePage() {
  // Generate structured data
  const legalSchema = getLegalPageSchema(
    'Politique de confidentialité - StreamFizz',
    'Politique de confidentialité de StreamFizz. Découvrez comment nous protégeons vos données personnelles conformément au RGPD.',
    'politique-de-confidentialite'
  )

  return (
    <>
      <PageStructuredData 
        schema={legalSchema}
        id="privacy-structured-data"
      />
      
      <Container>
      <div className="text-justify leading-relaxed ">
        <Title level={1} text=" Politique de confidentialité" />
        <p>
          <strong>Version en date du 28 avril 2025</strong>
        </p>

        <p>Streamfizz accorde une grande importance à la protection des données personnelles.</p>

        <p>
          Cette charte s’applique à tous les services proposés par Streamfizz (“Nous”). Tout produit
          ou service proposé par Streamfizz peut être éventuellement complété par des règles
          spécifiques.
        </p>

        <p>
          Ce contrat peut être modifié à tout moment pour notamment répondre aux évolutions légales,
          réglementaires et techniques. Nous notifierons le Client par courriel et dans le cas de
          modifications majeures, une demande d’acceptation sur la plateforme sera faite avant toute
          nouvelle poursuite d’utilisation. Toute utilisation ultérieure de Streamfizz par le client
          vaudra acceptation de l’intégralité desdites modifications. Il appartient au client de
          régulièrement lire, comprendre et accepter les versions les plus récentes publiées sur le
          site internet de Streamfizz.
        </p>

        <p>
          Par le biais de cette charte, nous souhaitons informer nos clients et prospects (“Vous”)
          des moyens mis en œuvre et des finalités poursuivies dans le cadre de la collecte de vos
          données personnelles, conformément à la réglementation en vigueur, lorsque nous agissons
          en qualité de Responsable de traitement. C’est notamment le cas, lorsque Nous traitons les
          coordonnées de personne physique d’un interlocuteur de votre entreprise, lorsque Vous nous
          contactez à des fins de support ou d’assistance ou lorsque Vous naviguez sur nos Sites
          internet ou encore lorsque Vous utilisez nos formulaires pour nous contacter.
        </p>

        <p>
          Lorsque nous traitons des données personnelles pour votre compte et sur vos instructions,
          nous agissons en qualité de sous-traitant. C’est notamment le cas lorsque nous traitons
          des destinataires lors de vos partages de vidéos ou playlists. Cette relation est régie
          par un accord, complétant les conditions générales, conformément à l’article 28.3 du GDPR.
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          Article 1. Quelques définitions
        </h2>
        <p className="mt-6">
          <strong>1.1. Donnée Personnelle</strong>
        </p>
        <p>
          Une Donnée Personnelle désigne toute information permettant d’identifier directement ou
          indirectement une personne physique, que Streamfizz traite en qualité de Responsable de
          Traitement.
        </p>

        <p className="mt-6">
          <strong>1.2. Responsable de Traitement</strong>
        </p>
        <p>
          Désigne Streamfizz. Le Responsable de Traitement désigne toute personne qui détermine les
          finalités et les moyens du traitement.
        </p>

        <p className="mt-6">
          <strong>1.3. Sous-traitant</strong>
        </p>
        <p>
          Le Sous-traitant désigne toute personne qui traite les Données Personnelles pour le compte
          d’un Responsable de Traitement et sur instruction de celui-ci. Le Sous-traitant doit
          pouvoir présenter les garanties suffisantes quant à la mise en œuvre de mesures techniques
          et organisationnelles pour justifier de la protection des Données Personnelles.
        </p>

        <p className="mt-6">
          <strong>1.4. Traitement</strong>
        </p>
        <p>
          Un Traitement désigne toute opération (ou ensemble) portant sur des Données Personnelles,
          par n’importe quel procédé et notamment la collecte, l’enregistrement, l’organisation, la
          conservation, l’adaptation ou la modification, l’extraction, la consultation,
          l’utilisation, la communication par transmission, diffusion ou toute autre forme de mise à
          disposition, le rapprochement ou l’interconnexion, ainsi que le verrouillage, l’effacement
          ou la destruction.
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          Article 2. Mesures pour la protection de vos Données Personnelles
        </h2>
        <p className="mt-6">
          <strong>2.1. Identité du Responsable de Traitement</strong>
        </p>
        <p>
          Le Responsable de Traitement est :<br />
          Streamfizz, SAS, SIRET 93847606600015, dont le siège social est situé 56 AVENUE HENRI
          GINOUX, 92120, MONTROUGE, France.
        </p>

        <p className="mt-6">
          <strong>2.2. Base légale des Traitements</strong>
        </p>
        <ul>
          <li>L’exécution de nos relations contractuelles</li>
          <li>Notre intérêt légitime</li>
          <li>Votre consentement</li>
          <li>Respect des obligations légales</li>
        </ul>

        <p className="mt-6">
          <strong>2.3. Finalité</strong>
        </p>
        <ul>
          <li>Création et gestion de compte</li>
          <li>Traitement des commandes et paiements</li>
          <li>Support et relation client</li>
          <li>Évaluation et amélioration des services</li>
          <li>Communication marketing</li>
          <li>Gestion des droits utilisateurs</li>
          <li>Respect légal et règlementaire</li>
        </ul>

        <p className="mt-6">
          <strong>2.4. Type de Données Personnelles</strong>
        </p>
        <ul>
          <li>Coordonnées et informations d'identité</li>
          <li>Historique d’utilisation et transactions</li>
          <li>Informations de paiement</li>
          <li>Cookies et données techniques</li>
          <li>Logs d’activité et échanges</li>
        </ul>

        <p>
          Les données sont conservées aussi longtemps que nécessaire pour atteindre les finalités
          prévues et dans le respect des durées légales (jusqu’à 3 ans pour les données de
          prospection).
        </p>

        <p>
          <strong>Confidentialité</strong> : les Données Personnelles ne sont ni vendues, ni louées.
          Leur divulgation est limitée à ce qui est strictement nécessaire.
        </p>

        <p>
          <strong>Sécurité</strong> : mesures techniques et organisationnelles mises en œuvre pour
          assurer la protection des données.
        </p>

        <p>
          <strong>Droits</strong> : Vous disposez des droits d’accès, rectification, suppression,
          limitation, portabilité, opposition, retrait du consentement, et directives post-mortem,
          en adressant une demande à :{' '}
          <a href="mailto:privacy@streamfizz.fr">privacy@streamfizz.fr</a>
        </p>

        <p>
          Réclamation possible auprès de la CNIL :{' '}
          <a href="https://www.cnil.fr/fr/plaintes/">https://www.cnil.fr/fr/plaintes/</a>
        </p>
      </div>
    </Container>
    </>
  )
}
