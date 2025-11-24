import Container from '../../../components/Container'
import Title from '../../../components/Title'
import { getLegalPageSchema } from '@/lib/structured-data'
import { generateLegalMetadata } from '@/lib/metadata'
import { PageStructuredData } from '@/components/SEO/StructuredData'

// Metadata for CGU page
export const metadata = generateLegalMetadata({
  title: 'Conditions Générales d\'Utilisation - StreamFizz | CGU',
  description: 'Conditions générales d\'utilisation de StreamFizz. Consultez nos termes et conditions pour l\'utilisation de notre plateforme de streaming vidéo.',
  path: '/legal/cgu',
})

export default function CguPage() {
  // Generate structured data
  const legalSchema = getLegalPageSchema(
    'Conditions Générales d\'Utilisation - StreamFizz',
    'Conditions générales d\'utilisation de StreamFizz. Consultez nos termes et conditions pour l\'utilisation de notre plateforme de streaming vidéo.',
    'cgu'
  )

  return (
    <>
      <PageStructuredData 
        schema={legalSchema}
        id="cgu-structured-data"
      />
      
      <Container>
      <div className="text-justify leading-relaxed ">
        <Title level={1} text=" Conditions Générales d'Utilisations" />

        <p>
          <strong>Version en date du 28 avril 2025</strong>
        </p>

        <p>
          Streamfizz SAS, éditeur de la plateforme Streamfizz est une entreprise citoyenne et
          engagée. Nous ferons les meilleurs efforts pour que ce pavé juridique n'ait jamais la
          moindre utilité. Nous sommes convaincus que l'intérêt de notre Client est aussi notre
          intérêt et que les problèmes se règlent par des discussions constructives de bonne foi et
          non devant un tribunal.
        </p>

        <p>
          Toutefois cette volonté profonde de bienveillance et de coopération avec le Client n'est
          qu'une philosophie. Les présentes Conditions Générales d'Utilisations régissent les
          conditions d'accès et d'utilisation de Streamfizz. Le précédent alinéa n'altère donc en
          rien les présentes Conditions Générales d'Utilisations.
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          Article 1. Champ d'application, définitions et interprétations
        </h2>
        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          1.1. Définitions
        </h3>
        <p>
          Les Parties conviennent et acceptent que les termes suivants utilisés avec une majuscule,
          au singulier et/ou au pluriel, aient, dans le cadre des présentes Conditions Générales
          d'Utilisation, la signification définie ci-après, dont voici les termes au long du
          document :
        </p>

        <ul>
          <li>
            <strong>Streamfizz, Services, La plateforme :</strong> plateforme numérique de type Site
            Web permettant l'accès au Service en SaaS (Software as a Service) ainsi que son
            utilisation et éditée par la société <strong>Streamfizz SAS</strong>, SIRET
            93847606600015, dont le siège social est situé 56 AVENUE HENRI GINOUX, 92120 MONTROUGE
            France.
          </li>
          <li>
            <strong>CGU, Contrat, Abonnement :</strong> le présent document et la Politique de
            confidentialité pour l'abonnement, la souscription ou test pendant la période d'essai
            afin de bénéficier des services Streamfizz.
          </li>
          <li>
            <strong>Client, vous, votre :</strong> la personne physique ou morale, acceptant les
            conditions stipulées au CGU, que ce soit directement ou par l'intermédiaire d'un tiers
            dûment mandaté à cet effet.
          </li>
          <li>
            <strong>Données Client :</strong> toutes les données et informations implémentées par le
            Client dans Streamfizz ou collectées et traitées au moyen de Streamfizz pour le compte
            du Client.
          </li>
          <li>
            <strong>Responsable du traitement, Traitement, Données à caractère personnel</strong> et
            Catégories particulières de données à caractère personnel s'entendent au sens de la
            Directive 95/46/CE du Parlement européen.
          </li>
          <li>
            <strong>Visiteur / internaute :</strong> désigne toute personne, internaute, naviguant
            sur le site vitrine de Streamfizz sans création d'un compte associé.
          </li>
          <li>
            <strong>Lois applicables :</strong> désigne toutes les lois, codes, règles, règlements,
            arrêtés municipaux, préfectoraux, régionaux ou ministériels, jugements, ordonnances,
            décisions judiciaires, jurisprudences, arbitrages administratifs ou judiciaires, ainsi
            que de toutes les dispositions de ce qui précède, y compris les principes généraux de
            droit, droit civil et d'équité liant ou affectant la personne visée dans le contexte
            dans lequel le terme est utilisé.
          </li>
          <li>
            <strong>Contenu :</strong> désigne tout contenu, données et autres éléments, y compris,
            sans limitation, vidéos, musique, sons, images, flux en direct, documentation, rapports,
            éléments, fichiers, textes, logos, photos, illustrations, graphiques, publicités,
            œuvres, œuvres d'auteur ou toute autre propriété intellectuelle contenue dans ces
            documents.
          </li>
          <li>
            <strong>Version d'essai :</strong> désigne un compte temporairement mis à disposition au
            Client qui permet à un Client potentiel d'utiliser les services Streamfizz à titre
            d'essai pour une période limitée, un volume de données limité et gratuitement, sans
            frais.
          </li>
        </ul>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">1.2. Exécution</h3>
        <p>
          Les présentes Conditions Générales d'Utilisation (ci-après les "CGU") régissent nos
          rapports avec nos Clients, applicable durant l'utilisation de Streamfizz, et jusqu'à
          désactivation du compte. Le simple fait de s'inscrire ou d'utiliser Streamfizz devra être
          considéré comme valant d'acceptation par le Client de l'intégralité des termes et
          conditions des présentes CGU. Si le client n'accepte pas l'intégralité de ces conditions,
          il est vivement recommandé de cesser toute utilisation de Streamfizz.
        </p>

        <p>
          En naviguant sur la plateforme, le Visiteur reconnaît avoir pris connaissance et accepté
          l'intégralité des présentes CGU et notre politique de confidentialité.
        </p>

        <p>
          Ce contrat peut être modifié à tout moment pour notamment répondre aux évolutions légales,
          réglementaires et techniques. Nous notifierons le Client par courriel et dans le cas de
          modifications majeures, une demande d'acceptation sur la plateforme sera faite avant toute
          nouvelle poursuite d'utilisation. Toute utilisation ultérieure de Streamfizz par le client
          vaudra acceptation de l'intégralité desdites modifications. Il appartient au client de
          régulièrement lire, comprendre et accepter les versions les plus récentes publiées sur le
          site internet de Streamfizz.
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          Article 2. Description du service Streamfizz
        </h2>
        <p>
          Streamfizz désigne la mise à disposition du Client d'un logiciel hébergé à distance et
          rendu disponible par Internet ainsi que le Support technique qui y est associé (SaaS).
          Streamfizz vise à permettre de stocker, encoder et diffuser des ressources audiovisuelles,
          sans garantir toutefois l'adéquation entre Streamfizz et les besoins par nature
          spécifiques du Client, qui peuvent dépendre de son statut ou de sa situation particulière.
          Le Support technique, plus amplement détaillé dans l'article 10 du présent contrat,
          désigne l'assistance relative à l'utilisation de Streamfizz. Le support se limite donc à
          une assistance technique pour l'utilisation des fonctionnalités de Streamfizz par le
          Client. Streamfizz SAS étant expert dans le domaine audiovisuel et streaming live, elle
          peut délivrer des préconisations et des services complémentaires moyennant facturation du
          projet en fonction de la nature du projet soumis à acceptation préalable du Client. Toute
          demande d'adaptation spécifique ou service complémentaire fera l'objet d'un devis
          précisant les conditions particulières de l'exécution de la prestation, auquel sont
          jointes les conditions générales. La commande deviendra ferme et définitive dès lors que
          le concepteur recevra le devis daté, signé par le Client et le cas échéant, accompagné du
          montant de l'acompte prévu aux conditions particulières.
        </p>

        <p>
          Toute autre demande non prévue expressément dans les conditions particulières sera soumise
          à étude et pourra faire l'objet d'un coût supplémentaire.
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          Article 3. Inscription au service
        </h2>
        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          3.1. Conditions d'inscription à la plateforme Streamfizz
        </h3>
        <p>
          Les Services Streamfizz nécessitent d'être inscrit et d'obtenir un compte. Avant de
          pouvoir vous inscrire sur la plateforme, vous devez avoir lu et accepté les présentes CGU
          et la politique de confidentialité.
        </p>

        <p>
          Vous déclarez avoir la capacité d'accepter les présentes conditions générales
          d'utilisation, c'est-à-dire avoir plus de 18 ans et ne pas faire l'objet d'une mesure de
          protection juridique des majeurs (mise sous sauvegarde de justice, sous tutelle ou sous
          curatelle).
        </p>

        <p>
          Le Client est informé que son choix s'est porté sur la version de Streamfizz au jour de sa
          commande et que ce choix n'était en aucune manière déterminé par la délivrance ou l'ajout
          d'une fonctionnalité ou de caractéristiques futures, et ce quelles que soient les
          informations qu'il aurait pu recevoir de Streamfizz.
        </p>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          3.2. Création d'un compte
        </h3>
        <p>
          Vous pourrez créer un compte en remplissant manuellement, sur notre plateforme Streamfizz,
          les champs obligatoires figurant sur le formulaire d'inscription, à l'aide d'informations
          complètes et exactes. Pour enregistrer votre compte, il vous faudra soumettre à Streamfizz
          certaines informations à caractères personnels telles que votre nom, prénom, adresse email
          et la création d'un mot de passe. Vous recevrez par la suite un email de confirmation
          d'inscription vous invitant à vous reconnecter à la plateforme.
        </p>

        <p>
          Lorsque vous choisissez votre mot de passe, vous ne devez pas utiliser un mot de passe
          simple (par exemple : 123456). Streamfizz est soumis à des restrictions d'usage, sauf
          cadre juridique spécifique, il est interdit de communiquer un mot de passe Client.
          L'identifiant et le mot de passe seront strictement personnels et confidentiels et vous
          devrez les conserver et les utiliser de manière à préserver la stricte confidentialité. Le
          Client qui a perdu son mot de passe devra se connecter sur le site Streamfizz et suivre la
          procédure en cliquant sur le lien "mot de passe oublié".
        </p>

        <p>
          À l'occasion de la création de votre compte, et ce quelle que soit la méthode choisie pour
          ce faire, vous vous engagez à fournir des informations personnelles vraies, exactes,
          complètes et à les mettre à jour par l'intermédiaire de votre profil ou en avertissant
          Streamfizz SAS, afin d'en garantir la pertinence et l'exactitude tout au long de votre
          relation avec Streamfizz. Les informations que vous avez fournies pendant l'inscription
          peuvent être corrigées dans votre profil et en corrigeant les informations erronées.
        </p>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          3.3. Confidentialité et responsabilité du Client
        </h3>
        <p>
          Le Client est responsable de l'utilisation de Streamfizz et de toutes les actions
          réalisées au sein de la plateforme avec son identifiant et son mot de passe, sauf si
          l'utilisation de son compte a été faite après désinscription, ou après notification à
          Streamfizz d'une utilisation abusive de son compte.
        </p>

        <p>
          Dans le cadre de votre inscription, vous vous engagez à garder secret le mot de passe
          choisi lors de la création de votre compte et à ne le communiquer à personne. En cas de
          perte ou divulgation de votre mot de passe, vous vous engagez à en informer sans délai
          Streamfizz. Vous êtes seul responsable de l'utilisation faite de votre compte par un
          tiers, tant que vous n'avez pas expressément notifié Streamfizz de la perte, l'utilisation
          frauduleuse ou la divulgation de votre mot de passe à un tiers.
        </p>

        <p>
          Vous vous engagez à ne pas créer ou utiliser, sous votre propre identité ou celle d'un
          tiers, d'autres comptes que celui initialement créé, sans accord préalable de Streamfizz.
          Vous ne pouvez pas autoriser des tiers à utiliser votre compte. Pour des questions de
          sécurité et confidentialité, vous ne pouvez pas céder ou, quoi qu'il en soit, transférer
          votre compte à toute autre personne ou entité sans information et accord préalable de
          Streamfizz.
        </p>

        <p>
          Vous acceptez de respecter les lois applicables lorsque vous utilisez les services, et
          vous ne pouvez utiliser les services qu'à des fins légales. Le contenu présent sur
          Streamfizz et dans votre compte doit être utilisé en respectant les droits et propriétés
          intellectuelles des parties prenantes.
        </p>

        <p>
          Le Client sera le seul autorisé à accéder à la plateforme et au service de Streamfizz à
          l'aide de son identifiant et mot de passe. Toute utilisation de Streamfizz au moyen de ses
          identifiants et mot de passe est réputée avoir été faire par le Client lui-même. En cas
          d'utilisation par un tiers de ses identifiant et mot de passe, le Client devra en avertir
          immédiatement Streamfizz en lui adressant un email à l'adresse suivante :{' '}
          <a href="mailto:contact@streamfizz.com">contact@streamfizz.com</a>
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          Article 4. Utilisation de Streamfizz
        </h2>
        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          4.1. Disposition générales
        </h3>
        <p>
          Le Client s'engage à utiliser Streamfizz de bonne foi et aux fins pour lesquels il est
          commercialisé, dans le respect du Contrat et du droit applicable. En conséquence,
          Streamfizz se réserve le droit de résilier le Contrat, sans que cela ne puisse engager sa
          responsabilité, dès que lors que le Client utilise Streamfizz à des fins concurrentielles.
          Le Client s'interdit (a) de mettre Streamfizz à disposition de tout tiers autre que ceux
          autorisés au titre du Contrat, (b) de distribuer Streamfizz par une concession, un bail ou
          une sous-licence sans l'accord écrit préalable de Streamfizz SAS, (c) de permettre
          directement ou indirectement, l'accès à ou l'utilisation de Streamfizz en contournant
          protection logique ou physique, (d) de copier ou de reproduire tout ou partie de
          Streamfizz, (e) d'accéder à Streamfizz en vue d'élaborer un produit ou service concurrent,
          (f) ou tout autre violation par le Client de l'article 8 du présent Contrat.
        </p>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          4.2. Services d'abonnement
        </h3>
        <p>
          Sauf disposition contraire dans une commande client, les services sont achetés par les
          clients sous forme d'abonnements. Sous réserve de votre conformité au présent Contrat,
          Streamfizz SAS vous accorde un droit mondial, non exclusif et non transférable, d'accéder
          à la plateforme et aux services et de les utiliser pendant la durée et dans les conditions
          prévues par l'offre sélectionnée.
        </p>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          4.3. Équipement nécessaire pour utiliser les services
        </h3>
        <p>
          L'accès à Streamfizz est subordonné à la disponibilité du réseau de l'opérateur mobile ou
          du fournisseur d'accès internet du Client. Streamfizz SAS ne saurait en aucune manière
          être tenue pour responsable de la disponibilité des services de l'opérateur ou du
          fournisseur d'accès du Client, y compris en cas de perte, dommage, erreur ou échec de
          transmission de données. Le Client demeure responsable de la compatibilité de Streamfizz
          avec son appareil mobile, son navigateur web, son réseau et ses connexions internet et/ou
          la configuration de ses systèmes informatiques et de tous frais y afférents.
        </p>

        <p>
          Le Client demeure responsable de l'exactitude, la qualité et la légalité des Données
          Client, des médias et des moyens par lesquels il les obtient. Il fait ses meilleurs
          efforts pour prévenir toute utilisation non autorisée de Streamfizz, et s'engage à
          informer Streamfizz SAS dans les plus brefs délais de toute utilisation précitée.
        </p>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          4.4. Prise en main de Streamfizz par le Client
        </h3>
        <p>
          Les équipes de Streamfizz assistent le Client dans la prise en main et la gestion de la
          plateforme. Cet accompagnement doit permettre au Client d'utiliser pleinement les
          fonctionnalités de Streamfizz, à savoir, ajouter et organiser des ressources, effectuer
          des modifications de textes, publier et partager des ressources, etc. Streamfizz SAS n'a
          aucune obligation de contrôle sur les publications réalisées sur et avec la plateforme
          Streamfizz par le Client ou par toute autre personne ne travaillant pas pour Streamfizz
          SAS.
        </p>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          4.5. Plafonds d'utilisation
        </h3>
        <p>
          Les services que nous fournissons sont soumis à des limites et restrictions d'utilisation.
          Chaque abonnement Client définit des limites d'utilisation spécifiques qui peuvent
          inclure, sans limitation, le nombre d'utilisateurs autorisés, le nombre de vidéos
          autorisées, le nombre maximal de destinataires et les limites de temps de diffusion en
          direct et/ou en différé. Vous acceptez d'utiliser les services dans les limites
          d'utilisation définies dans le cadre l'offre souscrite lors de la création du compte et
          lors de toutes nouvelles mises à jour de l'abonnement. Vous êtes seul responsable de
          veiller à ce que vous ne dépassiez pas les limites et restrictions. Des frais
          supplémentaires s'appliqueront si vous dépassez les limites d'utilisation au taux indiqué
          dans le bon de commande applicable ou, si non inclus, aux frais d'utilisation en vigueur à
          l'époque sur Streamfizz.
        </p>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          4.6. Frais applicables aux dépassements des plafonds d'utilisation
        </h3>
        <p>
          En cas de dépassement des limites d'utilisations prévues dans chaque abonnement Client,
          les frais supplémentaires suivants pourront être appliqués afin de couvrir les excédants
          d'utilisations effectuées par le Client :
        </p>

        <ul>
          <li>Extension de stockage : 10€ HT/ tranche de 100Go supplémentaires</li>
          <li>Extension de bande passante : 70€ HT/ tranche de 500Go supplémentaires</li>
          <li>
            Extension de viewers (spectateurs) : 5€ HT/ tranche de 10 viewers (spectateurs)
            supplémentaires
          </li>
          <li>
            Extension de durée (Live ou diffusion en direct) : 60€ HT/ tranche de 30 minutes
            supplémentaires
          </li>
        </ul>

        <p>
          Ces frais supplémentaires seront facturables sous forme de rattrapage sur la facture du
          mois suivant, dans le cadre d'un abonnement mensualisé, ou sous forme d'une facture de
          régulation à la fin de période de dépassement, et cela sur chaque mois concerné, dans le
          cadre d'un abonnement annuel.
        </p>

        <p>
          Ces frais supplémentaires n'ont pas vocation à être fixes et devenir la règle et ne
          servent qu'à couvrir un dépassement d'utilisation exceptionnelle ou à passer sur une offre
          d'abonnement plus adaptée à l'utilisation réelle du Client.
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          Article 5. Responsabilité et obligations du Client et de Streamfizz
        </h2>
        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          5.1. Responsabilité et obligations du Client
        </h3>
        <ul>
          <li>
            collaborer avec Streamfizz en vue de l'ouverture du compte et la mise à disposition de
            nos Services, en fournissant tous les documents ou informations qui pourraient être
            demandés ;
          </li>
          <li>
            répondre dans un délai suffisamment court aux demandes de documents ou informations
            complémentaires. En cas contraire, tout retards ou conséquences afférentes ne saurait
            être imputable à Streamfizz ;
          </li>
          <li>
            être titulaire d'un droit de propriété, ou d'un droit d'utilisation, ou de licence, des
            documents utilisés sur la plateforme audiovisuelle. Être titulaire d'un droit de
            propriété ou d'utilisation des œuvres artistiques, de l'esprit, des graphiques, logos,
            musiques, photographies, images, fichiers audio et audiovisuels, ainsi que tous les
            droits de propriété incorporelles ou intellectuelles pouvant porter sur les données ;
          </li>
          <li>
            effectuer toutes les déclarations auprès de la CNIL lorsque cela s'avère nécessaire.
          </li>
        </ul>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          5.2. Responsabilité et obligations de Streamfizz
        </h3>
        <ul>
          <li>
            mettre en ligne et fournir les Services de la plateforme Streamfizz, conformément au
            service générique ;
          </li>
          <li>
            s'assurer de l'utilisabilité et l'apparence harmonieuse de la plateforme audiovisuelle
            de manière à ce qu'elle ait une présentation adéquate dans les navigateurs web actuels,
            notamment en matière d'accessibilité ;
          </li>
          <li>
            effectuer des tests des Services et de leurs évolutions avant la mise en ligne de la
            plateforme ;
          </li>
          <li>assurer la maintenance de la plateforme audiovisuelle aux conditions prévues ;</li>
          <li>apporter tout le soin nécessaire à la mise en œuvre d'un service de qualité ;</li>
          <li>
            informer régulièrement le Client sur l'avancée de la réalisation du contrat par mail ou
            par le biais de la plateforme sous forme de notifications ou messages lors de la
            connexion ;
          </li>
          <li>
            préserver la confidentialité concernant toutes les informations et documents qu'il
            pourrait détenir du fait de l'exécution du présent contrat ;
          </li>
          <li>
            fournir un environnement technique assurant au mieux la conservation des médias déposés
            par le client sur la plateforme Streamfizz. Cette responsabilité ne saurait couvrir les
            risques de dépôts de fichiers uniques dépourvus de copie. Le client devra s'assurer de
            ce point.
          </li>
        </ul>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          5.3. Confidentialité et sécurité
        </h3>
        <p>
          Tout traitement par Streamfizz de données à caractère personnel du Client pour son compte
          à l'occasion du Contrat et décrites dans ces CGU sera effectué conformément à la
          réglementation en vigueur et à sa Politique de confidentialité disponible{' '}
          <a href="https://www.streamfizz.com/autres/confidentialite/">sur cette page</a>.
        </p>

        <p>
          En particulier, Streamfizz maintiendra des mesures de sécurité techniques et
          organisationnelles et des dispositifs de protection suffisants pour se conformer à minima
          aux obligations réglementaires imposées aux Responsables du traitement. Streamfizz n'agira
          que selon les instructions du Client (Responsable du traitement), et ne les traitera que
          (a) pour les seules finalités d'exécuter les obligations qui lui incombent en exécution du
          Contrat et de prévenir ou résoudre des problèmes techniques ou de service, (b) pour se
          conformer aux obligations légales, ou (c) après autorisation expresse par écrit du Client.
          Streamfizz pourra fournir au Client toute preuve de sa conformité, dans la limite du
          raisonnable.
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          Article 6. Conditions financières
        </h2>
        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">6.1. Tarifs</h3>
        <p>
          Le Client s'engage à payer l'ensemble des montants exigés par son Contrat au moment de la
          sélection de son abonnement. Tous les frais ne sont ni annulables ni remboursables, sauf
          indication contraire expresse dans le présent Contrat, et sont basés sur les services
          achetés et non sur leur utilisation réelle. Pour éviter tout doute, vous ne pourrez
          prétendre à aucun remboursement en cas de services non utilisés. Sauf convention contraire
          entre vous et nous, les paiements seront effectués par virement bancaire, prélèvement SEPA
          ou carte de crédit. Sauf convention contraire tous les paiements seront traités aux dates
          anniversaires du contrat (mensuel ou annuel).
        </p>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          6.2. Période d'Essai Gratuite
        </h3>
        <p>
          L'Essai Gratuit désigne une période d'accès gratuite, limitée dans le temps et dans le
          volume de données, destinée à permettre au Client d'évaluer l'adéquation de Streamfizz à
          ses besoins. L'Essai Gratuit dure 14 jours, sauf stipulation écrite contraire émanant de
          Streamfizz SAS. À l'expiration de la période d'Essai Gratuit, le compte sera suspendu et
          supprimé automatiquement et définitivement au bout de 7 jours sauf si le Client à
          sélectionné et souscrit à une offre sur Streamfizz. Dans ce cas, le montant de la
          redevance sera automatiquement facturé conformément au tarif en vigueur chez Streamfizz,
          sauf s'il en a été conclu différemment entre les parties.
        </p>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          6.3. Conditions de paiement
        </h3>
        <p>
          Le Client fournira à Streamfizz SAS des informations de facturation et de paiement
          complètes et à jour afin de permettre la facturation et le paiement des sommes dues par le
          Client en exécution du Contrat. Conformément à l'article L. 132-2 du Code monétaire et
          financier, l'engagement de payer donné par carte est irrévocable. En communiquant ses
          informations bancaires, l'Utilisateur autorise Streamfizz à débiter sa carte ou son compte
          bancaire du montant relatif aux Services et options. Sauf disposition spécifique, les
          redevances sont payables à terme à échoir. Tous les frais s'entendent hors taxes,
          redevances ou droits imposés par les autorités fiscales, et le Client est responsable du
          paiement de la totalité de ces taxes, redevances ou droits (à l'exclusion des taxes basées
          sur les revenus de Streamfizz), même si ces montants ne figurent pas sur une commande
          client. Tous les frais sont payables en euro ou dans toute autre monnaie convenue par
          écrit par les parties, sans compensation ni déduction. Il incombe au Client d'informer
          Streamfizz SAS de toute modification relative à aux informations le concernant. Les
          factures sont disponibles et téléchargeables sur le compte administrateur du Client.
        </p>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          6.4. Règlement et moyens de paiement
        </h3>
        <p>
          Sauf disposition différente en accord avec Streamfizz SAS, le règlement s'effectue
          directement en ligne sur le site par la communication du numéro de carte de crédit (mode
          sécurisé SSL) ou tout autre moyen de paiement possible au jour de la commande. Le paiement
          est entièrement sécurisé sur notre site grâce au système de paiement en ligne de notre
          partenaire Stripe, solution de paiement certifiée PCI/DSS de niveau 1 (le niveau de
          sécurité le plus élevé pour payer en ligne). Les données cartes/bancaires que vous entrez
          sur notre site sont cryptées et ne circulent jamais en clair sur Internet. De plus, elles
          ne sont traitées que par Stripe et ne sont jamais en notre possession.
        </p>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          6.5. Frais en souffrance
        </h3>
        <p>
          En cas de retard ou rejet de paiement d'une facture de la part des organismes accrédités,
          Streamfizz SAS informera le Client par courriel par courriel sous 72 heures. Si le retard
          de paiement d'une facture excède dix (10) jours, Streamfizz SAS se réserve le droit, si
          bon lui semble : (a) d'exiger le paiement immédiat de toute somme qui pourrait être
          facturée, (b) de facturer le Client d'un montant de 40 euros par facture pour frais de
          recouvrement et (c) de suspendre tout accès à Streamfizz jusqu'au parfait paiement des ces
          montants. Ces droits pourront éventuellement être suspendus si lesdits montants font
          l'objet d'une contestation sérieuse et élevée de bonne foi de la part du Client et que ce
          dernier collabore activement pour résoudre le différend l'opposant à Streamfizz SAS.
        </p>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          6.6. Droits de suspension
        </h3>
        <p>
          Nous nous réservons le droit de suspendre immédiatement les services de Streamfizz si (a)
          les informations de facturation ou de contact fournies par le Client sont fausses ou
          frauduleuses, (b) si le Client omet de faire tout paiement dû dans les 10 jours ouvrables
          après avis de non-paiement ou d'échec de paiement ou (c) une violation par le Client de
          l'article 4. Toute suspension des services par nous en vertu du présent article ne vous
          libère pas de vos obligations de paiement en vertu du présent Contrat. Nous ne serons pas
          responsables vis-à-vis du Client ou d'un tiers pour toute suspension des services.
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          Article 7. Propriété intellectuelle, droits exclusifs et licences Streamfizz
        </h2>
        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          7.1. Contenu Streamfizz
        </h3>
        <p>
          Les services contiennent du contenu, de la documentation et des logiciels appartenant à
          Streamfizz SAS, Streamfizz, à ses fournisseurs ou à ses concédants de licence (le "Contenu
          de Streamfizz"). Streamfizz SAS, ses fournisseurs et ses concédants de licence possèdent
          et conservent tous les droits, y compris tous les droits de propriété intellectuelle,
          relatifs aux services et au Contenu de Streamfizz.
        </p>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          7.2. Propriété et licence
        </h3>
        <p>
          Les services et le Contenu de Streamfizz sont sous licence et ne vous sont pas vendus. Le
          Contrat s'entend sans aucune cession de propriété ou de titularité de droits de propriété
          intellectuelle, quels qu'ils soient. Streamfizz SAS se réserve tous les droits et titres
          de propriétés relatives au périmètre fonctionnel, UX, technique ou encore code source de
          la plateforme Streamfizz. Aucun droit, autre que ceux expressément accordés aux présentes,
          ne saurait être concédé au Client par le Contrat. Streamfizz SAS concède au Client un
          droit d'utilisation de Streamfizz. Nous vous accordons une licence limitée, révocable et
          non sous-licenciée vous permettant de reproduire et d'afficher le Contenu de Streamfizz en
          relation avec l'utilisation des services pendant la durée de votre abonnement. Sauf
          disposition contraire dans le présent Contrat et dans la documentation, aucun service ni
          aucune partie du service ne peuvent être reproduits, dupliqués, copiés, vendus, revendus,
          visités ou autrement exploités à des fins commerciales sans notre consentement écrit. Vous
          ne pouvez pas utiliser les services que dans la mesure permise par la loi applicable. La
          licence accordée par Streamfizz SAS peut être résiliée immédiatement et sans préavis si
          vous enfreignez le présent Contrat. Cette licence s'entend pour le territoire du monde
          entier et pour la durée du Contrat.
        </p>

        <p>
          Le Client concède à Streamfizz SAS un droit d'hébergement, de reproduction et de
          représentation des Données Client uniquement dans le cadre du service souscrit par le
          Client. Ce droit est accordé pour le monde entier et pour la durée du Contrat, augmentée
          du temps des prescriptions légales en vigueur.
        </p>

        <p>
          Ce droit est accordé aux seules fins d'exécution de leurs obligations au titre du Contrat.
          Streamfizz SAS n'acquiert en vertu du Contrat aucun droit de propriété relatif aux Données
          Client. Chaque partie reste propriétaire des droits relatifs à ses créations. Le Client
          concède à Streamfizz SAS, pour la durée de protection des droits, pour le territoire du
          monde entier, le droit d'utiliser et d'incorporer dans Streamfizz toute suggestion,
          demande d'amélioration, recommandation, correction ou commentaire faits par le Client ou
          les utilisateurs et ayant pour objet Streamfizz. Ce droit est irrévocable et s'entend sans
          aucune contrepartie financière, ce que le Client accepte expressément.
        </p>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          7.3. Restrictions
        </h3>
        <p>
          Le Client ne doit pas (et ne permet pas aux autres personnes), (a) d'accorder une licence,
          sous-licencier, vendre, transférer, distribuer ou partager les services ou le Contenu de
          Streamfizz ou les rendre disponibles à des tiers, (b) créer des œuvres dérivées basées
          sur, s'appuyant sur ou modifiant de quelque manière que ce soit les services ou le Contenu
          de Streamfizz sans l'autorisation écrite expresse de Streamfizz SAS, (c) désassembler,
          décomposer ou décompiler les services ou le logiciel ou tenter de toute autre manière de
          découvrir le code source, le code objet ou structure sous-jacente, des idées ou des
          algorithmes des services ou tout logiciel, toute documentation ou donnée liée aux services
          ou fournie avec ceux-ci, (d) accéder aux services ou au Contenu de Streamfizz afin de
          développer un produit ou un service concurrent, (e) utiliser les services ou le Contenu de
          Streamfizz pour fournir un service à des tiers qui n'est pas envisagé par le présent
          Contrat ou la documentation, (f) utiliser la plateforme Streamfizz pour exploiter
          davantage d'applications ou des types d'applications différents de ceux autorisés dans le
          cadre du bon de commande applicable, (g) supprimer ou modifier un avis de droit d'auteur
          ou d'autres droits de propriété sur ou dans les services ou le Contenu de Streamfizz,
          (h)enfreindre toute loi applicable, (i) désactiver, pirater ou autrement interférer avec
          tout mécanisme de sécurité, de signature numérique, de gestion des droits numériques, de
          vérification ou d'authentification mis en œuvre dans ou par les services, (j) inclure,
          envoyer, stocker ou exécuter intentionnellement des virus informatiques, des vers, des
          adwares, des chevaux de Troie, des logiciels espions, ou tout autre code informatique,
          fichiers, scripts, agents ou programmes nuisibles parmi les services, (k) provoquer
          intentionnellement un dysfonctionnement d'un ordinateur, quelle que soit la durée pendant
          laquelle le dysfonctionnement persiste, ou (l) modifier, désactiver ou effacer toute
          donnée informatique, programme informatique ou logiciel informatique sans autorisation.
        </p>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          7.4. Rétroaction (ou Feedback)
        </h3>
        <p>
          Le client accorde à Streamfizz SAS une autorisation mondiale, perpétuelle, irrévocable et
          sans redevances d'utiliser et d'intégrer dans les services Streamfizz toute suggestion,
          demande d'amélioration, recommandation, correction ou tout autre commentaire fourni par le
          client.
        </p>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          7.5. Modifications de Streamfizz
        </h3>
        <p>
          Nous sommes en droit de modifier ou de mettre à jour les services Streamfizz de temps à
          autre afin de l'adapter techniquement, de modifier les directives de menu ou les
          présentations, ou de développer ou de limiter les fonctionnalités de manière à ne pas
          modifier sensiblement les services Streamfizz.
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          Article 8. Contenu Client et licence
        </h2>
        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          8.1. Contenu Client
        </h3>
        <p>
          En tant que titulaires d'un compte Streamfizz, vous et/ou vos utilisateurs pouvez
          soumettre et publier du contenu sur la plateforme Streamfizz ("Contenu client"). Le
          contenu du Client est le contenu que vous transférez ou téléversez sur les services
          Streamfizz. Streamfizz SAS et les services Streamfizz sont des conduits passifs du Contenu
          client. Vous êtes exclusivement responsable de l'ensemble des informations communiquées,
          de leur exploitation, de leur actualisation, ainsi que de toutes données publiées et des
          conséquences de la soumission et de la publication de votre contenu sur les services
          Streamfizz. Nous ne vérifierons pas l'exactitude, la qualité , le contenu ou la légalité
          du Contenu client. Nous pouvons, sans toutefois y être tenus, surveiller, afficher ou
          analyser tout Contenu client, notamment dans les conditions de l'article 8.8. des
          présentes CGU. Nous ne sommes pas responsables d'empêcher ou d'identifier les atteintes
          aux droits de propriété intellectuelle ou le non-respect des lois applicables. Streamfizz
          SAS ne sera aucunement responsable, directement ou indirectement, de quelque manière que
          ce soit des dommages ou pertes causés ou prétendument causés par ou en relation avec le
          Contenu du client.
        </p>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          8.2. Données clients
        </h3>
        <p>
          Les données du Client sont la propriété du Client et tous les droits non accordés à
          Streamfizz en vertu du présent Contrat restent acquis au Client. Le Client accorde à
          Streamfizz un droit mondial, limité, personnel, non sous-licenciable, non exclusif, non
          transférable, d'utiliser les données du Client pour la fourniture des services souscrits
          jusqu'à la fin de la durée, conformément aux conditions générales du présent Contrat. Le
          Client déclare et garantit à Streamfizz SAS que la collecte et l'utilisation par le Client
          des données du Client par le biais des services Streamfizz sont et continueront d'être
          conformes aux lois applicables.
        </p>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          8.3. Responsabilité d'obtention des consentements de Propriété Intellectuelle
        </h3>
        <p>
          Avant de transmettre un élément graphique, textuel, audio, ou vidéo sur Streamfizz pour la
          bonne réalisation du contrat, le Client doit s'assurer qu'il dispose de tous les droits de
          reproduction et d'utilisation de cet élément. Seule la responsabilité du Client est
          engagée à ce titre. Vous êtes responsable de l'obtention de tous les consentements,
          licences et dispenses nécessaires pour créer, enregistrer, soumettre, publier et utiliser
          le contenu du client en relation avec les services. Ceux-ci peuvent inclure, sans
          toutefois s'y limiter, des consentements, des licences et des renonciations de (a)
          détenteurs des droits d'auteurs, artistes, acteurs, directeurs, réalisateurs, producteurs,
          scénaristes ou toute autre personne figurant dans le contenu du Client, (b) les organismes
          de collecte de droits d'exécution publics (tels que la SACEM, SACD, ANGOA,…), et (c) les
          propriétaires des compositions musicales et des enregistrements sonores incorporés dans le
          Contenu client. En outre, vous êtes responsable du paiement de toutes les redevances,
          frais et autres montants applicables dus à toute personne en relation avec l'utilisation
          de tout Contenu client, y compris les paiements à des syndicats, des associations et des
          organismes de collecte de droits d'exécution.
        </p>

        <p>
          En conséquence, Streamfizz ne saurait être tenu pour responsable du contenu des
          informations transmises, diffusées ou collectées, de leur exploitation et de leur mise à
          jour, ainsi que de tous fichiers, et ce, à quelque titre que ce soit. Il est ainsi rappelé
          au Client ses obligations légales concernant la publication des contenus illégaux.
        </p>

        <p>
          Notamment, Streamfizz ne pourra pas être tenu responsable de la publication ou d'action
          par le Client de :
        </p>

        <ul>
          <li>
            l'exercice d'activités illégales, frauduleuses, ou portant atteinte aux droits ou à la
            sécurité des tiers ;
          </li>
          <li>l'atteinte à l'ordre public ou la violation des lois et règlements en vigueur ;</li>
          <li>
            l'intrusion dans le système informatique d'un tiers ou toute activité de nature à nuire,
            contrôler, interférer, ou intercepter tout ou partie du système informatique d'un tiers,
            en violer l'intégrité ou la sécurité ;
          </li>
          <li>l'envoi de courriels non sollicités ;</li>
          <li>les manipulations destinées à améliorer le référencement d'un site tiers ;</li>
          <li>
            l'aide ou l'incitation, sous quelque forme et de quelque manière que ce soit, à un ou
            plusieurs des actes et activités décrits ci-dessus ;
          </li>
          <li>
            et plus généralement toute pratique détournant la plateforme audiovisuelle à des fins
            autres que celles pour lesquelles elle a été conçue.
          </li>
        </ul>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          8.4. Propriété et licence
        </h3>
        <p>
          Streamfizz SAS n'acquiert en vertu du Contrat aucun droit de propriété relatif aux Données
          Client. Chaque partie reste propriétaire des droits relatifs à ses créations. En
          téléchargeant, affichant ou publiant votre contenu sur les services Streamfizz, vous nous
          accordez une licence mondiale, gratuite, entièrement libérée, non exclusive,
          sous-licenciable et transférable vous permettant d'utiliser, de reproduire, de distribuer,
          d'afficher, de personnaliser et de reformater votre contenu dans le seul but de fournir
          les services pour lesquels votre abonnement vous ouvre les droits. Cette licence nous
          permet de (a) fournir le contenu du Client conformément aux préférences définies par le
          Client à l'aide de la plateforme Streamfizz, (b) sécuriser, coder, reproduire, héberger,
          mettre en cache, router, reformater, analyser et créer des algorithmes et des rapports
          basés sur l'accès au contenu du Client et sur son utilisation, (c) utiliser, améliorer,
          personnaliser, exposer, diffuser, publier, afficher, distribuer, promouvoir, copier,
          stocker, et/ou reproduire (sous n'importe quelle forme) le contenu du Client sur ou via
          les services Streamfizz et sous-traitants de confiance, et (d) utiliser le Contenu client
          pour tester les technologies et processus internes de Streamfizz SAS. Vous nous accordez
          également, et nous autorisez à accorder à chaque spectateurs ou utilisateurs des services
          Streamfizz, une licence non exclusive lui permettant d'afficher le contenu du Client par
          le biais des services Streamfizz. Nous nous réservons le droit de conserver (mais non
          d'afficher, de distribuer ou de publier) les copies du contenu du Client qui ont été
          supprimées ou supprimées des services Streamfizz pendant quinze (15) jours.
        </p>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          8.5. Représentations et garanties
        </h3>
        <p>
          Vous déclarez et garantissez que (a) vous possédez ou disposez des licences, droits,
          consentements et autorisations nécessaires pour utiliser et publier le contenu que vous
          avez soumis, (b) le téléchargement de votre contenu sur les services Streamfizz ainsi que
          les licences accordées à Streamfizz SAS en vertu du présent Contrat ne violent pas et ne
          violeront les droits de personne, et (c) aucun paiement de quelque nature que ce soit ne
          sera dû par Streamfizz SAS à une organisation quelconque pour l'utilisation ou la
          distribution du contenu du Client.
        </p>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          8.6. Contenu interdit
        </h3>
        <p>
          Vous acceptez de ne pas transférer, téléverser ou utiliser en relation avec services
          Streamfizz aucun contenu interdit, y compris, sans limitation, un contenu qui (a) est
          pornographique, sexuellement explicite ou offensant ou contient un lien vers un site
          internet pour adulte, (b) contient de la violence graphique ou gratuite, (c) transmet un
          message de haine ou de violence contre tout individu ou groupe, ou encore l'apologie du
          terrorisme (d) encourage ou glorifie la consommation de drogue, (e) est de nature
          prédatrice ou est soumis à des fins de harcèlement ou d'intimidation, (f) est hautement
          répétitif et/ou indésirable, y compris les messages de "spam", (g) promeut ou incite au
          racisme, au fanatisme, à la haine ou à des dommages physiques de toute nature contre tout
          groupe ou individu, (h) constitue ou promeut des informations que le Client sait être
          fausses ou trompeuses ou encourage des activités illégales ou un comportement abusif,
          menaçant, obscène, diffamatoire ou insultant, (i) fournit ou fait la promotion d'activité
          criminelle ou fournit des informations pédagogiques sur les activités illégales, ou (j)
          viole ou tente de violer les droits à la vie privée, les droits de publicité, les droits
          d'auteur, les droits de marque, les droits contractuels ou tout autre droit de toute
          personne. Nous nous réservons le droit d'enquêter et de prendre les mesures appropriées
          contre toute personne ou organisation qui, à notre entière discrétion, contreviendrait à
          ces dispositions, y compris la suppression du contenu incriminé sans préavis, la
          résiliation ou suspension du compte du Client ou de l'accès aux services Streamfizz et/ou
          le signalement de ce contenu ou de ces activités aux autorités chargées de l'application
          de la loi.
        </p>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          8.7. Conservation et divulgation du contenu
        </h3>
        <p>
          Nous pouvons sauvegarder et stocker le contenu du Client et/ou divulguer le contenu du
          Client si la loi l'exige ou si nous croyons de bonne foi qu'une telle conservation ou
          divulgation est raisonnablement nécessaire pour (a) se conformer aux procédures
          juridiques, (b) respecter le présent accord, (c) répondre aux réclamations selon
          lesquelles tout contenu client viole les droits de toute personne, ou (d) protéger les
          droits, la propriété ou la sécurité personnelle de Streamfizz SAS, des téléspectateurs
          et/ou du public.
        </p>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          8.8. Signaler un contenu
        </h3>
        <p>
          En application de la loi n°2004-575 du 21 juin 2004, Streamfizz est soumis à une
          obligation de retirer tout contenu manifestement illicite, dès lors que nous en aurons eu
          effectivement connaissance. Streamfizz en sa qualité d'hébergeur met à disposition des
          visiteurs, internautes un dispositif facilement accessible et visible, permettant de
          signaler un contenu portant sur :
        </p>

        <ul>
          <li>l'apologie du crime et du terrorisme ;</li>
          <li>l'incitation à la haine raciale ;</li>
          <li>l'incitation à la violence ;</li>
          <li>la pornographie enfantine ;</li>
          <li>l'atteinte à la dignité humaine ;</li>
          <li>l'atteinte aux droits et à la propriété intellectuelle d'un contenu.</li>
        </ul>

        <p>
          Le formulaire de signalement est disponible en cliquant sur le lien "signaler cette vidéo"
          localisé de manière systématique en dessous de chaque vidéo. Il est également possible
          d'adresser un courrier circonstancié à nos Services, Streamfizz SAS, 56 AVENUE HENRI
          GINOUX, 92120, MONTROUGE France, en précisant :
        </p>

        <ul>
          <li>la date à laquelle vous avez constaté ce contenu ;</li>
          <li>votre identité :</li>
          <ul>
            <li>
              personne morale : nom, prénom, profession, domicile, nationalité, date et lieu de
              naissance
            </li>
            <li>
              ou physique : sa forme, sa dénomination, son siège social et l'organe représentant
              légalement ;
            </li>
          </ul>
          <li>l'adresse URL du contenu litigieux ;</li>
          <li>la description des faits ;</li>
        </ul>

        <p>
          Dans le cadre d'une demande pour atteinte aux droits et à la propriété intellectuelle d'un
          contenu, il faut ajouter :
        </p>

        <ul>
          <li>
            le nom et domicile du destinataire ou s'il s'agit une personne morale, sa dénomination
            et son siège social ;
          </li>
          <li>les motifs de retrait ;</li>
          <li>
            la copie de la correspondance adressée à l'auteur ou à l'éditeur des informations ou
            activités litigieuses demandant leur interruption, leur retrait ou leur modification, ou
            la justification de ce que l'auteur ou l'éditeur n'a pu être contacté.
          </li>
        </ul>

        <p>Attention toute notification incomplète ne pourra être considérée comme valide.</p>

        <p>
          Lors du signalement d'un contenu auprès de nos Services, nos équipes mèneront une
          investigation et suivront la procédure suivante :
        </p>

        <ul>
          <li>
            Si le contenu contrevient effectivement aux règles, celui-ci sera supprimé de La
            plateforme et une notification au détenteur du compte Client que son contenu a été
            supprimé, éventuellement complété par un avertissement ou suppression du compte en
            fonction de la gravité de l'infraction.
          </li>
          <li>
            Si le contenu ne contrevient pas aux règles, celui-ci ne sera pas supprimé de La
            plateforme Streamfizz et une notification sera envoyé au détenteur du compte Client que
            son contenu a été signalé, sans nécessairement dévoilé l'identité du signalant.
          </li>
        </ul>

        <p>
          À toutes fins utiles, il est rappelé que le fait, pour toute personne, de présenter un
          contenu ou une activité comme étant illicite dans le but d'obtenir le retrait ou d'en
          faire cesser la diffusion, alors qu'elle sait cette information inexacte, est puni d'un an
          d'emprisonnement et de 15000 euros d'amende.
        </p>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          8.9. Informations statistiques
        </h3>
        <p>
          Streamfizz peut surveiller l'utilisation par le Client et les spectateurs, visiteurs ou
          utilisateurs des services et de la plateforme Streamfizz et compiler les données des
          spectateurs, visiteurs ou utilisateurs avec d'autres données de manière globale et anonyme
          afin de générer des informations statistiques et de performance ("informations
          statistiques"). Streamfizz utilise les informations statistiques pour produire des
          rapports et améliorer et personnaliser les services Streamfizz. Streamfizz SAS peut rendre
          publiques ces informations statistiques, à condition que ces informations statistiques :
          (a) puissent être anonymisées, (b) n'inclut aucune donnée permettant l'identification du
          Client, d'un utilisateur ou d'un visiteur, ou (c) ne constituerait pas de divulgation
          d'informations confidentielles. Streamfizz SAS conserve tous les droits, titres et
          intérêts relatifs à ces informations statistiques.
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          Article 9. Durée et résiliation
        </h2>
        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">9.1. Terme</h3>
        <p>
          Le présent Contrat commencera à la date indiquée lors de la première commande et restera
          en vigueur jusqu'à la fin de la durée d'abonnement, à moins qu'il ne soit résilié plus tôt
          conformément aux conditions du présent Contrat (la "Durée initiale"). Votre abonnement
          sera automatiquement renouvelé à la fin de la période de la Durée initiale pour une
          période supplémentaire équivalente à celle-ci et continuera à être renouvelé pour des
          périodes successives équivalentes par la suite (chacune étant une "Période de
          renouvellement"). À moins que vous ne nous avisiez par écrit de votre intention de ne pas
          renouveler votre abonnement au moins trente (30) jours avant l'expiration de la durée
          initiale ou de la période de renouvellement. Vous devez annuler les services au moins
          trente (30) jours avant l'expiration de la durée initiale ou de la période de
          renouvellement afin d'éviter d'être facturée pour une nouvelle période de renouvellement.
          Le paiement des services pour la période de renouvellement est dû le premier jour de la
          période de renouvellement et sera automatiquement débité du compte que vous avez utilisé
          pour votre abonnement initial. Streamfizz SAS peut augmenter le prix du renouvellement de
          tout service Streamfizz pour une période de renouvellement de cinq pour cent (5%) maximum
          par rapport au prix applicable de la commande précédente, à moins que nous ne vous
          informions par écrit de la tarification différente au moins 90 jours avant le paiement.
        </p>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          9.2. Résiliation
        </h3>
        <p>
          Chacune des parties peut résilier le présent Contrat avec effet immédiat dès notification
          écrite : (a) si l'autre partie manque substantiellement à une obligation importante en
          vertu du présent Contrat et ne remédie pas à la violation dans les trente (30) jours
          suivant la réception d'un avis écrit de la part de la partie non responsable, ou (b) si
          l'autre partie fait l'objet d'une requête en faillite ou procédure relative à son
          insolvabilité, sa mise sous séquestre ou sa liquidation, dans quelque juridiction que ce
          soit, qui n'est pas licenciée dans les quatre-vingt-dix (90) jours de son ouverture ou
          cédée pour le bénéfice des créanciers.
        </p>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          9.3. Effet de résiliation
        </h3>
        <p>
          À l'expiration ou à la résiliation des services Streamfizz pour quelque raison que ce
          soit, votre droit d'accéder aux services Streamfizz et de les utiliser prend fin. Dès lors
          tout le contenu Client sera désactivé et ne sera plus accessible en public. Le Contenu
          client et ne sera plus accessible que par le détenteur du compte pour la réversibilité des
          données. Si vous résiliez le présent Contrat ou toute commande client uniquement en raison
          d'une violation substantielle de ce Contrat par nous, nous nous engageons à rembourser
          tous les frais payés d'avance pour la partie restante de la durée de l'abonnement pour les
          services Streamfizz résiliés dans les soixante (60) jours suivant la date de résiliation.
          Si nous résilions le présent Contrat ou toute commande client pour votre violation
          substantielle, tous les frais indiqués dans cette commande client seront immédiatement dus
          et payables.
        </p>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          9.4. Réversibilité
        </h3>
        <p>
          À la fin de la période d'abonnement, vous aurez le droit d'extraire le contenu Client
          stocké à l'aide des services Streamfizz pendant une période de sept (7) jours après la
          résiliation (la "Période d'extraction"). Streamfizz mettra à disposition du Client les
          éléments nécessaires au bon fonctionnement du système. Les éléments fournis par la
          plateforme sont :
        </p>

        <ul>
          <li>l'ensemble des médias (vidéos, images, sons…) via support physique ou transfert ;</li>
          <li>
            les bases de données via support physique ou transfert. Les bases contiennent les
            données contextuelles (description des vidéos, titres, mots clés…).
          </li>
        </ul>

        <p>
          Après la Période d'extraction, Streamfizz SAS se réserve le droit de supprimer à tout
          moment tout le contenu Client, les données Client et les bases de données et d'annuler
          votre compte chez nous.
        </p>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          9.5. Survie de droits et obligations
        </h3>
        <p>
          Pour éviter toute confusion, il est rappelé qu'en cas de résiliation du présent Contrat
          pour quelque raison que ce soit, le Client doit payer toutes les sommes dues en vertu des
          présentes. Il est rappelé que la licence attribuée conformément à l'article 8 survit à la
          résiliation du présent Contrat, conformément aux stipulations de cet article. Les articles
          6.4, 7.1, 7.4, 8.1, 8.4, 8.8, 9, 14, 15, 16, 17 du présent Contrat, ainsi que toute autre
          disposition nécessaire à leur construction ou à leur exécution, survivront à la
          résiliation du présent Contrat pour quelque motif que ce soit et resteront en vigueur
          indéfiniment et de manière non limitative.
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          Article 10. Support et maintenance technique
        </h2>
        <p>
          Le Client reconnaît avoir vérifié l'adéquation du service Streamfizz à ses besoins et
          avoir reçu de Streamfizz SAS toutes les informations et conseils qui lui étaient
          nécessaires pour utiliser la plateforme Streamfizz en connaissance de cause.
        </p>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">10.1. Support</h3>
        <p>
          Sauf stipulation contraire, Streamfizz SAS est responsable des actes commis par son
          personnel et ses sous-traitants. Streamfizz SAS a pour obligations de faire ses meilleurs
          efforts pour maintenir Streamfizz et son support à la disposition du Client dans les
          meilleurs délais. Streamfizz SAS fournit un support par mail, tchat et téléphonique au
          Client. Le support est accessible durant les horaires de bureau (du lundi au vendredi, de
          09h00 à 17h00) des jours ouvrés, sauf accord spécifique préalablement défini entre le
          Client et Streamfizz SAS, et expressément validé par Streamfizz SAS.
        </p>

        <p>
          Le support couvre l'utilisation de La plateforme Streamfizz ainsi que la remontée des
          dysfonctionnements constatés. Sont exclues du support les demandes de modifications de
          fonctionnalités de la plateforme, qui doivent faire l'objet d'un devis spécifique. Le
          volume horaire du support est défini dans le devis.
        </p>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          10.2. Résolution des dysfonctionnements
        </h3>
        <p>
          Streamfizz SAS s'engage sur le maintien en bon fonctionnement de La plateforme Streamfizz,
          par des actions de maintenance. Nous nous engageons notamment à effectuer, durant les
          heures de bureau des jours ouvrés français, toute intervention susceptible de contribuer à
          la bonne disponibilité de la plateforme Streamfizz. Nous définissons deux types de
          dysfonctionnements :
        </p>

        <ul>
          <li>
            <strong>Mineur :</strong> plateforme Streamfizz partiellement utilisable (exemples :
            impossibilité de connexion tout en ayant la possibilité de consultation de médias,
            impossibilité de modifier la vignette d'un média, impossibilité d'ajouter un nouveau
            média, etc.) ;
          </li>
          <li>
            <strong>Majeur :</strong> plateforme Streamfizz inaccessible.
          </li>
        </ul>

        <p>
          Pour la résolution des dysfonctionnements, nous disposons d'une possibilité d'action
          directe pour :
        </p>

        <ul>
          <li>les problèmes de comportement de La plateforme Streamfizz ;</li>
          <li>les problèmes d'intégrité des données ;</li>
          <li>l'accès direct aux contenus audiovisuels.</li>
        </ul>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          10.3. Engagement de délais
        </h3>
        <p>
          Streamfizz SAS s'engage sur une Garantie de Temps d'Intervention ("GTI") de une (1) heure
          ouvrée française. Pour les dysfonctionnements sur lesquels nous disposons d'une
          possibilité d'action directe, on s'engage sur les Garanties de Temps de Rétablissement
          ("GTR") suivantes :
        </p>

        <ul>
          <li>
            <strong>Dysfonctionnement mineur :</strong> deux (2) jours ouvrés français ;
          </li>
          <li>
            <strong>Dysfonctionnement majeur :</strong> un (1) jour ouvré français.
          </li>
        </ul>

        <p>
          Streamfizz SAS n'est pas engagé sur le temps de rétablissement des fonctionnalités de la
          plateforme Streamfizz qui dépendent intrinsèquement de ses fournisseurs techniques ou de
          tiers.
        </p>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          10.4. Ce que comprend la maintenance
        </h3>
        <ul>
          <li>
            la sauvegarde hors site de La plateforme Streamfizz, des bases de données, et des
            données audiovisuelles, tel que détaillé dans l'Article 13.3 ;
          </li>
          <li>
            les mesures préventives qui sembleront nécessaires à Streamfizz afin de garantir la
            stabilité, la cohérence, et la sécurité de la plateforme audiovisuelle sans avoir à
            obtenir l'accord préalable du Client ;
          </li>
          <li>la supervision de la plateforme : présence en ligne, rapidité de fonctionnement.</li>
        </ul>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          10.5. Ce que ne comprend pas la maintenance
        </h3>
        <ul>
          <li>les modifications ou ajouts de vidéos, sons, images, etc. ;</li>
          <li>
            l'organisation de la banque audiovisuelle : le Client a notamment en charge la
            suppression des médias en plusieurs exemplaires qu'il aura lui-même inséré ;
          </li>
          <li>la résolution de problèmes suite à une mauvaise manipulation du Client ;</li>
          <li>
            la résolution de problèmes de sécurité résultant d'une faute manifeste du Client : vol
            de mot de passe, usage non prévu de la plateforme, etc. ;
          </li>
          <li>la conservation des fichiers médias initiaux ayant servi au dépôt.</li>
        </ul>

        <h2 className="text-2xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          Article 11. Sous-traitants
        </h2>
        <p>
          Nous pouvons faire appel à des sous-traitants tiers pour fournir de temps à autre un
          nombre limité de services, y compris le stockage et le traitement de données et la
          livraison de contenu ("sous-traitants"). Vous consentez à ce que nous sous-traitions ces
          services aux sous-traitants, à condition que Streamfizz SAS veille à ce que ces
          sous-traitants se conforment aux dispositions du présent Contrat applicables à Streamfizz
          et que Streamfizz SAS reste responsable envers le client pour toute violation du présent
          Contrat par un sous-traitant.
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          Article 12. Services de tiers
        </h2>
        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          12.1. Services non Streamfizz
        </h3>
        <p>
          Le Client peut choisir d'intégrer, de connecter ou d'utiliser les services Streamfizz à
          d'autres services non fournis par Streamfizz ("Services non-Streamfizz"). Et, ce faisant,
          autorise Streamfizz à interagir avec les services non-Streamfizz et à partager les données
          et le contenu du Client avec les services non-Streamfizz conformément aux instructions du
          Client ou des services non-Streamfizz. Si le Client utilise des services non-Streamfizz :
          (a) Streamfizz SAS ne garantit ni ne prend en charge les services non-Streamfizz, (b)
          entre Streamfizz et le Client, le Client assume toute la responsabilité des services
          non-Streamfizz et de toute divulgation, modification ou suppression de ces derniers ou
          concernant les données du Client sur les services non-Streamfizz, et (c) Streamfizz SAS
          n'auront aucune responsabilité, et le Client ne sera pas libéré de ses obligations de
          facturation en vertu du Contrat ou ne pourra prétendre à aucun remboursement, crédit ou
          autre compensation, en raison de l'indisponibilité des services non-Streamfizz ou tout
          changement dans la capacité de Streamfizz à interagir avec les services non-Streamfizz.
        </p>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          12.2. Garantie des services non-Streamfizz
        </h3>
        <p>
          Le Client garantit que s'il utilise les services pour télécharger ou rendre public son
          contenu à des services tiers, y compris, mais sans s'y limiter, YouTube, Facebook,
          Twitter, LinkedIn, Periscope, Twitch, ce contenu doit être conforme aux conditions
          d'utilisation des tiers (par exemple, les conditions d'utilisations de YouTube) en vigueur
          et comme mis à jour de temps en temps. Nous vous suggérons vivement de les consulter
          régulièrement et vous tenir informé des évolutions.
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          Article 13. Professional services
        </h2>
        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          13.1. Service de mise à disposition
        </h3>
        <p>
          Streamfizz SAS fournira les Professional Services ("Services Professionnels") (le cas
          échéant) achetés comme indiqué dans la commande Client applicable. Les parties
          reconnaissent que la portée des Services Professionnels en vertu du présent Contrat
          comprend uniquement : (a) une assistance pour le déploiement et l'utilisation des services
          Streamfizz, ou (b) le développement ou la fourniture des services supplémentaires liés aux
          services Streamfizz. Le Client dispose d'un droit de licence pour utiliser tout ce qui a
          été livré dans le cadre des Services Professionnels, conformément aux termes de sa licence
          d'utilisation des services Streamfizz, mais Streamfizz SAS conserve tous les droits,
          titres et intérêts relatifs à tout produit, code ou produit livrable et tout dérivé,
          amélioration ou modification de celui-ci. La portée des Services Professionnels doit être
          comme définie dans un Cahier Des Charges ("CDC") exécuté par les deux parties ou comme
          indiqué dans le bon de commande applicable décrivant les travaux à exécuter, les
          honoraires, les dépendances et autres spécifications techniques ou informations connexes.
          Le Client doit payer Streamfizz SAS aux montants indiqués dans le bon de commande ou dans
          le CDC applicable. Le Client remboursera à Streamfizz SAS les frais de déplacement et
          d'hébergement raisonnables préalablement approuvés et engagés.
        </p>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          13.2. Services de support
        </h3>
        <p>
          Tous les services de support, y compris le développement, liés à l'utilisation des
          services Streamfizz seront facturés aux tarifs indiqués dans le bon de commande ou le CDC
          applicable.
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          Article 14. Garantie
        </h2>
        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">14.1. Garantie</h3>
        <p>
          Streamfizz SAS garantit que, pendant la durée de l'abonnement, les services Streamfizz
          fonctionneront sans défaillance, conformément à la Présentation du produit et à la
          documentation (dans le cas contraire considérable comme un "Défaut"). Le recours exclusif
          du Client en cas de violation de cette garantie consiste pour Streamfizz SAS à corriger ou
          à contourner le Défaut sur demande, sous réserve et conformément aux procédures et
          limitations de Streamfizz SAS concernant l'assistance. Si le Défaut persiste à rendre une
          défaillance du service Streamfizz, sans correction ni travail environ quarante-cinq (45)
          jours après notification écrite à Streamfizz SAS d'une réclamation au titre de la garantie
          du présent article 14.1, le Client peut alors résilier le Contrat. Le service Streamfizz
          concerné et Streamfizz SAS rembourseront au Client les frais d'abonnement prépayés
          couvrant le reste de la durée d'abonnement du service Streamfizz concerné après la date de
          résiliation.
        </p>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">14.2. Sécurité</h3>
        <p>
          Streamfizz SAS s'engage à maintenir des mesures de protection administratives, physiques
          et techniques appropriées conçues pour protéger la sécurité des services Streamfizz et des
          Données client conformément aux normes de sécurité de Streamfizz SAS et conformément au
          règlement 2016/679 (la "RGPD") si celui-ci implique le traitement de données à caractère
          personnel dans et hors de l'Espace économique européen ou de la Suisse vers tout pays non
          considéré par la Commission européenne.
        </p>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          14.3. Limitation de garanties
        </h3>
        <p>
          À l'exception des garanties expressément énoncées dans le présent Contrat, dans la mesure
          maximale permise par la Loi applicable, Streamfizz SAS décline toute responsabilité
          notamment (a) due à une mauvaise utilisation du Client, (b) suite à une intervention
          technique du Client ou d'un tiers autre que Streamfizz (c) correspondant à une clause de
          non-responsabilité des présentes Conditions Générale d'Utilisations, (d) suite à une
          négligence, à un défaut de gestion du Client.
        </p>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          14.4. Maintenance, correctif et mise à jour
        </h3>
        <p>
          Streamfizz SAS s'engage à déployer les efforts commercialement raisonnables pour s'assurer
          que la disponibilité des services Streamfizz sera ininterrompue et que les transmissions
          seront sans erreur. Cependant, votre accès aux services Streamfizz peut être
          occasionnellement suspendu ou limité pour permettre la mise en place de correctifs, de
          maintenance technique ou l'introduction de nouvelles mises à jour, fonctionnalités ou
          services. Nous tenterons de limiter la fréquence et la durée d'une telle suspension ou
          restriction, et nous déploierons tous les efforts commercialement raisonnables pour vous
          alerter ou vous informer en cas de suspensions des services, programmés ou non. En raison
          de la nature des pannes techniques, nous ne pouvons pas garantir la notification avant les
          pannes imprévues. Nous ne serons pas tenus responsables de tout retard ou manquement à nos
          obligations en vertu de ces conditions si le retard ou l'échec résulte d'une cause
          échappant à notre contrôle raisonnable.
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          Article 15. Limitations de responsabilités et dommages
        </h2>
        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          15.1. Limitations de responsabilité
        </h3>
        <p>
          Dans la mesure permise par la loi applicable, la responsabilité maximale globale de chaque
          partie en vertu du présent Contrat, qu'elle soit fondée sur un contrat, de délit ou de
          toute autre théorie juridique ou équitable, est limitée aux montants versés par le Client
          pour les services fournissant la prestation et donnant lieu à réclamation au cours de la
          période de douze (12) mois avant le premier événement et engageant la responsabilité. La
          limitation de la responsabilité qui précède ne s'applique pas : (a) sur les obligations
          d'indemnisation de propriété intellectuelle de l'une des parties, (b) l'infraction aux
          lois sur la protection de la vie privée et (c) l'obligation du Client de payer les
          montants des services Streamfizz.
        </p>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          15.2. Exclusion de préjudices
        </h3>
        <p>
          Dans la mesure permise par la loi applicable, ni le Client ni Streamfizz SAS ne pourra
          être tenu responsable en vertu du présent Contrat, (a) des dommages indirects, spéciaux,
          accidentels, accessoires ou punitifs, ou (b) des pertes d'utilisation et/ou données,
          pertes de commandes, opportunités d'affaires, activités, clients, manque à gagner, chiffre
          d'affaires, perte de bénéfice ou atteinte à l'image de marque (dans chaque cas, directs ou
          indirects), même si la partie était ou devrait savoir que de tels dommages sont
          prévisibles, notamment lors de pertes d'exploitation résultant d'une indisponibilité
          temporaire ou permanente, partielle ou totale des services Streamfizz. Les exclusions
          précédentes ne s'appliquent pas (a) aux obligations d'indemnisation en matière de
          propriété intellectuelle et (b) aux violations de la loi sur la protection de la vie
          privée.
        </p>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          15.3. Continuité des services et protection des données
        </h3>
        <p>
          En cas de faute du Client, Streamfizz SAS décline toute responsabilité (a) en cas
          d'intrusions malveillantes de tiers sur la plateforme et services Streamfizz ou dans les
          boîtes aux lettres électroniques du Client, (b) de vol et détournements éventuels de mots
          de passe, codes confidentiels, et plus généralement de toute information à caractère
          sensible pour le Client, (c) de contamination par virus des données ou logiciels du
          Client, il est rappelé que la protection de ceux-ci incombe au Client, (d) de dommages que
          pourraient subir les équipements du Client, Streamfizz SAS et les services Streamfizz
          n'ayant aucune intervention à faire sur ceux-ci.
        </p>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          15.4. Interruption pour maintenance et dysfonctionnement
        </h3>
        <p>
          Pour des raisons de maintenance, en liaison avec le Client, Streamfizz SAS se réserve le
          droit d'interrompre temporairement l'accès à la plateforme Streamfizz dans le cadre des
          niveaux de service. Cependant, Streamfizz s'engage à mettre en œuvre tous les moyens dont
          il dispose pour minimiser ce type d'interruption. Streamfizz SAS est non-responsable de la
          perte de revenus due à une interruption ou une défaillance de service.
        </p>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          15.5. Limites de responsabilité
        </h3>
        <p>
          Streamfizz SAS s'engage à tout mettre en œuvre pour sécuriser les données du Client dans
          la limite de son champ d'action, au moyen de la mise en application des bonnes pratiques
          informatiques, et la réalisation de sauvegardes externes des données applicatives et
          audiovisuelles.
        </p>

        <p>
          Streamfizz SAS ne saurait être tenu pour responsable du non-respect total ou partiel d'une
          obligation du Client ou d'une défaillance des opérateurs des réseaux de transport vers le
          monde internet, et en particulier de ses fournisseurs techniques. À ce titre, Streamfizz
          SAS informe le Client que ses prestations et/ou services sont indépendants d'autres
          opérateurs techniques et que sa propre responsabilité ne peut être engagée par leur
          défaillance. Streamfizz SAS s'engage à tenir informé le Client des dysfonctionnements que
          rencontrent ses fournisseurs techniques qui impactent la plateforme Streamfizz.
        </p>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          15.6. Dommages et intérêts
        </h3>
        <p>
          Le Client s'engage à prendre à sa charge toute réclamation ou procédure quelle qu'en soit
          la forme, l'objet, ou la nature qui serait formée contre Streamfizz et qui se rattacherait
          aux obligations mises à la charge du Client au titre du présent contrat. En tout état de
          cause, le montant des dommages et intérêts qui pourraient être mis à la charge de
          Streamfizz SAS, si sa responsabilité était engagée, sera limité au montant des sommes
          effectivement versées par le Client à Streamfizz SAS pour la période considérée ou
          facturée au Client par le Streamfizz SAS, ou au montant des sommes correspondant au prix
          de la prestation, pour la part du service Streamfizz pour laquelle la responsabilité de
          Streamfizz a été retenue. Sera pris en considération le montant le plus faible de ces
          sommes.
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          Article 16. Vie privée et informations confidentielles
        </h2>
        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          16.1. Politique de confidentialité
        </h3>
        <p>
          Notre collecte et l’utilisation de vos informations et des informations concernant vos
          spectateurs, visiteurs ou utilisateurs sont régies par notre politique de confidentialité.
          Vous comprenez qu’en utilisant les services Streamfizz, vous consentez à la collecte et à
          l’utilisation de ces informations. Dans le cadre de la fourniture des services Streamfizz,
          il se peut que nous devions vous fournir certaines communications, telles que des annonces
          de services et des messages administratifs. Ces communications sont considérées comme
          faisant partie des services Streamfizz et de votre compte.
        </p>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          16.2. Informations confidentielles
        </h3>
        <p>
          Chaque partie (la “Partie destinataire”) comprend que l’autre partie (la “Partie
          divulgatrice”) a divulgué ou peut divulguer des informations relatives aux activités de la
          Partie divulgatrice (ensemble : “Informations confidentielles” de la “Partie
          divulgatrice”). Ces informations incluent, sans limitation, les informations relatives à
          la tarification des services, Données client, documents, savoir-faire, bases de données,
          identifiants, mots de passe et, codes confidentiels en provenance de l’autre partie dont
          elle pourrait avoir eu connaissance à l’occasion de l’exécution du contrat, et ne devra
          les divulguer à quelques tiers que ce soit, ni les utiliser en dehors des besoins du
          contrat. La Partie destinataire s’engage (a) à prendre des précautions raisonnables pour
          protéger ces informations confidentielles et (b) ne pas utiliser (sauf dans es cas permis
          dans le présent Contrat) ni divulguer à des tiers ces informations personnelles. La Partie
          destinataire peut divulguer des informations confidentielles lorsque leur divulgation est
          requise par un tribunal compétent ou par une autre autorité gouvernementale, à condition
          toutefois que la Partie destinataire envoie un préavis écrit à l’autre d’une telle
          ordonnance, dans la mesure permise par la loi applicable, et limite la divulgation à la
          portée d’une telle ordonnance. La Partie destinataire retourne immédiatement à la Partie
          divulgatrice ou détruit (avec la certification de cette destruction fournie par la Partie
          destinataire sur demande) toutes les informations confidentielles de la Partie
          divulgatrice en sa possession ou sous son contrôle à la demande de la Partie divulgatrice.
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          Article 17. Assurances
        </h2>
        <p>
          Chacune des Parties déclare être assurée, notamment en responsabilité civile
          professionnelle, auprès d’une compagnie notoirement solvable et maintenir à jour toutes
          les polices d’assurance, pour couvrir, sans préjudice des stipulations de l’article 12 et
          13, les dommages causés à l’autre Partie consécutifs à l’exécution ou l’inexécution des
          présentes. Chaque Partie s’engage à remettre à l’autre Partie à tout moment, à première
          demande, les justificatifs attestant de la souscription des assurances.
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          Article 18. Dispositions générales
        </h2>
        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">18.1. Cession</h3>
        <p>
          Vous ne pouvez pas céder le présent Contrat, ni aucun des droits ou des obligations qui en
          découlent, en tout ou en partie, à des tiers sans notre consentement écrit préalable. Nous
          pouvons céder le présent Contrat, ainsi qu’une quelconque de nos obligations ou de nos
          droits, à une entité remplaçante résultant d’une fusion, d’une acquisition ou d’une
          consolidation impliquant les services Streamfizz ou Streamfizz SAS.
        </p>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">18.2. Conflit</h3>
        <p>
          En cas de conflit entre les présentes conditions d’utilisation et une commande Client, les
          conditions de la commande Client prévalent.
        </p>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">18.3. Avis</h3>
        <p>
          Sauf indication contraire dans les présentes CGU, tous les avis doivent être écrits et
          réputés avoir été reçus (a) en livraison personnelle, (b) lorsqu’il est reçu par le
          destinataire s’il est envoyé par un service de messagerie rapide internationalement
          reconnu (accusé de réception), (c) le deuxième jour ouvrable après l’envoi, ou (d) le
          premier jour ouvrable après l’envoi par courrier électronique, sauf que ce courrier ne
          sera pas suffisant pour les notifications de résiliation ou concernant une réclamation.
          Les avis sont envoyés aux parties comme indiqué dans la commande, la page de signature du
          présent Contrat (le cas échéant) ou tel que convenu autrement par les parties par écrit.
        </p>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          18.4. Publicité
        </h3>
        <p>
          Sauf indication contraire de la part du Client par écrit, vous nous autorisez à vous
          inscrire en tant que Client et à utiliser votre logo standard pour utilisation
          promotionnelle et marketing pendant la durée de l’abonnement.
        </p>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          18.5. Force majeure
        </h3>
        <p>
          Toutes circonstances indépendantes de la volonté des parties, empêchant l’exécution dans
          des conditions normales de leurs obligations, sont considérées comme des causes
          d’exonération des obligations des parties et entraînent leur suspension. Aucune des deux
          parties ne sera tenue pour responsable vis-à-vis de l’autre de la non-exécution ou des
          retards dans l’exécution d’une obligation du contrat qui seraient dus au fait de l’autre
          partie consécutivement à la survenance d’un cas de force majeure habituellement reconnu
          par la jurisprudence et les tribunaux français. En aucun cas, la responsabilité de
          Streamfizz ne pourra être recherchée en cas de force majeure habituellement reconnue par
          la jurisprudence et les tribunaux français, événement ou incident indépendant de la
          volonté de Streamfizz SAS. Constitue un cas de force majeure tout événement hors de
          contrôle, inévitable et indépendant de la volonté des parties. Ces causes incluent, sans
          limitation, les accidents, les catastrophes naturelles, les conflits de travail, le
          blocage des moyens de transports ou d’approvisionnements, panne d’électricité, les actions
          de tout organisme gouvernemental, la pénurie matérielle, les actes de terrorisme ou la
          stabilité ou la disponibilité d’Internet ou d’une partie de celui-ci. La partie qui
          invoque les circonstances visées ci-dessus doit avertir immédiatement l’autre partie de
          leur survenance, ainsi que de leur disparition.
        </p>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          18.6. Renonciation et amendement
        </h3>
        <p>
          Une renonciation à un droit n’est effective que si elle est écrite et seulement contre la
          partie qui a signé cet écrit et pour les circonstances indiquées. Toute modification de
          cet accord doit être écrite et signée par les deux parties.
        </p>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          18.7. Relation des parties
        </h3>
        <p>
          Les parties sont réputées être des entrepreneurs et entreprises indépendantes. Aucune
          disposition du présent Contrat ne doit être interprétée comme créant une relation de
          partenariat, de coentreprise ou d’agence.
        </p>

        <h3 className="text-xl font-bold tracking-tight text-gray-900 pb-4 pt-8">
          18.8. Droit applicable, lieu, le temps d’action
        </h3>
        <p>
          Le présent contrat est soumis à la loi française. En cas de litige survenant à l’occasion
          du contrat, tant pour ce qui concerne son interprétation que son exécution, et
          éventuellement après une tentative de recherche d’une solution amiable, le litige sera
          soumis sera soumis à la compétence exclusive du Tribunal de Commerce de Lyon (69).
        </p>

        <p>
          Pour toute question relative aux présentes Conditions Générales d’Utilisations ou pour
          obtenir une version PDF, envoyez un e-mail à :{' '}
          <a href="mailto:contact@streamfizz.fr">contact@streamfizz.fr</a>
        </p>
      </div>
    </Container>
    </>
  )
}
