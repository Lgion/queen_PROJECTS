import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-orange-800 text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Beauté d'Abidjan</h3>
          <p>Votre destination beauté et bien-être à Abidjan</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
          <ul className="space-y-2">
            <li><Link to="/products">Produits</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/about">À propos</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Nous contacter</h4>
          <p>123 Rue du Commerce, Abidjan</p>
          <p>Téléphone: +225 XX XX XX XX</p>
          <p>Email: info@beautedabidjan.com</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
          <div className="flex space-x-4">
            <Facebook />
            <Instagram />
            <Twitter />
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2024 Beauté d'Abidjan. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;