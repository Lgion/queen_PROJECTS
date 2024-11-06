import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-8">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">GameExpo</h3>
            <p>Le plus grand salon de jeux vidéo de l'année</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li><Link href="/programme">Programme</Link></li>
              <li><Link href="/exposants">Exposants</Link></li>
              <li><Link href="/infos-pratiques">Infos Pratiques</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary"><Facebook /></a>
              <a href="#" className="hover:text-primary"><Twitter /></a>
              <a href="#" className="hover:text-primary"><Instagram /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 GameExpo. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;