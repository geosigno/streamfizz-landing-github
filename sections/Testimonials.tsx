import Testimonial from '../components/Testimonial'
import Title from '../components/Title'

export default function Testimonials() {
  const testimonials = [
    {
      content:
        'Nous avons pu rendre la diffusion en direct simple et accessible pour les clients du Centre des Congrès de Lyon. Leur accompagnement personnalisé a fait toute la différence dans notre transition vers une stratégie vidéo ambitieuse.',
      author: {
        name: 'Frédéric JACOB',
        role: 'Responsable Pôle Technologique, Centre de Congrès de Lyon',
        companyLogo: '/logo/gl-events-logo-vector.png',
      },
    },
    {
      content:
        'Nous avons trouvé une solution fiable et performante pour valoriser l’ensemble de nos archives vidéo. La plateforme nous permet de gérer, diffuser et sécuriser nos contenus de manière fluide et ergonomique, tout en facilitant leur accès au public. En plus, l’équipe, basée en France, est à l’écoute du client et réactive. Streamfizz est un véritable atout pour les Archives Départementales.',
      author: {
        name: 'Thierry CASAMAYOR',
        role: 'Technicien Audiovisuel - Archives départementales 94',
        companyLogo: '/logo/Logo-archives94-1.png',
      },
    },
    {
      content:
        'La Région Occitanie diffuse de nombreux événements internes en direct en toute autonomie et en gardant le contrôle total sur les contenus et sur les spectateurs ciblés. Nous apprécions cette solution française, ergonomique et fluide, parfaitement adaptée à nos besoins. La partie statistiques est notamment un vrai plus pour nos équipes de communication. Un grand merci aux équipes techniques pour leur disponibilité et leur accompagnement.',
      author: {
        name: 'Anthony GOYET',
        role: 'Technicien Visio & Audiovisuel, Région Occitanie',
        companyLogo: '/logo/occitanie.png',
      },
    },
    {
      content:
        'Streamfizz est une plateforme parfaite pour dynamiser nos WebTV ! Facile à utiliser, fiable et complète, elle nous permet de diffuser et éditorialiser nos contenus vidéo pour illustrer l’incroyable richesse de la région Auvergne-Rhône-Alpes. Un véritable levier de promotion pour notre territoire !',
      author: {
        name: 'Valérie BACQUENOIS ',
        role: 'Auvergne-Rhône-Alpes Tourisme',
        companyLogo: '/logo/logo-aura-tourisme.png',
      },
    },
  ]

  return (
    <section className="mx-auto max-w-7xl px-6 py-6 lg:py-12">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <Title
          level={2}
          text="Ils nous font confiance"
          subtitle="Découvrez ce que nos clients disent de notre plateforme"
        />
        <p className="mt-4 font-light text-muted-foreground"></p>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        {testimonials.map((testimonial, idx) => (
          <Testimonial key={idx} content={testimonial.content} author={testimonial.author} />
        ))}
      </div>
    </section>
  )
}
