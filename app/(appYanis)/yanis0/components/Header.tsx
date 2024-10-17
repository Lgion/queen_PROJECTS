import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-arcade neon-text text-neon-blue">Cybergamer</h1>
        <nav>
          <ul className="flex space-x-4">
            {['Présentation', 'Jeux', 'Événements', 'Tarifs', 'Contact'].map((item) => (
              <li key={item}>
                <Link href={`#${item.toLowerCase()}`} className="font-arcade text-sm hover:text-neon-purple transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}