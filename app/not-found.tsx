import Image from 'next/image'
import Link from 'next/link'
import Container from '../components/Container'
import { Button } from '../components/ui/button'
import image404 from '../public/img/404.png'

export default function NotFound() {
  return (
    <Container>
      <div className="max-w-md mx-auto">
        {/*   <h1 className="mb-4 text-7xl font-bold text-center dark:text-white">404</h1> */}

        <div className="relative w-full h-64 my-8 md:h-80">
          <Image
            src={image404}
            alt="Erreur 404"
            fill
            priority
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 500px"
          />
        </div>

        <p className="mb-8 text-2xl font-medium text-center">
          Oups, la page fait une pause café.
          <span className="block text-base font-default text-muted-foreground mt-2">
            {' '}
            Partez à la découverte du reste de notre site !
          </span>
        </p>

        <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
          <Link href="/">
            <Button variant="primary" className="w-full sm:w-auto">
              Aller à l'accueil
            </Button>
          </Link>
          <Link href="/blog">
            <Button variant="outline" className="w-full sm:w-auto">
              Visiter le blog
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  )
}
