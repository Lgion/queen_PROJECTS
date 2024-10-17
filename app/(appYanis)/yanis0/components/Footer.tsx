import Link from 'next/link'

export default function Footer() {
  return (
    <footer id="contact" className="bg-black py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-arcade mb-8 neon-text text-neon-blue">Contact</h2>
        <p className="mb-2">Adresse : Rue des Gamers, Abidjan, Côte d&apos;Ivoire</p>
        <p className="mb-2">Téléphone : +225 07 07 07 07 07</p>
        <p className="mb-8">Email : contact@cybergamer.ci</p>
        <div className="flex justify-center space-x-6 mb-8">
          {['Facebook', 'Instagram', 'Twitch'].map((social) => (
            <Link key={social} href="#" className="text-neon-purple hover:text-neon-pink transition-colors">
              {social}
            </Link>
          ))}
        </div>
        <p className="text-sm text-gray-500">© 2023 Cybergamer. Tous droits réservés.</p>
      </div>
    </footer>
  )
}